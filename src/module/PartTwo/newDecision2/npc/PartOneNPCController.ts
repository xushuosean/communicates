class PartTwoNPCController extends BaseController {

  private PartTwoNPC: PartTwoNPCView;

  public mood: string = '';
  constructor() {
    super()

    this.PartTwoNPC = new PartTwoNPCView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoNPC, this.PartTwoNPC);

    this.registerFunc(PartTwoNPCConsts.changeLabel, this.changeLabel, this)

    this.registerFunc(PartTwoNPCConsts.outAnimation, this.outAnimation, this)

    this.registerFunc(PartTwoNPCConsts.getMood, this.getMood, this)

  }

  private changeLabel(args): void {
    let name = {
      'JINING': App.Localize('Common.JINING'),
      'FANGKEKE': App.Localize('Common.FANGKEKE'),
      'WANGLINA':  App.Localize('Common.WANGLINA'),
      'WEIYU':  App.Localize('Common.WEIYU'),
      'LINWEI':  App.Localize('Common.LINWEI'),
    }[args.npc] || '';

    let hrSource = {
      'JINING': 'jn',
      'FANGKEKE': 'fkk',
      'WANGLINA':  'wln',
      'LINWEI':  'lw'
    }[args.npc] || ''

    let buttonColor = {
      'JINING': Common.JINING,
      'FANGKEKE': Common.FANGKEKE,
      'WANGLINA':  Common.WANGLINA,
      'LINWEI':  Common.KESHENG
    }[args.npc] || Common.KESHENG

    if (args.mood) {
      CommonInit.initTalk({
        borderWidth: 2,
        borderColor: Common.LINWEI,
        text: args.content,
        buttonText: name,
        hrSource: `${hrSource}_${args.mood}_png`,
        animation: true,
        buttonColor: buttonColor
      }, this.PartTwoNPC)

      this.mood = `${hrSource}_${args.mood}_png`;
    }
  }

  private getMood(): string {
    return this.mood;
  }

  private outAnimation(): egret.Tween {
    return this.PartTwoNPC.outAnimation();
  }

}