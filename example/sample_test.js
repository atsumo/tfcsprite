(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 834,
	fps: 24,
	color: "#666666",
	manifest: [
{src:"./sprites/icon_mark.png", id:"icon_mark"},
{src:"./sprites/icon_mark_light.png", id:"icon_mark_light"},
{src:"images/GitHub_Logo.png", id:"GitHub_Logo"},
{src:"images/Octocat.png", id:"Octocat"}
	]
};

// stage content:
(lib.sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_72 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// mark-b_s
	this.instance = new lib.mark_b_s();
	this.instance.setTransform(1022,818,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({rotation:3600,x:372},18).wait(2));

	// mark-w_s
	this.instance_1 = new lib.mark_w_s();
	this.instance_1.setTransform(918,818,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({rotation:3600,x:268},18).wait(2));

	// mark-w_m
	this.instance_2 = new lib.mark_w_m();
	this.instance_2.setTransform(814,802,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({rotation:3600,x:164},18).wait(2));

	// mark-b_m
	this.instance_3 = new lib.mark_b_m();
	this.instance_3.setTransform(1126,802,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53).to({rotation:3600,x:476},18).wait(2));

	// mark-b_l
	this.instance_4 = new lib.mark_b_l();
	this.instance_4.setTransform(1230,774,1,1,0,0,0,60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({rotation:3600,x:580},18).wait(2));

	// mark-w_l
	this.instance_5 = new lib.mark_w_l();
	this.instance_5.setTransform(710,774,1,1,0,0,0,60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({rotation:3600,x:60},18).wait(2));

	// octocat
	this.instance_6 = new lib.octocat();
	this.instance_6.setTransform(320,1037.9,0.6,0.6,0,0,0,400,324.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({regY:332.5,y:618.1},6,cjs.Ease.get(-1)).to({regY:332.6,scaleY:0.4,y:553.1},2,cjs.Ease.get(-1)).to({regY:332.5,scaleY:0.6,y:489},3,cjs.Ease.get(-1)).wait(40));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(670,466,0.4,0.4,0,0,0,0,410);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:500,regY:205,x:863.8,y:384},0).wait(1).to({x:848.4},0).wait(1).to({x:825.9},0).wait(1).to({x:797.1},0).wait(1).to({x:762.2},0).wait(1).to({x:720.3},0).wait(1).to({x:670.1},0).wait(1).to({x:607.9},0).wait(1).to({x:524.5},0).wait(1).to({regX:0,regY:409.9,x:120,y:466},0).to({regX:-0.1,regY:410.1,scaleX:0.25,scaleY:0.5,rotation:-8.7},3,cjs.Ease.get(-1)).wait(1).to({regX:500,regY:205,scaleX:0.26,scaleY:0.5,rotation:-8.5,x:231.9,y:346.2},0).wait(1).to({scaleX:0.27,scaleY:0.49,rotation:-7.8,x:239.2,y:348.2},0).wait(1).to({scaleX:0.29,scaleY:0.48,rotation:-6.7,x:250.7,y:352},0).wait(1).to({scaleX:0.32,scaleY:0.46,rotation:-5,x:268.7,y:358.7},0).wait(1).to({regX:0,regY:410,scaleX:0.4,scaleY:0.4,rotation:0,x:120,y:466},0).wait(12).to({y:186},4).to({y:206},2).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,719,1210,940.5);


// symbols:
(lib._GitHubMark120pxPlus = function() {
	this.initialize(img.icon_mark);
this.sourceRect = {x:0, y:0, width:120, height:120};

}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib._GitHubMark32px = function() {
	this.initialize(img.icon_mark);
this.sourceRect = {x:64, y:120, width:32, height:32};

}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib._GitHubMark64px = function() {
	this.initialize(img.icon_mark);
this.sourceRect = {x:0, y:120, width:64, height:64};

}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib._GitHubMarkLight120pxPlus = function() {
	this.initialize(img.icon_mark_light);
this.sourceRect = {x:0, y:0, width:120, height:120};

}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib._GitHubMarkLight32px = function() {
	this.initialize(img.icon_mark_light);
this.sourceRect = {x:64, y:120, width:32, height:32};

}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib._GitHubMarkLight64px = function() {
	this.initialize(img.icon_mark_light);
this.sourceRect = {x:0, y:120, width:64, height:64};

}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.GitHub_Logo = function() {
	this.initialize(img.GitHub_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,410);


(lib.Octocat = function() {
	this.initialize(img.Octocat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,665);


(lib.octocat = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.Octocat();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,665);


(lib.mark_w_s = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._GitHubMarkLight32px();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.mark_w_m = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._GitHubMarkLight64px();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.mark_w_l = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._GitHubMarkLight120pxPlus();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.mark_b_s = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._GitHubMark32px();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.mark_b_m = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._GitHubMark64px();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.mark_b_l = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._GitHubMark120pxPlus();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.logo = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.GitHub_Logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1000,410);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;