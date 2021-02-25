class PartOneEndView extends BaseEnd {

  public star: number;
  constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddTostage, this);
    this.sleepLabel.text = "休息一下";
  }
  public sleepTap():void{
    //休息一下返回列表页面
    const simulationId = App.UserInfo.takeUserInfo().simulationId;
    const absoluteUrl = `${location.protocol}//${location.hostname}/egret-practice-communicate/${simulationId}`
    location.href = absoluteUrl;
  }
  public onAddTostage(): void {
    // 将流水卡状态置为1
    // let cardId = App.UserInfo.takeCardId();
    // Api.Simulation.setStatus(cardId, 1)

  }

  public initData(): void {
    super.initData();
  }
  public initUI(): void {
    super.initUI();

    // // 算分撒花
    Api.Simulation.calcKa(App.UserInfo.takeCardId()).then(res => {
      let ka: Array<any> = res as any

      //阶段1总分
      let totalScore = 117;
      //阶段1当前用户获得的分数
      let currentScore = this.stageScore(ka,['2020101','2020103','2020105','2020106','2020107']);



      this.star = (currentScore <= totalScore/3 && 1) ||
          (currentScore <= totalScore/3*2 && currentScore > totalScore/3 && 2) ||
          (currentScore <= totalScore && currentScore > totalScore/3*2 && 3) || 1;

      console.log(this.star);
      switch (this.star){
        case 1: this.addAnimation('flowerOneBottom', 'flowerOneBottom'); break;
        case 2: this.addAnimation('flowerOneCenter', 'flowerOneCenter'); break;
        case 3: this.addAnimation('flowerOneTop', 'flowerOneTop');break;
        default: this.addAnimation('flowerOneBottom', 'flowerOneBottom'); break;
      }

      this.initText();
    }).catch(err=>{
      console.log(err)
    })

    this.buttonLabel.text = '继续'

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

  public bookButtonTap(): void {
    super.bookButtonTap();
    let title = '在团队进度会场景下，你需要用到的技巧：'
    let list = [
      {label: "-进展良好",value: "：加强自信"},
      {label: "-进度不良",value: "：维护自尊、促进参与、鼓励承担"},
      {label: "-会议跑题",value: "：提出程序建议"}
    ]
    console.log('这里发生了点击事件！')
    if (!this.html) {
      this.html = new BasePopHtml(title, list);
    }
    this.html.open();
  }

  public touchTap(): void {
    super.touchTap();
    // 为跳转下一个阶段做准备
    App.Savepoint.cacheSavepoint({
      stageNumber: 2,
      percentNumber: 0,
      sceneStartId: 2,
      baseHomeName: "PartTwoHomeView",
      viewIndex: -1,//
    });

    //发送保存点
    HttpService.put('/v1/simulation/card/'+App.UserInfo.takeCardId(),{
      cardStatus:0,
      savePoint:JSON.stringify(App.Savepoint.takeSavepoint()),
      scenarioReview:""
    })
    new PartTwoSceneStart();
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

    console.log('here is star' + this.star)

    label.text = {
      1: App.Localize('PartOne.flowerBottom'),
      2: App.Localize('PartOne.flowerCenter'),
      3: App.Localize('PartOne.flowerTop')
    }[this.star]||App.Localize('PartOne.flowerBottom');

    label.horizontalCenter = 0;
    label.width = 460;
    label.size = 26;
    label.top = 220;
    label.size = 26;
    label.textColor = 0x4A4A4A;
    label.lineSpacing = 10;
    this.animationGroup.addChildAt(label, 22)
  }

  
}