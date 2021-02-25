class PartOneSceneStart {
  constructor() {
    var groupName:string = "preload_EUITest";
    var subGroups:Array<string> = [
      "preload_core",
      "language_config",
      "preload_mc_common",
      "preload_mc_one"
    ];
    App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
  }

  private onResourceLoadComplete(): void {
    App.Init()
    this.initModule();
    App.SceneManager.runScene(SceneConsts.PartOne)
  }

  private onResourceLoadProgress(itemsLoaded: number, itemsTotal: number): void {
    App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
  }

  private initModule(): void {
    App.ControllerManager.register(ControllerConst.GuidePointer, new GuidePointerController());

    App.ControllerManager.register(ControllerConst.PartOneBefore, new PartOneBeforeController());

    App.ControllerManager.register(ControllerConst.PartOneBeforeLabel, new PartOneBeforeLabelController());

    App.ControllerManager.register(ControllerConst.PartOneBorder, new PartOneBorderController());

    App.ControllerManager.register(ControllerConst.PartOneMeeting, new PartOneMeetingController());

    App.ControllerManager.register(ControllerConst.PartOneLabel, new PartOneLabelController());

    App.ControllerManager.register(ControllerConst.PartOneHome, new partOneHomeController());

    App.ControllerManager.register(ControllerConst.TopBar, new TopBarController());

    App.ControllerManager.register(ControllerConst.TopBarPopup1, new TopBarPopupController1());

    App.ControllerManager.register(ControllerConst.TopBarPopup2, new TopBarPopupController2());

    App.ControllerManager.register(ControllerConst.PartOneOpen, new PartOneOpenController());

    App.ControllerManager.register(ControllerConst.PartOneFirst, new PartOneFirstController());

    App.ControllerManager.register(ControllerConst.PartOneTalk, new PartOneTalkController());

    App.ControllerManager.register(ControllerConst.PartOneEggshell, new PartOneEggshellController());

    App.ControllerManager.register(ControllerConst.PartOneBloom, new PartOneBloomController());

    // 长按选择
    App.ControllerManager.register(ControllerConst.PartOneLongTap, new PartOneLongTapController())

    // 长按选择后的repeat
    App.ControllerManager.register(ControllerConst.PartOneRepeat, new PartOneRepeatController())

    // NPC
    App.ControllerManager.register(ControllerConst.PartOneNPC, new PartOneNPCController())

    // Teacher
    App.ControllerManager.register(ControllerConst.PartOneTeacher, new PartOneTeacherController());
    // End
    App.ControllerManager.register(ControllerConst.PartOneEnd, new PartOneEndController());
    
  }
}