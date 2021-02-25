/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**Sprite*/
    class SwfSprite extends egret.DisplayObjectContainer {
        getTextField(name: string): egret.TextField;
        getMovie(name: string): starlingswf.SwfMovieClip;
        getSprite(name: string): starlingswf.SwfSprite;
        getImage(name: string): egret.Bitmap;
    }
}
/**
 * Created by yangsong on 14/12/18.
 * 基类
 */
declare class SingtonClass {
    constructor();
    /**
     * 获取一个单例
     * @returns {any}
     */
    static getSingtonInstance(...param: any[]): any;
}
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自eui.Component
 */
declare class BaseEuiView extends eui.Component implements IBaseView {
    private _controller;
    private _myParent;
    private _isInit;
    private _resources;
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    constructor($controller: BaseController, $parent: egret.DisplayObjectContainer);
    /**
     * 获取我的父级
     * @returns {egret.DisplayObjectContainer}
     */
    readonly myParent: egret.DisplayObjectContainer;
    /**
     * 设置初始加载资源
     * @param resources
     */
    setResources(resources: string[]): void;
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 面板是否显示
     * @return
     *
     */
    isShow(): boolean;
    /**
     * 添加到父级
     */
    addToParent(): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    initUI(): void;
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    initData(): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    /**
     /**
     * 加载面板所需资源
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
}
/**
 * Created by yangsong on 15-2-11.
 */
declare class ByteArrayMsg implements BaseMsg {
    private _msgBuffer;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 接收消息处理
     * @param msg
     */
    receive(socket: egret.WebSocket): void;
    /**
     * 发送消息处理
     * @param msg
     */
    send(socket: egret.WebSocket, msg: any): void;
    /**
     * 消息解析
     * @param msg
     */
    decode(msg: any): any;
    /**
     * 消息封装
     * @param msg
     */
    encode(msg: any): any;
}
/**
 * Created by yangsong on 15-2-11.
 */
declare class UTFMsg implements BaseMsg {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 接收消息处理
     * @param msg
     */
    receive(socket: egret.WebSocket): void;
    /**
     * 发送消息处理
     * @param msg
     */
    send(socket: egret.WebSocket, msg: any): void;
    /**
     * 消息解析
     * @param msg
     */
    decode(msg: any): any;
    /**
     * 消息封装
     * @param msg
     */
    encode(msg: any): any;
}
/**
 * Created by yangsong on 15-1-14.
 * Sound基类
 */
declare class BaseSound {
    _cache: any;
    _loadingCache: Array<string>;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 处理音乐文件的清理
     */
    private dealSoundTimer();
    /**
     * 获取Sound
     * @param key
     * @returns {egret.Sound}
     */
    getSound(key: string): egret.Sound;
    /**
     * 资源加载完成
     * @param event
     */
    private onResourceLoadComplete(data, key);
    /**
     * 资源加载完成后处理播放，子类重写
     * @param key
     */
    loadedPlay(key: string): void;
    /**
     * 检测一个文件是否要清除，子类重写
     * @param key
     * @returns {boolean}
     */
    checkCanClear(key: string): boolean;
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    class SwfMovieClip extends starlingswf.SwfSprite implements starlingswf.ISwfAnimation {
        private _ownerSwf;
        private _frames;
        private _labels;
        private _displayObjects;
        private _startFrame;
        private _endFrame;
        private _currentFrame;
        private _currentLabel;
        private _isPlay;
        loop: boolean;
        private _completeFunction;
        constructor(frames: any[], labels: any[], displayObjects: Object, ownerSwf: starlingswf.Swf);
        update(): void;
        private __frameInfos;
        setCurrentFrame(frame: number): void;
        getCurrentFrame(): number;
        /**
         * 播放
         * */
        play(): void;
        /**
         * 停止
         * @param    stopChild    是否停止子动画
         * */
        stop(stopChild?: boolean): void;
        gotoAndStop(frame: Object, stopChild?: boolean): void;
        gotoAndPlay(frame: Object): void;
        private goTo(frame);
        private getLabelData(label);
        /**
         * 是否再播放
         * */
        isPlay(): boolean;
        /**
         * 总共有多少帧
         * */
        totalFrames(): number;
        /**
         * 返回当前播放的是哪一个标签
         * */
        currentLabel(): string;
        /**
         * 获取所有标签
         * */
        labels(): any[];
        private hasCompleteListener();
        /**
         * 是否包含某个标签
         * */
        hasLabel(label: String): Boolean;
        /*****************************************以下为扩展代码*****************************************/
        /**
         * 获取某一标签的开始帧
         * @param label 标签名
         * @returns {any}
         */
        getLabelStartFrame(label: string): number;
        /**
         * 获取某一标签的结束帧
         * @param label
         * @returns {any}
         */
        getLabelEndFrame(label: string): number;
    }
}
/**
 * Created by yangsong on 18-11-21.
 * 音效类(微信小游戏专用)
 */
declare class SoundEffectWx implements ISoundEffect {
    private _wx;
    private _volume;
    private _cache;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 处理音乐文件的清理
     */
    private dealSoundTimer();
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    private checkCanClear(key);
    /**
     * 获取Sound
     * @param effectName
     * @returns {InnerAudioContext}
     */
    private getAudio(effectName);
    /**
     * 播放一个音效
     * @param effectName
     */
    play(effectName: string, loops: number): void;
    /**
     * 播放一个音效
     * @param effectName
     */
    stop(effectName: string): void;
    /**
     * 设置音量
     * @param volume
     */
    setVolume(volume: number): void;
}
declare namespace DDI {
    class BaseSelect extends BaseEuiView {
        topGroup: eui.Group;
        grid: eui.Group;
        bt: DDI.BaseButton;
        type: DDI.BaseButton;
        constructor(controller: BaseController, parent: eui.Group);
        initData(): void;
        initUI(): void;
    }
}
declare namespace DDI {
    class BaseTalentPortrait extends BaseEuiView {
        constructor(controller: BaseController, parent: eui.Group);
        leftTop: eui.Group;
        rightTop: eui.Group;
        leftBottom: eui.Group;
        rightBottom: eui.Group;
        groups: Array<eui.Group>;
        initData(): void;
        initUI(): void;
    }
}
/**
 * 任务的渲染器
 */
declare class LongTapItemRender extends eui.ItemRenderer {
    label: eui.Label;
    group: eui.Group;
    textField: egret.TextField;
    constructor();
    updateOptionDesc(): void;
    dataChanged(): void;
    partAdded(partName: string, instance: any): void;
}
/**
 * Created by yangsong on 2014/11/22.
 */
declare class App {
    /**
     * 请求服务器使用的用户标识
     * @type {string}
     */
    /**
     * 全局的语言包对象
     */
    static langugeMap: any;
    static ProxyUserFlag: string;
    static testforBuild: string;
    /**
     * 全局配置数据
     * @type {null}
     */
    static GlobalData: any;
    /**
     * ProtoConfig
     * @type {null}
     */
    static ProtoConfig: any;
    /**
     * Http请求
     * @type {Http}
     */
    static readonly Http: Http;
    /**
     * Socket请求
     * @type {null}
     */
    static readonly Socket: Socket;
    /**
     * 项目每个阶段的步长
     */
    static readonly Step: Step;
    /**
     * 模块管理类
     * @type {ControllerManager}
     */
    static readonly ControllerManager: ControllerManager;
    /**
     * View管理类
     * @type {ViewManager}
     */
    static readonly ViewManager: ViewManager;
    /**
     * 场景管理类
     * @type {SceneManager}
     */
    static readonly SceneManager: SceneManager;
    /**
     * 调试工具
     * @type {DebugUtils}
     */
    static readonly DebugUtils: DebugUtils;
    /**
     * 服务器返回的消息处理中心
     * @type {MessageCenter}
     */
    static readonly MessageCenter: MessageCenter;
    /**
     * 统一的计时器和帧刷管理类
     * @type {TimerManager}
     */
    static readonly TimerManager: TimerManager;
    /**
     * 日期工具类
     * @type {DateUtils}
     */
    static readonly DateUtils: DateUtils;
    /**
     * 数学计算工具类
     * @type {MathUtils}
     */
    static readonly MathUtils: MathUtils;
    /**
     * 随机数工具类
     * @type {RandomUtils}
     */
    static readonly RandomUtils: RandomUtils;
    /**
     * 显示对象工具类
     * @type {DisplayUtils}
     */
    static readonly DisplayUtils: DisplayUtils;
    static readonly BitmapNumber: BitmapNumber;
    /**
     * 引导工具类
     */
    static readonly GuideUtils: GuideUtils;
    /**
     * Stage操作相关工具类
     */
    static readonly StageUtils: StageUtils;
    /**
     * Effect工具类
     */
    static readonly EffectUtils: EffectUtils;
    /**
     * 字符串工具类
     */
    static readonly StringUtils: StringUtils;
    /**
     * 通过工具类
     */
    static readonly CommonUtils: CommonUtils;
    /**
     * 音乐管理类
     */
    static readonly SoundManager: SoundManager;
    /**
     * 设备工具类
     */
    static readonly DeviceUtils: DeviceUtils;
    /**
     * 引擎扩展类
     */
    static readonly EgretExpandUtils: EgretExpandUtils;
    /**
     * 键盘操作工具类
     */
    static readonly KeyboardUtils: KeyboardUtils;
    /**
     * 摇杆操作工具类
     */
    static readonly RockerUtils: RockerUtils;
    /**
     * 震动类
     */
    static readonly ShockUtils: ShockUtils;
    /**
     * 资源加载工具类
     */
    static readonly ResourceUtils: ResourceUtils;
    /**
     * RenderTextureManager
     */
    static readonly RenderTextureManager: RenderTextureManager;
    /**
     * TextFlow
     */
    static readonly TextFlowMaker: TextFlowMaker;
    /**
     * 消息通知中心
     */
    private static _notificationCenter;
    static readonly NotificationCenter: MessageCenter;
    /**
     * 分帧处理类
     * @returns {any}
     * @constructor
     */
    static readonly DelayOptManager: DelayOptManager;
    /**
     * 数组工具类
     * @returns {any}
     * @constructor
     */
    static readonly ArrayUtils: ArrayUtils;
    /**
     * 通用Loading动画
     * @returns {any}
     * @constructor
     */
    static readonly EasyLoading: EasyLoading;
    /**
     * DragonBones工厂类
     * @returns {any}
     * @constructor
     */
    static readonly DragonBonesFactory: DragonBonesFactory;
    /**
     * StarlingSwf工厂类
     * @returns {StarlingSwfFactory}
     * @constructor
     */
    static readonly StarlingSwfFactory: StarlingSwfFactory;
    /**
     * AnchorUtils工具类
     */
    static readonly AnchorUtils: AnchorUtils;
    /**
     * hack引擎的Touch事件
     */
    static readonly TouchEventHook: TouchEventHook;
    /**
     * H5地址栏参数操作工作类
     */
    static readonly LocationPropertyUtils: LocationPropertyUtils;
    /**
     * Tween工具类
     */
    static readonly TweenUtils: TweenUtils;
    /**
     * 全局调用的翻译函数，接收待翻译的文本，返回翻译后的文本
     */
    static Localize(path: string): string;
    static Locals(path: string): string;
    /**
     * 语言包初始化函数
     */
    private static initLanguage();
    /**
     * axios工具类
     */
    static readonly Axios: AxiosUtils;
    /**
     * Save保存点工具类
     */
    static readonly Savepoint: Savepoint;
    /**
     * 场景回顾类
     */
    static readonly SceneReview: SceneReview;
    /**
     * 用户信息、元信息类
     */
    static readonly UserInfo: UserInfo;
    /**
     * pageView工具类
     */
    static readonly PageView: PageViewUtils;
    /**
     * 各种提示
     */
    static readonly PopUp: PopUp;
    /**
     * 决策树的cover-up,防止重复现象
     */
    static readonly DecisionCover: DecisionCover;
    /**
     * 初始化函数
     * @constructor
     */
    static Init(): void;
}
declare class AssetAdapter implements eui.IAssetAdapter {
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    getAsset(source: string, compFunc: Function, thisObject: any): void;
}
declare class ThemeAdapter implements eui.IThemeAdapter {
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    getTheme(url: string, onSuccess: Function, onError: Function, thisObject: any): void;
}
declare var generateEUI: {
    paths: string[];
    skins: any;
};
declare var generateEUI2: {
    paths: string[];
    skins: any;
};
declare var generateJSON: {
    paths: string[];
    skins: any;
};
declare namespace DDI {
    class BaseAbilityBook extends BaseEuiView {
        backRect: eui.Rect;
        title: eui.Label;
        buttonGroup: eui.Group;
        listGroup: eui.Group;
        closeIcon: eui.Image;
        private _buttonGroupData;
        textScroller: eui.Scroller;
        textGroup: eui.Group;
        listData: Array<any>;
        private btnGroupWidth;
        constructor($controller: BaseController, $parent: eui.Group);
        initData(): void;
        initUI(): void;
        closeIconTap(): void;
        /**
         * 添加textFlow，供子类继承
         */
        addText(): void;
        buttonGroupData: any;
        /**
         * 设置按钮组
         */
        private setButton();
        btnTap(event: egret.Event): void;
        changeOtherColor(btnList: any): void;
        toggleColor(btn: DDI.BaseButton): void;
        layoutButton(btnList: Array<any>): void;
    }
}
/**
 * Created by yangsong on 15-1-26.
 */
declare class Keyboard {
    static LEFT: number;
    static RIGHT: number;
    static UP: number;
    static DOWN: number;
    static W: number;
    static A: number;
    static S: number;
    static D: number;
    static J: number;
    static K: number;
    static L: number;
    static U: number;
    static I: number;
    static O: number;
    static P: number;
    static SPACE: number;
    constructor();
}
/**
 * 素材需要提前加载好
 * 素材命名规则：类型_数值（有类型是因为一般会同时有几种数字图片，比如大小号或不同颜色）
 * 点号素材命名：类型_dot
 * 创建BitmapNumber使用createNumPic返回DisplayObjectContainer
 * 创建好的BitmapNumber数值需要变化是调用changeNum
 * 回收使用desstroyNumPic
 *
 * Created by Saco on 2014/8/1.
 */
declare class BitmapNumber extends SingtonClass {
    private _imgPool;
    private _containerPool;
    constructor();
    createNumPic(num: number, type: string): egret.DisplayObjectContainer;
    desstroyNumPic(picContainer: egret.DisplayObjectContainer): void;
    changeNum(picContainer: egret.DisplayObjectContainer, num: number, type: string): void;
    private repositionNumPic(container);
    private clearContainer(picContainer);
    private recycleBM(bm);
    private getContainer();
    private getSingleNumPic(num, type);
    private getTexture(num, type);
    private getBitmap();
}
/**
 * Created by Saco on 2014/12/1.
 */
declare class HotspotBitmap extends egret.Bitmap {
    private _hotspot;
    constructor();
    addHotspotArea(rect: egret.Rectangle, callBack: Function, thisObj: any, para?: any): void;
    private onTouch(e);
}
/**
 * Created by yangsong on 15-1-14.
 * Armature封装类
 */
declare class DragonBonesArmature extends egret.DisplayObjectContainer {
    private _armature;
    private _clock;
    private _completeCalls;
    private _frameCalls;
    private _isPlay;
    private _playName;
    private _currAnimationState;
    private _cacheAllSlotDisplayData;
    /**
     * 构造函数
     * @param armature dragonBones.Armature
     * @param clock dragonBones.WorldClock
     */
    constructor(armature: dragonBones.Armature, clock: dragonBones.WorldClock);
    /**
     * 添加事件监听
     */
    private addListeners();
    /**
     * 移除事件监听
     */
    private removeListeners();
    /**
     * 事件完成执行函数
     * @param e
     */
    private completeHandler(e);
    /**
     * 帧事件处理函数
     * @param e
     */
    private frameHandler(e);
    /**
     * 播放名为name的动作
     * @param name 名称
     * @param playNum 指定播放次数，默认走动画配置
     */
    play(name: string, playNum?: number): dragonBones.AnimationState;
    /**
     * 从指定时间播放指定动画
     */
    gotoAndPlayByTime(name: string, time: number, playNum?: number): dragonBones.AnimationState;
    /**
     * 获取当前动作的播放时间
     */
    readonly currentTime: number;
    /**
     * 恢复播放
     */
    start(): void;
    /**
     * 停止播放
     */
    stop(): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 添加动画完成函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    addCompleteCallFunc(callFunc: Function, target: any): void;
    /**
     * 移除一个动画完成函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    removeCompleteCallFunc(callFunc: Function, target: any): void;
    /**
     * 添加帧事件处理函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    addFrameCallFunc(callFunc: Function, target: any): void;
    /**
     * 移除帧事件处理函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    removeFrameCallFunc(callFunc: Function, target: any): void;
    /**
     * 移除舞台处理
     * @private
     */
    $onRemoveFromStage(): void;
    /**
     * 获取dragonBones.Armature
     * @returns {dragonBones.Armature}
     */
    getArmature(): dragonBones.Armature;
    /**
     * 获取当前dragonBones.AnimationState
     * @returns {dragonBones.AnimationState}
     */
    getCurrAnimationState(): dragonBones.AnimationState;
    /**
     * 获取所属dragonBones.WorldClock
     * @returns {dragonBones.WorldClock}
     */
    getClock(): dragonBones.WorldClock;
    /**
     * 获取dragonBones.Animation
     * @returns {Animation}
     */
    getAnimation(): dragonBones.Animation;
    /**
     * 获取一个dragonBones.Bone
     * @param boneName
     * @returns {dragonBones.Bone}
     */
    getBone(boneName: string): dragonBones.Bone;
    /**
     * 获取一个动作的运行时长
     * @param animationName
     * @returns {number}
     */
    getAnimationDuration(animationName: string): number;
    /**
     * 当前正在播放的动作名字
     * @returns {string}
     */
    getPlayName(): string;
    /**
     * 获取骨骼的display
     * @param bone
     * @returns {function(): any}
     */
    getBoneDisplay(bone: dragonBones.Bone): egret.DisplayObject;
    /**
     * 替换骨骼插件
     * @param boneName
     * @param displayObject
     */
    changeBone(boneName: string, displayObject: egret.DisplayObject): void;
    /**
     * 替换插槽
     */
    changeSlot(slotName: string, displayObject: egret.DisplayObject): void;
    /**
     * 获取所有插槽
     */
    getSlots(): Array<dragonBones.Slot>;
    /**
     * 获取所有插槽中对象的位置信息
     */
    getAllSlotDisplayData(): any;
    /**
     * 缓存所有插槽中对象的位置信息
     */
    cacheAllSlotDisplayData(): void;
}
/**
 * Created by yangsong on 15-1-16.
 * DragonBonesArmature容器类，用于一个动画使用多个DragonBonesArmature的情况
 */
declare class DragonBonesArmatureContainer extends egret.DisplayObjectContainer {
    private armatures;
    private actions;
    private currArmatureIndex;
    private cacheBones;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 注册缩需要的DragonBonesArmature
     * @param $armature DragonBonesArmature
     * @param $actions 当前DragonBonesArmature所有的动作
     */
    register($armature: DragonBonesArmature, $actions: Array<string>): void;
    /**
     * 当前正在使用的armature
     * @returns {DragonBonesArmature}
     */
    readonly armature: DragonBonesArmature;
    /**
     * 获取Bone
     * @param boneName
     * @returns {any}
     */
    getCacheBone(boneName: string): dragonBones.Bone;
    /**
     * 播放动作
     * @param action
     * @param playNum
     */
    play(action: string, playNum?: number): dragonBones.AnimationState;
    /**
     * 停止当前DragonBonesArmature
     */
    stop(): void;
    /**
     * 播放
     */
    start(): void;
    /**
     * 移除上一个DragonBonesArmature
     */
    remove(): void;
    /**
     * 添加播放完成处理函数
     * @param callFunc
     * @param target
     */
    addCompleteCallFunc(callFunc: Function, target: any): void;
    /**
     * 移除播放完成处理函数
     * @param callFunc
     * @param target
     */
    removeCompleteCallFunc(callFunc: Function, target: any): void;
    /**
     * 添加帧事件处理函数
     * @param callFunc
     * @param target
     */
    addFrameCallFunc(callFunc: Function, target: any): void;
    /**
     * 移除帧事件处理函数
     * @param key
     * @param callFunc
     * @param target
     */
    removeFrameCallFunc(callFunc: Function, target: any): void;
    /**
     * 清空
     */
    clear(): void;
    /**
     * 销毁
     */
    destroy(): void;
}
/**
 * Created by egret on 15-1-14.
 * DragonBones工厂类
 */
declare class DragonBonesFactory extends SingtonClass {
    private averageUtils;
    private factory;
    private isPlay;
    private clocks;
    private clocksLen;
    private files;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 初始化一个动画文件
     * @param skeletonData 动画描述文件
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    initArmatureFile(skeletonData: any, texture: egret.Texture, textureData: any): void;
    /**
     * 移除动画文件
     * @param name
     */
    removeArmatureFile(name: string): void;
    /**
     * 清空所有动画
     */
    clear(): void;
    /**
     * 添加动画描述文件
     * @param skeletonData
     */
    addSkeletonData(skeletonData: any): void;
    /**
     * 添加动画所需资源
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    addTextureAtlas(texture: egret.Texture, textureData: any): void;
    /**
     * 移除动画描述文件
     * @param skeletonData
     */
    removeSkeletonData(name: string): void;
    /**
     * 移除动画所需资源
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    removeTextureAtlas(name: string): void;
    /**
     * 创建一个动画
     * @param name 动作名称
     * @param fromDragonBonesDataName 动画文件名称
     * @returns {Armature}
     */
    makeArmature(name: string, fromDragonBonesDataName?: string, playSpeed?: number): DragonBonesArmature;
    /**
     * 创建一个动画（急速模式）
     * @param name 动作名称
     * @param fromDragonBonesDataName 动画文件名称
     * @returns {Armature}
     */
    makeFastArmature(name: string, fromDragonBonesDataName?: string, playSpeed?: number): DragonBonesArmature;
    /**
     * 创建WorldClock
     * @param playSpeed
     * @returns {dragonBones.WorldClock}
     */
    private createWorldClock(playSpeed);
    /**
     * dragonBones体系的每帧刷新
     * @param advancedTime
     */
    private onEnterFrame(advancedTime);
    /**
     * 停止
     */
    stop(): void;
    /**
     * 开启
     */
    start(): void;
}
/**
 * Created by yangsong on 14-12-2.
 * 引导背景层，实现的是一个类似不规则遮罩的功能
 */
declare class GuideMaskBackgroud extends egret.Sprite {
    private _bgs;
    private _stageWidth;
    private _stageHeight;
    private _deductRec;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 初始化游戏宽高
     * @param stageWidth 宽
     * @param stageHeight 高
     */
    init(stageWidth: number, stageHeight: number): void;
    /**
     * Draw
     * @param deductRec 抠出矩形区域
     */
    draw(deductRec: egret.Rectangle): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 移除所有对象
     */
    private removeAllChild();
    /**
     * 添加一个bg
     * @param $x 初始X
     * @param $y 初始Y
     * @param $w 宽
     * @param $h 高
     */
    private addBg($x, $y, $w, $h);
    /**
     * 重写hitTest
     * 检测指定坐标是否在显示对象内
     * @method egret.DisplayObject#hitTest
     * @param x {number} 检测坐标的x轴
     * @param y {number} 检测坐标的y轴
     * @param ignoreTouchEnabled {boolean} 是否忽略TouchEnabled
     * @returns {*}
     */
    hitTest(x: number, y: number, ignoreTouchEnabled?: boolean): this;
}
/**
 * Created by yangsong on 14-12-2.
 * 引导工具类，根据每个项目重写实现可重写实现
 */
declare class GuideUtils extends SingtonClass {
    private configData;
    /**
     * 大步骤
     * @type {number}
     */
    currPart: number;
    /**
     * 小步骤
     * @type {number}
     */
    currStep: number;
    /**
     * 引导view
     * @type {GuideView}
     */
    private view;
    /**
     * 下一步
     */
    next(): void;
    /**
     * 显示
     */
    show(obj: egret.DisplayObject, targetPart: number, targetStep: number): void;
    /**
     * 隐藏
     */
    private hide();
    /**
     * 引导是否显示
     */
    isShow(): boolean;
}
/**
 * Created by yangsong on 14-12-2.
 * GuideView
 */
declare class GuideView extends egret.Sprite {
    private _bg;
    private _obj;
    private _data;
    private _objGlobalPoint;
    private _objRec;
    private _maskPic;
    private _textBgPic;
    private _handPic;
    private _txt;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 屏幕大小改变时重置
     */
    private onResize();
    /**
     * 刷新
     */
    private refurbish();
    /**
     * 设置显示数据
     * @param obj
     * @param data
     */
    setData(obj: egret.DisplayObject, data: any): void;
    /**
     * 检测文本提示框是否出了边界
     */
    private checkTextBgX();
}
/**
 * Created by husong on 4/10/15.
 */
declare class EasyLoading extends SingtonClass {
    private content;
    private speed;
    private averageUtils;
    private uiImageContainer;
    constructor();
    private init();
    showLoading(): void;
    hideLoading(): void;
    private enterFrame(time);
}
/**
 * Created by yangsong on 2014/11/22.
 * Controller管理类
 */
declare class ControllerManager extends SingtonClass {
    private _modules;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 清空处理
     */
    clear(): void;
    /**
     * 动态添加的Controller
     * @param key 唯一标识
     * @param manager Manager
     *
     */
    register(key: number, control: BaseController): void;
    /**
     * 动态移除Controller
     * @param key 唯一标识
     *
     */
    unregister(key: number): void;
    /**
     * 是否已经存在Controller
     * @param key 唯一标识
     * @return Boolean
     *
     */
    isExists(key: number): boolean;
    /**
     * 跨模块消息传递
     * @param controllerD Controller唯一标识
     * @param key 消息唯一标识
     *
     */
    applyFunc(controllerD: number, key: number, ...param: any[]): any;
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    getControllerModel(controllerD: number): BaseModel;
}
declare class ViewManager extends SingtonClass {
    /**
     * 已注册的UI
     */
    private _views;
    /**
     * 开启中UI
     */
    private _opens;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 清空处理
     */
    clear(): void;
    /**
     * 面板注册
     * @param key 面板唯一标识
     * @param view 面板
     */
    register(key: number, view: IBaseView): void;
    /**
     * 面板解除注册
     * @param key
     */
    unregister(key: number): void;
    /**
     * 销毁一个面板
     * @param key 唯一标识
     * @param newView 新面板
     */
    destroy(key: number, newView?: IBaseView): void;
    /**
     * 开启面板
     * @param key 面板唯一标识
     * @param param 参数
     *
     */
    open(key: number, ...param: any[]): IBaseView;
    /**
     * 关闭面板
     * @param key 面板唯一标识
     * @param param 参数
     *
     */
    close(key: number, ...param: any[]): void;
    /**
     * 关闭面板
     * @param view
     * @param param
     */
    closeView(view: IBaseView, ...param: any[]): void;
    /**
     * 根据唯一标识获取一个UI对象
     * @param key
     * @returns {any}
     */
    getView(key: number): IBaseView;
    /**
     * 关闭所有开启中的UI
     */
    closeAll(): void;
    /**
     * 当前ui打开数量
     * @returns {number}
     */
    currOpenNum(): number;
    /**
     * 检测一个UI是否开启中
     * @param key
     * @returns {boolean}
     */
    isShow(key: number): boolean;
}
/**
 * Created by yangsong on 2014/11/22.
 * Controller基类
 */
declare class BaseController {
    /**
     * 消息列表
     */
    private _messages;
    /**
     * 该模块使用的实体类
     */
    private _model;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    registerFunc(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    setModel(model: BaseModel): void;
    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    getModel(): BaseModel;
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    getControllerModel(controllerD: number): BaseModel;
    /**
     * View注册
     * @param viewClassZ View的类
     * @param viewId View的ID
     * @param viewParent View的父级
     * @returns {IBaseView}
     */
    registerView<T>(viewClass: {
        new (...args): T;
    }, viewId: number, viewParent: egret.DisplayObjectContainer): T;
    /**
     * View打开
     * @param viewId View的ID
     * @param param 参数
     */
    openView(viewId: number, ...param: any[]): void;
    /**
     * View关闭
     * @param viewId View的ID
     * @param param 参数
     */
    closeView(viewId: number, ...param: any[]): void;
}
/**
 * Created by yangsong on 15-11-20.
 * Model基类
 */
declare class BaseModel {
    private _controller;
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    constructor($controller: BaseController);
}
/**
 * Created by yangsong on 2014/11/22.
 * Proxy基类
 */
declare class BaseProxy {
    private _controller;
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    constructor($controller: BaseController);
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 注册从服务器返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    receiveServerMsg(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 注册从服务器返回消息的监听，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    receiveServerMsgOnce(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 注册从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    receiveServerHttpUpdateMsg(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 注册从Http服务端返回的Update消息，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    receiveServerHttpUpdateMsgOnce(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 移除服务端返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    removeServerMsg(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 移除从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    removeServerHttpUpdateMsg(key: any, callbackFunc: Function, callbackObj: any): void;
    /**
     * 发送消息到Socket服务器
     */
    sendSocketMsg(msg: any): void;
    /**
     * 发送消息到Http服务端
     * @param type 消息标识 例如: User.login
     * @param paramObj 消息参数 例如: var paramObj:any = {"uName":uName, "uPass":uPass};
     */
    sendHttpMsg(type: string, paramObj?: any): void;
    /**
     * 将参数转换为URLVariables
     * @param t_type
     * @param t_paramObj
     * @returns {egret.URLVariables}
     */
    private getURLVariables(t_type, t_paramObj);
}
declare namespace DDI {
    class BaseButton extends BaseEuiView {
        contentGroup: eui.Group;
        label: eui.Label;
        rect: eui.Rect;
        private _size;
        private _text;
        private _borderWidth;
        private _borderColor;
        private _plain;
        private _color;
        private _radius;
        constructor(controller: BaseController, parent: eui.Group);
        initData(): void;
        initUI(): void;
        /**
         * 设置尺寸
         * large,medium,small
         * 默认为small
         */
        size: string;
        /**
         * button文字
         */
        text: string;
        /**
         * border宽度
         */
        borderWidth: number;
        /**
         * border颜色
         */
        borderColor: number;
        /**
         * plain
         */
        plain: boolean;
        /**
         * rect颜色
         */
        color: number;
        /**
         * 圆角
         */
        radius: number;
    }
}
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自egret.Sprite
 */
declare class BaseSpriteView extends egret.DisplayObjectContainer implements IBaseView {
    private _controller;
    private _myParent;
    private _isInit;
    private _resources;
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    constructor($controller: BaseController, $parent: egret.DisplayObjectContainer);
    /**
     * 设置初始加载资源
     * @param resources
     */
    setResources(resources: string[]): void;
    /**
     * 获取我的父级
     * @returns {egret.DisplayObjectContainer}
     */
    readonly myParent: egret.DisplayObjectContainer;
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 面板是否显示
     * @return
     *
     */
    isShow(): boolean;
    /**
     * 添加到父级
     */
    addToParent(): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    initUI(): void;
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    initData(): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 屏幕尺寸变化时调用
     */
    protected onResize(): void;
    /**
     * 加载面板所需资源
     * @param loadComplete
     * @param initComplete
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
}
/**
 * Created by yangsong on 2014/11/24.
 * View基类接口
 */
interface IBaseView {
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 面板是否显示
     * @return
     *
     */
    isShow(): boolean;
    /**
     * 添加到父级
     */
    addToParent(): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    initUI(): void;
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    initData(): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    applyFunc(key: any, ...param: any[]): any;
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    applyControllerFunc(controllerKey: number, key: any, ...param: any[]): any;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
    /**
     * 设置初始加载资源
     * @param resources
     */
    setResources(resources: string[]): void;
    /**
     * 分模块加载资源
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
}
/**
 * Created by yangsong on 2014/11/22.
 * Http数据缓存类
 */
declare class DynamicChange {
    private _dataCache;
    private _pUpdate;
    constructor();
    readonly pUpdate: ProxyUpdate;
    getCacheData(key: string): any;
    clearCache(): void;
    getCacheKeyInfos(): Array<any>;
    isCache(key: string): boolean;
}
/**
 * Created by yangsong on 2014/11/22.
 * Http数据更新类
 */
declare class ProxyUpdate {
    private _cache;
    constructor(cache: any);
    isArray(key: any): boolean;
    isObject(key: string): boolean;
    isNormal(key: string): boolean;
    isAddToArray(key: string): boolean;
    isRemoveToArray(key: string): boolean;
    isFilter(key: string): boolean;
    isNumeric(v: string): boolean;
    private _updateObject(name, value, cacheData);
    private _getFilterObject(filter, cacheData);
    private _addObjectToArray(cacheData, changeValue);
    private _removeObjectFromArray(cacheData, key, changeValue);
    update(key: string, data: any): void;
    private _update(cacheData, changeData);
}
/**
 * Created by yangsong on 2014/11/22.
 * Http请求处理
 */
declare class Http extends SingtonClass {
    private _serverUrl;
    private _urlLoader;
    private _request;
    private _cache;
    private _isRequesting;
    private _data;
    private _type;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 初始化服务器地址
     * @param serverUrl服务器链接地址
     */
    initServer(serverUrl: string): void;
    /**
     * 数据缓存
     * @returns {DynamicChange}
     * @constructor
     */
    readonly Data: DynamicChange;
    /**
     * Http错误处理函数
     * @param e
     */
    private onError(e);
    /**
     * 请求数据
     * @param    type
     * @param    t_variables
     */
    send(type: string, urlVariables: egret.URLVariables): void;
    /**
     * 请求服务器
     */
    private post();
    /**
     * 数据返回
     * @param event
     */
    private onLoaderComplete(event);
    /**
     * 开始下一个请求
     */
    private nextPost();
}
/**
 * Created by yangsong on 2014/11/25.
 * 服务端消息解析
 */
interface BaseMsg {
    /**
     * 接收消息处理
     * @param msg
     */
    receive(socket: egret.WebSocket): void;
    /**
     * 发送消息处理
     * @param msg
     */
    send(socket: egret.WebSocket, msg: any): void;
    /**
     * 消息解析,返回格式{key:XX, body:XX}
     * @param msg
     */
    decode(msg: any): any;
    /**
     * 消息封装
     * @param msg
     */
    encode(msg: any): any;
}
declare namespace DDI {
    class BaseCompany extends BaseEuiView {
        constructor($controller: BaseController, $parent: eui.Group);
        circleImg: eui.Image;
        circle: eui.Rect;
        contentLabel: eui.Label;
        private _circleImgSource;
        private _contentLabelText;
        initUI(): void;
        initData(): void;
        private onAddStage();
        /**
         * img set & get
         */
        circleImgSource: string;
        /**
         * label set & get
         */
        contentLabelText: string;
    }
}
/**
 * Created by yangsong on 15-3-25.
 */
declare class ByteArrayMsgByProtobuf extends ByteArrayMsg {
    private msgClass;
    private protoConfig;
    private protoConfigSymmetry;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 获取msgID对应的类
     * @param key
     * @returns {any}
     */
    private getMsgClass(key);
    /**
     * 获取msgID
     * @param key
     * @returns {any}
     */
    private getMsgID(key);
    /**
     * 获取msgKey
     * @param msgId
     * @returns {any}
     */
    private getMsgKey(msgId);
    /**
     * 消息解析
     * @param msg
     */
    decode(msg: any): any;
    /**
     * 消息封装
     * @param msg
     */
    encode(msg: any): any;
}
/**
 * Created by yangsong on 2014/11/25.
 * Socket类
 */
declare class Socket extends SingtonClass {
    private _needReconnect;
    private _maxReconnectCount;
    private _reconnectCount;
    private _connectFlag;
    private _host;
    private _port;
    private _socket;
    private _msg;
    private _isConnecting;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 添加事件监听
     */
    private addEvents();
    /**
     * 移除事件监听
     */
    private removeEvents();
    /**
     * 服务器连接成功
     */
    private onSocketOpen();
    /**
     * 服务器断开连接
     */
    private onSocketClose();
    /**
     * 服务器连接错误
     */
    private onSocketError();
    /**
     * 收到服务器消息
     * @param e
     */
    private onReceiveMessage(e);
    /**
     * 初始化服务区地址
     * @param host IP
     * @param port 端口
     * @param msg 消息发送接受处理类
     */
    initServer(host: string, port: any, msg: BaseMsg): void;
    /**
     * 开始Socket连接
     */
    connect(): void;
    /**
     * 重新连接
     */
    private reconnect();
    /**
     * 发送消息到服务器
     * @param msg
     */
    send(msg: any): void;
    /**
     * 关闭Socket连接
     */
    close(): void;
    /**
     * 清理当前的Socket连接
     */
    private closeCurrentSocket();
    /**
     * Socket是否在连接中
     * @returns {boolean}
     */
    isConnecting(): boolean;
    /**
     * Debug信息
     * @param str
     */
    private debugInfo(str);
}
/**
 * Created by yangsong on 2014/11/25.
 * Socket使用常量
 */
declare class SocketConst {
    /**
     * Socket已经连接上
     * @type {string}
     */
    static SOCKET_CONNECT: string;
    /**
     * Socket重新连接上
     * @type {string}
     */
    static SOCKET_RECONNECT: string;
    /**
     * Socket开始重新连接上
     * @type {string}
     */
    static SOCKET_START_RECONNECT: string;
    /**
     * Socket已关闭
     * @type {string}
     */
    static SOCKET_CLOSE: string;
    static SOCKET_DATA: string;
    /**
     * Socket不能连接上
     * @type {string}
     */
    static SOCKET_NOCONNECT: string;
    /**
     * Socketdebug的消息
     * @type {string}
     */
    static SOCKET_DEBUG_INFO: string;
}
/**
 * 具有向前向后切换view
 * 可继承的home父类
 */
interface OUTACTION {
    action?: any;
}
interface judgeBase {
    const: Array<number>;
    callback: Array<any>;
    action?: any;
}
declare namespace DDI {
    class BaseHome extends BaseEuiView {
        viewArr: Array<any>;
        allView: Array<any>;
        currentIndex: number;
        judgeStatus: boolean;
        judgeIndex: number;
        judgeBaseArray: any;
        currentJudgeArray: Array<any>;
        lastView: number;
        controlEnd: boolean;
        delay: number;
        outAction: OUTACTION;
        timer: number;
        constructor($controller: BaseController, $parent: eui.Group);
        changeIndex(val: number): void;
        initUI(): Promise<any>;
        initData(): void;
        virtualApply(controllerD: number, key: number): any;
        beforeInitView(): void;
        /**
         * init view 数据
         */
        initViewData(): void;
        /**
         * initViewdata 完毕回调
         * 用于子类继承
         */
        afterInitViewed(): void;
        beforeMock(viewIndex: number): void;
        mock(savePoint: any): Promise<any>;
        mockSuccess(savePoint: any): void;
        /**
         * 当有问题却没答案时，取消mock
         * 用于子类继承
         */
        mockCancel(savePoint: any): void;
        mocked(viewIndex: any): void;
        /**
         * 向前一个view
         * 用于子类继承
         */
        preViewChangeHandle(): void;
        /**
         * pageView是否可被点击
         */
        stageEnableTap: boolean;
        /**
         * 向后一个view
         * 用于子类继承
         */
        nextViewChangeHandle(): void;
        waitNextChangeHandle(): void;
        nextViewChange(): void;
        viewChange(viewArr: any, index: number): void;
        private viewOpen(viewArr);
        private stopTap();
        /**
         * pageView点击事件，用于子类继承
         */
        stageTap(): void;
        /**
         * 变更stage可点击状态
         * @param status stage是否可点击状态
         */
        toggleStageStatus(status: boolean): void;
        /**
         * 加入决策树中
         * @param item
         */
        joinJudge(item: any): void;
        judgeViewChange(viewArr: any, skipAction?: boolean): void;
        judgeViewOpen(viewArr: judgeBase): void;
        /**
         * 决策树下一个view change方法
         */
        nextJudgeViewChange(): Promise<void>;
        /**
         * 从一个决策树至下一个决策树需要调用，用以重置judgeIndex
         */
        restartJudgeIndex(): void;
        /**
         * 跳出决策树，用以在决策完成之后调用
         */
        skipJudge(): void;
        /**
         * 进入下一个题目
         */
        resetQuestion(): Promise<void>;
        /**
         * 进入决策树之前的钩子，用于子类继承
         */
        beforeJoinJudge(): void;
        /**
         * 生成当前决策树内的可执行数组
         */
        createJudgeArr(array: Array<any>): void;
    }
}
/**
 * Created by yangsong on 15-3-20.
 */
declare class UTFMsgByJson extends UTFMsg {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 消息解析
     * @param msg
     */
    decode(msg: any): any;
    /**
     * 消息封装
     * @param msg
     */
    encode(msg: any): any;
}
/**
 * Created by yangsong on 15-1-7.
 */
declare class BaseEuiLayer extends eui.UILayer {
    constructor();
}
/**
 * Created by yangsong on 15-1-7.
 * Scene基类
 */
declare class BaseScene {
    private _layers;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 进入Scene调用
     */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    addLayer(layer: egret.DisplayObjectContainer): void;
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    addLayerAt(layer: egret.DisplayObjectContainer, index: number): void;
    /**
     * 在舞台移除一个Layer
     * @param layer
     */
    removeLayer(layer: egret.DisplayObjectContainer): void;
    /**
     * Layer中移除所有
     * @param layer
     */
    layerRemoveAllChild(layer: egret.DisplayObjectContainer): void;
    /**
     * 移除所有Layer
     */
    removeAllLayer(): void;
}
/**
 * Created by yangsong on 15-1-7.
 */
declare class BaseSpriteLayer extends egret.DisplayObjectContainer {
    constructor();
}
/**
 * Created by yangsong on 2014/11/28.
 * 场景管理类
 */
declare class SceneManager extends SingtonClass {
    private _scenes;
    private _currScene;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 清空处理
     */
    clear(): void;
    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    register(key: number, scene: BaseScene): void;
    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    runScene(key: number, ...param: any[]): void;
    /**
     * 获取当前Scene
     * @returns {number}
     */
    getCurrScene(): number;
}
declare namespace DDI {
    class BaseLabel extends BaseEuiView {
        /**
         * 由皮肤的id确定的属性
         */
        label: eui.Label;
        rect: eui.Rect;
        contentGroup: eui.Group;
        topTriangle: eui.Image;
        bottomTriangle: eui.Image;
        private _rectBackgroudColor;
        private _rectBorderRadius;
        private _rectBackgroundAlpha;
        private _rectBorderColor;
        private _rectBorderWidth;
        private _labelText;
        private _labelMargin;
        private _labelTextFlow;
        private isComplete;
        private text;
        interval: number;
        stop: boolean;
        constructor($controller: BaseController, $parent: eui.Group);
        /**
         * 设置背景颜色
         */
        rectBackgroudColor: number;
        /**
         * 设置圆角
         */
        rectBorderRadius: number;
        /**
         * 设置背景透明度
         */
        rectBackgroundAlpha: number;
        /**
         * 设置边框颜色
         */
        rectBorderColor: number;
        /**
         * 设置边框宽度
         */
        rectBorderWidth: number;
        /**
         * 设置文本
         */
        labelText: string;
        /**
         * 设置折行文本
         */
        labelFlow: string;
        /**
         * labelText更改
         */
        labelTextChanged(): void;
        /**
         * 设置文本外边距
         */
        labelMargin: any;
        /**
         * 设置文本textFlow
         */
        labelTextFlow: Array<any>;
        initData(): void;
        /**
         * 折行
         * @param text 文本
         * @param number 一行的字数
         */
        setSingleChar(text: any, number: any): any;
        /**
     * 开始打字机效果
     */
        startType(): void;
        afterStartType(): void;
        /**
         * 打印完成的回调函数
         * 用于子类继承
         */
        startTyped(): void;
        /**
         * 开始打印之前的回调
         * 用于子类继承
         */
        beforeStartType(): void;
        /**
        * 文字打字机效果
        * obj           文本对象
        * content       文字
        */
        private typerEffect(obj, content?, startTyped?);
        /**
         * 创建textflow格式文本
         * @param obj {egret.ITextElement}
         */
        private createMoreText(obj);
        tapItem(): void;
        outAnimation(): egret.Tween;
        /**
         * 退出之前的回调
         */
        beforeOut(): any;
        stopType(): void;
    }
}
interface ISoundBg {
    play(bgName: string): void;
    stop(): void;
    setVolume(volume: number): void;
    pause(): any;
    resume(): any;
}
interface ISoundEffect {
    play(effectName: string, loops: number): void;
    stop(effectName: string): void;
    setVolume(volume: number): void;
}
/**
 * Created by yangsong on 15-1-14.
 * 背景音乐类
 */
declare class SoundBg extends BaseSound implements ISoundBg {
    private _currBg;
    private _currSound;
    private _currSoundChannel;
    private _volume;
    private _pausePosition;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 停止当前音乐
     */
    stop(): void;
    /**
     * 播放某个音乐
     * @param effectName
     */
    play(effectName: string): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 恢复
     */
    resume(): void;
    /**
     * 播放
     * @param sound
     */
    private playSound(sound);
    /**
     * 设置音量
     * @param volume
     */
    setVolume(volume: number): void;
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    loadedPlay(key: string): void;
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    checkCanClear(key: string): boolean;
}
/**
 * Created by yangsong on 18-12-26.
 * 音效类(微信小游戏专用)
 */
declare class SoundBgWx implements ISoundBg {
    private _currBg;
    private _volume;
    private _audio;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 停止当前音乐
     */
    stop(): void;
    /**
     * 播放某个音乐
     * @param bgName
     */
    play(bgName: string): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 恢复
     */
    resume(): void;
    /**
     * 设置音量
     * @param volume
     */
    setVolume(volume: number): void;
}
/**
 * Created by yangsong on 15-1-14.
 * 音效类
 */
declare class SoundEffect extends BaseSound implements ISoundEffect {
    private _volume;
    private _soundLoops;
    private _soundChannels;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 播放一个音效
     * @param effectName
     */
    play(effectName: string, loops: number): void;
    /**
     * 播放
     * @param sound
     */
    private playSound(effectName, sound, loops);
    /**
     * 播放完成
     */
    private onPlayComplete(e);
    /**
     * 销毁channel
     */
    private destroyChannel(channel);
    /**
     * 播放一个音效
     * @param effectName
     */
    stop(effectName: string): void;
    /**
     * 设置音量
     * @param volume
     */
    setVolume(volume: number): void;
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    loadedPlay(key: string): void;
}
declare namespace DDI {
    class BaseBoard extends BaseEuiView {
        backImg: eui.Image;
        label: eui.Label;
        btn: eui.Button;
        contentGroup: eui.Group;
        private _imgSource;
        private _labelText;
        constructor($controller: BaseController, $parent: eui.Group);
        labelText: string;
        imgSource: string;
        initData(): void;
    }
}
/**
 * Created by yangsong on 15-1-14.
 * Sound管理类
 */
declare class SoundManager extends SingtonClass {
    /**
     * 音乐文件清理时间
     * @type {number}
     */
    static CLEAR_TIME: number;
    private LocalStorageKey_Bg;
    private LocalStorageKey_Effect;
    private effect;
    private bg;
    private effectOn;
    private bgOn;
    private currBg;
    private bgVolume;
    private effectVolume;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 设置背景音乐和音效的默认开关状态
     */
    private setDefaultSwitchState();
    /**
     * 播放音效
     * @param effectName
     */
    playEffect(effectName: string, loops?: number): void;
    /**
     * 停止音效播放
     * @param effectName
     */
    stopEffect(effectName: string): void;
    /**
     * 播放背景音乐
     * @param key
     */
    playBg(bgName: string): void;
    /**
     * 停止背景音乐
     */
    stopBg(): void;
    /**
     * 暂停背景音乐
     */
    pauseBg(): void;
    /**
     * 恢复背景音乐
     */
    resumeBg(): void;
    /**
     * 设置音效是否开启
     * @param $isOn
     */
    setEffectOn($isOn: boolean): void;
    /**
     * 设置背景音乐是否开启
     * @param $isOn
     */
    setBgOn($isOn: boolean): void;
    /**
     * 设置背景音乐音量
     * @param volume
     */
    setBgVolume(volume: number): void;
    /**
     * 获取背景音乐音量
     * @returns {number}
     */
    getBgVolume(): number;
    /**
     * 设置音效音量
     * @param volume
     */
    setEffectVolume(volume: number): void;
    /**
     * 获取音效音量
     * @returns {number}
     */
    getEffectVolume(): number;
    /**
     * 背景音乐是否已开启
     * @returns {boolean}
     */
    readonly bgIsOn: boolean;
    /**
     * 音效是否已开启
     * @returns {boolean}
     */
    readonly effectIsOn: boolean;
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**
     * Swf文档类
     * */
    class Swf {
        static dataKey_Sprite: string;
        static dataKey_Image: string;
        static dataKey_MovieClip: string;
        static dataKey_TextField: string;
        static dataKey_Button: string;
        static dataKey_Scale9: string;
        static dataKey_ShapeImg: string;
        static dataKey_Component: string;
        static dataKey_Particle: string;
        private _createDisplayFuns;
        private _swfData;
        private _assetManager;
        swfUpdateManager: starlingswf.SwfUpdateManager;
        name: string;
        constructor(swfData: Object, assetManager: starlingswf.SwfAssetManager, fps?: number);
        createSprite(name: string, data?: any[], sprData?: any[]): starlingswf.SwfSprite;
        createMovie(name: string, data?: any[], cls?: any): starlingswf.SwfMovieClip;
        createImage(name: string, data?: any[]): egret.Bitmap;
        getTexture(name: any): egret.Texture;
        createS9Image(name: string, data?: any[]): egret.Bitmap;
        createShapeImage(name: string, data?: any[]): egret.Bitmap;
        createTextField(name: string, data?: any[]): egret.TextField;
        /**
         * 是否有某个Sprite
         * */
        hasSprite(name: string): Boolean;
        /**
         * 是否有某个MovieClip
         * */
        hasMovieClip(name: string): Boolean;
        /**
         * 是否有某个Image
         * */
        hasImage(name: string): Boolean;
        /**
         * 是否有某个S9Image
         * */
        hasS9Image(name: string): Boolean;
        /**
         * 是否有某个S9Image
         * */
        hasShapeImage(name: string): Boolean;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**
     * swf资源管理器
     * */
    class SwfAssetManager {
        private _sheets;
        private _textures;
        constructor();
        addSpriteSheet(name: string, spriteSheep: egret.SpriteSheet): void;
        addTexture(name: string, texture: egret.Texture): void;
        createBitmap(name: string): egret.Bitmap;
        getTexture(name: any): egret.Texture;
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /** 动画更新管理器 */
    class SwfUpdateManager {
        private _animations;
        private _addQueue;
        private _removeQueue;
        private _fps;
        private _fpsTime;
        private _currentTime;
        static createSwfUpdateManager(fps: number): SwfUpdateManager;
        private clear();
        stop(): void;
        play(): void;
        setFps(fps: number): void;
        addSwfAnimation(animation: starlingswf.ISwfAnimation): void;
        removeSwfAnimation(animation: starlingswf.ISwfAnimation): void;
        private updateAdd();
        private updateRemove();
        private update(time);
        private _update();
    }
}
/**
 * Created by zmliu on 14-5-11.
 */
declare module starlingswf {
    /**
     * 动画接口
     * */
    interface ISwfAnimation {
        update(): void;
    }
}
declare namespace DDI {
    class BaseLongTap extends BaseEuiView {
        dataProvider: eui.ArrayCollection;
        list: eui.List;
        scroller: eui.Scroller;
        title: eui.Label;
        contentGroup: eui.Group;
        group: eui.Group;
        longTapList: Array<any>;
        questionId: number;
        funBeginArr: any;
        funEndArr: any;
        timeStamp: number;
        delay: number;
        bottom: number;
        maskColor: number;
        constructor($controller: BaseController, $parent: eui.Group);
        initUI(): void;
        initData(): void;
        longTapToStage(): void;
        /**
         * 添加到stage的回调
         * 用于子类继承
         */
        onAddToStage(): void;
        startAnimation(): egret.Tween;
        clearEventListener(): void;
        circleAddEventToItem(payload?: any): void;
        touchBegin(mask: eui.Rect): void;
        touchEnd(mask: eui.Rect, ct: eui.Group): Promise<void>;
        beforeAnimation(): void;
        /**
         * 长按成功的回调
         */
        touchSuccess(ct: eui.Group, mask: eui.Rect): Promise<void>;
        tapAnimation(ct: eui.Group, mask: eui.Rect): Promise<any>;
        resetCT(ct: eui.Group, mask: eui.Rect): void;
        /**
         * 长按取消的回调
         */
        touchCancel(): void;
        outAnimation(): egret.Tween;
        beforeOut(): void;
        getQuestionId(root: number): Promise<number>;
        cacheId(): void;
        getAndMixinList(): Promise<void>;
        mixinList(list: any): void;
        /**
         * 发送答案
         */
        sendAnswers(ct: eui.Group): Promise<void>;
    }
}
declare namespace DDI {
    class BaseMessage extends BaseEuiView {
        constructor(controller: BaseController, parent: eui.Group);
        /**
         * 向外提供三个字段
         * backGroundColor 背景颜色
         * message 文字
         * arrowPosition 箭头位置
         */
        contentGroup: eui.Group;
        backRect: eui.Rect;
        label: eui.Label;
        arrow: eui.Image;
        private _backGroudColor;
        private _message;
        private _arrowPosition;
        /**
         * initUI
         */
        initUI(): void;
        /**
         * initData
         */
        initData(): void;
        /**
         * 背景颜色
         */
        backGroundColor: number;
        /**
         * 箭头位置
         */
        arrowPosition: string;
        /**
         * message内容
         */
        message: string;
    }
}
/**
 * Created by yangsong on 2014/6/16.
 * StarlingSwf工厂类
 */
declare class StarlingSwfFactory extends SingtonClass {
    private swfAssetsManager;
    private swfAssetsNames;
    private swfAssets;
    private swfData;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 添加一个swf
     * @param name 唯一标识
     * @param swfData swf配置数据
     * @param spriteSheep 资源配置数据
     */
    addSwf(name: string, swfData: Object, spriteSheep: egret.SpriteSheet): void;
    /**
     * 停止列表中的swf
     * @param arr
     */
    stopSwfs(arr: Array<string>): void;
    /**
     * 播放列表中的swf
     * @param arr
     */
    playSwfs(arr: Array<string>): void;
    /**
     * 清空所有swf
     */
    private clearSwfs();
    /**
     * 清空
     */
    clear(): void;
    /**
     * 创建一个StarlingSwfMovieClip
     * @param name mc的名字
     * @returns {StarlingSwfMovieClip}
     */
    makeMc(name: string): StarlingSwfMovieClip;
    /**
     * 创建一个Bitmap
     * @param name 图片的名称
     * @returns {egret.Bitmap}
     */
    makeImage(name: string): egret.Bitmap;
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {egret.Texture}
     */
    getTexture(name: any): egret.Texture;
}
/**
 * Created by yangsong on 2014/6/16.
 * 自定义SwfMovieClip类，带有帧处理函数
 */
declare class StarlingSwfMovieClip extends starlingswf.SwfMovieClip {
    private frameActions;
    private preFrame;
    private complateFunc;
    private complateObj;
    private currFrameName;
    /**
     * 构造函数
     * @param frames
     * @param labels
     * @param displayObjects
     * @param ownerSwf
     */
    constructor(frames: any[], labels: any[], displayObjects: Object, ownerSwf: starlingswf.Swf);
    /**
     * 移除舞台处理函数
     */
    private onRemove();
    /**
     * 设置帧事件
     * @param $frame 第几帧
     * @param $action 执行函数
     * @param $actionObj 执行函数所属对象
     * @param $param 执行函数所需参数
     */
    setFrameAction($frame: number, $action: Function, $actionObj: any, $param?: any): void;
    /**
     * 设置mc播放完成执行的函数
     * @param $action 执行函数
     * @param $actionObj 执行函数所属对象
     */
    setCompleteAction($action: Function, $actionObj: any): void;
    /**
     * 播放结束执行函数
     */
    private onPlayend();
    /**
     * 播放
     * @param frame
     */
    goToPlay(frame: Object): void;
    /**
     * 重写setCurrentFrame函数，处理帧事件
     */
    setCurrentFrame(frame: number): void;
    /**
     * 销毁
     */
    dispose(): void;
}
/**
 * Created by lcj on 14-6-18.
 * StarlingSwf工具类
 */
declare class StarlingSwfUtils {
    private static swfList;
    /**
     * 函数游戏内用到的swf
     * @param swf
     */
    static addSwf(swf: starlingswf.Swf): void;
    /**
     * 在缓存中移除一个swf
     * @param swf
     */
    static removeSwf(swf: starlingswf.Swf): void;
    /**
     * 创建Sprite
     * @param name Sprite名称
     * @param data
     * @param sprData
     * @returns {*}
     */
    static createSprite(name: string, data?: any[], sprData?: any[]): starlingswf.SwfSprite;
    /**
     * 创建Bitmap
     * @param name Bitmap名称
     * @param data
     * @returns {*}
     */
    static createImage(name: string, data?: any[]): egret.Bitmap;
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {*}
     */
    static getTexture(name: any): egret.Texture;
    /**
     * 创建一个SwfMovieClip
     * @param name SwfMovieClip名称
     * @param data
     * @param cls
     * @returns {*}
     */
    static createMovie(name: string, data?: any[], cls?: any): starlingswf.SwfMovieClip;
    /**
     * 创建一个九宫格图片
     * @param name 图片名称
     * @param data
     * @returns {*}
     */
    static createS9Image(name: string, data?: any[]): egret.Bitmap;
    /**
     * 创建ShapeImage
     * @param name ShapeImage名称
     * @param data
     * @returns {*}
     */
    static createShapeImage(name: string, data?: any[]): egret.Bitmap;
    /**
     * 获取缓存中一个Swf
     * @param name 名称
     * @returns {*}
     */
    static getSwf(name: string): starlingswf.Swf;
    private static btnList;
    private static firstAddBtn;
    /**
     * 根据一个两帧mc自定义Button
     * @param btn
     * @param onClick
     * @param thisObj
     */
    static fixButton(btn: starlingswf.SwfMovieClip, onClick?: Function, thisObj?: any): void;
    private static onBtnTouchBegin(event);
    private static onTouchEnd(event);
}
declare class StarlingSwfButtonData {
    btn: starlingswf.SwfMovieClip;
    onClick: Function;
    touchStageX: number;
    touchStageY: number;
    thisObj: any;
}
/**
 * Created by yangsong on 15-11-4.
 */
declare class AllAsyncExecutor {
    private _callBack;
    private _callBackTarget;
    private _functions;
    private _complateNum;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 设置全部执行完成处理函数
     * @param callBack 此队列处理完成执行函数
     * @param callBackTarget 此队列处理完成执行函数所属对象
     */
    setCallBack(callBack: Function, callBackTarget: any): void;
    /**
     * 注册需要队列处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    regist($func: Function, $thisObj: any): void;
    /**
     * 开始执行
     */
    start(): void;
    /**
     * 执行完成
     */
    complate(): void;
}
/**
 * Created by Saco on 2015/9/16.
 */
declare class AnchorUtils extends SingtonClass {
    constructor();
    private init();
    setAnchorX(target: egret.DisplayObject, value: number): void;
    setAnchorY(target: egret.DisplayObject, value: number): void;
    setAnchor(target: egret.DisplayObject, value: number): void;
    getAnchor(target: egret.DisplayObject): number;
    getAnchorY(target: egret.DisplayObject): number;
    getAnchorX(target: egret.DisplayObject): number;
    private injectAnchor();
    private changeAnchor(tar);
}
/**
 * Created by egret on 15-8-7.
 */
declare class ArrayUtils extends SingtonClass {
    /**
     * 遍历操作
     * @param arr
     * @param func
     */
    forEach(arr: Array<any>, func: Function, funcObj: any): void;
}
/**
 * Created by yangsong on 15-8-19.
 * 平均数工具类
 */
declare class AverageUtils {
    private maxNum;
    private nums;
    private numsLen;
    private numSum;
    /**
     * 构造函数
     * @param $maxNum 参与计算的最大值
     */
    constructor($maxNum?: number);
    /**
     * 加入一个值
     * @param value
     */
    push(value: number): void;
    /**
     * 获取平均值
     * @returns {number}
     */
    getValue(): number;
    /**
     * 清空
     */
    clear(): void;
}
/**
 * Tween工具类
 */
declare class AxiosUtils extends SingtonClass {
    constructor(...rest: any[]);
}
/**
 * Created by yangsong on 15-1-12.
 * 通用工具类
 */
declare class CommonUtils extends SingtonClass {
    constructor();
    /**
     * 给字体添加描边
     * @param lable      文字
     * @param color      表示文本的描边颜色
     * @param width      描边宽度。
     */
    addLableStrokeColor(lable: eui.Label, color: any, width: any): void;
    /**
     * 深度复制
     * @param _data
     */
    copyDataHandler(obj: any): any;
    /**
     * 锁屏
     */
    lock(): void;
    /**
     * 解屏
     */
    unlock(): void;
    /**
     * 万字的显示
     * @param label
     * @param num
     */
    labelIsOverLenght: (label: any, num: any) => void;
    /**
     * int64转number
     * @param obj
     * @returns {number}
     */
    int64ToNumber(obj: any): number;
}
/**
 * Created by yangsong on 2014/11/22.
 * Date工具类
 */
declare class DateUtils extends SingtonClass {
    constructor();
    /**
     * 根据秒数格式化字符串
     * @param second 秒数
     * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00(分:秒)   4:xx天前，xx小时前，xx分钟前    6:00:00(时:分)
     * @return
     *
     */
    getFormatBySecond(second: number, type?: number): string;
    private getFormatBySecond1(t?);
    private getFormatBySecond3(t?);
    private getFormatBySecond2(time);
    private getFormatBySecond4(time);
    private getFormatBySecond5(time);
    private getFormatBySecond6(t?);
    /**
     * 获取当前是周几
     * ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
     */
    getDay(timestamp: number): number;
    /**
     * 判定两个时间是否是同一天
     */
    isSameDate(timestamp1: number, timestamp2: number): boolean;
    /**
     * 日期格式化
     */
    format(d: Date, fmt?: string): string;
    /**
     * 计算两个时间相差天数
     */
    dateDifference(timestamp1: number, timestamp2: number): number;
}
/**
 * Created by yangsong on 2014/11/23.
 * Debug调试工具
 */
declare class DebugUtils extends SingtonClass {
    private _isOpen;
    private _startTimes;
    private _threshold;
    constructor();
    /**
     * 设置调试是否开启
     * @param flag
     *
     */
    isOpen(flag: boolean): void;
    /**
     * 是否是调试模式
     * @returns {boolean}
     */
    readonly isDebug: boolean;
    /**
     * 开始
     * @param key 标识
     * @param minTime 最小时间
     *
     */
    start(key: string): void;
    /**
     * 停止
     *
     */
    stop(key: any): number;
    /**
     * 设置时间间隔阈值
     * @param value
     */
    setThreshold(value: number): void;
}
declare class DecisionCover extends SingtonClass {
    constructor();
    loaded: boolean;
    group: eui.Group;
    rect: eui.Rect;
    label: eui.Label;
    loading(vm: any, labelText: any, alpha?: number): void;
    hideLoading(): void;
    hideLoadingfalse(): void;
    poptips(vm: any, tips: any): void;
}
/**
 * Created by Saco on 2014/8/2.
 */
declare class DelayOptManager extends SingtonClass {
    private TIME_THRESHOLD;
    private _delayOpts;
    constructor();
    addDelayOptFunction(thisObj: any, fun: Function, funPara?: any, callBack?: Function, para?: any): void;
    clear(): void;
    stop(): void;
    private runCachedFun(f);
}
/**
 * Created by yangsong on 15-1-20.
 */
declare class DeviceUtils extends SingtonClass {
    static OS_IOS: string;
    static OS_Android: string;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 当前是否Html5版本
     * @returns {boolean}
     * @constructor
     */
    readonly IsHtml5: boolean;
    /**
     * 当前是否是Native版本
     * @returns {boolean}
     * @constructor
     */
    readonly IsNative: boolean;
    /**
     * 当前是否是微信小游戏平台
     */
    readonly IsWxGame: boolean;
    /**
     * 是否是在手机上
     * @returns {boolean}
     * @constructor
     */
    readonly IsMobile: boolean;
    /**
     * 是否是在PC上
     * @returns {boolean}
     * @constructor
     */
    readonly IsPC: boolean;
    /**
     * 是否是QQ浏览器
     * @returns {boolean}
     * @constructor
     */
    readonly IsQQBrowser: boolean;
    /**
     * 是否是IE浏览器
     * @returns {boolean}
     * @constructor
     */
    readonly IsIEBrowser: boolean;
    /**
     * 是否是Firefox浏览器
     * @returns {boolean}
     * @constructor
     */
    readonly IsFirefoxBrowser: boolean;
    /**
     * 是否是Chrome浏览器
     * @returns {boolean}
     * @constructor
     */
    readonly IsChromeBrowser: boolean;
    /**
     * 是否是Safari浏览器
     * @returns {boolean}
     * @constructor
     */
    readonly IsSafariBrowser: boolean;
    /**
     * 是否是Opera浏览器
     * @returns {boolean}
     * @constructor
     */
    readonly IsOperaBrowser: boolean;
    /**
     * 得到设备系统 如：iOS/Android/WP7
     */
    readonly DeviceOs: string;
}
/**
 * Created by yangsong on 2014/11/24.
 * 显示对象工具类
 */
declare class DisplayUtils extends SingtonClass {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 创建一个Bitmap
     * @param resName resource.json中配置的name
     * @returns {egret.Bitmap}
     */
    createBitmap(resName: string): egret.Bitmap;
    /**
     * 创建一个textField
     * @param size;
     * @param color;
     * @param otherParam;
     */
    createTextField(size?: number, color?: number, otherParam?: {
        rotation?: number;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        textAlign?: egret.HorizontalAlign;
        verticalAlign?: egret.VerticalAlign;
        skewX?: number;
        skewY?: number;
        text?: string;
        bold?: boolean;
    }): egret.TextField;
    /**
     * 创建一个位图字体
     */
    createBitmapFont(fontName: string): egret.BitmapText;
    /**
     * 创建一张Gui的图片
     * @param resName
     * @returns {egret.Bitmap}
     */
    createEuiImage(resName: string): eui.Image;
    /**
     * 从父级移除child
     * @param child
     */
    removeFromParent(child: egret.DisplayObject): void;
    /**
     * 添加到指定容器
     * @param child
     * @param parent
     */
    addChild(child: egret.DisplayObject, parent: egret.DisplayObjectContainer): void;
}
/**
 * Created by yangsong on 2014/12/3.
 * 各种效果工具类
 */
declare class EffectUtils extends SingtonClass {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 类似mac上图标上下抖动的效果
     * @param obj 要抖动的对象，使用
     * @param initY 要抖动的对象的初始Y值，原始位置
     */
    macIconShake(obj: egret.DisplayObject, initY: number): void;
    /**
     * 开始放大缩小
     * @param obj
     */
    startScale(obj: egret.DisplayObject, scaleTime: number): void;
    /**
     * 停止放大缩小
     * @param obj
     */
    stopScale(obj: egret.DisplayObject): void;
    /**
     * 开始闪烁
     * @param obj
     */
    startFlicker(obj: egret.DisplayObject, alphaTime: number, alpha_min?: number): void;
    /**
     * 停止闪烁
     * @param obj
     */
    stopFlicker(obj: egret.DisplayObject): void;
    /**
     * 开始上下抖动
     * @param obj
     */
    startShake(obj: egret.DisplayObject, shakeTime: number, shakeHeight?: number): void;
    /**
     * 停止上下抖动
     * @param obj
     */
    stopShake(obj: egret.DisplayObject): void;
    /**
     * 设置显示对象“黑化”效果
     */
    setDisplayObjectBlack(obj: egret.DisplayObject): void;
    /**
     * 设置显示对象“灰化”效果
     */
    setDisplayObjectGray(obj: egret.DisplayObject): void;
    /**
     * 开始左右摇动
     * @param obj
     */
    startWobble(obj: egret.DisplayObject, wobbleTime?: number, wobbleRotation?: number): void;
    /**
     * 停止左右摇动
     * @param obj
     */
    stopWobble(obj: egret.DisplayObject): void;
    /**
     * 开始发光闪烁
     * @param obj
     */
    startFlash(obj: egret.DisplayObject, flashColor: number, flashTime: number): void;
    /**
     * 停止发光闪烁
     * @param obj
     */
    stopFlash(obj: egret.DisplayObject): void;
}
/**
 * Created by yangsong on 15-1-23.
 * 引擎扩展类
 */
declare class EgretExpandUtils extends SingtonClass {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 初始化函数
     */
    init(): void;
}
/**
 * Created by yangsong on 2014/11/23.
 * 帧延迟处理
 */
declare class FrameDelay {
    private func;
    private thisObj;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 延迟处理
     * @param delayFrame 延迟帧数
     * @param func 延迟执行的函数
     * @param thisObj 延迟执行的函数的所属对象
     */
    delayCall(delayFrame: number, func: Function, thisObj: any): void;
    private listener_enterFrame();
}
/**
 * Created by yangsong on 2014/11/23.
 * 分帧处理
 */
declare class FrameExecutor {
    private delayFrame;
    private functions;
    private frameDelay;
    /**
     * 构造函数
     */
    constructor($delayFrame: number);
    /**
     * 注册要分帧处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    regist($func: Function, $thisObj: any): void;
    /**
     * 执行
     */
    execute(): void;
}
/**
 * Created by yangsong on 15-1-26.
 * 键盘工具类
 */
declare class KeyboardUtils extends SingtonClass {
    private key_ups;
    private key_downs;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 添加KeyUp事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    addKeyUp(callback: Function, target: any): void;
    /**
     * 添加KeyDown事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    addKeyDown(callback: Function, target: any): void;
    /**
     * 移除KeyUp事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    removeKeyUp(callback: Function, target: any): void;
    /**
     * 移除KeyDown事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    removeKeyDown(callback: Function, target: any): void;
}
/**
 * Created by Saco on 2014/12/1.
 */
declare class LocationPropertyUtils extends SingtonClass {
    constructor();
    getPara(paraName: string, paraUrl?: string): string;
    setProperty(paraName: string, paraValue: string, paraUrl?: string): string;
    hasProperty(paraName: string, paraUrl?: string): boolean;
}
/**
 * Created by yangsong on 2014/11/22.
 */
declare class Log {
    /**
     * Debug
     */
    static debug(...optionalParams: any[]): void;
    /**
     * Info
     */
    static info(...optionalParams: any[]): void;
    /**
     * Warn
     */
    static warn(...optionalParams: any[]): void;
    /**
     * Error
     */
    static error(...optionalParams: any[]): void;
}
/**
 * Created by yangsong on 2014/11/22.
 * 数学计算工具类
 */
declare class MathUtils extends SingtonClass {
    /**
     * 弧度制转换为角度值
     * @param radian 弧度制
     * @returns {number}
     */
    getAngle(radian: number): number;
    /**
     * 角度值转换为弧度制
     * @param angle
     */
    getRadian(angle: number): number;
    /**
     * 获取两点间弧度
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    getRadian2(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    getDistance(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
}
declare class md5 {
    constructor();
    private hexcase;
    private b64pad;
    hex_md5(s: any): string;
    private b64_md5(s);
    private any_md5(s, e);
    private hex_hmac_md5(k, d);
    private b64_hmac_md5(k, d);
    private any_hmac_md5(k, d, e);
    private md5_vm_test();
    private rstr_md5(s);
    private rstr_hmac_md5(key, data);
    private rstr2hex(input);
    private rstr2b64(input);
    private rstr2any(input, encoding);
    private str2rstr_utf8(input);
    private str2rstr_utf16le(input);
    private str2rstr_utf16be(input);
    private rstr2binl(input);
    private binl2rstr(input);
    private binl_md5(x, len);
    private md5_cmn(q, a, b, x, s, t);
    private md5_ff(a, b, c, d, x, s, t);
    private md5_gg(a, b, c, d, x, s, t);
    private md5_hh(a, b, c, d, x, s, t);
    private md5_ii(a, b, c, d, x, s, t);
    private safe_add(x, y);
    private bit_rol(num, cnt);
}
/**
 * Created by yangsong on 2014/11/23.
 * 服务端返回消息处理
 */
declare class MessageCenter extends SingtonClass {
    private dict;
    private eVec;
    private lastRunTime;
    private type;
    /**
     * 构造函数
     * @param type 0:使用分帧处理 1:及时执行
     */
    constructor(type: number);
    /**
     * 清空处理
     */
    clear(): void;
    /**
     * 添加消息监听
     * @param type 消息唯一标识
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     *
     */
    addListener(type: string, listener: Function, listenerObj: any): void;
    /**
     * 移除消息监听
     * @param type 消息唯一标识
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     */
    removeListener(type: string, listener: Function, listenerObj: any): void;
    /**
     * 移除某一对象的所有监听
     * @param listenerObj 侦听函数所属对象
     */
    removeAll(listenerObj: any): void;
    /**
     * 触发消息
     * @param type 消息唯一标识
     * @param param 消息参数
     *
     */
    dispatch(type: string, ...param: any[]): void;
    /**
     * 运行
     *
     */
    private run();
    /**
     * 处理一条消息
     * @param msgVo
     */
    private dealMsg(msgVo);
    /**
     * 判断指定类型的事件是否注册了监听
     * @param type 事件类型
     */
    isHasListener(type: string): boolean;
}
declare class MessageVo {
    type: string;
    param: any[];
    constructor();
    dispose(): void;
}
/**
 * Created by yangsong on 2014/11/22.
 * 对象池类
 */
declare class ObjectPool {
    private static _content;
    private _objs;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 放回一个对象
     * @param obj
     */
    pushObj(obj: any): void;
    /**
     * 取出一个对象
     * @returns {*}
     */
    popObj(): any;
    /**
     * 清除所有缓存对象
     */
    clear(): void;
    /**
     * 取出一个对象
     * @param classZ Class
     * @return Object
     *
     */
    static pop(refKey: string, ...args: any[]): any;
    /**
     * 取出一个对象
     * @param refKey Class
     * @param extraKey 标识值
     * @returns {any}
     */
    static popWithExtraKey(refKey: string, extraKey: any): any;
    /**
     * 放入一个对象
     * @param obj
     *
     */
    static push(obj: any): boolean;
    /**
     * 清除所有对象
     */
    static clear(): void;
    /**
     * 清除某一类对象
     * @param classZ Class
     * @param clearFuncName 清除对象需要执行的函数
     */
    static clearClass(refKey: string, clearFuncName?: string): void;
    /**
     * 缓存中对象统一执行一个函数
     * @param classZ Class
     * @param dealFuncName 要执行的函数名称
     */
    static dealFunc(refKey: string, dealFuncName: string): void;
}
declare class PageViewUtils extends SingtonClass {
    constructor();
    initPageView(oldViewConst: any, newViewConst: any): void;
}
/**
 * Created by yangsong on 2014/11/23.
 * 百分比类
 */
declare class Percent {
    currentValue: number;
    totalValue: number;
    /**
     * 构造函数
     * @param $currentValue 当前值
     * @param $totalValue 总值
     */
    constructor($currentValue: number, $totalValue: number);
    /**
     * 计算当前百分比
     * @returns {number}
     */
    computePercent(): number;
    /**
     * 计算当前比例
     * @returns {number}
     */
    computeRate(): number;
    /**
     * 反转
     * @returns {Percent}
     */
    reverse(): Percent;
    /**
     * 复制
     * @returns {Percent}
     */
    copy(): Percent;
    /**
     * 计算百分比反转
     * @returns {number}
     */
    computePercentReverse(): number;
    /**
     * 计算比例反转
     * @returns {number}
     */
    computeRateReverse(): number;
}
declare class PopUp extends SingtonClass {
    flowerMC: egret.MovieClip;
    constructor();
    loaded: boolean;
    group: eui.Group;
    rect: eui.Rect;
    label: eui.Label;
    loading(vm: any, labelText: any, alpha?: number): void;
    layoutMC(json: any, img: any, type: any, vm: any): void;
    hideLoading(): void;
    hideLoadingfalse(): void;
    poptips(vm: any, tips: any): void;
}
/**
 * Created by yangsong on 15-8-19.
 * 队列处理
 */
declare class QueueExecutor {
    private _callBack;
    private _callBackTarget;
    private _functions;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 设置全部执行完成处理函数
     * @param callBack 此队列处理完成执行函数
     * @param callBackTarget 此队列处理完成执行函数所属对象
     */
    setCallBack(callBack: Function, callBackTarget: any): void;
    /**
     * 注册需要队列处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    regist($func: Function, $thisObj: any): void;
    /**
     * 开始执行
     */
    start(): void;
    /**
     * 执行下一个
     */
    next(): void;
}
/**
 * Created by yangsong on 2014/11/23.
 */
declare class RandomUtils extends SingtonClass {
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    limit($from: number, $end: number): number;
    /**
     * 获取一个区间的随机数(整数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    limitInteger($from: number, $end: number): number;
    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    randomArray(arr: Array<any>): any;
}
/**
 * cacheAsBitmap的替代方案，解决QQ浏览器在1G内存的机器上最多能使用20个Canvas的限制
 */
declare class RenderTextureManager extends SingtonClass {
    private _pool;
    private _maxNum;
    private _useNum;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 是否是低端手机的QQ浏览器
     * @returns {boolean}
     */
    private isLowerQQBrowser();
    /**
     * 获取一个egret.RenderTexture
     * @returns {egret.RenderTexture}
     */
    pop(): egret.RenderTexture;
    /**
     * 回收一个egret.RenderTexture
     * @param texture
     */
    push(texture: egret.RenderTexture): void;
}
/**
 * Created by yangsong on 15-2-11.
 * 资源加载工具类，
 * 支持多个resource.json文件加载
 * 封装Group的加载
 * 增加静默加载机制
 */
declare class ResourceUtils extends SingtonClass {
    private _configs;
    private _onConfigComplete;
    private _onConfigCompleteTarget;
    private _groups;
    private _groupIndex;
    private _itemLoadErrorFunction;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 添加一个配置文件
     * @param jsonPath resource.json路径
     * @param filePath 访问资源路径
     */
    addConfig(jsonPath: string, filePath: string): void;
    /**
     * 开始加载配置文件
     * @param $onConfigComplete 加载完成执行函数
     * @param $onConfigCompleteTarget 加载完成执行函数所属对象
     */
    loadConfig($onConfigComplete: Function, $onConfigCompleteTarget: any): void;
    /**
     * 加载
     */
    private loadNextConfig();
    /**
     * 加载完成
     * @param event
     */
    private onConfigCompleteHandle(event);
    /**
     * 加载资源组
     * @param $groupName 资源组名称
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    loadGroup($groupName: string, $onResourceLoadComplete: Function, $onResourceLoadProgress: Function, $onResourceLoadTarget: any): void;
    /**
     * 同时加载多个组
     * @param $groupName 自定义的组名称
     * @param $subGroups 所包含的组名称或者key名称数组
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    loadGroups($groupName: string, $subGroups: Array<any>, $onResourceLoadComplete: Function, $onResourceLoadProgress: Function, $onResourceLoadTarget: any): void;
    /**
     * 静默加载
     * @param $groupName 资源组名称
     * @param $groupName 所包含的组名称或者key名称数组
     */
    pilfererLoadGroup($groupName: string, $subGroups?: Array<any>): void;
    /**
     * 资源组加载完成
     */
    private onResourceLoadComplete(event);
    /**
     * 资源组加载进度
     */
    private onResourceLoadProgress(event);
    /**
     * 资源组加载失败
     * @param event
     */
    private onResourceLoadError(event);
    /**
     * 资源加载失败
     * @param event
     */
    private onResourceItemLoadError(event);
    /**
     * 注册资源加载失败处理函数
     */
    registerItemLoadErrorFunction(func: (event: RES.ResourceEvent) => void): void;
    /**
     * 混合加载资源组
     * @param $resources 资源数组
     * @param $groups 资源组数组
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    loadResource($resources?: any[], $groups?: any[], $onResourceLoadComplete?: Function, $onResourceLoadProgress?: Function, $onResourceLoadTarget?: any): void;
    /**
     * 动态创建加载组
     * @param {string} $groupName
     * @param {string[]} resKeys
     */
    createGroup($groupName: string, resKeys: string[]): void;
    /**
     * 动态创建Resource
     * @param {string} resKey
     * @param {string} resType
     * @param {string} resUrl
     */
    createResource(resKey: string, resType: string, resUrl: string): void;
    /**
     * 获取文件的真实路径
     */
    getFileRealPath(key: string): string;
}
/**
 * Created by yangsong on 15-1-27.
 * 摇杆控制类
 */
declare class RockerUtils extends SingtonClass {
    private keys;
    private moveFlagRec;
    private moveFlagCheckRec;
    private moveFlag;
    private moveFlagWidthHelf;
    private moveFlagX;
    private moveFlagY;
    private isMoveing;
    private moveFlagGoX;
    private moveFlagGoY;
    private mouseX;
    private mouseY;
    private checkKeying;
    private dealKeyFunc;
    private dealKeyTarget;
    constructor();
    /**
     * 摇杆初始化
     * @param moveBg 摇杆背景图
     * @param moveFlag 摇杆图标
     * @param dealKeyFunc 摇杆移动时处理函数
     * @param dealKeyTarget 摇杆移动时处理函数所属对象
     */
    init(moveBg: egret.Bitmap, moveFlag: egret.Bitmap, dealKeyFunc: Function, dealKeyTarget: any): void;
    /**
     * 键盘按下处理
     * @param keyCode
     */
    private onKeyDown(keyCode);
    /**
     * 键盘弹起处理
     * @param keyCode
     */
    private onKeyUp(keyCode);
    /**
     * 事件拦截
     * @param e
     */
    private stopEvent(e);
    /**
     * 手指离开Stage事件处理
     * @param e
     */
    private leaveStateEvent(e);
    /**
     * 开始移动
     */
    private startMove(e);
    /**
     * 停止移动
     */
    private stopMove();
    /**
     * 复位摇杆位置
     */
    private resetRockerPos();
    /**
     * 摇杆移动事件
     * @param e
     */
    private heroMoveEvent(e);
    /**
     * 摇杆移动
     * @param e
     */
    private runMove(stageX, stageY);
    /**
     * 开启检测
     */
    private startCheckKey();
    /**
     * 停止检测
     */
    private stopCheckKey();
    /**
     * 检测
     */
    private delKeys();
    /**
     * 停止处理
     */
    stop(): void;
}
declare class Save extends SingtonClass {
    constructor();
    send(currentView: number, index: number): void;
}
/**
 * Tween工具类
 */
declare type savePointType = {
    stageNumber: number;
    percentNumber: number;
    sceneStartId: number;
    baseHomeName: string;
    viewIndex: number;
    questionInfo?: QuestionInfo;
    table?: Array<any>;
};
/**
 * questionInfo interface
 */
interface QuestionInfo {
    questionId?: number;
    answers?: Array<any>;
}
declare class Savepoint extends SingtonClass {
    private _savePoint;
    private _tempData;
    constructor();
    /**
     *stageNumber:1\2\3
     completePercent:百分比中的分子数字
     sceneStartClass:需要启动的场景类
     viewIndex:需要打开的view索引
     *
     */
    cacheSavepoint(savePoint: savePointType): void;
    takeSavepoint(): savePointType;
    tempData: any;
}
declare class SceneReview extends SingtonClass {
    private _sceneReviewString;
    constructor();
    /**
     *stageNumber:1\2\3
     completePercent:百分比中的分子数字
     sceneStartClass:需要启动的场景类
     viewIndex:需要打开的view索引
     *
     */
    replaceSceneReview(sceneReview: string): void;
}
/**
 * Created by Channing on 2014/12/6.
 * 震动
 */
declare class ShockUtils extends SingtonClass {
    constructor();
    MAP: number;
    SPRITE: number;
    private mapPoss;
    private spritePoss;
    private _shockPoss;
    private _shockLength;
    private _shockCount;
    private _target;
    private _rx;
    private _ry;
    private _type;
    private _repeatCount;
    destroy(): void;
    shock(type?: number, target?: egret.DisplayObject, repeatCount?: number): void;
    private start(num?);
    private stop();
    private onShockEnter(time);
    repeatCount: number;
}
/**
 * Created by yangsong on 2014/12/3.
 * Stage相关工具类
 */
declare class StageUtils extends SingtonClass {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 获取游戏的高度
     * @returns {number}
     */
    getHeight(): number;
    /**
     * 获取游戏宽度
     * @returns {number}
     */
    getWidth(): number;
    /**
     * 指定此对象的子项以及子孙项是否接收鼠标/触摸事件
     * @param value
     */
    setTouchChildren(value: boolean): void;
    /**
     * 设置同时可触发几个点击事件，默认为2
     * @param value
     */
    setMaxTouches(value: number): void;
    /**
     * 设置帧频
     * @param value
     */
    setFrameRate(value: number): void;
    /**
     * 设置适配方式
     * @param value
     */
    setScaleMode(value: string): void;
    /**
     * 获取游戏Stage对象
     * @returns {egret.MainContext}
     */
    getStage(): egret.Stage;
    /**
     * 开启全屏适配方案
     */
    private designWidth;
    private designHeight;
    private resizeCallback;
    startFullscreenAdaptation(designWidth: number, designHeight: number, resizeCallback: Function): void;
    private stageOnResize();
}
/**
 * Tween工具类
 */
declare type StepMap = {
    stageOneStep: number;
    stageTwoStep: number;
    stageThreeStep: number;
};
declare class Step extends SingtonClass {
    private _stepMap;
    private _stepPoint;
    stepMap: StepMap;
    stepPoint: number;
}
/**
 * Created by yangsong on 2014/12/8.
 * StringBuffer类
 */
declare class StringBuffer {
    private _strings;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 追加一个字符串
     * @param str
     */
    append(str: string): void;
    /**
     * 转换为字符串
     * @returns {string}
     */
    toString(): string;
    /**
     * 清空
     */
    clear(): void;
}
/**
 * Created by yangsong on 14/12/18.
 * 字符串操作工具类
 */
declare class StringUtils extends SingtonClass {
    /**
     * 构造函数
     */
    constructor();
    /**
     * 去掉前后空格
     * @param str
     * @returns {string}
     */
    trimSpace(str: string): string;
    /**
     * 获取字符串长度，中文为2
     * @param str
     */
    getStringLength(str: string): number;
    /**
     * 判断一个字符串是否包含中文
     * @param str
     * @returns {boolean}
     */
    isChinese(str: string): boolean;
    /**
     * 格式化字符串 "{0},{1}.format("text0","text1")
     */
    format(val: string, ...param: any[]): string;
    /**
     * 折行
     * @param text 文本
     * @param number 一行的字数
     */
    setSingleChar(text: any, number: any): any;
    flowToText(flow: Array<any>): string;
}
/**
 * Created by Saco on 2015/10/26.
 */
declare class TextFlowMaker extends SingtonClass {
    private STYLE_COLOR;
    private STYLE_SIZE;
    private PROP_TEXT;
    constructor();
    /**
     * "你好|S:18&C:0xffff00&T:带颜色字号|S:50&T:大号字体|C:0x0000ff&T:带色字体";
     * @param sourceText
     * @returns {Array}
     */
    generateTextFlow(sourceText: string): egret.ITextElement[];
    private getSingleTextFlow(text);
}
/**
 * Created by yangsong on 2014/11/23.
 * Timer管理器
 */
declare class TimerManager extends SingtonClass {
    private _handlers;
    private _delHandlers;
    private _currTime;
    private _currFrame;
    private _count;
    private _timeScale;
    private _isPause;
    private _pauseTime;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 设置时间参数
     * @param timeScale
     */
    setTimeScale(timeScale: number): void;
    /**
     * 每帧执行函数
     * @param frameTime
     */
    private onEnterFrame();
    private removeHandle(handler);
    private create(useFrame, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
    /**
     * 在指定的延迟（以毫秒为单位）后运行指定的函数。
     * @param delay 执行间隔:毫秒
     * @param method 执行函数
     * @param methodObj 执行函数所属对象
     */
    setTimeOut(delay: number, method: Function, methodObj: any): void;
    /**
     * 在指定的帧后运行指定的函数。
     * @param delay 执行间隔:帧频
     * @param method 执行函数
     * @param methodObj 执行函数所属对象
     */
    setFrameOut(delay: number, method: Function, methodObj: any): void;
    /**
     *
     * 定时执行
     * @param delay 执行间隔:毫秒
     * @param repeatCount 执行次数, 0为无限次
     * @param method 执行函数
     * @param methodObj 执行函数所属对象
     * @param complateMethod 完成执行函数
     * @param complateMethodObj 完成执行函数所属对象
     *
     */
    doTimer(delay: number, repeatCount: number, method: Function, methodObj: any, complateMethod?: Function, complateMethodObj?: any): void;
    /**
     *
     * 定时执行
     * @param delay 执行间隔:帧频
     * @param repeatCount 执行次数, 0为无限次
     * @param method 执行函数
     * @param methodObj 执行函数所属对象
     * @param complateMethod 完成执行函数
     * @param complateMethodObj 完成执行函数所属对象
     *
     */
    doFrame(delay: number, repeatCount: number, method: Function, methodObj: any, complateMethod?: Function, complateMethodObj?: any): void;
    /**
     * 定时器执行数量
     * @return
     *
     */
    readonly count: number;
    /**
     * 清理
     * @param method 要移除的函数
     * @param methodObj 要移除的函数对应的对象
     */
    remove(method: Function, methodObj: any): void;
    /**
     * 清理
     * @param methodObj 要移除的函数对应的对象
     */
    removeAll(methodObj: any): void;
    /**
     * 检测是否已经存在
     * @param method
     * @param methodObj
     *
     */
    isExists(method: Function, methodObj: any): boolean;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 从暂停中恢复
     */
    resume(): void;
}
declare class TimerHandler {
    /**执行间隔*/
    delay: number;
    /**是否重复执行*/
    repeat: boolean;
    /**重复执行次数*/
    repeatCount: number;
    /**是否用帧率*/
    userFrame: boolean;
    /**执行时间*/
    exeTime: number;
    /**处理函数*/
    method: Function;
    /**处理函数所属对象*/
    methodObj: any;
    /**完成处理函数*/
    complateMethod: Function;
    /**完成处理函数所属对象*/
    complateMethodObj: any;
    /**上次的执行时间*/
    dealTime: number;
    /**清理*/
    clear(): void;
}
/**
 * Created by Saco on 2015/1/14.
 * hack引擎的点击事件
 */
declare class TouchEventHook extends SingtonClass {
    private _eventCallDic;
    constructor();
    private readonly systemTouch;
    hookTouchEvent(eventType: string, bindCall: (x: number, y: number, identifier: number) => void): void;
    private restoreEvent(eventType);
    releaseTouchEvent(eventType: string): void;
}
/**
 * Tween工具类
 */
declare class TweenUtils extends SingtonClass {
    constructor();
    FAST: number;
    STABLE: number;
    SLOW: number;
    /**
     * 暂停所有的Tween
     */
    pause(): void;
    /**
     * 从暂停中恢复
     */
    resume(): void;
    /**
     * 清除所有动画
     */
    removeAllTween(): void;
    /**
     * 从中心扩张
     */
    enLarge(vm: any, time?: number): egret.Tween;
    /**
     * 向中心消失
     * @param vm
     * @param time
     */
    deLarge(vm: any, time?: number): egret.Tween;
    /**
     * 放大后进入
     */
    scaleIn(vm: any): egret.Tween;
    /**
     * 退出并放大
     */
    scaleOut(vm: any): egret.Tween;
    /**
     * 左侧飞入
     */
    fromLeft(vm: any): void;
    /**
     *
     * @param vm
     * 循环放大&缩小
     */
    loopLarge(vm: any): void;
    /**
     *
     * @param vm
     * 循环旋转
     */
    rotation(vm: any): void;
    /**
     * 背景移动
     */
    backMove(vm: any, x: number): void;
    reset(vm: any): void;
    /**
     * select动态条
     */
    selectIncrease(vm: any, width: number, delay?: number): egret.Tween;
    /**
     * 旋转
     */
    spin(vm: any): void;
    /**
     * 淡入
     */
    fadeIn(vm: any): egret.Tween;
    /**
     * 淡出
     */
    fadeOut(vm: any): egret.Tween;
}
/**
 * Tween工具类
 */
declare type userInfo = {
    userId: number;
    token: number;
    simulationId: number;
    learningPathId: number;
    practiceMetaId: number;
};
declare class UserInfo extends SingtonClass {
    private _userInfo;
    private _cardId;
    constructor();
    /**
     *stageNumber:1\2\3
     completePercent:百分比中的分子数字
     sceneStartClass:需要启动的场景类
     viewIndex:需要打开的view索引
     *
     */
    cacheUserInfo(_userInfo: userInfo): void;
    takeUserInfo(): userInfo;
    cacheCardId(cardId: number): void;
    takeCardId(): number;
}
