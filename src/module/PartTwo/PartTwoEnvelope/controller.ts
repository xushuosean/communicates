class PartTwoEnvelopeController extends BaseController {
    private partTwoEnvelope: PartTwoEnvelopeView;
  
    public constructor() {
        super();
  
        // 初始化UI
        this.partTwoEnvelope = new PartTwoEnvelopeView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.PartTwoEnvelope, this.partTwoEnvelope);
    }
  }