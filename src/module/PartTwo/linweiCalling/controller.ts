class partTwoCallingController extends BaseController {
    private view: partTwoCallingView;
    public constructor() {
      super();
      this.view = new partTwoCallingView(this, LayerManager.UI_Popup)
      App.ViewManager.register(ViewConst.partTwoCalling, this.view)

      this.registerFunc(PartTwolinweiAvatarConst.changeVisible,(visible)=>{
        this.view.changeVisible(visible)
      }, this)
    }
  
  }