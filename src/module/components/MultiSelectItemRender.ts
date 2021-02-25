/**
 * 任务的渲染器
 */
class MultiSelectItemRender extends eui.ItemRenderer {
  public itemLabel:eui.Label;

  public itemRect: eui.Rect;

  public constructor() {
      super();
  }

  public dataChanged() {
      super.dataChanged();
      if (this.itemLabel) {
          this.itemLabel.text = this.data.label;
          this.itemLabel.textColor = this.data.color;
          this.itemLabel.size = 26;
      }
      if (this.itemRect) {
        this.itemRect.fillColor = this.data.fillColor;
      }
  }

  public partAdded(partName:string, instance:any):void {
      super.partAdded(partName, instance);
      if (!this.data)
          return;

      if (instance == this.itemLabel) {
          this.itemLabel.text = this.data.label;
          this.itemLabel.textColor = this.data.color
          this.itemLabel.size = 26;
      }
      if (instance == this.itemRect) {
        this.itemRect.fillColor = this.data.fillColor;
      }
  }
}