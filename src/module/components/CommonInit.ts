
/**
 * init DDI.BaseLabel
 */
interface ddiLabel {
  text?: string | Array<any>,
  color?: number,
  borderWidth?: number,
  borderColor?: number,
  borderRadius?: number,
  backgroundAlpha?: number,
  backgroundColor?: number,
  size?: number,
  /**
   * 设置文本框距底位置
   */
  marginBottom?: number,
    /**
   * 设置文本框左右居中方式
   */
  horizontalCenter?: number,
  /**
   * 设置文本框上下居中方式
   */
  verticalCenter?: number
}

/**
 * init DDI.Talk
 */

interface ddiTalk extends ddiLabel {
  /**
   * 设置文本框距底位置
   */
  marginBottom?: number,
  /**
   * 设置人物距底位置
   */
  hrBottom?: number,
  
  /**
   * 设置人物距顶位置
   * 优先级高于bottom
   */
  hrTop?: number,
  /**
   * 设置按钮文字
   */
  buttonText?: string,
  /**
   * 设置按钮底色
   */
  buttonColor?: number,
  /**
   * 设置按钮位置
   */
  buttonPosition?: DDI.POSITION,
  /**
   * 设置人物资源
   */
  hrSource?: string,
  /**
   * 是否动画
   */
  animation?: boolean
}

interface ddiOpen {
  title?: string,
  tipsText?: string,
  tipsColor?: number
}

interface ddiLongTap {
  title?: string,
  color?: number,
  dataSource?: Array<any>
}

namespace DDI {
  export class POSITION {
    /**
     * 靠左
     */
    public static LEFT = "left"
    /**
     * 靠右
     */
    public static RIGHT = "right"
  }
}


class CommonInit {
  /**
   * 
   * @param obj 源数据
   * @param vm 需要更改的实例
   */
  public static initLabel(obj: ddiLabel, vm: DDI.BaseLabel): void {
    // 设置文本

    if (obj.text) {
      typeof obj.text == 'string' ? vm.labelText = obj.text : vm.labelTextFlow = obj.text
      
      // 这里为打字机效果赋值
      vm['alphaLabel'].text = obj.text
    }

    // 设置文本颜色
    obj.color && (vm.label.textColor = obj.color);

    // 设置边框宽度
    (obj.borderWidth || obj.borderWidth == 0 ) && ( vm.rectBorderWidth = obj.borderWidth );

    // 设置边框颜色
    (obj.borderColor || obj.borderColor == 0 ) && ( vm.rectBorderColor = obj.borderColor );

    // 设置边框圆角
    obj.borderRadius && ( vm.rectBorderRadius = obj.borderRadius );

    // 设置背景透明度
    (obj.backgroundAlpha || obj.backgroundAlpha == 0) && ( vm.rectBackgroundAlpha = obj.backgroundAlpha );

    // 设置背景颜色
    (obj.backgroundColor || obj.backgroundColor == 0) && ( vm.rectBackgroudColor = obj.backgroundColor );

    // 设置文本大小
    ( obj.size || obj.size == 0 ) && ( vm.label.size = obj.size )

    // 设置文本框距底距离
    if (obj.marginBottom || obj.marginBottom == 0) {
      vm.contentGroup.verticalCenter = undefined
      vm.contentGroup.bottom = obj.marginBottom
    }

    // 设置文本框左右居中方式
    ( obj.horizontalCenter || obj.horizontalCenter == 0 ) && ( vm.contentGroup.horizontalCenter = obj.horizontalCenter );

    // 设置文本框上下居中方式
    ( obj.verticalCenter || obj.verticalCenter == 0 ) && ( vm.contentGroup.verticalCenter = obj.verticalCenter )
  }

  public static initTalk(obj: ddiTalk, vm: DDI.BaseTalk): void {
    CommonInit.initLabel(obj, vm)

    // 人物距底距离
    'hrBottom' in obj && ( vm.hr.bottom = obj.hrBottom )

    // 人物距顶距离
    // 优先级高于bottom
    if (obj.hrTop || obj.hrTop == 0) {
      vm.hr.bottom = undefined;
      vm.hr.top = obj.hrTop;
    }

    // 按钮文字
    obj.buttonText && ( vm.btn.label.text = obj.buttonText )

    // 按钮底色
    obj.buttonColor && ( vm.btn.rect.fillColor = obj.buttonColor )

    // 设置按钮位置
    obj.buttonPosition && (
      obj.buttonPosition == DDI.POSITION.RIGHT
      ?
        (
          vm.btn.right = -(580 - vm.btn.contentGroup.width - 40)
        )

      :
        vm.btn.x = 20
    )

    // 设置人物资源
    if (obj.hrSource) {
      vm.hr.visible = true
      vm.hr.source = obj.hrSource
      vm.hr.alpha = 1
      if (obj.animation) {
        App.TweenUtils.fadeIn(vm.hr)
      }
    }

    if (obj.animation) {
      vm.hr.alpha = 1
      App.TweenUtils.fadeIn(vm.hr)
    }

  }

  public static initOpen(obj: ddiOpen, vm: BaseOpen): void {
    /**
     * 设置大标题
     */
    obj.title && ( vm.title.text = obj.title )

    /**
     * 设置tips
     */
    obj.tipsText && ( vm.tipsContent.text = obj.tipsText )
    /**
     * 设置tips颜色
     */
    obj.tipsColor && ( vm.tips.textColor = obj.tipsColor )
  }

  /**
   * 预加载动画
   * @param jsonSource json文件源
   * @param imageSource image文件源
   * @returns
   */
  public static initMC(jsonSource: string, imageSource: string): egret.MovieClip {
    let json = RES.getRes(jsonSource);
    let img = RES.getRes(imageSource);
    let mcFactory = new egret.MovieClipDataFactory(json,img);
    let movieClipInstance = new egret.MovieClip(mcFactory.generateMovieClipData());
    return movieClipInstance
  }

  /**
   * 懒加载动画
   * @param jsonSource json文件源
   * @param imageSource image文件源
   * @returns
   */
  public static async initMCAsync(jsonSource: string, imageSource: string): Promise<egret.MovieClip> {
    let json  = await RES.getResAsync(jsonSource)
    let img = await RES.getResAsync(imageSource)

    this.sub_initMC(json, img)
    return CommonInit.sub_initMC(json, img)
  }

  private static sub_initMC(json, img): egret.MovieClip {
    let mcFactory = new egret.MovieClipDataFactory(json,img);
    return new egret.MovieClip(mcFactory.generateMovieClipData());
  }

  // init 长按选择题数据
  public static initLongTap(obj: ddiLongTap, vm: DDI.BaseLongTap): void {
    ( obj.title || obj.title == "" ) && ( vm.title.text = obj.title );

    ( obj.color || obj.color == 0 ) && ( vm.title.textColor = obj.color );

    if (obj.dataSource) {
      if (vm.dataProvider.length > 0) {
        vm.dataProvider.replaceAll(obj.dataSource)
        vm.dataProvider.refresh();
      } else {
        obj.dataSource.map(item => {
          vm.dataProvider.addItem(item)
        })
      }
    }
  }

  // 发送保存点题目信息
  public static async SendSave(obj: QuestionInfo): Promise<void> {
    // 保存点发送start
    const currentSavePoint = App.Savepoint.takeSavepoint();
    currentSavePoint.questionInfo = obj
    
    App.Savepoint.cacheSavepoint(currentSavePoint);

    return Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(), currentSavePoint)
  }

}