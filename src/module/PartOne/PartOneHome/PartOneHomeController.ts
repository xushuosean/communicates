class partOneHomeController extends BaseController {
  private partOneHomeView: PartOneHomeView;

  public constructor() {
      super();

      // 初始化UI
      this.partOneHomeView = new PartOneHomeView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartOneHome, this.partOneHomeView);


      this.registerFunc(PartOneHomeConsts.HomePre, this.preClick, this)

      this.registerFunc(PartOneHomeConsts.HomeNext, this.nextClick, this)

      this.registerFunc(PartOneHomeConsts.changeIndex, this.changeIndex, this)

      this.registerFunc(PartOneHomeConsts.Reset, this.Reset, this)

      this.registerFunc(PartOneHomeConsts.banTouch, this.banTouch, this)

      this.registerFunc(PartOneHomeConsts.homePop, this.homePop, this)

      this.registerFunc(PartOneHomeConsts.QuestionOneReady, this.QuestionOneReady, this)

      this.registerFunc(PartOneHomeConsts.createJudge, this.createJudge, this)

      this.registerFunc(PartOneHomeConsts.getJudgeStatus, this.getJudgeStatus, this)

      this.registerFunc(PartOneHomeConsts.pushArr, this.pushArr, this)

      this.registerFunc(PartOneHomeConsts.judgeIndex, this.judgeIndex, this)

  }

  private preClick(): void {
    this.partOneHomeView.preViewChangeHandle()
  }

  private nextClick(): void {
    this.partOneHomeView.nextViewChangeHandle()
  }

  private changeIndex(index: number): void {
    this.partOneHomeView.changeIndex(index)
  }

  private Reset(): void {
    this.partOneHomeView.changeIndex(0)
    this.partOneHomeView.viewChange(this.partOneHomeView.viewArr[0], 0)
  }

  private banTouch(toggle: boolean): void {
    this.partOneHomeView.toggleStageStatus.bind(this.partOneHomeView, toggle)();
  }

  private homePop(): void {
    this.partOneHomeView.homePop()
  }
  private QuestionOneReady(response): void {
    this.partOneHomeView.QuestionOneReady(response)
  }
    private createJudge(args): void {
        this.partOneHomeView.createJudgeArr(args);
    }

    private getJudgeStatus(): boolean {
        return this.partOneHomeView.judgeStatus;
    }

    private judgeIndex(index: number): void {
      this.partOneHomeView.judgeIndex = index;
      console.log('here run status is ' + this.partOneHomeView.judgeIndex)
    }

    private pushArr(obj: any): void {
      console.log('here is length' + this.partOneHomeView.currentJudgeArray.length)
      console.log(this.partOneHomeView.currentJudgeArray)
      this.partOneHomeView.currentJudgeArray.splice(3, 0, obj)
      this.partOneHomeView.judgeStatus = true;
      console.log(this.partOneHomeView.currentJudgeArray[1])
    }


}