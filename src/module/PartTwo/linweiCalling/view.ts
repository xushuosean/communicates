class partTwoCallingView extends BaseEuiView {
    public avatar:eui.Image;
    constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent);
        this.initUI()
    }
    public initData(): void {
      super.initData();
    }
    public initUI(): void {
      super.initUI();
    this.drawTransparentTitle()
    }
      public drawTransparentTitle():void{
        let group:eui.Group = new eui.Group();
    
        group.x = 0;
        group.y = 80;
        group.width = 300;
        group.height = 130;
        let rect = new eui.Image();
        rect.source = 'shadow-react_png';
        rect.width = 300;
        rect.height = 130;
        group.addChild(rect);
    
        let texField = new egret.TextField();
        texField.textFlow = new egret.HtmlTextParser().parse(
          "<font size='36'>林薇  </font><font size='24'>视频中...</font>"
          )
        texField.x = 50;
        texField.y = 46;
        group.addChild(texField);
        this.addChild(group)
      }
      public changeVisible(visible:boolean){
          this.visible = visible
      }
  }