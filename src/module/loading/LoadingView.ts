/**
 * Created by egret on 15-1-7.
 */
class LoadingView extends BaseEuiView{
    public progressBar: eui.Image;
    public txtMsg:eui.Label;
    public progressBox: eui.Group;
    public progressMask: eui.Rect;

    public PROGRESSBARLEN: number = 470;

    public constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent);

        this.skinName = "resource/ddi_skins/LoadingUISkin.exml";
        this.progressBar.left = -this.PROGRESSBARLEN;
        this.progressBar.mask = this.progressMask
    }

    public setProgress(current:number, total:number):void {
        let PERCENTAGE: string = ((current / (total - 1)) * 100).toFixed(0)
        this.progressBar.left = -(this.PROGRESSBARLEN - (this.PROGRESSBARLEN * parseInt(PERCENTAGE) * 0.01))
        this.txtMsg.left = (( this.PROGRESSBARLEN - this.txtMsg.width ) * parseInt(PERCENTAGE) * 0.01)
        this.txtMsg.text = PERCENTAGE + "%";
    }
}