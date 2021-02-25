class PartTwoTeacherController extends BaseController {

  private PartTwoTeacherView: PartTwoTeacherView;
  constructor() {
    super()

    this.PartTwoTeacherView = new PartTwoTeacherView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoTeacher, this.PartTwoTeacherView);

    this.registerFunc(PartTwoTeacherConsts.changeLabel, this.changeLabel, this)
    this.registerFunc(PartTwoTeacherConsts.changeHrPosition, this.changeHrPosition, this)

    this.registerFunc(PartTwoTeacherConsts.outAnimation, this.outAnimation, this)

  }

  private changeLabel(args): void {
    // this.partOneTeacherView.changeLabel(args.content);
    let mood = App.ControllerManager.applyFunc(ControllerConst.partTwoNPC, PartTwoNPCConsts.getMood)
    CommonInit.initTalk({
      text: args.content,
      hrSource: mood,
      animation: false
    }, this.PartTwoTeacherView)
  }

  private changeHrPosition(): void {}

  private outAnimation(): egret.Tween {
    return this.PartTwoTeacherView.outAnimation();
  }

}