class PartTwoRectLabelView extends DDI.BaseLabel {
  labelTextField:egret.TextField
  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initData(): void {
    super.initData();
    this.rectBorderColor = 0xeb7f41;
    this.rectBorderWidth = 4;
    this.rectBackgroundAlpha = 0.9;
    this.changeLabel('one');
  }

  public initUI(): void {
    super.initUI();
    //清空上个决策树的滞留信息
  }

  public onAddedToStage(): void {
    this.startAnimation();
    // this.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
    //   App.ControllerManager.applyFunc(ControllerConst.PartTwoHome,PartTwoHomeConsts.HomeNext)
    // },this)
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }
  public changeLabel(indexName): void {
    typeof App.Localize("PartTwo.rectLabel_" + indexName) == "string"
      ? (this.labelFlow = App.Localize("PartTwo.rectLabel_" + indexName))
      : (this.labelTextFlow = App.StringUtils.setSingleChar(
          App.Localize("PartTwo.rectLabel_" + indexName) as any,
          20
        ));

        if(!this.labelTextField){
          this.labelTextField = new egret.TextField();
          this.labelTextField.wordWrap = true;
          this.labelTextField.width = 520;
          this.labelTextField.x = 30;
          this.labelTextField.y = 50;
          this.labelTextField.textColor = 0x4A4A4A
          this.labelTextField.lineSpacing = 14;
          this.labelTextField.size = 26;
          this.contentGroup.addChild(this.labelTextField)
        }
        const text = App.Localize("PartTwo.rectLabel_" + indexName);
        //清空原本的label文案
        this.label.text = "";
        typeof text == 'string' ? this.labelTextField.text = text : this.labelTextField.textFlow = text
        //由于textFiled元素无法支撑起聊天框的大小，因此需要给label设置自己的高度,由空内容的label支撑高度
        this.label.height = this.labelTextField.height;

  }
}
