class partThreeNPCController extends BaseController {

  private partThreeNPC: partThreeNPCView;

  public mood: string = '';
  constructor() {
    super()

    this.partThreeNPC = new partThreeNPCView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partThreeNPC, this.partThreeNPC);

    this.registerFunc(partThreeNPCConst.changeLabel, this.changeLabel, this)

    this.registerFunc(partThreeNPCConst.outAnimation, this.outAnimation, this)

    this.registerFunc(partThreeNPCConst.getMood, this.getMood, this)

  }

  private changeLabel(args): void {
    let name = args.npc == 'KESHENG' ? App.Localize('Common.KESHENG') : '';

    if (args.mood) {

      CommonInit.initTalk({
        borderWidth: 2,
        borderColor: Common.KESHENG,
        text: args.content,
        buttonText: name,
        hrSource: `${args.npc}_${args.mood}_png`,
        animation: true
      }, this.partThreeNPC)

      this.mood = `${args.npc}_${args.mood}_png`;
    }
  }

  private getMood(): string {
    return this.mood;
  }

  private outAnimation(): egret.Tween {
    return this.partThreeNPC.outAnimation();
  }

}