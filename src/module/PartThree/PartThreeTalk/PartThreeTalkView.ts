class PartThreeTalkView extends DDI.BaseTalk {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      text: App.Localize("PartThree.talkOne"),
      borderWidth: 2,
      borderColor: Common.KESHENG,
      marginBottom: 45,
      backgroundAlpha: 1,
      hrTop: 150,
      hrSource: 'KESHENG_smile_png',
      animation: true,
      buttonText: App.Localize('Common.KESHENG'),
      buttonPosition: DDI.POSITION.RIGHT
    }, this)
  }

}