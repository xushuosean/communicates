class PartOneTeacherController extends BaseController {

  private partOneTeacherView: PartOneTeacherView;
  constructor() {
    super()

    this.partOneTeacherView = new PartOneTeacherView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneTeacher, this.partOneTeacherView);

    this.registerFunc(PartOneTeacherConst.changeLabel, this.changeLabel, this)
    this.registerFunc(PartOneTeacherConst.changeHrPosition, this.changeHrPosition, this)

    this.registerFunc(PartOneTeacherConst.outAnimation, this.outAnimation, this)

  }

  private changeLabel(args): void {
    // this.partOneTeacherView.changeLabel(args.content);
    let mood = App.ControllerManager.applyFunc(ControllerConst.PartOneNPC, PartOneNPCConsts.getMood)
    CommonInit.initTalk({
      text: args.content,
      hrSource: mood,
      animation: false
    }, this.partOneTeacherView)
  }

  private changeHrPosition(): void {}

  private outAnimation(): egret.Tween {
    return this.partOneTeacherView.outAnimation();
  }

}