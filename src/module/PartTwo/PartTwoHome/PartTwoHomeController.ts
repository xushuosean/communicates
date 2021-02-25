class partTwoHomeController extends BaseController {
  private partTwoHomeView: PartTwoHomeView;

  public constructor() {
      super();

      // 初始化UI
      this.partTwoHomeView = new PartTwoHomeView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartTwoHome, this.partTwoHomeView);


      // 注册外部事件
      this.registerFunc(PartTwoHomeConsts.HomePre, this.preClick, this)
      this.registerFunc(PartTwoHomeConsts.HomeNext, this.nextClick, this)

      this.registerFunc(PartTwoHomeConsts.changeIndex, this.changeIndex, this)

      this.registerFunc(PartTwoHomeConsts.Reset, this.Reset, this)

      this.registerFunc(PartTwoHomeConsts.banTouch, this.banTouch, this)
      this.registerFunc(PartTwoHomeConsts.pushArr, this.pushArr, this)
      this.registerFunc(PartTwoHomeConsts.createJudge, this.createJudge, this)
      
      this.registerFunc(PartTwoHomeConsts.getJudgeStatus, this.getJudgeStatus, this)

      
      this.registerFunc(PartTwoHomeConsts.judgeIndex, this.judgeIndex, this)

  }
  private judgeIndex(index: number): void {
    this.partTwoHomeView.judgeIndex = index;
    console.log('here run status is ' + this.partTwoHomeView.judgeIndex)
  }
  private preClick(): void {
    this.partTwoHomeView.preViewChangeHandle()
  }

  private nextClick(): void {
    this.partTwoHomeView.nextViewChangeHandle()
  }

  private changeIndex(index: number): void {
    this.partTwoHomeView.changeIndex(index)
  }

  private Reset(): void {
    this.partTwoHomeView.changeIndex(0)
    this.partTwoHomeView.viewChange(this.partTwoHomeView.viewArr[0], 0)
  }

  private banTouch(toggle: boolean): void {
    console.log('ban touch ')
    this.partTwoHomeView.toggleStageStatus.bind(this.partTwoHomeView, toggle)();
  }

  private createJudge(args): void {
    this.partTwoHomeView.createJudgeArr(args);
  }
  private pushArr(obj: any): void {
    console.log('here is length' + this.partTwoHomeView.currentJudgeArray.length)
    console.log(this.partTwoHomeView.currentJudgeArray)
    this.partTwoHomeView.currentJudgeArray.splice(3, 0, obj)
    this.partTwoHomeView.judgeStatus = true;
    console.log(this.partTwoHomeView.currentJudgeArray[1])
  }
  private getJudgeStatus(): boolean {
      return this.partTwoHomeView.judgeStatus;
  }

}