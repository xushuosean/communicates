var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**Sprite*/
    var SwfSprite = (function (_super) {
        __extends(SwfSprite, _super);
        function SwfSprite() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SwfSprite.prototype.getTextField = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getMovie = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getSprite = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getImage = function (name) {
            return this.getChildByName(name);
        };
        return SwfSprite;
    }(egret.DisplayObjectContainer));
    starlingswf.SwfSprite = SwfSprite;
    __reflect(SwfSprite.prototype, "starlingswf.SwfSprite");
})(starlingswf || (starlingswf = {}));
/**
 * Created by yangsong on 14/12/18.
 * 基类
 */
var SingtonClass = (function () {
    function SingtonClass() {
    }
    /**
     * 获取一个单例
     * @returns {any}
     */
    SingtonClass.getSingtonInstance = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var Class = this;
        if (!Class._instance) {
            Class._instance = new (Class.bind.apply(Class, [void 0].concat(param)))();
        }
        return Class._instance;
    };
    return SingtonClass;
}());
__reflect(SingtonClass.prototype, "SingtonClass");
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自eui.Component
 */
var BaseEuiView = (function (_super) {
    __extends(BaseEuiView, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseEuiView($controller, $parent) {
        var _this = _super.call(this) || this;
        _this._resources = null;
        _this._controller = $controller;
        _this._myParent = $parent;
        _this._isInit = false;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    Object.defineProperty(BaseEuiView.prototype, "myParent", {
        /**
         * 获取我的父级
         * @returns {egret.DisplayObjectContainer}
         */
        get: function () {
            return this._myParent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置初始加载资源
     * @param resources
     */
    BaseEuiView.prototype.setResources = function (resources) {
        this._resources = resources;
    };
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseEuiView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseEuiView.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseEuiView.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 面板是否显示
     * @return
     *
     */
    BaseEuiView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseEuiView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    /**
     * 从父级移除
     */
    BaseEuiView.prototype.removeFromParent = function () {
        App.DisplayUtils.removeFromParent(this);
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseEuiView.prototype.initUI = function () {
        this._isInit = true;
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseEuiView.prototype.initData = function () {
    };
    /**
     * 销毁
     */
    BaseEuiView.prototype.destroy = function () {
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseEuiView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     /**
     * 加载面板所需资源
     */
    BaseEuiView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            App.ResourceUtils.loadResource(this._resources, [], loadComplete, null, this);
            this.once(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    /**
     * 设置是否隐藏
     * @param value
     */
    BaseEuiView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    return BaseEuiView;
}(eui.Component));
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseView"]);
/**
 * Created by yangsong on 15-2-11.
 */
var ByteArrayMsg = (function () {
    /**
     * 构造函数
     */
    function ByteArrayMsg() {
        this._msgBuffer = new egret.ByteArray();
    }
    /**
     * 接收消息处理
     * @param msg
     */
    ByteArrayMsg.prototype.receive = function (socket) {
        socket.readBytes(this._msgBuffer);
        var obj = this.decode(this._msgBuffer);
        if (obj) {
            App.MessageCenter.dispatch(obj.key, obj.body);
        }
        //TODO double bytearray clear
        if (this._msgBuffer.bytesAvailable == 0) {
            this._msgBuffer.clear();
        }
    };
    /**
     * 发送消息处理
     * @param msg
     */
    ByteArrayMsg.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj) {
            obj.position = 0;
            socket.writeBytes(obj, 0, obj.bytesAvailable);
        }
    };
    /**
     * 消息解析
     * @param msg
     */
    ByteArrayMsg.prototype.decode = function (msg) {
        Log.warn("decode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    /**
     * 消息封装
     * @param msg
     */
    ByteArrayMsg.prototype.encode = function (msg) {
        Log.warn("encode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    return ByteArrayMsg;
}());
__reflect(ByteArrayMsg.prototype, "ByteArrayMsg", ["BaseMsg"]);
/**
 * Created by yangsong on 15-2-11.
 */
var UTFMsg = (function () {
    /**
     * 构造函数
     */
    function UTFMsg() {
    }
    /**
     * 接收消息处理
     * @param msg
     */
    UTFMsg.prototype.receive = function (socket) {
        var msg = socket.readUTF();
        var obj = this.decode(msg);
        if (obj) {
            App.MessageCenter.dispatch(obj.key, obj.body);
        }
    };
    /**
     * 发送消息处理
     * @param msg
     */
    UTFMsg.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    };
    /**
     * 消息解析
     * @param msg
     */
    UTFMsg.prototype.decode = function (msg) {
        Log.warn("decode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    /**
     * 消息封装
     * @param msg
     */
    UTFMsg.prototype.encode = function (msg) {
        Log.warn("encode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    return UTFMsg;
}());
__reflect(UTFMsg.prototype, "UTFMsg", ["BaseMsg"]);
/**
 * Created by yangsong on 15-1-14.
 * Sound基类
 */
var BaseSound = (function () {
    /**
     * 构造函数
     */
    function BaseSound() {
        this._cache = {};
        this._loadingCache = new Array();
        App.TimerManager.doTimer(1 * 60 * 1000, 0, this.dealSoundTimer, this);
    }
    /**
     * 处理音乐文件的清理
     */
    BaseSound.prototype.dealSoundTimer = function () {
        var currTime = egret.getTimer();
        var keys = Object.keys(this._cache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (!this.checkCanClear(key))
                continue;
            if (currTime - this._cache[key] >= SoundManager.CLEAR_TIME) {
                //console.log(key + "已clear")
                delete this._cache[key];
                RES.destroyRes(key);
            }
        }
    };
    /**
     * 获取Sound
     * @param key
     * @returns {egret.Sound}
     */
    BaseSound.prototype.getSound = function (key) {
        var sound = RES.getRes(key);
        if (sound) {
            if (this._cache[key]) {
                this._cache[key] = egret.getTimer();
            }
        }
        else {
            if (this._loadingCache.indexOf(key) != -1) {
                return null;
            }
            this._loadingCache.push(key);
            RES.getResAsync(key, this.onResourceLoadComplete, this);
        }
        return sound;
    };
    /**
     * 资源加载完成
     * @param event
     */
    BaseSound.prototype.onResourceLoadComplete = function (data, key) {
        var index = this._loadingCache.indexOf(key);
        if (index != -1) {
            this._loadingCache.splice(index, 1);
            this._cache[key] = egret.getTimer();
            this.loadedPlay(key);
        }
    };
    /**
     * 资源加载完成后处理播放，子类重写
     * @param key
     */
    BaseSound.prototype.loadedPlay = function (key) {
    };
    /**
     * 检测一个文件是否要清除，子类重写
     * @param key
     * @returns {boolean}
     */
    BaseSound.prototype.checkCanClear = function (key) {
        return true;
    };
    return BaseSound;
}());
__reflect(BaseSound.prototype, "BaseSound");
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    var SwfMovieClip = (function (_super) {
        __extends(SwfMovieClip, _super);
        function SwfMovieClip(frames, labels, displayObjects, ownerSwf) {
            var _this = _super.call(this) || this;
            _this._isPlay = false;
            _this.loop = true;
            _this._completeFunction = null; //播放完毕的回调
            _this._frames = frames;
            _this._labels = labels;
            _this._displayObjects = displayObjects;
            _this._startFrame = 0;
            _this._endFrame = _this._frames.length - 1;
            _this._ownerSwf = ownerSwf;
            _this.setCurrentFrame(0);
            _this.play();
            return _this;
        }
        SwfMovieClip.prototype.update = function () {
            if (!this._isPlay)
                return;
            if (this._currentFrame > this._endFrame) {
                if (this.hasCompleteListener()) {
                    this.dispatchEventWith(egret.Event.COMPLETE);
                }
                this._currentFrame = this._startFrame;
                if (!this.loop) {
                    if (this._ownerSwf)
                        this.stop(false);
                    return;
                }
                if (this._startFrame == this._endFrame) {
                    if (this._ownerSwf)
                        this.stop(false);
                    return;
                }
                this.setCurrentFrame(this._startFrame);
            }
            else {
                this.setCurrentFrame(this._currentFrame);
                this._currentFrame += 1;
            }
        };
        SwfMovieClip.prototype.setCurrentFrame = function (frame) {
            //dirty hack this.removeChildren();
            this.$children.length = 0;
            this._currentFrame = frame;
            this.__frameInfos = this._frames[this._currentFrame];
            var data;
            var display;
            var textfield;
            var useIndex;
            var length = this.__frameInfos.length;
            for (var i = 0; i < length; i++) {
                data = this.__frameInfos[i];
                useIndex = data[10];
                display = this._displayObjects[data[0]][useIndex];
                display.skewX = data[6];
                display.skewY = data[7];
                display.alpha = data[8];
                display.name = data[9];
                //                if(data[1] == Swf.dataKey_Particle){
                //                    display["setPostion"](data[2],data[3]);
                //                }else{
                display.x = data[2];
                display.y = data[3];
                //                }
                if (data[1] == starlingswf.Swf.dataKey_Scale9) {
                    display.width = data[11];
                    display.height = data[12];
                }
                else {
                    display.scaleX = data[4];
                    display.scaleY = data[5];
                }
                //dirty hack  this.addChild(display);
                this.$children.push(display);
                display.$parent = this;
                if (data[1] == starlingswf.Swf.dataKey_TextField) {
                    textfield = display;
                    textfield.width = data[11];
                    textfield.height = data[12];
                    //textfield.fontFamily = data[13];
                    textfield.textColor = data[14];
                    textfield.size = data[15];
                    textfield.textAlign = data[16];
                    //                    textfield["italic"] = data[17];
                    //                    textfield["bold"] = data[18];
                    if (data[19] && data[19] != "\r" && data[19] != "") {
                        textfield.text = data[19];
                    }
                }
            }
        };
        SwfMovieClip.prototype.getCurrentFrame = function () {
            return this._currentFrame;
        };
        /**
         * 播放
         * */
        SwfMovieClip.prototype.play = function () {
            this._isPlay = true;
            this._ownerSwf.swfUpdateManager.addSwfAnimation(this);
            var k;
            var arr;
            var l;
            for (k in this._displayObjects) {
                if (k.indexOf(starlingswf.Swf.dataKey_MovieClip) == 0) {
                    arr = this._displayObjects[k];
                    l = arr.length;
                    for (var i = 0; i < l; i++) {
                        arr[i].play();
                    }
                }
            }
        };
        /**
         * 停止
         * @param    stopChild    是否停止子动画
         * */
        SwfMovieClip.prototype.stop = function (stopChild) {
            if (stopChild === void 0) { stopChild = true; }
            this._isPlay = false;
            this._ownerSwf.swfUpdateManager.removeSwfAnimation(this);
            if (!stopChild)
                return;
            var k;
            var arr;
            var l;
            for (k in this._displayObjects) {
                if (k.indexOf(starlingswf.Swf.dataKey_MovieClip) == 0) {
                    arr = this._displayObjects[k];
                    l = arr.length;
                    for (var i = 0; i < l; i++) {
                        arr[i].stop(stopChild);
                    }
                }
            }
        };
        SwfMovieClip.prototype.gotoAndStop = function (frame, stopChild) {
            if (stopChild === void 0) { stopChild = true; }
            this.goTo(frame);
            this.stop(stopChild);
        };
        SwfMovieClip.prototype.gotoAndPlay = function (frame) {
            this.goTo(frame);
            this.play();
        };
        SwfMovieClip.prototype.goTo = function (frame) {
            if (typeof (frame) == "string") {
                var labelData = this.getLabelData(frame);
                this._currentLabel = labelData[0];
                this._currentFrame = this._startFrame = labelData[1];
                this._endFrame = labelData[2];
            }
            else if (typeof (frame) == "number") {
                this._currentFrame = this._startFrame = frame;
                this._endFrame = this._frames.length - 1;
            }
            this.setCurrentFrame(this._currentFrame);
        };
        SwfMovieClip.prototype.getLabelData = function (label) {
            var length = this._labels.length;
            var labelData;
            for (var i = 0; i < length; i++) {
                labelData = this._labels[i];
                if (labelData[0] == label) {
                    return labelData;
                }
            }
            return null;
        };
        /**
         * 是否再播放
         * */
        SwfMovieClip.prototype.isPlay = function () {
            return this._isPlay;
        };
        /**
         * 总共有多少帧
         * */
        SwfMovieClip.prototype.totalFrames = function () {
            return this._frames.length;
        };
        /**
         * 返回当前播放的是哪一个标签
         * */
        SwfMovieClip.prototype.currentLabel = function () {
            return this._currentLabel;
        };
        /**
         * 获取所有标签
         * */
        SwfMovieClip.prototype.labels = function () {
            var length = this._labels.length;
            var returnLabels = [];
            for (var i = 0; i < length; i++) {
                returnLabels.push(this._labels[i][0]);
            }
            return returnLabels;
        };
        SwfMovieClip.prototype.hasCompleteListener = function () {
            return this.hasEventListener(egret.Event.COMPLETE);
        };
        /**
         * 是否包含某个标签
         * */
        SwfMovieClip.prototype.hasLabel = function (label) {
            var ls = this.labels();
            return !(ls.indexOf(label) == -1);
        };
        /*****************************************以下为扩展代码*****************************************/
        /**
         * 获取某一标签的开始帧
         * @param label 标签名
         * @returns {any}
         */
        SwfMovieClip.prototype.getLabelStartFrame = function (label) {
            return this.getLabelData(label)[1];
        };
        /**
         * 获取某一标签的结束帧
         * @param label
         * @returns {any}
         */
        SwfMovieClip.prototype.getLabelEndFrame = function (label) {
            return this.getLabelData(label)[2];
        };
        return SwfMovieClip;
    }(starlingswf.SwfSprite));
    starlingswf.SwfMovieClip = SwfMovieClip;
    __reflect(SwfMovieClip.prototype, "starlingswf.SwfMovieClip", ["starlingswf.ISwfAnimation"]);
})(starlingswf || (starlingswf = {}));
/**
 * Created by yangsong on 18-11-21.
 * 音效类(微信小游戏专用)
 */
var SoundEffectWx = (function () {
    /**
     * 构造函数
     */
    function SoundEffectWx() {
        this._wx = window["wx"];
        this._cache = {};
        App.TimerManager.doTimer(1 * 60 * 1000, 0, this.dealSoundTimer, this);
    }
    /**
     * 处理音乐文件的清理
     */
    SoundEffectWx.prototype.dealSoundTimer = function () {
        var currTime = egret.getTimer();
        var keys = Object.keys(this._cache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (!this.checkCanClear(key)) {
                continue;
            }
            var audio = this._cache[key];
            if (currTime - audio.useTime >= SoundManager.CLEAR_TIME) {
                // console.log(key + "已clear");
                audio.destroy();
                delete this._cache[key];
            }
        }
    };
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    SoundEffectWx.prototype.checkCanClear = function (key) {
        return true;
    };
    /**
     * 获取Sound
     * @param effectName
     * @returns {InnerAudioContext}
     */
    SoundEffectWx.prototype.getAudio = function (effectName) {
        var audio = this._cache[effectName];
        if (!audio) {
            audio = this._wx.createInnerAudioContext();
            audio.src = App.ResourceUtils.getFileRealPath(effectName);
            this._cache[effectName] = audio;
        }
        audio.useTime = egret.getTimer();
        return audio;
    };
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffectWx.prototype.play = function (effectName, loops) {
        var audio = this.getAudio(effectName);
        audio.loop = loops == 0 ? true : false;
        audio.volume = this._volume;
        audio.startTime = 0;
        audio.play();
    };
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffectWx.prototype.stop = function (effectName) {
        var audio = this._cache[effectName];
        if (audio) {
            audio.stop();
        }
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundEffectWx.prototype.setVolume = function (volume) {
        this._volume = volume;
    };
    return SoundEffectWx;
}());
__reflect(SoundEffectWx.prototype, "SoundEffectWx", ["ISoundEffect"]);
var DDI;
(function (DDI) {
    var BaseSelect = (function (_super) {
        __extends(BaseSelect, _super);
        function BaseSelect(controller, parent) {
            var _this = _super.call(this, controller, parent) || this;
            _this.skinName = "resource/ddi_skins/BaseSelectSkin.exml";
            return _this;
        }
        BaseSelect.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        BaseSelect.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
        };
        return BaseSelect;
    }(BaseEuiView));
    DDI.BaseSelect = BaseSelect;
    __reflect(BaseSelect.prototype, "DDI.BaseSelect");
})(DDI || (DDI = {}));
var DDI;
(function (DDI) {
    var BaseTalentPortrait = (function (_super) {
        __extends(BaseTalentPortrait, _super);
        function BaseTalentPortrait(controller, parent) {
            var _this = _super.call(this, controller, parent) || this;
            _this.skinName = "resource/ddi_skins/BaseTalentPortraitSkin.exml";
            _this.groups = [_this.leftTop, _this.rightTop, _this.leftBottom, _this.rightBottom];
            return _this;
        }
        BaseTalentPortrait.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        BaseTalentPortrait.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
        };
        return BaseTalentPortrait;
    }(BaseEuiView));
    DDI.BaseTalentPortrait = BaseTalentPortrait;
    __reflect(BaseTalentPortrait.prototype, "DDI.BaseTalentPortrait");
})(DDI || (DDI = {}));
/**
 * 任务的渲染器
 */
var LongTapItemRender = (function (_super) {
    __extends(LongTapItemRender, _super);
    function LongTapItemRender() {
        return _super.call(this) || this;
    }
    LongTapItemRender.prototype.updateOptionDesc = function () {
        // this.addChildAt(,5)
        // this.removeChildAt()
    };
    LongTapItemRender.prototype.dataChanged = function () {
        // super.dataChanged();
        if (this.label) {
            if (!this.textField) {
                this.textField = new egret.TextField();
                this.textField.wordWrap = true;
                this.textField.width = 540;
                this.textField.x = 20;
                this.textField.y = 20;
                this.textField.textColor = 0xffffff;
                this.textField.lineSpacing = 14;
                this.textField.size = 26;
                this.group.addChild(this.textField);
            }
            ////显示，上一个循环隐藏的文本框
            this.textField.visible = true;
            typeof this.data.optionDesc == "string" ? this.textField.text = this.data.optionDesc : this.textField.textFlow = this.data.optionDesc;
            this.label.text = "";
            this.label.height = this.textField.height;
        }
        if (this.label && this.data.center) {
            this.label.textAlign = this.data.center;
            this.textField.textAlign = this.data.center;
        }
    };
    LongTapItemRender.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.label) {
            typeof this.data.optionDesc == "string" ? this.label.text = this.data.optionDesc : this.label.textFlow = this.data.optionDesc;
        }
        if (instance == this.label && this.data.center) {
            this.label.textAlign = this.data.center;
        }
    };
    return LongTapItemRender;
}(eui.ItemRenderer));
__reflect(LongTapItemRender.prototype, "LongTapItemRender");
/**
 * Created by yangsong on 2014/11/22.
 */
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "Http", {
        /**
         * Http请求
         * @type {Http}
         */
        get: function () {
            return Http.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Socket", {
        /**
         * Socket请求
         * @type {null}
         */
        get: function () {
            return Socket.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Step", {
        /**
         * 项目每个阶段的步长
         */
        get: function () {
            return Step.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ControllerManager", {
        /**
         * 模块管理类
         * @type {ControllerManager}
         */
        get: function () {
            return ControllerManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ViewManager", {
        /**
         * View管理类
         * @type {ViewManager}
         */
        get: function () {
            return ViewManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        /**
         * 场景管理类
         * @type {SceneManager}
         */
        get: function () {
            return SceneManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DebugUtils", {
        /**
         * 调试工具
         * @type {DebugUtils}
         */
        get: function () {
            return DebugUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MessageCenter", {
        /**
         * 服务器返回的消息处理中心
         * @type {MessageCenter}
         */
        get: function () {
            return MessageCenter.getSingtonInstance(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TimerManager", {
        /**
         * 统一的计时器和帧刷管理类
         * @type {TimerManager}
         */
        get: function () {
            return TimerManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DateUtils", {
        /**
         * 日期工具类
         * @type {DateUtils}
         */
        get: function () {
            return DateUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathUtils", {
        /**
         * 数学计算工具类
         * @type {MathUtils}
         */
        get: function () {
            return MathUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RandomUtils", {
        /**
         * 随机数工具类
         * @type {RandomUtils}
         */
        get: function () {
            return RandomUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayUtils", {
        /**
         * 显示对象工具类
         * @type {DisplayUtils}
         */
        get: function () {
            return DisplayUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "BitmapNumber", {
        /*
         * 图片合成数字工具类
         * */
        get: function () {
            return BitmapNumber.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "GuideUtils", {
        /**
         * 引导工具类
         */
        get: function () {
            return GuideUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        /**
         * Stage操作相关工具类
         */
        get: function () {
            return StageUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EffectUtils", {
        /**
         * Effect工具类
         */
        get: function () {
            return EffectUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StringUtils", {
        /**
         * 字符串工具类
         */
        get: function () {
            return StringUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "CommonUtils", {
        /**
         * 通过工具类
         */
        get: function () {
            return CommonUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SoundManager", {
        /**
         * 音乐管理类
         */
        get: function () {
            return SoundManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DeviceUtils", {
        /**
         * 设备工具类
         */
        get: function () {
            return DeviceUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EgretExpandUtils", {
        /**
         * 引擎扩展类
         */
        get: function () {
            return EgretExpandUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "KeyboardUtils", {
        /**
         * 键盘操作工具类
         */
        get: function () {
            return KeyboardUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RockerUtils", {
        /**
         * 摇杆操作工具类
         */
        get: function () {
            return RockerUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ShockUtils", {
        /**
         * 震动类
         */
        get: function () {
            return ShockUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        /**
         * 资源加载工具类
         */
        get: function () {
            return ResourceUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RenderTextureManager", {
        /**
         * RenderTextureManager
         */
        get: function () {
            return RenderTextureManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TextFlowMaker", {
        /**
         * TextFlow
         */
        get: function () {
            return TextFlowMaker.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "NotificationCenter", {
        get: function () {
            if (App._notificationCenter == null) {
                App._notificationCenter = new MessageCenter(1);
            }
            return App._notificationCenter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DelayOptManager", {
        /**
         * 分帧处理类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return DelayOptManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ArrayUtils", {
        /**
         * 数组工具类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return ArrayUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EasyLoading", {
        /**
         * 通用Loading动画
         * @returns {any}
         * @constructor
         */
        get: function () {
            return EasyLoading.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DragonBonesFactory", {
        /**
         * DragonBones工厂类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return DragonBonesFactory.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StarlingSwfFactory", {
        /**
         * StarlingSwf工厂类
         * @returns {StarlingSwfFactory}
         * @constructor
         */
        get: function () {
            return StarlingSwfFactory.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "AnchorUtils", {
        /**
         * AnchorUtils工具类
         */
        get: function () {
            return AnchorUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TouchEventHook", {
        /**
         * hack引擎的Touch事件
         */
        get: function () {
            return TouchEventHook.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "LocationPropertyUtils", {
        /**
         * H5地址栏参数操作工作类
         */
        get: function () {
            return LocationPropertyUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TweenUtils", {
        /**
         * Tween工具类
         */
        get: function () {
            return TweenUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 全局调用的翻译函数，接收待翻译的文本，返回翻译后的文本
     */
    App.Localize = function (path) {
        var pathArray = path.split('.');
        var temp = App.langugeMap[pathArray[0]];
        pathArray.map(function (item, index) {
            if (index !== 0) {
                temp = temp[item];
            }
        });
        return temp;
        // return this.langugeMap[textName]
    };
    App.Locals = function (path) {
        var pathArray = path.split('.');
        var temp = App.langugeMap[pathArray[0]];
        pathArray.map(function (item, index) {
            if (index !== 0) {
                temp = temp[item];
            }
        });
        return temp;
    };
    /**
     * 语言包初始化函数
     */
    App.initLanguage = function () {
        var url = location.href;
        var languageReg = /language=(\w+)/;
        var mathResult = url.match(languageReg);
        var language = mathResult ? mathResult[1].toLowerCase() : 'cn';
        var langugeMap = RES.getRes("language_" + language);
        App.langugeMap = langugeMap;
        console.log("\u8BED\u8A00\u5305_" + language + "\u52A0\u8F7D\u6210\u529F\uFF01");
        // RES.getResAsync('language_'+language).then(langugeMap => {
        //     App.langugeMap = langugeMap;
        //     console.log(`语言包_${language}加载成功！`)
        // })
    };
    Object.defineProperty(App, "Axios", {
        /**
         * axios工具类
         */
        get: function () {
            return AxiosUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Savepoint", {
        /**
         * Save保存点工具类
         */
        get: function () {
            return Savepoint.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneReview", {
        /**
         * 场景回顾类
         */
        get: function () {
            return SceneReview.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "UserInfo", {
        /**
         * 用户信息、元信息类
         */
        get: function () {
            return UserInfo.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "PageView", {
        /**
         * pageView工具类
         */
        get: function () {
            return PageViewUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "PopUp", {
        /**
         * 各种提示
         */
        get: function () {
            return PopUp.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DecisionCover", {
        /**
         * 决策树的cover-up,防止重复现象
         */
        get: function () {
            return DecisionCover.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化函数
     * @constructor
     */
    App.Init = function () {
        console.log("当前引擎版本: ", egret.Capabilities.engineVersion);
        //init language
        this.initLanguage();
        //全局配置数据
        App.GlobalData = RES.getRes("global");
        //开启调试
        App.DebugUtils.isOpen(App.GlobalData.IsDebug);
        App.DebugUtils.setThreshold(5);
        //扩展功能初始化
        App.EgretExpandUtils.init();
        //实例化Http请求
        App.Http.initServer(App.GlobalData.HttpSerever);
        //实例化ProtoBuf和Socket请求
        App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsgByProtobuf());
    };
    /**
     * 请求服务器使用的用户标识
     * @type {string}
     */
    /**
     * 全局的语言包对象
     */
    App.langugeMap = null;
    App.ProxyUserFlag = "";
    App.testforBuild = "testforbuild";
    /**
     * 全局配置数据
     * @type {null}
     */
    App.GlobalData = null;
    /**
     * ProtoConfig
     * @type {null}
     */
    App.ProtoConfig = null;
    return App;
}());
__reflect(App.prototype, "App");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
// /**
//  * Created by yangsong on 15-11-4.
//  * 合并过的json文件解析
//  */
// class MergeJsonAnalyzer extends RES.JsonAnalyzer {
//     //按名字指定要特殊处理的json数据
//     private mergeJsons:Array<string> = ["MergeConfig_json"];
//     /**
//      * 解析并缓存加载成功的数据
//      */
//     public analyzeData(resItem:RES.ResourceItem, data:any):void {
//         var name:string = resItem.name;
//         if (this.fileDic[name] || !data) {
//             return;
//         }
//         try {
//             var jsonData:any = JSON.parse(<string> data);
//             if (this.mergeJsons.indexOf(name) != -1) {
//                 for (var key in jsonData) {
//                     this.fileDic[key] = jsonData[key];
//                 }
//             }
//             else {
//                 this.fileDic[name] = jsonData;
//             }
//         }
//         catch (e) {
//             egret.$warn(1017, resItem.url, data);
//         }
//     }
// } 
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var DDI;
(function (DDI) {
    var BaseAbilityBook = (function (_super) {
        __extends(BaseAbilityBook, _super);
        function BaseAbilityBook($controller, $parent) {
            var _this = _super.call(this, $controller, $parent) || this;
            _this.skinName = 'resource/ddi_skins/BaseAbilityBookSkin.exml';
            return _this;
        }
        BaseAbilityBook.prototype.initData = function () {
            _super.prototype.initData.call(this);
            this.addText();
        };
        BaseAbilityBook.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
            this.btnGroupWidth = this.buttonGroup.width;
            this.closeIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeIconTap, this);
        };
        BaseAbilityBook.prototype.closeIconTap = function () {
            App.ViewManager.closeView(this);
        };
        /**
         * 添加textFlow，供子类继承
         */
        BaseAbilityBook.prototype.addText = function () {
        };
        Object.defineProperty(BaseAbilityBook.prototype, "buttonGroupData", {
            get: function () {
                return this._buttonGroupData;
            },
            set: function (value) {
                this._buttonGroupData = value;
                if (this.buttonGroup) {
                    this.setButton();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设置按钮组
         */
        BaseAbilityBook.prototype.setButton = function () {
            var _this = this;
            console.log(this._buttonGroupData);
            console.log('here run set button');
            var data = new eui.ArrayCollection(this._buttonGroupData);
            var tLayout = new eui.TileLayout();
            tLayout.horizontalGap = 10;
            tLayout.verticalGap = 10;
            tLayout.columnAlign = eui.ColumnAlign.JUSTIFY_USING_GAP;
            tLayout.rowAlign = eui.RowAlign.JUSTIFY_USING_HEIGHT;
            tLayout.paddingTop = 30;
            tLayout.paddingRight = 0;
            tLayout.paddingLeft = 0;
            tLayout.paddingBottom = 10;
            tLayout.requestedColumnCount = 4; /// 设置两列显示
            // this.buttonGroup.layout = tLayout;
            var list = this.buttonGroupData;
            list.map(function (item) {
                var btn = new DDI.BaseButton(new BaseController(), new eui.Group());
                btn.color = 0xffffff;
                btn.borderColor = 0x645DE2;
                btn.borderWidth = 1;
                btn.label.size = 18;
                btn.radius = 20;
                btn.contentGroup.width = undefined;
                btn.label.left = btn.label.right = 10;
                btn.label.verticalCenter = 0;
                btn.label.textColor = 0x645DE2;
                btn.text = item;
                btn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.btnTap, _this);
                _this.buttonGroup.addChild(btn);
                // this.btnList.push(btn)
            });
            console.log(this.buttonGroup.$children);
            this.layoutButton(this.buttonGroup.$children);
        };
        BaseAbilityBook.prototype.btnTap = function (event) {
            this.changeOtherColor(this.buttonGroup.$children);
            this.toggleColor(event.currentTarget);
        };
        BaseAbilityBook.prototype.changeOtherColor = function (btnList) {
            btnList.map(function (btn) {
                btn.color = 0xffffff;
                btn.label.textColor = 0x645DE2;
            });
        };
        BaseAbilityBook.prototype.toggleColor = function (btn) {
            var tempColor = btn.color;
            btn.color = btn.label.textColor;
            btn.label.textColor = tempColor;
            btn.borderColor = 0x645DE2;
            btn.borderWidth = 1;
        };
        BaseAbilityBook.prototype.layoutButton = function (btnList) {
            var _this = this;
            var gap = 10;
            var column = 0;
            var useWidth = 0;
            var nowY = 0;
            var restWidth = this.btnGroupWidth;
            btnList.map(function (btn, index) {
                btn.x = useWidth;
                btn.y = nowY;
                useWidth = useWidth + btn.width + gap;
                if (useWidth >= _this.btnGroupWidth) {
                    column++;
                    nowY = (btn.height + gap) * column;
                    useWidth = 0;
                    btn.x = useWidth;
                    btn.y = nowY;
                    useWidth += btn.width + gap;
                }
            });
        };
        return BaseAbilityBook;
    }(BaseEuiView));
    DDI.BaseAbilityBook = BaseAbilityBook;
    __reflect(BaseAbilityBook.prototype, "DDI.BaseAbilityBook");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 15-1-26.
 */
var Keyboard = (function () {
    function Keyboard() {
    }
    Keyboard.LEFT = 37;
    Keyboard.RIGHT = 39;
    Keyboard.UP = 38;
    Keyboard.DOWN = 40;
    Keyboard.W = 87;
    Keyboard.A = 65;
    Keyboard.S = 83;
    Keyboard.D = 68;
    Keyboard.J = 74;
    Keyboard.K = 75;
    Keyboard.L = 76;
    Keyboard.U = 85;
    Keyboard.I = 73;
    Keyboard.O = 79;
    Keyboard.P = 80;
    Keyboard.SPACE = 32;
    return Keyboard;
}());
__reflect(Keyboard.prototype, "Keyboard");
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
var BitmapNumber = (function (_super) {
    __extends(BitmapNumber, _super);
    function BitmapNumber() {
        var _this = _super.call(this) || this;
        _this._imgPool = [];
        _this._containerPool = [];
        return _this;
    }
    /*
     * 根据需要的数字和类型返回一个DisplayObjectContainer
     * num数字值，支持小数点
     * type素材类型
     * */
    BitmapNumber.prototype.createNumPic = function (num, type) {
        var container = this.getContainer();
        var numStr = num.toString();
        var index = 0;
        var tempBm;
        for (index; index < numStr.length; index++) {
            tempBm = this.getSingleNumPic(numStr.charAt(index), type);
            container.addChild(tempBm);
        }
        this.repositionNumPic(container);
        return container;
    };
    //回收带数字的DisplayObjectContainer
    BitmapNumber.prototype.desstroyNumPic = function (picContainer) {
        this.clearContainer(picContainer);
        if (picContainer.parent)
            picContainer.parent.removeChild(picContainer);
        this._containerPool.push(picContainer);
    };
    /*
     * 改变带数字的DisplayObjectContainer数字值
     * 提供这个方法是为了提高效率，直接更换之前创建对象的texture，避免多余的删除和创建
     * */
    BitmapNumber.prototype.changeNum = function (picContainer, num, type) {
        var numStr = num.toString();
        var tempBm;
        //如果当前数字个数多于目标个数则把多余的回收
        if (picContainer.numChildren > numStr.length) {
            while (picContainer.numChildren > numStr.length) {
                this.recycleBM(picContainer.getChildAt(picContainer.numChildren - 1));
            }
        }
        var index = 0;
        var tempStr;
        for (index; index < numStr.length; index++) {
            //如果当前的Bitmap数量不够则获取新的Bitmap补齐
            if (index >= picContainer.numChildren)
                picContainer.addChild(this.getBitmap());
            tempStr = numStr.charAt(index);
            tempStr = tempStr == "." ? "dot" : tempStr;
            picContainer.getChildAt(index).texture = this.getTexture(tempStr, type);
        }
        this.repositionNumPic(picContainer);
    };
    //每个数字宽度不一样，所以重新排列
    BitmapNumber.prototype.repositionNumPic = function (container) {
        var index = 0;
        var lastX = 0;
        var temp;
        for (index; index < container.numChildren; index++) {
            temp = container.getChildAt(index);
            temp.x = lastX;
            lastX = temp.x + temp.width;
        }
    };
    //清理容器
    BitmapNumber.prototype.clearContainer = function (picContainer) {
        while (picContainer.numChildren) {
            this.recycleBM(picContainer.removeChildAt(0));
        }
    };
    //回收Bitmap
    BitmapNumber.prototype.recycleBM = function (bm) {
        if (bm && bm.parent) {
            bm.parent.removeChild(bm);
            bm.texture = null;
            this._imgPool.push(bm);
        }
    };
    BitmapNumber.prototype.getContainer = function () {
        if (this._containerPool.length)
            return this._containerPool.shift();
        return new egret.DisplayObjectContainer();
    };
    //获得单个数字Bitmap
    BitmapNumber.prototype.getSingleNumPic = function (num, type) {
        if (num == ".")
            num = "dot";
        var bm = this.getBitmap();
        bm.texture = this.getTexture(num, type);
        return bm;
    };
    BitmapNumber.prototype.getTexture = function (num, type) {
        return RES.getRes(type + num);
    };
    BitmapNumber.prototype.getBitmap = function () {
        if (this._imgPool.length)
            return this._imgPool.shift();
        return new egret.Bitmap();
    };
    return BitmapNumber;
}(SingtonClass));
__reflect(BitmapNumber.prototype, "BitmapNumber");
/**
 * Created by Saco on 2014/12/1.
 */
var HotspotBitmap = (function (_super) {
    __extends(HotspotBitmap, _super);
    function HotspotBitmap() {
        var _this = _super.call(this) || this;
        _this._hotspot = [];
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouch, _this);
        return _this;
    }
    HotspotBitmap.prototype.addHotspotArea = function (rect, callBack, thisObj, para) {
        this._hotspot.push({ "rect": rect, "callBack": callBack, "thisObj": thisObj, "para": para });
    };
    HotspotBitmap.prototype.onTouch = function (e) {
        var x = e.localX;
        var y = e.localY;
        var tempObj;
        for (var i = 0; i < this._hotspot.length; i++) {
            tempObj = this._hotspot[i];
            if (tempObj.rect.contains(x, y)) {
                if (tempObj.para)
                    tempObj.callBack.call(tempObj.thisObj, tempObj.para);
                else
                    tempObj.callBack.call(tempObj.thisObj);
            }
        }
    };
    return HotspotBitmap;
}(egret.Bitmap));
__reflect(HotspotBitmap.prototype, "HotspotBitmap");
/**
 * Created by yangsong on 15-1-14.
 * Armature封装类
 */
var DragonBonesArmature = (function (_super) {
    __extends(DragonBonesArmature, _super);
    /**
     * 构造函数
     * @param armature dragonBones.Armature
     * @param clock dragonBones.WorldClock
     */
    function DragonBonesArmature(armature, clock) {
        var _this = _super.call(this) || this;
        _this._armature = armature;
        _this._clock = clock;
        _this.addChild(_this._armature.display);
        _this._completeCalls = [];
        _this._frameCalls = [];
        _this._isPlay = false;
        _this._playName = "";
        return _this;
    }
    /**
     * 添加事件监听
     */
    DragonBonesArmature.prototype.addListeners = function () {
        this._armature.eventDispatcher.addEvent(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
        this._armature.eventDispatcher.addEvent(dragonBones.EventObject.FRAME_EVENT, this.frameHandler, this);
    };
    /**
     * 移除事件监听
     */
    DragonBonesArmature.prototype.removeListeners = function () {
        this._armature.eventDispatcher.removeEvent(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
        this._armature.eventDispatcher.removeEvent(dragonBones.EventObject.FRAME_EVENT, this.frameHandler, this);
    };
    /**
     * 事件完成执行函数
     * @param e
     */
    DragonBonesArmature.prototype.completeHandler = function (e) {
        var animationName = e.eventObject.animationState.name;
        for (var i = 0, len = this._completeCalls.length; i < len; i++) {
            var arr = this._completeCalls[i];
            arr[0].apply(arr[1], [e, animationName]);
        }
        if (animationName == this._playName) {
            this._playName = "";
        }
    };
    /**
     * 帧事件处理函数
     * @param e
     */
    DragonBonesArmature.prototype.frameHandler = function (e) {
        for (var i = 0, len = this._frameCalls.length; i < len; i++) {
            var arr = this._frameCalls[i];
            arr[0].apply(arr[1], [e]);
        }
    };
    /**
     * 播放名为name的动作
     * @param name 名称
     * @param playNum 指定播放次数，默认走动画配置
     */
    DragonBonesArmature.prototype.play = function (name, playNum) {
        if (playNum === void 0) { playNum = undefined; }
        if (this._playName == name) {
            return this._currAnimationState;
        }
        this._playName = name;
        this.start();
        if (playNum == undefined) {
            this._currAnimationState = this.getAnimation().play(name);
        }
        else {
            this._currAnimationState = this.getAnimation().play(name, playNum);
        }
        return this._currAnimationState;
    };
    /**
     * 从指定时间播放指定动画
     */
    DragonBonesArmature.prototype.gotoAndPlayByTime = function (name, time, playNum) {
        if (playNum === void 0) { playNum = undefined; }
        this._currAnimationState = this.getAnimation().gotoAndPlayByTime(name, time, playNum);
        return this._currAnimationState;
    };
    Object.defineProperty(DragonBonesArmature.prototype, "currentTime", {
        /**
         * 获取当前动作的播放时间
         */
        get: function () {
            if (!this._currAnimationState) {
                return 0;
            }
            return this._currAnimationState.currentTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 恢复播放
     */
    DragonBonesArmature.prototype.start = function () {
        if (!this._isPlay) {
            this._clock.add(this._armature);
            this._isPlay = true;
            this.addListeners();
        }
    };
    /**
     * 停止播放
     */
    DragonBonesArmature.prototype.stop = function () {
        if (this._isPlay) {
            this._clock.remove(this._armature);
            this._isPlay = false;
            this._playName = "";
            this.removeListeners();
        }
    };
    /**
     * 销毁
     */
    DragonBonesArmature.prototype.destroy = function () {
        this.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.removeChildren();
        this._armature.dispose();
        this._armature = null;
        this._clock = null;
        this._completeCalls.length = 0;
        this._completeCalls = null;
        this._frameCalls.length = 0;
        this._frameCalls = null;
        this._currAnimationState = null;
        this._cacheAllSlotDisplayData = null;
    };
    /**
     * 添加动画完成函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.addCompleteCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._completeCalls.length; i++) {
            var arr = this._completeCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                return;
            }
        }
        this._completeCalls.unshift([callFunc, target]);
    };
    /**
     * 移除一个动画完成函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.removeCompleteCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._completeCalls.length; i++) {
            var arr = this._completeCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                this._completeCalls.splice(i, 1);
                i--;
            }
        }
    };
    /**
     * 添加帧事件处理函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.addFrameCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._frameCalls.length; i++) {
            var arr = this._frameCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                return;
            }
        }
        this._frameCalls.push([callFunc, target]);
    };
    /**
     * 移除帧事件处理函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.removeFrameCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._frameCalls.length; i++) {
            var arr = this._frameCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                this._frameCalls.splice(i, 1);
                i--;
            }
        }
    };
    /**
     * 移除舞台处理
     * @private
     */
    DragonBonesArmature.prototype.$onRemoveFromStage = function () {
        _super.prototype.$onRemoveFromStage.call(this);
        this.stop();
    };
    /**
     * 获取dragonBones.Armature
     * @returns {dragonBones.Armature}
     */
    DragonBonesArmature.prototype.getArmature = function () {
        return this._armature;
    };
    /**
     * 获取当前dragonBones.AnimationState
     * @returns {dragonBones.AnimationState}
     */
    DragonBonesArmature.prototype.getCurrAnimationState = function () {
        return this._currAnimationState;
    };
    /**
     * 获取所属dragonBones.WorldClock
     * @returns {dragonBones.WorldClock}
     */
    DragonBonesArmature.prototype.getClock = function () {
        return this._clock;
    };
    /**
     * 获取dragonBones.Animation
     * @returns {Animation}
     */
    DragonBonesArmature.prototype.getAnimation = function () {
        return this._armature.animation;
    };
    /**
     * 获取一个dragonBones.Bone
     * @param boneName
     * @returns {dragonBones.Bone}
     */
    DragonBonesArmature.prototype.getBone = function (boneName) {
        return this._armature.getBone(boneName);
    };
    /**
     * 获取一个动作的运行时长
     * @param animationName
     * @returns {number}
     */
    DragonBonesArmature.prototype.getAnimationDuration = function (animationName) {
        return this._armature.animation.animations[animationName].duration;
    };
    /**
     * 当前正在播放的动作名字
     * @returns {string}
     */
    DragonBonesArmature.prototype.getPlayName = function () {
        return this._playName;
    };
    /**
     * 获取骨骼的display
     * @param bone
     * @returns {function(): any}
     */
    DragonBonesArmature.prototype.getBoneDisplay = function (bone) {
        return bone.slot.display;
    };
    /**
     * 替换骨骼插件
     * @param boneName
     * @param displayObject
     */
    DragonBonesArmature.prototype.changeBone = function (boneName, displayObject) {
        var bone = this.getBone(boneName);
        if (bone) {
            bone.slot.setDisplay(displayObject);
        }
    };
    /**
     * 替换插槽
     */
    DragonBonesArmature.prototype.changeSlot = function (slotName, displayObject) {
        var slot = this._armature.getSlot(slotName);
        if (!slot) {
            // Log.warn("Slot不存在", slotName);
            return;
        }
        if (displayObject) {
            if (this._cacheAllSlotDisplayData) {
                var cacheDisplayData = this._cacheAllSlotDisplayData[slotName];
                if (cacheDisplayData) {
                    displayObject.anchorOffsetX = cacheDisplayData.anchorOffsetX / cacheDisplayData.width * displayObject.width;
                    displayObject.anchorOffsetY = cacheDisplayData.anchorOffsetY / cacheDisplayData.height * displayObject.height;
                    displayObject.x = cacheDisplayData.x;
                    displayObject.y = cacheDisplayData.y;
                }
            }
            else {
                var oldDisplayObject = slot.getDisplay();
                if (oldDisplayObject) {
                    displayObject.anchorOffsetX = oldDisplayObject.anchorOffsetX / oldDisplayObject.width * displayObject.width;
                    displayObject.anchorOffsetY = oldDisplayObject.anchorOffsetY / oldDisplayObject.height * displayObject.height;
                    displayObject.x = oldDisplayObject.x;
                    displayObject.y = oldDisplayObject.y;
                }
            }
        }
        slot.setDisplay(displayObject);
    };
    /**
     * 获取所有插槽
     */
    DragonBonesArmature.prototype.getSlots = function () {
        return this._armature["_slots"];
    };
    /**
     * 获取所有插槽中对象的位置信息
     */
    DragonBonesArmature.prototype.getAllSlotDisplayData = function () {
        var slots = this.getSlots();
        var result = {};
        for (var i = 0, len = slots.length; i < len; i++) {
            var slot = slots[i];
            var displayObject = slot.getDisplay();
            result[slot.name] = {
                x: displayObject.x,
                y: displayObject.y,
                width: displayObject.width,
                height: displayObject.height,
                anchorOffsetX: displayObject.anchorOffsetX,
                anchorOffsetY: displayObject.anchorOffsetY,
            };
        }
        return result;
    };
    /**
     * 缓存所有插槽中对象的位置信息
     */
    DragonBonesArmature.prototype.cacheAllSlotDisplayData = function () {
        this._cacheAllSlotDisplayData = this.getAllSlotDisplayData();
    };
    return DragonBonesArmature;
}(egret.DisplayObjectContainer));
__reflect(DragonBonesArmature.prototype, "DragonBonesArmature");
/**
 * Created by yangsong on 15-1-16.
 * DragonBonesArmature容器类，用于一个动画使用多个DragonBonesArmature的情况
 */
var DragonBonesArmatureContainer = (function (_super) {
    __extends(DragonBonesArmatureContainer, _super);
    /**
     * 构造函数
     */
    function DragonBonesArmatureContainer() {
        var _this = _super.call(this) || this;
        _this.armatures = new Array();
        _this.actions = {};
        _this.cacheBones = {};
        return _this;
    }
    /**
     * 注册缩需要的DragonBonesArmature
     * @param $armature DragonBonesArmature
     * @param $actions 当前DragonBonesArmature所有的动作
     */
    DragonBonesArmatureContainer.prototype.register = function ($armature, $actions) {
        this.armatures.push($armature);
        for (var i = 0, len = $actions.length; i < len; i++) {
            this.actions[$actions[i]] = this.armatures.length - 1;
        }
    };
    Object.defineProperty(DragonBonesArmatureContainer.prototype, "armature", {
        /**
         * 当前正在使用的armature
         * @returns {DragonBonesArmature}
         */
        get: function () {
            return this.armatures[this.currArmatureIndex];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取Bone
     * @param boneName
     * @returns {any}
     */
    DragonBonesArmatureContainer.prototype.getCacheBone = function (boneName) {
        if (!this.cacheBones[boneName]) {
            this.cacheBones[boneName] = [];
            for (var i = 0, len = this.armatures.length; i < len; i++) {
                var arm = this.armatures[i];
                this.cacheBones[boneName].push(arm.getBone(boneName));
            }
        }
        return this.cacheBones[boneName][this.currArmatureIndex];
    };
    /**
     * 播放动作
     * @param action
     * @param playNum
     */
    DragonBonesArmatureContainer.prototype.play = function (action, playNum) {
        if (playNum === void 0) { playNum = undefined; }
        if (this.actions[action] == null) {
            Log.debug("DragonBonesArmatureContainer不存在动作：", action);
            return;
        }
        var armatureIndex = this.actions[action];
        if (armatureIndex != this.currArmatureIndex) {
            this.remove();
        }
        var newArm = this.armatures[armatureIndex];
        if (newArm) {
            this.addChild(newArm);
            this.currArmatureIndex = armatureIndex;
            return newArm.play(action, playNum);
        }
        return null;
    };
    /**
     * 停止当前DragonBonesArmature
     */
    DragonBonesArmatureContainer.prototype.stop = function () {
        var currArm = this.armatures[this.currArmatureIndex];
        if (currArm) {
            currArm.stop();
        }
    };
    /**
     * 播放
     */
    DragonBonesArmatureContainer.prototype.start = function () {
        var currArm = this.armatures[this.currArmatureIndex];
        if (currArm) {
            currArm.start();
        }
    };
    /**
     * 移除上一个DragonBonesArmature
     */
    DragonBonesArmatureContainer.prototype.remove = function () {
        var oldArm = this.armatures[this.currArmatureIndex];
        if (oldArm) {
            oldArm.stop();
            App.DisplayUtils.removeFromParent(oldArm);
            this.currArmatureIndex = null;
        }
    };
    /**
     * 添加播放完成处理函数
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.addCompleteCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.addCompleteCallFunc(callFunc, target);
        }
    };
    /**
     * 移除播放完成处理函数
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.removeCompleteCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.removeCompleteCallFunc(callFunc, target);
        }
    };
    /**
     * 添加帧事件处理函数
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.addFrameCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.addFrameCallFunc(callFunc, target);
        }
    };
    /**
     * 移除帧事件处理函数
     * @param key
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.removeFrameCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.removeFrameCallFunc(callFunc, target);
        }
    };
    /**
     * 清空
     */
    DragonBonesArmatureContainer.prototype.clear = function () {
        while (this.armatures.length) {
            var arm = this.armatures.pop();
            App.DisplayUtils.removeFromParent(arm);
            arm.destroy();
        }
        this.cacheBones = {};
        this.actions = {};
    };
    /**
     * 销毁
     */
    DragonBonesArmatureContainer.prototype.destroy = function () {
        this.clear();
        this.armatures = null;
        this.cacheBones = null;
        this.actions = null;
    };
    return DragonBonesArmatureContainer;
}(egret.DisplayObjectContainer));
__reflect(DragonBonesArmatureContainer.prototype, "DragonBonesArmatureContainer");
/**
 * Created by egret on 15-1-14.
 * DragonBones工厂类
 */
var DragonBonesFactory = (function (_super) {
    __extends(DragonBonesFactory, _super);
    /**
     * 构造函数
     */
    function DragonBonesFactory() {
        var _this = _super.call(this) || this;
        _this.averageUtils = new AverageUtils();
        _this.factory = new dragonBones.EgretFactory();
        _this.clocks = new Array();
        _this.clocksLen = 0;
        _this.files = [];
        //默认开启
        _this.start();
        return _this;
    }
    /**
     * 初始化一个动画文件
     * @param skeletonData 动画描述文件
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    DragonBonesFactory.prototype.initArmatureFile = function (skeletonData, texture, textureData) {
        if (this.files.indexOf(skeletonData.name) != -1) {
            return;
        }
        this.addSkeletonData(skeletonData);
        this.addTextureAtlas(texture, textureData);
        this.files.push(skeletonData.name);
    };
    /**
     * 移除动画文件
     * @param name
     */
    DragonBonesFactory.prototype.removeArmatureFile = function (name) {
        var index = this.files.indexOf(name);
        if (index != -1) {
            this.removeSkeletonData(name);
            this.removeTextureAtlas(name);
            this.files.splice(index, 1);
        }
    };
    /**
     * 清空所有动画
     */
    DragonBonesFactory.prototype.clear = function () {
        while (this.files.length) {
            this.removeArmatureFile(this.files[0]);
        }
    };
    /**
     * 添加动画描述文件
     * @param skeletonData
     */
    DragonBonesFactory.prototype.addSkeletonData = function (skeletonData) {
        this.factory.parseDragonBonesData(skeletonData);
    };
    /**
     * 添加动画所需资源
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    DragonBonesFactory.prototype.addTextureAtlas = function (texture, textureData) {
        this.factory.parseTextureAtlasData(textureData, texture);
    };
    /**
     * 移除动画描述文件
     * @param skeletonData
     */
    DragonBonesFactory.prototype.removeSkeletonData = function (name) {
        this.factory.removeDragonBonesData(name);
    };
    /**
     * 移除动画所需资源
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    DragonBonesFactory.prototype.removeTextureAtlas = function (name) {
        this.factory.removeTextureAtlasData(name);
    };
    /**
     * 创建一个动画
     * @param name 动作名称
     * @param fromDragonBonesDataName 动画文件名称
     * @returns {Armature}
     */
    DragonBonesFactory.prototype.makeArmature = function (name, fromDragonBonesDataName, playSpeed) {
        if (playSpeed === void 0) { playSpeed = 1; }
        var armature = this.factory.buildArmature(name, fromDragonBonesDataName);
        if (armature == null) {
            Log.warn("不存在Armature： " + name);
            return null;
        }
        var clock = this.createWorldClock(playSpeed);
        var result = new DragonBonesArmature(armature, clock);
        return result;
    };
    /**
     * 创建一个动画（急速模式）
     * @param name 动作名称
     * @param fromDragonBonesDataName 动画文件名称
     * @returns {Armature}
     */
    DragonBonesFactory.prototype.makeFastArmature = function (name, fromDragonBonesDataName, playSpeed) {
        if (playSpeed === void 0) { playSpeed = 1; }
        var result = this.makeArmature(name, fromDragonBonesDataName, playSpeed);
        result.getArmature().cacheFrameRate = 24;
        return result;
    };
    /**
     * 创建WorldClock
     * @param playSpeed
     * @returns {dragonBones.WorldClock}
     */
    DragonBonesFactory.prototype.createWorldClock = function (playSpeed) {
        for (var i = 0; i < this.clocksLen; i++) {
            if (this.clocks[i].timeScale == playSpeed) {
                return this.clocks[i];
            }
        }
        var newClock = new dragonBones.WorldClock();
        newClock.timeScale = playSpeed;
        this.clocks.push(newClock);
        this.clocksLen = this.clocks.length;
        return newClock;
    };
    /**
     * dragonBones体系的每帧刷新
     * @param advancedTime
     */
    DragonBonesFactory.prototype.onEnterFrame = function (advancedTime) {
        this.averageUtils.push(advancedTime);
        var time = this.averageUtils.getValue() * 0.001;
        for (var i = 0; i < this.clocksLen; i++) {
            var clock = this.clocks[i];
            clock.advanceTime(time);
        }
    };
    /**
     * 停止
     */
    DragonBonesFactory.prototype.stop = function () {
        if (this.isPlay) {
            App.TimerManager.remove(this.onEnterFrame, this);
            this.isPlay = false;
        }
    };
    /**
     * 开启
     */
    DragonBonesFactory.prototype.start = function () {
        if (!this.isPlay) {
            this.isPlay = true;
            App.TimerManager.doFrame(1, 0, this.onEnterFrame, this);
        }
    };
    return DragonBonesFactory;
}(SingtonClass));
__reflect(DragonBonesFactory.prototype, "DragonBonesFactory");
/**
 * Created by yangsong on 14-12-2.
 * 引导背景层，实现的是一个类似不规则遮罩的功能
 */
var GuideMaskBackgroud = (function (_super) {
    __extends(GuideMaskBackgroud, _super);
    /**
     * 构造函数
     */
    function GuideMaskBackgroud() {
        var _this = _super.call(this) || this;
        _this._stageWidth = 0;
        _this._stageHeight = 0;
        _this._bgs = new Array();
        _this.touchEnabled = true;
        return _this;
    }
    /**
     * 初始化游戏宽高
     * @param stageWidth 宽
     * @param stageHeight 高
     */
    GuideMaskBackgroud.prototype.init = function (stageWidth, stageHeight) {
        this._stageWidth = stageWidth;
        this._stageHeight = stageHeight;
    };
    /**
     * Draw
     * @param deductRec 抠出矩形区域
     */
    GuideMaskBackgroud.prototype.draw = function (deductRec) {
        this.cacheAsBitmap = false;
        this._deductRec = deductRec;
        this.removeAllChild();
        var minX = Math.max(deductRec.x, 0);
        var minY = Math.max(deductRec.y, 0);
        var maxX = Math.min(deductRec.x + deductRec.width, this._stageWidth);
        var maxY = Math.min(deductRec.y + deductRec.height, this._stageHeight);
        this.addBg(0, 0, this._stageWidth, minY);
        this.addBg(0, minY, minX, deductRec.height);
        this.addBg(maxX, minY, this._stageWidth - maxX, deductRec.height);
        this.addBg(0, maxY, this._stageWidth, this._stageHeight - maxY);
        this.width = this._stageWidth;
        this.height = this._stageHeight;
        this.cacheAsBitmap = true;
    };
    /**
     * 销毁
     */
    GuideMaskBackgroud.prototype.destroy = function () {
        this.removeChildren();
        this._bgs = [];
    };
    /**
     * 移除所有对象
     */
    GuideMaskBackgroud.prototype.removeAllChild = function () {
        while (this.numChildren) {
            var bg = this.removeChildAt(0);
            this._bgs.push(bg);
        }
    };
    /**
     * 添加一个bg
     * @param $x 初始X
     * @param $y 初始Y
     * @param $w 宽
     * @param $h 高
     */
    GuideMaskBackgroud.prototype.addBg = function ($x, $y, $w, $h) {
        var bg;
        if (this._bgs.length) {
            bg = this._bgs.pop();
            bg.graphics.clear();
        }
        else {
            bg = new egret.Shape();
        }
        bg.graphics.beginFill(0x000000, 0.5);
        bg.graphics.drawRect($x, $y, $w, $h);
        bg.graphics.endFill();
        this.addChild(bg);
    };
    /**
     * 重写hitTest
     * 检测指定坐标是否在显示对象内
     * @method egret.DisplayObject#hitTest
     * @param x {number} 检测坐标的x轴
     * @param y {number} 检测坐标的y轴
     * @param ignoreTouchEnabled {boolean} 是否忽略TouchEnabled
     * @returns {*}
     */
    GuideMaskBackgroud.prototype.hitTest = function (x, y, ignoreTouchEnabled) {
        if (this._deductRec && this._deductRec.contains(x, y)) {
            return null;
        }
        else {
            return this;
        }
    };
    return GuideMaskBackgroud;
}(egret.Sprite));
__reflect(GuideMaskBackgroud.prototype, "GuideMaskBackgroud");
/**
 * Created by yangsong on 14-12-2.
 * 引导工具类，根据每个项目重写实现可重写实现
 */
var GuideUtils = (function (_super) {
    __extends(GuideUtils, _super);
    function GuideUtils() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //handDir  1:下面 2:上面
        //txtdir  箭头指向: 1:背景左箭头下 2:背景左箭头上 3:背景右箭头下 4:背景右箭头上
        _this.configData = {
            "1": {
                "1": {
                    "txt": "点击这里，去设置宠物出战",
                    "txtdir": 1,
                    "handDir": 1
                },
                "2": {
                    "txt": "点击选择一个宠物出战",
                    "txtdir": 3,
                    "handDir": 1
                },
                "3": {
                    "txt": "点击宠物出战",
                    "txtdir": 3,
                    "handDir": 1
                }
            },
            "2": {
                "1": {
                    "txt": "更多宠物，可以抽取获得哦！",
                    "txtdir": 1,
                    "handDir": 2
                },
                "2": {
                    "txt": "点击抽取宠物",
                    "txtdir": 1,
                    "handDir": 1
                }
            },
            "3": {
                "1": {
                    "txt": "点击选择另一个宠物",
                    "txtdir": 1,
                    "handDir": 1
                },
                "2": {
                    "txt": "点击宠物出战",
                    "txtdir": 3,
                    "handDir": 1
                }
            },
            "4": {
                "1": {
                    "txt": "点击查看宠物属性",
                    "txtdir": 4,
                    "handDir": 1
                },
                "2": {
                    "txt": "点击宠物升级",
                    "txtdir": 1,
                    "handDir": 2
                },
                "3": {
                    "txt": "点击选择升级材料",
                    "txtdir": 3,
                    "handDir": 1
                },
                "4": {
                    "txt": "选择一个宠物或卡牌作为材料",
                    "txtdir": 3,
                    "handDir": 1
                },
                "5": {
                    "txt": "选择材料后点击确定回到升级界面",
                    "txtdir": 1,
                    "handDir": 2
                },
                "6": {
                    "txt": "点击完成升级",
                    "txtdir": 1,
                    "handDir": 2
                }
            },
            "5": {
                "1": {
                    "txt": "现在立刻享受\n炫酷的飞行吧",
                    "txtdir": 1,
                    "handDir": 2
                },
                "2": {
                    "txt": "每天前3次购买免费",
                    "txtdir": 1,
                    "handDir": 1
                },
                "3": {
                    "txt": "开始战斗吧",
                    "txtdir": 1,
                    "handDir": 2
                }
            },
            "6": {
                "1": {
                    "txt": "点击这里查看战机",
                    "txtdir": 1,
                    "handDir": 1
                },
                "2": {
                    "txt": "点击升级战机，\n可以提高战力",
                    "txtdir": 1,
                    "handDir": 2
                }
            }
        };
        /**
         * 大步骤
         * @type {number}
         */
        _this.currPart = 0;
        /**
         * 小步骤
         * @type {number}
         */
        _this.currStep = 0;
        return _this;
    }
    /**
     * 下一步
     */
    GuideUtils.prototype.next = function () {
        if (this.view == null || this.view.parent == null) {
            return;
        }
        this.currStep++;
        if (!this.configData[this.currPart][this.currStep]) {
            //下一部分
            this.currPart++;
            this.currStep = 1;
            //通知服务端
            //TODO
        }
        if (!this.configData[this.currPart]) {
            //所有引导结束
            this.currPart = 0;
            this.currStep = 0;
        }
        this.hide();
    };
    /**
     * 显示
     */
    GuideUtils.prototype.show = function (obj, targetPart, targetStep) {
        if (this.currPart == targetPart && this.currStep == targetStep) {
            if (this.view == null) {
                this.view = new GuideView();
            }
            this.view.setData(obj, this.configData[this.currPart][this.currStep]);
            egret.MainContext.instance.stage.addChild(this.view);
        }
    };
    /**
     * 隐藏
     */
    GuideUtils.prototype.hide = function () {
        App.DisplayUtils.removeFromParent(this.view);
    };
    /**
     * 引导是否显示
     */
    GuideUtils.prototype.isShow = function () {
        return this.view != null && this.view.parent != null;
    };
    return GuideUtils;
}(SingtonClass));
__reflect(GuideUtils.prototype, "GuideUtils");
/**
 * Created by yangsong on 14-12-2.
 * GuideView
 */
var GuideView = (function (_super) {
    __extends(GuideView, _super);
    /**
     * 构造函数
     */
    function GuideView() {
        var _this = _super.call(this) || this;
        _this._objRec = new egret.Rectangle();
        _this._objGlobalPoint = new egret.Point();
        _this._bg = new GuideMaskBackgroud();
        _this.addChild(_this._bg);
        _this._maskPic = StarlingSwfUtils.createS9Image("s9_guide_mask");
        _this.addChild(_this._maskPic);
        _this._textBgPic = StarlingSwfUtils.createS9Image("s9_guide_txt");
        App.AnchorUtils.setAnchorY(_this._textBgPic, 1);
        _this.addChild(_this._textBgPic);
        _this._handPic = StarlingSwfUtils.createImage("img_hand");
        App.AnchorUtils.setAnchorX(_this._handPic, 0.5);
        _this.addChild(_this._handPic);
        _this._txt = new egret.TextField();
        _this._txt.size = 26;
        _this._txt.textColor = 0x575757;
        _this._txt.lineSpacing = 4;
        App.AnchorUtils.setAnchorY(_this._txt, 0.5);
        _this.addChild(_this._txt);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, _this.onResize, _this);
        return _this;
    }
    /**
     * 屏幕大小改变时重置
     */
    GuideView.prototype.onResize = function () {
        if (this.stage) {
            egret.setTimeout(this.refurbish, this, 500);
        }
    };
    /**
     * 刷新
     */
    GuideView.prototype.refurbish = function () {
        this.setData(this._obj, this._data);
    };
    /**
     * 设置显示数据
     * @param obj
     * @param data
     */
    GuideView.prototype.setData = function (obj, data) {
        if (obj == null) {
            return;
        }
        this._obj = obj;
        this._data = data;
        this._obj.localToGlobal(0, 0, this._objGlobalPoint);
        this._obj.getBounds(this._objRec);
        this._objGlobalPoint.x = Math.ceil(this._objGlobalPoint.x);
        this._objGlobalPoint.y = Math.ceil(this._objGlobalPoint.y);
        var tmpX = 15;
        var tmpy = 15;
        this._objRec.x = this._objGlobalPoint.x - tmpX;
        this._objRec.y = this._objGlobalPoint.y - tmpy;
        this._objRec.width += tmpX * 2;
        this._objRec.height += tmpy * 2;
        //不透明区域
        this._bg.init(egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight);
        this._bg.draw(this._objRec);
        //透明区域
        this._maskPic.cacheAsBitmap = false;
        this._maskPic.x = this._objRec.x;
        this._maskPic.y = this._objRec.y;
        this._maskPic.width = this._objRec.width;
        this._maskPic.height = this._objRec.height;
        this._maskPic.cacheAsBitmap = true;
        //handDir  1:下面 2:上面
        if (this._data.handDir == 1) {
            this._handPic.scaleY = 1;
            this._handPic.y = this._objRec.y + this._objRec.height - 20;
        }
        else if (this._data.handDir == 2) {
            this._handPic.scaleY = -1;
            this._handPic.y = this._objRec.y + 20;
        }
        this._handPic.x = this._objRec.x + this._objRec.width * 0.5;
        //文字显示
        this._txt.width = NaN;
        this._txt.height = NaN;
        this._txt.text = this._data.txt;
        if (this._txt.width > 320) {
            this._txt.text = "";
            this._txt.width = 320;
            this._txt.text = this._data.txt;
        }
        var temp = 15;
        this._textBgPic.cacheAsBitmap = false;
        this._textBgPic.width = this._txt.width + temp * 2 + 35;
        this._textBgPic.height = 114;
        //txtdir  箭头指向: 1:背景左箭头下 2:背景左箭头上 3:背景右箭头下 4:背景右箭头上
        if (this._data.txtdir == 1) {
            this._textBgPic.scaleX = -1;
            this._textBgPic.scaleY = 1;
            this._textBgPic.x = this._objRec.x;
        }
        else if (this._data.txtdir == 2) {
            this._textBgPic.scaleX = -1;
            this._textBgPic.scaleY = -1;
            this._textBgPic.x = this._objRec.x;
        }
        else if (this._data.txtdir == 3) {
            this._textBgPic.scaleX = 1;
            this._textBgPic.scaleY = 1;
            this._textBgPic.x = this._objRec.x + this._objRec.width;
        }
        else if (this._data.txtdir == 4) {
            this._textBgPic.scaleX = 1;
            this._textBgPic.scaleY = -1;
            this._textBgPic.x = this._objRec.x + this._objRec.width;
        }
        this.checkTextBgX();
        this._textBgPic.y = this._objRec.y + this._objRec.height * 0.5;
        this._txt.x = this._textBgPic.x - (this._textBgPic.scaleX == -1 ? this._textBgPic.width : -35) + temp;
        this._txt.y = this._textBgPic.y - this._textBgPic.scaleY * this._textBgPic.height * 0.5;
        this._textBgPic.cacheAsBitmap = true;
    };
    /**
     * 检测文本提示框是否出了边界
     */
    GuideView.prototype.checkTextBgX = function () {
        if (this._textBgPic.scaleX == 1) {
            var stageW = egret.MainContext.instance.stage.stageWidth;
            if (this._textBgPic.x + this._textBgPic.width > stageW) {
                this._textBgPic.x = stageW - this._textBgPic.width;
            }
        }
        else if (this._textBgPic.scaleX == -1) {
            if (this._textBgPic.x - this._textBgPic.width < 0) {
                this._textBgPic.x = this._textBgPic.width;
            }
        }
    };
    return GuideView;
}(egret.Sprite));
__reflect(GuideView.prototype, "GuideView");
/**
 * Created by husong on 4/10/15.
 */
var EasyLoading = (function (_super) {
    __extends(EasyLoading, _super);
    function EasyLoading() {
        var _this = _super.call(this) || this;
        _this.content = null;
        _this.speed = 10 / (1000 / 60);
        _this.init();
        return _this;
    }
    EasyLoading.prototype.init = function () {
        // this.averageUtils = new AverageUtils();
        // this.content = new egret.Sprite();
        // this.content.graphics.beginFill(0x000000, 0.2);
        // this.content.graphics.drawRect(0, 0, App.StageUtils.getWidth(), App.StageUtils.getHeight());
        // this.content.graphics.endFill();
        // this.content.touchEnabled = true;
        // this.uiImageContainer = new egret.DisplayObjectContainer();
        // this.uiImageContainer.x = this.content.width * 0.5;
        // this.uiImageContainer.y = this.content.height * 0.5;
        // this.content.addChild(this.uiImageContainer);
        // RES.getResByUrl("resource/assets/load_Reel.png", function (texture) {
        //     var img = new egret.Bitmap();
        //     img.texture = texture;
        //     img.x = -img.width * 0.5;
        //     img.y = -img.height * 0.5;
        //     this.uiImageContainer.addChild(img);
        // }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    EasyLoading.prototype.showLoading = function () {
        // App.StageUtils.getStage().addChild(this.content);
        // App.TimerManager.doFrame(1, 0, this.enterFrame, this);
    };
    EasyLoading.prototype.hideLoading = function () {
        if (this.content && this.content.parent) {
            App.StageUtils.getStage().removeChild(this.content);
            this.uiImageContainer.rotation = 0;
        }
        App.TimerManager.remove(this.enterFrame, this);
    };
    EasyLoading.prototype.enterFrame = function (time) {
        this.averageUtils.push(this.speed * time);
        this.uiImageContainer.rotation += this.averageUtils.getValue();
    };
    return EasyLoading;
}(SingtonClass));
__reflect(EasyLoading.prototype, "EasyLoading");
/**
 * Created by yangsong on 2014/11/22.
 * Controller管理类
 */
var ControllerManager = (function (_super) {
    __extends(ControllerManager, _super);
    /**
     * 构造函数
     */
    function ControllerManager() {
        var _this = _super.call(this) || this;
        _this._modules = {};
        return _this;
    }
    /**
     * 清空处理
     */
    ControllerManager.prototype.clear = function () {
        this._modules = {};
    };
    /**
     * 动态添加的Controller
     * @param key 唯一标识
     * @param manager Manager
     *
     */
    ControllerManager.prototype.register = function (key, control) {
        if (this.isExists(key))
            return;
        this._modules[key] = control;
    };
    /**
     * 动态移除Controller
     * @param key 唯一标识
     *
     */
    ControllerManager.prototype.unregister = function (key) {
        if (!this.isExists(key))
            return;
        this._modules[key] = null;
        delete this._modules[key];
    };
    /**
     * 是否已经存在Controller
     * @param key 唯一标识
     * @return Boolean
     *
     */
    ControllerManager.prototype.isExists = function (key) {
        return this._modules[key] != null;
    };
    /**
     * 跨模块消息传递
     * @param controllerD Controller唯一标识
     * @param key 消息唯一标识
     *
     */
    ControllerManager.prototype.applyFunc = function (controllerD, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        var manager = this._modules[controllerD];
        if (manager) {
            var params = [];
            for (var i = 1; i < arguments.length; i++) {
                params[i - 1] = arguments[i];
            }
            return manager.applyFunc.apply(manager, params);
        }
        else {
            Log.warn("模块" + controllerD + "不存在");
            return null;
        }
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    ControllerManager.prototype.getControllerModel = function (controllerD) {
        var manager = this._modules[controllerD];
        if (manager) {
            return manager.getModel();
        }
        return null;
    };
    return ControllerManager;
}(SingtonClass));
__reflect(ControllerManager.prototype, "ControllerManager");
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    /**
     * 构造函数
     */
    function ViewManager() {
        var _this = _super.call(this) || this;
        _this._views = {};
        _this._opens = [];
        return _this;
    }
    /**
     * 清空处理
     */
    ViewManager.prototype.clear = function () {
        this.closeAll();
        this._views = {};
    };
    /**
     * 面板注册
     * @param key 面板唯一标识
     * @param view 面板
     */
    ViewManager.prototype.register = function (key, view) {
        if (view == null) {
            return;
        }
        if (this._views[key]) {
            return;
        }
        this._views[key] = view;
    };
    /**
     * 面板解除注册
     * @param key
     */
    ViewManager.prototype.unregister = function (key) {
        if (!this._views[key]) {
            return;
        }
        this._views[key] = null;
        delete this._views[key];
    };
    /**
     * 销毁一个面板
     * @param key 唯一标识
     * @param newView 新面板
     */
    ViewManager.prototype.destroy = function (key, newView) {
        if (newView === void 0) { newView = null; }
        var oldView = this.getView(key);
        if (oldView) {
            this.unregister(key);
            oldView.destroy();
            oldView = null;
        }
        this.register(key, newView);
    };
    /**
     * 开启面板
     * @param key 面板唯一标识
     * @param param 参数
     *
     */
    ViewManager.prototype.open = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var view = this.getView(key);
        if (view == null) {
            Log.warn("UI_" + key + "不存在");
            return;
        }
        if (view.isShow()) {
            view.open.apply(view, param);
            ;
            return view;
        }
        if (view.isInit()) {
            view.addToParent();
            view.open.apply(view, param);
            ;
        }
        else {
            App.EasyLoading.showLoading();
            view.loadResource(function () {
                view.setVisible(false);
                view.addToParent();
                App.EasyLoading.hideLoading();
            }.bind(this), function () {
                view.initUI();
                view.initData();
                view.open.apply(view, param);
                view.setVisible(true);
            }.bind(this));
        }
        this._opens.push(key);
        return view;
    };
    /**
     * 关闭面板
     * @param key 面板唯一标识
     * @param param 参数
     *
     */
    ViewManager.prototype.close = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (!this.isShow(key)) {
            return;
        }
        var view = this.getView(key);
        if (view == null) {
            return;
        }
        var viewIndex = this._opens.indexOf(key);
        if (viewIndex >= 0) {
            this._opens.splice(viewIndex, 1);
        }
        view.removeFromParent();
        view.close.apply(view, param);
    };
    /**
     * 关闭面板
     * @param view
     * @param param
     */
    ViewManager.prototype.closeView = function (view) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var keys = Object.keys(this._views);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = parseInt(keys[i]);
            if (this._views[key] == view) {
                this.close(key, param);
                return;
            }
        }
    };
    /**
     * 根据唯一标识获取一个UI对象
     * @param key
     * @returns {any}
     */
    ViewManager.prototype.getView = function (key) {
        return this._views[key];
    };
    /**
     * 关闭所有开启中的UI
     */
    ViewManager.prototype.closeAll = function () {
        while (this._opens.length) {
            this.close(this._opens[0]);
        }
    };
    /**
     * 当前ui打开数量
     * @returns {number}
     */
    ViewManager.prototype.currOpenNum = function () {
        return this._opens.length;
    };
    /**
     * 检测一个UI是否开启中
     * @param key
     * @returns {boolean}
     */
    ViewManager.prototype.isShow = function (key) {
        return this._opens.indexOf(key) != -1;
    };
    return ViewManager;
}(SingtonClass));
__reflect(ViewManager.prototype, "ViewManager");
/**
 * Created by yangsong on 2014/11/22.
 * Controller基类
 */
var BaseController = (function () {
    /**
     * 构造函数
     */
    function BaseController() {
        this._messages = {};
    }
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    BaseController.prototype.registerFunc = function (key, callbackFunc, callbackObj) {
        this._messages[key] = [callbackFunc, callbackObj];
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var listen = this._messages[key];
        if (listen) {
            return listen[0].apply(listen[1], param);
        }
        else {
            Log.warn("消息" + key + "不存在侦听");
            return null;
        }
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return App.ControllerManager.applyFunc.apply(App.ControllerManager, arguments);
    };
    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    BaseController.prototype.setModel = function (model) {
        this._model = model;
    };
    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    BaseController.prototype.getModel = function () {
        return this._model;
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    BaseController.prototype.getControllerModel = function (controllerD) {
        return App.ControllerManager.getControllerModel(controllerD);
    };
    /**
     * View注册
     * @param viewClassZ View的类
     * @param viewId View的ID
     * @param viewParent View的父级
     * @returns {IBaseView}
     */
    BaseController.prototype.registerView = function (viewClass, viewId, viewParent) {
        var view = new viewClass(this, viewParent);
        App.ViewManager.register(viewId, view);
        return view;
    };
    /**
     * View打开
     * @param viewId View的ID
     * @param param 参数
     */
    BaseController.prototype.openView = function (viewId) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = App.ViewManager).open.apply(_a, [viewId].concat(param));
        var _a;
    };
    /**
     * View关闭
     * @param viewId View的ID
     * @param param 参数
     */
    BaseController.prototype.closeView = function (viewId) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = App.ViewManager).close.apply(_a, [viewId].concat(param));
        var _a;
    };
    return BaseController;
}());
__reflect(BaseController.prototype, "BaseController");
/**
 * Created by yangsong on 15-11-20.
 * Model基类
 */
var BaseModel = (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseModel($controller) {
        this._controller = $controller;
        this._controller.setModel(this);
    }
    return BaseModel;
}());
__reflect(BaseModel.prototype, "BaseModel");
/**
 * Created by yangsong on 2014/11/22.
 * Proxy基类
 */
var BaseProxy = (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseProxy($controller) {
        this._controller = $controller;
    }
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseProxy.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseProxy.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 注册从服务器返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerMsg = function (key, callbackFunc, callbackObj) {
        App.MessageCenter.addListener(key, callbackFunc, callbackObj);
    };
    /**
     * 注册从服务器返回消息的监听，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerMsgOnce = function (key, callbackFunc, callbackObj) {
        var callback = function (param) {
            this.removeServerMsg(key, callback, this);
            callbackFunc.apply(callbackObj, param);
        };
        this.receiveServerMsg(key, callback, this);
    };
    /**
     * 注册从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerHttpUpdateMsg = function (key, callbackFunc, callbackObj) {
        this.receiveServerMsg(key + "_HttpUpdate", callbackFunc, callbackObj);
    };
    /**
     * 注册从Http服务端返回的Update消息，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.receiveServerHttpUpdateMsgOnce = function (key, callbackFunc, callbackObj) {
        this.receiveServerMsgOnce(key + "_HttpUpdate", callbackFunc, callbackObj);
    };
    /**
     * 移除服务端返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.removeServerMsg = function (key, callbackFunc, callbackObj) {
        App.MessageCenter.removeListener(key, callbackFunc, callbackObj);
    };
    /**
     * 移除从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    BaseProxy.prototype.removeServerHttpUpdateMsg = function (key, callbackFunc, callbackObj) {
        this.removeServerMsg(key + "_HttpUpdate", callbackFunc, callbackObj);
    };
    /**
     * 发送消息到Socket服务器
     */
    BaseProxy.prototype.sendSocketMsg = function (msg) {
        App.Socket.send(msg);
    };
    /**
     * 发送消息到Http服务端
     * @param type 消息标识 例如: User.login
     * @param paramObj 消息参数 例如: var paramObj:any = {"uName":uName, "uPass":uPass};
     */
    BaseProxy.prototype.sendHttpMsg = function (type, paramObj) {
        if (paramObj === void 0) { paramObj = null; }
        App.Http.send(type, this.getURLVariables(type, paramObj));
    };
    /**
     * 将参数转换为URLVariables
     * @param t_type
     * @param t_paramObj
     * @returns {egret.URLVariables}
     */
    BaseProxy.prototype.getURLVariables = function (t_type, t_paramObj) {
        var typeArr = t_type.split(".");
        var paramObj = {};
        paramObj["mod"] = typeArr[0];
        paramObj["do"] = typeArr[1];
        if (t_paramObj != null) {
            paramObj["p"] = t_paramObj;
        }
        var param = JSON.stringify(paramObj);
        var variables = new egret.URLVariables("data=" + param + "&h=" + App.ProxyUserFlag);
        return variables;
    };
    return BaseProxy;
}());
__reflect(BaseProxy.prototype, "BaseProxy");
var DDI;
(function (DDI) {
    var BaseButton = (function (_super) {
        __extends(BaseButton, _super);
        function BaseButton(controller, parent) {
            var _this = _super.call(this, controller, parent) || this;
            _this.skinName = "resource/ddi_skins/BaseButtonSkin.exml";
            return _this;
        }
        BaseButton.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        BaseButton.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
        };
        Object.defineProperty(BaseButton.prototype, "size", {
            get: function () {
                return this._size;
            },
            /**
             * 设置尺寸
             * large,medium,small
             * 默认为small
             */
            set: function (value) {
                this._size = value;
                if (this.rect && this.label) {
                    switch (this._size) {
                        case 'large':
                            this.label.left = this.label.right = 30;
                            this.label.top = this.label.bottom = 15;
                            break;
                        case 'medium':
                            this.label.left = this.label.right = 20;
                            this.label.top = this.label.bottom = 10;
                            break;
                        case 'small':
                            this.label.left = this.label.right = 16;
                            this.label.top = this.label.bottom = 8;
                            this.label.size = 26;
                            break;
                        default:
                            this.label.left = this.label.right = 16;
                            this.label.top = this.label.bottom = 8;
                            this.label.size = 26;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseButton.prototype, "text", {
            get: function () {
                return this._text;
            },
            /**
             * button文字
             */
            set: function (value) {
                this._text = value;
                if (this.label) {
                    this.label.text = this._text;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseButton.prototype, "borderWidth", {
            get: function () {
                return this._borderWidth;
            },
            /**
             * border宽度
             */
            set: function (value) {
                this._borderWidth = value;
                if (this.rect) {
                    this.rect.strokeWeight = this._borderWidth;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseButton.prototype, "borderColor", {
            get: function () {
                return this._borderColor;
            },
            /**
             * border颜色
             */
            set: function (value) {
                this._borderColor = value;
                if (this.rect) {
                    this.rect.strokeColor = this._borderColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseButton.prototype, "plain", {
            get: function () {
                return this._plain;
            },
            /**
             * plain
             */
            set: function (value) {
                this._plain = value;
                if (this.rect) {
                    this.rect.fillAlpha = 0;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseButton.prototype, "color", {
            get: function () {
                return this._color;
            },
            /**
             * rect颜色
             */
            set: function (value) {
                this._color = value;
                if (this.rect) {
                    this.rect.fillColor = this._color;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseButton.prototype, "radius", {
            get: function () {
                return this._radius;
            },
            /**
             * 圆角
             */
            set: function (value) {
                this._radius = value;
                if (this.rect) {
                    this.rect.ellipseHeight = this._radius;
                    this.rect.ellipseWidth = this._radius;
                }
            },
            enumerable: true,
            configurable: true
        });
        return BaseButton;
    }(BaseEuiView));
    DDI.BaseButton = BaseButton;
    __reflect(BaseButton.prototype, "DDI.BaseButton");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 2014/11/22.
 * View基类，继承自egret.Sprite
 */
var BaseSpriteView = (function (_super) {
    __extends(BaseSpriteView, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    function BaseSpriteView($controller, $parent) {
        var _this = _super.call(this) || this;
        _this._resources = null;
        _this._controller = $controller;
        _this._myParent = $parent;
        _this._isInit = false;
        App.StageUtils.getStage().addEventListener(egret.Event.RESIZE, _this.onResize, _this);
        return _this;
    }
    /**
     * 设置初始加载资源
     * @param resources
     */
    BaseSpriteView.prototype.setResources = function (resources) {
        this._resources = resources;
    };
    Object.defineProperty(BaseSpriteView.prototype, "myParent", {
        /**
         * 获取我的父级
         * @returns {egret.DisplayObjectContainer}
         */
        get: function () {
            return this._myParent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    BaseSpriteView.prototype.isInit = function () {
        return this._isInit;
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 参数
     *
     */
    BaseSpriteView.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseSpriteView.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return this._controller.applyControllerFunc.apply(this._controller, arguments);
    };
    /**
     * 面板是否显示
     * @return
     *
     */
    BaseSpriteView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    /**
     * 添加到父级
     */
    BaseSpriteView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    /**
     * 从父级移除
     */
    BaseSpriteView.prototype.removeFromParent = function () {
        App.DisplayUtils.removeFromParent(this);
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseSpriteView.prototype.initUI = function () {
        this._isInit = true;
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseSpriteView.prototype.initData = function () {
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    BaseSpriteView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    BaseSpriteView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    /**
     * 销毁
     */
    BaseSpriteView.prototype.destroy = function () {
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    };
    /**
     * 屏幕尺寸变化时调用
     */
    BaseSpriteView.prototype.onResize = function () {
    };
    /**
     * 加载面板所需资源
     * @param loadComplete
     * @param initComplete
     */
    BaseSpriteView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            App.ResourceUtils.loadResource(this._resources, [], function () {
                loadComplete();
                initComplete();
            }, null, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    /**
     * 设置是否隐藏
     * @param value
     */
    BaseSpriteView.prototype.setVisible = function (value) {
        this.visible = value;
    };
    return BaseSpriteView;
}(egret.DisplayObjectContainer));
__reflect(BaseSpriteView.prototype, "BaseSpriteView", ["IBaseView"]);
/**
 * Created by yangsong on 2014/11/22.
 * Http数据缓存类
 */
var DynamicChange = (function () {
    function DynamicChange() {
        this._dataCache = [];
        this._pUpdate = new ProxyUpdate(this._dataCache);
    }
    Object.defineProperty(DynamicChange.prototype, "pUpdate", {
        get: function () {
            return this._pUpdate;
        },
        enumerable: true,
        configurable: true
    });
    DynamicChange.prototype.getCacheData = function (key) {
        if (this._dataCache[key]) {
            return this._dataCache[key];
        }
        return null;
    };
    DynamicChange.prototype.clearCache = function () {
        var keys = Object.keys(this._dataCache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            this._dataCache[key] = null;
            delete this._dataCache[key];
        }
    };
    DynamicChange.prototype.getCacheKeyInfos = function () {
        var results = [];
        var keys = Object.keys(this._dataCache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var k = this._dataCache[key];
            results.push(k);
        }
        return results;
    };
    DynamicChange.prototype.isCache = function (key) {
        return this._dataCache[key];
    };
    return DynamicChange;
}());
__reflect(DynamicChange.prototype, "DynamicChange");
/**
 * Created by yangsong on 2014/11/22.
 * Http数据更新类
 */
var ProxyUpdate = (function () {
    function ProxyUpdate(cache) {
        this._cache = cache;
    }
    ProxyUpdate.prototype.isArray = function (key) {
        return key instanceof Array;
    };
    ProxyUpdate.prototype.isObject = function (key) {
        return key.indexOf("object") > -1;
    };
    ProxyUpdate.prototype.isNormal = function (key) {
        var isAt = key.indexOf("@") > -1;
        var isDot = key.indexOf(".") > -1;
        var isUnderline = key.indexOf("_") > -1;
        return (!isAt && !isDot && !isUnderline);
    };
    ProxyUpdate.prototype.isAddToArray = function (key) {
        return (key == "@a");
    };
    ProxyUpdate.prototype.isRemoveToArray = function (key) {
        var arr = key.split("_");
        return (arr.length <= 3 && arr[0] == "@d");
    };
    ProxyUpdate.prototype.isFilter = function (key) {
        var arr = key.split("_");
        return (arr[0] == "@f");
    };
    ProxyUpdate.prototype.isNumeric = function (v) {
        return parseFloat(v).toString() == v.toString();
    };
    ProxyUpdate.prototype._updateObject = function (name, value, cacheData) {
        var arr = name.split(".");
        if (arr[0] == "@a" || arr[0] == "@s") {
            cacheData[arr[1]] = value;
        }
        else if (arr[0] == "@d") {
            delete cacheData[arr[1]];
        }
    };
    ProxyUpdate.prototype._getFilterObject = function (filter, cacheData) {
        if (cacheData) {
            var arr = filter.split("_");
            if (arr.length == 3 && arr[0] == "@f" && this.isArray(cacheData)) {
                var key = arr[1];
                var value = arr[2];
                for (var i = 0; i < cacheData.length; i++) {
                    var v = cacheData[i];
                    if (arr.length == 3 && this.isObject(v.toString())) {
                        var cacheValue = v[key];
                        if (cacheValue) {
                            if (value[0] == "@") {
                                value = value.replace("@", "");
                            }
                            if (value == cacheValue) {
                                return v;
                            }
                        }
                    }
                }
            }
        }
        return null;
    };
    ProxyUpdate.prototype._addObjectToArray = function (cacheData, changeValue) {
        if (this.isArray(changeValue)) {
            for (var i = 0; i < changeValue.length; i++) {
                cacheData.push(changeValue[i]);
            }
        }
        else {
            cacheData.push(changeValue);
        }
    };
    ProxyUpdate.prototype._removeObjectFromArray = function (cacheData, key, changeValue) {
        var arr = key.split("_");
        if (arr.length <= 3 && arr[0] == "@d") {
            if (this.isArray(cacheData)) {
                var count = cacheData.length;
                for (var i = count - 1; i >= 0; i--) {
                    var cacheDataItem = cacheData[i];
                    if (arr.length == 3) {
                        if (cacheDataItem.hasOwnProperty(arr[1])) {
                            var val = arr[2];
                            if (val[0] == "@") {
                                val = val.replace("@", "");
                            }
                            if (val == cacheDataItem[arr[1]]) {
                                cacheData.splice(i, 1);
                            }
                        }
                    }
                    else if (arr.length == 2 && cacheDataItem.hasOwnProperty(arr[1])) {
                        if (changeValue == cacheDataItem[arr[1]]) {
                            cacheData.splice(i, 1);
                        }
                    }
                    else if (arr.length == 1) {
                        if (changeValue == cacheDataItem) {
                            cacheData.splice(i, 1);
                        }
                    }
                }
            }
        }
    };
    ProxyUpdate.prototype.update = function (key, data) {
        this._cache[key] = data;
        if (data.hasOwnProperty("c")) {
            var cdata = data["c"];
            var keys = Object.keys(cdata);
            for (var i = 0, len = keys.length; i < len; i++) {
                var k1 = keys[i];
                if (this._cache[k1]) {
                    this._update(this._cache[k1], cdata[k1]);
                    App.MessageCenter.dispatch(k1 + "_HttpUpdate");
                }
            }
        }
    };
    ProxyUpdate.prototype._update = function (cacheData, changeData) {
        if (cacheData && changeData && this.isObject(changeData.toString())) {
            var keys = Object.keys(changeData);
            for (var i = 0, len = keys.length; i < len; i++) {
                var k = keys[i];
                var v = changeData[k];
                if (this.isNormal(k) && this.isObject(v.toString())) {
                    if (cacheData.hasOwnProperty(k)) {
                        this._update(cacheData[k], v);
                    }
                }
                else if (this.isNormal(k) && this.isNumeric(v)) {
                    var cv = cacheData[k];
                    cacheData[k] = cv + v;
                }
                else if (this.isNormal(k)) {
                    cacheData[k] = v;
                }
                else if (this.isAddToArray(k)) {
                    this._addObjectToArray(cacheData, v);
                }
                else if (this.isRemoveToArray(k)) {
                    this._removeObjectFromArray(cacheData, k, v);
                }
                else if (this.isFilter(k)) {
                    var subCacheData = this._getFilterObject(k, cacheData);
                    if (subCacheData) {
                        this._update(subCacheData, v);
                    }
                }
                else {
                    this._updateObject(k, v, cacheData);
                }
            }
        }
    };
    return ProxyUpdate;
}());
__reflect(ProxyUpdate.prototype, "ProxyUpdate");
/**
 * Created by yangsong on 2014/11/22.
 * Http请求处理
 */
var Http = (function (_super) {
    __extends(Http, _super);
    /**
     * 构造函数
     */
    function Http() {
        var _this = _super.call(this) || this;
        _this._data = new DynamicChange();
        _this._cache = [];
        _this._request = new egret.URLRequest();
        _this._request.method = egret.URLRequestMethod.POST;
        _this._urlLoader = new egret.URLLoader();
        _this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.onError, _this);
        return _this;
    }
    /**
     * 初始化服务器地址
     * @param serverUrl服务器链接地址
     */
    Http.prototype.initServer = function (serverUrl) {
        this._serverUrl = serverUrl;
    };
    Object.defineProperty(Http.prototype, "Data", {
        /**
         * 数据缓存
         * @returns {DynamicChange}
         * @constructor
         */
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Http错误处理函数
     * @param e
     */
    Http.prototype.onError = function (e) {
        this.nextPost();
    };
    /**
     * 请求数据
     * @param    type
     * @param    t_variables
     */
    Http.prototype.send = function (type, urlVariables) {
        this._cache.push([type, urlVariables]);
        this.post();
    };
    /**
     * 请求服务器
     */
    Http.prototype.post = function () {
        if (this._isRequesting) {
            return;
        }
        if (this._cache.length == 0) {
            return;
        }
        var arr = this._cache.shift();
        var type = arr[0];
        var urlVariables = arr[1];
        this._type = type;
        this._request.url = this._serverUrl;
        this._request.data = urlVariables;
        this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        this._urlLoader.load(this._request);
        this._isRequesting = true;
    };
    /**
     * 数据返回
     * @param event
     */
    Http.prototype.onLoaderComplete = function (event) {
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        var t_obj = JSON.parse(this._urlLoader.data);
        if (!t_obj.hasOwnProperty("s") || t_obj["s"] == 0) {
            this._data.pUpdate.update(this._type, t_obj);
            App.MessageCenter.dispatch(this._type, t_obj);
        }
        else {
            Log.debug("Http错误:" + t_obj["s"]);
        }
        this.nextPost();
    };
    /**
     * 开始下一个请求
     */
    Http.prototype.nextPost = function () {
        this._isRequesting = false;
        this.post();
    };
    return Http;
}(SingtonClass));
__reflect(Http.prototype, "Http");
/*
 * Filename: /Library/WebServer/Documents/sean/egretProject/test/src/Components/BaseCompany.ts
 * Path: /Library/WebServer/Documents/sean/egretProject/test
 * Created Date: Friday, September 25th 2020, 3:11:06 pm
 * Author: sean
 *
 * Copyright (c) 2020 Your Company
 */
var DDI;
(function (DDI) {
    var BaseCompany = (function (_super) {
        __extends(BaseCompany, _super);
        function BaseCompany($controller, $parent) {
            var _this = _super.call(this, $controller, $parent) || this;
            _this.skinName = '/resource/ddi_skins/company.exml';
            _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.onAddStage, _this);
            return _this;
        }
        BaseCompany.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
            this.circleImg.mask = this.circle;
        };
        BaseCompany.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        BaseCompany.prototype.onAddStage = function () {
            App.TweenUtils.enLarge(this);
        };
        Object.defineProperty(BaseCompany.prototype, "circleImgSource", {
            get: function () {
                return this._circleImgSource;
            },
            /**
             * img set & get
             */
            set: function (value) {
                this._circleImgSource = value;
                if (this.circleImg) {
                    this.circleImg.source = this._circleImgSource;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseCompany.prototype, "contentLabelText", {
            get: function () {
                return this._contentLabelText;
            },
            /**
             * label set & get
             */
            set: function (value) {
                this._contentLabelText = value;
                if (this.contentLabel) {
                    this.contentLabel.text = this._contentLabelText;
                }
            },
            enumerable: true,
            configurable: true
        });
        return BaseCompany;
    }(BaseEuiView));
    DDI.BaseCompany = BaseCompany;
    __reflect(BaseCompany.prototype, "DDI.BaseCompany");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 15-3-25.
 */
var ByteArrayMsgByProtobuf = (function (_super) {
    __extends(ByteArrayMsgByProtobuf, _super);
    /**
     * 构造函数
     */
    function ByteArrayMsgByProtobuf() {
        var _this = _super.call(this) || this;
        _this.msgClass = null;
        _this.protoConfig = null;
        _this.protoConfigSymmetry = null;
        _this.msgClass = {};
        _this.protoConfig = App.ProtoConfig;
        _this.protoConfigSymmetry = {};
        var keys = Object.keys(_this.protoConfig);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = _this.protoConfig[key];
            _this.protoConfigSymmetry[value] = key;
        }
        return _this;
    }
    /**
     * 获取msgID对应的类
     * @param key
     * @returns {any}
     */
    ByteArrayMsgByProtobuf.prototype.getMsgClass = function (key) {
        var cls = this.msgClass[key];
        if (cls == null) {
            cls = egret.getDefinitionByName(key);
            this.msgClass[key] = cls;
        }
        return cls;
    };
    /**
     * 获取msgID
     * @param key
     * @returns {any}
     */
    ByteArrayMsgByProtobuf.prototype.getMsgID = function (key) {
        return this.protoConfigSymmetry[key];
    };
    /**
     * 获取msgKey
     * @param msgId
     * @returns {any}
     */
    ByteArrayMsgByProtobuf.prototype.getMsgKey = function (msgId) {
        return this.protoConfig[msgId];
    };
    /**
     * 消息解析
     * @param msg
     */
    ByteArrayMsgByProtobuf.prototype.decode = function (msg) {
        var msgID = msg.readShort();
        var len = msg.readShort();
        if (msg.bytesAvailable >= len) {
            var bytes = new egret.ByteArray();
            msg.readBytes(bytes, 0, len);
            var obj = {};
            obj.key = this.getMsgKey(msgID);
            App.DebugUtils.start("Protobuf Decode");
            obj.body = this.getMsgClass(obj.key).decode(bytes.buffer);
            App.DebugUtils.stop("Protobuf Decode");
            Log.debug("收到数据：", "[" + msgID + " " + obj.key + "]", obj.body);
            return obj;
        }
        return null;
    };
    /**
     * 消息封装
     * @param msg
     */
    ByteArrayMsgByProtobuf.prototype.encode = function (msg) {
        var msgID = this.getMsgID(msg.key);
        var msgClass = this.getMsgClass(msg.key);
        var msgBody = msgClass.fromObject(msg.body);
        var msgBuffer = msgClass.encode(msgBody).finish();
        App.DebugUtils.start("Protobuf Encode");
        var bodyBytes = new egret.ByteArray(msgBuffer);
        App.DebugUtils.stop("Protobuf Encode");
        Log.debug("发送数据：", "[" + msgID + " " + msg.key + "]", msg.body);
        var sendMsg = new egret.ByteArray();
        sendMsg.writeShort(msgID);
        sendMsg.writeShort(bodyBytes.length);
        sendMsg.writeBytes(bodyBytes);
        return sendMsg;
    };
    return ByteArrayMsgByProtobuf;
}(ByteArrayMsg));
__reflect(ByteArrayMsgByProtobuf.prototype, "ByteArrayMsgByProtobuf");
/**
 * Created by yangsong on 2014/11/25.
 * Socket类
 */
var Socket = (function (_super) {
    __extends(Socket, _super);
    /**
     * 构造函数
     */
    function Socket() {
        var _this = _super.call(this) || this;
        _this._needReconnect = false;
        _this._maxReconnectCount = 10;
        _this._reconnectCount = 0;
        return _this;
    }
    /**
     * 添加事件监听
     */
    Socket.prototype.addEvents = function () {
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    /**
     * 移除事件监听
     */
    Socket.prototype.removeEvents = function () {
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    /**
     * 服务器连接成功
     */
    Socket.prototype.onSocketOpen = function () {
        this._reconnectCount = 0;
        this._isConnecting = true;
        if (this._connectFlag && this._needReconnect) {
            App.MessageCenter.dispatch(SocketConst.SOCKET_RECONNECT);
        }
        else {
            App.MessageCenter.dispatch(SocketConst.SOCKET_CONNECT);
        }
        this._connectFlag = true;
    };
    /**
     * 服务器断开连接
     */
    Socket.prototype.onSocketClose = function () {
        this._isConnecting = false;
        if (this._needReconnect) {
            App.MessageCenter.dispatch(SocketConst.SOCKET_START_RECONNECT);
            this.reconnect();
        }
        else {
            App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE);
        }
    };
    /**
     * 服务器连接错误
     */
    Socket.prototype.onSocketError = function () {
        if (this._needReconnect) {
            this.reconnect();
        }
        else {
            App.MessageCenter.dispatch(SocketConst.SOCKET_NOCONNECT);
        }
        this._isConnecting = false;
    };
    /**
     * 收到服务器消息
     * @param e
     */
    Socket.prototype.onReceiveMessage = function (e) {
        this._msg.receive(this._socket);
    };
    /**
     * 初始化服务区地址
     * @param host IP
     * @param port 端口
     * @param msg 消息发送接受处理类
     */
    Socket.prototype.initServer = function (host, port, msg) {
        this._host = host;
        this._port = port;
        this._msg = msg;
    };
    /**
     * 开始Socket连接
     */
    Socket.prototype.connect = function () {
        if (App.DeviceUtils.IsHtml5) {
            if (!window["WebSocket"]) {
                Log.error("不支持WebSocket");
                return;
            }
        }
        this._socket = new egret.WebSocket();
        if (this._msg instanceof ByteArrayMsg) {
            this._socket.type = egret.WebSocket.TYPE_BINARY;
        }
        Log.debug("WebSocket: " + this._host + ":" + this._port);
        this.addEvents();
        this._socket.connect(this._host, this._port);
    };
    /**
     * 重新连接
     */
    Socket.prototype.reconnect = function () {
        this.closeCurrentSocket();
        this._reconnectCount++;
        if (this._reconnectCount < this._maxReconnectCount) {
            this.connect();
        }
        else {
            this._reconnectCount = 0;
            if (this._connectFlag) {
                App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE);
            }
            else {
                App.MessageCenter.dispatch(SocketConst.SOCKET_NOCONNECT);
            }
        }
    };
    /**
     * 发送消息到服务器
     * @param msg
     */
    Socket.prototype.send = function (msg) {
        this._msg.send(this._socket, msg);
    };
    /**
     * 关闭Socket连接
     */
    Socket.prototype.close = function () {
        this._connectFlag = false;
        this.closeCurrentSocket();
    };
    /**
     * 清理当前的Socket连接
     */
    Socket.prototype.closeCurrentSocket = function () {
        this.removeEvents();
        this._socket.close();
        this._socket = null;
        this._isConnecting = false;
    };
    /**
     * Socket是否在连接中
     * @returns {boolean}
     */
    Socket.prototype.isConnecting = function () {
        return this._isConnecting;
    };
    /**
     * Debug信息
     * @param str
     */
    Socket.prototype.debugInfo = function (str) {
        App.MessageCenter.dispatch(SocketConst.SOCKET_DEBUG_INFO, str);
    };
    return Socket;
}(SingtonClass));
__reflect(Socket.prototype, "Socket");
/**
 * Created by yangsong on 2014/11/25.
 * Socket使用常量
 */
var SocketConst = (function () {
    function SocketConst() {
    }
    /**
     * Socket已经连接上
     * @type {string}
     */
    SocketConst.SOCKET_CONNECT = "SOCKET_CONNECT";
    /**
     * Socket重新连接上
     * @type {string}
     */
    SocketConst.SOCKET_RECONNECT = "SOCKET_RECONNECT";
    /**
     * Socket开始重新连接上
     * @type {string}
     */
    SocketConst.SOCKET_START_RECONNECT = "SOCKET_START_RECONNECT";
    /**
     * Socket已关闭
     * @type {string}
     */
    SocketConst.SOCKET_CLOSE = "SOCKET_CLOSE";
    /*
     * socket收到消息
     * */
    SocketConst.SOCKET_DATA = "SOCKET_DATA";
    /**
     * Socket不能连接上
     * @type {string}
     */
    SocketConst.SOCKET_NOCONNECT = "SOCKET_NOCONNECT";
    /**
     * Socketdebug的消息
     * @type {string}
     */
    SocketConst.SOCKET_DEBUG_INFO = "SOCKET_DEBUG_INFO";
    return SocketConst;
}());
__reflect(SocketConst.prototype, "SocketConst");
/**
 * 具有向前向后切换view
 * 可继承的home父类
 */
var DDI;
(function (DDI) {
    var BaseHome = (function (_super) {
        __extends(BaseHome, _super);
        function BaseHome($controller, $parent) {
            var _this = _super.call(this, $controller, $parent) || this;
            // view切换
            _this.viewArr = [];
            // 所有需要切换的view
            _this.allView = [];
            // 当前打开view的索引
            _this.currentIndex = 0;
            // 判断当前是否在决策树内
            _this.judgeStatus = false;
            // 决策树内的索引
            _this.judgeIndex = 0;
            // 控制点击结束
            _this.controlEnd = false;
            // 控制点击时间
            _this.delay = 1000;
            _this.timer = 0;
            /**
             * pageView是否可被点击
             */
            _this.stageEnableTap = true;
            return _this;
        }
        BaseHome.prototype.changeIndex = function (val) {
            this.currentIndex = val;
        };
        BaseHome.prototype.initUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var savePoint, viewIndex;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _super.prototype.initUI.call(this);
                            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stageTap, this);
                            this.beforeInitView();
                            this.initViewData();
                            this.afterInitViewed();
                            savePoint = App.Savepoint.takeSavepoint();
                            if (!savePoint) return [3 /*break*/, 2];
                            viewIndex = savePoint.viewIndex;
                            this.beforeMock(viewIndex);
                            return [4 /*yield*/, this.mock(savePoint)];
                        case 1:
                            _a.sent();
                            this.mocked(viewIndex);
                            return [3 /*break*/, 3];
                        case 2:
                            this.viewChange(this.viewArr[this.currentIndex], this.currentIndex);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        BaseHome.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        BaseHome.prototype.virtualApply = function (controllerD, key) {
            return App.ControllerManager.applyFunc.bind(App.ControllerManager, controllerD, key);
        };
        BaseHome.prototype.beforeInitView = function () { };
        /**
         * init view 数据
         */
        BaseHome.prototype.initViewData = function () { };
        /**
         * initViewdata 完毕回调
         * 用于子类继承
         */
        BaseHome.prototype.afterInitViewed = function () {
            // 无论回调如何，重置舞台为不可点击状态
            this.toggleStageStatus(true);
        };
        BaseHome.prototype.beforeMock = function (viewIndex) { };
        BaseHome.prototype.mock = function (savePoint) {
            return __awaiter(this, void 0, void 0, function () {
                var res, fixedViewIndex, fixedViewIndex, fixedViewIndex;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!savePoint.questionInfo) return [3 /*break*/, 5];
                            if (!(savePoint.questionInfo &&
                                savePoint.questionInfo.questionId &&
                                savePoint.questionInfo.answers)) return [3 /*break*/, 2];
                            return [4 /*yield*/, Api.Simulation.mockAnswerQuestion({
                                    questionId: savePoint.questionInfo.questionId,
                                    cardId: App.UserInfo.takeCardId(),
                                    simulationId: App.UserInfo.takeUserInfo().simulationId,
                                }, {
                                    answers: savePoint.questionInfo.answers,
                                })];
                        case 1:
                            res = _a.sent();
                            App.Savepoint.tempData = res;
                            fixedViewIndex = 0;
                            if (savePoint.viewIndex > 0) {
                                fixedViewIndex = savePoint.viewIndex;
                            }
                            this.changeIndex(fixedViewIndex);
                            this.viewChange(this.viewArr[this.currentIndex], this.currentIndex);
                            this.mockSuccess(savePoint);
                            return [3 /*break*/, 4];
                        case 2:
                            if (!(savePoint.questionInfo &&
                                savePoint.questionInfo.questionId &&
                                !savePoint.questionInfo.answers)) return [3 /*break*/, 4];
                            fixedViewIndex = 0;
                            if (savePoint.viewIndex > 0) {
                                fixedViewIndex = savePoint.viewIndex;
                            }
                            this.changeIndex(fixedViewIndex);
                            this.viewChange(this.viewArr[this.currentIndex], this.currentIndex);
                            return [4 /*yield*/, this.mockCancel(savePoint)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            fixedViewIndex = 0;
                            if (savePoint.viewIndex > 0) {
                                fixedViewIndex = savePoint.viewIndex;
                            }
                            this.changeIndex(fixedViewIndex);
                            this.viewChange(this.viewArr[this.currentIndex], this.currentIndex);
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        BaseHome.prototype.mockSuccess = function (savePoint) { };
        /**
         * 当有问题却没答案时，取消mock
         * 用于子类继承
         */
        BaseHome.prototype.mockCancel = function (savePoint) { };
        BaseHome.prototype.mocked = function (viewIndex) { };
        /**
         * 向前一个view
         * 用于子类继承
         */
        BaseHome.prototype.preViewChangeHandle = function () {
            if (this.currentIndex !== 0) {
                this.currentIndex--;
                this.viewChange(this.viewArr[this.currentIndex], this.currentIndex);
            }
        };
        /**
         * 向后一个view
         * 用于子类继承
         */
        BaseHome.prototype.nextViewChangeHandle = function () {
            // 选择决策树内切换 or 决策树外切换
            if (this.controlEnd) {
                this.judgeStatus ? this.nextJudgeViewChange() : this.nextViewChange();
            }
        };
        BaseHome.prototype.waitNextChangeHandle = function () {
            if (this.stageEnableTap && this.controlEnd) {
                this.judgeStatus ? this.nextJudgeViewChange() : this.nextViewChange();
            }
        };
        // 决策树外切换
        BaseHome.prototype.nextViewChange = function () {
            if (this.currentIndex < this.viewArr.length - 1) {
                this.currentIndex++;
                this.viewChange(this.viewArr[this.currentIndex], this.currentIndex);
            }
            if (!this.judgeStatus && this.judgeBaseArray) {
                // 关闭最后一个view
                App.ViewManager.close(this.lastView);
                // 删除保存点中的题目信息
                var currentSavePoint = App.Savepoint.takeSavepoint();
                // delete currentSavePoint.questionInfo;
                App.Savepoint.cacheSavepoint(currentSavePoint);
                // Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(), currentSavePoint)
            }
        };
        BaseHome.prototype.viewChange = function (viewArr, index) {
            var _this = this;
            this.stopTap();
            // 如果存在退出回调
            if (this.outAction && this.outAction.action) {
                // 如果存在多个回调动画
                if (Array.isArray(this.outAction.action)) {
                    // 假定第0个动画回调时间最长
                    this.outAction.action.map(function (item, index) {
                        if (index !== 0) {
                            item();
                        }
                    });
                    this.outAction.action[0]().call(function () {
                        _this.viewOpen(viewArr);
                    });
                }
                else {
                    // 如果不是多个动画
                    this.outAction.action().call(function () {
                        _this.viewOpen(viewArr);
                    });
                }
            }
            else {
                this.viewOpen(viewArr);
            }
        };
        BaseHome.prototype.viewOpen = function (viewArr) {
            var _this = this;
            // 关闭所有可关闭的view
            this.allView.map(function (item) {
                App.ViewManager.close(item);
            });
            var func;
            // 打开特定的view
            // 根据判断是否进入决策树 or 正常进入流程
            // 清空outAction
            this.outAction = {};
            if (Object.prototype.toString.call(viewArr[0]) === "[object Object]") {
                this.joinJudge(viewArr[0]);
            }
            else {
                viewArr.map(function (item) {
                    if (typeof item === "function") {
                        func = item;
                    }
                    else if (typeof item === 'object') {
                        _this.outAction = item;
                    }
                    else {
                        App.ViewManager.open(item);
                    }
                });
                func && func();
            }
        };
        BaseHome.prototype.stopTap = function () {
            var _this = this;
            this.controlEnd = false;
            var timer = setTimeout(function () {
                clearTimeout(timer);
                _this.controlEnd = true;
            }, this.delay);
        };
        /**
         * pageView点击事件，用于子类继承
         */
        BaseHome.prototype.stageTap = function () {
            if (this.stageEnableTap && this.controlEnd) {
                // console.log('通过stageTap进行next')
                if (new Date().getTime() - 500 > this.timer) {
                    this.judgeStatus ? this.nextJudgeViewChange() : this.nextViewChange();
                }
                this.timer = new Date().getTime();
                // this.judgeStatus ? this.nextJudgeViewChange() : this.nextViewChange();
            }
        };
        /**
         * 变更stage可点击状态
         * @param status stage是否可点击状态
         */
        BaseHome.prototype.toggleStageStatus = function (status) {
            var _this = this;
            // 下个事件循环开始之前更改状态
            setTimeout(function () {
                console.log('stage点击状态' + _this.stageEnableTap + '被修改为' + status);
                _this.stageEnableTap = status;
            }, 0);
        };
        /**
         * 加入决策树中
         * @param item
         */
        BaseHome.prototype.joinJudge = function (item) {
            if (item.judge === true) {
                // 更改决策树状态
                this.judgeStatus = true;
                this.judgeBaseArray = item.judgeBaseArray;
                this.judgeViewChange(this.judgeBaseArray.longTap);
            }
        };
        BaseHome.prototype.judgeViewChange = function (viewArr, skipAction) {
            var _this = this;
            // 暂停点击事件
            this.stopTap();
            console.log('here is judge action');
            console.log(this.outAction);
            // 如果存在退出回调
            if (this.outAction && this.outAction.action && !skipAction) {
                // 如果存在多个回调动画
                if (Array.isArray(this.outAction.action)) {
                    // 假定第0个动画回调时间最长
                    this.outAction.action.map(function (item, index) {
                        if (index !== 0) {
                            item();
                        }
                    });
                    this.outAction.action[0]().call(function () {
                        _this.judgeViewOpen(viewArr);
                    });
                }
                else {
                    // 如果不是多个动画
                    this.outAction.action().call(function () {
                        _this.judgeViewOpen(viewArr);
                    });
                }
            }
            else {
                this.judgeViewOpen(viewArr);
            }
        };
        BaseHome.prototype.judgeViewOpen = function (viewArr) {
            var _this = this;
            // 关闭所有决策树内可关闭的view
            Object.keys(this.judgeBaseArray).map(function (item) {
                _this.judgeBaseArray[item].const.map(function (_) {
                    if (typeof _ === "number") {
                        App.ViewManager.close(_);
                    }
                });
            });
            // 清空outAction
            this.outAction = {};
            // 打开特定的view
            viewArr.const.map(function (item) {
                App.ViewManager.open(item);
            });
            viewArr.callback[0] && viewArr.callback[0]();
            this.outAction = { action: viewArr.action };
        };
        /**
         * 决策树下一个view change方法
         */
        BaseHome.prototype.nextJudgeViewChange = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.judgeIndex < this.currentJudgeArray.length - 1)) return [3 /*break*/, 3];
                            console.log('here is judgeIndex');
                            console.log(this.judgeIndex);
                            if (!(this.judgeIndex === -1)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.resetQuestion()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            console.log('here is currentJudgeArray');
                            console.log(this.currentJudgeArray);
                            this.judgeIndex++;
                            this.judgeViewChange(this.currentJudgeArray[this.judgeIndex]);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 从一个决策树至下一个决策树需要调用，用以重置judgeIndex
         */
        BaseHome.prototype.restartJudgeIndex = function () {
            console.log("here run restart");
            this.judgeIndex = -1;
            // this.judgeViewChange(this.judgeBaseArray.longTap)
        };
        /**
         * 跳出决策树，用以在决策完成之后调用
         */
        BaseHome.prototype.skipJudge = function () {
            this.currentJudgeArray = [];
            this.judgeIndex = 0;
            this.judgeStatus = false;
        };
        /**
         * 进入下一个题目
         */
        BaseHome.prototype.resetQuestion = function () {
            return __awaiter(this, void 0, void 0, function () {
                var currentSavePoint, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            currentSavePoint = App.Savepoint.takeSavepoint();
                            if (currentSavePoint && currentSavePoint.questionInfo) {
                                delete currentSavePoint.questionInfo.answers;
                            }
                            currentSavePoint.questionInfo.questionId = App.Savepoint.tempData.nextQuestion.id;
                            App.Savepoint.cacheSavepoint(currentSavePoint);
                            return [4 /*yield*/, Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(), currentSavePoint)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 进入决策树之前的钩子，用于子类继承
         */
        BaseHome.prototype.beforeJoinJudge = function () { };
        /**
         * 生成当前决策树内的可执行数组
         */
        BaseHome.prototype.createJudgeArr = function (array) {
            var _this = this;
            // 将longTap和repeat推入决策树数组
            this.currentJudgeArray = [
                this.judgeBaseArray.longTap
            ];
            if (this.judgeBaseArray.repeat) {
                this.currentJudgeArray.push(this.judgeBaseArray.repeat);
            }
            var temp;
            array ? "" : (array = []);
            // 获取纯粹的npc词汇
            var pureNPCArray = array.filter(function (item) {
                return !(/!!STAR/.test(item.content) || item.npc === 'teacher' || item.npc === 'boss');
            });
            var _loop_1 = function (i) {
                temp = {
                    const: this_1.judgeBaseArray.npc.const,
                    callback: [
                        function () {
                            _this.judgeBaseArray.npc.callback[0].bind(null, pureNPCArray[i])();
                        },
                    ],
                };
                if (this_1.judgeBaseArray.npc.action) {
                    temp.action = this_1.judgeBaseArray.npc.action;
                }
                this_1.currentJudgeArray.push(temp);
            };
            var this_1 = this;
            // 将纯粹npc推入决策树数组
            for (var i = 0; i < pureNPCArray.length; i++) {
                _loop_1(i);
            }
            // 将teacher npc推入决策树数组
            var teacherArray = array.filter(function (item) {
                return item.npc === "teacher";
            });
            teacherArray.map(function (item, index) {
                temp = {
                    const: _this.judgeBaseArray.teacher.const,
                    callback: [function () {
                            _this.judgeBaseArray.teacher.callback[0].bind(null, item)();
                            App.Savepoint.tempData && App.Savepoint.tempData.nextQuestion
                                ?
                                    _this.restartJudgeIndex()
                                :
                                    (function () {
                                        _this.skipJudge();
                                        _this.lastView = _this.judgeBaseArray.teacher.const[0];
                                    })();
                        }]
                };
                if (_this.judgeBaseArray.teacher.action) {
                    temp.action = _this.judgeBaseArray.teacher.action;
                }
                _this.currentJudgeArray.push(temp);
            });
        };
        return BaseHome;
    }(BaseEuiView));
    DDI.BaseHome = BaseHome;
    __reflect(BaseHome.prototype, "DDI.BaseHome");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 15-3-20.
 */
var UTFMsgByJson = (function (_super) {
    __extends(UTFMsgByJson, _super);
    /**
     * 构造函数
     */
    function UTFMsgByJson() {
        return _super.call(this) || this;
    }
    /**
     * 消息解析
     * @param msg
     */
    UTFMsgByJson.prototype.decode = function (msg) {
        return JSON.parse(msg);
    };
    /**
     * 消息封装
     * @param msg
     */
    UTFMsgByJson.prototype.encode = function (msg) {
        return JSON.stringify(msg);
    };
    return UTFMsgByJson;
}(UTFMsg));
__reflect(UTFMsgByJson.prototype, "UTFMsgByJson");
/**
 * Created by yangsong on 15-1-7.
 */
var BaseEuiLayer = (function (_super) {
    __extends(BaseEuiLayer, _super);
    function BaseEuiLayer() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.touchEnabled = false;
        return _this;
    }
    return BaseEuiLayer;
}(eui.UILayer));
__reflect(BaseEuiLayer.prototype, "BaseEuiLayer");
/**
 * Created by yangsong on 15-1-7.
 * Scene基类
 */
var BaseScene = (function () {
    /**
     * 构造函数
     */
    function BaseScene() {
        this._layers = new Array();
    }
    /**
     * 进入Scene调用
     */
    BaseScene.prototype.onEnter = function () {
    };
    /**
     * 退出Scene调用
     */
    BaseScene.prototype.onExit = function () {
        App.ViewManager.closeAll();
        this.removeAllLayer();
    };
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    BaseScene.prototype.addLayer = function (layer) {
        App.StageUtils.getStage().addChild(layer);
        this._layers.push(layer);
    };
    /**
     * 添加一个Layer到舞台
     * @param layer
     */
    BaseScene.prototype.addLayerAt = function (layer, index) {
        App.StageUtils.getStage().addChildAt(layer, index);
        this._layers.push(layer);
    };
    /**
     * 在舞台移除一个Layer
     * @param layer
     */
    BaseScene.prototype.removeLayer = function (layer) {
        App.StageUtils.getStage().removeChild(layer);
        this._layers.splice(this._layers.indexOf(layer), 1);
    };
    /**
     * Layer中移除所有
     * @param layer
     */
    BaseScene.prototype.layerRemoveAllChild = function (layer) {
        layer.removeChildren();
    };
    /**
     * 移除所有Layer
     */
    BaseScene.prototype.removeAllLayer = function () {
        while (this._layers.length) {
            var layer = this._layers[0];
            this.layerRemoveAllChild(layer);
            this.removeLayer(layer);
        }
    };
    return BaseScene;
}());
__reflect(BaseScene.prototype, "BaseScene");
/**
 * Created by yangsong on 15-1-7.
 */
var BaseSpriteLayer = (function (_super) {
    __extends(BaseSpriteLayer, _super);
    function BaseSpriteLayer() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = false;
        return _this;
    }
    return BaseSpriteLayer;
}(egret.DisplayObjectContainer));
__reflect(BaseSpriteLayer.prototype, "BaseSpriteLayer");
/**
 * Created by yangsong on 2014/11/28.
 * 场景管理类
 */
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    /**
     * 构造函数
     */
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this._scenes = {};
        return _this;
    }
    /**
     * 清空处理
     */
    SceneManager.prototype.clear = function () {
        var nowScene = this._scenes[this._currScene];
        if (nowScene) {
            nowScene.onExit();
            this._currScene = undefined;
        }
        this._scenes = {};
    };
    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    SceneManager.prototype.register = function (key, scene) {
        this._scenes[key] = scene;
    };
    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    SceneManager.prototype.runScene = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var nowScene = this._scenes[key];
        if (nowScene == null) {
            Log.warn("场景" + key + "不存在");
            return;
        }
        var oldScene = this._scenes[this._currScene];
        if (oldScene) {
            oldScene.onExit();
        }
        nowScene.onEnter.apply(nowScene, param);
        this._currScene = key;
    };
    /**
     * 获取当前Scene
     * @returns {number}
     */
    SceneManager.prototype.getCurrScene = function () {
        return this._currScene;
    };
    return SceneManager;
}(SingtonClass));
__reflect(SceneManager.prototype, "SceneManager");
var DDI;
(function (DDI) {
    var BaseLabel = (function (_super) {
        __extends(BaseLabel, _super);
        function BaseLabel($controller, $parent) {
            var _this = _super.call(this, $controller, $parent) || this;
            _this.interval = 150;
            _this.stop = false;
            _this.skinName = 'resource/ddi_skins/BaseLabel.exml';
            return _this;
        }
        Object.defineProperty(BaseLabel.prototype, "rectBackgroudColor", {
            get: function () {
                return this._rectBackgroudColor;
            },
            /**
             * 设置背景颜色
             */
            set: function (value) {
                this._rectBackgroudColor = value;
                if (this.rect) {
                    this.rect.fillColor = this._rectBackgroudColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "rectBorderRadius", {
            get: function () {
                return this._rectBorderRadius;
            },
            /**
             * 设置圆角
             */
            set: function (value) {
                this._rectBorderRadius = value;
                if (this.rect) {
                    this.rect.ellipseHeight = this._rectBorderRadius;
                    this.rect.ellipseWidth = this._rectBorderRadius;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "rectBackgroundAlpha", {
            get: function () {
                return this._rectBackgroundAlpha;
            },
            /**
             * 设置背景透明度
             */
            set: function (value) {
                this._rectBackgroundAlpha = value;
                if (this.rect) {
                    this.rect.fillAlpha = this._rectBackgroundAlpha;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "rectBorderColor", {
            get: function () {
                return this._rectBorderColor;
            },
            /**
             * 设置边框颜色
             */
            set: function (value) {
                this._rectBorderColor = value;
                if (this.rect) {
                    this.rect.strokeColor = this._rectBorderColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "rectBorderWidth", {
            get: function () {
                return this._rectBorderWidth;
            },
            /**
             * 设置边框宽度
             */
            set: function (value) {
                this._rectBorderWidth = value;
                if (this.rect) {
                    this.rect.strokeWeight = this._rectBorderWidth;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "labelText", {
            get: function () {
                return this._labelText;
            },
            /**
             * 设置文本
             */
            set: function (value) {
                this._labelText = value;
                if (this.label) {
                    this.label.text = this._labelText;
                    this.labelTextChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "labelFlow", {
            get: function () {
                return this._labelText;
            },
            /**
             * 设置折行文本
             */
            set: function (value) {
                this._labelText = value;
                if (this.label) {
                    this.label.textFlow = this.setSingleChar(this._labelText, 20);
                    this.labelTextChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * labelText更改
         */
        BaseLabel.prototype.labelTextChanged = function () {
            this.stop = false;
        };
        Object.defineProperty(BaseLabel.prototype, "labelMargin", {
            get: function () {
                return this._labelMargin;
            },
            /**
             * 设置文本外边距
             */
            set: function (value) {
                this._labelMargin = value;
                if (this.rect) {
                    this.rect.left = this._labelMargin.left;
                    this.rect.right = this._labelMargin.right;
                    this.rect.top = this._labelMargin.top;
                    this.rect.bottom = this._labelMargin.bottom;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseLabel.prototype, "labelTextFlow", {
            get: function () {
                return this._labelTextFlow;
            },
            /**
             * 设置文本textFlow
             */
            set: function (value) {
                this._labelTextFlow = value;
                if (this.label) {
                    this.label.textFlow = this._labelTextFlow;
                    this.labelTextChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        BaseLabel.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        /**
         * 折行
         * @param text 文本
         * @param number 一行的字数
         */
        BaseLabel.prototype.setSingleChar = function (text, number) {
            return App.StringUtils.setSingleChar(text, number);
        };
        /**
     * 开始打字机效果
     */
        BaseLabel.prototype.startType = function () {
            // 打字机是否完成的flag
            this.isComplete = true;
            // 打印之前的回调
            this.beforeStartType();
            if (this.isComplete) {
                this.isComplete = false;
                if (this.label.textFlow) {
                    this.text = this.label.textFlow;
                }
                else {
                    this.text = [{ text: this.label.text }];
                }
                this.typerEffect(this.label, this.text, this.startTyped);
                this.afterStartType();
            }
        };
        BaseLabel.prototype.afterStartType = function () {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapItem, this);
        };
        /**
         * 打印完成的回调函数
         * 用于子类继承
         */
        BaseLabel.prototype.startTyped = function () {
            this.isComplete = true;
        };
        /**
         * 开始打印之前的回调
         * 用于子类继承
         */
        BaseLabel.prototype.beforeStartType = function () { };
        /**
        * 文字打字机效果
        * obj           文本对象
        * content       文字
        */
        BaseLabel.prototype.typerEffect = function (obj, content, startTyped) {
            var _this = this;
            if (content === void 0) { content = []; }
            if (startTyped === void 0) { startTyped = null; }
            var len = content.length;
            var allType = new Array();
            for (var j = 0; j < len; j++) {
                allType = allType.concat(this.createMoreText(content[j]));
            }
            this.label.textFlow = [];
            this.label.text = '';
            var lens = allType.length;
            var _loop_2 = function (i) {
                var timer = setTimeout(function () {
                    if (!_this.stop) {
                        obj.appendElement(allType[i]);
                        if ((i >= lens - 1) && (startTyped != null)) {
                            startTyped();
                        }
                    }
                    else {
                        clearTimeout(timer);
                    }
                }, i * this_2.interval);
            };
            var this_2 = this;
            for (var i = 0; i < lens; i++) {
                _loop_2(i);
            }
        };
        /**
         * 创建textflow格式文本
         * @param obj {egret.ITextElement}
         */
        BaseLabel.prototype.createMoreText = function (obj) {
            var itArr = new Array();
            var deepObject = JSON.parse(JSON.stringify(obj));
            if (obj.text.length > 1) {
                for (var i = 0; i < obj.text.length; i++) {
                    deepObject.text = obj.text[i];
                    itArr.push({ text: obj.text[i], style: deepObject.style });
                }
            }
            else {
                itArr.push(deepObject);
            }
            return itArr;
        };
        BaseLabel.prototype.tapItem = function () {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tapItem, this);
            this.isComplete = true;
            this.stopType();
        };
        BaseLabel.prototype.outAnimation = function () {
            this.beforeOut();
            var twl = egret.Tween.get(this.contentGroup);
            return twl.to({ alpha: 0, scaleX: 0, scaleY: 0 }, 350, egret.Ease.sineIn);
        };
        /**
         * 退出之前的回调
         */
        BaseLabel.prototype.beforeOut = function () { };
        BaseLabel.prototype.stopType = function () {
            this.stop = true;
            console.log('stop typed run here iiiii');
            console.log(this.text);
            this.label.textFlow = this.text;
            this.startTyped();
        };
        return BaseLabel;
    }(BaseEuiView));
    DDI.BaseLabel = BaseLabel;
    __reflect(BaseLabel.prototype, "DDI.BaseLabel");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 15-1-14.
 * 背景音乐类
 */
var SoundBg = (function (_super) {
    __extends(SoundBg, _super);
    /**
     * 构造函数
     */
    function SoundBg() {
        var _this = _super.call(this) || this;
        _this._currBg = "";
        return _this;
    }
    /**
     * 停止当前音乐
     */
    SoundBg.prototype.stop = function () {
        if (this._currSoundChannel) {
            this._currSoundChannel.stop();
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
        this._pausePosition = null;
    };
    /**
     * 播放某个音乐
     * @param effectName
     */
    SoundBg.prototype.play = function (effectName) {
        if (this._currBg == effectName)
            return;
        this.stop();
        this._currBg = effectName;
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(sound);
        }
    };
    /**
     * 暂停
     */
    SoundBg.prototype.pause = function () {
        if (!this._currSoundChannel) {
            return;
        }
        this._pausePosition = this._currSoundChannel.position;
        this._currSoundChannel.stop();
    };
    /**
     * 恢复
     */
    SoundBg.prototype.resume = function () {
        if (!this._currSoundChannel) {
            return;
        }
        if (!this._pausePosition) {
            return;
        }
        this._currSound.play(this._pausePosition);
        this._pausePosition = null;
    };
    /**
     * 播放
     * @param sound
     */
    SoundBg.prototype.playSound = function (sound) {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play();
        this._currSoundChannel.volume = this._volume;
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundBg.prototype.setVolume = function (volume) {
        this._volume = volume;
        if (this._currSoundChannel) {
            this._currSoundChannel.volume = this._volume;
        }
    };
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    SoundBg.prototype.loadedPlay = function (key) {
        if (this._currBg == key) {
            this.playSound(RES.getRes(key));
        }
    };
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    SoundBg.prototype.checkCanClear = function (key) {
        return this._currBg != key;
    };
    return SoundBg;
}(BaseSound));
__reflect(SoundBg.prototype, "SoundBg", ["ISoundBg"]);
/**
 * Created by yangsong on 18-12-26.
 * 音效类(微信小游戏专用)
 */
var SoundBgWx = (function () {
    /**
     * 构造函数
     */
    function SoundBgWx() {
        this._audio = window["wx"].createInnerAudioContext();
        this._currBg = "";
    }
    /**
     * 停止当前音乐
     */
    SoundBgWx.prototype.stop = function () {
        this._audio.stop();
        this._currBg = "";
    };
    /**
     * 播放某个音乐
     * @param bgName
     */
    SoundBgWx.prototype.play = function (bgName) {
        if (this._currBg == bgName) {
            return;
        }
        this.stop();
        this._currBg = bgName;
        this._audio.src = App.ResourceUtils.getFileRealPath(this._currBg);
        this._audio.loop = true;
        this._audio.volume = this._volume;
        this._audio.startTime = 0;
        this._audio.play();
    };
    /**
     * 暂停
     */
    SoundBgWx.prototype.pause = function () {
        if (this._currBg.length == 0) {
            return;
        }
        this._audio.pause();
    };
    /**
     * 恢复
     */
    SoundBgWx.prototype.resume = function () {
        if (this._currBg.length == 0) {
            return;
        }
        this._audio.play();
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundBgWx.prototype.setVolume = function (volume) {
        this._volume = volume;
        if (this._audio) {
            this._audio.volume = this._volume;
        }
    };
    return SoundBgWx;
}());
__reflect(SoundBgWx.prototype, "SoundBgWx", ["ISoundBg"]);
/**
 * Created by yangsong on 15-1-14.
 * 音效类
 */
var SoundEffect = (function (_super) {
    __extends(SoundEffect, _super);
    /**
     * 构造函数
     */
    function SoundEffect() {
        var _this = _super.call(this) || this;
        _this._soundLoops = {};
        _this._soundChannels = {};
        return _this;
    }
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffect.prototype.play = function (effectName, loops) {
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(effectName, sound, loops);
        }
        else {
            this._soundLoops[effectName] = loops;
        }
    };
    /**
     * 播放
     * @param sound
     */
    SoundEffect.prototype.playSound = function (effectName, sound, loops) {
        var channel = sound.play(0, loops);
        channel.volume = this._volume;
        channel["name"] = effectName;
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
        this._soundChannels[channel["name"]] = channel;
    };
    /**
     * 播放完成
     */
    SoundEffect.prototype.onPlayComplete = function (e) {
        var channel = e.currentTarget;
        this.destroyChannel(channel);
    };
    /**
     * 销毁channel
     */
    SoundEffect.prototype.destroyChannel = function (channel) {
        channel.stop();
        channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
        delete this._soundChannels[channel["name"]];
    };
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffect.prototype.stop = function (effectName) {
        var channel = this._soundChannels[effectName];
        if (channel) {
            this.destroyChannel(channel);
        }
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundEffect.prototype.setVolume = function (volume) {
        this._volume = volume;
    };
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    SoundEffect.prototype.loadedPlay = function (key) {
        this.playSound(key, RES.getRes(key), this._soundLoops[key]);
        delete this._soundLoops[key];
    };
    return SoundEffect;
}(BaseSound));
__reflect(SoundEffect.prototype, "SoundEffect", ["ISoundEffect"]);
/*
 * Filename: /Library/WebServer/Documents/sean/egretProject/test/src/BaseBoard.ts
 * Path: /Library/WebServer/Documents/sean/egretProject/test
 * Created Date: Friday, September 25th 2020, 11:20:28 am
 * Author: sean
 * 基础类BaseBoard
 * Copyright (c) 2020 Your Company
 */
var DDI;
(function (DDI) {
    var BaseBoard = (function (_super) {
        __extends(BaseBoard, _super);
        function BaseBoard($controller, $parent) {
            var _this = _super.call(this, $controller, $parent) || this;
            _this.skinName = 'resource/ddi_skins/BaseBoard.exml';
            return _this;
        }
        Object.defineProperty(BaseBoard.prototype, "labelText", {
            get: function () {
                return this._labelText;
            },
            set: function (value) {
                this._labelText = value;
                if (this.label) {
                    this.label.text = this._labelText;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseBoard.prototype, "imgSource", {
            get: function () {
                return this._imgSource;
            },
            set: function (value) {
                this._imgSource = value;
                if (this.backImg) {
                    this.backImg.source = this._imgSource;
                }
            },
            enumerable: true,
            configurable: true
        });
        BaseBoard.prototype.initData = function () {
            _super.prototype.initData.call(this);
            this.label.text = this._labelText;
            this.backImg.source = this._imgSource;
        };
        return BaseBoard;
    }(BaseEuiView));
    DDI.BaseBoard = BaseBoard;
    __reflect(BaseBoard.prototype, "DDI.BaseBoard");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 15-1-14.
 * Sound管理类
 */
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    /**
     * 构造函数
     */
    function SoundManager() {
        var _this = _super.call(this) || this;
        //LocalStorage使用的key值
        _this.LocalStorageKey_Bg = "bgMusicFlag";
        _this.LocalStorageKey_Effect = "effectMusicFlag";
        _this.bgVolume = 0.5;
        _this.effectVolume = 0.5;
        if (App.DeviceUtils.IsWxGame) {
            _this.bg = new SoundBgWx();
            _this.effect = new SoundEffectWx();
        }
        else {
            _this.bg = new SoundBg();
            _this.effect = new SoundEffect();
        }
        _this.bg.setVolume(_this.bgVolume);
        _this.effect.setVolume(_this.effectVolume);
        _this.setDefaultSwitchState();
        return _this;
    }
    /**
     * 设置背景音乐和音效的默认开关状态
     */
    SoundManager.prototype.setDefaultSwitchState = function () {
        var bgMusicFlag = egret.localStorage.getItem(this.LocalStorageKey_Bg);
        if (!bgMusicFlag) {
            this.bgOn = true;
        }
        else {
            this.bgOn = bgMusicFlag == "1";
        }
        var effectMusicFlag = egret.localStorage.getItem(this.LocalStorageKey_Effect);
        if (!effectMusicFlag) {
            this.effectOn = true;
        }
        else {
            this.effectOn = effectMusicFlag == "1";
        }
        Log.info("背景音乐：", this.bgOn);
        Log.info("音效：", this.effectOn);
    };
    /**
     * 播放音效
     * @param effectName
     */
    SoundManager.prototype.playEffect = function (effectName, loops) {
        if (loops === void 0) { loops = 1; }
        if (!this.effectOn)
            return;
        this.effect.play(effectName, loops);
    };
    /**
     * 停止音效播放
     * @param effectName
     */
    SoundManager.prototype.stopEffect = function (effectName) {
        this.effect.stop(effectName);
    };
    /**
     * 播放背景音乐
     * @param key
     */
    SoundManager.prototype.playBg = function (bgName) {
        this.currBg = bgName;
        if (!this.bgOn)
            return;
        this.bg.play(bgName);
    };
    /**
     * 停止背景音乐
     */
    SoundManager.prototype.stopBg = function () {
        this.bg.stop();
    };
    /**
     * 暂停背景音乐
     */
    SoundManager.prototype.pauseBg = function () {
        if (!this.bgOn)
            return;
        this.bg.pause();
    };
    /**
     * 恢复背景音乐
     */
    SoundManager.prototype.resumeBg = function () {
        if (!this.bgOn)
            return;
        this.bg.resume();
    };
    /**
     * 设置音效是否开启
     * @param $isOn
     */
    SoundManager.prototype.setEffectOn = function ($isOn) {
        this.effectOn = $isOn;
        egret.localStorage.setItem(this.LocalStorageKey_Effect, $isOn ? "1" : "0");
    };
    /**
     * 设置背景音乐是否开启
     * @param $isOn
     */
    SoundManager.prototype.setBgOn = function ($isOn) {
        this.bgOn = $isOn;
        egret.localStorage.setItem(this.LocalStorageKey_Bg, $isOn ? "1" : "0");
        if (!this.bgOn) {
            this.stopBg();
        }
        else {
            if (this.currBg) {
                this.playBg(this.currBg);
            }
        }
    };
    /**
     * 设置背景音乐音量
     * @param volume
     */
    SoundManager.prototype.setBgVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.bgVolume = volume;
        this.bg.setVolume(this.bgVolume);
    };
    /**
     * 获取背景音乐音量
     * @returns {number}
     */
    SoundManager.prototype.getBgVolume = function () {
        return this.bgVolume;
    };
    /**
     * 设置音效音量
     * @param volume
     */
    SoundManager.prototype.setEffectVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.effectVolume = volume;
        this.effect.setVolume(this.effectVolume);
    };
    /**
     * 获取音效音量
     * @returns {number}
     */
    SoundManager.prototype.getEffectVolume = function () {
        return this.effectVolume;
    };
    Object.defineProperty(SoundManager.prototype, "bgIsOn", {
        /**
         * 背景音乐是否已开启
         * @returns {boolean}
         */
        get: function () {
            return this.bgOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "effectIsOn", {
        /**
         * 音效是否已开启
         * @returns {boolean}
         */
        get: function () {
            return this.effectOn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 音乐文件清理时间
     * @type {number}
     */
    SoundManager.CLEAR_TIME = 3 * 60 * 1000;
    return SoundManager;
}(SingtonClass));
__reflect(SoundManager.prototype, "SoundManager");
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**
     * Swf文档类
     * */
    var Swf = (function () {
        function Swf(swfData, assetManager, fps) {
            if (fps === void 0) { fps = 24; }
            this._swfData = swfData;
            this._assetManager = assetManager;
            this._createDisplayFuns = new Object();
            this._createDisplayFuns[Swf.dataKey_Sprite] = this.createSprite;
            this._createDisplayFuns[Swf.dataKey_MovieClip] = this.createMovie;
            this._createDisplayFuns[Swf.dataKey_Image] = this.createImage;
            this._createDisplayFuns[Swf.dataKey_Scale9] = this.createS9Image;
            this._createDisplayFuns[Swf.dataKey_ShapeImg] = this.createShapeImage;
            this._createDisplayFuns[Swf.dataKey_TextField] = this.createTextField;
            this.swfUpdateManager = starlingswf.SwfUpdateManager.createSwfUpdateManager(fps);
        }
        Swf.prototype.createSprite = function (name, data, sprData) {
            if (data === void 0) { data = null; }
            if (sprData === void 0) { sprData = null; }
            if (sprData == null) {
                sprData = this._swfData[Swf.dataKey_Sprite][name];
            }
            var sprite = new starlingswf.SwfSprite();
            var length = sprData.length;
            var objData;
            var display;
            var fun;
            var swf;
            for (var i = 0; i < length; i++) {
                objData = sprData[i];
                fun = this._createDisplayFuns[objData[1]];
                if (fun == null)
                    continue;
                display = fun.apply(this, [objData[0], objData]);
                display.name = objData[9];
                display.x = objData[2];
                display.y = objData[3];
                if (objData[0] == Swf.dataKey_TextField) {
                    //                    display.y += objData[14] / 10;
                }
                if (objData[1] != Swf.dataKey_Scale9 && objData[1] != Swf.dataKey_ShapeImg) {
                    display.scaleX = objData[4];
                    display.scaleY = objData[5];
                }
                display.skewX = objData[6];
                display.skewY = objData[7];
                display.alpha = objData[8];
                sprite.addChild(display);
            }
            return sprite;
        };
        Swf.prototype.createMovie = function (name, data, cls) {
            if (data === void 0) { data = null; }
            if (cls === void 0) { cls = null; }
            var movieClipData = this._swfData[Swf.dataKey_MovieClip][name];
            var objectCountData = movieClipData["objCount"];
            var displayObjects = {};
            var displayObjectArray;
            var type;
            var count;
            var fun;
            var objName;
            for (objName in objectCountData) {
                type = objectCountData[objName][0];
                count = objectCountData[objName][1];
                displayObjectArray = displayObjects[objName] == null ? [] : displayObjects[objName];
                for (var i = 0; i < count; i++) {
                    fun = this._createDisplayFuns[type];
                    if (fun == null)
                        continue;
                    displayObjectArray.push(fun.apply(this, [objName, null]));
                }
                displayObjects[objName] = displayObjectArray;
            }
            var mc;
            if (cls == null) {
                mc = new starlingswf.SwfMovieClip(movieClipData["frames"], movieClipData["labels"], displayObjects, this);
            }
            else {
                mc = new cls(movieClipData["frames"], movieClipData["labels"], displayObjects, this);
            }
            mc.loop = movieClipData["loop"];
            return mc;
        };
        Swf.prototype.createImage = function (name, data) {
            if (data === void 0) { data = null; }
            var imageData = this._swfData[Swf.dataKey_Image][name];
            var bitmap = this._assetManager.createBitmap(name);
            bitmap.anchorOffsetX = imageData[0];
            bitmap.anchorOffsetY = imageData[1];
            return bitmap;
        };
        Swf.prototype.getTexture = function (name) {
            return this._assetManager.getTexture(name);
        };
        Swf.prototype.createS9Image = function (name, data) {
            if (data === void 0) { data = null; }
            var scale9Data = this._swfData[Swf.dataKey_Scale9][name];
            var bitmap = this._assetManager.createBitmap(name);
            bitmap.scale9Grid = new egret.Rectangle(scale9Data[0], scale9Data[1], scale9Data[2], scale9Data[3]);
            if (data != null) {
                bitmap.width = data[10];
                bitmap.height = data[11];
            }
            return bitmap;
        };
        Swf.prototype.createShapeImage = function (name, data) {
            if (data === void 0) { data = null; }
            var bitmap = this._assetManager.createBitmap(name);
            bitmap.fillMode = egret.BitmapFillMode.REPEAT;
            if (data != null) {
                bitmap.width = data[10];
                bitmap.height = data[11];
            }
            return bitmap;
        };
        Swf.prototype.createTextField = function (name, data) {
            if (data === void 0) { data = null; }
            var textfield = new egret.TextField();
            if (data != null) {
                textfield.width = data[10];
                textfield.height = data[11];
                //textfield.fontFamily = <string>data[12];
                textfield.textColor = data[13];
                textfield.size = data[14];
                textfield.textAlign = data[15];
                //textfield.italic = data[16];
                //textfield.bold = data[17];
                textfield.text = data[18];
            }
            return textfield;
        };
        /**
         * 是否有某个Sprite
         * */
        Swf.prototype.hasSprite = function (name) {
            return this._swfData[Swf.dataKey_Sprite][name] != null;
        };
        /**
         * 是否有某个MovieClip
         * */
        Swf.prototype.hasMovieClip = function (name) {
            return this._swfData[Swf.dataKey_MovieClip][name] != null;
        };
        /**
         * 是否有某个Image
         * */
        Swf.prototype.hasImage = function (name) {
            return this._swfData[Swf.dataKey_Image][name] != null;
        };
        /**
         * 是否有某个S9Image
         * */
        Swf.prototype.hasS9Image = function (name) {
            return this._swfData[Swf.dataKey_Scale9][name] != null;
        };
        /**
         * 是否有某个S9Image
         * */
        Swf.prototype.hasShapeImage = function (name) {
            return this._swfData[Swf.dataKey_ShapeImg][name] != null;
        };
        Swf.dataKey_Sprite = "spr";
        Swf.dataKey_Image = "img";
        Swf.dataKey_MovieClip = "mc";
        Swf.dataKey_TextField = "text";
        Swf.dataKey_Button = "btn";
        Swf.dataKey_Scale9 = "s9";
        Swf.dataKey_ShapeImg = "shapeImg";
        Swf.dataKey_Component = "comp";
        Swf.dataKey_Particle = "particle";
        return Swf;
    }());
    starlingswf.Swf = Swf;
    __reflect(Swf.prototype, "starlingswf.Swf");
})(starlingswf || (starlingswf = {}));
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**
     * swf资源管理器
     * */
    var SwfAssetManager = (function () {
        function SwfAssetManager() {
            this._sheets = {};
            this._textures = {};
        }
        SwfAssetManager.prototype.addSpriteSheet = function (name, spriteSheep) {
            this._sheets[name] = spriteSheep;
        };
        SwfAssetManager.prototype.addTexture = function (name, texture) {
            this._textures[name] = texture;
        };
        SwfAssetManager.prototype.createBitmap = function (name) {
            var texture = this.getTexture(name);
            if (texture == null)
                return null;
            var bitmap = new egret.Bitmap();
            bitmap.texture = texture;
            return bitmap;
        };
        SwfAssetManager.prototype.getTexture = function (name) {
            var texture;
            var sheet;
            var key;
            for (key in this._sheets) {
                sheet = this._sheets[key];
                texture = sheet.getTexture(name);
                if (texture != null)
                    break;
            }
            if (texture == null)
                texture = this._textures[name];
            return texture;
        };
        return SwfAssetManager;
    }());
    starlingswf.SwfAssetManager = SwfAssetManager;
    __reflect(SwfAssetManager.prototype, "starlingswf.SwfAssetManager");
})(starlingswf || (starlingswf = {}));
/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /** 动画更新管理器 */
    var SwfUpdateManager = (function () {
        function SwfUpdateManager() {
        }
        SwfUpdateManager.createSwfUpdateManager = function (fps) {
            var updateManager = new SwfUpdateManager();
            updateManager._animations = [];
            updateManager._addQueue = [];
            updateManager._removeQueue = [];
            updateManager._currentTime = 0;
            updateManager.setFps(fps);
            App.TimerManager.doFrame(1, 0, updateManager.update, updateManager);
            return updateManager;
        };
        SwfUpdateManager.prototype.clear = function () {
            this._addQueue.splice(0);
            this._removeQueue.splice(0);
            this._animations.splice(0);
        };
        SwfUpdateManager.prototype.stop = function () {
            this.clear();
            App.TimerManager.remove(this.update, this);
        };
        SwfUpdateManager.prototype.play = function () {
            App.TimerManager.doFrame(1, 0, this.update, this);
        };
        SwfUpdateManager.prototype.setFps = function (fps) {
            this._fps = fps;
            this._fpsTime = 1000 / fps;
        };
        SwfUpdateManager.prototype.addSwfAnimation = function (animation) {
            this._addQueue.push(animation);
        };
        SwfUpdateManager.prototype.removeSwfAnimation = function (animation) {
            this._removeQueue.push(animation);
            var addIndex = this._addQueue.indexOf(animation);
            if (addIndex != -1) {
                this._addQueue.splice(addIndex, 1);
            }
        };
        SwfUpdateManager.prototype.updateAdd = function () {
            var len = this._addQueue.length;
            var index;
            var animation;
            for (var i = 0; i < len; i++) {
                animation = this._addQueue.pop();
                index = this._animations.indexOf(animation);
                if (index == -1) {
                    this._animations.push(animation);
                }
            }
        };
        SwfUpdateManager.prototype.updateRemove = function () {
            var len = this._removeQueue.length;
            var index;
            var animation;
            for (var i = 0; i < len; i++) {
                animation = this._removeQueue.pop();
                index = this._animations.indexOf(animation);
                if (index != -1) {
                    this._animations.splice(index, 1);
                }
            }
        };
        SwfUpdateManager.prototype.update = function (time) {
            this._currentTime += time;
            if (this._currentTime < this._fpsTime) {
                return;
            }
            this._currentTime -= this._fpsTime;
            this._update();
            var jumpFlag = 0;
            while (this._currentTime > this._fpsTime) {
                this._currentTime -= this._fpsTime;
                jumpFlag++;
                if (jumpFlag < 4) {
                    this._update();
                }
            }
        };
        SwfUpdateManager.prototype._update = function () {
            this.updateRemove();
            this.updateAdd();
            var len = this._animations.length;
            for (var i = 0; i < len; i++) {
                this._animations[i].update();
            }
        };
        return SwfUpdateManager;
    }());
    starlingswf.SwfUpdateManager = SwfUpdateManager;
    __reflect(SwfUpdateManager.prototype, "starlingswf.SwfUpdateManager");
})(starlingswf || (starlingswf = {}));
/*
 * Filename: /Library/WebServer/Documents/sean/egretProject/test/src/Components/ReStepOneLongTapBaseView.ts
 * Path: /Library/WebServer/Documents/sean/egretProject/test
 * Created Date: Friday, September 25th 2020, 2:52:40 pm
 * Author: sean
 *
 * Copyright (c) 2020 Your Company
 */
var DDI;
(function (DDI) {
    var BaseLongTap = (function (_super) {
        __extends(BaseLongTap, _super);
        function BaseLongTap($controller, $parent) {
            var _this = _super.call(this, $controller, $parent) || this;
            // 业务id
            _this.longTapList = [];
            _this.funBeginArr = [];
            _this.funEndArr = [];
            _this.timeStamp = 9999999999999;
            // 长按时间
            _this.delay = 500;
            _this.bottom = 50;
            _this.maskColor = 0x5640BC;
            _this.skinName = 'resource/ddi_skins/BaseLongTap.exml';
            _this.dataProvider = new eui.ArrayCollection();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        BaseLongTap.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
            //布局
            var layout = new eui.VerticalLayout();
            layout.horizontalAlign = "center";
            layout.gap = 0;
            // //创建一个列表
            this.list = new eui.List();
            this.list.itemRenderer = LongTapItemRender;
            this.list.itemRendererSkinName = "resource/ddi_skins/RenderLabel.exml";
            this.list.dataProvider = this.dataProvider;
            this.list.layout = layout;
            this.list.selectedIndex = 1;
            this.list.useVirtualLayout = true;
            // // //创建一个 Scroller
            this.scroller = new eui.Scroller();
            this.scroller.percentWidth = this.scroller.percentHeight = 100;
            this.scroller.top = 30;
            this.scroller.bottom = 20;
            this.scroller.viewport = this.list;
            this.contentGroup.addChild(this.scroller);
            this.list.touchEnabled = true;
            this.longTapToStage();
            // this.list.addEventListener
        };
        BaseLongTap.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        BaseLongTap.prototype.longTapToStage = function () {
            var _this = this;
            this.scroller.addEventListener(egret.Event.RENDER, function () {
                _this.group.bottom = _this.scroller.height + _this.bottom;
            }, this);
        };
        /**
         * 添加到stage的回调
         * 用于子类继承
         */
        BaseLongTap.prototype.onAddToStage = function () { };
        BaseLongTap.prototype.startAnimation = function () {
            this.group.alpha = 1;
            var tweens = egret.Tween.get(this.group);
            var leftWidth = (this.stage.stageWidth - this.group.width) / 2;
            var width = this.group.width;
            this.group.horizontalCenter = -(leftWidth + width);
            return tweens.to({ horizontalCenter: 0 }, 450, egret.Ease.sineIn);
        };
        // 清除事件监听器
        BaseLongTap.prototype.clearEventListener = function () {
            var _this = this;
            // setTimeout(() => {
            if (this.funBeginArr && this.funBeginArr.length > 0) {
                this.longTapList.map(function (item, index) {
                    var ct = _this.list.$children[index];
                    ct.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.funBeginArr[index], _this);
                    ct.removeEventListener(egret.TouchEvent.TOUCH_END, _this.funEndArr[index], _this);
                });
                // 清空array
                this.funBeginArr = [];
                this.funEndArr = [];
                this.timeStamp = 9999999999999;
            }
            // }, 200);
        };
        // 循环添加事件监听
        BaseLongTap.prototype.circleAddEventToItem = function (payload) {
            //payload形参
            var _this = this;
            if (payload === void 0) { payload = {}; }
            setTimeout(function () {
                _this.longTapList.map(function (item, index) {
                    var ct = _this.list.$children[index];
                    if (!ct) {
                        return;
                    }
                    var mask = ct['maskRect'];
                    //支持自定义颜色
                    mask.fillColor = payload.fillColor || 0x5640BC;
                    _this.funBeginArr.push(_this.touchBegin.bind(_this, mask, ct));
                    _this.funEndArr.push(_this.touchEnd.bind(_this, mask, ct));
                    ct.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.funBeginArr[index], _this);
                    ct.addEventListener(egret.TouchEvent.TOUCH_END, _this.funEndArr[index], _this);
                });
            }, 200);
        };
        BaseLongTap.prototype.touchBegin = function (mask) {
            this.timeStamp = new Date().getTime();
            App.TweenUtils.selectIncrease(mask, 600, this.delay);
        };
        // 长按结束回调
        BaseLongTap.prototype.touchEnd = function (mask, ct) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(new Date().getTime() - this.timeStamp < this.delay - 100)) return [3 /*break*/, 1];
                            // 没有按到最后
                            this.touchCancel();
                            App.TweenUtils.selectIncrease(mask, 0, new Date().getTime() - this.timeStamp);
                            return [3 /*break*/, 4];
                        case 1:
                            mask.width = 600;
                            this.beforeAnimation();
                            return [4 /*yield*/, this.tapAnimation(ct, mask)];
                        case 2:
                            res = _a.sent();
                            console.log(res);
                            return [4 /*yield*/, this.touchSuccess(ct, mask)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        BaseLongTap.prototype.beforeAnimation = function () { };
        /**
         * 长按成功的回调
         */
        BaseLongTap.prototype.touchSuccess = function (ct, mask) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        BaseLongTap.prototype.tapAnimation = function (ct, mask) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var backRect = ct['backRect'];
                            var label = ct['label'];
                            var textField = ct['textField'];
                            //隐藏文本框
                            textField.visible = false;
                            backRect.fillColor = 0xffffff;
                            var extraRect = new eui.Rect();
                            extraRect.fillColor = 0xffffff;
                            extraRect.left = extraRect.right = extraRect.bottom = extraRect.top = 0;
                            ct.addChild(extraRect);
                            mask.visible = false;
                            label.visible = false;
                            ct.height = ct.height;
                            var tw = egret.Tween.get(extraRect);
                            tw.to({ left: -10, right: -10, bottom: -10, top: -10, alpha: 0 }, 500, egret.Ease.sineIn).call(function () {
                                // 移除extraRect
                                ct.removeChild(extraRect);
                                var tw = egret.Tween.get(backRect);
                                tw.to({ alpha: 1 }, 200, egret.Ease.sineIn).call(function () {
                                    label.visible = true;
                                    label.text = '·';
                                    label.textAlign = egret.HorizontalAlign.LEFT;
                                    label.textColor = 0x000000;
                                    label.left = (ct.width / 2) - 20;
                                    label.size = 50;
                                    label.verticalAlign = egret.VerticalAlign.MIDDLE;
                                    console.log('---- here run label visible');
                                    var _loop_3 = function (i) {
                                        var timer = setTimeout(function () {
                                            clearTimeout(timer);
                                            console.log(i);
                                            label.appendText('·');
                                            if (i == 1) {
                                                resolve('some thing here promise');
                                            }
                                            console.log(label.text);
                                        }, i * 300);
                                    };
                                    for (var i = 0; i < 2; i++) {
                                        _loop_3(i);
                                    }
                                });
                            });
                        })];
                });
            });
        };
        BaseLongTap.prototype.resetCT = function (ct, mask) {
            var backRect = ct['backRect'];
            var label = ct['label'];
            mask.visible = true;
            label.visible = true;
            // label.textAlign = egret.HorizontalAlign.LEFT;
            label.left = 20;
            label.size = 26;
            label.verticalAlign = egret.VerticalAlign.TOP;
            label.textColor = 0xffffff;
            backRect.fillColor = 0x313548;
            ct.height = undefined;
        };
        /**
         * 长按取消的回调
         */
        BaseLongTap.prototype.touchCancel = function () {
            App.TweenUtils.pause();
        };
        BaseLongTap.prototype.outAnimation = function () {
            this.beforeOut();
            return App.TweenUtils.fadeOut(this.group);
        };
        BaseLongTap.prototype.beforeOut = function () { };
        BaseLongTap.prototype.getQuestionId = function (root) {
            return __awaiter(this, void 0, void 0, function () {
                var questionId, questionInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(App.Savepoint.takeSavepoint().questionInfo && App.Savepoint.takeSavepoint().questionInfo.questionId)) return [3 /*break*/, 1];
                            // here run next
                            questionId = App.Savepoint.takeSavepoint().questionInfo.questionId;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, Api.Simulation.getRootQuestion(App.UserInfo.takeUserInfo().simulationId, root)];
                        case 2:
                            questionInfo = _a.sent();
                            questionId = questionInfo.simulationQuestionId;
                            _a.label = 3;
                        case 3: return [2 /*return*/, questionId];
                    }
                });
            });
        };
        BaseLongTap.prototype.cacheId = function () {
            var currentSavePoint = App.Savepoint.takeSavepoint();
            currentSavePoint.questionInfo
                ?
                    currentSavePoint.questionInfo.questionId = this.questionId
                :
                    currentSavePoint.questionInfo = {
                        questionId: this.questionId
                    };
            if (currentSavePoint.questionInfo.answers)
                App.Savepoint.cacheSavepoint(currentSavePoint);
            //comment duplicated code here
            // Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(), currentSavePoint);
        };
        BaseLongTap.prototype.getAndMixinList = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Api.Simulation.getQuestionDetail(this.questionId)];
                        case 1:
                            list = _a.sent();
                            this.longTapList = list.yySimulationOptionsList;
                            // 打乱后刷新list
                            this.mixinList(this.longTapList);
                            return [2 /*return*/];
                    }
                });
            });
        };
        BaseLongTap.prototype.mixinList = function (list) {
            var len = list.length;
            var tempList = new Array();
            for (var i = 0; i < len; i++) {
                var random = Number(Math.random() * len);
                if (!tempList[random]) {
                    tempList.splice(random, 0, this.longTapList[i]);
                }
                else if (tempList[random]) {
                    i--;
                }
            }
            this.longTapList = tempList;
            console.log(tempList);
        };
        /**
         * 发送答案
         */
        BaseLongTap.prototype.sendAnswers = function (ct) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Api.Simulation.answerQuestion({
                                simulationId: App.UserInfo.takeUserInfo().simulationId,
                                questionId: this.questionId,
                                cardId: App.UserInfo.takeCardId()
                            }, {
                                answers: [ct["_data"].id]
                            })];
                        case 1:
                            res = _a.sent();
                            App.Savepoint.tempData = res;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return BaseLongTap;
    }(BaseEuiView));
    DDI.BaseLongTap = BaseLongTap;
    __reflect(BaseLongTap.prototype, "DDI.BaseLongTap");
})(DDI || (DDI = {}));
/*
 * Filename: /Library/WebServer/Documents/sean/egretProject/test/src/Components/BasePhone.ts
 * Path: /Library/WebServer/Documents/sean/egretProject/test
 * Created Date: Friday, October 9th 2020, 10:36:46 am
 * Author: sean
 *
 * Copyright (c) 2020 Your Company
 */
var DDI;
(function (DDI) {
    var BaseMessage = (function (_super) {
        __extends(BaseMessage, _super);
        function BaseMessage(controller, parent) {
            var _this = _super.call(this, controller, parent) || this;
            _this.skinName = "resource/ddi_skins/BaseMessage.exml";
            return _this;
        }
        /**
         * initUI
         */
        BaseMessage.prototype.initUI = function () {
            _super.prototype.initUI.call(this);
        };
        /**
         * initData
         */
        BaseMessage.prototype.initData = function () {
            _super.prototype.initData.call(this);
        };
        Object.defineProperty(BaseMessage.prototype, "backGroundColor", {
            get: function () {
                return this._backGroudColor;
            },
            /**
             * 背景颜色
             */
            set: function (value) {
                this._backGroudColor = value;
                if (this.backRect) {
                    this.backRect.fillColor = this.backGroundColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseMessage.prototype, "arrowPosition", {
            get: function () {
                return this._arrowPosition;
            },
            /**
             * 箭头位置
             */
            set: function (value) {
                this._arrowPosition = value;
                if (this.arrow) {
                    switch (this._arrowPosition) {
                        case 'left':
                            this.arrow.x = 50;
                            break;
                        case 'center':
                            this.arrow.x = 200;
                            break;
                        case 'right':
                            this.arrow.x = 350;
                            break;
                        default: this.arrow.x = 350;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseMessage.prototype, "message", {
            get: function () {
                return this._message;
            },
            /**
             * message内容
             */
            set: function (value) {
                this._message = value;
                if (this.label) {
                    this.label.text = this._message;
                }
            },
            enumerable: true,
            configurable: true
        });
        return BaseMessage;
    }(BaseEuiView));
    DDI.BaseMessage = BaseMessage;
    __reflect(BaseMessage.prototype, "DDI.BaseMessage");
})(DDI || (DDI = {}));
/**
 * Created by yangsong on 2014/6/16.
 * StarlingSwf工厂类
 */
var StarlingSwfFactory = (function (_super) {
    __extends(StarlingSwfFactory, _super);
    /**
     * 构造函数
     */
    function StarlingSwfFactory() {
        var _this = _super.call(this) || this;
        _this.swfAssetsManager = new starlingswf.SwfAssetManager();
        _this.swfAssetsNames = new Array();
        _this.swfAssets = new Array();
        _this.swfData = {};
        return _this;
    }
    /**
     * 添加一个swf
     * @param name 唯一标识
     * @param swfData swf配置数据
     * @param spriteSheep 资源配置数据
     */
    StarlingSwfFactory.prototype.addSwf = function (name, swfData, spriteSheep) {
        if (this.swfAssetsNames.indexOf(name) != -1)
            return;
        if (swfData == null || spriteSheep == null) {
            console.log("SWF加载失败:" + name);
            return;
        }
        this.swfAssetsManager.addSpriteSheet(name, spriteSheep);
        var swf = new starlingswf.Swf(swfData, this.swfAssetsManager, 24);
        swf.name = name;
        StarlingSwfUtils.addSwf(swf);
        this.swfAssetsNames.push(name);
        this.swfAssets.push(swf);
    };
    /**
     * 停止列表中的swf
     * @param arr
     */
    StarlingSwfFactory.prototype.stopSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.stop();
            }
        }
    };
    /**
     * 播放列表中的swf
     * @param arr
     */
    StarlingSwfFactory.prototype.playSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.play();
            }
        }
    };
    /**
     * 清空所有swf
     */
    StarlingSwfFactory.prototype.clearSwfs = function () {
        while (this.swfAssets.length) {
            StarlingSwfUtils.removeSwf(this.swfAssets.pop());
        }
        while (this.swfAssetsNames.length) {
            this.swfAssetsNames.pop();
        }
        this.swfAssetsManager = new starlingswf.SwfAssetManager();
    };
    /**
     * 清空
     */
    StarlingSwfFactory.prototype.clear = function () {
        this.clearSwfs();
    };
    /**
     * 创建一个StarlingSwfMovieClip
     * @param name mc的名字
     * @returns {StarlingSwfMovieClip}
     */
    StarlingSwfFactory.prototype.makeMc = function (name) {
        var mc = StarlingSwfUtils.createMovie("mc_" + name, null, StarlingSwfMovieClip);
        if (mc == null) {
            console.log("SWF创建失败: " + name);
        }
        return mc;
    };
    /**
     * 创建一个Bitmap
     * @param name 图片的名称
     * @returns {egret.Bitmap}
     */
    StarlingSwfFactory.prototype.makeImage = function (name) {
        return StarlingSwfUtils.createImage("img_" + name);
    };
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {egret.Texture}
     */
    StarlingSwfFactory.prototype.getTexture = function (name) {
        return StarlingSwfUtils.getTexture("img_" + name);
    };
    return StarlingSwfFactory;
}(SingtonClass));
__reflect(StarlingSwfFactory.prototype, "StarlingSwfFactory");
/**
 * Created by yangsong on 2014/6/16.
 * 自定义SwfMovieClip类，带有帧处理函数
 */
var StarlingSwfMovieClip = (function (_super) {
    __extends(StarlingSwfMovieClip, _super);
    /**
     * 构造函数
     * @param frames
     * @param labels
     * @param displayObjects
     * @param ownerSwf
     */
    function StarlingSwfMovieClip(frames, labels, displayObjects, ownerSwf) {
        var _this = _super.call(this, frames, labels, displayObjects, ownerSwf) || this;
        _this.frameActions = {};
        _this.preFrame = -1;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    /**
     * 移除舞台处理函数
     */
    StarlingSwfMovieClip.prototype.onRemove = function () {
        this.stop();
    };
    /**
     * 设置帧事件
     * @param $frame 第几帧
     * @param $action 执行函数
     * @param $actionObj 执行函数所属对象
     * @param $param 执行函数所需参数
     */
    StarlingSwfMovieClip.prototype.setFrameAction = function ($frame, $action, $actionObj, $param) {
        if ($param === void 0) { $param = null; }
        this.frameActions[$frame] = [$action, $actionObj, $param];
    };
    /**
     * 设置mc播放完成执行的函数
     * @param $action 执行函数
     * @param $actionObj 执行函数所属对象
     */
    StarlingSwfMovieClip.prototype.setCompleteAction = function ($action, $actionObj) {
        this.complateFunc = $action;
        this.complateObj = $actionObj;
        this.addEventListener(egret.Event.COMPLETE, this.onPlayend, this);
    };
    /**
     * 播放结束执行函数
     */
    StarlingSwfMovieClip.prototype.onPlayend = function () {
        if (this.complateFunc) {
            this.complateFunc.call(this.complateObj);
        }
    };
    /**
     * 播放
     * @param frame
     */
    StarlingSwfMovieClip.prototype.goToPlay = function (frame) {
        this.preFrame = -1;
        this.currFrameName = frame;
        this.gotoAndPlay(frame);
    };
    /**
     * 重写setCurrentFrame函数，处理帧事件
     */
    StarlingSwfMovieClip.prototype.setCurrentFrame = function (frame) {
        _super.prototype.setCurrentFrame.call(this, frame);
        var currFrame = this.getCurrentFrame();
        if (this.preFrame != currFrame) {
            this.preFrame = currFrame;
            if (this.frameActions && this.frameActions[currFrame]) {
                var arr = this.frameActions[currFrame];
                if (arr[2])
                    arr[0].call(arr[1], arr[2]);
                else
                    arr[0].call(arr[1]);
            }
        }
    };
    /**
     * 销毁
     */
    StarlingSwfMovieClip.prototype.dispose = function () {
        this.stop();
        this.removeEventListener(egret.Event.COMPLETE, this.onPlayend, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        App.DisplayUtils.removeFromParent(this);
        this.complateFunc = null;
        this.complateObj = null;
        this.frameActions = null;
    };
    return StarlingSwfMovieClip;
}(starlingswf.SwfMovieClip));
__reflect(StarlingSwfMovieClip.prototype, "StarlingSwfMovieClip");
/**
 * Created by lcj on 14-6-18.
 * StarlingSwf工具类
 */
var StarlingSwfUtils = (function () {
    function StarlingSwfUtils() {
    }
    /**
     * 函数游戏内用到的swf
     * @param swf
     */
    StarlingSwfUtils.addSwf = function (swf) {
        StarlingSwfUtils.swfList.push(swf);
    };
    /**
     * 在缓存中移除一个swf
     * @param swf
     */
    StarlingSwfUtils.removeSwf = function (swf) {
        var index = StarlingSwfUtils.swfList.indexOf(swf);
        if (index != -1)
            StarlingSwfUtils.swfList.splice(index, 1);
    };
    /**
     * 创建Sprite
     * @param name Sprite名称
     * @param data
     * @param sprData
     * @returns {*}
     */
    StarlingSwfUtils.createSprite = function (name, data, sprData) {
        if (data === void 0) { data = null; }
        if (sprData === void 0) { sprData = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasSprite(name)) {
                return swf.createSprite(name, data, sprData);
            }
        }
        return null;
    };
    /**
     * 创建Bitmap
     * @param name Bitmap名称
     * @param data
     * @returns {*}
     */
    StarlingSwfUtils.createImage = function (name, data) {
        if (data === void 0) { data = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasImage(name)) {
                return swf.createImage(name, data);
            }
        }
        return null;
    };
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {*}
     */
    StarlingSwfUtils.getTexture = function (name) {
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasImage(name)) {
                return swf.getTexture(name);
            }
        }
        return null;
    };
    /**
     * 创建一个SwfMovieClip
     * @param name SwfMovieClip名称
     * @param data
     * @param cls
     * @returns {*}
     */
    StarlingSwfUtils.createMovie = function (name, data, cls) {
        if (data === void 0) { data = null; }
        if (cls === void 0) { cls = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasMovieClip(name)) {
                return swf.createMovie(name, data, cls);
            }
        }
        return null;
    };
    /**
     * 创建一个九宫格图片
     * @param name 图片名称
     * @param data
     * @returns {*}
     */
    StarlingSwfUtils.createS9Image = function (name, data) {
        if (data === void 0) { data = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasS9Image(name)) {
                return swf.createS9Image(name, data);
            }
        }
        return null;
    };
    /**
     * 创建ShapeImage
     * @param name ShapeImage名称
     * @param data
     * @returns {*}
     */
    StarlingSwfUtils.createShapeImage = function (name, data) {
        if (data === void 0) { data = null; }
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.hasShapeImage(name)) {
                return swf.createShapeImage(name, data);
            }
        }
        return null;
    };
    /**
     * 获取缓存中一个Swf
     * @param name 名称
     * @returns {*}
     */
    StarlingSwfUtils.getSwf = function (name) {
        var l = StarlingSwfUtils.swfList.length;
        for (var i = 0; i < l; i++) {
            var swf = StarlingSwfUtils.swfList[i];
            if (swf.name == name) {
                return swf;
            }
        }
        return null;
    };
    /**
     * 根据一个两帧mc自定义Button
     * @param btn
     * @param onClick
     * @param thisObj
     */
    StarlingSwfUtils.fixButton = function (btn, onClick, thisObj) {
        if (StarlingSwfUtils.firstAddBtn) {
            StarlingSwfUtils.firstAddBtn = false;
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            egret.MainContext.instance.stage.addEventListener(egret.Event.LEAVE_STAGE, this.onTouchEnd, this);
        }
        var data = new StarlingSwfButtonData();
        data.btn = btn;
        data.onClick = onClick;
        data.thisObj = thisObj;
        StarlingSwfUtils.btnList.push(data);
        btn.touchEnabled = true;
        btn.gotoAndStop(0);
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnTouchBegin, btn);
    };
    StarlingSwfUtils.onBtnTouchBegin = function (event) {
        var btn = event.currentTarget;
        var l = StarlingSwfUtils.btnList.length;
        for (var i = 0; i < l; i++) {
            var data = StarlingSwfUtils.btnList[i];
            if (data.btn == btn) {
                data.touchStageX = event.stageX;
                data.touchStageY = event.stageY;
                btn.gotoAndStop(1);
                break;
            }
        }
    };
    StarlingSwfUtils.onTouchEnd = function (event) {
        var l = StarlingSwfUtils.btnList.length;
        for (var i = 0; i < l; i++) {
            var data = StarlingSwfUtils.btnList[i];
            if (data.touchStageX != -1) {
                if (event.stageX && Math.abs(data.touchStageX - event.stageX) < 10 && Math.abs(data.touchStageY - event.stageY) < 10) {
                    if (data.onClick) {
                        data.onClick.call(data.thisObj, event);
                    }
                }
                data.touchStageX = -1;
                data.touchStageY = -1;
                data.btn.gotoAndStop(0);
            }
        }
    };
    StarlingSwfUtils.swfList = [];
    StarlingSwfUtils.btnList = [];
    StarlingSwfUtils.firstAddBtn = true;
    return StarlingSwfUtils;
}());
__reflect(StarlingSwfUtils.prototype, "StarlingSwfUtils");
var StarlingSwfButtonData = (function () {
    function StarlingSwfButtonData() {
        this.touchStageX = -1;
        this.touchStageY = -1;
    }
    return StarlingSwfButtonData;
}());
__reflect(StarlingSwfButtonData.prototype, "StarlingSwfButtonData");
/**
 * Created by yangsong on 15-11-4.
 */
var AllAsyncExecutor = (function () {
    /**
     * 构造函数
     */
    function AllAsyncExecutor() {
        this._functions = new Array();
        this._complateNum = 0;
    }
    /**
     * 设置全部执行完成处理函数
     * @param callBack 此队列处理完成执行函数
     * @param callBackTarget 此队列处理完成执行函数所属对象
     */
    AllAsyncExecutor.prototype.setCallBack = function (callBack, callBackTarget) {
        this._callBack = callBack;
        this._callBackTarget = callBackTarget;
    };
    /**
     * 注册需要队列处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    AllAsyncExecutor.prototype.regist = function ($func, $thisObj) {
        this._functions.push([$func, $thisObj]);
    };
    /**
     * 开始执行
     */
    AllAsyncExecutor.prototype.start = function () {
        App.ArrayUtils.forEach(this._functions, function (arr) {
            arr[0].call(arr[1]);
        }, this);
    };
    /**
     * 执行完成
     */
    AllAsyncExecutor.prototype.complate = function () {
        if (!this._functions) {
            return;
        }
        this._complateNum++;
        if (this._complateNum == this._functions.length) {
            if (this._callBack) {
                this._callBack.call(this._callBackTarget);
            }
            this._callBack = null;
            this._callBackTarget = null;
            this._functions = null;
        }
    };
    return AllAsyncExecutor;
}());
__reflect(AllAsyncExecutor.prototype, "AllAsyncExecutor");
/**
 * Created by Saco on 2015/9/16.
 */
var AnchorUtils = (function (_super) {
    __extends(AnchorUtils, _super);
    function AnchorUtils() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    AnchorUtils.prototype.init = function () {
        this.injectAnchor();
    };
    AnchorUtils.prototype.setAnchorX = function (target, value) {
        target["anchorX"] = value;
    };
    AnchorUtils.prototype.setAnchorY = function (target, value) {
        target["anchorY"] = value;
    };
    AnchorUtils.prototype.setAnchor = function (target, value) {
        target["anchorX"] = target["anchorY"] = value;
    };
    AnchorUtils.prototype.getAnchor = function (target) {
        if (target["anchorX"] != target["anchorY"]) {
            console.log("target's anchorX != anchorY");
        }
        return target["anchorX"] || 0;
    };
    AnchorUtils.prototype.getAnchorY = function (target) {
        return target["anchorY"] || 0;
    };
    AnchorUtils.prototype.getAnchorX = function (target) {
        return target["anchorX"] || 0;
    };
    AnchorUtils.prototype.injectAnchor = function () {
        var self = this;
        Object.defineProperty(egret.DisplayObject.prototype, "width", {
            get: function () {
                return this.$getWidth();
            },
            set: function (value) {
                var _this = this;
                this.$setWidth(value);
                this._propertyChange = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "height", {
            get: function () {
                return this.$getHeight();
            },
            set: function (value) {
                var _this = this;
                this.$setHeight(value);
                this._propertyChange = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchorX", {
            get: function () {
                return this._anchorX;
            },
            set: function (value) {
                var _this = this;
                this._anchorX = value;
                this._propertyChange = true;
                this._anchorChange = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchorY", {
            get: function () {
                return this._anchorY;
            },
            set: function (value) {
                var _this = this;
                this._anchorY = value;
                this._propertyChange = true;
                this._anchorChange = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
    };
    AnchorUtils.prototype.changeAnchor = function (tar) {
        if (tar._propertyChange && tar._anchorChange) {
            if (tar._anchorX != undefined) {
                tar.anchorOffsetX = tar._anchorX * tar.width;
            }
            if (tar._anchorY != undefined) {
                tar.anchorOffsetY = tar._anchorY * tar.height;
            }
            delete tar._propertyChange;
        }
    };
    return AnchorUtils;
}(SingtonClass));
__reflect(AnchorUtils.prototype, "AnchorUtils");
/**
 * Created by egret on 15-8-7.
 */
var ArrayUtils = (function (_super) {
    __extends(ArrayUtils, _super);
    function ArrayUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 遍历操作
     * @param arr
     * @param func
     */
    ArrayUtils.prototype.forEach = function (arr, func, funcObj) {
        for (var i = 0, len = arr.length; i < len; i++) {
            func.apply(funcObj, [arr[i]]);
        }
    };
    return ArrayUtils;
}(SingtonClass));
__reflect(ArrayUtils.prototype, "ArrayUtils");
/**
 * Created by yangsong on 15-8-19.
 * 平均数工具类
 */
var AverageUtils = (function () {
    /**
     * 构造函数
     * @param $maxNum 参与计算的最大值
     */
    function AverageUtils($maxNum) {
        if ($maxNum === void 0) { $maxNum = 10; }
        this.nums = [];
        this.numsLen = 0;
        this.numSum = 0;
        this.maxNum = $maxNum;
    }
    /**
     * 加入一个值
     * @param value
     */
    AverageUtils.prototype.push = function (value) {
        if (this.numsLen > this.maxNum) {
            this.numsLen--;
            this.numSum -= this.nums.shift();
        }
        this.nums.push(value);
        this.numSum += value;
        this.numsLen++;
    };
    /**
     * 获取平均值
     * @returns {number}
     */
    AverageUtils.prototype.getValue = function () {
        return this.numSum / this.numsLen;
    };
    /**
     * 清空
     */
    AverageUtils.prototype.clear = function () {
        this.nums.splice(0);
        this.numsLen = 0;
        this.numSum = 0;
    };
    return AverageUtils;
}());
__reflect(AverageUtils.prototype, "AverageUtils");
/**
 * Tween工具类
 */
var AxiosUtils = (function (_super) {
    __extends(AxiosUtils, _super);
    function AxiosUtils() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        window['axios'](rest);
        return _this;
    }
    return AxiosUtils;
}(SingtonClass));
__reflect(AxiosUtils.prototype, "AxiosUtils");
/**
 * Created by yangsong on 15-1-12.
 * 通用工具类
 */
var CommonUtils = (function (_super) {
    __extends(CommonUtils, _super);
    function CommonUtils() {
        var _this = _super.call(this) || this;
        /**
         * 万字的显示
         * @param label
         * @param num
         */
        _this.labelIsOverLenght = function (label, num) {
            var str = null;
            if (num < 100000) {
                str = num;
            }
            else if (num < 1000000) {
                str = Math.floor(num / 1000 / 10).toString() + "万";
            }
            else {
                str = Math.floor(num / 10000).toString() + "万";
            }
            label.text = str;
        };
        return _this;
    }
    /**
     * 给字体添加描边
     * @param lable      文字
     * @param color      表示文本的描边颜色
     * @param width      描边宽度。
     */
    CommonUtils.prototype.addLableStrokeColor = function (lable, color, width) {
        lable.strokeColor = color;
        lable.stroke = width;
    };
    /**
     * 深度复制
     * @param _data
     */
    CommonUtils.prototype.copyDataHandler = function (obj) {
        var newObj;
        if (obj instanceof Array) {
            newObj = [];
        }
        else if (obj instanceof Object) {
            newObj = {};
        }
        else {
            return obj;
        }
        var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            newObj[key] = this.copyDataHandler(obj[key]);
        }
        return newObj;
    };
    /**
     * 锁屏
     */
    CommonUtils.prototype.lock = function () {
        App.StageUtils.setTouchChildren(false);
    };
    /**
     * 解屏
     */
    CommonUtils.prototype.unlock = function () {
        App.StageUtils.setTouchChildren(true);
    };
    /**
     * int64转number
     * @param obj
     * @returns {number}
     */
    CommonUtils.prototype.int64ToNumber = function (obj) {
        return parseInt(obj.toString());
    };
    return CommonUtils;
}(SingtonClass));
__reflect(CommonUtils.prototype, "CommonUtils");
/**
 * Created by yangsong on 2014/11/22.
 * Date工具类
 */
var DateUtils = (function (_super) {
    __extends(DateUtils, _super);
    function DateUtils() {
        return _super.call(this) || this;
    }
    /**
     * 根据秒数格式化字符串
     * @param second 秒数
     * @param type 1:00:00:00   2:yyyy-mm-dd h:m:s    3:00:00(分:秒)   4:xx天前，xx小时前，xx分钟前    6:00:00(时:分)
     * @return
     *
     */
    DateUtils.prototype.getFormatBySecond = function (second, type) {
        if (type === void 0) { type = 1; }
        var str = "";
        switch (type) {
            case 1:
                str = this.getFormatBySecond1(second);
                break;
            case 2:
                str = this.getFormatBySecond2(second);
                break;
            case 3:
                str = this.getFormatBySecond3(second);
                break;
            case 4:
                str = this.getFormatBySecond4(second);
                break;
            case 5:
                str = this.getFormatBySecond5(second);
                break;
            case 6:
                str = this.getFormatBySecond6(second);
                break;
        }
        return str;
    };
    //1: 00:00:00
    DateUtils.prototype.getFormatBySecond1 = function (t) {
        if (t === void 0) { t = 0; }
        var hourst = Math.floor(t / 3600);
        var hours;
        if (hourst == 0) {
            hours = "00";
        }
        else {
            if (hourst < 10)
                hours = "0" + hourst;
            else
                hours = "" + hourst;
        }
        var minst = Math.floor((t - hourst * 3600) / 60);
        var secondt = Math.floor((t - hourst * 3600) % 60);
        var mins;
        var sens;
        if (minst == 0) {
            mins = "00";
        }
        else if (minst < 10) {
            mins = "0" + minst;
        }
        else {
            mins = "" + minst;
        }
        if (secondt == 0) {
            sens = "00";
        }
        else if (secondt < 10) {
            sens = "0" + secondt;
        }
        else {
            sens = "" + secondt;
        }
        return hours + ":" + mins + ":" + sens;
    };
    //3:00:00(分:秒)
    DateUtils.prototype.getFormatBySecond3 = function (t) {
        if (t === void 0) { t = 0; }
        var hourst = Math.floor(t / 3600);
        var minst = Math.floor((t - hourst * 3600) / 60);
        var secondt = Math.floor((t - hourst * 3600) % 60);
        var mins;
        var sens;
        if (minst == 0) {
            mins = "00";
        }
        else if (minst < 10) {
            mins = "0" + minst;
        }
        else {
            mins = "" + minst;
        }
        if (secondt == 0) {
            sens = "00";
        }
        else if (secondt < 10) {
            sens = "0" + secondt;
        }
        else {
            sens = "" + secondt;
        }
        return mins + ":" + sens;
    };
    //2:yyyy-mm-dd h:m:s
    DateUtils.prototype.getFormatBySecond2 = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1; //返回的月份从0-11；
        var day = date.getDate();
        var hours = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second;
    };
    //4:xx天前，xx小时前，xx分钟前
    DateUtils.prototype.getFormatBySecond4 = function (time) {
        var t = Math.floor(time / 3600);
        if (t > 0) {
            if (t > 24) {
                return Math.floor(t / 24) + "天前";
            }
            else {
                return t + "小时前";
            }
        }
        else {
            return Math.floor(time / 60) + "分钟前";
        }
    };
    DateUtils.prototype.getFormatBySecond5 = function (time) {
        //每个时间单位所对应的秒数
        var oneDay = 3600 * 24;
        var oneHourst = 3600;
        var oneMinst = 60;
        var days = Math.floor(time / oneDay);
        var hourst = Math.floor(time % oneDay / oneHourst);
        var minst = Math.floor((time - hourst * oneHourst) / oneMinst); //Math.floor(time % oneDay % oneHourst / oneMinst);
        var secondt = Math.floor((time - hourst * oneHourst) % oneMinst); //time;
        var dayss = "";
        var hourss = "";
        var minss = "";
        var secss = "";
        if (time > 0) {
            //天
            if (days == 0) {
                dayss = "";
                //小时
                if (hourst == 0) {
                    hourss = "";
                    //分
                    if (minst == 0) {
                        minss = "";
                        if (secondt == 0) {
                            secss = "";
                        }
                        else if (secondt < 10) {
                            secss = "0" + secondt + "秒";
                        }
                        else {
                            secss = "" + secondt + "秒";
                        }
                        return secss;
                    }
                    else {
                        minss = "" + minst + "分";
                        if (secondt == 0) {
                            secss = "";
                        }
                        else if (secondt < 10) {
                            secss = "0" + secondt + "秒";
                        }
                        else {
                            secss = "" + secondt + "秒";
                        }
                    }
                    return minss + secss;
                }
                else {
                    hourss = hourst + "小时";
                    if (minst == 0) {
                        minss = "";
                        if (secondt == 0) {
                            secss = "";
                        }
                        else if (secondt < 10) {
                            secss = "0" + secondt + "秒";
                        }
                        else {
                            secss = "" + secondt + "秒";
                        }
                        return secss;
                    }
                    else if (minst < 10) {
                        minss = "0" + minst + "分";
                    }
                    else {
                        minss = "" + minst + "分";
                    }
                    return hourss + minss;
                }
            }
            else {
                dayss = days + "天";
                if (hourst == 0) {
                    hourss = "";
                }
                else {
                    if (hourst < 10)
                        hourss = "0" + hourst + "小时";
                    else
                        hourss = "" + hourst + "小时";
                    ;
                }
                return dayss + hourss;
            }
        }
        return "";
    };
    //6:00:00(时:分) 
    DateUtils.prototype.getFormatBySecond6 = function (t) {
        if (t === void 0) { t = 0; }
        var hourst = Math.floor(t / 3600);
        var minst = Math.floor((t - hourst * 3600) / 60);
        var houers;
        var mins;
        if (hourst == 0) {
            houers = "00";
        }
        else if (hourst < 10) {
            houers = "0" + hourst;
        }
        else {
            houers = "" + hourst;
        }
        if (minst == 0) {
            mins = "00";
        }
        else if (minst < 10) {
            mins = "0" + minst;
        }
        else {
            mins = "" + minst;
        }
        return houers + ":" + mins;
    };
    /**
     * 获取当前是周几
     * ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
     */
    DateUtils.prototype.getDay = function (timestamp) {
        var date = new Date(timestamp);
        return date.getDay();
    };
    /**
     * 判定两个时间是否是同一天
     */
    DateUtils.prototype.isSameDate = function (timestamp1, timestamp2) {
        var date1 = new Date(timestamp1);
        var date2 = new Date(timestamp2);
        return date1.getFullYear() == date2.getFullYear()
            && date1.getMonth() == date2.getMonth()
            && date1.getDate() == date2.getDate();
    };
    /**
     * 日期格式化
     */
    DateUtils.prototype.format = function (d, fmt) {
        if (fmt === void 0) { fmt = "yyyy-MM-dd hh:mm:ss"; }
        var o = {
            "M+": d.getMonth() + 1,
            "d+": d.getDate(),
            "h+": d.getHours(),
            "m+": d.getMinutes(),
            "s+": d.getSeconds(),
            "q+": Math.floor((d.getMonth() + 3) / 3),
            "S": d.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return fmt;
    };
    /**
     * 计算两个时间相差天数
     */
    DateUtils.prototype.dateDifference = function (timestamp1, timestamp2) {
        var d_value = Math.abs(timestamp2 - timestamp1);
        return Math.ceil(d_value / (24 * 60 * 60 * 1000));
    };
    return DateUtils;
}(SingtonClass));
__reflect(DateUtils.prototype, "DateUtils");
/**
 * Created by yangsong on 2014/11/23.
 * Debug调试工具
 */
var DebugUtils = (function (_super) {
    __extends(DebugUtils, _super);
    function DebugUtils() {
        var _this = _super.call(this) || this;
        _this._threshold = 3;
        _this._startTimes = {};
        return _this;
    }
    /**
     * 设置调试是否开启
     * @param flag
     *
     */
    DebugUtils.prototype.isOpen = function (flag) {
        this._isOpen = flag;
    };
    Object.defineProperty(DebugUtils.prototype, "isDebug", {
        /**
         * 是否是调试模式
         * @returns {boolean}
         */
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 开始
     * @param key 标识
     * @param minTime 最小时间
     *
     */
    DebugUtils.prototype.start = function (key) {
        if (!this._isOpen) {
            return;
        }
        this._startTimes[key] = egret.getTimer();
    };
    /**
     * 停止
     *
     */
    DebugUtils.prototype.stop = function (key) {
        if (!this._isOpen) {
            return 0;
        }
        if (!this._startTimes[key]) {
            return 0;
        }
        var cha = egret.getTimer() - this._startTimes[key];
        if (cha > this._threshold) {
            Log.debug(key + ": " + cha);
        }
        return cha;
    };
    /**
     * 设置时间间隔阈值
     * @param value
     */
    DebugUtils.prototype.setThreshold = function (value) {
        this._threshold = value;
    };
    return DebugUtils;
}(SingtonClass));
__reflect(DebugUtils.prototype, "DebugUtils");
var DecisionCover = (function (_super) {
    __extends(DecisionCover, _super);
    function DecisionCover() {
        var _this = _super.call(this) || this;
        _this.loaded = false;
        return _this;
    }
    DecisionCover.prototype.loading = function (vm, labelText, alpha) {
        if (!this.loaded) {
            alpha ? "" : alpha = 0.5;
            this.rect = new eui.Rect();
            this.group = new eui.Group();
            this.label = new eui.Label();
            this.rect.fillAlpha = alpha;
            this.rect.left = this.rect.right = this.rect.top = this.rect.bottom = 0;
            typeof labelText == 'string' ? this.label.text = labelText : this.label.textFlow = labelText;
            this.label.horizontalCenter = this.label.verticalCenter = 0;
            // this.group.left = this.group.right = this.group.top = this.group.bottom = 0;
            this.group.addChild(this.rect);
            this.group.addChild(this.label);
            this.group.visible = true;
            this.label.visible = true;
            this.group.width = vm.width;
            this.group.height = vm.height;
            this.group.verticalCenter = 0;
            vm.addChildAt(this.group, 1000001);
            this.loaded = true;
        }
        this.group.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            e.stopImmediatePropagation();
        }, this);
    };
    DecisionCover.prototype.hideLoading = function () {
        // 使group消失
        // this.group.visible = false;
        // 给rect更改透明度，但仍然block
        this.rect.fillAlpha = 0;
        if (this.label) {
            this.label.visible = false;
        }
        this.loaded = false;
    };
    DecisionCover.prototype.hideLoadingfalse = function () {
        if (this.group)
            this.group.visible = false;
        this.loaded = false;
    };
    DecisionCover.prototype.poptips = function (vm, tips) {
        var box = new eui.Group();
        var Group = new eui.Group();
        var rect = new eui.Rect();
        var label = new eui.Label();
        Group.addChildAt(rect, 0);
        Group.addChildAt(label, 1);
        Group.width = 400;
        Group.top = 200;
        // Group.horizontalCenter = 0;
        label.horizontalCenter = 0;
        label.verticalCenter = 0;
        label.right = label.left = 20;
        label.top = label.bottom = 30;
        label.textAlign = "center";
        label.lineSpacing = 10;
        rect.left = rect.right = rect.top = rect.bottom = 0;
        rect.fillAlpha = 0.5;
        rect.ellipseHeight = 20;
        rect.ellipseWidth = 20;
        label.text = tips;
        Group.x = (vm.width - Group.width) / 2;
        box.width = vm.width;
        box.height = vm.height;
        box.addChild(Group);
        this.group.addChildAt(box, 10000000);
        box.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('检测到tap事件');
            window.location.reload();
        }, this);
    };
    return DecisionCover;
}(SingtonClass));
__reflect(DecisionCover.prototype, "DecisionCover");
/**
 * Created by Saco on 2014/8/2.
 */
var DelayOptManager = (function (_super) {
    __extends(DelayOptManager, _super);
    function DelayOptManager() {
        var _this = _super.call(this) || this;
        //每帧运算逻辑的时间阈值，执行代码超过这个时间就跳过到下一帧继续执行，根据实际情况调整，因为每一帧除了这里的逻辑还有别的逻辑要做对吧
        _this.TIME_THRESHOLD = 2;
        _this._delayOpts = [];
        App.TimerManager.doFrame(1, 0, _this.runCachedFun, _this);
        return _this;
    }
    DelayOptManager.prototype.addDelayOptFunction = function (thisObj, fun, funPara, callBack, para) {
        this._delayOpts.push({ "fun": fun, "funPara": funPara, "thisObj": thisObj, "callBack": callBack, "para": para });
    };
    DelayOptManager.prototype.clear = function () {
        this._delayOpts.length = 0;
    };
    DelayOptManager.prototype.stop = function () {
        App.TimerManager.remove(this.runCachedFun, this);
    };
    DelayOptManager.prototype.runCachedFun = function (f) {
        if (this._delayOpts.length == 0) {
            return;
        }
        var timeFlag = egret.getTimer();
        var funObj;
        while (this._delayOpts.length) {
            funObj = this._delayOpts.shift();
            if (funObj.funPara)
                funObj.fun.call(funObj.thisObj, funObj.funPara);
            else
                funObj.fun.call(funObj.thisObj);
            if (funObj.callBack) {
                if (funObj.para != undefined)
                    funObj.callBack.call(funObj.thisObj, funObj.para);
                else
                    funObj.callBack();
            }
            if (egret.getTimer() - timeFlag > this.TIME_THRESHOLD)
                break;
        }
    };
    return DelayOptManager;
}(SingtonClass));
__reflect(DelayOptManager.prototype, "DelayOptManager");
/**
 * Created by yangsong on 15-1-20.
 */
var DeviceUtils = (function (_super) {
    __extends(DeviceUtils, _super);
    /**
     * 构造函数
     */
    function DeviceUtils() {
        return _super.call(this) || this;
    }
    Object.defineProperty(DeviceUtils.prototype, "IsHtml5", {
        /**
         * 当前是否Html5版本
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType.WEB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsNative", {
        /**
         * 当前是否是Native版本
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsWxGame", {
        /**
         * 当前是否是微信小游戏平台
         */
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsMobile", {
        /**
         * 是否是在手机上
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return egret.Capabilities.isMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsPC", {
        /**
         * 是否是在PC上
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return !egret.Capabilities.isMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsQQBrowser", {
        /**
         * 是否是QQ浏览器
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf('MQQBrowser') != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsIEBrowser", {
        /**
         * 是否是IE浏览器
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("MSIE") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsFirefoxBrowser", {
        /**
         * 是否是Firefox浏览器
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Firefox") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsChromeBrowser", {
        /**
         * 是否是Chrome浏览器
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Chrome") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsSafariBrowser", {
        /**
         * 是否是Safari浏览器
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Safari") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "IsOperaBrowser", {
        /**
         * 是否是Opera浏览器
         * @returns {boolean}
         * @constructor
         */
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Opera") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils.prototype, "DeviceOs", {
        /**
         * 得到设备系统 如：iOS/Android/WP7
         */
        get: function () {
            var os = "";
            var ua;
            ua = this.IsHtml5 ? navigator.userAgent.toLowerCase() : egret.Capabilities.os.toLowerCase();
            if (ua.indexOf("ipod") != -1 || ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1 || ua.indexOf("macintosh") != -1 || ua.indexOf("ios") != -1) {
                os = "ios";
            }
            else if (ua.indexOf("windows") != -1) {
                os = "windows";
            }
            else if (ua.indexOf("android") != -1) {
                os = "android";
            }
            else if (ua.indexOf("symbian") != -1) {
                os = "symbian";
            }
            else if (ua.indexOf("linux") != -1) {
                os = "linux";
            }
            return os;
        },
        enumerable: true,
        configurable: true
    });
    DeviceUtils.OS_IOS = "ios";
    DeviceUtils.OS_Android = "android";
    return DeviceUtils;
}(SingtonClass));
__reflect(DeviceUtils.prototype, "DeviceUtils");
/**
 * Created by yangsong on 2014/11/24.
 * 显示对象工具类
 */
var DisplayUtils = (function (_super) {
    __extends(DisplayUtils, _super);
    /**
     * 构造函数
     */
    function DisplayUtils() {
        return _super.call(this) || this;
    }
    /**
     * 创建一个Bitmap
     * @param resName resource.json中配置的name
     * @returns {egret.Bitmap}
     */
    DisplayUtils.prototype.createBitmap = function (resName) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(resName);
        result.texture = texture;
        return result;
    };
    /**
     * 创建一个textField
     * @param size;
     * @param color;
     * @param otherParam;
     */
    DisplayUtils.prototype.createTextField = function (size, color, otherParam) {
        if (size === void 0) { size = 12; }
        if (color === void 0) { color = 0xFFFFFF; }
        var txt = new egret.TextField();
        txt.size = size;
        txt.textColor = color;
        if (!otherParam)
            return txt;
        for (var key in otherParam) {
            txt[key] = otherParam[key];
        }
        return txt;
    };
    /**
     * 创建一个位图字体
     */
    DisplayUtils.prototype.createBitmapFont = function (fontName) {
        var bpFont = new egret.BitmapText();
        bpFont.font = RES.getRes(fontName);
        return bpFont;
    };
    /**
     * 创建一张Gui的图片
     * @param resName
     * @returns {egret.Bitmap}
     */
    DisplayUtils.prototype.createEuiImage = function (resName) {
        var result = new eui.Image();
        var texture = RES.getRes(resName);
        result.source = texture;
        return result;
    };
    /**
     * 从父级移除child
     * @param child
     */
    DisplayUtils.prototype.removeFromParent = function (child) {
        if (child.parent == null)
            return;
        child.parent.removeChild(child);
    };
    /**
     * 添加到指定容器
     * @param child
     * @param parent
     */
    DisplayUtils.prototype.addChild = function (child, parent) {
        if (!child || !parent)
            return;
        parent.addChild(child);
    };
    return DisplayUtils;
}(SingtonClass));
__reflect(DisplayUtils.prototype, "DisplayUtils");
/**
 * Created by yangsong on 2014/12/3.
 * 各种效果工具类
 */
var EffectUtils = (function (_super) {
    __extends(EffectUtils, _super);
    /**
     * 构造函数
     */
    function EffectUtils() {
        return _super.call(this) || this;
    }
    /**
     * 类似mac上图标上下抖动的效果
     * @param obj 要抖动的对象，使用
     * @param initY 要抖动的对象的初始Y值，原始位置
     */
    EffectUtils.prototype.macIconShake = function (obj, initY) {
        //抖动频率[时间，移动距离]，可修改
        var arr = [
            [20, 300],
            [15, 300],
            [10, 300],
            [5, 300]
        ];
        var tween = egret.Tween.get(obj);
        for (var i = 0, len = arr.length; i < len; i++) {
            tween.to({ y: initY - arr[i][0] }, arr[i][1]);
            tween.to({ y: initY }, arr[i][1]);
        }
    };
    /**
     * 开始放大缩小
     * @param obj
     */
    EffectUtils.prototype.startScale = function (obj, scaleTime) {
        obj.scaleX = 1;
        obj.scaleY = 1;
        egret.Tween.get(obj)
            .to({ scaleX: 1.1, scaleY: 1.1 }, scaleTime)
            .to({ scaleX: 1.0, scaleY: 1.0 }, scaleTime)
            .to({ scaleX: 0.9, scaleY: 0.9 }, scaleTime)
            .to({ scaleX: 1.0, scaleY: 1.0 }, scaleTime)
            .call(this.startScale, this, [obj, scaleTime]);
    };
    /**
     * 停止放大缩小
     * @param obj
     */
    EffectUtils.prototype.stopScale = function (obj) {
        egret.Tween.removeTweens(obj);
    };
    /**
     * 开始闪烁
     * @param obj
     */
    EffectUtils.prototype.startFlicker = function (obj, alphaTime, alpha_min) {
        if (alpha_min === void 0) { alpha_min = 0; }
        obj.alpha = 1;
        egret.Tween.get(obj).to({ "alpha": alpha_min }, alphaTime).to({ "alpha": 1 }, alphaTime).call(this.startFlicker, this, [obj, alphaTime]);
    };
    /**
     * 停止闪烁
     * @param obj
     */
    EffectUtils.prototype.stopFlicker = function (obj) {
        egret.Tween.removeTweens(obj);
    };
    /**
     * 开始上下抖动
     * @param obj
     */
    EffectUtils.prototype.startShake = function (obj, shakeTime, shakeHeight) {
        if (shakeHeight === void 0) { shakeHeight = 20; }
        if (!obj["shakeStartY"]) {
            obj["shakeStartY"] = obj.y;
            obj["shakeEndY"] = obj.y + shakeHeight;
        }
        var startY = obj["shakeStartY"];
        var endY = obj["shakeEndY"];
        egret.Tween.get(obj).to({ "y": endY }, shakeTime).to({ "y": startY }, shakeTime).call(this.startShake, this, [obj, shakeTime]);
    };
    /**
     * 停止上下抖动
     * @param obj
     */
    EffectUtils.prototype.stopShake = function (obj) {
        if (!obj["shakeStartY"]) {
            return;
        }
        obj.y = obj["shakeStartY"];
        egret.Tween.removeTweens(obj);
        delete obj["shakeStartY"];
        delete obj["shakeEndY"];
    };
    /**
     * 设置显示对象“黑化”效果
     */
    EffectUtils.prototype.setDisplayObjectBlack = function (obj) {
        //颜色矩阵数组
        var colorMatrix = [
            1, 0, 0, 0, -255,
            0, 1, 0, 0, -255,
            0, 0, 1, 0, -255,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        obj.filters = [colorFlilter];
    };
    /**
     * 设置显示对象“灰化”效果
     */
    EffectUtils.prototype.setDisplayObjectGray = function (obj) {
        //颜色矩阵数组
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        obj.filters = [colorFlilter];
    };
    /**
     * 开始左右摇动
     * @param obj
     */
    EffectUtils.prototype.startWobble = function (obj, wobbleTime, wobbleRotation) {
        if (wobbleTime === void 0) { wobbleTime = 100; }
        if (wobbleRotation === void 0) { wobbleRotation = 20; }
        egret.Tween.get(obj)
            .to({ rotation: wobbleRotation }, wobbleTime, egret.Ease.bounceInOut)
            .to({ rotation: -wobbleRotation }, wobbleTime, egret.Ease.bounceInOut)
            .to({ rotation: wobbleRotation }, wobbleTime, egret.Ease.bounceInOut)
            .call(this.startWobble, this, [obj, wobbleTime]);
    };
    /**
     * 停止左右摇动
     * @param obj
     */
    EffectUtils.prototype.stopWobble = function (obj) {
        obj.rotation = 0;
        egret.Tween.removeTweens(obj);
    };
    /**
     * 开始发光闪烁
     * @param obj
     */
    EffectUtils.prototype.startFlash = function (obj, flashColor, flashTime) {
        var glowFilter = obj["flashFilter"];
        if (!glowFilter) {
            var color = flashColor; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 35; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 35; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 2; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality);
            obj.filters = [glowFilter];
            obj["flashFilter"] = glowFilter;
        }
        egret.Tween.get(glowFilter).to({ "alpha": 0 }, flashTime).to({ "alpha": 1 }, flashTime).call(this.startFlash, this, [obj, flashColor, flashTime]);
    };
    /**
     * 停止发光闪烁
     * @param obj
     */
    EffectUtils.prototype.stopFlash = function (obj) {
        var glowFilter = obj["flashFilter"];
        if (glowFilter) {
            egret.Tween.removeTweens(glowFilter);
            obj.filters = null;
            delete obj["flashFilter"];
        }
    };
    return EffectUtils;
}(SingtonClass));
__reflect(EffectUtils.prototype, "EffectUtils");
/**
 * Created by yangsong on 15-1-23.
 * 引擎扩展类
 */
var EgretExpandUtils = (function (_super) {
    __extends(EgretExpandUtils, _super);
    /**
     * 构造函数
     */
    function EgretExpandUtils() {
        return _super.call(this) || this;
    }
    /**
     * 初始化函数
     */
    EgretExpandUtils.prototype.init = function () {
    };
    return EgretExpandUtils;
}(SingtonClass));
__reflect(EgretExpandUtils.prototype, "EgretExpandUtils");
/**
 * Created by yangsong on 2014/11/23.
 * 帧延迟处理
 */
var FrameDelay = (function () {
    /**
     * 构造函数
     */
    function FrameDelay() {
    }
    /**
     * 延迟处理
     * @param delayFrame 延迟帧数
     * @param func 延迟执行的函数
     * @param thisObj 延迟执行的函数的所属对象
     */
    FrameDelay.prototype.delayCall = function (delayFrame, func, thisObj) {
        this.func = func;
        this.thisObj = thisObj;
        egret.callLater(function () {
            App.TimerManager.doFrame(delayFrame, 1, this.listener_enterFrame, this);
        }, this);
    };
    FrameDelay.prototype.listener_enterFrame = function () {
        this.func.call(this.thisObj);
    };
    return FrameDelay;
}());
__reflect(FrameDelay.prototype, "FrameDelay");
/**
 * Created by yangsong on 2014/11/23.
 * 分帧处理
 */
var FrameExecutor = (function () {
    /**
     * 构造函数
     */
    function FrameExecutor($delayFrame) {
        this.delayFrame = $delayFrame;
        this.frameDelay = new FrameDelay();
        this.functions = new Array();
    }
    /**
     * 注册要分帧处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    FrameExecutor.prototype.regist = function ($func, $thisObj) {
        this.functions.push([$func, $thisObj]);
    };
    /**
     * 执行
     */
    FrameExecutor.prototype.execute = function () {
        if (this.functions.length) {
            var arr = this.functions.shift();
            arr[0].call(arr[1]);
            this.frameDelay.delayCall(this.delayFrame, this.execute, this);
        }
    };
    return FrameExecutor;
}());
__reflect(FrameExecutor.prototype, "FrameExecutor");
/**
 * Created by yangsong on 15-1-26.
 * 键盘工具类
 */
var KeyboardUtils = (function (_super) {
    __extends(KeyboardUtils, _super);
    /**
     * 构造函数
     */
    function KeyboardUtils() {
        var _this = _super.call(this) || this;
        _this.key_ups = new Array();
        _this.key_downs = new Array();
        if (App.DeviceUtils.IsHtml5) {
            var self = _this;
            document.addEventListener("keyup", function (e) {
                for (var i = 0, len = self.key_ups.length; i < len; i++) {
                    var func = self.key_ups[i][0];
                    var target = self.key_ups[i][1];
                    if (target) {
                        func.call(target, e["keyCode"]);
                    }
                    else {
                        func(e["keyCode"]);
                    }
                }
            });
            document.addEventListener("keydown", function (e) {
                for (var i = 0, len = self.key_downs.length; i < len; i++) {
                    var func = self.key_downs[i][0];
                    var target = self.key_downs[i][1];
                    if (target) {
                        func.call(target, e["keyCode"]);
                    }
                    else {
                        func(e["keyCode"]);
                    }
                }
            });
        }
        return _this;
    }
    /**
     * 添加KeyUp事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.addKeyUp = function (callback, target) {
        this.key_ups.push([callback, target]);
    };
    /**
     * 添加KeyDown事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.addKeyDown = function (callback, target) {
        this.key_downs.push([callback, target]);
    };
    /**
     * 移除KeyUp事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.removeKeyUp = function (callback, target) {
        for (var i = 0; i < this.key_ups.length; i++) {
            if (this.key_ups[i][0] == callback && this.key_ups[i][1] == target) {
                this.key_ups.splice(i, 1);
                i--;
            }
        }
    };
    /**
     * 移除KeyDown事件
     * @param callback 回调函数
     * @param target 回调函数对应的对象
     */
    KeyboardUtils.prototype.removeKeyDown = function (callback, target) {
        for (var i = 0; i < this.key_downs.length; i++) {
            if (this.key_downs[i][0] == callback && this.key_downs[i][1] == target) {
                this.key_downs.splice(i, 1);
                i--;
            }
        }
    };
    return KeyboardUtils;
}(SingtonClass));
__reflect(KeyboardUtils.prototype, "KeyboardUtils");
/**
 * Created by Saco on 2014/12/1.
 */
var LocationPropertyUtils = (function (_super) {
    __extends(LocationPropertyUtils, _super);
    function LocationPropertyUtils() {
        return _super.call(this) || this;
    }
    /*
     * 获取url参数值，没有返回null
     * 不传递paraUrl参数默认获取当前url
     * */
    LocationPropertyUtils.prototype.getPara = function (paraName, paraUrl) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WEB) {
            return null;
        }
        var url = paraUrl || location.href;
        if (url.indexOf("?") != -1) {
            var urlPara = "&" + url.split("?")[1];
            var reg = new RegExp("\&" + paraName + "\=.*?(?:\&|$)");
            var result = reg.exec(urlPara);
            if (result) {
                var value = result[0];
                return value.split("&")[1].split("=")[1];
            }
        }
        return null;
    };
    /*
     * 给Url参数赋值
     * 不传递paraUrl参数默认获取当前url
     * */
    LocationPropertyUtils.prototype.setProperty = function (paraName, paraValue, paraUrl) {
        var url = paraUrl || location.href;
        var urlPara = "&" + url.split("?")[1];
        if (url.indexOf("?") == -1) {
            return url += "?" + paraName + "=" + paraValue;
        }
        else {
            var urlPara = url.split("?")[1];
            if (urlPara == "")
                return url += paraName + "=" + paraValue;
            var regParaKV = new RegExp("(?:^|\&)" + paraName + "\=.*?(?:\&|$)");
            var result = regParaKV.exec(urlPara);
            if (!result || result[0] == "") {
                return url += "&" + paraName + "=" + paraValue;
            }
            else {
                var oldValue = result[0];
                var regParaKey = new RegExp("\=.*$");
                var newValue = oldValue.replace(regParaKey, "=" + paraValue);
                return url.replace(oldValue, newValue);
            }
        }
    };
    /*
     * 检查url中是否包含某参数
     * 这代码有一个例外就是paraName = "undefined", paraUrl中不含"?"会返回true
     * 相信你不会这么用的 =.=
     * */
    LocationPropertyUtils.prototype.hasProperty = function (paraName, paraUrl) {
        var url = paraUrl || location.href;
        var para = "&" + url.split("?")[1]; //加&是为了把&作为参数名开始=作为参数名结束，防止uid=1&id=2此类误判
        return para.indexOf("&" + paraName + "=") != -1;
    };
    return LocationPropertyUtils;
}(SingtonClass));
__reflect(LocationPropertyUtils.prototype, "LocationPropertyUtils");
/**
 * Created by yangsong on 2014/11/22.
 */
var Log = (function () {
    function Log() {
    }
    /**
     * Debug
     */
    Log.debug = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        if (!App.DebugUtils.isDebug) {
            return;
        }
        var message = "[Debug]" + optionalParams.shift();
        console.log.apply(console, [message].concat(optionalParams));
    };
    /**
     * Info
     */
    Log.info = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        var message = "[Info]" + optionalParams.shift();
        console.log.apply(console, [message].concat(optionalParams));
    };
    /**
     * Warn
     */
    Log.warn = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        var message = "[Warn]" + optionalParams.shift();
        console.warn.apply(console, [message].concat(optionalParams));
    };
    /**
     * Error
     */
    Log.error = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        var message = "[Error]" + optionalParams.shift();
        console.error.apply(console, [message].concat(optionalParams));
    };
    return Log;
}());
__reflect(Log.prototype, "Log");
/**
 * Created by yangsong on 2014/11/22.
 * 数学计算工具类
 */
var MathUtils = (function (_super) {
    __extends(MathUtils, _super);
    function MathUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 弧度制转换为角度值
     * @param radian 弧度制
     * @returns {number}
     */
    MathUtils.prototype.getAngle = function (radian) {
        return 180 * radian / Math.PI;
    };
    /**
     * 角度值转换为弧度制
     * @param angle
     */
    MathUtils.prototype.getRadian = function (angle) {
        return angle / 180 * Math.PI;
    };
    /**
     * 获取两点间弧度
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    /**
     * 获取两点间距离
     * @param p1X
     * @param p1Y
     * @param p2X
     * @param p2Y
     * @returns {number}
     */
    MathUtils.prototype.getDistance = function (p1X, p1Y, p2X, p2Y) {
        var disX = p2X - p1X;
        var disY = p2Y - p1Y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    return MathUtils;
}(SingtonClass));
__reflect(MathUtils.prototype, "MathUtils");
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var md5 = (function () {
    function md5() {
        this.hexcase = 0;
        /* hex output format. 0 - lowercase; 1 - uppercase        */
        this.b64pad = "";
    }
    /* base-64 pad character. "=" for strict RFC compliance   */
    /*
     * These are the privates you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */
    md5.prototype.hex_md5 = function (s) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));
    };
    md5.prototype.b64_md5 = function (s) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)));
    };
    md5.prototype.any_md5 = function (s, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e);
    };
    md5.prototype.hex_hmac_md5 = function (k, d) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
    };
    md5.prototype.b64_hmac_md5 = function (k, d) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
    };
    md5.prototype.any_hmac_md5 = function (k, d, e) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e);
    };
    /*
     * Perform a simple self-test to see if the VM is working
     */
    md5.prototype.md5_vm_test = function () {
        return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
    };
    /*
     * Calculate the MD5 of a raw string
     */
    md5.prototype.rstr_md5 = function (s) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
    };
    /*
     * Calculate the HMAC-MD5, of a key and some data (raw strings)
     */
    md5.prototype.rstr_hmac_md5 = function (key, data) {
        var bkey = this.rstr2binl(key);
        if (bkey.length > 16)
            bkey = this.binl_md5(bkey, key.length * 8);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
        return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
    };
    /*
     * Convert a raw string to a hex string
     */
    md5.prototype.rstr2hex = function (input) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F)
                + hex_tab.charAt(x & 0x0F);
        }
        return output;
    };
    /*
     * Convert a raw string to a base-64 string
     */
    md5.prototype.rstr2b64 = function (input) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = '';
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8)
                    output += this.b64pad;
                else
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
        }
        return output;
    };
    /*
     * Convert a raw string to an arbitrary string encoding
     */
    md5.prototype.rstr2any = function (input, encoding) {
        var divisor = encoding.length;
        var i, j, q, x, quotient;
        /* Convert to an array of 16-bit big-endian values, forming the dividend */
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        /*
         * Repeatedly perform a long division. The binary array forms the dividend,
         * the length of the encoding is the divisor. Once computed, the quotient
         * forms the dividend for the next step. All remainders are stored for later
         * use.
         */
        var full_length = Math.ceil(input.length * 8 /
            (Math.log(encoding.length) / Math.log(2)));
        var remainders = Array(full_length);
        for (j = 0; j < full_length; j++) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0)
                    quotient[quotient.length] = q;
            }
            remainders[j] = x;
            dividend = quotient;
        }
        /* Convert the remainders to the output string */
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--)
            output += encoding.charAt(remainders[i]);
        return output;
    };
    /*
     * Encode a string as utf-8.
     * For efficiency, this assumes the input is valid utf-16.
     */
    md5.prototype.str2rstr_utf8 = function (input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            /* Decode utf-16 surrogate pairs */
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }
            /* Encode output as utf-8 */
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
        return output;
    };
    /*
     * Encode a string as utf-16
     */
    md5.prototype.str2rstr_utf16le = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
        return output;
    };
    md5.prototype.str2rstr_utf16be = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
        return output;
    };
    /*
     * Convert a raw string to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */
    md5.prototype.rstr2binl = function (input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        return output;
    };
    /*
     * Convert an array of little-endian words to a string
     */
    md5.prototype.binl2rstr = function (input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        return output;
    };
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */
    md5.prototype.binl_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return [a, b, c, d];
    };
    /*
     * These privates implement the four basic operations the algorithm uses.
     */
    md5.prototype.md5_cmn = function (q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    };
    md5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    md5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    md5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    md5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    md5.prototype.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    md5.prototype.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    return md5;
}());
__reflect(md5.prototype, "md5");
/**
 * Created by yangsong on 2014/11/23.
 * 服务端返回消息处理
 */
var MessageCenter = (function (_super) {
    __extends(MessageCenter, _super);
    /**
     * 构造函数
     * @param type 0:使用分帧处理 1:及时执行
     */
    function MessageCenter(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.dict = {};
        _this.eVec = new Array();
        _this.lastRunTime = 0;
        if (_this.type == 0) {
            App.TimerManager.doFrame(1, 0, _this.run, _this);
        }
        return _this;
    }
    /**
     * 清空处理
     */
    MessageCenter.prototype.clear = function () {
        this.dict = {};
        this.eVec.splice(0);
    };
    /**
     * 添加消息监听
     * @param type 消息唯一标识
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     *
     */
    MessageCenter.prototype.addListener = function (type, listener, listenerObj) {
        var arr = this.dict[type];
        if (arr == null) {
            arr = new Array();
            this.dict[type] = arr;
        }
        //检测是否已经存在
        var i = 0;
        var len = arr.length;
        for (i; i < len; i++) {
            if (arr[i][0] == listener && arr[i][1] == listenerObj) {
                return;
            }
        }
        arr.push([listener, listenerObj]);
    };
    /**
     * 移除消息监听
     * @param type 消息唯一标识
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     */
    MessageCenter.prototype.removeListener = function (type, listener, listenerObj) {
        var arr = this.dict[type];
        if (arr == null) {
            return;
        }
        var i = 0;
        var len = arr.length;
        for (i; i < len; i++) {
            if (arr[i][0] == listener && arr[i][1] == listenerObj) {
                arr.splice(i, 1);
                break;
            }
        }
        if (arr.length == 0) {
            this.dict[type] = null;
            delete this.dict[type];
        }
    };
    /**
     * 移除某一对象的所有监听
     * @param listenerObj 侦听函数所属对象
     */
    MessageCenter.prototype.removeAll = function (listenerObj) {
        var keys = Object.keys(this.dict);
        for (var i = 0, len = keys.length; i < len; i++) {
            var type = keys[i];
            var arr = this.dict[type];
            for (var j = 0; j < arr.length; j++) {
                if (arr[j][1] == listenerObj) {
                    arr.splice(j, 1);
                    j--;
                }
            }
            if (arr.length == 0) {
                this.dict[type] = null;
                delete this.dict[type];
            }
        }
    };
    /**
     * 触发消息
     * @param type 消息唯一标识
     * @param param 消息参数
     *
     */
    MessageCenter.prototype.dispatch = function (type) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (this.dict[type] == null) {
            return;
        }
        var vo = ObjectPool.pop("MessageVo");
        vo.type = type;
        vo.param = param;
        if (this.type == 0) {
            this.eVec.push(vo);
        }
        else if (this.type == 1) {
            this.dealMsg(vo);
        }
        else {
            Log.warn("MessageCenter未实现的类型");
        }
    };
    /**
     * 运行
     *
     */
    MessageCenter.prototype.run = function () {
        var currTime = egret.getTimer();
        var inSleep = currTime - this.lastRunTime > 100;
        this.lastRunTime = currTime;
        if (inSleep) {
            while (this.eVec.length > 0) {
                this.dealMsg(this.eVec.shift());
            }
        }
        else {
            while (this.eVec.length > 0) {
                this.dealMsg(this.eVec.shift());
                if ((egret.getTimer() - currTime) > 5) {
                    break;
                }
            }
        }
    };
    /**
     * 处理一条消息
     * @param msgVo
     */
    MessageCenter.prototype.dealMsg = function (msgVo) {
        var listeners = this.dict[msgVo.type];
        var i = 0;
        var len = listeners.length;
        var listener = null;
        while (i < len) {
            listener = listeners[i];
            listener[0].apply(listener[1], msgVo.param);
            if (listeners.length != len) {
                len = listeners.length;
                i--;
            }
            i++;
        }
        msgVo.dispose();
        ObjectPool.push(msgVo);
    };
    /**
     * 判断指定类型的事件是否注册了监听
     * @param type 事件类型
     */
    MessageCenter.prototype.isHasListener = function (type) {
        return this.dict[type] != undefined;
    };
    return MessageCenter;
}(SingtonClass));
__reflect(MessageCenter.prototype, "MessageCenter");
var MessageVo = (function () {
    function MessageVo() {
    }
    MessageVo.prototype.dispose = function () {
        this.type = null;
        this.param = null;
    };
    return MessageVo;
}());
__reflect(MessageVo.prototype, "MessageVo");
/**
 * Created by yangsong on 2014/11/22.
 * 对象池类
 */
var ObjectPool = (function () {
    /**
     * 构造函数
     */
    function ObjectPool() {
        this._objs = new Array();
    }
    /**
     * 放回一个对象
     * @param obj
     */
    ObjectPool.prototype.pushObj = function (obj) {
        this._objs.push(obj);
    };
    /**
     * 取出一个对象
     * @returns {*}
     */
    ObjectPool.prototype.popObj = function () {
        if (this._objs.length > 0) {
            return this._objs.pop();
        }
        else {
            return null;
        }
    };
    /**
     * 清除所有缓存对象
     */
    ObjectPool.prototype.clear = function () {
        while (this._objs.length > 0) {
            this._objs.pop();
        }
    };
    /**
     * 取出一个对象
     * @param classZ Class
     * @return Object
     *
     */
    ObjectPool.pop = function (refKey) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!ObjectPool._content[refKey]) {
            ObjectPool._content[refKey] = [];
        }
        var list = ObjectPool._content[refKey];
        if (list.length) {
            return list.pop();
        }
        else {
            var classZ = egret.getDefinitionByName(refKey);
            var argsLen = args.length;
            var obj;
            if (argsLen == 0) {
                obj = new classZ();
            }
            else if (argsLen == 1) {
                obj = new classZ(args[0]);
            }
            else if (argsLen == 2) {
                obj = new classZ(args[0], args[1]);
            }
            else if (argsLen == 3) {
                obj = new classZ(args[0], args[1], args[2]);
            }
            else if (argsLen == 4) {
                obj = new classZ(args[0], args[1], args[2], args[3]);
            }
            else if (argsLen == 5) {
                obj = new classZ(args[0], args[1], args[2], args[3], args[4]);
            }
            obj.ObjectPoolKey = refKey;
            return obj;
        }
    };
    /**
     * 取出一个对象
     * @param refKey Class
     * @param extraKey 标识值
     * @returns {any}
     */
    ObjectPool.popWithExtraKey = function (refKey, extraKey) {
        if (!ObjectPool._content[refKey]) {
            ObjectPool._content[refKey] = [];
        }
        var obj;
        var list = ObjectPool._content[refKey];
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].extraKey == extraKey) {
                    obj = list[i];
                    list.splice(i, 1);
                    break;
                }
            }
        }
        if (!obj) {
            var classZ = egret.getDefinitionByName(refKey);
            obj = new classZ(extraKey);
            obj.extraKey = extraKey;
            obj.ObjectPoolKey = refKey;
        }
        return obj;
    };
    /**
     * 放入一个对象
     * @param obj
     *
     */
    ObjectPool.push = function (obj) {
        if (obj == null) {
            return false;
        }
        var refKey = obj.ObjectPoolKey;
        //保证只有pop出来的对象可以放进来，或者是已经清除的无法放入
        if (!ObjectPool._content[refKey]) {
            return false;
        }
        ObjectPool._content[refKey].push(obj);
        return true;
    };
    /**
     * 清除所有对象
     */
    ObjectPool.clear = function () {
        ObjectPool._content = {};
    };
    /**
     * 清除某一类对象
     * @param classZ Class
     * @param clearFuncName 清除对象需要执行的函数
     */
    ObjectPool.clearClass = function (refKey, clearFuncName) {
        if (clearFuncName === void 0) { clearFuncName = null; }
        var list = ObjectPool._content[refKey];
        while (list && list.length) {
            var obj = list.pop();
            if (clearFuncName) {
                obj[clearFuncName]();
            }
            obj = null;
        }
        ObjectPool._content[refKey] = null;
        delete ObjectPool._content[refKey];
    };
    /**
     * 缓存中对象统一执行一个函数
     * @param classZ Class
     * @param dealFuncName 要执行的函数名称
     */
    ObjectPool.dealFunc = function (refKey, dealFuncName) {
        var list = ObjectPool._content[refKey];
        if (list == null) {
            return;
        }
        var i = 0;
        var len = list.length;
        for (i; i < len; i++) {
            list[i][dealFuncName]();
        }
    };
    ObjectPool._content = {};
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
/*
 * Filename: /Library/WebServer/Documents/DDI-workspace/EgretGameEngine/src/core/utils/PageViewUtils.ts
 * Path: /Library/WebServer/Documents/DDI-workspace/EgretGameEngine/src/core/utils
 * Created Date: Wednesday, September 30th 2020, 10:08:16 am
 * Author: sean
 *
 * Copyright (c) 2020 Your Company
 */
var PageViewUtils = (function (_super) {
    __extends(PageViewUtils, _super);
    function PageViewUtils() {
        return _super.call(this) || this;
    }
    PageViewUtils.prototype.initPageView = function (oldViewConst, newViewConst) {
        // 旧页面
        var old = App.ViewManager.getView(oldViewConst);
        App.ViewManager.close(oldViewConst);
        old['allView'].map(function (_) {
            App.ViewManager.close(_);
        });
        // 新页面
        App.ViewManager.open(newViewConst);
    };
    return PageViewUtils;
}(SingtonClass));
__reflect(PageViewUtils.prototype, "PageViewUtils");
/**
 * Created by yangsong on 2014/11/23.
 * 百分比类
 */
var Percent = (function () {
    /**
     * 构造函数
     * @param $currentValue 当前值
     * @param $totalValue 总值
     */
    function Percent($currentValue, $totalValue) {
        this.currentValue = $currentValue;
        this.totalValue = $totalValue;
    }
    /**
     * 计算当前百分比
     * @returns {number}
     */
    Percent.prototype.computePercent = function () {
        return this.currentValue / this.totalValue * 100;
    };
    /**
     * 计算当前比例
     * @returns {number}
     */
    Percent.prototype.computeRate = function () {
        return this.currentValue / this.totalValue;
    };
    /**
     * 反转
     * @returns {Percent}
     */
    Percent.prototype.reverse = function () {
        this.currentValue = this.totalValue - this.currentValue;
        return this;
    };
    /**
     * 复制
     * @returns {Percent}
     */
    Percent.prototype.copy = function () {
        return new Percent(this.currentValue, this.totalValue);
    };
    /**
     * 计算百分比反转
     * @returns {number}
     */
    Percent.prototype.computePercentReverse = function () {
        return (this.totalValue - this.currentValue) / this.totalValue * 100;
    };
    /**
     * 计算比例反转
     * @returns {number}
     */
    Percent.prototype.computeRateReverse = function () {
        return (this.totalValue - this.currentValue) / this.totalValue;
    };
    return Percent;
}());
__reflect(Percent.prototype, "Percent");
var PopUp = (function (_super) {
    __extends(PopUp, _super);
    function PopUp() {
        var _this = _super.call(this) || this;
        _this.loaded = false;
        return _this;
    }
    PopUp.prototype.loading = function (vm, labelText, alpha) {
        var _this = this;
        if (!this.loaded) {
            alpha ? "" : alpha = 0.5;
            this.rect = new eui.Rect();
            this.group = new eui.Group();
            this.label = new eui.Label();
            this.rect.fillAlpha = alpha;
            this.rect.left = this.rect.right = this.rect.top = this.rect.bottom = 0;
            typeof labelText == 'string' ? this.label.text = labelText : this.label.textFlow = labelText;
            this.label.horizontalCenter = this.label.verticalCenter = 0;
            // this.group.left = this.group.right = this.group.top = this.group.bottom = 0;
            this.group.addChild(this.rect);
            // this.group.addChild(this.label)
            var json_1, img_1;
            RES.getResAsync("loading_json").then(function (jo) {
                json_1 = jo;
                if (json_1 && img_1) {
                    _this.layoutMC(json_1, img_1, 'loading', vm);
                }
            });
            RES.getResAsync("loading_png").then(function (ig) {
                img_1 = ig;
                if (json_1 && img_1) {
                    console.log('--- here run loading json');
                    _this.layoutMC(json_1, img_1, 'loading', vm);
                }
            });
            this.group.visible = true;
            this.label.visible = true;
            this.group.width = vm.width;
            this.group.height = vm.height;
            this.group.verticalCenter = 0;
            vm.addChildAt(this.group, 1000000);
            this.loaded = true;
        }
        this.group.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            e.stopImmediatePropagation();
        }, this);
    };
    PopUp.prototype.layoutMC = function (json, img, type, vm) {
        var mcFactory = new egret.MovieClipDataFactory(json, img);
        this.flowerMC = new egret.MovieClip(mcFactory.generateMovieClipData());
        this.group.addChild(this.flowerMC);
        this.flowerMC.gotoAndPlay('loading', 999);
        this.flowerMC.anchorOffsetX = -(vm.stageWidth) / 2 - 80;
        this.flowerMC.anchorOffsetY = -1100;
        this.flowerMC.y = -300;
        this.flowerMC.scaleX = this.flowerMC.scaleY = 0.8;
    };
    PopUp.prototype.hideLoading = function () {
        // 使group消失
        // this.group.visible = false;
        // 给rect更改透明度，但仍然block
        this.rect.fillAlpha = 0;
        if (this.label) {
            this.label.visible = false;
        }
        this.loaded = false;
    };
    PopUp.prototype.hideLoadingfalse = function () {
        if (this.group)
            this.group.visible = false;
        this.loaded = false;
    };
    PopUp.prototype.poptips = function (vm, tips) {
        var box = new eui.Group();
        var Group = new eui.Group();
        var rect = new eui.Rect();
        var label = new eui.Label();
        Group.addChildAt(rect, 0);
        Group.addChildAt(label, 1);
        Group.width = 400;
        Group.top = 200;
        // Group.horizontalCenter = 0;
        label.horizontalCenter = 0;
        label.verticalCenter = 0;
        label.right = label.left = 20;
        label.top = label.bottom = 30;
        label.textAlign = "center";
        label.lineSpacing = 10;
        rect.left = rect.right = rect.top = rect.bottom = 0;
        rect.fillAlpha = 0.5;
        rect.ellipseHeight = 20;
        rect.ellipseWidth = 20;
        label.text = tips;
        Group.x = (vm.width - Group.width) / 2;
        box.width = vm.width;
        box.height = vm.height;
        box.addChild(Group);
        this.group.addChildAt(box, 10000000);
        box.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('检测到tap事件');
            window.location.reload();
        }, this);
    };
    return PopUp;
}(SingtonClass));
__reflect(PopUp.prototype, "PopUp");
/**
 * Created by yangsong on 15-8-19.
 * 队列处理
 */
var QueueExecutor = (function () {
    /**
     * 构造函数
     */
    function QueueExecutor() {
        this._functions = new Array();
    }
    /**
     * 设置全部执行完成处理函数
     * @param callBack 此队列处理完成执行函数
     * @param callBackTarget 此队列处理完成执行函数所属对象
     */
    QueueExecutor.prototype.setCallBack = function (callBack, callBackTarget) {
        this._callBack = callBack;
        this._callBackTarget = callBackTarget;
    };
    /**
     * 注册需要队列处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    QueueExecutor.prototype.regist = function ($func, $thisObj) {
        this._functions.push([$func, $thisObj]);
    };
    /**
     * 开始执行
     */
    QueueExecutor.prototype.start = function () {
        this.next();
    };
    /**
     * 执行下一个
     */
    QueueExecutor.prototype.next = function () {
        if (!this._functions) {
            return;
        }
        if (this._functions.length == 0) {
            if (this._callBack) {
                this._callBack.call(this._callBackTarget);
            }
            this._callBack = null;
            this._callBackTarget = null;
            this._functions = null;
        }
        else {
            var arr = this._functions.shift();
            arr[0].call(arr[1]);
        }
    };
    return QueueExecutor;
}());
__reflect(QueueExecutor.prototype, "QueueExecutor");
/**
 * Created by yangsong on 2014/11/23.
 */
var RandomUtils = (function (_super) {
    __extends(RandomUtils, _super);
    function RandomUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    RandomUtils.prototype.limit = function ($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    };
    /**
     * 获取一个区间的随机数(整数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    RandomUtils.prototype.limitInteger = function ($from, $end) {
        return Math.floor(this.limit($from, $end + 1));
    };
    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    RandomUtils.prototype.randomArray = function (arr) {
        if (!arr) {
            return null;
        }
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    return RandomUtils;
}(SingtonClass));
__reflect(RandomUtils.prototype, "RandomUtils");
/**
 * cacheAsBitmap的替代方案，解决QQ浏览器在1G内存的机器上最多能使用20个Canvas的限制
 */
var RenderTextureManager = (function (_super) {
    __extends(RenderTextureManager, _super);
    /**
     * 构造函数
     */
    function RenderTextureManager() {
        var _this = _super.call(this) || this;
        _this._pool = [];
        _this._useNum = 0;
        if (_this.isLowerQQBrowser()) {
            _this._maxNum = 18;
        }
        else {
            _this._maxNum = -1;
        }
        return _this;
    }
    /**
     * 是否是低端手机的QQ浏览器
     * @returns {boolean}
     */
    RenderTextureManager.prototype.isLowerQQBrowser = function () {
        if (App.DeviceUtils.IsQQBrowser) {
            //判定机型，因为拿不到内存信息，现在只能根据机型进行判定
            var arr = [
                "2013022",
                "Lenovo A630t",
                "SM-G3818",
                "vivo X3t",
                "GT-I9100"
            ];
            var lower = false;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (navigator.userAgent.indexOf(arr[i]) != -1) {
                    lower = true;
                    break;
                }
            }
            return lower;
        }
        return false;
    };
    /**
     * 获取一个egret.RenderTexture
     * @returns {egret.RenderTexture}
     */
    RenderTextureManager.prototype.pop = function () {
        var result = this._pool.pop();
        if (!result) {
            if (this._maxNum == -1 || this._useNum < this._maxNum) {
                result = new egret.RenderTexture();
                this._useNum++;
            }
        }
        return result;
    };
    /**
     * 回收一个egret.RenderTexture
     * @param texture
     */
    RenderTextureManager.prototype.push = function (texture) {
        var exists = false;
        for (var i = 0, len = this._pool.length; i < len; i++) {
            if (this._pool[i] == texture) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            this._pool.push(texture);
        }
    };
    return RenderTextureManager;
}(SingtonClass));
__reflect(RenderTextureManager.prototype, "RenderTextureManager");
/**
 * Created by yangsong on 15-2-11.
 * 资源加载工具类，
 * 支持多个resource.json文件加载
 * 封装Group的加载
 * 增加静默加载机制
 */
var ResourceUtils = (function (_super) {
    __extends(ResourceUtils, _super);
    /**
     * 构造函数
     */
    function ResourceUtils() {
        var _this = _super.call(this) || this;
        _this._groupIndex = 0;
        _this._configs = new Array();
        _this._groups = {};
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, _this.onResourceLoadProgress, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, _this.onResourceLoadError, _this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, _this.onResourceItemLoadError, _this);
        return _this;
    }
    /**
     * 添加一个配置文件
     * @param jsonPath resource.json路径
     * @param filePath 访问资源路径
     */
    ResourceUtils.prototype.addConfig = function (jsonPath, filePath) {
        this._configs.push([jsonPath, filePath]);
    };
    /**
     * 开始加载配置文件
     * @param $onConfigComplete 加载完成执行函数
     * @param $onConfigCompleteTarget 加载完成执行函数所属对象
     */
    ResourceUtils.prototype.loadConfig = function ($onConfigComplete, $onConfigCompleteTarget) {
        this._onConfigComplete = $onConfigComplete;
        this._onConfigCompleteTarget = $onConfigCompleteTarget;
        this.loadNextConfig();
    };
    /**
     * 加载
     */
    ResourceUtils.prototype.loadNextConfig = function () {
        //加载完成
        if (this._configs.length == 0) {
            this._onConfigComplete.call(this._onConfigCompleteTarget);
            this._onConfigComplete = null;
            this._onConfigCompleteTarget = null;
            return;
        }
        var arr = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        RES.loadConfig(arr[0], arr[1]);
    };
    /**
     * 加载完成
     * @param event
     */
    ResourceUtils.prototype.onConfigCompleteHandle = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        this.loadNextConfig();
    };
    /**
     * 加载资源组
     * @param $groupName 资源组名称
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    ResourceUtils.prototype.loadGroup = function ($groupName, $onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget) {
        this._groups[$groupName] = [$onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget];
        RES.loadGroup($groupName);
    };
    /**
     * 同时加载多个组
     * @param $groupName 自定义的组名称
     * @param $subGroups 所包含的组名称或者key名称数组
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    ResourceUtils.prototype.loadGroups = function ($groupName, $subGroups, $onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget) {
        RES.createGroup($groupName, $subGroups, true);
        this.loadGroup($groupName, $onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget);
    };
    /**
     * 静默加载
     * @param $groupName 资源组名称
     * @param $groupName 所包含的组名称或者key名称数组
     */
    ResourceUtils.prototype.pilfererLoadGroup = function ($groupName, $subGroups) {
        if ($subGroups === void 0) { $subGroups = null; }
        //添加前缀，防止与正常加载组名重复
        var useGroupName = "pilferer_" + $groupName;
        if (!$subGroups) {
            $subGroups = [$groupName];
        }
        RES.createGroup(useGroupName, $subGroups, true);
        RES.loadGroup(useGroupName, -1);
    };
    /**
     * 资源组加载完成
     */
    ResourceUtils.prototype.onResourceLoadComplete = function (event) {
        var groupName = event.groupName;
        if (this._groups[groupName]) {
            var loadComplete = this._groups[groupName][0];
            var loadCompleteTarget = this._groups[groupName][2];
            if (loadComplete != null) {
                loadComplete.apply(loadCompleteTarget, [groupName]);
            }
            this._groups[groupName] = null;
            delete this._groups[groupName];
        }
    };
    /**
     * 资源组加载进度
     */
    ResourceUtils.prototype.onResourceLoadProgress = function (event) {
        var groupName = event.groupName;
        if (this._groups[groupName]) {
            var loadProgress = this._groups[groupName][1];
            var loadProgressTarget = this._groups[groupName][2];
            if (loadProgress != null) {
                loadProgress.call(loadProgressTarget, event.itemsLoaded, event.itemsTotal);
            }
        }
    };
    /**
     * 资源组加载失败
     * @param event
     */
    ResourceUtils.prototype.onResourceLoadError = function (event) {
        Log.warn(event.groupName + "资源组有资源加载失败");
        this.onResourceLoadComplete(event);
    };
    /**
     * 资源加载失败
     * @param event
     */
    ResourceUtils.prototype.onResourceItemLoadError = function (event) {
        Log.warn(event.resItem.url + "资源加载失败");
        if (this._itemLoadErrorFunction) {
            this._itemLoadErrorFunction(event);
        }
    };
    /**
     * 注册资源加载失败处理函数
     */
    ResourceUtils.prototype.registerItemLoadErrorFunction = function (func) {
        this._itemLoadErrorFunction = func;
    };
    /**
     * 混合加载资源组
     * @param $resources 资源数组
     * @param $groups 资源组数组
     * @param $onResourceLoadComplete 资源加载完成执行函数
     * @param $onResourceLoadProgress 资源加载进度监听函数
     * @param $onResourceLoadTarget 资源加载监听函数所属对象
     */
    ResourceUtils.prototype.loadResource = function ($resources, $groups, $onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget) {
        if ($resources === void 0) { $resources = []; }
        if ($groups === void 0) { $groups = []; }
        if ($onResourceLoadComplete === void 0) { $onResourceLoadComplete = null; }
        if ($onResourceLoadProgress === void 0) { $onResourceLoadProgress = null; }
        if ($onResourceLoadTarget === void 0) { $onResourceLoadTarget = null; }
        var needLoadArr = $resources.concat($groups);
        var groupName = "loadGroup" + this._groupIndex++;
        RES.createGroup(groupName, needLoadArr, true);
        this._groups[groupName] = [$onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget];
        RES.loadGroup(groupName);
    };
    /**
     * 动态创建加载组
     * @param {string} $groupName
     * @param {string[]} resKeys
     */
    ResourceUtils.prototype.createGroup = function ($groupName, resKeys) {
        RES.createGroup($groupName, resKeys, true);
    };
    /**
     * 动态创建Resource
     * @param {string} resKey
     * @param {string} resType
     * @param {string} resUrl
     */
    ResourceUtils.prototype.createResource = function (resKey, resType, resUrl) {
        var res = {
            name: resKey,
            type: resType,
            url: resUrl
        };
        RES.$addResourceData(res);
    };
    /**
     * 获取文件的真实路径
     */
    ResourceUtils.prototype.getFileRealPath = function (key) {
        var fileInfo = RES.getResourceInfo(key);
        return fileInfo.root + fileInfo.url;
    };
    return ResourceUtils;
}(SingtonClass));
__reflect(ResourceUtils.prototype, "ResourceUtils");
/**
 * Created by yangsong on 15-1-27.
 * 摇杆控制类
 */
var RockerUtils = (function (_super) {
    __extends(RockerUtils, _super);
    function RockerUtils() {
        return _super.call(this) || this;
    }
    /**
     * 摇杆初始化
     * @param moveBg 摇杆背景图
     * @param moveFlag 摇杆图标
     * @param dealKeyFunc 摇杆移动时处理函数
     * @param dealKeyTarget 摇杆移动时处理函数所属对象
     */
    RockerUtils.prototype.init = function (moveBg, moveFlag, dealKeyFunc, dealKeyTarget) {
        this.keys = [0, 0];
        this.mouseX = -1;
        this.mouseY = -1;
        this.moveFlag = moveFlag;
        this.moveFlagX = moveFlag.x;
        this.moveFlagY = moveFlag.y;
        this.moveFlagGoX = this.moveFlagX;
        this.moveFlagGoY = this.moveFlagY;
        this.moveFlagWidthHelf = moveBg.width * 0.5;
        this.moveFlagRec = new egret.Rectangle(this.moveFlagX - moveBg.width * 0.5, this.moveFlagY - moveBg.height * 0.5, moveBg.width, moveBg.height);
        this.moveFlagCheckRec = new egret.Rectangle(0, 0, App.StageUtils.getWidth() * 0.5, App.StageUtils.getHeight());
        this.dealKeyFunc = dealKeyFunc;
        this.dealKeyTarget = dealKeyTarget;
        this.moveFlag.touchEnabled = true;
        this.moveFlag.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        this.moveFlag.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
        this.moveFlag.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopEvent, this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_END, this.leaveStateEvent, this);
        App.StageUtils.getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, this.heroMoveEvent, this);
        //键盘控制
        App.KeyboardUtils.addKeyDown(this.onKeyDown, this);
        App.KeyboardUtils.addKeyUp(this.onKeyUp, this);
    };
    /**
     * 键盘按下处理
     * @param keyCode
     */
    RockerUtils.prototype.onKeyDown = function (keyCode) {
        switch (keyCode) {
            case Keyboard.A:
                this.keys[0] = -1;
                this.startCheckKey();
                break;
            case Keyboard.D:
                this.keys[0] = 1;
                this.startCheckKey();
                break;
            case Keyboard.W:
                this.keys[1] = -1;
                this.startCheckKey();
                break;
            case Keyboard.S:
                this.keys[1] = 1;
                this.startCheckKey();
                break;
            default:
                break;
        }
    };
    /**
     * 键盘弹起处理
     * @param keyCode
     */
    RockerUtils.prototype.onKeyUp = function (keyCode) {
        switch (keyCode) {
            case Keyboard.A:
                if (this.keys[0] == -1) {
                    this.keys[0] = 0;
                }
                break;
            case Keyboard.D:
                if (this.keys[0] == 1) {
                    this.keys[0] = 0;
                }
                break;
            case Keyboard.W:
                if (this.keys[1] == -1) {
                    this.keys[1] = 0;
                }
                break;
            case Keyboard.S:
                if (this.keys[1] == 1) {
                    this.keys[1] = 0;
                }
                break;
            default:
                break;
        }
    };
    /**
     * 事件拦截
     * @param e
     */
    RockerUtils.prototype.stopEvent = function (e) {
        e.stopPropagation();
    };
    /**
     * 手指离开Stage事件处理
     * @param e
     */
    RockerUtils.prototype.leaveStateEvent = function (e) {
        if (e.stageX == this.mouseX && e.stageY == this.mouseY) {
            this.stopMove();
        }
    };
    /**
     * 开始移动
     */
    RockerUtils.prototype.startMove = function (e) {
        this.isMoveing = true;
        this.moveFlagGoX = this.moveFlagX;
        this.moveFlagGoY = this.moveFlagY;
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    /**
     * 停止移动
     */
    RockerUtils.prototype.stopMove = function () {
        this.isMoveing = false;
        this.keys[0] = 0;
        this.keys[1] = 0;
        this.moveFlagGoX = this.moveFlagX;
        this.moveFlagGoY = this.moveFlagY;
        this.mouseX = -1;
        this.mouseY = -1;
    };
    /**
     * 复位摇杆位置
     */
    RockerUtils.prototype.resetRockerPos = function () {
        this.moveFlag.x = this.moveFlagX;
        this.moveFlag.y = this.moveFlagY;
    };
    /**
     * 摇杆移动事件
     * @param e
     */
    RockerUtils.prototype.heroMoveEvent = function (e) {
        this.runMove(e.stageX, e.stageY);
    };
    /**
     * 摇杆移动
     * @param e
     */
    RockerUtils.prototype.runMove = function (stageX, stageY) {
        if (!this.isMoveing) {
            return;
        }
        if (!this.moveFlagCheckRec.contains(stageX, stageY)) {
            if (Math.abs(this.mouseX - stageX) > 50 || Math.abs(this.mouseY - stageY) > 50) {
                return;
            }
        }
        this.mouseX = stageX;
        this.mouseY = stageY;
        if (this.moveFlagRec.contains(this.mouseX, this.mouseY)) {
            this.moveFlagGoX = this.mouseX;
            this.moveFlagGoY = this.mouseY;
        }
        else {
            var radian = App.MathUtils.getRadian2(this.moveFlagX, this.moveFlagY, this.mouseX, this.mouseY);
            this.moveFlagGoX = this.moveFlagX + Math.cos(radian) * this.moveFlagWidthHelf;
            this.moveFlagGoY = this.moveFlagY + Math.sin(radian) * this.moveFlagWidthHelf;
        }
        if (this.moveFlagGoX > this.moveFlagX && Math.abs(this.moveFlagGoX - this.moveFlagX) > 10) {
            this.keys[0] = 1;
        }
        else if (this.moveFlagGoX < this.moveFlagX && Math.abs(this.moveFlagGoX - this.moveFlagX) > 10) {
            this.keys[0] = -1;
        }
        else {
            this.keys[0] = 0;
        }
        if (this.moveFlagGoY > this.moveFlagY && Math.abs(this.moveFlagGoY - this.moveFlagY) > 10) {
            this.keys[1] = 1;
        }
        else if (this.moveFlagGoY < this.moveFlagY && Math.abs(this.moveFlagGoY - this.moveFlagY) > 10) {
            this.keys[1] = -1;
        }
        else {
            this.keys[1] = 0;
        }
        this.startCheckKey();
    };
    /**
     * 开启检测
     */
    RockerUtils.prototype.startCheckKey = function () {
        if (!this.checkKeying) {
            this.checkKeying = true;
            App.TimerManager.doFrame(1, 0, this.delKeys, this);
        }
    };
    /**
     * 停止检测
     */
    RockerUtils.prototype.stopCheckKey = function () {
        this.keys[0] = 0;
        this.keys[1] = 0;
        if (this.checkKeying) {
            App.TimerManager.remove(this.delKeys, this);
            this.checkKeying = false;
        }
    };
    /**
     * 检测
     */
    RockerUtils.prototype.delKeys = function () {
        if (this.mouseX != -1 && !this.moveFlagCheckRec.contains(this.mouseX, this.mouseY)) {
            this.stopMove();
        }
        if (this.moveFlag.x != this.moveFlagGoX) {
            this.moveFlag.x = this.moveFlagGoX;
        }
        if (this.moveFlag.y != this.moveFlagGoY) {
            this.moveFlag.y = this.moveFlagGoY;
        }
        if (!this.keys[0] && !this.keys[1]) {
            this.stopCheckKey();
        }
        if (!this.dealKeyFunc.call(this.dealKeyTarget, this.keys[0], this.keys[1])) {
            this.resetRockerPos();
        }
    };
    /**
     * 停止处理
     */
    RockerUtils.prototype.stop = function () {
        this.stopCheckKey();
        this.stopMove();
    };
    return RockerUtils;
}(SingtonClass));
__reflect(RockerUtils.prototype, "RockerUtils");
var Save = (function (_super) {
    __extends(Save, _super);
    function Save() {
        return _super.call(this) || this;
    }
    Save.prototype.send = function (currentView, index) {
        console.log("\u53D1\u9001\u4FDD\u5B58\u70B9\u4FE1\u606F" + currentView + "-" + index);
        egret.localStorage.setItem('savePoint', JSON.stringify({ currentView: currentView, index: index }));
    };
    return Save;
}(SingtonClass));
__reflect(Save.prototype, "Save");
var Savepoint = (function (_super) {
    __extends(Savepoint, _super);
    function Savepoint() {
        return _super.call(this) || this;
    }
    /**
     *stageNumber:1\2\3
     completePercent:百分比中的分子数字
     sceneStartClass:需要启动的场景类
     viewIndex:需要打开的view索引
     *
     */
    Savepoint.prototype.cacheSavepoint = function (savePoint) {
        console.log('here run cache');
        this._savePoint = savePoint;
    };
    Savepoint.prototype.takeSavepoint = function () {
        return this._savePoint;
    };
    Object.defineProperty(Savepoint.prototype, "tempData", {
        get: function () {
            return this._tempData;
        },
        set: function (tempData) {
            this._tempData = tempData;
        },
        enumerable: true,
        configurable: true
    });
    return Savepoint;
}(SingtonClass));
__reflect(Savepoint.prototype, "Savepoint");
var SceneReview = (function (_super) {
    __extends(SceneReview, _super);
    function SceneReview() {
        return _super.call(this) || this;
    }
    /**
     *stageNumber:1\2\3
     completePercent:百分比中的分子数字
     sceneStartClass:需要启动的场景类
     viewIndex:需要打开的view索引
     *
     */
    SceneReview.prototype.replaceSceneReview = function (sceneReview) {
        this._sceneReviewString = sceneReview;
    };
    return SceneReview;
}(SingtonClass));
__reflect(SceneReview.prototype, "SceneReview");
/**
 * Created by Channing on 2014/12/6.
 * 震动
 */
var ShockUtils = (function (_super) {
    __extends(ShockUtils, _super);
    function ShockUtils() {
        var _this = _super.call(this) || this;
        _this.MAP = 0;
        _this.SPRITE = 1;
        _this.mapPoss = [new egret.Point(0, 3), new egret.Point(0, 0), new egret.Point(0, -2)];
        _this.spritePoss = [new egret.Point(5, 0), new egret.Point(-5, 0), new egret.Point(5, 0)];
        _this._shockLength = 0;
        _this._shockCount = 0;
        _this._rx = 0;
        _this._ry = 0;
        _this._type = 0;
        _this._repeatCount = 0;
        return _this;
    }
    ShockUtils.prototype.destroy = function () {
        this.stop();
    };
    ShockUtils.prototype.shock = function (type, target, repeatCount) {
        if (type === void 0) { type = 0; }
        if (target === void 0) { target = null; }
        if (repeatCount === void 0) { repeatCount = 3; }
        if (this._target) {
            return;
        }
        this._type = type;
        this._target = target;
        if (this._type == this.MAP) {
            this._shockPoss = this.mapPoss.concat();
            this._shockLength = this._shockPoss.length;
        }
        else if (this._type == this.SPRITE) {
            this._shockPoss = this.spritePoss.concat();
            this._shockLength = this._shockPoss.length;
        }
        this.start(repeatCount);
    };
    ShockUtils.prototype.start = function (num) {
        if (num === void 0) { num = 1; }
        this.repeatCount = num;
        this._shockCount = 0;
        if (this._target) {
            if (this._type != this.MAP) {
                this._rx = this._target.x;
            }
            this._ry = this._target.y;
            App.TimerManager.doFrame(1, 0, this.onShockEnter, this);
        }
    };
    ShockUtils.prototype.stop = function () {
        if (this._target) {
            if (this._type != this.MAP) {
                this._target.x = this._rx;
            }
            this._target.y = this._ry;
            App.TimerManager.remove(this.onShockEnter, this);
        }
        this._target = null;
    };
    ShockUtils.prototype.onShockEnter = function (time) {
        var maxCount = this._shockLength * this._repeatCount;
        if (this._shockCount >= maxCount) {
            this.stop();
            return;
        }
        var index = this._shockCount % this._shockLength;
        var pos = this._shockPoss[index];
        if (this._target) {
            if (this._type != this.MAP) {
                this._target.x = this._rx + pos.x;
            }
            this._target.y = this._ry + pos.y;
        }
        this._shockCount++;
    };
    Object.defineProperty(ShockUtils.prototype, "repeatCount", {
        get: function () {
            return this._repeatCount;
        },
        set: function (value) {
            this._repeatCount = value;
        },
        enumerable: true,
        configurable: true
    });
    return ShockUtils;
}(SingtonClass));
__reflect(ShockUtils.prototype, "ShockUtils");
/**
 * Created by yangsong on 2014/12/3.
 * Stage相关工具类
 */
var StageUtils = (function (_super) {
    __extends(StageUtils, _super);
    /**
     * 构造函数
     */
    function StageUtils() {
        return _super.call(this) || this;
    }
    /**
     * 获取游戏的高度
     * @returns {number}
     */
    StageUtils.prototype.getHeight = function () {
        return this.getStage().stageHeight;
    };
    /**
     * 获取游戏宽度
     * @returns {number}
     */
    StageUtils.prototype.getWidth = function () {
        return this.getStage().stageWidth;
    };
    /**
     * 指定此对象的子项以及子孙项是否接收鼠标/触摸事件
     * @param value
     */
    StageUtils.prototype.setTouchChildren = function (value) {
        this.getStage().touchChildren = value;
    };
    /**
     * 设置同时可触发几个点击事件，默认为2
     * @param value
     */
    StageUtils.prototype.setMaxTouches = function (value) {
        this.getStage().maxTouches = value;
    };
    /**
     * 设置帧频
     * @param value
     */
    StageUtils.prototype.setFrameRate = function (value) {
        this.getStage().frameRate = value;
    };
    /**
     * 设置适配方式
     * @param value
     */
    StageUtils.prototype.setScaleMode = function (value) {
        this.getStage().scaleMode = value;
    };
    /**
     * 获取游戏Stage对象
     * @returns {egret.MainContext}
     */
    StageUtils.prototype.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    StageUtils.prototype.startFullscreenAdaptation = function (designWidth, designHeight, resizeCallback) {
        this.designWidth = designWidth;
        this.designHeight = designHeight;
        this.resizeCallback = resizeCallback;
        this.stageOnResize();
    };
    StageUtils.prototype.stageOnResize = function () {
        this.getStage().removeEventListener(egret.Event.RESIZE, this.stageOnResize, this);
        var designWidth = this.designWidth;
        var designHeight = this.designHeight;
        var clientWidth = window.innerWidth;
        var clientHeight = window.innerHeight;
        var a = clientWidth / clientHeight;
        var b = designWidth / designHeight;
        var c = a / b;
        if (a > b) {
            var c1 = c;
            var c2 = c;
            designWidth = Math.floor(designWidth * c1);
            designHeight = Math.floor(designHeight * c2);
        }
        this.getStage().setContentSize(designWidth, designHeight);
        // console.log(a, b, c);
        // console.log(designWidth, designHeight);
        this.resizeCallback && this.resizeCallback();
        this.getStage().addEventListener(egret.Event.RESIZE, this.stageOnResize, this);
    };
    return StageUtils;
}(SingtonClass));
__reflect(StageUtils.prototype, "StageUtils");
var Step = (function (_super) {
    __extends(Step, _super);
    function Step() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Step.prototype, "stepMap", {
        get: function () {
            return this._stepMap;
        },
        set: function (stepMap) {
            this._stepMap = stepMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Step.prototype, "stepPoint", {
        get: function () {
            return this._stepPoint;
        },
        set: function (stepPoint) {
            this._stepPoint = stepPoint;
        },
        enumerable: true,
        configurable: true
    });
    return Step;
}(SingtonClass));
__reflect(Step.prototype, "Step");
/**
 * Created by yangsong on 2014/12/8.
 * StringBuffer类
 */
var StringBuffer = (function () {
    /**
     * 构造函数
     */
    function StringBuffer() {
        this._strings = new Array();
    }
    /**
     * 追加一个字符串
     * @param str
     */
    StringBuffer.prototype.append = function (str) {
        this._strings.push(str);
    };
    /**
     * 转换为字符串
     * @returns {string}
     */
    StringBuffer.prototype.toString = function () {
        return this._strings.join("");
    };
    /**
     * 清空
     */
    StringBuffer.prototype.clear = function () {
        this._strings.length = 0;
    };
    return StringBuffer;
}());
__reflect(StringBuffer.prototype, "StringBuffer");
/**
 * Created by yangsong on 14/12/18.
 * 字符串操作工具类
 */
var StringUtils = (function (_super) {
    __extends(StringUtils, _super);
    /**
     * 构造函数
     */
    function StringUtils() {
        return _super.call(this) || this;
    }
    /**
     * 去掉前后空格
     * @param str
     * @returns {string}
     */
    StringUtils.prototype.trimSpace = function (str) {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    };
    /**
     * 获取字符串长度，中文为2
     * @param str
     */
    StringUtils.prototype.getStringLength = function (str) {
        var strArr = str.split("");
        var length = 0;
        for (var i = 0; i < strArr.length; i++) {
            var s = strArr[i];
            if (this.isChinese(s)) {
                length += 2;
            }
            else {
                length += 1;
            }
        }
        return length;
    };
    /**
     * 判断一个字符串是否包含中文
     * @param str
     * @returns {boolean}
     */
    StringUtils.prototype.isChinese = function (str) {
        var reg = /^.*[\u4E00-\u9FA5]+.*$/;
        return reg.test(str);
    };
    /**
     * 格式化字符串 "{0},{1}.format("text0","text1")
     */
    StringUtils.prototype.format = function (val) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        for (var i = 0, len = param.length; i < len; i++) {
            var reg = new RegExp("({)" + i + "(})", "g");
            val = val.replace(reg, param[i]);
        }
        return val;
    };
    /**
     * 折行
     * @param text 文本
     * @param number 一行的字数
     */
    StringUtils.prototype.setSingleChar = function (text, number) {
        var oneLineTextNumber = number;
        var textFlow = new Array();
        var reg = /[/=|/？|/。|/，|/；|/!|/~|/^|/*|/?|/#|/@|/;|/&|/,|/-|/、]/;
        while (text.length > 0) {
            if (text.length <= oneLineTextNumber) {
                // 不用做操作，直接返回
                textFlow.push({ text: text });
                text = '';
            }
            else {
                // 需要判断
                var tempText = void 0;
                tempText = text.substr(0, oneLineTextNumber - 1);
                if (reg.test(text.substr(oneLineTextNumber, 1))) {
                    // 符合正则，推入下一行
                    // 修改text数据源
                    text = text.substr(oneLineTextNumber - 1);
                }
                else {
                    // 不符合正则，直接将index 为 19 推入这一行
                    tempText += text.substr(oneLineTextNumber - 1, 1);
                    // 修改text数据源
                    text = text.substr(oneLineTextNumber);
                }
                textFlow.push({ text: tempText + "\n" });
            }
        }
        return textFlow;
    };
    StringUtils.prototype.flowToText = function (flow) {
        var text = "";
        flow.map(function (item) {
            text += item.text;
        });
        return text.replace(/\n/g, '');
    };
    return StringUtils;
}(SingtonClass));
__reflect(StringUtils.prototype, "StringUtils");
/**
 * Created by Saco on 2015/10/26.
 */
var TextFlowMaker = (function (_super) {
    __extends(TextFlowMaker, _super);
    function TextFlowMaker() {
        var _this = _super.call(this) || this;
        _this.STYLE_COLOR = "C";
        _this.STYLE_SIZE = "S";
        _this.PROP_TEXT = "T";
        return _this;
    }
    /**
     * "你好|S:18&C:0xffff00&T:带颜色字号|S:50&T:大号字体|C:0x0000ff&T:带色字体";
     * @param sourceText
     * @returns {Array}
     */
    TextFlowMaker.prototype.generateTextFlow = function (sourceText) {
        var textArr = sourceText.split("|");
        var result = [];
        for (var i = 0, len = textArr.length; i < len; i++) {
            result.push(this.getSingleTextFlow(textArr[i]));
        }
        return result;
    };
    TextFlowMaker.prototype.getSingleTextFlow = function (text) {
        var textArr = text.split("&");
        var tempArr;
        var textFlow = { "style": {} };
        for (var i = 0, len = textArr.length; i < len; i++) {
            tempArr = textArr[i].split(":");
            if (tempArr[0] == this.PROP_TEXT) {
                textFlow.text = tempArr[1];
            }
            else if (tempArr[0] == this.STYLE_SIZE) {
                textFlow.style.size = parseInt(tempArr[1]);
            }
            else if (tempArr[0] == this.STYLE_COLOR) {
                textFlow.style.textColor = parseInt(tempArr[1]);
            }
            else {
                textFlow.text = tempArr[0];
            }
        }
        return textFlow;
    };
    return TextFlowMaker;
}(SingtonClass));
__reflect(TextFlowMaker.prototype, "TextFlowMaker");
/**
 * Created by yangsong on 2014/11/23.
 * Timer管理器
 */
var TimerManager = (function (_super) {
    __extends(TimerManager, _super);
    /**
     * 构造函数
     */
    function TimerManager() {
        var _this = _super.call(this) || this;
        _this._handlers = new Array();
        _this._delHandlers = new Array();
        _this._currTime = egret.getTimer();
        _this._currFrame = 0;
        _this._count = 0;
        _this._timeScale = 1;
        egret.Ticker.getInstance().register(_this.onEnterFrame, _this);
        return _this;
    }
    /**
     * 设置时间参数
     * @param timeScale
     */
    TimerManager.prototype.setTimeScale = function (timeScale) {
        this._timeScale = timeScale;
    };
    /**
     * 每帧执行函数
     * @param frameTime
     */
    TimerManager.prototype.onEnterFrame = function () {
        if (this._isPause) {
            return;
        }
        this._currFrame++;
        this._currTime = egret.getTimer();
        App.DebugUtils.start("TimerManager:");
        while (this._delHandlers.length) {
            this.removeHandle(this._delHandlers.pop());
        }
        for (var i = 0; i < this._count; i++) {
            var handler = this._handlers[i];
            if (this._delHandlers.indexOf(handler) != -1) {
                continue;
            }
            var t = handler.userFrame ? this._currFrame : this._currTime;
            if (t >= handler.exeTime) {
                App.DebugUtils.start(handler.method.toString());
                handler.method.call(handler.methodObj, (this._currTime - handler.dealTime) * this._timeScale);
                App.DebugUtils.stop(handler.method.toString());
                handler.dealTime = this._currTime;
                handler.exeTime += handler.delay;
                if (!handler.repeat) {
                    if (handler.repeatCount > 1) {
                        handler.repeatCount--;
                    }
                    else {
                        if (handler.complateMethod) {
                            handler.complateMethod.apply(handler.complateMethodObj);
                        }
                        if (this._delHandlers.indexOf(handler) == -1) {
                            this._delHandlers.push(handler);
                        }
                    }
                }
            }
        }
        App.DebugUtils.stop("TimerManager:");
    };
    TimerManager.prototype.removeHandle = function (handler) {
        var i = this._handlers.indexOf(handler);
        if (i == -1) {
            Log.warn("what????");
            return;
        }
        this._handlers.splice(i, 1);
        ObjectPool.push(handler);
        this._count--;
    };
    TimerManager.prototype.create = function (useFrame, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
        //参数监测
        if (delay < 0 || repeatCount < 0 || method == null) {
            return;
        }
        //先删除相同函数的计时
        this.remove(method, methodObj);
        //创建
        var handler = ObjectPool.pop("TimerHandler");
        handler.userFrame = useFrame;
        handler.repeat = repeatCount == 0;
        handler.repeatCount = repeatCount;
        handler.delay = delay;
        handler.method = method;
        handler.methodObj = methodObj;
        handler.complateMethod = complateMethod;
        handler.complateMethodObj = complateMethodObj;
        handler.exeTime = delay + (useFrame ? this._currFrame : this._currTime);
        handler.dealTime = this._currTime;
        this._handlers.push(handler);
        this._count++;
    };
    /**
     * 在指定的延迟（以毫秒为单位）后运行指定的函数。
     * @param delay 执行间隔:毫秒
     * @param method 执行函数
     * @param methodObj 执行函数所属对象
     */
    TimerManager.prototype.setTimeOut = function (delay, method, methodObj) {
        this.doTimer(delay, 1, method, methodObj);
    };
    /**
     * 在指定的帧后运行指定的函数。
     * @param delay 执行间隔:帧频
     * @param method 执行函数
     * @param methodObj 执行函数所属对象
     */
    TimerManager.prototype.setFrameOut = function (delay, method, methodObj) {
        this.doFrame(delay, 1, method, methodObj);
    };
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
    TimerManager.prototype.doTimer = function (delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
        if (complateMethod === void 0) { complateMethod = null; }
        if (complateMethodObj === void 0) { complateMethodObj = null; }
        this.create(false, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
    };
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
    TimerManager.prototype.doFrame = function (delay, repeatCount, method, methodObj, complateMethod, complateMethodObj) {
        if (complateMethod === void 0) { complateMethod = null; }
        if (complateMethodObj === void 0) { complateMethodObj = null; }
        this.create(true, delay, repeatCount, method, methodObj, complateMethod, complateMethodObj);
    };
    Object.defineProperty(TimerManager.prototype, "count", {
        /**
         * 定时器执行数量
         * @return
         *
         */
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 清理
     * @param method 要移除的函数
     * @param methodObj 要移除的函数对应的对象
     */
    TimerManager.prototype.remove = function (method, methodObj) {
        for (var i = 0; i < this._count; i++) {
            var handler = this._handlers[i];
            if (handler.method == method && handler.methodObj == methodObj && this._delHandlers.indexOf(handler) == -1) {
                this._delHandlers.push(handler);
                break;
            }
        }
    };
    /**
     * 清理
     * @param methodObj 要移除的函数对应的对象
     */
    TimerManager.prototype.removeAll = function (methodObj) {
        for (var i = 0; i < this._count; i++) {
            var handler = this._handlers[i];
            if (handler.methodObj == methodObj && this._delHandlers.indexOf(handler) == -1) {
                this._delHandlers.push(handler);
            }
        }
    };
    /**
     * 检测是否已经存在
     * @param method
     * @param methodObj
     *
     */
    TimerManager.prototype.isExists = function (method, methodObj) {
        for (var i = 0; i < this._count; i++) {
            var handler = this._handlers[i];
            if (handler.method == method && handler.methodObj == methodObj && this._delHandlers.indexOf(handler) == -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * 暂停
     */
    TimerManager.prototype.pause = function () {
        if (this._isPause) {
            return;
        }
        this._isPause = true;
        this._pauseTime = egret.getTimer();
    };
    /**
     * 从暂停中恢复
     */
    TimerManager.prototype.resume = function () {
        if (!this._isPause) {
            return;
        }
        this._isPause = false;
        this._currTime = egret.getTimer();
        var gap = this._currTime - this._pauseTime;
        for (var i = 0; i < this._count; i++) {
            var handler = this._handlers[i];
            handler.dealTime += gap;
            if (!handler.userFrame) {
                handler.exeTime += gap;
            }
        }
    };
    return TimerManager;
}(SingtonClass));
__reflect(TimerManager.prototype, "TimerManager");
var TimerHandler = (function () {
    function TimerHandler() {
        /**执行间隔*/
        this.delay = 0;
        /**重复执行次数*/
        this.repeatCount = 0;
        /**执行时间*/
        this.exeTime = 0;
        /**上次的执行时间*/
        this.dealTime = 0;
    }
    /**清理*/
    TimerHandler.prototype.clear = function () {
        this.method = null;
        this.methodObj = null;
        this.complateMethod = null;
        this.complateMethodObj = null;
    };
    return TimerHandler;
}());
__reflect(TimerHandler.prototype, "TimerHandler");
/**
 * Created by Saco on 2015/1/14.
 * hack引擎的点击事件
 */
var TouchEventHook = (function (_super) {
    __extends(TouchEventHook, _super);
    function TouchEventHook() {
        var _this = _super.call(this) || this;
        _this._eventCallDic = {};
        return _this;
    }
    Object.defineProperty(TouchEventHook.prototype, "systemTouch", {
        get: function () {
            return egret.sys.$TempStage.$screen["webTouchHandler"].touch;
        },
        enumerable: true,
        configurable: true
    });
    /*
    * eventType:绑定事件类型，TOUCH_BEGIN、TOUCH_MOVE、TOUCH_END
    * bindCall:接受参数为点击事件的坐标x,y,identifier
    * */
    TouchEventHook.prototype.hookTouchEvent = function (eventType, bindCall) {
        if (!this._eventCallDic.hasOwnProperty(eventType)) {
            this.restoreEvent(eventType);
        }
        switch (eventType) {
            case egret.TouchEvent.TOUCH_BEGIN: {
                this.systemTouch.onTouchBegan = bindCall;
                break;
            }
            case egret.TouchEvent.TOUCH_MOVE: {
                this.systemTouch.onTouchMove = bindCall;
                break;
            }
            case egret.TouchEvent.TOUCH_END: {
                this.systemTouch.onTouchEnd = bindCall;
                break;
            }
        }
    };
    TouchEventHook.prototype.restoreEvent = function (eventType) {
        switch (eventType) {
            case egret.TouchEvent.TOUCH_BEGIN: {
                this._eventCallDic[eventType] = this.systemTouch.onTouchBegan;
                break;
            }
            case egret.TouchEvent.TOUCH_MOVE: {
                this._eventCallDic[eventType] = this.systemTouch.onTouchMove;
                break;
            }
            case egret.TouchEvent.TOUCH_END: {
                this._eventCallDic[eventType] = this.systemTouch.onTouchEnd;
                break;
            }
        }
    };
    /*
    * 释放绑定的点击事件
    * eventType:绑定事件类型，TOUCH_BEGIN、TOUCH_MOVE、TOUCH_END
    */
    TouchEventHook.prototype.releaseTouchEvent = function (eventType) {
        switch (eventType) {
            case egret.TouchEvent.TOUCH_BEGIN: {
                this.systemTouch.onTouchBegan = this._eventCallDic[eventType];
                break;
            }
            case egret.TouchEvent.TOUCH_MOVE: {
                this.systemTouch.onTouchMove = this._eventCallDic[eventType];
                break;
            }
            case egret.TouchEvent.TOUCH_END: {
                this.systemTouch.onTouchEnd = this._eventCallDic[eventType];
                break;
            }
        }
    };
    return TouchEventHook;
}(SingtonClass));
__reflect(TouchEventHook.prototype, "TouchEventHook");
/**
 * Tween工具类
 */
var TweenUtils = (function (_super) {
    __extends(TweenUtils, _super);
    function TweenUtils() {
        var _this = _super.call(this) || this;
        _this.FAST = 300;
        _this.STABLE = 500;
        _this.SLOW = 700;
        return _this;
    }
    /**
     * 暂停所有的Tween
     */
    TweenUtils.prototype.pause = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.paused = true;
        }
    };
    /**
     * 从暂停中恢复
     */
    TweenUtils.prototype.resume = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.paused = false;
        }
    };
    /**
     * 清除所有动画
     */
    TweenUtils.prototype.removeAllTween = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.removeAllTween();
        }
    };
    /**
     * 从中心扩张
     */
    TweenUtils.prototype.enLarge = function (vm, time) {
        var tweens = egret.Tween.get(vm);
        vm.scaleX = vm.scaleY = vm.alpha = 0;
        time = time ? time : 450;
        var key = tweens.to({ scaleX: 1, scaleY: 1, alpha: 1 }, time, egret.Ease.sineIn);
        return key;
    };
    /**
     * 向中心消失
     * @param vm
     * @param time
     */
    TweenUtils.prototype.deLarge = function (vm, time) {
        var tweens = egret.Tween.get(vm);
        vm.scaleX = vm.scaleY = vm.alpha = 1;
        time = time ? time : 350;
        var key = tweens.to({ scaleX: 0, scaleY: 0, alpha: 0 }, time, egret.Ease.sineIn);
        return key;
    };
    /**
     * 放大后进入
     */
    TweenUtils.prototype.scaleIn = function (vm) {
        var tw = egret.Tween.get(vm);
        vm.alpha = 0;
        vm.scaleX = vm.scaleY = 1.2;
        var key = tw.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 450, egret.Ease.sineIn);
        return key;
    };
    /**
     * 退出并放大
     */
    TweenUtils.prototype.scaleOut = function (vm) {
        var tw = egret.Tween.get(vm);
        vm.alpha = 1;
        vm.scaleX = vm.scaleY = 1;
        var key = tw.to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 350, egret.Ease.sineIn);
        return key;
    };
    /**
     * 左侧飞入
     */
    TweenUtils.prototype.fromLeft = function (vm) {
        var tweens = egret.Tween.get(vm);
        tweens.to({ scaleX: 0.5, scaleY: 0.5 }).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.sineIn);
    };
    /**
     *
     * @param vm
     * 循环放大&缩小
     */
    TweenUtils.prototype.loopLarge = function (vm) {
        var tweens = egret.Tween.get(vm, { loop: true });
        tweens.to({ scaleX: 0.5, scaleY: 0.5 }, this.STABLE, egret.Ease.sineIn).to({ scaleX: 1, scaleY: 1 }, this.STABLE, egret.Ease.sineIn);
    };
    /**
     *
     * @param vm
     * 循环旋转
     */
    TweenUtils.prototype.rotation = function (vm) {
        var tweens = egret.Tween.get(vm, { loop: true });
        tweens.to({ rotation: 50 }, this.STABLE).to({ rotation: 0 }, this.STABLE).to({ rotation: -50 }, this.STABLE).to({ rotation: 0 }, this.STABLE);
    };
    /**
     * 背景移动
     */
    TweenUtils.prototype.backMove = function (vm, x) {
        var tweens = egret.Tween.get(vm);
        tweens.to({ left: x }, this.STABLE);
    };
    TweenUtils.prototype.reset = function (vm) {
        egret.Tween.removeTweens(vm);
    };
    /**
     * select动态条
     */
    TweenUtils.prototype.selectIncrease = function (vm, width, delay) {
        var tw = egret.Tween.get(vm);
        delay = delay ? delay : 4000;
        console.log('here run selectIncrease: ' + width);
        return tw.to({ width: width }, delay);
    };
    /**
     * 旋转
     */
    TweenUtils.prototype.spin = function (vm) {
        var tw = egret.Tween.get(vm);
        // console.log(vm)
        tw.to({ rotation: 360 }, 20000, egret.Ease.sineIn);
    };
    /**
     * 淡入
     */
    TweenUtils.prototype.fadeIn = function (vm) {
        console.log('here run fadeIn');
        vm.alpha = 0;
        var tw = egret.Tween.get(vm);
        var key = tw.to({ alpha: 1 }, 500, egret.Ease.sineIn);
        return key;
    };
    /**
     * 淡出
     */
    TweenUtils.prototype.fadeOut = function (vm) {
        console.log('here run fadeOut');
        console.log(vm);
        vm.alpha = 1;
        var tw = egret.Tween.get(vm);
        var key = tw.to({ alpha: 0 }, 350, egret.Ease.sineIn);
        return key;
    };
    return TweenUtils;
}(SingtonClass));
__reflect(TweenUtils.prototype, "TweenUtils");
var UserInfo = (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super.call(this) || this;
    }
    /**
     *stageNumber:1\2\3
     completePercent:百分比中的分子数字
     sceneStartClass:需要启动的场景类
     viewIndex:需要打开的view索引
     *
     */
    UserInfo.prototype.cacheUserInfo = function (_userInfo) {
        this._userInfo = _userInfo;
    };
    UserInfo.prototype.takeUserInfo = function () {
        return this._userInfo;
    };
    UserInfo.prototype.cacheCardId = function (cardId) {
        this._cardId = cardId;
    };
    UserInfo.prototype.takeCardId = function () {
        return this._cardId;
    };
    return UserInfo;
}(SingtonClass));
__reflect(UserInfo.prototype, "UserInfo");
