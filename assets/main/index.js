System.register("chunks:///_virtual/Audio.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sound.ts"],(function(i){var n,e,u,t,o,r,c,l,a,s,p;return{setters:[function(i){n=i.applyDecoratedDescriptor,e=i.inheritsLoose,u=i.initializerDefineProperty,t=i.assertThisInitialized},function(i){o=i.cclegacy,r=i._decorator,c=i.Sprite,l=i.SpriteFrame,a=i.AudioSource,s=i.Component},function(i){p=i.default}],execute:function(){var f,S,d,h,M,b,g,m,y,O,v,w,z,A,F,P,T,C,B,D,L,N,_,I;o._RF.push({},"01c23Kz57ZBLIVzUXnsOtDK","Audio",void 0);var K=r.ccclass,R=r.property;i("Audio",(f=K("Audio"),S=R(p),d=R(p),h=R(c),M=R(c),b=R(l),g=R(l),m=R(l),y=R(l),O=R(a),v=R(a),f(((I=function(i){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n=i.call.apply(i,[this].concat(o))||this,u(n,"MusicManager",A,t(n)),u(n,"SoundManager",F,t(n)),u(n,"MusicSprite",P,t(n)),u(n,"SoundSprite",T,t(n)),u(n,"MusicOn",C,t(n)),u(n,"MusicOff",B,t(n)),u(n,"SoundOn",D,t(n)),u(n,"SoundOff",L,t(n)),u(n,"MusicSource",N,t(n)),u(n,"SoundSource",_,t(n)),n.One=!0,n.Two=!0,n}e(n,i);var o=n.prototype;return o.onLoad=function(){n.instance=this},o.MusicPlay=function(i){var n=this.MusicManager.find((function(n){return n.Name==i}));null==n?console.log("Music not found"):(this.MusicSource.clip=n.AudioClicp,this.MusicSource.play())},o.MusicPause=function(i){var n=this.MusicManager.find((function(n){return n.Name==i}));null==n?console.log("Music not found"):(this.MusicSource.clip=n.AudioClicp,this.MusicSource.stop())},o.SoundPlay=function(i){var n=this.SoundManager.find((function(n){return n.Name==i}));null==n?console.log("Sound not found"):(this.SoundSource.clip=n.AudioClicp,this.SoundSource.play())},o.SoundPause=function(i){var n=this.SoundManager.find((function(n){return n.Name==i}));null==n?console.log("Sound not found"):(this.SoundSource.clip=n.AudioClicp,this.SoundSource.stop())},o.MusicButton=function(){this.One=!this.One,this.One?this.One&&(this.MusicSource.volume=1,this.MusicSprite.spriteFrame=this.MusicOn):(this.MusicSource.volume=0,this.MusicSprite.spriteFrame=this.MusicOff)},o.SoundButton=function(){this.Two=!this.Two,this.Two?this.Two&&(this.SoundSource.volume=1,this.SoundSprite.spriteFrame=this.SoundOn):(this.SoundSource.volume=0,this.SoundSprite.spriteFrame=this.SoundOff)},n}(s)).instance=void 0,A=n((z=I).prototype,"MusicManager",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),F=n(z.prototype,"SoundManager",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),P=n(z.prototype,"MusicSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=n(z.prototype,"SoundSprite",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(z.prototype,"MusicOn",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=n(z.prototype,"MusicOff",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(z.prototype,"SoundOn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(z.prototype,"SoundOff",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(z.prototype,"MusicSource",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(z.prototype,"SoundSource",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=z))||w));o._RF.pop()}}}));

System.register("chunks:///_virtual/Card.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,a,n,o,c,p,s,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,o=e._decorator,c=e.SpriteFrame,p=e.Node,s=e.Sprite,l=e.Component}],execute:function(){var u,d,h,f,C,F,m;n._RF.push({},"47ce6VfjKlHwoFZKNWd5Vig","Card",void 0);var v=o.ccclass,g=o.property;e("Card",(u=v("Card"),d=g(c),h=g(p),u((F=r((C=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return r=e.call.apply(e,[this].concat(n))||this,i(r,"CardSpriteFrame",F,a(r)),i(r,"Back",m,a(r)),r.isFlipped=!1,r.CardId=-1,r}t(r,e);var n=r.prototype;return n.setCardId=function(e){this.Back.active=!0,this.CardId=e,e>=0&&e<this.CardSpriteFrame.length?this.getComponent(s).spriteFrame=this.CardSpriteFrame[e]:console.log("Opp Error..!")},n.flip=function(){this.isFlipped=!0,this.isFlipped?(this.node.setScale(-1,1),this.Back.active=!1):this.Back.active=!0},n.BackCard=function(){this.Back.active=!0},r}(l)).prototype,"CardSpriteFrame",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=r(C.prototype,"Back",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=C))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GamePlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Audio.ts"],(function(i){var e,t,n,a,r,s,o,l,u,c,h,d,C,m;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,n=i.initializerDefineProperty,a=i.assertThisInitialized},function(i){r=i.cclegacy,s=i._decorator,o=i.Prefab,l=i.Node,u=i.Label,c=i.Button,h=i.instantiate,d=i.director,C=i.Component},function(i){m=i.Audio}],execute:function(){var f,p,b,g,T,y,v,P,k,B,S,L,F,z,N,W,w,A,E;r._RF.push({},"7057689dlhByoGLm0fm/qcV","GamePlay",void 0);var M=s.ccclass,G=s.property;i("GamePlay",(f=M("GamePlay"),p=G(o),b=G(l),g=G(l),T=G(u),y=G(l),v=G(l),P=G(c),k=G(c),f((L=e((S=function(i){function e(){for(var e,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=i.call.apply(i,[this].concat(r))||this,n(e,"CardPrefab",L,a(e)),n(e,"CardContainer",F,a(e)),n(e,"Frame",z,a(e)),n(e,"TimeLabel",N,a(e)),n(e,"Win",W,a(e)),n(e,"Lose",w,a(e)),n(e,"PlayBtn",A,a(e)),n(e,"BackBtn",E,a(e)),e.TimeNumber=30,e.Cards=[],e.FlippedCards=[],e.Checking=!1,e.FrameBars=!0,e}t(e,i);var r=e.prototype;return r.start=function(){m.instance.MusicPlay("BackgroundMusic"),this.PlayBtn.interactable=!0,this.BackBtn.interactable=!0,this.Win.active=!1,this.Lose.active=!1,this.Frame.active=!1,this.TimeLabel.string="Time: "+this.TimeNumber.toString()+"s"},r.initializeCards=function(){for(var i=this,e=0;e<6;e++){var t=h(this.CardPrefab),n=h(this.CardPrefab);t.getComponent("Card").setCardId(e),n.getComponent("Card").setCardId(e),this.Cards.push(t),this.Cards.push(n)}this.Cards.forEach((function(e){i.CardContainer.addChild(e)}))},r.shuffleCards=function(){for(var i=this.Cards.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1));this.Cards[i],this.Cards[e],this.Cards[e],this.Cards[i]}},r.addClickEventToCards=function(){var i=this;this.Cards.forEach((function(e){e.on(l.EventType.TOUCH_START,(function(){i.onCardClicked(e)}))}))},r.onCardClicked=function(i){var e=this;m.instance.SoundPlay("FlipSound"),this.Checking||this.FlippedCards.length>=2||i.getComponent("Card").flip()||(i.getComponent("Card").flip(),this.FlippedCards.push(i),2===this.FlippedCards.length&&(this.Checking=!0,this.scheduleOnce((function(){e.CheckMath()}),1)))},r.CheckMath=function(){var i=this.FlippedCards[0].getComponent("Card"),e=this.FlippedCards[1].getComponent("Card");i.CardId==e.CardId?(i.node.active=!1,e.node.active=!1):(i.node.setScale(1,1),e.node.setScale(1,1),i.BackCard(),e.BackCard()),this.FlippedCards=[],this.Checking=!1,this.CheckWin()},r.CheckWin=function(){var i=this;0===this.Cards.filter((function(i){return i.active})).length&&(m.instance.SoundPlay("WinSound"),this.Win.active=!0,setTimeout((function(){m.instance.SoundPause("WinSound"),i.Win.active=!1,i.PlayAgain()}),2e3),console.log("You Win!"))},r.CheckLose=function(){var i=this;0===this.TimeNumber&&(m.instance.SoundPlay("LoseSound"),this.Lose.active=!0,setTimeout((function(){m.instance.SoundPause("LoseSound"),i.Lose.active=!1,i.PlayAgain()}),2e3),console.log("You Lose!"))},r.PlayAgain=function(){this.TimeStop(),this.TimeNumber=30,this.TimeLabel.string="Time: "+this.TimeNumber.toString()+"s",this.Cards.forEach((function(i){i.destroy()})),this.Cards=[],this.initializeCards(),this.shuffleCards(),this.addClickEventToCards(),this.TimeCount()},r.Time=function(){this.TimeNumber--,this.TimeLabel.string="Time: "+this.TimeNumber.toString()+"s",this.CheckLose(),0==this.TimeNumber&&(this.TimeStop(),this.TimeNumber=30,this.TimeLabel.string="Time: "+this.TimeNumber.toString()+"s")},r.TimeCount=function(){this.schedule(this.Time,1)},r.TimeStop=function(){this.unschedule(this.Time)},r.Play=function(){this.PlayBtn.interactable=!1,this.TimeCount(),this.initializeCards(),this.shuffleCards(),this.addClickEventToCards()},r.Back=function(){d.loadScene("Loading")},r.Bars=function(){this.FrameBars=!this.FrameBars,this.FrameBars?this.FrameBars&&(this.Frame.active=!1):this.Frame.active=!0},r.update=function(i){},e}(C)).prototype,"CardPrefab",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(S.prototype,"CardContainer",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(S.prototype,"Frame",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(S.prototype,"TimeLabel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(S.prototype,"Win",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(S.prototype,"Lose",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(S.prototype,"PlayBtn",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"BackBtn",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=S))||B));r._RF.pop()}}}));

System.register("chunks:///_virtual/Loading.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,i,o,s,n,a,u,l,c;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,i=r.initializerDefineProperty,o=r.assertThisInitialized},function(r){s=r.cclegacy,n=r._decorator,a=r.ProgressBar,u=r.Node,l=r.director,c=r.Component}],execute:function(){var g,h,d,p,P,f,b,m,v;s._RF.push({},"b8ddazBDohHTr1ubUTSh8gv","Loading",void 0);var S=n.ccclass,y=n.property;r("Loading",(g=S("Loading"),h=y(a),d=y(u),p=y(u),g((b=e((f=function(r){function e(){for(var e,t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return e=r.call.apply(r,[this].concat(s))||this,i(e,"LoadingSlide",b,o(e)),i(e,"FrameButton",m,o(e)),i(e,"Progress",v,o(e)),e.ProgressNumber=.1,e.ProgressInterval=.1,e.ProgressSpeed=.02,e}t(e,r);var s=e.prototype;return s.start=function(){this.FrameButton.active=!1,this.Progress.active=!0,this.schedule(this.ProgressStart,this.ProgressInterval)},s.ProgressStart=function(){this.ProgressNumber+=this.ProgressSpeed,this.ProgressNumber>1&&(this.ProgressNumber=1,this.unschedule(this.ProgressStart),this.FrameButton.active=!0,this.Progress.active=!1),this.LoadingSlide.progress=this.ProgressNumber},s.StartButton=function(){l.loadScene("Game")},s.ExitButton=function(){window.close()},e}(c)).prototype,"LoadingSlide",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(f.prototype,"FrameButton",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(f.prototype,"Progress",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=f))||P));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Audio.ts","./Card.ts","./GamePlay.ts","./Loading.ts","./Sound.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Sound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,r,n,o;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){r=e.cclegacy,n=e._decorator,o=e.AudioClip}],execute:function(){var u,c,l,a,p,s,d;r._RF.push({},"c5a3eXBE1tDfZ1BNDdP4HIe","Sound",void 0);var f=n.ccclass,b=n.property;e("default",(u=f("Sound"),c=b(String),l=b(o),u((s=i((p=function(){t(this,"Name",s,this),t(this,"AudioClicp",d,this)}).prototype,"Name",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=i(p.prototype,"AudioClicp",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=p))||a));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});