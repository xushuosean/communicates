class BasePopHtml extends egret.DisplayObjectContainer {
  private _iframeMask;
  private _frame;
  private _fixedHtml :string= `
      <div class="tip-box">
          <div class="title" style="display: flex;flex-direction: row; align-items: center;">
              <img height="30px" src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA5CAYAAAB6UQYdAAAAAXNSR0IArs4c6QAABUZJREFUeAHtnF1oXEUUx+fMbnZjTFOTyDbENoGkSumiFvogRptshCC++WB9UMESEdRS7YO0WpsY0gYsBKVEBW2rT4JYwQehDz7UNGgsSl+koUXbBj+IyQb7qWl2N/eO/7vJjfdc5mbNejcb6NyQnTnnzMw587tz525gTkgEXH1CyKd3bazITsZVQJNlq8fEmPXkcWEtu6Ovw2fbRSQpkhGfumgx1pChT4Yu5PqEsHWDkE7p6KZ6Ox8lUm8JhZ8wLgwmlLpJRH+icgn1UXsmd6phcDRdaPjJV9sSsqqiQxC1kaAWpVQ96rdhjMD4C43J7BhUWfbedQdHvmL6BSGqUzo6pax6SZEtIpww5t3Q/GCISWCSuyNV8V+mezsOnx2hoc7h4Tl/LF+nUtHN7eIVSfQybE2uHaDZeK7+/5QkqT6ovwwyRITULr2g9kXpSTQLkm8n28XR8R2pSu8YP+/aGE92iCMANAj9IiBvmzDrSlDgfAMhhRlAobGwMp6tbqL+PuyDC22ppnb961hxOwr1XQm7G9RK+FrShyL14s5929Y5jS7u3VqDwLqX7LCCxlUDCZuUzMxF8m+sWDaGklZNbNF0T2r/4k1R4nzi4PDni/JKVvxvUVJ4q4b51vjvk0nvTz0B15vyPUioKHb1A253RHUC9fJAcoNYDaUU3dgnH3ND8S/pWddwi5deDrYf0i3ORj99A0nPhWkNJIZDLxhIei5MayAxHHrBQNJzYVoDieHQCwaSngvTGkgMh14wkPRcmNZAYjj0goGk58K0BhLDoRcMJD0XpjWQGA69YCDpuTCtgcRw6AUDSc+FaQ0khkMvGEh6LkxrIDEcesFA0nNhWgOJ4dALBpKeC9MaSAyHXjCQ9FyY1kBiOPSCgaTnwrQGEsOhFwwkPRemNZAYDr1gIOm5MK2BxHDoBQNJz4VpAzMCrJvZk6qq4hFhI90hhIuELaWkODId6pFBsQGHa7cgIWMrDve35ofPpwl4HClY3HOlSp2D+APSJX6UQk0om67Yws6qsA7kS4w+kxvzeGdVDglRuNaFnI+CeR9u+2JKnNdee3u8ul2SfAHAOiTN5Vd2RMZRKhvRfGHb9rt2+u/TjR+emSnGR1F9nDwYz8UhEd078UZbc+PA6K+eNmFWmfPWQ2euYfAvnd+p3o4uK2v95Ti7Hsll6qzIM4mBkRFHDrjcdRZgLk79x2upZtyg+7zHo2n6zU4WOBr8jjs4jqUebhDz57RnkXhzBT5+wjL5Pncj++2Gd767XGg6TpYSVcW3YXk9gLykVhzxXougY6WIEdNuwbh3eWKyNZA85hJXMdFLyhYfXL/62+G7hy5k/O7Gtidjd25K7JZS7ISt5Ek4fv8LcnmPKGOptgDAoTvq1n96fs9Da7xBOllLic2Jjx17GQE5IckonoLSZQAgPwogovhcg40ZyTWqEfVaL4z5Oj1eVxkbQN3Ja8tfVU20D5WnFkRfoa5iz5iAchKJeTewIufwiPi2DV+XYkVkBoW77ywRiPPo1LbUNkTj0QfR7DmkJXR5m2MfzNiWSjUMDJ+e6nn4fpLRb7A/VHvboH7Ssq1jKidHL1+cnkgeH8v67CURVwySL3pK96Zewt0fBIjFZEB8AxlHuxNYbV0I7B63D1b7LFbMnvf7T73XF5An67YtRVkuSPm5pHvau0lGjkDAiyvwspVtPZ84MPJRYIsSG5YKrsSuhXAmbitxrICjo+UE5MTGv0wWiLYU5tys6o9V5h+tGjxm/26++PsFu/612blMfyn8LmfMsj5ubqBBef5h/R8B10+x5T8DN1meg6pH4wAAAABJRU5ErkJggg==" alt="book">
              <span style="color: rgb(214, 79, 53);margin-left: 10px;padding: 8px;border-radius: 4px;background-color:rgb(247, 217, 208);">知识点反馈</span>
          </div>
          <div class="description" style="color: rgb(46, 46, 46)">
            <p style="margin-bottom: 30px"><!!title!!></p>
            <!!content!!>
          </div>
      </div>
  ` 
  public constructor(title: string, list: Array<any>) {
    super();
    //设置遮罩

    this.setContent(title, list);

    const iframeMask = this._iframeMask = document.createElement("div");
    iframeMask.id = "ability-one-mask";
    iframeMask.style.position = "absolute";
    iframeMask.style.left = "0";
    iframeMask.style.top = "0";
    iframeMask.style.right = "0";
    iframeMask.style.bottom = "0";
    iframeMask.style.display = "none";//默认隐藏
    iframeMask.style.backgroundColor = "rgba(0,0,0,.5)";
    
    //iframe外层容器
    const iframeWrapper = document.createElement("div");
    iframeWrapper.style.position = "absolute";
    iframeWrapper.style.backgroundColor = "#fff";
    iframeWrapper.style.top = "10%";
    
    iframeWrapper.style.width = "100%";
    iframeWrapper.style.height = "80%";
    //关闭按钮
    const closeBtn = document.createElement('div')
    
    closeBtn.style.position = 'absolute';
    closeBtn.style.bottom = "0";
    closeBtn.style.right = "10%";
    closeBtn.style.transform = "translateY(50%)";
    closeBtn.style.zIndex = "1";

    closeBtn.style.width = '44px';
    closeBtn.style.height = '44px';
    // closeBtn.style.borderRadius = '50%';
    closeBtn.style.backgroundImage = 'url(data:image/jpg;base64,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)';
    closeBtn.style.backgroundSize = '100%';
    closeBtn.addEventListener('click',()=>{
        this.close()
    })

    //主体元素内容

    const frame = this._frame = document.createElement("div");
    frame.style.height = "100%";
    frame.style.boxSizing = "border-box";
    frame.style.padding = '20px';
    frame.style.overflow = "auto";
    //添加静态内容
    frame.innerHTML = this._fixedHtml;

    document.body.appendChild(iframeMask)
    iframeMask.appendChild(iframeWrapper);
    iframeWrapper.appendChild(closeBtn);
    iframeWrapper.appendChild(frame);

  }
  public open(){
    this._iframeMask.style.display = 'block';
  }
  public close(){
    this._iframeMask.style.display = 'none'
  }

  public setContent(title: string, list: Array<any>): void {
    this._fixedHtml = this._fixedHtml.replace("<!!title!!>", title);
    let str = ''
    list.map(item => {
      str += `
      <div style="margin-bottom: 30px;">
        <span style="color: rgb(234, 133, 78);font-weight: bold;">${item.label}</span>${item.value}
      </div>
      `
    })
    this._fixedHtml = this._fixedHtml.replace("<!!content!!>", str)
  }
}
