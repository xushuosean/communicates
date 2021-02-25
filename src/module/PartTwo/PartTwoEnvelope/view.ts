class PartTwoEnvelopeView extends BaseOpen {
    public constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent)
  
      this.skinName = 'resource/ddi_skins/BaseEnvelope.exml'
    }
  
    public initUI(): void {
      super.initUI()
      this.tips.textColor = Common.TIPS_COLOR;
      this.title.text = App.Localize("PartTwo.envelop_title");
      this.tipsContent.text = App.Localize("PartTwo.envelop_tipText");
    }
  
    public initData(): void {
      super.initData()
    }
  
    public onAddStage(): void {
      /**
       * 开始动画效果
       */
      this.startAnimation();
    }
  
    // 动画初始化完成的回调
    public mcInited(): void {
      super.mcInited();
    }
  
    public animationEnd(): void {
      super.animationEnd();
      this.opendoorMC.gotoAndPlay('two', 1)
    }
    
    public callback(): void {
      super.callback();
      App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.HomeNext)
      App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, true)
    }
  
  }