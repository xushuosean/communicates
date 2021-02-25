class SavePointSceneReviewCenter {
  public static HRTextColor:string = "#e86b32";
  public static MeTextColor:string = "#e86b32";
  public static InterviewerColor:string = "#5e7c94";
  public static HighLevelSaleColor:string = "#3e93c8";
  public static BossTextColor:string = "#5abac4";
  public static LinweiTextColor:string = "#843054"
  public static FangkekeTextColor:string = "#772037"
  public static JiningTextColor:string = "#772037"
  public static WanglinaTextColor:string = "#772037"
  public static assembleSavePoint(savepoint) {
    //取出已经存在的值
    const oldSave = App.Savepoint.takeSavepoint() || {};
    //只替换特定的值
    App.Savepoint.cacheSavepoint((Object as any).assign(oldSave, savepoint));
  }
  /**
   * 根据阶段数和视图索引发送保存点和场景回顾
   */
  public static updateSaveAndSceneReview(
    { stageNumber, viewIndex, percentNumber, sceneStartId, baseHomeName },
    sceneReviewStr?: string
  ) {
    const isRepeated =
      App.Savepoint.takeSavepoint() &&
      App.Savepoint.takeSavepoint().viewIndex === viewIndex;

    if (!isRepeated) {
      //缓存保存点
        this.assembleSavePoint({
            stageNumber, viewIndex, percentNumber, sceneStartId, baseHomeName
        })
        
      //发送保存点
      Api.Simulation.updateSavePointSceneReview(
        App.UserInfo.takeCardId(),
        App.Savepoint.takeSavepoint(),
        ""
      );
      //发送场景回顾
      Api.Simulation.updateSceneReview(App.UserInfo.takeCardId(),sceneReviewStr ||
      SceneReviewMapper["stageSceneReview" + stageNumber][viewIndex] ||
      "")
    } else {
      console.log("跳过重复的保存");
    }
  }
  public static updateSceneReviewOnly(answerRes:any){
    let htmlFinalStr = "";
    //根据传入的内容整理
    console.log(answerRes);
    const firstChatContent = answerRes.thisQuestion.yySimulationOptionsList.find(option => option.id === answerRes.yourAnswers[0]).optionDesc;
    const firstChatRoleName = '我'

    const npcFeedback = JSON.parse(answerRes.npcFeedback);

    htmlFinalStr += `
    <div class="interview-dialog" style="font-size:14px;background-color: #efeffc;border:1px solid #efeffc;padding:0 16px;">
      <div class="me" style="margin:16px 0;">
        <span style="color:${SavePointSceneReviewCenter.MeTextColor};">
       
        <div style="display:inline-block;width:16%;text-align:center;">
          ${firstChatRoleName}
        </div>：</span>
        <span>${firstChatContent}</span>
      </div>`;

    //表示该选择非常精彩，有精彩点评
    npcFeedback.forEach((item,index)=>{
      if(item.npc === 'teacher'){
        htmlFinalStr += `
        <div class="comment" style="margin:16px 0;border:1px solid #b3b3f2;padding:8px 18px;">
          ${"点评"}：${item.content}
        </div>
        `
      }else if(item.npc !== "teacher" && item.content.indexOf('!!STAR') > -1){
        let start_blank1 = "";
        let start_blank2 = "";
        let start_blank3 = "";
        console.log('here is test for app')
        console.log(App.Localize(`Common.${item.npc}`))
        const roleName = App.Localize(`Common.${item.npc}`)
        if(item.content.indexOf('!!STAR1')>-1){
          start_blank1 = "你可以看这个PPT，这是一个很特殊的行业：准入门槛高、客户培养周期长";
          start_blank2 = "我们前期对这个行业做了调研、数据、行业资深人士做了深度访谈……，然后我们找到了这么几个突破点。";
          start_blank3 = "您看这里……，最后我们在当年就取得了开门红，超额完成了定下的指标。";
        }else if(item.content.indexOf('!!STAR2')>-1){

          start_blank1 = "我会要求我的团队成员在系统中对客户的问题进行记录。";
          start_blank2 = "我会每周把记录进行分类和重要性排序，并在周例会上提出并一起讨论解决方案，讨论如何更好地作出回应，并且总结经验，避免多次出现同类问题。";
          start_blank3 = "这个措施实施了半年后，客户满意度上升到4.3（满分5分），我们公司的平均满意度为3.8分。之后的三年内我们团队的满意度一直维持到4.3-4.6之间。";
        }else if(item.content.indexOf('!!STAR3')>-1){
          start_blank1 =  "有一次，我的一个老客户想要合同范围之外，再附加一个质量管理的小需求。"
          start_blank2 =  "当时负责项目的顾问不愿意做。为了能满足客户的需求，也避免公司的品牌形象受损"
          start_blank3 =  "我多次与资源部门协调，坚持不懈地找愿意接项目的顾问，最终把客户需要的小项目做成了。"
        }else if(item.content.indexOf('!!STAR4')>-1){
          start_blank1 = "没错，这份工作确实有压力，不过对我来说有压力才有动力。"
          start_blank2 = "如果说压力最大的一次......应该是前两年，我们行业出了个负面新闻。"
          start_blank3 = "对，就是“XX造假事件”，闹得很大，牵连了一大波同行。我们也不能幸免。好多客户都觉得我们这行不靠谱，想要取消合作。"
        }
        
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${SavePointSceneReviewCenter.InterviewerColor};">${roleName}：</span>
          <span>${start_blank1}</span>
        </div>
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${SavePointSceneReviewCenter.InterviewerColor};">${roleName}：</span>
          <span>${start_blank2}</span>
        </div>
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${SavePointSceneReviewCenter.InterviewerColor};">${roleName}：</span>
          <span>${start_blank3}</span>
        </div>
        `
      }else if(item.npc === 'LINWEI'){
        const roleName = App.Localize(`Common.${item.npc}`)
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${this.LinweiTextColor};">
          <div style="display:inline-block;width:16%;text-align:center;">
          ${roleName}
        </div>：</span>
          <span>${item.content}</span>
        </div>
        `
      }else if(item.npc === 'JINING'){
        const roleName = App.Localize(`Common.${item.npc}`)
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${this.JiningTextColor};">
          <div style="display:inline-block;width:16%;text-align:center;">
          ${roleName}
        </div>：</span>
          <span>${item.content}</span>
        </div>
        `
      }else if(item.npc === 'FANGKEKE'){
        const roleName = App.Localize(`Common.${item.npc}`)
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${this.FangkekeTextColor};">
          <div style="display:inline-block;width:16%;text-align:center;">
          ${roleName}
        </div>：</span>
          <span>${item.content}</span>
        </div>
        `
      }else if(item.npc === 'WANGLINA'){
        const roleName = App.Localize(`Common.${item.npc}`)
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${this.WanglinaTextColor};">
          <div style="display:inline-block;width:16%;text-align:center;">
          ${roleName}
        </div>：</span>
          <span>${item.content}</span>
        </div>
        `
      }else if(item.npc === 'KESHENG'){
        const roleName = App.Localize(`Common.${item.npc}`)
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${'#'+Common.KESHENG.toString(16)};">
          <div style="display:inline-block;width:16%;text-align:center;">
          ${roleName}
        </div>：</span>
          <span>${item.content}</span>
        </div>
        `
      } else{
        const roleName = App.Localize(`Common.${item.npc}`)
        htmlFinalStr += `
        <div class="interviewer" style="margin:16px 0;">
          <span style="color:${SavePointSceneReviewCenter.InterviewerColor};">
          <div style="display:inline-block;width:16%;text-align:center;">
          ${roleName}
        </div>：</span>
          <span>${item.content}</span>
        </div>
        `
      }

      //
      if(index === npcFeedback.length-1){
        htmlFinalStr += `</div>`
      }
    })
    Api.Simulation.updateSceneReview(App.UserInfo.takeCardId(),htmlFinalStr)
  }
}
