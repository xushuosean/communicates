class PartThreeEndView extends BaseEnd {

  private movieCompleteStatus: boolean = false;
  public star: number;
  constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddTostage, this);
    this.sleepLabel.text = "";
  }
  public sleepTap():void{
    //休息一下返回列表页面
    const simulationId = App.UserInfo.takeUserInfo().simulationId;
    const absoluteUrl = `${location.protocol}//${location.hostname}/egret-practice-communicate/${simulationId}`
    location.href = absoluteUrl;
  }
  public onAddTostage(): void {
    // 将流水卡状态置为1

  }
  public bookButtonTap(): void {
    super.bookButtonTap();
    let title = '领导交代任务的场景下，需要重点关注的技巧如下：'
    let list = [
      {label: "-了解任务",value: "：澄清资料"},
      {label: "-确认理解",value: "：确保理解一致"}
    ]
    if (!this.html) {
      this.html = new BasePopHtml(title, list);
    }
    this.html.open();
  }

  public initData(): void {
    super.initData();
  }
  public async initUI(): Promise<any> {
    super.initUI();

    this.buttonGroup.visible = this.sleepLabel.visible = false;

    // let res = await Api.Simulation.getKaStar(App.UserInfo.takeCardId())
    
    // // 算分撒花
    let response = await Api.Simulation.getFinalScore(App.UserInfo.takeCardId(), 3)

    let ka: Array<any> = response as any

    //阶段1总分
    let totalScore = 45;
    //阶段1当前用户获得的分数
    let currentScore = this.stageScore(ka,['2020104','2020106','2020107']);

    this.star = (currentScore <= totalScore/3 && 1) ||
    (currentScore <= totalScore/3*2 && currentScore > totalScore/3 && 2) ||
    (currentScore <= totalScore && currentScore > totalScore/3*2 && 3) || 1;

    console.log(this.star)
    switch(this.star) {
      case 1: this.addAnimation('flowerThreeBottom', 'flowerThreeBottom'); break;
      case 2: this.addAnimation('flowerThreeCenter', 'flowerThreeCenter'); break;
      case 3: this.addAnimation('flowerThreeTop', 'flowerThreeTop');break;
      default: this.addAnimation('flowerThreeBottom', 'flowerThreeBottom'); break;
    }

    this.initText();

    this.buttonLabel.text = '查看结果'

    await Api.Simulation.calcKa(App.UserInfo.takeCardId())

  }

   // 计算用户当前阶段的得分(Api返回的ka list, 匹配条件(simulationKaId))
   public stageScore(arr:Array<any>,condition:Array<any>){
    let score = 0;
    for(let i = 0, len = arr.length; i < len; i+=1){
      for(let j = 0, len2 = condition.length; j < len2; j+=1){
        if(arr[i]['simulationKaId'] === Number(condition[j])){
          score+=arr[i]['score'];
        }
      }
    }
    return score;
  }

  
  public touchTap(): void {
    super.touchTap();
    if (this.movieCompleteStatus) {
      App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.HomeNext)
    }
    this.movieCompleteStatus = false;
  }

  public addAnimation(mc: string, type: string): void {
    super.addAnimation(mc, type);
  }

  public MovieClipComplete(): void {
    super.MovieClipComplete();
    this.initBookButton();
  }

  public bookDone(): void {
    super.bookDone();
    this.showGroupLabel();
  }

  private initText(): void {
    this.backImg.visible = true;
    
    let label: eui.Label = new eui.Label();

    label.text = {
      1: App.Localize('PartThree.flowerBottom'),
      2: App.Localize('PartThree.flowerCenter'),
      3: App.Localize('PartThree.flowerTop')
    }[this.star]||App.Localize('PartThree.flowerBottom');

    label.horizontalCenter = 0;
    label.width = 460;
    label.size = 26;
    label.top = 220;
    label.size = 26;
    label.textColor = 0x4A4A4A;
    label.lineSpacing = 10;
    this.animationGroup.addChildAt(label, 22)

    this.movieCompleteStatus = true;
  }

  
}