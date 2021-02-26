/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

class Main extends egret.DisplayObjectContainer {
    public contentWidth: number = 640;
    public contentHeight: number = 1136;
  
    public contentScaleFullWidth: number = 0; //内容全屏缩放后的宽
    public contentScaleFullHeight: number = 0; //内容全屏缩放后的高
  
    public contentScale: number = 1; //内容等比缩放
    public contentScaleFull: number = 1; //内容全屏缩放
  
    public constructor() {
      super();
      window["stage"] = egret.MainContext.instance.stage;
      this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
  
    private onAddToStage(event: egret.Event) {
      this.removeEventListener(
        egret.Event.ADDED_TO_STAGE,
        this.onAddToStage,
        this
      );
  
      //注入自定义的素材解析器
      egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
      egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
  
      //适配方式(全屏适配)
      App.StageUtils.startFullscreenAdaptation(640, 1136, this.onResize);
  
      //初始化
      this.initLifecycle();
      this.initScene();
  
      //加载资源配置文件
      this.loadResConfig();
    }
  
    private initLifecycle(): void {
      window['log'] = console.log;

      egret.localStorage.getItem('log') == 'false'
      ? console.log = function () {}
      : console.log = window['log']
      egret.lifecycle.addLifecycleListener((context) => {
        // custom lifecycle plugin
      });
  
      egret.lifecycle.onPause = () => {
        egret.ticker.pause();
        App.TimerManager.pause();
        App.TweenUtils.pause();
      };
  
      egret.lifecycle.onResume = () => {
        egret.ticker.resume();
        App.TimerManager.resume();
        App.TweenUtils.resume();
      };
    }
  
    private onResize(): void {
      console.log(this.stage);
    }
  
    private loadResConfig(): void {
      //初始化Resource资源加载库
      App.ResourceUtils.addConfig("resource/default.res.json", "resource/");
      App.ResourceUtils.addConfig("resource/resource_core.res.json", "resource/");
      App.ResourceUtils.addConfig("resource/resource_ui.res.json", "resource/");
      App.ResourceUtils.addConfig("resource/resource_ddi.res.json", "resource/");
      App.ResourceUtils.addConfig("resource/resource_language.json", "resource/");
      App.ResourceUtils.loadConfig(this.onConfigComplete, this);
    }
  
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(): void {
      //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
      var theme = new eui.Theme("resource/default.thm.json", this.stage);
      theme.addEventListener(
        eui.UIEvent.COMPLETE,
        this.onThemeLoadComplete,
        this
      );
    }
  
    /**
     * 主题文件加载完成
     */
    private onThemeLoadComplete(): void {
      //模块初始化
      this.initModule();
  
      document.querySelector('#loading')["style"].display = "none"
      //设置加载进度界面
      App.SceneManager.runScene(SceneConsts.LOADING);
  
      //开启游戏
      // new RpgTest();
      // new ProtoBufTest();
      // new EUITest();
      this.start();
  
      egret.lifecycle.onPause = () => {
        console.log('App 进入后台')
      }
  
      egret.lifecycle.onResume = () => {
        console.log('App 进入前台')
      }
  
      if (egret.Capabilities.isMobile == true) {
        egret.MainContext.instance.stage.orientation =
          egret.OrientationMode.PORTRAIT;
      } else {
        egret.MainContext.instance.stage.orientation = egret.OrientationMode.AUTO;
        egret.MainContext.instance.stage.scaleMode =
          egret.StageScaleMode.FIXED_WIDTH;
      }
    }
  
    /**
     * 开始游戏
     */
  
    private async start(): Promise<void> {
      this.mathUserInfoInUrl();
      this.checkThenCreateCard();
      //启动心跳系统
      Api.HeartBeat.begin()

      let userInfo = App.UserInfo.takeUserInfo()

      // 彩蛋全局变量
      EGGSHELL = await Api.Simulation.getUserEggShell(userInfo.simulationId, { userId: userInfo.userId })
    }
    private mathUserInfoInUrl() {
      //从location中获取用户元信息
      const url = location.href as any;
      const matchGroupIter = url.matchAll(/(\w+)=(\w*)/g);
      // matchGroupIter
      let nextRes: any;
      let userInfoObj = { userId: "", token: "", simulationId: "" };
      while ((nextRes = matchGroupIter.next()) && !nextRes.done) {
        const key = nextRes.value[1];
        const value = nextRes.value[2];
        userInfoObj[key] = value;
      }
      //将捕获到的元信息记录到App里
      App.UserInfo.cacheUserInfo(userInfoObj as any);
    }
    /**
     * 初始化所有场景
     */
    private initScene(): void {
      App.SceneManager.register(SceneConsts.LOADING, new LoadingScene());
      // App.SceneManager.register(SceneConsts.PartOne, new PartOneScene());
      // App.SceneManager.register(SceneConsts.PartTwo, new PartTwoScene());
      // App.SceneManager.register(SceneConsts.PartThree, new PartThreeScene());
      REGISTERSCENE
    }
    private startScene() {
      //temp
      // new PartTwoSceneStart();
      //over
      const savePoint = App.Savepoint.takeSavepoint();
      if (savePoint && savePoint.sceneStartId) {
        //根据场景启动类启动场景
        new SceneStartConfig.IdToClassMap[savePoint.sceneStartId]();
      } else {
        new PartOneSceneStart();
      }
    }
    private initSavePoint(){
      //初始化保存点,不发送到服务端
      App.Savepoint.cacheSavepoint({
        stageNumber:1,
        percentNumber:0,
        sceneStartId:1,
        viewIndex:-1,
        baseHomeName:"PartOneHomeView"
      })
    }
    private checkThenCreateCard() {
      //检查流水卡
      const simulationId = App.UserInfo.takeUserInfo().simulationId;
      const userId = App.UserInfo.takeUserInfo().userId;
      Api.Simulation.checkCard(simulationId, userId).then((response) => {
        if (response) {
          //存在，保存cardId,根据保存点跳转页面
          let localRes = response as any;
          App.UserInfo.cacheCardId(localRes.id);
  
  
          const savePoint = localRes.savePoint && JSON.parse(localRes.savePoint);
          if (savePoint) {
            //缓存从服务端获取的保存点
            App.Savepoint.cacheSavepoint(savePoint);
          }else{
            this.initSavePoint()
          }
          
          //缓存从服务端获取的场景回顾
          App.SceneReview.replaceSceneReview(localRes.scenarioReview ||"");
          this.startScene();
        } else {
          //不存在。新建流水卡
          Api.Simulation.createCard(simulationId,userId).then((response) => {
            let localRes = response as any;
            const cardId = localRes.id;
            App.UserInfo.cacheCardId(cardId);
            this.startScene();
            
            this.initSavePoint()
            //缓存从服务端获取的场景回顾
            App.SceneReview.replaceSceneReview(localRes.scenarioReview ||"");
          });
        }
      });
    }
    /**
     * 初始化所有模块
     */
    private initModule(): void {
      // 初始化loading模块
      App.ControllerManager.register(ControllerConst.Loading, new LoadingController());
    }
  }
  