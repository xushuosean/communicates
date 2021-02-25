class partThreeHomeController extends BaseController {
  private partThreeHomeView: PartThreeHomeView;

  public constructor() {
      super();

      // 初始化UI
      this.partThreeHomeView = new PartThreeHomeView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartThreeHome, this.partThreeHomeView);


      this.registerFunc(PartThreeHomeConst.HomePre, this.preClick, this)
      this.registerFunc(PartThreeHomeConst.HomeNext, this.nextClick, this)

      this.registerFunc(PartThreeHomeConst.changeIndex, this.changeIndex, this)

      this.registerFunc(PartThreeHomeConst.Reset, this.Reset, this)

      this.registerFunc(PartThreeHomeConst.banTouch, this.banTouch, this)

      this.registerFunc(PartThreeHomeConst.QuestionOneReady, this.QuestionOneReady, this)

      this.registerFunc(PartThreeHomeConst.createJudge, this.createJudge, this)

      this.registerFunc(PartThreeHomeConst.getJudgeStatus, this.getJudgeStatus, this)

      this.registerFunc(PartThreeHomeConst.changeBackImage, this.changeBackImage, this)
  }

  private preClick(): void {
    this.partThreeHomeView.preViewChangeHandle()
  }

  private nextClick(): void {
    this.partThreeHomeView.nextViewChangeHandle()
  }

  private changeIndex(index: number): void {
    this.partThreeHomeView.changeIndex(index)
  }

  private Reset(): void {
    this.partThreeHomeView.changeIndex(0)
    this.partThreeHomeView.viewChange(this.partThreeHomeView.viewArr[0], 0)
  }

  public banTouch(toggle: boolean): void {
    this.partThreeHomeView.toggleStageStatus.bind(this.partThreeHomeView, toggle)();
  }

  private QuestionOneReady(response): void {
    this.partThreeHomeView.QuestionOneReady(response)
  }

  private createJudge(args): void {
    this.partThreeHomeView.createJudgeArr(args);
  }

  private getJudgeStatus(): boolean {
    return this.partThreeHomeView.judgeStatus;
  }

  private changeBackImage(source: string): void {
    console.log('here is change' + source)
    this.partThreeHomeView.changeBackImage(source)
  }
}