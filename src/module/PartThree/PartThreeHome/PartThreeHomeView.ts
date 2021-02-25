class PartThreeHomeView extends DDI.BaseHome {
  public backImage: eui.Image;
  private percentArr: Array<number> = [];
  private stageNumber: number = 3; //第几个阶段
  private sceneStartId: number = 3; //属于哪个场景启动id

  public className = "PartThreeHomeView";

  public constructor($controller: BaseController, $parent: eui.Group) {
    super($controller, $parent);
    this.skinName = "resource/ddi_skins/BaseHomeSkin.exml";
  }

  public async initUI() {
    super.initUI();
    this.stageEnableTap = true;
    // this.backImage.source = "bg5-min_png"
  }
  public viewChange(viewArr: Array<any>, index: number): void {
    console.log('当前的index:',this.currentIndex)
    super.viewChange(viewArr, index);
    this.updateTopBarInfo(); //通知更新topBar记录

    if (this.currentIndex < 6) {
      this.changeBackImage('bg5-min_png')
    }

    if (this.currentIndex < 2) {
      console.log('here run 小于1')
      App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.toggleProgressBarVisibiity,false);
    } else {
      App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.toggleProgressBarVisibiity,true);
    }

    //保存点、场景回顾自动保存
    this.handleSavePointSceneReview();
  }
  public handleSavePointSceneReview(sceneReviewStr?:string){
    console.log('here is stageNumber ' + this.stageNumber)
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
        ViewConst.PartThreeClock,
        ViewConst.TopBar,
        {
          action: this.virtualApply(ControllerConst.PartThreeClock, PartThreeClockConst.outAnimation)
        }
      ],
      [
        ViewConst.PartThreeOpen,
        this.toggleStageStatus.bind(this, false)
      ],
      [
        ViewConst.PartThreeLabel,
        {
          action: this.virtualApply(ControllerConst.PartThreeLabel, PartThreeLabelConst.outAnimation)
        }
      ],

      [
        ViewConst.PartThreeTalk,
        {
          action: this.virtualApply(ControllerConst.PartThreeTalk, PartThreeTalkConst.outAnimation)
        }
      ],

      [
        {
          judge: true,
          judgeBaseArray: {
            longTap: {
              const: [ViewConst.PartThreeLongTap],
              callback: [this.toggleStageStatus.bind(this, false)],
              action: this.virtualApply(ControllerConst.PartThreeLongTap, PartThreeLongTapConst.outAnimation)
            },
            repeat: {
              const: [ViewConst.PartThreeRepeat],
              callback: [this.changeRepeat.bind(this)],
              action: this.virtualApply(ControllerConst.PartThreeRepeat, PartThreeRepeatConst.outAnimation)
            },
            npc: {
              const: [ViewConst.partThreeNPC],
              callback: [this.npcChangeLabel],
              action: this.virtualApply(ControllerConst.partThreeNPC, partThreeNPCConst.outAnimation)
            },
            teacher: {
              const: [ViewConst.partThreeTeacher],
              callback: [this.teacherChangeLabel],
              action: this.virtualApply(ControllerConst.partThreeTeacher, PartThreeTeacherConst.outAnimation)
            }
          }
        }
      ],
      [
        ViewConst.PartThreeEnd,
        this.toggleStageStatus.bind(this, false)
      ],
      [
        ViewConst.PartThreePerson
      ]
    ];
    /**
     * 存入当前scene的所有view
     */
    this.allView = [
      ViewConst.PartThreeClock,
      ViewConst.PartThreeOpen,
      ViewConst.PartThreeLabel,
      ViewConst.PartThreeTalk,
      ViewConst.PartThreeTalkMe,
      ViewConst.PartThreeEnd,
      ViewConst.PartThreePerson
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
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.createJudge, JSON.parse(App.Savepoint.tempData.npcFeedback))

    // 跳转到下一个view
    this.judgeIndex = 1;
    this.judgeViewChange(this.currentJudgeArray[this.judgeIndex], true)

    let desc = App.Savepoint.tempData.thisQuestion.yySimulationOptionsList.filter(item => {
      return item.id == App.Savepoint.tempData.yourAnswers[0]
    })
    App.ControllerManager.applyFunc(ControllerConst.PartThreeRepeat, PartThreeRepeatConst.changeLabel,  desc[0].optionDesc)
  }

  public changeBackImage(source: string): void {
    this.backImage.source = source;
  }

  // 回调函数 start

  public talkChange(text: string): void {
    App.ControllerManager.applyFunc(ControllerConst.PartThreeTalk, PartThreeTalkConst.changeLabel, text)
  }

  public talkMeChange(text: string): void {
    App.ControllerManager.applyFunc(ControllerConst.PartThreeTalkMe, PartThreeTalkMeConst.changeLabel, text)
  }

  // npc
  public npcChangeLabel(args): void {
    console.log(args)
    App.ControllerManager.applyFunc(ControllerConst.partThreeNPC, partThreeNPCConst.changeLabel, args)
  }

   // teacher
   public teacherChangeLabel(args): void {
    App.ControllerManager.applyFunc(ControllerConst.partThreeTeacher, PartThreeTeacherConst.changeLabel, args)
  }

  public changeRepeat(args): void {
    this.toggleStageStatus(true)
  }

  // 回调函数 end

  public updateTopBarInfo(): void {
    let savePoint = App.Savepoint.takeSavepoint();
    console.log(savePoint.percentNumber)
    //只有没有保存到当前页面时 才累加步长
    if(this.currentIndex >= 3 && this.currentIndex !== savePoint.viewIndex){
      if(this.currentIndex === 5){
        //最后一步
        savePoint.percentNumber = 100;
      }else{
        //如果累加后超出100，则取消累加
        savePoint.percentNumber += App.Step.stepMap.stageThreeStep
        if(savePoint.percentNumber >= 100){
          savePoint.percentNumber -= App.Step.stepMap.stageThreeStep
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

  public QuestionOneReady(payload): void {
    let htmlStr = "";
    if (this.currentIndex === 14) {
      htmlStr = `
      <div style="margin-top: 23px; font-size: 14px; color: #585756;position: relative;padding:15px 0;padding-left:10px;background-color: #fef4e4;font-weight: bold;">
      ${payload.map(item=>item.optionDesc).join("，")}
      <div class="title" style="line-height: normal; position: absolute;left:10px;top:-10px;color:#f5a623;">选择的项</div>
  </div>
      `;
    }else if(this.currentIndex === 22){
      htmlStr = `
      <div style="margin-top: 23px; font-size: 14px; color: #585756;position: relative;padding:15px 0;padding-left:10px;background-color: #fef4e4;font-weight: bold;">
      ${payload.map(item=>item.optionDesc).join("，")}
      <div class="title" style="line-height: normal; position: absolute;left:10px;top:-10px;color:#f5a623;">选择的项</div>
  </div>
      `;
    }
    console.log('here is dddd')
    console.log(payload)
    console.log(htmlStr)
    this.handleSavePointSceneReview(htmlStr);
  }
}
