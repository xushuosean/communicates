class TopBarPopup1 extends BaseEuiView {  
  public bg_group:eui.Group;

  public tipLabel:eui.Label;
  public btnGroup:eui.Group;
  public btnTextLabel:eui.Label;
  public firstLinkLabel:eui.Label;
  public secondLinkLabel:eui.Label;
  private vConsoleTapCount:number = 0;
  constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);
    this.skinName = "resource/ddi_skins/TopBarPopup_1.exml"
    this.initLanguage();
    this.tipLabel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showVConsole,this)
  } 
  showVConsole(){
    this.vConsoleTapCount ++;
    if(this.vConsoleTapCount === 10){
      new VConsole()
    }else if(this.vConsoleTapCount > 10){
      this.tipLabel.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.showVConsole,this)
    }
  } 
  initLanguage(){
    this.tipLabel.text = "确认是否退出？"
    this.btnTextLabel.text = "继续"
    this.firstLinkLabel.text = "保存并退出"
    this.secondLinkLabel.text = "重做"
  }
  initData(): void {
    super.initData();
  }
  initUI(): void {
    super.initUI();
    this.switchWhichPop(1)
    this.initUIEvent();
  }
  private backToAngular(){
    const simulationId = App.UserInfo.takeUserInfo().simulationId;
    // const simulationId = App.UserInfo.takeUserInfo().simulationId;
    const testHref = `${location.protocol}//${location.hostname}/egret-practice-communicate/${simulationId}`
    // const testHref = `http://m-dev.transtalent.cn/yyddi/case-practice-performance/${learningPathId}/${simulationId}`
    location.href = testHref
  }
  public initUIEvent():void{
    //点击继续按钮
    this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      event.stopImmediatePropagation();
      //默认关闭对话框即可
      App.ViewManager.close(ViewConst.TopBarPopup1)
    },this)
    this.firstLinkLabel.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      //保存点
      Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(),App.Savepoint.takeSavepoint())
      this.backToAngular();
      event.stopImmediatePropagation();
      //关闭对话框
      App.ViewManager.close(ViewConst.TopBarPopup1)
    },this)
    this.secondLinkLabel.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      event.stopImmediatePropagation();
      //关闭本对话框
      App.ViewManager.close(ViewConst.TopBarPopup1)
      //打开第二个对话框
      App.ViewManager.open(ViewConst.TopBarPopup2)
    },this)
    this.bg_group.addEventListener(egret.TouchEvent.TOUCH_TAP,(event)=>{
      event.stopImmediatePropagation();
      event.preventDefault();
    },this)
  }
  public switchWhichPop(number){
    //默认number为1。开启第一个窗口
    // this.firstPopup.visible = number === 2 ? false:true;
    // this.secondPopup.visible = number === 2 ? true:false;
  }
  public closeAllPop(){
    // this.firstPopup.visible = this.secondPopup.visible = false;
  }
}