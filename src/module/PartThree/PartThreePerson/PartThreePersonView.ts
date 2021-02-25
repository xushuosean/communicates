class PartThreePersonView extends BaseEuiView {

  private group: eui.Group;
  private label: eui.Label;
  private image: eui.Image;

  private bottomGroup: eui.Group;
  private bottomLabel: eui.Label;
  private bottomImage: eui.Image;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.AddToStage, this)

  }

  public initUI(): void {
    super.initUI();
    
    App.ViewManager.closeView(App.ViewManager.getView(ViewConst.TopBar))

    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTap, this)
    }, 1000);
    this.addLabel();
    this.addBottomLabel();
  }

  private AddToStage(): void {

    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.changeBackImage, '')

    Api.Simulation.calcKa(App.UserInfo.takeCardId()).then(res => {

      let ka: Array<any> = res as any
      let score = ka.map(item => {
        return item.star
      }).reduce((acc, cur) => {
        return acc + cur
      })
      let level = (score <= 9 && 1) || (score <= 20 && score >= 10 && 2) || (score <= 34 && score >= 21 && 3) || (score > 34 && 4) || 0;

      switch (level) {
        case 1:
          App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.changeBackImage, 'end1-min_png')
          this.label.textFlow = [{ text: "天已黑，夜已深，\n"}, { text: "结束了糟心的一天，疲惫。"}];
          break;
        case 2:
          App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.changeBackImage, 'end2-min_png')
          this.label.textFlow = [{ text: "辛苦忙了一整天，\n"}, { text: "诸事不顺，心太累。"}];
          break;
        case 3:
          App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.changeBackImage, 'end3-min_png')
          this.label.textFlow = [{ text: "忙碌了一天，还算不错，\n"}, { text: "满意的下班了。"}];
          break;
        case 4:
          App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.changeBackImage, 'end4-min_png')
          this.label.textFlow = [{ text: "得心应手得处理完一天得工作，\n"}, { text: "开开心心下班了"}];
          break;
        default:
          App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.changeBackImage, 'end1-min_png')
          this.label.textFlow = [{ text: "天已黑，夜已深，\n"}, { text: "结束了糟心的一天，疲惫。"}];
      }

    })
  }

  private touchTap(): void {
    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTap, this);

    let cardId = App.UserInfo.takeCardId();
    Api.Simulation.setStatus(cardId, 1).then(() => {
      location.href = `${location.protocol}//${location.hostname}/egret-practice-communicate-report/${App.UserInfo.takeUserInfo().simulationId}/${App.UserInfo.takeCardId()}`
    })
  }

  private addLabel(): void {
    this.group = new eui.Group();
    this.label = new eui.Label();

    this.image = new eui.Image();
    this.image.source = 'backBlack_png'

    this.label.left = 40;
    this.label.lineSpacing = 20;
    this.label.verticalCenter = 0;
    this.label.size = 26;
    
    this.group.addChild(this.image);
    this.group.addChild(this.label);

    this.group.left = 0;
    this.group.verticalCenter = -200;

    this.addChild(this.group); 
  }

  private addBottomLabel(): void {
    this.bottomGroup = new eui.Group();
    this.bottomLabel = new eui.Label();
    console.log('this is bottomLabel' + this.bottomLabel)

    this.bottomImage = new eui.Image();
    this.bottomImage.source = 'backBlackBottom_png'

    this.bottomLabel.text = '继续查看报告';
    this.bottomLabel.right = 40;
    this.bottomLabel.lineSpacing = 20;
    this.bottomLabel.verticalCenter = 0;
    this.bottomLabel.size = 26;

    this.bottomGroup.addChild(this.bottomImage);
    this.bottomGroup.addChild(this.bottomLabel);

    this.bottomGroup.right = 0;
    this.bottomGroup.bottom = 40;

    this.addChild(this.bottomGroup);
  }

}