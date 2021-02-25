class PartTwoHomeView extends DDI.BaseHome {

  public backImage: eui.Image;
  private percentArr:Array<number> = [];
  private stageNumber:number = 2;//第几个阶段
  private sceneStartId:number = 2;//属于哪个场景启动id

  public className = "PartTwoHomeView"
  
  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);
    // window['stage'] = this
    this.skinName = "resource/ddi_skins/BaseHomeSkin.exml";
  }

  public async initUI() {
    super.initUI()
  }
  public viewChange(viewArr:Array<any>, index:number):void{
    super.viewChange(viewArr,index);


    //打开顶部条
    App.ViewManager.open(ViewConst.TopBar)

    if (this.currentIndex < 2) {
      App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.toggleProgressBarVisibiity,false);
    } else {
      App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.toggleProgressBarVisibiity,true);
    }

    if(this.currentIndex == 7 || this.currentIndex == 8){
      //显示林威头像
      App.ViewManager.open(ViewConst.partTwoCalling)
    }else{
      App.ViewManager.close(ViewConst.partTwoCalling)
    }

    console.log('current-index',this.currentIndex)
    
    this.updateTopBarInfo();//通知更新topBar记录

    //保存点、场景回顾自动保存
    this.handleSavePointSceneReview();

    //监听index变化修改背景图
    if(this.currentIndex === 0){
      this.backImage.source = "bg3_png"
    }else if(this.currentIndex < 7){
      this.backImage.source = 'part2bg1_png'
    }else{
      // this.backImage.source = 'part2bg2_png'
      this.backImage.source = 'part2bg2_new_png'
    }

    if(this.currentIndex === 5){
      //清除上一个决策树的questionInfo
      const savePoint = App.Savepoint.takeSavepoint()
      delete savePoint.questionInfo;
      App.Savepoint.cacheSavepoint(savePoint);
      Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(),savePoint)
    }
  }
  public handleSavePointSceneReview(sceneReviewStr?:string){
    SavePointSceneReviewCenter.updateSaveAndSceneReview({
      stageNumber : this.stageNumber,
      percentNumber :App.Savepoint.takeSavepoint().percentNumber,
      sceneStartId : this.sceneStartId,
      baseHomeName : this.className,
      viewIndex : this.currentIndex
    },sceneReviewStr)
  }
  public initData(): void {
    super.initData()
  }

  // initview 执行前回调
  public beforeInitView(): void {
    super.beforeInitView();
  }

  // init view数据
  public initViewData(): void {
    super.initViewData();
    this.viewArr = [
      [
        ViewConst.partTwoClock,
        ViewConst.TopBar,
        this.toggleStageStatus.bind(this,false)],
      [
        ViewConst.PartTwoEnvelope,
        this.envelopeCallback.bind(this)
      ],
      [
        ViewConst.partTwoRectLabel,
      ],
      [
        ViewConst.partTwoWeiyuSay,
        this.toggleStageStatus.bind(this,true)
      ],
      [
        {
          judge: true,
          judgeBaseArray: {
            longTap: {
              const: [ViewConst.PartTwoLongTap1],
              callback: [this.toggleStageStatus.bind(this, false)],
              action: this.virtualApply(ControllerConst.PartTwoLongTap1, PartTwoLongTapConst1.outAnimation)
            },
            repeat: {
              const: [ViewConst.PartTwoRepeat1],
              callback: [this.toggleStageStatus.bind(this, true)],
              action: this.virtualApply(ControllerConst.PartTwoRepeat1, PartTwoRepeatConsts1.outAnimation)
            },
            npc: {
              const: [ViewConst.PartTwoNPC1],
              callback: [this.npcChangeLabel1],
              action: this.virtualApply(ControllerConst.partTwoNPC1, PartTwoNPCConsts1.outAnimation)
            },
            teacher: {
              const: [ViewConst.partTwoTeacher1],
              callback: [this.teacherChangeLabel1],
              action: this.virtualApply(ControllerConst.partTwoTeacher1, PartTwoTeacherConsts1.outAnimation)
            }
          }
        }
      ],
      [
        ViewConst.partTwoRectLabel,
        this.labelChange.bind(this,'two')
      ],
      [
        ViewConst.PartTwoPhoneCall
      ],
      [
        ViewConst.partTwoTalk,
        this.talkChangeOne.bind(this, App.Localize("PartTwo.phoneTalkOne")),
        {
          action: this.virtualApply(ControllerConst.partTwoTalk, partTwoTalkConsts.outAnimation)
        }
      ],
      [
        {
          judge: true,
          judgeBaseArray: {
            longTap: {
              const: [ViewConst.PartTwoLongTap],
              callback: [this.toggleStageStatus.bind(this, false)],
              action: this.virtualApply(ControllerConst.PartTwoLongTap, PartTwoLongTapConst.outAnimation)
            },
            repeat: {
              const: [ViewConst.PartTwoRepeat],
              callback: [this.toggleStageStatus.bind(this, false)],
              action: this.virtualApply(ControllerConst.PartTwoRepeat, PartTwoRepeatConsts.outAnimation)
            },
            npc: {
              const: [ViewConst.PartTwoNPC],
              callback: [this.npcChangeLabel],
              action: this.virtualApply(ControllerConst.partTwoNPC, PartTwoNPCConsts.outAnimation)
            },
            teacher: {
              const: [ViewConst.PartTwoTeacher],
              callback: [this.teacherChangeLabel],
              action: this.virtualApply(ControllerConst.partTwoTeacher, PartTwoTeacherConsts.outAnimation)
            }
          }
        }
      ],
      [ViewConst.partTwoEnd]
    ];

    this.allView = [
      // ViewConst.partTwoCross,
      ViewConst.PartTwoEnvelope,
      ViewConst.partTwoRectLabel,
      ViewConst.partTwoWeiyuSay,
      ViewConst.partTwoTalk,
      ViewConst.PartTwoPhoneCall,
      ViewConst.partTwoClock,

      ViewConst.PartTwoStar,
      ViewConst.PartTwoLongTap,
      ViewConst.PartTwoRepeat,
      ViewConst.PartTwoNPC,
      ViewConst.PartTwoTeacher
    ];
    this.initPercentNumber();
  }

  // mock数据前
  public beforeMock(viewIndex: number): void {

    super.beforeMock(viewIndex);
    if(this.currentIndex == 7 || this.currentIndex == 8){
      //显示林威头像
      App.ViewManager.open(ViewConst.partTwoCalling)
    }else{
      App.ViewManager.close(ViewConst.partTwoCalling)
    }
  }
  
  // mock成功
  public mockSuccess(savePoint: any): void {

    super.mockSuccess(savePoint);
    // 通过npcFeedBack动态创建数组
    App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.createJudge, JSON.parse(App.Savepoint.tempData.npcFeedback))

    // 跳转到下一个view
    this.judgeIndex = 1;
    this.judgeViewChange(this.currentJudgeArray[this.judgeIndex], true)

    let desc = App.Savepoint.tempData.thisQuestion.yySimulationOptionsList.filter(item => {
      return item.id == App.Savepoint.tempData.yourAnswers[0]
    })
    if(this.currentIndex === 4){
      App.ControllerManager.applyFunc(ControllerConst.PartTwoRepeat1, PartTwoRepeatConsts1.changeLabel,  desc[0].optionDesc);
    }else{
      App.ControllerManager.applyFunc(ControllerConst.PartTwoRepeat, PartTwoRepeatConsts.changeLabel,  desc[0].optionDesc);
    }
  }

  // 取消mock
  public mockCancel(savePoint: any): void {
    super.mockCancel(savePoint)
    this.judgeIndex = 0;
  }

  // 更新topbar的信息
  public updateTopBarInfo():void {

    let savePoint = App.Savepoint.takeSavepoint();
    console.log(savePoint.percentNumber)
    //只有没有保存到当前页面时 才累加步长
    if(this.currentIndex >= 3 && this.currentIndex !== savePoint.viewIndex){
      if(this.currentIndex === 9){
        //最后一步
        savePoint.percentNumber = 100;
      }else{
        //如果累加后超出100，则取消累加
        savePoint.percentNumber += App.Step.stepMap.stageTwoStep
        if(savePoint.percentNumber >= 100){
          savePoint.percentNumber -= App.Step.stepMap.stageTwoStep
        }
      }
    }
    console.log(savePoint.percentNumber)
    //更新topbar
    App.ControllerManager.applyFunc(
      ControllerConst.TopBar,
      PartOneTopBarConst.changeInfo,
      {
        stageNumber: this.stageNumber,
        percentNumber: savePoint.percentNumber,
      }
    );
  }

  public envelopeCallback(): void {
    this.toggleStageStatus(false)
  }
  // npc1
  public npcChangeLabel1(args): void {
    console.log(args)
    App.ControllerManager.applyFunc(ControllerConst.partTwoNPC1, PartTwoNPCConsts1.changeLabel, args)
  }
  // teacher1
  public teacherChangeLabel1(args): void {
    App.ControllerManager.applyFunc(ControllerConst.partTwoTeacher1, PartTwoTeacherConsts1.changeLabel, args)
  }
  // npc
  public npcChangeLabel(args): void {
    console.log(args)
    App.ControllerManager.applyFunc(ControllerConst.partTwoNPC, PartTwoNPCConsts.changeLabel, args)
  }
  // teacher
  public teacherChangeLabel(args): void {
    App.ControllerManager.applyFunc(ControllerConst.partTwoTeacher, PartTwoTeacherConsts.changeLabel, args)
  }

  public talkChangeBg(): void {
    this.toggleStageStatus(true)
    // this.backImage.source = 'bg2_png'
  }

  public talkChangeOne(args): void {
    console.log(args)
    App.ControllerManager.applyFunc(ControllerConst.partTwoTalk, partTwoTalkConsts.changeLabel, args)
  }

  public talkTwoChangeOne(args): void {
    App.ControllerManager.applyFunc(ControllerConst.partTwoTalkTwo, partTwoTalkTwoConsts.changeLabel, args)
  }

  public labelChange(indexName): void {
    App.ControllerManager.applyFunc(ControllerConst.PartTwoRectLabel, partTwoRectLabelConsts.changeLabel, indexName)
  }

  public changeStarType(type): void {
    this.toggleStageStatus(true)
    let starType = type.content.replace('!!STAR', '').replace('!!', '')
    // App.ControllerManager.applyFunc(ControllerConst.PartTwoStar, PartTwoStarConst.changeType, starType)
  }
  public longTapOne(): void {
    
  }

  public createJudgeArr(array: Array<any>): void {
    super.createJudgeArr(array)
    
    array ? '' : array = []
    // 获取纯粹的STAR数组
    let pureStarArray = array.filter(item => {
      return /^!!STAR/.test(item.content)
    })

    let starIndex: number;
    array.forEach((item, index) => {
      if (/^!!STAR/.test(item.content)) {
        starIndex = index + 2;
      }
    })

    pureStarArray.map(item => {
      let temp = {
        const: this.judgeBaseArray.star.const,
        callback: [() => {
          this.judgeBaseArray.star.callback[0].bind(null, item)()
        }]
      }
      if (this.judgeBaseArray.star.action) {
        temp['action'] = this.judgeBaseArray.star.action
      }
      
      this.currentJudgeArray.splice(starIndex, 0, temp)
    })
    console.log(this.currentJudgeArray)

  }

  public restartJudgeIndex(): void {
    super.restartJudgeIndex();
  }
  public initPercentNumber(){
    const lastIndex = this.viewArr.length - 1;
    for(var i = 0;i <= lastIndex;i++){
      if(i > 2){
        this.percentArr.push(Math.ceil(i*100/(lastIndex-0)))
      }else{
        this.percentArr.push(0);
      }
    }
  }
  public async resetQuestion(): Promise<void> {
    super.resetQuestion();

    const currentSavePoint = App.Savepoint.takeSavepoint();
    if (currentSavePoint && currentSavePoint.questionInfo) {
      delete currentSavePoint.questionInfo.answers
    }
    currentSavePoint.questionInfo.questionId = App.Savepoint.tempData.nextQuestion.id
    App.Savepoint.cacheSavepoint(currentSavePoint);
    let res = await Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(), currentSavePoint)
    console.log(res)
  }

}