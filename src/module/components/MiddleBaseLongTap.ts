namespace DDI {
  export class MiddleBaseLongTap extends DDI.BaseLongTap {
      public root: number = 1;
      public constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent)
      }
    
      public async initData() {
        super.initData()
        CommonInit.initLongTap({
          title: '长按按钮进行选择',
          color: 0x30364A
        }, this)
      }
    
      public async onAddToStage() {
        super.onAddToStage();

        this.group.visible = false;

        this.questionId = await this.getQuestionId(this.root);
    
        this.cacheId();
    
        await this.getAndMixinList();
    
        CommonInit.initLongTap({
          dataSource: this.longTapList
        }, this)
    
        this.startAnimation().call(()=>{
          this.circleAddEventToItem({
            fillColor:0xeb7f41
          });
        });

        egret.setTimeout(()=>{
            this.group.verticalCenter = this.stage.stageHeight/2 - this.contentGroup.contentHeight + 20;
            this.group.visible = true;
        },this,50);


      }
    
      /**
       * 长按成功但未触发touchSuccess
       */
      public beforeAnimation():void{
        this.clearEventListener();
      }
    
      // 长按成功的回调函数
      public async touchSuccess(ct: eui.Group, mask: eui.Rect) {
        super.touchSuccess(ct, mask);
    
        // 发送答案 && 将答案存入tempData中
        await this.sendAnswers(ct)
    
        // 发送保存点
        await CommonInit.SendSave({
          questionId: this.questionId,
          answers: [ct["_data"].id]
        })
    
        this.ToNext(mask, ct)
    
        /**
         * 此处insert 场景回顾,基于App.Savepoint.tempData
         */
        SavePointSceneReviewCenter.updateSceneReviewOnly(App.Savepoint.tempData)
    
        // 重置longTap颜色
        let t = setTimeout(() => {
          clearTimeout(t)
          this.resetCT(ct, mask)
        }, 1000);
      }

      public ToNext(mask: eui.Rect, ct: eui.Group): void {}
  }
}