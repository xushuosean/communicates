class PartTwoStarView extends BaseEuiView {

  // 皮肤设置的id
  public contentGroup: eui.Group;

  public backRect: eui.Rect;

  public topGroup: eui.Group;
  public topImg: eui.Image;
  public topLabel: DDI.BaseLabel;

  public centerGroup: eui.Group;
  public centerImg: eui.Image;
  public centerLabel: DDI.BaseLabel;

  public bottomGroup: eui.Group;
  public bottomImg: eui.Image;
  public bottomLabel: DDI.BaseLabel;


  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
    this.skinName = "resource/ddi_skins/StarSkin.exml"

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initUI(): void {
    super.initUI();

    this.resetLabel();
  }

  public initData(): void {
    super.initData();

    this.setLabelText();
  }

  // 当前view被添加到上面时
  public onAddedToStage(): void {
    this.startAnimation();
  }

  // 改变图片资源
  public changeImg(args): void {
    
  }

  // 更改label文字
  public changeLabel(args): void {
    
  }

  // animation
  public startAnimation(): void {
    this.alpha = 1;

    this.backRect.alpha = 0;
    // 更改label初始位置
    this.setLabelsPosition();

    // 动画改变位置
    this.animationChange();

  }

  // 重置label样式
  public resetLabel(): void {
    let labels: Array<DDI.BaseLabel> = [this.topLabel, this.centerLabel, this.bottomLabel]

    labels.map(label => {
      label.contentGroup.width = 500;
      label.contentGroup.horizontalCenter = undefined;
      label.rectBorderWidth = 0;
      label.label.textColor = 0x2E2E2E;
      label.label.top = label.label.bottom = 20;
      label.label.left = label.label.right = 16
      label.rectBorderRadius = 0;
      label.label.lineSpacing = 16;
    })
    this.centerLabel.contentGroup.right = 130;

    this.topLabel.contentGroup.width = 400;
    // this.centerLabel.contentGroup.width = 500;
  }

  // 设置label的文字
  public setLabelText(): void {
    this.topLabel.labelText = App.Localize('PartTwo.star1_1');
    this.centerLabel.labelText = App.Localize('PartTwo.star1_2');
    this.bottomLabel.labelText = App.Localize('PartTwo.star1_3');
  }

  // 更改label的初始位置
  private setLabelsPosition(): void {
    console.log(this.topGroup.x)
    console.log(this.contentGroup.width + (this.stage.stageWidth - this.contentGroup.width) / 2)
    this.topGroup.x = this.contentGroup.width + (this.stage.stageWidth - this.contentGroup.width) / 2;
    this.bottomGroup.x = this.topGroup.x;
    this.centerGroup.x = -this.topGroup.x;
  }

  // 动画改变位置
  private animationChange(): void {
    let top = egret.Tween.get(this.topGroup)
    let center = egret.Tween.get(this.centerGroup)
    let bottom = egret.Tween.get(this.bottomGroup)
    
    this.topGroup.alpha = 0;
    this.centerGroup.alpha = 0;
    this.bottomGroup.alpha = 0;

    top.to({ x: 0, alpha: 1 }, 300, egret.Ease.sineIn)
    center.to({ x: 0, alpha: 1 }, 550, egret.Ease.sineIn)
    bottom.to({ x: 0, alpha: 1 }, 750, egret.Ease.sineIn).call(() => {
      this.backRect.alpha = 1
    })
  }

  // 改变图片资源文件&&文字
  public setImgAndText(type: number): void {
    this.topLabel.labelText = App.Localize(`PartTwo.star${type}_1`);
    this.centerLabel.labelText = App.Localize(`PartTwo.star${type}_2`);
    this.bottomLabel.labelText = App.Localize(`PartTwo.star${type}_3`);

    this.topImg.source = `star${type}-1_png`
    this.centerImg.source = `star${type}-2_png`
    this.bottomImg.source = `star${type}-3_png`

    if (type != 2) {
      let labels: Array<DDI.BaseLabel> = [this.topLabel, this.centerLabel, this.bottomLabel]
      labels.map(item => {
        item.contentGroup.width = 380
      })
    } else {
      let labels: Array<DDI.BaseLabel> = [this.topLabel, this.centerLabel, this.bottomLabel]
      labels.map(item => {
        item.contentGroup.width = 500;
      })

      this.topLabel.contentGroup.width = 400;
    }
  }

  public outAnimation(): egret.Tween {
    return App.TweenUtils.fadeOut(this);
  }

}