namespace DDI {
  export class BaseMC extends BaseEuiView {
    constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent);
    }

    public initUI(): void {
      super.initUI();
      this.initMC();
    }

    public initMC(): void {
      
    }
  }
}