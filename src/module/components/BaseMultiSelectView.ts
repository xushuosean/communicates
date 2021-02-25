class BaseMultiSelectView extends BaseEuiView {

  public containerGroup: eui.Group;
  public titleGroup: eui.Group;
  public typeTitleGroup: eui.Group;
  public typeGroup: eui.Group;
  public selectGroup: eui.Group;
  public submitGroup: eui.Group;
  public bottomGroup: eui.Group;

  public typeLabel: eui.Label;

  // 提示toast id
  public tipsGroup: eui.Group;

  // 解释Group id
  public explainGroup: eui.Group;

  public explainLabel: eui.Label;

  public submitRect: eui.Rect;
  public submitLabel: eui.Label;

  public titleLabel: eui.Label;

  public littleTitle: eui.Label;
  public littleImg: eui.Image;

  public selectedItem: any;

  public dataProvider:eui.ArrayCollection;
  public selectList:eui.List;
  public scroller:eui.Scroller;

  public itemArr: Array<number> = new Array();

  public key: eui.Label = new eui.Label();

  public singleSelect: boolean = false;

  /**
   * 选中的id
   */
  public selected: Array<number> = new Array()

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.skinName = 'resource/skins/MultiSelectSkin.exml';

    this.dataProvider = new eui.ArrayCollection();

    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  public initUI(): void{
    super.initUI();

    this.typeTitleGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bookView, this)

    var layout:eui.VerticalLayout = new eui.VerticalLayout();
    layout.horizontalAlign = "center";
    layout.gap = 20;

    //创建一个列表
    this.selectList = new eui.List();
    this.selectList.itemRenderer = MultiSelectItemRender;
    this.selectList.itemRendererSkinName = "resource/skins/MultiSelectItemSkin.exml";
    this.selectList.dataProvider = this.dataProvider;
    this.selectList.layout = layout;

    this.selectList.useVirtualLayout = true

    //创建一个 Scroller
    this.scroller = new eui.Scroller();
    this.scroller.percentWidth = 100;
    this.scroller.percentHeight = 100;

    this.scroller.top = 5;
    this.scroller.viewport = this.selectList;
    this.selectGroup.addChild(this.scroller);

    this.selectList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.listTap, this)
  }

  public initData(): void {
    super.initData();
  }

  public listTap(e: egret.Event): void {

    let index = e.currentTarget.selectedIndex
    let label = e.currentTarget.selectedItem
    this.selectedItem = label
    let obj:Object = new Object()
    console.log('long tap')

    // 多选控制

    if (!this.singleSelect) {
      if (label && label.color == 0x4a4a4a) {
        label.fillColor = 0x645DE2
        label.color = 0xffffff
        obj = label
        this.itemArr.push(index)
  
        this.selected.push(label.id)
      } else if (label){
        label.fillColor = 0xffffff
        label.color = 0x4a4a4a
        obj = label
        this.itemArr.splice(this.itemArr.indexOf(index), 1)
        this.selected.splice(this.selected.indexOf(label.id), 1)
      }
    } else {
      // 单选控制
      if (label && label.color == 0x4a4a4a) {
        this.selectList.$children.map(item => {
          item['_data'].color = 0x4a4a4a;
          item['_data'].fillColor = 0xffffff;
        })
        console.log(label)
        label.fillColor = 0x645DE2
        label.color = 0xffffff
  
        this.selected = [label.id]
      }
    }


    // 控制按钮颜色
    if (this.selected.length > 0) {
      this.submitRect.fillColor = 0x645DE2;
    } else {
      this.submitRect.fillColor = 0xC4C4CB;
    }
    this.dataProvider.refresh()
  }

  /**
   * 显示能力工具书，用于子类继承
   */
  public bookView(): void {

  }

  public onAddToStage(): void {
    this.startAnimation();
  }
  
  public startAnimation(): void {
    let tw = egret.Tween.get(this.containerGroup)
    this.containerGroup.bottom = -150;
    tw.to({ bottom: 0 }, 300)
  }

  public outAnimation(): egret.Tween {
    return App.TweenUtils.fadeOut(this.containerGroup)
  }

  
}