class PartOneMeetingView extends DDI.BaseLabel {

  public FKK: eui.Image;
  public WLN: eui.Image;
  public JN: eui.Image;

  public FKKBtn: DDI.BaseButton;
  public WLNBtn: DDI.BaseButton;
  public JNBtn: DDI.BaseButton;

  public TeamPic: eui.Image;
  public TeamBtn: DDI.BaseButton;



  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initData(): void {
    super.initData();
    this.rectBorderWidth = 0;
    this.rectBackgroundAlpha = 0;
    this.label.visible = false;
    this.addTeamPic();
    this.addWln();
    this.addFkk();
    this.addJn();
    this.addTeamButton(App.Localize("PartOne.team"));
    this.addJnButton(App.Localize("Common.JINING"));
    this.addFkkButton(App.Localize("Common.FANGKEKE"));
    this.addWlnButton(App.Localize("Common.WANGLINA"));


  }

  public initUI(): void {
    super.initUI();

  }


  // 添加button
  public addTeamPic(): void {
    this.TeamPic = new eui.Image();
    this.TeamPic.source = 'Team_png';
    this.TeamPic.scaleX = 0.6;
    this.TeamPic.scaleY = 0.6;
    this.TeamPic.left = 0;
    this.TeamPic.verticalCenter = -150;
    this.addChildAt(this.TeamPic,10);
  }

  public addTeamButton(text: string): void {
    this.TeamBtn = new DDI.BaseButton(new BaseController(), new eui.Group());
    this.TeamBtn.text = text;
    this.TeamBtn.left = 0;
    this.TeamBtn.label.size = 24;
    this.TeamBtn.rect.fillAlpha = 0;
    this.TeamBtn.label.textColor = 0x4a4a4a;
    this.TeamBtn.contentGroup.width = 150;
    //395
    this.TeamBtn.contentGroup.verticalCenter = -150;
    this.addChildAt(this.TeamBtn,11);
  }

  public addFkkButton(text: string): void {
    this.FKKBtn = new DDI.BaseButton(new BaseController(), new eui.Group());
    this.FKKBtn.text = text
    this.FKKBtn.contentGroup.horizontalCenter = 0;
    this.FKKBtn.bottom = -900;
    this.FKKBtn.label.size = 26;
    this.FKKBtn.color = Common.FANGKEKE;
    this.FKKBtn.contentGroup.width = 150;
    this.FKKBtn.radius = 20;

    
    //添加按钮下面的描述标签
    const descLabel = this.makeDescriptionLabel(App.Localize("PartOne.responsibilityTwo"),0,940)
    this.addChildAt(descLabel,5)
    this.addChildAt(this.FKKBtn,6)
  }

  public addWlnButton(text: string): void {
    this.WLNBtn = new DDI.BaseButton(new BaseController(), new eui.Group());
    this.WLNBtn.text = text
    this.WLNBtn.contentGroup.horizontalCenter = 200;
    this.WLNBtn.bottom = -900;
    this.WLNBtn.label.size = 26;
    this.WLNBtn.color = Common.WANGLINA;
    this.WLNBtn.contentGroup.width = 150;
    this.WLNBtn.radius = 20;
    const descLabel = this.makeDescriptionLabel(App.Localize("PartOne.responsibilityThree"),200,940)
    this.addChildAt(descLabel,9)
    this.addChildAt(this.WLNBtn,10)
  }

  public addJnButton(text: string): void {
    this.JNBtn = new DDI.BaseButton(new BaseController(), new eui.Group());
    this.JNBtn.text = text
    this.JNBtn.contentGroup.horizontalCenter = -200;
    this.JNBtn.bottom = -900;
    this.JNBtn.label.size = 26;
    this.JNBtn.color = Common.JINING;
    this.JNBtn.contentGroup.width = 150;
    this.JNBtn.radius = 20;
        //添加按钮下面的描述标签
    const descLabel = this.makeDescriptionLabel(App.Localize("PartOne.responsibilityOne"),-200,940)
    this.addChildAt(descLabel,7)
    this.addChildAt(this.JNBtn,8)
  }

  public addFkk(): void {
    this.FKK = new eui.Image();
    this.FKK.source = 'fkk_smile_png';
    this.FKK.scaleX = 0.75;
    this.FKK.scaleY = 0.75;
    this.FKK.bottom = -380;
    this.FKK.horizontalCenter = 0;
    this.addChildAt(this.FKK, 1);
  }

  public addJn(): void {
    this.JN = new eui.Image();
    this.JN.source = 'jn_smile_png';
    this.JN.scaleX = 0.75;
    this.JN.scaleY = 0.75;
    this.JN.bottom = -380;
    this.JN.horizontalCenter = -200;
    this.addChildAt(this.JN, 0);
  }

  public addWln(): void {
    this.WLN = new eui.Image();
    this.WLN.source = 'wln_normal_png';
    this.WLN.scaleX = 0.75;
    this.WLN.scaleY = 0.75;
    this.WLN.bottom = -380;
    this.WLN.horizontalCenter = 200;
    this.addChildAt(this.WLN, 2);
  }

  public onAddedToStage(): void {
    this.startAnimation();
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }

  public changeLabel(args): void {
    typeof args == 'string' ? this.labelText = args : this.labelTextFlow = args
  }
  public makeDescriptionLabel(text:string,horizontalCenter:number,y:number):DDI.BaseLabel{
    //添加按钮下面的描述标签
    const descLabel = new DDI.BaseLabel(new BaseController(), new eui.Group());
    descLabel.contentGroup.verticalCenter = undefined;
    descLabel.contentGroup.horizontalCenter = horizontalCenter;
    descLabel.y = y;
    descLabel.rectBorderWidth = 0;
    descLabel.rectBackgroundAlpha = 1;
    descLabel.contentGroup.width = 180;
    descLabel.label.textColor = 0x2b2b2b;
    descLabel.label.left = 15;
    descLabel.label.top = 30;
    descLabel.label.right = 15;
    descLabel.label.bottom = 15;
    descLabel.labelText = text;
    return descLabel;
  }
}