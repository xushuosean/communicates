class PartTwoEndView extends BaseEnd {

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
  public onAddTostage(): void {}

  public initData(): void {
    super.initData();
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
  public initUI(): void {
    super.initUI();

    // this.addAnimation('flowerTwoTop', 'flowerTwoTop');

    console.log(this.flowerMC)

 

        // 记录分数撒花
        Api.Simulation.calcKa(App.UserInfo.takeCardId()).then(res => {
        }).catch(err=>{
          console.log(err)
        })
        //计算当前阶段分数
        Api.Simulation.getFinalScore(App.UserInfo.takeCardId(),2).then(res=>{
          console.log(res);
          let ka: Array<any> = res as any
          //阶段2总分
          let totalScore = 72;
          //阶段2当前用户获得的分数
          let currentScore = this.stageScore(ka,['2020102','2020104','2020105','2020106']);
    
          this.star = (currentScore <= totalScore/3 && 1) ||
              (currentScore <= totalScore/3*2 && currentScore > totalScore/3 && 2) ||
              (currentScore <= totalScore && currentScore > totalScore/3*2 && 3) || 1;
    
          console.log(this.star);
          switch (this.star){
            case 1: this.addAnimation('flowerTwoBottom', 'flowerTwoBottom'); break;
            case 2: this.addAnimation('flowerTwoCenter', 'flowerTwoCenter'); break;
            case 3: this.addAnimation('flowerTwoTop', 'flowerTwoTop');break;
            default: this.addAnimation('flowerTwoBottom', 'flowerTwoBottom'); break;
          }

          this.initText();
        })
        this.buttonLabel.text = '继续'
  }

  public touchTap(): void {
    super.touchTap();
    App.Savepoint.cacheSavepoint({
      stageNumber: 3,
      percentNumber: 0,
      sceneStartId: 3,
      baseHomeName: "PartThreeHomeView",
      viewIndex: -1,//
    });

    //发送保存点
    HttpService.put('/v1/simulation/card/'+App.UserInfo.takeCardId(),{
      cardStatus:0,
      savePoint:JSON.stringify(App.Savepoint.takeSavepoint()),
      scenarioReview:""
    })
    new PartThreeSceneStart()
  }
  public bookButtonTap(): void {
    super.bookButtonTap();
    let title = '跨部门沟通的场景下，需要重点关注的技巧如下：'
    let list = [
      {label: "-整体讨论流程",value: "：开、澄、发、达、总"},
      {label: "-对方提出困难",value: "：仔细聆听，表示同理"},
      {label: "-对方不愿承担",value: "：分享观点，传情达理、给予支持，鼓励承担"}
    ]
    console.log('这里发生了点击事件！')
    if (!this.html) {
      this.html = new BasePopHtml(title, list);
    }
    this.html.open();
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
    
    let textField = new egret.TextField();
    textField.x = 70;
    textField.size = 26;
    textField.y = 220;
    textField.textColor = 0x4a4a4a;
    textField.lineSpacing = 10;
    textField.width = 460;
    textField.wordWrap = true;

    textField.text = {
      1: App.Localize('PartTwo.flowerBottom'),
      2: App.Localize('PartTwo.flowerCenter'),
      3: App.Localize('PartTwo.flowerTop')
    }[this.star]||App.Localize('PartTwo.flowerBottom');

    this.animationGroup.addChildAt(textField, 22);
  }
}