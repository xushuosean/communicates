class PartOneTalkView extends DDI.BaseTalk {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      text: App.Localize("PartOne.talkOne"),
      borderWidth: 2,
      borderColor: Common.JINING,
      buttonColor: Common.JINING,
      marginBottom: 45,
      buttonText: App.Localize("Common.JINING"),
      hrSource: 'jn_smile_png',
      hrTop: 150,
      backgroundAlpha: 1
    }, this)
  }

}