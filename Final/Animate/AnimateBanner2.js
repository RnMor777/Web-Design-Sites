(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AnimateBanner2_atlas_", frames: [[0,1444,884,581],[0,0,720,720],[0,722,720,720]]}
];


// symbols:



(lib.Arrow = function() {
	this.spriteSheet = ss["AnimateBanner2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ShieldNew = function() {
	this.spriteSheet = ss["AnimateBanner2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SwordNew = function() {
	this.spriteSheet = ss["AnimateBanner2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/CcQgLgDgHAAQgHgBgFAJIgLAAIAAhvIALAAQAKAvAbAZQAbAYAgAAQAYAAAPgOQAOgOAAgUQAAgXgQgQQgRgQgxgZQgxgXgQgUQgPgUAAgdQAAgnAbgaQAagaAqAAQARAAAbAIQASAFAFAAQAFAAAEgCQADgCAEgJIALAAIAABrIgLAAQgNgzgUgRQgUgSgfAAQgYAAgPAMQgOANAAAPQgBATALAOQALAOAhAPIAwAZQBGAgAAA4QAAArggAaQghAagoAAQgbAAgmgKg");
	this.shape.setTransform(379.6,128.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhbB7QgpgtAAhKQAAhQAqgsQApgtA9AAQA0AAAjAiQAhAjAAA7IjXAAQgBBEAjAoQAiAnAtAAQAfABAXgSQAWgRAQgpIAKAIQgHAugiAnQgjAmg0AAQg3AAgogrgAg5h2QgWAVgEAoICQAAQgCgfgFgMQgJgTgQgLQgRgLgSAAQgdAAgWAXg");
	this.shape_1.setTransform(350.3,128.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABxChIAAgMIAHAAQAUAAALgIQAIgFADgMQACgGAAgcIAAiFQAAgmgJgQQgOgWgdAAQgSAAgSAJQgTAJgaAZIgBADIABAPIAACUQAAAhAEAHQADAIAKAGQAKAFAYAAIAAAMIidAAIAAgMQAaAAAKgGQAJgGAEgNQACgFAAgdIAAiFQAAgmgMgRQgPgWgbAAQgSAAgSAKQgdAPgPATIAACmQAAAfAFAJQAEAKAIAFQAIAEAaAAIAAAMIibAAIAAgMQAWAAAIgEQAJgFAEgKQAFgKAAgeIAAh2QAAg0gDgPQgDgLgFgEQgFgFgJAAQgJAAgOAGIgFgNIBegmIAPAAIAABDIAogoQAQgNASgHQARgHASAAQAdAAAUARQAWARAHAhQAjgpAYgNQAYgNAaAAQAZAAAUANQATANALAdQAHATAAArIAACFQAAAeAFALQADAHAKAGQAJAFAVAAIAAAMg");
	this.shape_2.setTransform(307.4,127.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah4COQgVgWAAgkQAAgXAKgRQAOgXAjgVQAigTBQgdIAAgNQAAgugPgSQgPgRgbgBQgWAAgMAMQgNAMAAAPIAAAUQAAAPgHAJQgJAJgNAAQgMgBgIgIQgIgKAAgOQAAgeAegYQAegaA2AAQApABAbAOQAUAKAJAXQAGAOAAAuIAABqQAAAsACAKQACALAEACQAEAEAFAAQAFAAAEgCQAIgFAUgUIAAATQgmAzgjAAQgRAAgKgMQgKgLAAgcQgvAlgMAGQgTAJgVAAQggAAgVgXgAgiAAQgbAQgLAQQgMARAAATQAAAZAPAQQAPAQATAAQAaAAApgjIAAh2QgzAVgPAHg");
	this.shape_3.setTransform(265.7,128.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ai2CcQg0hAAAhVQAAg8Adg4QAjhDA9gkQAygdBFAAQAZAAAVAEQAUAEAnAOQATAHAGAAQAGAAAGgGQAEgGABgRIANAAIAMCSIgMAAQgTg3gcgbQgqgohAAAQhYAAguBGQgnA7AABRQAABCAaA2QAaA3ApAaQApAZArAAQAaAAAYgGQAYgHAWgNIAAiGQAAgigFgLQgGgLgLgEQgLgGgcAAIAAgNICzAAIAAANIgIAAQgaAAgLARQgHAMAAAlIAACOQgnAWgmAJQgmAKgvAAQiFAAhGhWg");
	this.shape_4.setTransform(224.4,120.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA4D4IAAgtQgXAYgWALQgVAKgZAAQgzAAgngrQgmgrAAhDQAAhEAqg2QArg4BCAAQApAAAbAaIAAg6QAAg2gDgMQgCgMgGgFQgFgEgIAAQgJAAgPAFIgFgMIBegmIAPAAIAAFpQAAA3ADANQACALAGAFQAGAFAHAAQAJAAAQgGIADAMIhdAngAhFgjQgfAjAABEQAABFAeAlQAeAkAlAAQAeAAAdgfIAAihQgCgWgLgUQgKgTgRgJQgQgKgQAAQgeAAgXAbg");
	this.shape_5.setTransform(164.6,120.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhJDzIAAgMQAWgBAHgEQAJgEAEgLQAEgJAAgeIAAkbQABg1gDgMQgDgNgFgEQgFgEgJAAQgIAAgOAFIgGgMIBdgmIAPAAIAAGeQAAAdAFAKQAEAKAIAFQAJAFAYAAIAAAMg");
	this.shape_6.setTransform(136.5,119.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhbB7QgogtAAhKQAAhQApgsQApgtA9AAQA0AAAjAiQAhAjAAA7IjXAAQAABEAiAoQAiAnAtAAQAfABAXgSQAXgRAPgpIAKAIQgHAugiAnQgjAmg0AAQg3AAgogrgAg5h2QgWAVgEAoICQAAQgCgfgFgMQgJgTgQgLQgRgLgSAAQgcAAgXAXg");
	this.shape_7.setTransform(111.3,128.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhJDzIAAgMQAXgBAIgEQAIgEAEgLQAFgJAAgeIAAh4QAAg0gDgOQgDgKgFgEQgFgFgIAAQgKAAgOAGIgEgNIBdgnIAPAAIAAD7QAAAeAEAJQAFAKAIAFQAIAFAWAAIAAAMgAgVi3QgKgKAAgOQAAgPAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAPQAAAOgKAKQgKALgOAAQgOAAgKgLg");
	this.shape_8.setTransform(85.9,119.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARDzIAAgMIAHAAQAWAAAJgHQAIgGADgNQABgGAAgbIAAhuQABg0gGgPQgFgQgMgIQgLgIgRAAQgQAAgSAJQgSAJgZAaIAAClQAAAgAEAIQADAIAKAFQAJAFAZABIAAAMIicAAIAAgMQAVAAAMgHQAHgDAEgKQAEgKAAgdIAAkaQAAg2gCgMQgDgNgFgEQgFgEgKAAQgGAAgRAFIgFgMIBegmIAQAAIAADlQAmgqAWgMQAVgLAXgBQAaABATAPQAUAOAIAgQAHAUAAA7IAABuQAAAeAFALQADAIAJAFQAHAFAXAAIAAAMg");
	this.shape_9.setTransform(58.5,119.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdDvQgLgBghgLQghgLgJAAQgJAAgEAFQgGAFgCAQIgNAAIAAifIANAAQAJAyAPAZQAPAZAfAQQAfARAkAAQArAAAZgXQAYgWAAgfQAAgRgJgSQgKgRgUgPQgNgKg6giQg8gggZgUQgZgUgNgYQgNgYAAgcQAAgyAmgkQAngkA7AAQAkAAApASQATAIAIAAQAJAAAGgFQAFgFAEgQIAMAAIAACgIgMAAQgHgugPgcQgQgbgegQQgdgQgfAAQgjAAgXAWQgYAVAAAcQAAAVAPASQAVAZBPArQBBAjAYASQAXASANAaQANAZAAAbQAAA1gpAmQgpAmhAAAQgTAAgSgDg");
	this.shape_10.setTransform(21.8,120.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA4D4IAAgtQgXAYgWALQgVAKgZAAQgzAAgngrQgmgrAAhDQAAhEAqg2QArg4BCAAQApAAAbAaIAAg6QAAg2gDgMQgCgMgGgFQgFgEgIAAQgJAAgPAFIgFgMIBegmIAPAAIAAFpQAAA3ADANQACALAGAFQAGAFAHAAQAJAAAQgGIADAMIhdAngAhFgjQgfAjAABEQAABFAeAlQAeAkAlAAQAeAAAdgfIAAihQgCgWgLgUQgKgTgRgJQgQgKgQAAQgeAAgXAbg");
	this.shape_11.setTransform(287.1,40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQChIAAgMIAHAAQAWAAAJgHQAIgGAEgNQABgFAAgcIAAh/QAAgqgLgUQgLgTgbAAQgnAAgpAsIAACkQAAAgAFAIQAEAKAIAFQAJAEAZAAIAAAMIiaAAIAAgMIAHAAQAXAAAJgMQAIgMAAgjIAAhzQAAg4gCgMQgDgNgFgEQgFgFgKAAQgJAAgNAGIgGgNIBfgmIAOAAIAABCQA3hCAxAAQAaAAATANQASANALAdQAHAUAAArIAACEQAAAeAGALQADAIAJAFQAIAFAWAAIAAAMg");
	this.shape_12.setTransform(250.9,48.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah4COQgVgWAAgkQAAgXAKgRQAOgXAjgUQAigUBQgeIAAgMQAAgugPgSQgPgRgbAAQgWgBgMAMQgNAMAAAPIAAATQAAARgHAIQgJAJgNAAQgMgBgIgIQgIgKAAgPQAAgdAegZQAegZA2AAQApABAbAOQAUALAJAWQAGAOAAAuIAABpQAAAtACAKQACAKAEAEQAEADAFAAQAFAAAEgCQAIgFAUgUIAAATQgmAzgjAAQgRAAgKgMQgKgLAAgcQgvAlgMAGQgTAJgVAAQggAAgVgXgAgiABQgbAOgLARQgMAQAAAUQAAAYAPARQAPAQATAAQAaAAApgiIAAh3QgzAVgPAIg");
	this.shape_13.setTransform(219,48.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA4D4IAAgtQgXAYgWALQgVAKgZAAQgzAAgngrQgmgrAAhDQAAhEAqg2QArg4BCAAQApAAAbAaIAAg6QAAg2gDgMQgCgMgGgFQgFgEgIAAQgJAAgPAFIgFgMIBegmIAPAAIAAFpQAAA3ADANQACALAGAFQAGAFAHAAQAJAAAQgGIADAMIhdAngAhFgjQgfAjAABEQAABFAeAlQAeAkAlAAQAeAAAdgfIAAihQgCgWgLgUQgKgTgRgJQgQgKgQAAQgeAAgXAbg");
	this.shape_14.setTransform(168.5,40.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhwChIAAgMQAYAAAMgIQAIgFADgMQACgGAAgbIAAh4QAAg3gCgKQgDgLgFgFQgHgFgIAAQgLAAgNAGIgDgNIBegmIAPAAIAABGQAmhGApAAQATAAAMAMQAMALAAAPQAAANgJAJQgIAKgNAAQgMAAgOgMQgPgMgHAAQgHAAgHAHQgPAOgPAgIAACVQgBAaAHANQADAKALAGQAMAGAVAAIAAAMg");
	this.shape_15.setTransform(138.6,48.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhzBtQgjgvAAg7QAAgqAWgrQAVgqAjgUQAigVAmAAQBIAAArA2QAkAvAAA7QAAApgUAsQgUAqgkAWQgjAWgqAAQhHAAgqg5gAgtiEQgTALgLAbQgMAbAAAqQAABDAcAyQAbAyArAAQAiAAAVgbQAVgcABhDQAAhSgkgwQgYggglgBQgSABgSAKg");
	this.shape_16.setTransform(109,48.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABVChIhOjHIhbDHIgMAAIhlkGQgKgZgJgIQgKgJgUgFIAAgMICDAAIAAAMQgSACgGAFQgFAFAAAKQAAAKAFAPIBDCzIBEiRIgSgvQgIgUgOgIQgHgFgVgBIAAgMICUAAIAAAMQgYABgKAIQgHAGAAAMQAAAGACAIIBICyIBBisQAHgSAAgLQAAgHgGgFQgHgFgUgBIAAgMIBjAAIAAAMQgdAFgOAkIhpEMg");
	this.shape_17.setTransform(66.1,49.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdDvQgLgBghgLQghgLgJAAQgJAAgEAFQgGAFgCAQIgNAAIAAifIANAAQAJAyAPAZQAPAZAfAQQAfARAkAAQArAAAZgXQAYgWAAgfQAAgRgJgSQgKgRgUgPQgNgKg6giQg8gggZgUQgZgUgNgYQgNgYAAgcQAAgyAmgkQAngkA7AAQAkAAApASQATAIAIAAQAJAAAGgFQAFgFAEgQIAMAAIAACgIgMAAQgHgugPgcQgQgbgegQQgdgQgfAAQgjAAgXAWQgYAVAAAcQAAAVAPASQAVAZBPArQBBAjAYASQAXASANAaQANAZAAAbQAAA1gpAmQgpAmhAAAQgTAAgSgDg");
	this.shape_18.setTransform(21.8,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text, new cjs.Rectangle(0,0,395,161.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(294.5,354.6,0.385,0.367,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,401,354.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ShieldNew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.383,0.442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,276,318), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SwordNew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.517,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,372,354.1), null);


// stage content:
(lib.AnimateBanner2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(157.1,30.4,0.266,0.254,-150);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(165.5,-97.5,0.689,0.689,14.8,0,0,197.5,176.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(1).to({regX:200.5,regY:177.3,scaleX:0.69,scaleY:0.69,rotation:14.9,x:179.9,y:-85.1},0).wait(1).to({rotation:15,x:192.4,y:-73.8},0).wait(1).to({rotation:15.1,x:205,y:-62.6},0).wait(1).to({rotation:15.2,x:217.5,y:-51.3},0).wait(1).to({rotation:15.3,x:230.1,y:-40.1},0).wait(1).to({rotation:15.4,x:242.6,y:-28.9},0).wait(1).to({rotation:15.5,x:255.2,y:-17.6},0).wait(1).to({rotation:15.6,x:267.7,y:-6.4},0).wait(1).to({rotation:15.7,x:280.3,y:4.9},0).wait(1).to({rotation:15.8,x:292.9,y:16.1},0).wait(1).to({rotation:15.9,x:305.4,y:27.3},0).wait(1).to({rotation:16,x:317.9,y:38.5},0).wait(1).to({rotation:16.1,x:330.5,y:49.8},0).wait(1).to({rotation:16.2,x:343.1,y:61},0).wait(1).to({rotation:8.5,x:356.3,y:55.8},0).wait(1).to({rotation:0.9,x:369.5,y:50.5},0).wait(1).to({rotation:-6.8,x:382.7,y:45.2},0).wait(1).to({rotation:-14.4,x:395.8,y:39.9},0).wait(1).to({rotation:-22,x:409,y:34.6},0).wait(1).to({rotation:-29.7,x:422,y:29.2},0).wait(1).to({rotation:-37.3,x:435.1,y:23.9},0).wait(1).to({rotation:-44.9,x:448,y:18.6},0).wait(1).to({rotation:-52.6,x:461,y:13.4},0).wait(1).to({rotation:-60.2,x:473.9,y:8.1},0).to({_off:true},1).wait(42));

	// Text
	this.instance_2 = new lib.Text();
	this.instance_2.parent = this;
	this.instance_2.setTransform(176.2,160.7,0.692,0.692,0,0,0,197.6,80.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(1).to({regX:198.3,regY:80.4,x:176.7,y:160.5,alpha:0.04},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.397},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.715},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.993},0).wait(2).to({regX:197.6,regY:80.5,x:176.2,y:160.7,alpha:0.988},0).wait(1).to({regX:198.3,regY:80.4,scaleY:0.7,x:176.7,y:160.4,alpha:0.993},0).wait(1).to({scaleY:0.71},0).wait(1).to({scaleY:0.72,y:160.3},0).wait(1).to({scaleY:0.73,y:160.2},0).wait(1).to({scaleY:0.74,y:160.1},0).wait(1).to({scaleY:0.75,y:160},0).wait(1).to({scaleY:0.76,y:159.9},0).wait(1).to({scaleY:0.77},0).wait(1).to({scaleY:0.78,y:159.8},0).wait(1).to({scaleY:0.79,y:159.7},0).wait(1).to({scaleY:0.8,y:159.6},0).wait(1).to({scaleY:0.81,y:159.5},0).wait(1).to({scaleY:0.82,y:159.4},0).wait(1).to({scaleY:0.83,y:159.3},0).wait(1).to({scaleY:0.84},0).wait(1).to({scaleY:0.85,y:159.2},0).wait(1).to({scaleY:0.87,y:159.1},0).wait(1).to({scaleY:0.88,y:159},0).wait(1).to({scaleY:0.89,y:158.9},0).wait(1).to({scaleY:0.9,y:158.8},0).wait(1).to({scaleY:0.91,y:158.7},0).wait(1).to({scaleY:0.92},0).wait(1).to({scaleY:0.93,y:158.6},0).wait(1).to({scaleY:0.94,y:158.5},0).wait(1).to({scaleY:0.95,y:158.4},0).wait(1).to({scaleY:0.96,y:158.3},0).wait(1).to({scaleY:0.97,y:158.2},0).wait(1).to({scaleY:0.98,y:158.1},0).wait(1).to({scaleY:0.99,y:158},0).wait(1).to({scaleY:1,y:157.9},0).wait(1).to({scaleY:1.01,y:157.8},0).wait(1).to({scaleY:1.02,y:157.9},0).wait(1).to({scaleY:1.03},0).wait(1).to({scaleY:1.04,y:157.8},0).wait(1).to({scaleY:1.05,y:157.9},0).wait(1).to({scaleY:1.06},0).wait(1).to({scaleY:1.07,y:157.8},0).wait(1).to({scaleY:1.08,y:157.9},0).wait(1).to({scaleY:1.09},0).wait(28));

	// Shield
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(758.1,-45.6,0.692,0.692,90,0,0,137.5,158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:138,regY:159,rotation:84,x:741.3,y:-33.9},0).wait(1).to({rotation:78,x:724.8,y:-22.6},0).wait(1).to({rotation:71.9,x:708.2,y:-11.4},0).wait(1).to({rotation:65.9,x:691.7,y:-0.1},0).wait(1).to({rotation:59.9,x:675.2,y:11.2},0).wait(1).to({rotation:53.9,x:658.7,y:22.4},0).wait(1).to({rotation:47.9,x:642.2,y:33.7},0).wait(1).to({rotation:41.8,x:625.7,y:45},0).wait(1).to({rotation:35.8,x:609.2,y:56.2},0).wait(1).to({rotation:29.8,x:592.7,y:67.4},0).wait(1).to({rotation:23.8,x:576.1,y:78.7},0).wait(1).to({rotation:21.7,x:569.1,y:87.8},0).wait(1).to({rotation:19.7,x:562.1,y:97},0).wait(1).to({rotation:17.7,x:555.1,y:106.1},0).wait(1).to({rotation:15.6,x:548,y:115.2},0).wait(1).to({rotation:13.6,x:541,y:124.4},0).wait(1).to({rotation:11.5,x:534,y:133.5},0).wait(1).to({rotation:9.5,x:527,y:142.6},0).wait(1).to({rotation:7.5,x:520,y:151.8},0).wait(1).to({rotation:5.4,x:512.9,y:160.9},0).wait(1).to({rotation:3.4,x:505.9,y:170.1},0).wait(1).to({rotation:1.3,x:498.9,y:179.3},0).wait(1).to({rotation:-0.7,x:491.9,y:188.4},0).wait(1).to({rotation:-0.7},0).wait(9).to({regX:139.1,regY:159.1,rotation:-0.5,x:491.6,y:188.1},0).wait(1).to({regX:138,regY:159,rotation:-0.7,x:490.8},0).wait(26).to({regX:140.6,regY:158.1,rotation:-0.5,x:491.6},0).wait(25).to({regX:140.8,regY:157.6,y:188.2},0).wait(1).to({regX:138,regY:159,scaleX:0.74,scaleY:0.73,rotation:-0.7,x:486.9,y:183.5},0).wait(1).to({scaleX:0.78,scaleY:0.76,x:484.2,y:177.9},0).wait(1).to({scaleX:0.82,scaleY:0.8,x:481.5,y:172.2},0).wait(1).to({scaleX:0.86,scaleY:0.83,x:478.8,y:166.6},0).wait(1).to({scaleX:0.91,scaleY:0.87,x:476.2,y:161},0).wait(1).to({scaleX:0.95,scaleY:0.9,x:473.5,y:155.3},0).wait(1).to({scaleX:0.99,scaleY:0.94,x:470.8,y:149.7},0).wait(1).to({scaleX:1.03,scaleY:0.97,x:468.1,y:144.1},0).wait(1).to({scaleX:1.08,scaleY:1.01,x:465.4,y:138.5},0).wait(1).to({scaleX:1.12,scaleY:1.04,x:462.7,y:132.9},0).wait(1).to({scaleX:1.16,scaleY:1.08,x:460,y:127.3},0).wait(1).to({scaleX:1.21,scaleY:1.11,x:457.3,y:121.6},0).wait(1).to({scaleX:1.25,scaleY:1.15,x:454.7,y:116},0).wait(1).to({scaleX:1.29,scaleY:1.18,x:451.9,y:110.4},0).wait(28));

	// Sword
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.9,153.1,0.692,0.692,0,0,0,186.2,177.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:186,regY:177,rotation:-7,x:162,y:145.2},0).wait(1).to({rotation:-13.9,x:175.3,y:137.3},0).wait(1).to({rotation:-20.9,x:188.5,y:129.5},0).wait(1).to({rotation:-27.8,x:201.7,y:121.7},0).wait(1).to({rotation:-34.8,x:215,y:113.8},0).wait(1).to({rotation:-41.7,x:228.3,y:106},0).wait(1).to({rotation:-48.7,x:241.5,y:98.1},0).wait(1).to({rotation:-55.6,x:254.8,y:90.4},0).wait(1).to({rotation:-62.6,x:268,y:82.5},0).wait(1).to({rotation:-69.5,x:281.3,y:74.6},0).wait(1).to({rotation:-76.5,x:294.6,y:66.8},0).wait(1).to({rotation:-83.4,x:307.9,y:59},0).wait(1).to({rotation:-83.3,x:317.2,y:65.2},0).wait(1).to({rotation:-83.1,x:326.6,y:71.3},0).wait(1).to({rotation:-82.9,x:336,y:77.4},0).wait(1).to({rotation:-82.8,x:345.4,y:83.6},0).wait(1).to({rotation:-82.6,x:354.8,y:89.7},0).wait(1).to({rotation:-82.4,x:364.2,y:95.9},0).wait(1).to({rotation:-82.2,x:373.6,y:102.1},0).wait(1).to({rotation:-82.1,x:383,y:108.2},0).wait(1).to({rotation:-81.9,x:392.4,y:114.3},0).wait(1).to({rotation:-81.7,x:401.8,y:120.6},0).wait(1).to({rotation:-81.6,x:411.2,y:126.7},0).wait(10).to({regX:185.2,regY:177.1,scaleX:0.69,scaleY:0.69,rotation:-81.7,x:411.4,y:126.6},0).wait(1).to({regX:186,regY:177,rotation:-76.2,x:416.5,y:129.9},0).wait(1).to({rotation:-70.8,x:421.7,y:133.7},0).wait(1).to({rotation:-65.5,x:426.9,y:137.6},0).wait(1).to({rotation:-60.1,x:432.1,y:141.4},0).wait(1).to({rotation:-54.7,x:437.3,y:145.3},0).wait(1).to({rotation:-49.4,x:442.5,y:149.2},0).wait(1).to({rotation:-44,x:447.7,y:153.1},0).wait(1).to({rotation:-38.6,x:452.9,y:156.9},0).wait(1).to({rotation:-33.3,x:458.1,y:160.8},0).wait(1).to({rotation:-27.9,x:463.3,y:164.8},0).wait(1).to({rotation:-22.5,x:468.4,y:168.6},0).wait(1).to({rotation:-17.2,x:473.6,y:172.5},0).wait(1).to({rotation:-11.8,x:478.8,y:176.4},0).wait(1).to({rotation:-6.4,x:483.9,y:180.3},0).wait(1).to({rotation:-1.1,x:489.1,y:184.2},0).wait(1).to({rotation:4.3,x:494.3,y:188.1},0).wait(11).to({regX:185.8,regY:177.1,scaleX:0.69,scaleY:0.69,x:493.7,y:188.2},0).wait(1).to({regX:186,regY:177,rotation:8.1,x:493.8,y:188.1},0).wait(1).to({rotation:12},0).wait(1).to({rotation:15.8,y:188.2},0).wait(1).to({rotation:19.6,x:493.9},0).wait(1).to({rotation:23.5,x:493.8},0).wait(1).to({rotation:27.3,x:493.9},0).wait(1).to({rotation:31.1,x:493.8},0).wait(1).to({rotation:35},0).wait(1).to({rotation:38.8},0).wait(1).to({rotation:42.7,x:493.9},0).wait(1).to({rotation:46.5,x:493.8},0).wait(1).to({rotation:50.3},0).wait(1).to({rotation:54.2,y:188.3},0).wait(1).to({rotation:58},0).wait(11).to({regX:185.7,regY:175.5,scaleX:0.69,scaleY:0.69,rotation:57.9,x:493.7,y:188.2},0).wait(1).to({regX:186,regY:177,scaleX:0.69,scaleY:0.69,rotation:58,x:476.5,y:188.9},0).wait(1).to({x:460.1},0).wait(1).to({x:443.7},0).wait(1).to({x:427.3},0).wait(1).to({x:410.9},0).wait(1).to({x:394.4},0).wait(1).to({x:378},0).wait(1).to({x:361.6},0).wait(1).to({x:345.2},0).wait(1).to({x:328.8},0).wait(1).to({x:312.4},0).wait(1).to({x:295.9},0).wait(1).to({x:279.5},0).wait(1).to({x:263.1},0).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277.3,-65.5,914.6,490.6);
// library properties:
lib.properties = {
	width: 648,
	height: 299,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AnimateBanner2_atlas_.png?1493742657547", id:"AnimateBanner2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;