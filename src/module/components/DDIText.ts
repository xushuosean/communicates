class DDIText extends eui.Label {
  public _textFlow: Array<egret.ITextElement>

  constructor() {
    super();
  }

  public set textLine(value: Array<egret.ITextElement>) {
    this._textFlow = value;

    this._textFlow.map((_, index) => {

      if (_.hasOwnProperty('line')) {
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle( 4, 0xDCDCDC );
        shp.graphics.moveTo( this.startX(_.obj), this.startY(_.obj, index) );
        shp.graphics.lineTo( this.endX(_.obj), this.endY(_.obj, index) );
        shp.graphics.endFill();
        _.obj.parent.addChild( shp );

      }
      
    })

    this.textFlow = this._textFlow;
  }

  public get textLine(): Array<egret.ITextElement> {
    return this._textFlow;
  }

  public startX(obj: eui.Label): number {
    return (obj.parent.width - obj.width) / 2
  }

  public startY(obj: eui.Label, index: number): number {
    return obj.y + index * obj.textHeight + obj.textHeight / 2 + index * obj.lineSpacing
  }

  public endX(obj: eui.Label): number {
    return (obj.parent.width - obj.width) / 2 + obj.width
  }

  public endY(obj: eui.Label, index: number): number {
    return obj.y + index * obj.textHeight + obj.textHeight / 2 + index * obj.lineSpacing
  }
  
}

declare namespace egret {
  interface ITextElement {
    line?: boolean,
    obj?: eui.Label,
    ul?: boolean
  }
}