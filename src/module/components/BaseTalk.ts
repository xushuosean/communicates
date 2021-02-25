namespace DDI {
  export class BaseTalk extends DDI.BaseLabel {

    // 按钮
    public btn: DDI.BaseButton;

    public alphaLabel: eui.Label;
  
    // 人物
    public hr: eui.Image;
  
    public constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent)
  
      this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
    }
  
  
    public initData(): void {
      super.initData();
      this.addButton();
      this.addHr();

      this.afterInitData()
    }

    private afterInitData(): void {
      this.interval = 60;
      this.initTalk();
    }
  
    public initTalk(): void {
      this.label.wordWrap = true;
    }
  
    // addHr
    public addHr(): void {
      if (!this.hr) {
        this.hr = new eui.Image();
        this.hr.horizontalCenter = 0;
        this.addChildAt(this.hr, 0)
      }
    }
  
    // 添加button
    public addButton(): void {
      this.btn = new DDI.BaseButton(new BaseController(), new eui.Group());
      this.btn.x = 400;
      this.btn.y = -30;
      this.btn.label.size = 26;
      this.btn.color = Common.KESHENG;
      this.btn.contentGroup.width = undefined;
      this.btn.label.left =this.btn.label.right = 30;
      this.btn.radius = 30;
      this.contentGroup.addChild(this.btn)
    }
  
    // 更改button值
    public changeButtonText(text: string): void {
      this.btn.text = text
    }
  
    public onAddedToStage(): void {
      this.startAnimation();
    }
  
    // label值被修改后的回调
    public labelTextChanged(): void {
      super.labelTextChanged();
    }
  
    public startAnimation(): void {
      App.TweenUtils.enLarge(this.contentGroup)
      console.log('here run staranimation123123')
    }
  
    public changeLabel(text: string): void {
      console.log('here run text : ' + text)
      this.labelText = text
    }
  
    public beforeOut(): void {
      super.beforeOut();
      console.log('here run hr out')
      App.TweenUtils.fadeOut(this.hr)
    }
  
  }
}
