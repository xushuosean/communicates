class PartTwoWeiyuSayView extends DDI.BaseTalk {

    public constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent)
    }
  
    public initTalk(): void {
      super.initTalk();
      CommonInit.initTalk({
        text: App.Localize("PartTwo.talkOne"),
        borderWidth: 2,
        borderColor: Common.WEIYU,
        marginBottom: 45,
        backgroundAlpha: 1,
        hrTop: 150,
        hrSource: 'wy_angry_png',
        animation: true,
        buttonText: App.Localize('Common.WEIYU'),
        buttonPosition: DDI.POSITION.RIGHT
      }, this)
    }
  
  }