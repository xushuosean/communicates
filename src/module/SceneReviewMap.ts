/**
 * 此类存储静态数据
 * 客户端发送数据到server时 在此处找到对应的文字内容。
 * 动态内容（决策树）则
 */
class SceneReviewMapper {
    /**
     * index：view的index
     *   <div class="comment" style="margin:16px 0;border:1px solid #b3b3f2;padding:8px 18px;">
    点评：多轮的精准发问，循序渐进，优秀！
    </div>
     */
    private static HRTextColor:string = SavePointSceneReviewCenter.HRTextColor;
    private static MeTextColor:string = SavePointSceneReviewCenter.MeTextColor;
    private static BossTextColor:string = SavePointSceneReviewCenter.BossTextColor;
    private static InterviewerColor:string = SavePointSceneReviewCenter.InterviewerColor;
    private static HighLevelSaleColor:string = SavePointSceneReviewCenter.HighLevelSaleColor;
    

  public static stageSceneReview1: { readonly [index: number]: string } = {
      0:`
      <div
        class="stage-title"
        style="
        color: #6959c9;
        font-size: 16px;
        text-align: center;

        font-weight: 700;
        height: 30px;
        line-height: 30px;
        background-image: linear-gradient(white 60% ,#d6d6f9 60%);
        ">市场活动进展会，怎么开？</div>
      `,
      2: `
        <p style="margin-top:13px;font-size: 14px;color:#585756;">
            今天是星期五，天气晴朗，你带着愉悦的心情踏进了办公室的大门，开始了一天的工作。
        </p>
      `,
      5: `
        <p style="margin-top:13px;font-size: 14px;color:#585756;">
            你进入办公室，拿起电脑，准备去开会。本次会议是市场部内部会议，主要讨论下个月底的线下宣传活动的进展。
        </p>
      `,
      6:`
      <div style="margin-top:13px;font-size: 14px;line-height: 24px;">
        <div class="role-section" style="width: 23%;color:${SceneReviewMapper.HRTextColor};">
          团队成员
        </div>
      </div>
      <div class="say-section" style="color:#585756;font-size: 14px;">
      -季宁（负责活动场地、设备等）<br />
      -方科科（负责活动宣传和推广）<br />
      -王立娜（负责邀约嘉宾)<br />
      </div>
      `,
      7:`
      
      <p style="margin-top:13px;font-size: 14px;color:#585756;">
      上周你们已经就这场市场活动的方案达成了一致的看法。本次的会议主要看各方的进展情况。
    </p>
      `,
      8:`
      <div class="dialog-item" style="margin-top:13px;font-size: 14px;">
        <span style="color:${SceneReviewMapper.HRTextColor};">
                <div style="display:inline-block;width: 16%;text-align:center;">
                季宁
                </div>：</span>
            <span style="color:#585756;">既然大家都到了，我们就开始吧。</span>
    </div>
      `
  };
  public static stageSceneReview2:{ readonly [index: number]: string } = {
      1:`
      <div
        class="stage-title"
        style="
        color: #6959c9;
        font-size: 16px;
        text-align: center;

        font-weight: 700;
        height: 30px;
        line-height: 30px;
        background-image: linear-gradient(white 60% ,#d6d6f9 60%);
        ">跨部门有任务，怎么推？</div>
      `,
    2:`
    <p style="margin-top:13px;font-size: 14px;color:#585756;">
    你回到办公室，下属魏宇跑过来抱怨...
</p>
    `,
    3:`
        
    <div class="interview-firstitem" style="margin-top:16px;padding:16px;font-size:14px;background-color: #efeffc;">
        <span style="color:#8e776d;">
          <div style="display:inline-block;width:16%;text-align:center;">
          魏宇
        </div>：</span>
          <span>老大，我不得不跟你吐槽一下设计部。上个月就提了需求，说好了本周三完成的，软磨硬泡终于今天完成了。结果一看，活动时间都是错的，这个版面的设计风格也不符合这次的主题，刚刚找他们修改，说是要下周才能好，这样我们根本就没时间去印刷了嘛。</span>
    </div>
    `,
    5:`
    <p style="margin-top:13px;font-size: 14px;color:#585756;">
    安抚好了魏宇的情绪，你给设计部的主管林薇打电话，希望设计部可以今天完成海报的修改。
</p>
    `,
    7:`
    <div class="interview-firstitem" style="margin-top:16px;padding:16px;font-size:14px;background-color: #efeffc;">
    <span style="color:#843054;">
      <div style="display:inline-block;width:16%;text-align:center;">
      林薇
    </div>：</span>
    <span>喂，哪位？</span>
    
    </div>
    `,
    15:`<p style="margin-top:13px;font-size: 14px;color:#585756;">
    约一小时后，你结束了面试。
    </p>`,
    16:`<p style="margin-top:13px;font-size: 14px;color:#585756;">
    面试顺利收场，你对候选人的感觉如何？接下来，进入给候选人打分的阶段，请继续保持你的高水准发挥！
    </p>`,
  }
  public static stageSceneReview3:{ readonly [index: number]: string } = {
      0:`
      <div
        class="stage-title"
        style="
        color: ${Common.MAIN_COLOR};
        font-size: 16px;
        text-align: center;

        font-weight: 700;
        height: 30px;
        line-height: 30px;
        background-image: linear-gradient(white 60% ,#d6d6f9 60%);
        ">老板交代任务，怎么接？</div>`,
    2:`
    <p style="margin-top:13px;font-size: 14px;color:#585756;">
        忙完了一天的事情，当你正整理今天的事务的时候，你的老板拎着包准备下班的样子，过来临时跟你说......
    </p>
    `,
    3:`
    <div class="dialog-item" style="margin-top:13px;font-size: 14px;">
        <span style="color:${'#' + Common.KESHENG.toString(16)};">
        <div style="display:inline-block;width:16%;text-align:center;">
        柯胜
      </div>：</span>
      <span>小高，你这个月抽空做一份调研报告，本月底的主管会上跟大家分享一下。</span>
    </div>
    `
  }
}
