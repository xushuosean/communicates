class partTwoTalkView extends DDI.BaseTalk {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      text: App.Localize("PartTwo.phoneTalkOne"),
      borderWidth: 2,
      borderColor: Common.LINWEI,
      marginBottom: 45,
      backgroundAlpha: 1,
      hrBottom:0,
      hrSource: 'lw_normal_png',
      animation: true,
      buttonText: App.Localize('Common.LINWEI'),
      buttonPosition: DDI.POSITION.RIGHT
    }, this)
    this.hr.scaleX = this.hr.scaleY = 1.2;
    this.hr.horizontalCenter = 0;
  }

}