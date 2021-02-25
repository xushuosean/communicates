class PartThreeSceneStart {
  constructor() {
    var groupName:string = "preload_Three";
    var subGroups:Array<string> = [
      "preload_core",
      "language_config",
      "preload_mc_common",
      "preload_mc_three",
      "do_not_preload"
    ];

    console.log('here run three scene start')
    App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
  }

  private onResourceLoadComplete(): void {
    App.Init()
    this.initModule();
    App.SceneManager.runScene(SceneConsts.PartThree)
  }

  private onResourceLoadProgress(itemsLoaded: number, itemsTotal: number): void {
    App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
  }

  // 初始化模块
  private initModule(): void {
    App.ControllerManager.register(ControllerConst.PartThreeClock, new PartThreeClockController());

    App.ControllerManager.register(ControllerConst.PartThreeHome, new partThreeHomeController());

    App.ControllerManager.register(ControllerConst.TopBar, new TopBarController());

    App.ControllerManager.register(ControllerConst.TopBarPopup1, new TopBarPopupController1());

    App.ControllerManager.register(ControllerConst.TopBarPopup2, new TopBarPopupController2());

    App.ControllerManager.register(ControllerConst.PartThreeOpen, new PartThreeOpenController());

    App.ControllerManager.register(ControllerConst.PartThreeLabel, new PartThreeLabelController());

    App.ControllerManager.register(ControllerConst.PartThreeTalk, new PartThreeTalkController());

    App.ControllerManager.register(ControllerConst.PartThreeTalkMe, new PartThreeTalkMeController());

     // 长按选择
     App.ControllerManager.register(ControllerConst.PartThreeLongTap, new PartThreeLongTapController())

     // 长按选择后的repeat
     App.ControllerManager.register(ControllerConst.PartThreeRepeat, new PartThreeRepeatController())
 
     // NPC
     App.ControllerManager.register(ControllerConst.partThreeNPC, new partThreeNPCController())
 
     // Teacher
     App.ControllerManager.register(ControllerConst.partThreeTeacher, new PartThreeTeacherController());

     // Person
     App.ControllerManager.register(ControllerConst.PartThreePerson, new PartThreePersonController());

     // End
     App.ControllerManager.register(ControllerConst.PartThreeEnd, new PartThreeEndController());
 
  }
}