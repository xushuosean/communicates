class UniteMovieClip extends eui.Component{

  // 实例列表
  public mcInstanceList: any;
  // 当前显示的实例
  public currentInstance: egret.MovieClip;

  constructor() {
    super();
    this.mcInstanceList = {}
  }

  public push(name, mc): void {
    this.mcInstanceList[name] = mc
  }

  // 保证资源名称和动作名称是一致的，才可以直接调用，否则多传一个动作的参数
  public gotoAndPlay(name, times, label?: string): void {
    if (this.mcInstanceList[name] && !label) {
      // 移除当前
      this.$children.length > 0 ? this.removeChildAt(0) : ''
      this.currentInstance = this.mcInstanceList[name]
      this.addChildAt(this.mcInstanceList[name], 0)
      this.mcInstanceList[name].gotoAndPlay(name, times)
    } else if (this.mcInstanceList[name] && label) {
      // 移除当前
      this.$children.length > 0 ? this.removeChildAt(0) : ''
      this.currentInstance = this.mcInstanceList[name]
      this.addChildAt(this.mcInstanceList[name], 0)
      this.mcInstanceList[name].gotoAndPlay(label, times)
    } else {
      console.error(`动画列表中不存在${name}动作`)
    }
  }

  // 重写监听
  public addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): any {
    super.addEventListener(type, listener, thisObject, useCapture, priority)
    this.currentInstance.addEventListener(type, listener, thisObject, useCapture, priority)
  }

  public setAllZero(): void {
    // this.mcInstanceList.left = this.mcInstanceList.right = this.mcInstanceList.top = this.mcInstanceList.bottom = 0;
    this.currentInstance.scaleY = this.stage.stageHeight / this.currentInstance.height;
    this.currentInstance.scaleX = this.stage.stageWidth / this.currentInstance.width;
  }

}