class TopBarPopup2 extends BaseEuiView {  
  public bg_group:eui.Group;
  public tipLabel:eui.Label;
  public btnGroup:eui.Group;
  public btnTextLabel:eui.Label;
  public firstLinkLabel:eui.Label;


  constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);
    this.skinName = "resource/ddi_skins/TopBarPopup_2.exml"
    // this.closeAllPop();
    this.initLanguage();
    this.close();//默认关闭
  }  
  initLanguage(){
    this.tipLabel.text = "是否确认重做"
    this.btnTextLabel.text = "暂不重做"
    this.firstLinkLabel.text = "确认重做"
  }
  initData(): void {
    super.initData();
  }
  initUI(): void {
    super.initUI();
    this.initUIEvent()
  }
  public initUIEvent():void{
    //点击继续按钮
    this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      event.stopImmediatePropagation();
      //默认关闭对话框即可
      App.ViewManager.close(ViewConst.TopBarPopup2)
    },this)
    this.firstLinkLabel.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      event.stopImmediatePropagation();
      const userId = App.UserInfo.takeUserInfo().userId;
      const simulationId = App.UserInfo.takeUserInfo().simulationId;
      HttpService.post(`/v1/simulation/${simulationId}/card?userId=${userId}`,{}).then(response=>{
        //页面跳转；到首页
        location.reload();
      })
      //关闭对话框
      App.ViewManager.close(ViewConst.TopBarPopup2)
    },this)
    
    this.bg_group.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      event.stopImmediatePropagation();
      event.preventDefault();
    },this)
  }
}