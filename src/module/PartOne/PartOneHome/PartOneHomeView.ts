class PartOneHomeView extends DDI.BaseHome {
  public backImage: eui.Image;
  private percentArr: Array<number> = [];
  private stageNumber: number = 1; //第几个阶段
  private sceneStartId: number = 1; //属于哪个场景启动id

  public className = "PartOneHomeView";

  public constructor($controller: BaseController, $parent: eui.Group) {
    super($controller, $parent);
    this.skinName = "resource/ddi_skins/BaseHomeSkin.exml";
  }

  public async initUI() {
    super.initUI();
    this.stageEnableTap = true;
  }
  public viewChange(viewArr: Array<any>, index: number): void {
    console.log('当前的index:',this.currentIndex)
    super.viewChange(viewArr, index);
    this.updateTopBarInfo(); //通知更新topBar记录

    //监听index变化修改背景图
    if(this.currentIndex < 4){
      this.backImage.source = 'BG_png';
      App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.toggleProgressBarVisibiity,false);
    }else if(this.currentIndex == 4){
      this.backImage.source = 'bg2_png';
    }else if(this.currentIndex == 5){
      this.backImage.source = 'bg3_png';
    }else if(this.currentIndex > 5){
      this.backImage.source = 'bg4_png';
    }
    
    //保存点、场景回顾自动保存
    this.handleSavePointSceneReview();
  }
  public handleSavePointSceneReview(sceneReviewStr?:string){
    SavePointSceneReviewCenter.updateSaveAndSceneReview({
      stageNumber : this.stageNumber,
      percentNumber : App.Savepoint.takeSavepoint().percentNumber,
      sceneStartId : this.sceneStartId,
      baseHomeName : this.className,
      viewIndex : this.currentIndex
    },sceneReviewStr)
  }

  // 初始化view之前的操作
  public beforeInitView(): void {
    super.beforeInitView();
  }
  /**
   * 初始化进度条
   */
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

  public initData(): void {
    super.initData()
  }

  /**
   * 初始化view的数据
   */
  public initViewData(): void {
    super.initViewData();
    this.viewArr = [
      [
        ViewConst.GuidePointer,
        {
          action: this.virtualApply(ControllerConst.GuidePointer, GuidePointerConst.outAnimation)
        }
      ],
      [
        ViewConst.PartOneBefore,
        ViewConst.TopBar
      ],
      [
        ViewConst.PartOneBeforeLabel,
        {
          action: this.virtualApply(ControllerConst.PartOneBeforeLabel, PartOneBeforeLabelConst.outAnimation)
        }
      ],
      [
        ViewConst.PartOneOpen,
        this.toggleStageStatus.bind(this, false)
      ],
      [
        ViewConst.PartOneFirst,
        this.toggleStageStatus.bind(this, false)
      ],
      [
        ViewConst.PartOneBorder
      ],
      [
        ViewConst.PartOneMeeting
      ],
      [
        ViewConst.PartOneBeforeLabel,
        this.changeLabel.bind(this),
        {
          action: this.virtualApply(ControllerConst.PartOneBeforeLabel, PartOneBeforeLabelConst.outAnimation)
        }
      ],
      [
        ViewConst.PartOneTalk,
        {
          action: this.virtualApply(ControllerConst.PartOneTalk, PartOneTalkConst.outAnimation)
        }
      ],
      [
        {
          judge: true,
          judgeBaseArray: {
            longTap: {
              const: [ViewConst.PartOneLongTap],
              callback: [this.toggleStageStatus.bind(this, false)],
              action: this.virtualApply(ControllerConst.PartOneLongTap, PartOneLongTapConst.outAnimation)
            },
            repeat: {
              const: [ViewConst.PartOneRepeat],
              callback: [this.changeRepeat.bind(this)],
              action: this.virtualApply(ControllerConst.PartOneRepeat, PartOneRepeatConsts.outAnimation)
            },
            npc: {
              const: [ViewConst.PartOneNPC],
              callback: [this.npcChangeLabel],
              action: this.virtualApply(ControllerConst.PartOneNPC, PartOneNPCConsts.outAnimation)
            },
            teacher: {
              const: [ViewConst.PartOneTeacher],
              callback: [this.teacherChangeLabel],
              action: this.virtualApply(ControllerConst.PartOneTeacher, PartOneTeacherConst.outAnimation)
            }
          }
        }
      ],
      [
        ViewConst.PartOneEnd,
        this.toggleStageStatus.bind(this, false)
      ],
    ];
    
    /**
     * 存入当前scene的所有view
     */
    this.allView = [
      ViewConst.GuidePointer,
      ViewConst.PartOneBefore,
      ViewConst.PartOneBeforeLabel,
      ViewConst.PartOneOpen,
      ViewConst.PartOneFirst,
      ViewConst.PartOneBorder,
      ViewConst.PartOneMeeting,
      ViewConst.PartOneLabel,
      ViewConst.PartOneTalk,
      ViewConst.PartOneEnd
    ];

    this.initPercentNumber();
  }

  public afterInitViewed(): void {
    super.afterInitViewed();
  }


  /**
   * 恢复之前的回调
   */
  public beforeMock(viewIndex: number): void {
    super.beforeMock(viewIndex);
    if(viewIndex > 1){
      App.ViewManager.open(ViewConst.TopBar)
    }
  }

  /**
   * 恢复成功的回调
   */
  public mockSuccess(savePoint: any): void {
    super.mockSuccess(savePoint);
    // 通过npcFeedBack动态创建数组
    App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.createJudge, JSON.parse(App.Savepoint.tempData.npcFeedback))

    // 跳转到下一个view
    this.judgeIndex = 1;
    this.judgeViewChange(this.currentJudgeArray[this.judgeIndex], true)

    let desc = App.Savepoint.tempData.thisQuestion.yySimulationOptionsList.filter(item => {
      return item.id == App.Savepoint.tempData.yourAnswers[0]
    })
    App.ControllerManager.applyFunc(ControllerConst.PartOneRepeat, PartOneRepeatConsts.changeLabel,  desc[0].optionDesc);
  }

  public npcChangeLabel(args): void {
    console.log(args)
    App.ControllerManager.applyFunc(ControllerConst.PartOneNPC, PartOneNPCConsts.changeLabel, args);
  }

  public teacherChangeLabel(args): void {
    App.ControllerManager.applyFunc(ControllerConst.PartOneTeacher, PartOneTeacherConst.changeLabel, args);
  }

  public changeRepeat(args): void {
    // console.log('change repeat true')
    // this.toggleStageStatus(true);
  }


  // 回调函数 start

  public changeLabel(): void {
    App.ControllerManager.applyFunc(ControllerConst.PartOneBeforeLabel, PartOneBeforeLabelConst.changeLabel, App.Localize('PartOne.label'))
  }

  // 回调函数 end
  public updateTopBarInfo(): void {
    let savePoint = App.Savepoint.takeSavepoint();
    console.log(savePoint.percentNumber)
    //只有没有保存到当前页面时 才累加步长
    if(this.currentIndex >= 5 && this.currentIndex !== savePoint.viewIndex){
      if(this.currentIndex === 10){
        //最后一步
        savePoint.percentNumber = 100;
      }else{
        //如果累加后超出100，则取消累加
        savePoint.percentNumber += App.Step.stepMap.stageOneStep
        if(savePoint.percentNumber >= 100){
          savePoint.percentNumber -= App.Step.stepMap.stageOneStep
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

  public homePop(): void {
    // super.homePop();
  }
  public QuestionOneReady(payload): void {
    let htmlStr = "";
    if (this.currentIndex === 14) {
      htmlStr = `
      <div style="margin-top: 23px; font-size: 14px; color: #585756;position: relative;padding:15px 0;padding-left:10px;background-color: #fef4e4;font-weight: bold;">
      ${payload.map(item=>item.optionDesc).join("，")}
      <div class="title" style="line-height: normal; position: absolute;left:10px;top:-10px;color:#f5a623;">选择的项</div>
      </div>`;
    }else if(this.currentIndex === 22){
      htmlStr = `
      <div style="margin-top: 23px; font-size: 14px; color: #585756;position: relative;padding:15px 0;padding-left:10px;background-color: #fef4e4;font-weight: bold;">
        ${payload.map(item=>item.optionDesc).join("，")}
        <div class="title" style="line-height: normal; position: absolute;left:10px;top:-10px;color:#f5a623;">选择的项</div>
    </div>`
    }
    console.log(htmlStr)
    this.handleSavePointSceneReview(htmlStr);
  }
}
