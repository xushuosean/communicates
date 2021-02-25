class PartOneNPCController extends BaseController {

  private partOneNPC: PartOneNPCView;

  public mood: string = '';
  constructor() {
    super()

    this.partOneNPC = new PartOneNPCView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneNPC, this.partOneNPC);

    this.registerFunc(PartOneNPCConsts.changeLabel, this.changeLabel, this)

    this.registerFunc(PartOneNPCConsts.outAnimation, this.outAnimation, this)

    this.registerFunc(PartOneNPCConsts.getMood, this.getMood, this)

  }

  private changeLabel(args): void {
    let name = {
      'JINING': App.Localize('Common.JINING'),
      'FANGKEKE': App.Localize('Common.FANGKEKE'),
      'WANGLINA':  App.Localize('Common.WANGLINA'),
    }[args.npc] || '';

    let hrSource = {
      'JINING': 'jn',
      'FANGKEKE': 'fkk',
      'WANGLINA':  'wln',
    }[args.npc] || ''

    let buttonColor = {
      'JINING': Common.JINING,
      'FANGKEKE': Common.FANGKEKE,
      'WANGLINA':  Common.WANGLINA
    }[args.npc] || Common.KESHENG

    if (args.mood) {
      CommonInit.initTalk({
        borderWidth: 2,
        borderColor: buttonColor,
        text: args.content,
        buttonText: name,
        hrSource: `${hrSource}_${args.mood}_png`,
        animation: true,
        buttonColor: buttonColor
      }, this.partOneNPC)

      this.mood = `${hrSource}_${args.mood}_png`;
    }
  }

  private getMood(): string {
    return this.mood;
  }

  private outAnimation(): egret.Tween {
    return this.partOneNPC.outAnimation();
  }

}