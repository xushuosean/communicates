class PartTwoSceneStart {
  constructor() {
    var groupName:string = "preload_EUITest";
    var subGroups:Array<string> = [
      "preload_core",
      "language_config",
      "preload_mc_common",
      "preload_mc_two"
    ];
    App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
  }

  private onResourceLoadComplete(): void {
    App.Init()
    this.initModule();
    App.SceneManager.runScene(SceneConsts.PartTwo)
  }

  private onResourceLoadProgress(itemsLoaded: number, itemsTotal: number): void {
    App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
  }

  // 初始化模块
  private initModule(): void {
    // top Bar系列module start
    App.ControllerManager.register(ControllerConst.TopBar, new TopBarController())
    App.ControllerManager.register(ControllerConst.TopBarPopup1, new TopBarPopupController1())
    App.ControllerManager.register(ControllerConst.TopBarPopup2, new TopBarPopupController2())
    // top Bar系列module end
    App.ControllerManager.register(ControllerConst.PartTwoHome, new partTwoHomeController())
    // App.ControllerManager.register(ControllerConst.partTwoCross, new partTwoCrossController())
    App.ControllerManager.register(ControllerConst.PartTwoEnvelope, new PartTwoEnvelopeController())
    App.ControllerManager.register(ControllerConst.PartTwoRectLabel, new PartTwoRectLabelController())

    App.ControllerManager.register(ControllerConst.PartTwoWeiyuSay, new PartTwoWeiyuSayController())
    // 长按选择
    App.ControllerManager.register(ControllerConst.PartTwoLongTap, new PartTwoLongTapController())
    App.ControllerManager.register(ControllerConst.PartTwoLongTap1, new PartTwoLongTapController1())

    // 长按选择后的repeat
    App.ControllerManager.register(ControllerConst.PartTwoRepeat, new PartTwoRepeatController())
    App.ControllerManager.register(ControllerConst.PartTwoRepeat1, new PartTwoRepeatController1())

    // NPC
    App.ControllerManager.register(ControllerConst.partTwoNPC, new PartTwoNPCController())
    App.ControllerManager.register(ControllerConst.partTwoNPC1, new PartTwoNPCController1())

    // Teacher
    App.ControllerManager.register(ControllerConst.partTwoTeacher, new PartTwoTeacherController())
    App.ControllerManager.register(ControllerConst.partTwoTeacher1, new PartTwoTeacherController1())

    // talk
    App.ControllerManager.register(ControllerConst.partTwoTalk, new partTwoTalkController())


    // talk
    App.ControllerManager.register(ControllerConst.PartTwoBloom, new PartTwoBloomController());
    App.ControllerManager.register(ControllerConst.PartTwoEggshell, new PartTwoEggshellController());

    //parttwo phone talk
    App.ControllerManager.register(ControllerConst.partTwoPhoneCall, new PartTwoPhoneCallController())
    //clock
    App.ControllerManager.register(ControllerConst.partTwoClock, new partTwoClockController())
    App.ControllerManager.register(ControllerConst.partTwoCalling, new partTwoCallingController())

    App.ControllerManager.register(ControllerConst.partTwoTalk, new partTwoTalkController())
    App.ControllerManager.register(ControllerConst.PartTwoStar, new PartTwoStarController())
    App.ControllerManager.register(ControllerConst.PartTwoEndView, new PartTwoEndController())
    
    // App.ControllerManager.register(ControllerConst.PartTwoRectLabel, new PartTwoRectLabelController())
    // App.ControllerManager.register(ControllerConst.PartTwoWeiyuSelect, new PartTwoWeiyuSelectController())
    // App.ControllerManager.register(ControllerConst.PartTwoWeiyuRepeat, new PartTwowyRepeatController())
  }
}