class GuidePointer extends BaseEuiView {
  public tipLabel:eui.Label;
    constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent);
      this.skinName = "resource/ddi_skins/GuidePointer.exml"

      this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddToStage, this)
    }
  
    initData(): void {
      super.initData();
    }
    initUI(): void {
      super.initUI();
    }

    public onAddToStage(): void {
      this.startAnimation();
      this.tipLabel.text = App.Localize("PartOne.clickContinue") 
    }

    private startAnimation(): void {
      // 获取距离左边界的距离
      let offsetX = (this.stage.stageWidth - this.width)/2;
      //初始化动画起点的left值
      this.left = -(offsetX+this.width);
      //开始动画
      egret.Tween.get( this ).to( {left:0}, 400 );
      
    }

    public outAnimation(): egret.Tween {
      let tweens = egret.Tween.get(this)

      let offsetX = (this.stage.stageWidth - this.width)/2;
      //初始化动画起点的left值
      let left = -(offsetX+this.width);

      return tweens.to({ left: left, alpha: 0 }, 400, egret.Ease.sineIn)
    }
  }