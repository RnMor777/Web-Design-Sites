(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"EarthNew_atlas_", frames: [[0,0,800,800],[0,1249,558,558],[0,802,800,445]]}
];


// symbols:



(lib.Moon = function() {
	this.spriteSheet = ss["EarthNew_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Sun = function() {
	this.spriteSheet = ss["EarthNew_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WorldMap = function() {
	this.spriteSheet = ss["EarthNew_atlas_"];
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(7.1,1,1).p("ABVCMIhViMQgGgfg6gSIgUha");
	this.shape.setTransform(23.7,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(7.1,1,1).p("AAagTQgBAAgaASQgRAJgHAMQARABAOgB");
	this.shape_1.setTransform(13.4,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(7.1,1,1).p("AAdgXQgbAUgQAOQgEADgKAK");
	this.shape_2.setTransform(9.3,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(7.1,1,1).p("AAQhGQglAVgUAPQgBADgDAEIAAAHQACAGgIAKQgGAFgEAIQgDAFgCAPQgFAKgEAFQgGAHgBACQgEAGABAFQADAGAMAAQAIAAAFgDQAEgEACgBQAFgEALABQANABAEgBQAFgBAHgIQAGgHAEgBQADgBAHgCQAFgBADgBQACgCAEgDQAHgEAIgBQAcgEAPgO");
	this.shape_3.setTransform(8.6,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(7.1,1,1).p("ABVCMIipkX");
	this.shape_4.setTransform(23.7,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(7.1,1,1).p("AhRhyICiDl");
	this.shape_5.setTransform(59.1,98.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(7.1,1,1).p("AA1h8IhqD5");
	this.shape_6.setTransform(45.6,99.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(7.1,1,1).p("Ah+A6ID8hz");
	this.shape_7.setTransform(63.6,57.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(7.1,1,1).p("Ahdg5IC6Bz");
	this.shape_8.setTransform(41.6,57.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(7.1,1,1).p("AAAjqIAAHV");
	this.shape_9.setTransform(50.9,63.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(7.1,1,1).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSg");
	this.shape_10.setTransform(51.2,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");
	this.shape_11.setTransform(51.2,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-3.5,-3.5,83.2,119), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Moon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.105,0.108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,84.1,86.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WorldMap();
	this.instance.parent = this;
	this.instance.setTransform(340,0,0.425,0.389);

	this.instance_1 = new lib.WorldMap();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.425,0.389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,680,173), null);


// stage content:
(lib.EarthNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AG6AAQAAC4iBCBQiCCCi3AAQi3AAiBiCQiCiBAAi4QAAi3CCiBQCBiCC3AAQC3AACCCCQCBCBAAC3g");
	this.shape.setTransform(83.3,296.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak4E5QiCiCABi3QgBi3CCiBQCBiCC3AAQC4AACBCCQCCCBgBC3QABC3iCCCQiBCBi4AAQi3AAiBiBg");
	this.shape_1.setTransform(83.3,296.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AA7G+QgjAEgjgBQhJgBhBgTQhhglhNhTQh9iIgBi7IAAAAQALi1CHiBQBShOBkghQBBgQBIAEQATAAATADQCgAUB3B3QAZAaAVAbQBMB1gFCWQgFCThSB0QgXAbgdAZQhtBiiPAS");
	this.shape_2.setTransform(83.2,296);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.961)").ss(1,1,1).p("AnBgOQALi1CHiBQBRhOBlghQAYgGAagDQAqgGAtADQC4AJCECFQAaAaAVAbQBMB1gFCWQgFCThSB0QgYAbgcAZQiIB6i7gDQgBAAgBAAQgKAAgJgBQgRgBgQgBIgBAAQgCgBgCAAIg8gLQgBAAgBgBQgDgBgCAAQgCgBgBAAQgDgBgCAAQgCgBgBAAQhhglhNhTQh9iIgBi7g");
	this.shape_3.setTransform(95.9,296);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLHBQhIgBhBgTQhhglhNhTQh9iIgCi7IAAAAQALi1CHiBQBShOBkghQBBgQBKAEIAmADQgZADgZAGQhkAhhSBOQiHCBgLC1QALi1CHiBQBShOBkghQAZgGAZgDQCfAUB2B3QAaAaAUAbQBIBtAACMIAAASQgFCThTB0QgXAbgcAZQhtBiiOASIAAAAIgEgBIg8gLIgDgBIgFgBIgCgBIgGgBIgDgBQhgglhNhTQh+iIgBi7IAAAAIAAAAQABC7B+CIQBNBTBgAlIADABIAGABIACABIAFABIADABIA8ALIAEABQgfADggAAIgJAAgAAzHBIgDAAIgTgBIgggCQCOgSBthiQAcgZAXgbQBTh0AFiTIAAgSQAAiMhIhtQgUgbgagaQh2h3ifgUQAqgGAtADQC5AJCECFQAZAaAVAbQBMB1gFCWQgECThTB0QgXAbgcAZQiFB3i2AAIgJAAgAgDG+IAAAAg");
	this.shape_4.setTransform(89.5,296);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AnKgeQAWiyCNiBQBVhNBngiQBCgMBJAHQAsAEAoALIABAAQCDAkBnBoQAaAbAWAcQBEB4gKCZQgKCWhUB3QgYAZgeAYQhXBFhqAZQhDARhKgCQhKgChDgUQhdgrhLhXQh5iPgDi/g");
	this.shape_5.setTransform(83.1,295.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.922)").ss(0.9,1,1).p("AiNm0QACgBADgBQADgBADgBIARgGQADgBADgBQBCgMBJAHQC4ASCHCJQAaAbAWAcQBEB4gKCZQgKCWhUB3QgYAZgeAYQiPByi/gFQg6gCg1gNQgOgDgOgEQgBAAgBAAQhdgrhLhXQh5iPgCi/IAAgBQAViyCNiBQABgBABgBQADgCACgCQABgBABgBQACgBABgBICOhZQACgBADgBQADgBADgB");
	this.shape_6.setTransform(108.5,295.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABlHJQg6gCg0gNQBogZBXhFQAegYAZgZQBUh3AKiWIABgkQAAiDg8hqQgVgcgagbQhnhoiDgkQCDAkBnBoQAaAbAVAcQA8BqAACDIgBAkQgKCWhUB3QgZAZgeAYQhXBFhoAZIgcgHIgCAAQhdgrhLhXQh5iPgCi/IAAgBQAViyCNiBIACgCIAFgEIACgCIADgCICOhZIAFgCIAGgCIAQgGIAGgCQBCgMBKAHQC4ASCHCJQAaAbAWAcQBEB4gKCZQgKCWhUB3QgYAZgeAYQiJBti2AAIgQAAgAiXHJQhKgChDgUQhegrhKhXQh6iPgCi/IAAgBQAWiyCNiBQBVhNBngiQBCgMBJAHQAsAEApALIgFACIiOBZIgDACIgCACIgFAEIgCACQiNCBgVCyIAAABQACC/B5CPQBLBXBdArIACAAIAcAHQg8APhCAAIgQAAgAgJG6IAAAAg");
	this.shape_7.setTransform(95.8,295.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AnSgsQAhiwCSiAQBZhNBqgkQBCgHBJAKQBLALBDAeIAAAAQBjArBSBUQAbAcAWAdQA8B8gPCaQgPCZhVB6QgaAYggAWQg7AqhDAZQhlAkh1gEQhMgDhFgUQhagxhIhbQh1iWgEjDg");
	this.shape_8.setTransform(83.1,295.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.878)").ss(0.9,1,1).p("Ai0mnIBFggQAJgDAKgDQBCgHBJAKQC6AbCJCNQAbAcAWAdQA8B8gPCaQgOCZhWB6QgaAYgfAWQiVBrjEgIQhLgDhGgUQgIgFgIgEQhDgog6hCQgKgMgLgNQh1iWgEjDIAAgBQAhiwCTiAQABgBABgBQABgBABgBQABgBABAAQABgBAAgBIBRg5QAEgDAEgCQAFgDAFgDgAjGmcQAEgDAEgCQAFgDAFgD");
	this.shape_9.setTransform(121.1,295.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACXHRQhLgDhGgUIgPgJQBCgZA7gqQAggWAagYQBVh6APiZQADgfAAgeQgBh3gvhiQgWgdgbgcQhShUhigrQBiArBSBUQAbAcAWAdQAvBiABB3QAAAegDAfQgPCZhVB6QgaAYggAWQg7AqhCAZQhDgog6hCIgVgZQh1iWgEjDIAAgBQAhiwCTiAIACgCIACgCIACgBIABgCIBRg5IhRA5IgBACIgCABIgCACIgCACQiTCAghCwIAAABQAEDDB1CWIAVAZQA6BCBDAoQhlAkh2gEQhMgDhFgUQhagxhIhbQh1iWgEjDIAAgBQAhiwCSiAQBZhNBqgkQBCgHBKAKQBLALBDAeIgIAFIAIgFIAJgGIBFggIATgGQBCgHBKAKQC6AbCJCNQAbAcAWAdQA8B8gPCaQgOCZhWB6QgaAYgfAWQiLBji0AAIgbAAg");
	this.shape_10.setTransform(102.1,295.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Anbg6QAsitCYh/QBchOBtglQBDgDBJAOQBrAVBcA5QBEApA7A+QAcAcAXAeQAzCAgUCdQgTCbhXB+QgcAWghAVQgXAPgZAMQiJBGiqgJQhNgEhHgVQhXg2hGhgQhxicgFjIg");
	this.shape_11.setTransform(83.1,294.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.839)").ss(0.9,1,1).p("Anbg6QAsitCYh/QARgOAQgMQBPg6BZgfQBDgDBJAOQC6AkCMCRQAcAcAXAeQAzCAgUCdQgTCbhXB+QgcAWghAVQibBijIgKQhNgEhHgVQgagQgZgUQg5gvgxhDQhxicgFjIg");
	this.shape_12.setTransform(133.8,294.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AikHaQhNgEhHgVQgagQgZgUQAZgMAXgPQAhgVAcgWQBXh+ATibQAUidgziAQgXgegcgcQg8g+hEgpQBPg6BZgfQBDgDBKAOQC5AkCMCRQAcAcAXAeQAzCAgUCdQgTCbhXB+QgcAWghAVQiMBZiwAAIgngBg");
	this.shape_13.setTransform(145,294.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AnkhGQA2irCeh/QBghNBvgnQBDABBKASQCLAiByBaQAoAgAlAmQAcAcAYAfQArCEgZCfQgYCdhZCCQgOAKgQAKQgQAKgRAKQiiBajMgNQhPgFhKgUQhTg9hDhjQhtijgGjNg");
	this.shape_14.setTransform(83.1,294.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.8)").ss(0.8,1,1).p("AnkhGQAxiZCDh2QAQgOAQgNQBghNBvgnQBDABBKASQC7AtCPCVQAcAcAYAfQArCEgZCfQgYCdhZCCQgdAVgiATQiiBajMgNQhPgFhKgUQgqgfgngpQgkgnghgxQhuijgFjNg");
	this.shape_15.setTransform(146.5,294.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AicHjQhPgFhKgUQgrgfgmgpIAegUQBZiCAYidQAZifgriEQgYgfgcgcQglgmgoggIAggbQBghNBvgnQBEABBKASQC6AtCPCVQAcAcAYAfQArCEgZCfQgYCdhZCCQgdAVgiATQiOBPiuAAQgZAAgZgCg");
	this.shape_16.setTransform(155.5,294.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AnuhTQBBinCkh/QBjhNBygpQBEAGBKAWQCqAxCJCCQANANANAOQAdAdAYAgQAjCHgdCiQgXB8g8BtQgRAfgUAdQgfATgjARQioBTjRgPQhRgGhLgVQhQhDhBhnQhpiqgHjRg");
	this.shape_17.setTransform(83.2,293.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.761)").ss(0.8,1,1).p("AnuhTQAshwBXhdQArgvA3gqQBjhNBygpQBDAGBLAWQC7A2CSCYQAcAdAZAgQAjCHgeCiQgdCghaCFQgfATgjARQipBTjQgPQhRgGhLgVQhDg4g5hRQgLgQgKgRQhpiqgHjRg");
	this.shape_18.setTransform(159.3,293.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhRHuQhRgGhLgVQhDg4g5hRQA8htAXh8QAOhLgBhEQAAhRgThJQgYgggdgdIgagbIAaAbQAdAdAYAgQATBJAABRQABBEgOBLQgXB8g8BtIgVghQhpiqgHjRIAAgBQAshwBXhdQArgvA3gqQBjhNBygpQBDAGBLAWQC7A2CSCYQAcAdAZAgQAjCHgeCiQgdCghaCFQgfATgjARQiOBGiqAAQggAAghgCg");
	this.shape_19.setTransform(159.3,293.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.722)").ss(0.7,1,1).p("AmzDZIhDkQQgCgUgBgTIAAgBQACgEACgDQABgCAAgBQABgBAAgBQASgkAWgjQAQgZATgYQBDhXBihJQBnhMB0grQBEALBLAZQC8A/CVCcQAdAeAZAgQAaCMgiCkQgiCihcCJQggARglAQQivBLjUgSQhTgHhOgVQhNhIg+hsQAAgBgBgBQgJgQgIgQIgNgbQgCgFgDgEQgBgFgCgEgAmrDrQgCgFgDgEQgBgEgCgF");
	this.shape_20.setTransform(172.2,293.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("An5hfQBMilCqh/QBnhMB1grQBDALBLAZQC8A/CVCcQALAMALAMQARATAPATQAaCMgiCkQgMA4gTA3IAAAAQgjBjg8BZQggARglAQQivBLjUgSQhTgHhOgVQhNhIg+hsQhliwgIjWg");
	this.shape_21.setTransform(83.4,293.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhgH4QhTgHhOgVQhNhIg+hsIgBgCIgRggIgNgbIgFgJIgDgJIhDkQIgDgnIAAgBIAEgHIABgDIABgCQASgkAWgjQAQgZATgYIAfAmQAMA9AABCQAABUgUBdQgLA4gUA3QAUg3ALg4QAUhdAAhUQAAhCgMg9IgfgmQBDhXBihJQBnhMB0grQBEALBLAZQC8A/CVCcQAdAeAZAgQAaCMgiCkQgiCihcCJQggARglAQQiNA8ilAAQgoAAgpgDgAmojjIAAAAg");
	this.shape_22.setTransform(172.2,293.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.678)").ss(0.7,1,1).p("AoEhsQAJgQAJgQQBXiPCdhyQBrhMB3gsQBFAPBLAcQC8BICYCgQAdAfAaAhQASCPgnCnQgmCkheCNQgiAPgmAOQi2BEjYgVQhVgIhPgVQhKhOg8hwQhEiBgZiSQgGgmgEgpQgBgKgBgLQgBgNAAgNg");
	this.shape_23.setTransform(185.1,292.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AoEhsQBXijCvh+QBqhMB4gsQBEAPBLAcQC9BICXCgQAeAfAaAhQADATABATQAGBNgLBSQgGA3gOA6QgnCkhdCNQgiAPgnAOQi1BEjZgVQhUgIhQgVQhJhOg8hwQhhi3gJjag");
	this.shape_24.setTransform(83.7,292.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhwIBQhVgIhPgVQhKhOg8hwQhEiBgZiSQgGgmgEgpIgCgVIgBgaIAAgBIASggQACAaAAAbQAAA0gHA2QAHg2AAg0QAAgbgCgaQBXiPCdhyQBrhMB3gsQBFAPBLAcQC8BICYCgQAdAfAaAhQASCPgnCnQgmCkheCNQgiAPgmAOQiLA0igAAQgwAAgzgFgAnyiMIAAAAg");
	this.shape_25.setTransform(185.1,292.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.639)").ss(0.7,1,1).p("AoQh5QBiigC1h9QBuhMB6guQBFATBLAgQC9BRCbCkQAeAgAbAhQAJCTgsCpQgrCnhfCQQgkAOgoAMQi7A8jdgXQhXgJhRgWQhHhUg5hzQhdi+gKjfg");
	this.shape_26.setTransform(198.1,292);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AoQh5QBiigC1h9QBuhMB6guQBFATBLAgQC9BRCbCkQAeAgAbAhQAJCTgsCpQgrCnhfCQQgkAOgoAMQi7A8jdgXQhXgJhRgWQhHhUg5hzQhdi+gKjfg");
	this.shape_27.setTransform(84,292);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiBILQhXgJhRgWQhHhUg5hzQhdi+gKjfIAAgBQBiigC1h9QBuhMB6guQBFATBLAgQC9BRCbCkQAeAgAbAhQAJCTgsCpQgrCnhfCQQgkAOgoAMQiHAriXAAQg8AAg+gGg");
	this.shape_28.setTransform(198.1,292);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.6)").ss(0.6,1,1).p("AoeiGQBtidC7h+QBxhLB9gwQBGAYBMAkQC9BaCdCnQAfAhAcAiQABCXgxCrQgwCphhCUQglAMgpALQjCA0jigaQhYgKhUgWQhDhag2h3QhZjFgMjjg");
	this.shape_29.setTransform(211.2,291.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AoeiGQBtidC7h+QByhLB9gwQBFAYBMAkQC9BaCdCnQAfAhAcAiQABCXgxCrQgwCphhCUQglAMgpALQjCA0jigaQhYgKhTgWQhDhag3h3QhZjFgMjjg");
	this.shape_30.setTransform(84.4,291.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiUIUQhYgKhUgWQhDhag2h3QhZjFgMjjIAAgBQBtidC7h+QBxhLB9gwQBGAYBMAkQC9BaCdCnQAfAhAcAiQABCXgxCrQgwCphhCUQglAMgpALQiCAjiPAAQhIAAhLgJg");
	this.shape_31.setTransform(211.2,291.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.561)").ss(0.6,1,1).p("AosiTQB4ibDAh9QB1hLB/gyQBHAdBMAnQC+BjCgCrQAgAiAcAiQgHCag2CvQg1CrhiCYQgnAKgqAKQjJAsjmgdQhagLhVgWQhAhgg0h7QhVjMgNjog");
	this.shape_32.setTransform(224.4,291);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AosiTQB4ibDAh9QB1hLB/gyQBHAdBMAnQC+BjCgCrQAfAiAdAiQgHCag2CvQg1CrhiCYQgnAKgrAKQjIAsjmgdQhagLhVgWQhAhgg0h7QhVjMgNjog");
	this.shape_33.setTransform(85,291);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AinIdQhagLhVgWQhAhgg0h7QhVjMgNjoIAAAAQB4ibDAh9QB1hLB/gyQBHAdBMAnQC+BjCgCrQAgAiAcAiQgHCag2CvQg1CrhiCYIhRAUQh6AbiFAAQhVAAhbgMg");
	this.shape_34.setTransform(224.4,291);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.522)").ss(0.5,1,1).p("Ao6ihQCCiYDGh8QB5hMCCgzQBHAhBNArQC+BsCjCvQAgAiAdAjQgPCeg7CxQg5CuhkCcQgpAIgsAIQjPAkjqgfQhbgMhZgWQg8hmgyiAQhRjSgNjsg");
	this.shape_35.setTransform(237.7,290.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("Ao6ihQCCiYDHh8QB4hMCCgzQBHAhBNArQC/BsCiCvQAgAiAdAjQgPCeg7CxQg6CuhjCcQgpAIgsAIQjPAkjqgfQhcgMhXgWQg9hmgyiAQhRjSgNjsg");
	this.shape_36.setTransform(85.5,290.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ai6ImQhbgMhZgWQg8hmgyiAQhRjSgNjsIAAgBQCCiYDGh8QB5hMCCgzQBIAhBLArQDABsCiCvQAgAiAdAjQgPCeg7CxQg5CuhkCcQgpAIgsAIQhwAUh4AAQhlAAhsgPg");
	this.shape_37.setTransform(237.7,290.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.478)").ss(0.5,1,1).p("ApIivQCOiVDMh8QB8hLCEg1QBIAlBNAvQC/B1ClCyQAgAjAeAlQgXChhAC0Qg/CwhkCfQgrAHgtAGQjWAcjughQhdgNhagXQg5hsgviDQhNjZgPjxg");
	this.shape_38.setTransform(250.9,290.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("ApJivQCPiVDLh8QB8hLCFg1QBIAlBMAvQDAB1ClCyQAhAjAeAlQgYChhAC0Qg+CwhlCfQgrAHgtAGQjVAcjvghQhdgNhagXQg6hsguiDQhOjZgPjxg");
	this.shape_39.setTransform(86.1,290.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AjNIvQhdgNhagXQg5hsgviDQhOjZgOjxIAAgBQCNiVDMh8QB8hLCFg1QBIAlBMAvQC/B1CmCyQAhAjAeAlQgYChhAC0Qg/CwhkCfIhYANQhiANhoAAQh5AAiBgSg");
	this.shape_40.setTransform(250.9,290.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.439)").ss(0.5,1,1).p("ApXi9QCZiTDSh8QB/hLCHg2QBJApBNAzQDAB+CoC2QAhAkAfAlQggClhFC2QhDCyhnCjQgsAGgvAEQjbAVjzgkQhfgPhcgXQg2hxgtiHQhJjggQj2g");
	this.shape_41.setTransform(264.1,289.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("ApXi9QCZiTDSh8QB/hLCHg2QBJApBNAzQDAB+CoC2QAhAkAfAlQggClhFC2QhDCyhnCjQgsAGguAEQjcAVjzgkQhfgPhcgXQg2hxgtiHQhJjggQj2g");
	this.shape_42.setTransform(86.6,289.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjgI3QhfgPhcgXQg2hxgtiHQhJjggQj2IAAAAQCZiTDSh8QB/hLCHg2QBJApBNAzQDAB+CoC2QAhAkAfAlQggClhFC2QhDCyhnCjQgsAGgvAEQhRAIhUAAQiPAAiagXg");
	this.shape_43.setTransform(264.1,289.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("ApljMQCkiRDXh6QCDhLCKg4QBJAuBNA2QDBCGCrC7QAhAkAgAmQgoCphKC4QhIC1hoCnQguADgwADQjiANj3gnQhhgPhegXQgzh4gqiLQhFjmgRj7g");
	this.shape_44.setTransform(87.1,289.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ApljMQCkiRDXh6QCDhLCKg4QBKAuBMA2QDBCGCrC7QAiAkAfAmQgoCphKC4QhIC1hoCnQguADgwADQjiANj3gnQhhgPhegXQgyh4griLQhFjmgRj7g");
	this.shape_45.setTransform(277.3,289.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AjzI+QhhgPhegXQgyh4griLQhFjmgRj7IAAAAQCkiRDXh6QCDhLCKg4QBKAuBMA2QDBCGCrC7QAiAkAfAmQgoCphKC4QhIC1hoCnIheAGQg6ADg8AAQirAAi4gdg");
	this.shape_46.setTransform(277.3,289.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("ApzjcQCviODdh7QCGhKCNg6QBKAzBNA5QDBCQCuC+QAiAlAgAmQgwCthPC7QhMC3hqCrQgwABgxACQjoAFj8gpQhjgRhggXQgvh+goiPQhBjtgSj/g");
	this.shape_47.setTransform(87.7,289.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.361)").ss(0.4,1,1).p("ApzjcQCviODch7QCHhKCNg6QBKAzBNA5QDBCQCtC+QAjAlAgAmQgwCthPC7QhNC3hpCrQgwABgxACQjoAFj9gpQhigRhggXQgvh+goiPQhBjtgSj/g");
	this.shape_48.setTransform(290.5,289.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AkHJFQhigRhggXQgvh+goiPQhBjtgSj/IAAAAQCviODch7QCHhKCMg6QBLAzBNA5QDBCQCuC+QAiAlAgAmQgwCthPC7QhNC3hpCrIhhADIgzABQjQAAjiglg");
	this.shape_49.setTransform(290.5,289.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AqBjtQC5iMDjh6QCKhKCPg7QBLA2BOA+QDBCYCxDCQAjAmAgAnQg4CxhUC9QhRC5hsCvQgxAAgyAAQjvgDkAgsQhlgShigXQgsiEgliTQg9jzgTkEg");
	this.shape_50.setTransform(88.2,289.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,0,0,0.322)").ss(0.3,1,1).p("AqBjtQC5iMDjh6QCKhKCPg7QBLA2BNA+QDCCYCwDCQAjAmAhAnQg4CxhUC9QhSC5hrCvQgxAAgzAAQjugDkBgsQhkgShigXQgsiEgliTQg9jzgTkEg");
	this.shape_51.setTransform(303.7,289.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ADVJ5QjugDkBgsQhkgShigXQgsiEgliTQg9jzgTkEQC5iMDjh6QCKhKCPg7QBLA2BNA+QDCCZCwDBQAjAmAhAnQg4CxhUC9QhSC6hrCuIhkAAg");
	this.shape_52.setTransform(303.7,289.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("AqQkAQDFiIDoh6QCOhKCSg9QBLA7BOBBQDCCiCzDFQAkAnAiAoQhBC0hZDAQhWC8htCxQgzgBg0gCQj1gKkFgvQhmgShkgYQgoiKgjiXQg5j6gVkIg");
	this.shape_53.setTransform(88.7,289.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.278)").ss(0.3,1,1).p("AqQkAQDFiIDoh6QCOhKCSg9QBLA7BOBBQDCCiCzDFQAkAnAiAoQhBC0hZDAQhWC8htCxQgzgBg0gCQj1gKkFgvQhmgShkgYQgoiKgjiXQg5j6gVkIg");
	this.shape_54.setTransform(316.9,289.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ADNKGQj1gKkFguQhmgShkgZQgoiJgjiXQg5j7gVkHIAAgBQDFiIDoh6QCOhLCSg8QBLA7BOBBQDCCiCzDFIBGBOQhBC1hZDAQhWC7htCyIhngEg");
	this.shape_55.setTransform(316.9,289.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AqekTQDPiGDuh5QCShJCVhAQBLBABOBFQDDCqC2DKQAkAoAjAoQhKC4hdDCQhbC+hvC2Qg0gEg1gDQj8gSkJgxQhogUhmgYQgliPghibQg0kBgWkOg");
	this.shape_56.setTransform(89.3,289.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.239)").ss(0.3,1,1).p("AqekTQDPiGDvh5QCRhJCVhAQBMBABOBFQDDCqC1DKQAlAoAiAoQhJC4heDCQhbC+hvC2QgzgEg2gDQj7gSkKgxQhngUhngYQgliPggibQg1kBgWkOg");
	this.shape_57.setTransform(330.1,289.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ADFKUQj7gSkKgwQhngUhngYQgliPggibQg1kAgWkPQDPiGDvh5QCRhKCVg+QBMA/BOBEQDDCrC1DKQAlAoAiAoQhJC4heDCQhbC+hvC1IhpgHg");
	this.shape_58.setTransform(330.1,289.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("AqskmQDaiDD0h5QCUhJCYhBQBNBEBOBIQDDC0C5DNQAlApAjApQhRC8hjDEQhgDBhwC5Qg2gFg3gGQkCgZkNg0QhqgUhogZQgiiVgeifQgxkHgWkSg");
	this.shape_59.setTransform(89.8,289.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.2)").ss(0.2,1,1).p("AqskmQDaiDD0h5QCUhJCYhBQBNBEBOBIQDDC0C5DNQAlApAjApQhSC8hiDEQhgDBhwC5Qg2gFg3gGQkBgZkOg0QhqgUhogZQgiiVgeifQgwkHgXkSg");
	this.shape_60.setTransform(343.4,289.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AC8KiQkBgZkNg0QhrgUhogZQghiVgfifQgwkHgXkSIAAgBQDaiDD0h5QCVhJCXhBQBNBEBOBIQDDC0C6DNIBHBSQhSC8hiDEQhgDBhwC5IhtgLg");
	this.shape_61.setTransform(343.4,289.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("Aq6k5QDliBD5h4QCZhJCahCQBNBIBPBMQDEC8C7DRQAlApAkAqQhZDAhoDHQhlDDhxC9Qg3gHg5gHQkIgikSg2QhrgVhrgZQgeibgcijQgskOgYkXg");
	this.shape_62.setTransform(90.3,289.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0.161)").ss(0.2,1,1).p("Aq6k5QDliBD5h4QCYhJCbhCQBNBIBPBMQDEC8C7DRQAlApAkAqQhaDAhnDHQhlDDhxC9Qg4gHg4gHQkIgikSg2QhrgVhrgZQgeibgcijQgskOgYkXg");
	this.shape_63.setTransform(356.6,289.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AC0KwQkIghkSg3QhrgVhrgZQgeiagcijQgskPgYkWQDliCD5h4QCYhJCbhCICcCUQDEC9C7DQIBJBTQhaDBhnDHQhlDChxC9IhwgOg");
	this.shape_64.setTransform(356.6,289.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("ArJlMQDxh+D/h4QCbhJCehDQBOBMBPBQQDEDFC+DVQAmAqAlAqQhiDEhsDKQhqDFhzDAQg5gIg6gJQkOgpkXg5QhtgWhtgZQgaihgainQgpkVgZkbg");
	this.shape_65.setTransform(90.9,289.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.122)").ss(0.1,1,1).p("ArIlMQDvh+EAh4QCchJCdhDQBOBMBOBQQDFDFC+DVQAmAqAlAqQhiDEhtDKQhpDFh0DAQg4gIg6gJQkPgpkWg5QhtgWhsgZQgcihgZinQgokVgZkbg");
	this.shape_66.setTransform(369.8,289.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("ACrK+QkOgpkWg5QhtgWhtgZQgbihgZinQgokVgakbIAAgBQDwh+D/h4QCdhJCdhDQBOBMBOBQQDEDFC/DVIBLBUQhjDEhsDKQhqDFhzDAIhzgRg");
	this.shape_67.setTransform(369.8,289.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("ArXleQD7h8EFh3QCfhJCghGQBOBSBPBSQDGDPDBDYQAmArAmArQhrDIhxDMQhuDHh1DEQg7gKg7gKQkVgxkag7QhvgYhvgZQgYingWirQglkbgakgg");
	this.shape_68.setTransform(91.4,289.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,0,0,0.078)").ss(0.1,1,1).p("ArXleQD7h8EFh3QCghJCghGQBOBSBPBSQDFDPDBDYQAnArAlArQhqDIhyDMQhuDHh1DEQg6gKg7gKQkVgxkbg7QhvgYhugZQgYingXirQgkkbgbkgg");
	this.shape_69.setTransform(383,289.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ACkLMQkVgwkbg8QhvgXhugZQgYiogXirQgkkbgbkgQD7h8EFh3QCghJCghFICdCjQDFDPDBDYIBMBXQhqDHhyDMQhuDIh1DDIh1gUg");
	this.shape_70.setTransform(383,289.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("ArllxQEFh5ELh3QCjhJCjhHQBPBWBPBWQDGDYDEDcQAnAsAmAsQhzDLh2DOQhzDKh2DIQg9gMg8gMQkcg5kfg9QhwgZhxgZQgUitgUivQghkigbklg");
	this.shape_71.setTransform(92,289.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.039)").ss(0.1,1,1).p("ArllxQEFh5EMh3QCihJCjhHQBPBWBQBWQDFDYDEDcQAnAsAmAsQhyDLh3DOQhzDKh2DIQg8gMg9gMQkbg5kfg9QhxgZhwgZQgVitgUivQggkigcklg");
	this.shape_72.setTransform(396.2,289.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ACbLaQkcg5keg9IjhgyIgplcQggkigcklIAAAAQEFh5EMh3QCjhJCihHICfCsQDFDYDEDcIBNBYQhzDLh2DOQhzDKh3DIIh4gYg");
	this.shape_73.setTransform(396.2,289.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AqXI0Ihcu4INtl+IJ6LNInmM4g");
	this.shape_74.setTransform(92.5,289.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AqXI0Ihcu4INtl+IJ6LNInmM4g");
	this.shape_75.setTransform(409.4,289.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},224).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).wait(1));

	// Layer 1
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag/DUIAAgLQAUAAAHgEQAGgEAFgJQADgJAAgZIAAhpQAAgsgCgNQgCgJgFgEQgEgEgIAAQgIAAgMAFIgEgLIBRghIANAAIAADaQAAAaAEAIQADAJAIAEQAHAEATAAIAAALgAgSifQgJgJAAgNQAAgMAJgJQAIgJAMAAQANAAAJAJQAIAJAAAMQAAANgIAJQgJAJgNAAQgLAAgJgJg");
	this.shape_76.setTransform(421.2,154.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgMCwQgOgIgGgNQgGgPAAgdIAAi3IgrAAIAAgKQAQgGARgQQARgQAOgVQAHgLALgfIAJAAIAABaIBAAAIAAAVIhAAAIAACwQAAAbAIAIQAHAKAMAAQAKAAAJgGQAJgGAGgMIALAAQgKAdgTAPQgTAOgVAAQgNAAgMgHg");
	this.shape_77.setTransform(404.4,157.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAPCMIAAgKIAFAAQATAAAIgGQAHgGAEgLQABgEAAgYIAAhvQAAglgKgRQgKgRgXAAQgiAAgkAnIAACPQABAbADAHQAEAJAIAEQAGAEAXAAIAAAKIiHAAIAAgKIAGAAQAVAAAIgKQAGgMABgdIAAhkQAAgygDgLQgCgKgEgEQgGgEgHAAQgJAAgLAFIgEgLIBSghIAMAAIAAA5QAxg5AqAAQAWAAARALQAPALAKAZQAGATAAAkIAAB0QABAaAEAJQADAHAIAEQAGAFAVAAIAAAKg");
	this.shape_78.setTransform(380.4,161.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAlCFQgJgKAAgZQgpAhgKAFQgRAHgSAAQgcAAgSgTQgTgTAAggQAAgUAJgOQANgVAegSQAegQBFgaIAAgLQAAgpgNgPQgNgPgXAAQgUAAgLAKQgKAKgBANIABASQAAANgHAIQgHAHgMAAQgKAAgHgHQgIgIABgOQAAgZAagWQAagVAwAAQAjAAAXAMQARAJAJAUQAFANABAnIAABcQgBAnACAJQACAJADADQADADAEAAQAGAAADgDQAGgDASgSIAAAQQgiAtgeAAQgOAAgJgKgAgdAAQgXAOgLAOQgKAOAAARQAAAWANAOQANAOARAAQAWAAAkgeIAAhnQgsASgNAGg");
	this.shape_79.setTransform(352.6,161.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhzC0QgWgOAAgQQAAgIADgHQAFgLAQgTIAfghQgQgJgGgHQgHgHABgKQgBgKAJgOQAJgOAegZQgZgMgNgWQgOgWAAgaQAAgpAfgdQAegdAwAAQAmAAAdATIA5AAQANAAACABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQACADAAAHQAAAHgCADIgCADQgDABgNAAIgjAAQAQAVAAAiQAAAmgcAbQgeAbgwAAQgUAAgVgGQgOALgEAIQgEAIgBAGQAAAFAGAFQAEAFAPACQAIABAhABQA8ABASADQAcAEARARQAQAQABAZQgBAhgfAeQguArhLAAQg5AAgogagAhXBnQgHANAAALQAAAOARALQAeATA3AAQA1AAAbgTQAZgTAAgWQAAgPgPgHQgQgGgugBQhCgCgkgFQgOAPgHANgAgwitQgPARAAAlQAAAvAUAaQAQATAYAAQAVAAAPgRQAOgRAAgkQAAgvgUgbQgQgUgWAAQgWAAgPASg");
	this.shape_80.setTransform(323.2,168.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhhCMIAAgKQAUAAAKgHQAIgFADgKQABgFAAgYIAAhoQAAgxgCgIQgBgKgGgDQgFgFgIAAQgJAAgLAFIgEgLIBTghIANAAIAAA9QAgg9AlAAQAQAAALAKQALAJAAAOQgBALgHAJQgIAHgLABQgKgBgNgJQgNgLgHAAQgEAAgHAGQgOAMgMAcIAACCQAAAWAFAMQADAIAJAFQAKAGATAAIAAAKg");
	this.shape_81.setTransform(298.9,161.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhkBfQgfgpAAgzQAAglATglQATglAegSQAegSAhAAQA+AAAmAvQAgApAAA0QAAAjgSAmQgSAlgeAUQgfATglAAQg+AAgkgygAgohzQgQAKgJAXQgKAYAAAkQAAA7AYArQAXArAmAAQAdAAASgXQATgYAAg6QAAhIgfgqQgVgcggAAQgQAAgQAJg");
	this.shape_82.setTransform(273.1,162);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("ABYDKIAAgLIAPAAQAZAAALgPQAGgKAAgiIAAkNIiaFTIgKAAIiclTIAAENQAAAlAIAKQALAMAYAAIAOAAIAAALIiNAAIAAgLIAPAAQAZAAALgPQAHgKAAgiIAAkHQAAgbgGgMQgFgIgLgGQgLgGgZAAIAAgLIBzAAICRE7ICQk7IBzAAIAAALIgOAAQgaAAgLAQQgGAJAAAiIAAEHQAAAlAIAKQALAMAYAAIAOAAIAAALg");
	this.shape_83.setTransform(230.6,155.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAOCMIAAgKIAGAAQATAAAIgGQAIgGADgLQABgEAAgYIAAhvQAAglgKgRQgKgRgXAAQgiAAgkAnIAACPQAAAbAEAHQAEAJAHAEQAIAEAWAAIAAAKIiHAAIAAgKIAGAAQAVAAAHgKQAIgMAAgdIAAhkQAAgygCgLQgDgKgEgEQgFgEgIAAQgJAAgLAFIgEgLIBSghIAMAAIAAA5QAxg5AqAAQAXAAAQALQAPALAKAZQAHATgBAkIAAB0QAAAaAFAJQADAHAHAEQAIAFATAAIAAAKg");
	this.shape_84.setTransform(173.2,161.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAlCFQgJgKAAgZQgpAhgKAFQgQAHgTAAQgcAAgSgTQgTgTAAggQAAgUAJgOQANgVAegSQAegQBFgaIAAgLQAAgpgNgPQgNgPgYAAQgTAAgKAKQgMAKAAANIABASQAAANgHAIQgHAHgLAAQgLAAgHgHQgHgIAAgOQgBgZAbgWQAagVAwAAQAjAAAXAMQARAJAJAUQAFANAAAnIAABcQABAnABAJQACAJADADQADADAFAAQAFAAADgDQAGgDASgSIAAAQQgiAtgeAAQgOAAgJgKgAgdAAQgYAOgKAOQgJAOgBARQAAAWANAOQANAOAQAAQAXAAAkgeIAAhnQgsASgNAGg");
	this.shape_85.setTransform(145.4,161.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Ah6DAQgMgKAAgNQAAgMAIgIQAJgIAOAAQAKAAARAHQAMAEACAAQAJAAALgJQAKgJAMgbIASgvIhijNQgEgJgJgOQgIgKgFgEQgHgEgPgEIAAgLICAAAIAAALIgHAAQgOAAgGAGQgHAGAAAIQAAAMAKAUIBCCKIA9iXQAEgMAAgMQAAgFgBgDQgDgDgFgCQgFgCgNAAIAAgLIBZAAIAAALQgLABgGAEQgGADgHAKQgDAEgIATIhuEPQgQAogaAUQgZAUgYAAQgTAAgKgKg");
	this.shape_86.setTransform(115.6,168.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("ABdDKIiIi9IgYABIgJAAIgJgBIAAB2QAAAlAIAKQAMANAWAAIAQAAIAAALIitAAIAAgLIAPAAQAaAAALgQQAGgKAAgiIAAkEQAAgmgIgKQgMgNgXAAIgPAAIAAgLICTAAQBAAAAeAKQAfAJAVAZQAVAZAAAjQAAAmgYAaQgYAcgzALIBTB0QAdAnAUAOQAVANAhADIAAALgAhVisIAACoIAKAAIAHAAQA6AAAcgZQAdgaAAgmQAAgmgXgXQgYgYgmAAQgRAAgeAGg");
	this.shape_87.setTransform(83.2,155.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgWCHQgKgKAAgNQAAgOAKgKQAJgKANAAQAOAAAKAKQAJAKAAAOQAAANgKAKQgKAKgNAAQgNAAgJgKgAgWhXQgKgKAAgOQAAgOAKgJQAKgKAMAAQAOAAAKAKQAJAJAAAOQAAAOgJAKQgKAJgOAAQgMAAgKgJg");
	this.shape_88.setTransform(379.2,92.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ah7DAQgLgKAAgNQAAgMAJgIQAHgIAPAAQAJAAARAHQANAEADAAQAJAAAKgJQALgJAKgbIAUgvIhijNQgFgJgKgOQgHgKgFgEQgGgEgQgEIAAgLIB/AAIAAALIgGAAQgOAAgGAGQgHAGAAAIQAAAMAKAUIBBCKIA+iXQAEgMABgMQgBgFgCgDQgCgDgFgCQgFgCgNAAIAAgLIBZAAIAAALQgLABgGAEQgGADgHAKQgDAEgHATIhuEPQgRAogZAUQgaAUgZAAQgRAAgMgKg");
	this.shape_89.setTransform(355.4,99);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgtDPQgZgIgagSIAAkZQAAgvgCgKQgCgLgFgEQgFgEgHAAQgIAAgNAEIgEgKIBSghIAOAAIAADFQAng3AtAAQAqAAAfAkQAgAkAAA9QAABJgxAsQgpAngzAAQgXAAgYgJgAgQgWQgMAGgSARIAACjQAPAPAQAHQAPAIARAAQAbAAAYgdQAXgfAAg4QAAg1gXgbQgYgcgdAAQgPAAgQAIg");
	this.shape_90.setTransform(323.7,85.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AA3DOIAAgLQAYAAAJgIQAIgGAAgKQAAgNgMgcIgYg7IicAAIgbBAQgKAYAAALQAAAJAJAHQAJAIAdABIAAALIh/AAIAAgLQAZgEAHgHQAPgPATgrICOlMIAJAAICNFQQARAoAOAMQAOAMAYABIAAALgAhWAxICJAAIhDiig");
	this.shape_91.setTransform(275.6,85.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgZDRQgJgCgdgJQgdgKgIAAQgIAAgEAFQgEAEgCAOIgLAAIAAiLIALAAQAIAsANAWQANAWAbAOQAbAOAfAAQAlAAAWgUQAVgTAAgbQAAgPgIgPQgIgQgRgNQgMgIgzgeQg0gbgVgSQgWgRgMgVQgLgVAAgZQAAgrAhggQAigfAzAAQAfAAAkAQQARAHAHAAQAIAAAFgFQAEgEADgOIALAAIAACLIgLAAQgFgogOgYQgOgXgZgPQgagNgaAAQgfAAgVATQgUATAAAXQAAATANAPQATAXBEAlQA4AfAVAOQAVAQALAXQALAWAAAYQAAAugjAhQgkAhg4AAQgRAAgPgCg");
	this.shape_92.setTransform(236.9,85.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AiZDKIAAgLIAPAAQAaAAALgQQAGgKAAgiIAAkEQAAgmgIgKQgLgNgYAAIgPAAIAAgLICUAAQA1AAAfALQAgAMAVAaQAWAaAAAlQAAAyghAeQggAeg8AAQgOAAgRgCQgRgCgTgEIAAB2QAAAmAIAJQAMANAVAAIAQAAIAAALgAgmirIAACoIAcADIAUACQAfAAAXgXQAWgYAAgmQAAgagLgXQgKgXgUgKQgUgMgZAAQgOAAgYAGg");
	this.shape_93.setTransform(202.2,85.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag2CIQgKgDgGAAQgIAAgDAHIgKAAIAAhhIAKAAQAIAqAXAVQAYAVAdAAQAUAAANgMQANgMAAgRQAAgVgOgOQgPgOgqgVQgsgVgNgRQgNgRAAgaQAAghAXgXQAXgXAlAAQAOAAAYAHQAPAFAFAAQAFAAACgCQADgCAEgIIAKAAIAABdIgKAAQgMgrgSgQQgRgQgbAAQgUAAgNALQgNALAAANQAAARAJAMQAKAMAcAOIAqAVQA9AdAAAwQAAAlgcAXQgdAXgiAAQgYAAgggJg");
	this.shape_94.setTransform(159.1,92.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag/DUIAAgLQAUAAAHgEQAGgEAFgJQADgJAAgZIAAhpQAAgsgCgNQgCgJgFgEQgEgEgIAAQgIAAgMAFIgEgLIBRghIANAAIAADaQAAAaAEAIQADAJAIAEQAHAEATAAIAAALgAgSifQgJgJAAgNQAAgMAJgJQAIgJAMAAQANAAAJAJQAIAJAAAMQAAANgIAJQgJAJgNAAQgLAAgJgJg");
	this.shape_95.setTransform(138.4,84.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAPDUIAAgLIAGAAQATAAAIgGQAHgGADgLIABgcIAAhgQgBgtgEgNQgFgOgJgHQgLgHgOAAQgPAAgOAIQgRAHgWAXIAACQQAAAcAEAHQADAHAIAFQAJAEAVAAIAAALIiIAAIAAgLQATAAAKgGQAGgDADgIQAEgIAAgaIAAj2QAAgvgCgKQgCgLgEgEQgFgEgIAAQgGAAgPAFIgDgKIBRgiIANAAIAADIQAhglAUgKQATgKATAAQAXAAARANQAQAMAJAcQAFASAAAzIAABgQAAAaAFAKQACAHAIAEQAGAEAUAAIAAALg");
	this.shape_96.setTransform(114.6,84.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhWDKIAAgLIAPAAQAZAAALgPQAGgKAAgiIAAkzIgxAAQgbAAgMADQgQAGgLARQgLAQgCAbIgLAAIAEhfIFJAAIAFBfIgMAAQgDgZgGgLQgJgRgPgIQgPgIgaAAIg4AAIAAEzQgBAlAJAJQAKANAYAAIAOAAIAAALg");
	this.shape_97.setTransform(80.9,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},224).wait(26));

	// Text2
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgWDJQgKgKAAgNQAAgOAKgJQAJgKANAAQANAAALAKQAJAJAAAOQAAANgJAKQgLAKgNAAQgNAAgJgKgAgEBfIgbjwIgBgXQAAgTAKgMQAJgLANAAQAPAAAJALQAKAMAAAWIgBAUIgbDwg");
	this.shape_98.setTransform(385,203.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgXDJQgKgKABgNQgBgOAKgJQAKgKANAAQAOAAAJAKQAKAJAAAOQAAANgKAKQgJAKgOAAQgNAAgKgKgAgFBfIgajwIgBgXQgBgTAKgMQALgLANAAQANAAAKALQAKAMgBAWIgBAUIgbDwg");
	this.shape_99.setTransform(364.7,203.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag2CIQgKgDgGAAQgIAAgDAHIgKAAIAAhhIAKAAQAIAqAXAVQAYAVAdAAQAUAAANgMQANgMAAgRQAAgVgOgOQgPgOgqgVQgsgVgNgRQgNgRAAgaQAAghAXgXQAXgXAlAAQAOAAAYAHQAPAFAFAAQAFAAACgCQADgCAEgIIAKAAIAABdIgKAAQgMgrgSgQQgRgQgbAAQgUAAgNALQgNALAAANQAAARAJAMQAKAMAcAOIAqAVQA9AdAAAwQAAAlgcAXQgdAXgiAAQgYAAgggJg");
	this.shape_100.setTransform(343.1,210);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AhPBqQgjgmgBhBQAAhFAlgnQAkgnA1AAQAtAAAeAeQAeAfAAAyIi8AAQAAA8AdAiQAeAjAoAAQAaAAAUgPQAUgOANgkIAKAGQgHApgeAhQgeAigtAAQgxAAgigngAgxhnQgUATgDAiIB9AAQgCgagEgLQgIgRgOgJQgPgKgPAAQgZAAgTAUg");
	this.shape_101.setTransform(317.6,210);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AhPBqQgkgmAAhBQABhFAjgnQAkgnA1AAQAvAAAdAeQAeAfgBAyIi7AAQAAA8AdAiQAeAjAnAAQAbAAAUgPQAUgOANgkIAJAGQgGApgeAhQgeAigtAAQgwAAgjgngAgxhnQgUATgDAiIB9AAQgCgagEgLQgIgRgOgJQgPgKgPAAQgZAAgTAUg");
	this.shape_102.setTransform(290.5,210);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AhhCMIAAgKQAUAAAKgHQAIgEADgLQABgFAAgYIAAhoQAAgxgCgIQgBgKgGgEQgFgEgIAAQgJAAgLAEIgEgKIBTgiIANAAIAAA+QAgg+AlAAQAQAAALALQALAKAAANQgBAMgHAHQgIAJgLgBQgKABgNgKQgNgLgHAAQgEAAgHAGQgOAMgMAcIAACCQAAAXAFALQADAIAJAGQAKAFATAAIAAAKg");
	this.shape_103.setTransform(267,209.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhWDKIAAgLIAOAAQAaAAAKgQQAHgJAAgiIAAkzIgwAAQgdAAgMADQgPAHgLAQQgLAPgCAcIgMAAIAFhfIFJAAIAEBfIgLAAQgDgZgGgLQgJgRgQgIQgOgIgaAAIg5AAIAAEzQABAlAHAJQAMANAXAAIAOAAIAAALg");
	this.shape_104.setTransform(240.1,203.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAPCMIAAgKIAFAAQATAAAIgGQAHgGAEgLQABgEAAgYIAAhvQAAglgKgRQgKgRgXAAQgiAAgkAnIAACPQABAbADAHQAEAJAIAEQAGAEAXAAIAAAKIiHAAIAAgKIAGAAQAVAAAHgLQAIgLAAgdIAAhlQAAgxgCgKQgDgLgEgEQgGgEgHAAQgIAAgMAEIgEgKIBSgiIAMAAIAAA7QAxg7AqAAQAWAAARAMQAPALAKAaQAGARAAAmIAABzQABAaAEAJQADAHAIAFQAGAEAVAAIAAAKg");
	this.shape_105.setTransform(192,209.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("ABKCNIhFiuIhOCuIgLAAIhXjlQgJgVgIgIQgJgIgRgEIAAgLIBxAAIAAALQgPACgFAEQgFAFAAAIQAAAJAFANIA7CcIA6h/IgPgoQgIgSgLgGQgHgFgRgBIAAgLICAAAIAAALQgVABgJAHQgGAFAAAKQAAAGACAHIA+CbIA6iWQAGgQAAgJQAAgGgGgEQgGgFgRgBIAAgLIBXAAIAAALQgaAEgNAgIhbDqg");
	this.shape_106.setTransform(154.6,210.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AhkBfQgfgpAAgzQAAglATglQATglAegSQAegSAhAAQA+AAAmAvQAgApAAA0QAAAjgSAmQgSAlgeAUQgfATglAAQg+AAgkgygAgohzQgQAKgJAXQgKAYAAAkQAAA7AYArQAXArAmAAQAdAAASgXQATgYAAg6QAAhIgfgqQgVgcggAAQgQAAgQAJg");
	this.shape_107.setTransform(117.3,210);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AjKDKIAAgLIAOAAQAaAAALgQQAGgKAAgjIAAkEQAAglgIgKQgLgNgYAAIgOAAIAAgLICkAAQBaAAAuAUQAwAVAdAwQAdAwAAA/QgBBTgzA5Qg6A/h0AAgAhYipIAAFWQAmAIAaAAQBEAAAugxQAtgwAAhTQAAhSgtgxQgugwhGAAQgbAAgjAJg");
	this.shape_108.setTransform(79.5,203.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AhyC0QgXgOAAgQQAAgIAEgHQAFgLAQgTIAdghQgPgJgGgHQgGgHgBgKQAAgKAJgOQAIgOAfgZQgZgMgOgWQgNgWAAgaQAAgpAfgdQAfgdAvAAQAmAAAcATIA7AAQAMAAACABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQACADAAAHQAAAHgBADIgEADQgCABgMAAIgkAAQAQAVABAiQgBAmgdAbQgdAbgwAAQgUAAgWgGQgNALgEAIQgFAIABAGQAAAFAEAFQAFAFAOACQAJABAhABQA8ABATADQAcAEAQARQAQAQAAAZQABAhggAeQguArhLAAQg5AAgngagAhXBnQgHANAAALQAAAOARALQAeATA3AAQA1AAAagTQAZgTAAgWQAAgPgPgHQgPgGgugBQhCgCgkgFQgOAPgHANgAgwitQgPARAAAlQAAAvAVAaQAPATAXAAQAWAAAPgRQAPgRAAgkQAAgvgVgbQgQgUgWAAQgWAAgPASg");
	this.shape_109.setTransform(419.4,146.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAPCNIAAgLIAFAAQATAAAIgGQAHgGAEgLQABgEAAgYIAAhvQAAglgKgRQgKgQgXAAQgigBgkAnIAACPQABAcADAGQAEAIAIAFQAGAEAXAAIAAALIiHAAIAAgLIAGAAQAVAAAHgLQAIgKAAgeIAAhkQAAgxgCgLQgDgLgEgEQgGgEgHAAQgIAAgMAEIgEgKIBSgiIAMAAIAAA7QAxg6AqgBQAWAAARAMQAPALAKAaQAGARAAAmIAABzQABAaAEAJQADAIAIAEQAGAEAVAAIAAALg");
	this.shape_110.setTransform(388.6,140);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ag/DUIAAgLQAUAAAHgEQAGgEAFgJQADgJAAgZIAAhpQAAgsgCgNQgCgJgFgEQgEgEgIAAQgIAAgMAFIgEgLIBRghIANAAIAADaQAAAaAEAIQADAJAIAEQAHAEATAAIAAALgAgSifQgJgJAAgNQAAgMAJgJQAIgJAMAAQANAAAJAJQAIAJAAAMQAAANgIAJQgJAJgNAAQgLAAgJgJg");
	this.shape_111.setTransform(365,132.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgMCwQgOgIgGgOQgGgOAAgdIAAi3IgrAAIAAgKQAQgHARgPQARgPAOgWQAHgMALgdIAJAAIAABZIBAAAIAAAVIhAAAIAACwQAAAaAIAKQAHAJAMAAQAKAAAJgGQAJgGAGgMIALAAQgKAdgTAPQgTAPgVAAQgNAAgMgIg");
	this.shape_112.setTransform(348.2,136.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgMCwQgOgIgGgOQgGgOAAgdIAAi3IgrAAIAAgKQAQgHARgPQARgPAOgWQAHgMALgdIAJAAIAABZIBAAAIAAAVIhAAAIAACwQAAAaAIAKQAHAJAMAAQAKAAAJgGQAJgGAGgMIALAAQgKAdgTAPQgTAPgVAAQgNAAgMgIg");
	this.shape_113.setTransform(331.3,136.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AA5CNIAAg6QgjAmgTAKQgRAKgVAAQgXAAgQgOQgRgNgHgVQgGgVAAgmIAAh5QAAgTgFgHQgEgIgIgEQgIgEgWAAIAAgLIBgAAIAAC2QAAAmANAMQANAMATAAQAMAAAQgIQARgIAWgXIAAiZQAAgYgIgIQgJgIgbgBIAAgLIBdAAIAAClQAAAvACALQACAKAGAEQAEAFAHAAQAJAAAMgFIAEAKIhSAig");
	this.shape_114.setTransform(307.2,140.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AiMCJQgpg4AAhLQAAg7AbgzQAcgyAvgcQAwgcA3AAQAsAAAqAWQANAGAFAAQAIAAAGgGQAIgIADgOIALAAIAJCJIgJAAQgTg+gigaQgigbgwAAQgoAAggAUQghAUgSAtQgTAsAABCQAAA3ASAoQARAoAkAWQAjAVAsAAQAoAAAegRQAegQAkgyIAJAGQgeA1gpAZQgoAZg4AAQhkAAg3hKg");
	this.shape_115.setTransform(271.6,133.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgMCwQgOgIgGgOQgGgOAAgdIAAi3IgrAAIAAgKQAQgHARgPQARgPAOgWQAHgMALgdIAJAAIAABZIBAAAIAAAVIhAAAIAACwQAAAaAIAKQAHAJAMAAQAKAAAJgGQAJgGAGgMIALAAQgKAdgTAPQgTAPgVAAQgNAAgMgIg");
	this.shape_116.setTransform(227.9,136.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhkBfQgfgpAAgzQAAglATglQATglAegSQAegSAhAAQA+AAAmAvQAgApAAA0QAAAjgSAmQgSAlgeAUQgfATglAAQg+AAgkgygAgohzQgQAKgJAXQgKAYAAAkQAAA7AYArQAXArAmAAQAdAAASgXQATgYAAg6QAAhIgfgqQgVgcggAAQgQAAgQAJg");
	this.shape_117.setTransform(203.8,140.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("ACYDNIkJlEIAAD4QgBAlAJAJQALANAYAAIAOAAIAAALIiMAAIAAgLIANAAQAaAAALgQQAGgJAAgiIAAkYQgRgVgJgGQgKgHgRgFQgJgDgRAAIAAgLIBtAAID3EuIAAjoQAAglgJgKQgLgMgXAAIgPAAIAAgLICNAAIAAALIgPAAQgZAAgLAPQgGAKAAAiIAAFTg");
	this.shape_118.setTransform(165.7,134.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Ah7DAQgLgKAAgNQAAgMAIgIQAJgIAOAAQAJAAASAHQALAEADAAQAKAAAKgJQALgJALgbIATgvIhjjNQgEgJgKgOQgHgKgFgEQgHgEgPgEIAAgLICAAAIAAALIgHAAQgNAAgHAGQgHAGAAAIQAAAMAKAUIBCCKIA8iXQAGgMAAgMQAAgFgCgDQgDgDgFgCQgFgCgNAAIAAgLIBZAAIAAALQgLABgGAEQgGADgHAKQgDAEgIATIhtEPQgQAogbAUQgaAUgXAAQgTAAgLgKg");
	this.shape_119.setTransform(114,147);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("Ai1DKIAAgLIAQAAQAZAAALgQQAHgKAAgjIAAkEQAAglgJgKQgLgNgXAAIgQAAIAAgLICvAAQAwAAAdAHQAtALAXAbQAYAbAAAkQAAAfgSAXQgTAYgkAMQAqAIAVATQAdAcAAAoQAAAdgTAcQgTAbghAOQgiAMhEAAgAgsAFQgNABgIABIAACmQAiAIAhAAQA2AAAcgZQAdgYAAgkQAAgXgNgWQgNgVgdgNQgdgNgpAAIggABgAhBivIAACcIAZADIAfABQArAAAWgJQAWgKALgTQAMgTAAgYQAAgjgdgZQgdgZg2AAQgeAAgYAGg");
	this.shape_120.setTransform(77.2,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},196).to({state:[]},28).wait(26));

	// Sun
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(13.2,1,1).p("Ai3hJQB0DqD7iL");
	this.shape_121.setTransform(469.4,84.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(13.2,1,1).p("AAZgxIgxBj");
	this.shape_122.setTransform(494.5,63.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(13.2,1,1).p("AAagtIgzBb");
	this.shape_123.setTransform(465.4,56.5);

	this.instance = new lib.Sun();
	this.instance.parent = this;
	this.instance.setTransform(408,0,0.255,0.238);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(13.2,1,1).p("Agjh/ICDEVAhfAKIAAifIA0ASIAIAEIAHAIQAFAEAHACQAEACAHAC");
	this.shape_124.setTransform(472.4,65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ACxB4QgPgGgSgSIgigjQgUgVgSgJQgOgIghgIQgfgIgPABQgNABghAKIg9APIgqAJQgYADgRgGQgTgHgNgQQgMgRgCgSQgBgUAKgSQALgSARgJQANgGATgDIAigDQASgDArgMQAmgLAWgBQAUgBAmAGQAxAHAXAJQAYAJAcATIAxAjQAbAUAJALQAGAIAIAUQAKAZAAARQgBAfgZASQgMAJgPACIgIAAQgLAAgJgDg");
	this.shape_125.setTransform(474.1,82.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAGBoQgJgFgNgNQgQgPgGgLIgLgRIgMgNQgHgJgKgTQgRgfgBgTQgBgZASgSQARgSAZAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQATACAPAKQAPAKAKAQQAGAJAKAVIARAXIALARIAOAPQANAQAAAXQAAAXgOAQQgOARgWAEIgNABQgPAAgNgIg");
	this.shape_126.setTransform(495.1,55.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("Ag3BLQgNgDgJgFQgRgLgIgTQgGgTADgTQABgLAEgIQAGgOANgKQANgJAQgDQAKgBATgBQAKgBAWgIQAVgIANAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQAPAAANAHQAOAHAIALQAIAMADAPQACAPgFAMQgGASgRAQQgKAJgXAPQgOAJgHACQgOAFgYAAQggAAgMgCg");
	this.shape_127.setTransform(467.1,52.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#999999").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_128.setTransform(465.7,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124},{t:this.instance},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},80).to({state:[{t:this.instance},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},88).to({state:[]},28).wait(54));

	// Guy
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(411.9,253,1,1,0,0,0,38.1,56);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).wait(1).to({x:406,y:251.3},0).wait(1).to({x:400,y:249.7},0).wait(1).to({x:394.1,y:248},0).wait(1).to({x:388.1,y:246.4},0).wait(1).to({x:382.2,y:244.7},0).wait(1).to({x:376.2,y:243.1},0).wait(1).to({x:370.3,y:241.4},0).wait(1).to({x:364.3,y:239.8},0).wait(1).to({x:358.4,y:238.1},0).wait(1).to({x:352.4,y:236.5},0).wait(1).to({x:346.5,y:234.8},0).wait(1).to({x:340.5,y:233.1},0).wait(1).to({x:334.6,y:231.5},0).wait(1).to({x:328.6,y:229.8},0).wait(1).to({x:322.7,y:228.2},0).wait(1).to({x:316.7,y:226.5},0).wait(1).to({x:310.8,y:224.9},0).wait(1).to({x:304.8,y:223.2},0).wait(1).to({x:298.9,y:221.6},0).wait(1).to({x:292.9,y:219.9},0).wait(1).to({x:287,y:218.3},0).wait(1).to({x:281,y:216.6},0).wait(1).to({x:275.1,y:215},0).wait(1).to({x:268,y:217.6},0).wait(1).to({x:260.9,y:220.3},0).wait(1).to({x:253.8,y:222.9},0).wait(1).to({x:246.7,y:225.6},0).wait(1).to({x:239.6,y:228.3},0).wait(1).to({x:232.5,y:230.9},0).wait(1).to({x:225.3,y:233.6},0).wait(1).to({x:218.2,y:236.3},0).wait(1).to({x:211.1,y:238.9},0).wait(1).to({x:204,y:241.6},0).wait(1).to({x:196.9,y:244.3},0).wait(1).to({x:189.8,y:246.9},0).wait(1).to({x:182.7,y:249.6},0).wait(1).to({x:175.6,y:252.3},0).wait(1).to({x:178.1,y:254.2},0).to({_off:true},28).wait(54));

	// Tree
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#663300").s().p("ABJD3QgZAAgmgPQgXgKgLgHQgRgKgVgWIgjgkIgTgSQgKgLgFgKQgFgNAAgbIABirQAAgigEgRIgGgbQgDgXAQgTQAQgTAXgEQAWgDAVAMQAVAMAKAVQAGAOACATIABAjIgBCjQAAAOACAHQACAEAHAMQAOARAKAJQAPANAcAKIAfAKQASAHAKAJQASAQACAaQACAagPARQgUAXglAAIgDAAg");
	this.shape_129.setTransform(144.2,275.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#663300").s().p("AiREpQgsgFgTgcQgMgSAEgXQAEgYARgNQARgNAmgEQAqgEAQgIQAUgKAOgYQAKgQAMgeIBHi/QAchKAIgcQAIgcAGgMQAKgWAPgKQAOgKATAAQASAAAPAJQAOAJAJAQQAJAQAAARQABAQgKAfIgWA/IhCC1QgUA3gQAhQglBJg3AnQgfAVgjAKQgaAIgZAAIgVgCg");
	this.shape_130.setTransform(107.3,279.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#663300").s().p("Ag5DKQgSgOgEgVQgCgJAAgMIABgWIgBgVQAAgNACgIIAGgVQAEgPgBgcQgCgmADgQQACgJAHgVQAHgTACgLQABgIAAgmQgBgcAJgPQAOgaAjgEQAmgEAVAYQATATgDAbQgBALgHAWQgBAJABATQAAASgBAJQgCALgGAQIgJAbQgEAQACAhQABAjgEAQIgEAQIgDAQIgBAVQAAANgBAHQgEAVgSAPQgSAPgUAAQgWAAgRgPg");
	this.shape_131.setTransform(124.7,308.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#663300").s().p("AkBExQgZgPgEgaQgDgUAMgVQAMgTATgNQAQgKAYgJIAqgOQArgOAsgbQAEgOAKgRIASgeQAgg2ANg4QAJgfAGgsIAKhLQAEglAJgWQAMggAXgNQAVgLAYAFQAZAFANAUQANAUgBAuIgBBsQAAApAFATQADAQALAdQAFASAGAoQAHAiARAQQAHAHASAKQARAKAHAHQAQASABAXQABAcgZAUQgYAUgdgDQgcgDgbgXQgSgQgZghQgbgjgIgUQgKAEgIAXQgOAqgeAgQgeAhgoAQQgOAGgeAJQgeAJgPAGIgeAQQgSAJgOACIgNACQgUAAgSgMg");
	this.shape_132.setTransform(119.2,282.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663300").s().p("AgHCiQgdgEgQgTQgPgQAAgYQABgYAPgQIAHgHQAEgFACgEQACgFAAgKIgBg6IgBgHQgCgCgGgCQgRgGgLgPQgMgQgBgSQgBgSAKgQQAJgQARgIQALgFAVgCQAQgBAJACQANADAZAOQAPAJAGAHQAGAHAFANQAIARACALQADAKAAAWIAAB0QAAAUgCAKQgDAQgKANQgNATgXAJQgQAHgRAAIgLgBg");
	this.shape_133.setTransform(117.3,321.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#663300").s().p("AgWB5QgQgCgNgJQgNgKgHgOQgGgOABgQQABgRAJgMQAHgJABgFQACgGAAgKIAAg0QAAgRACgHQADgKALgMQAVgUATADQAGABAAgEQAfgCAWAVQAKAKAFAOQAFAOgDAOIgGAVQgDAMABAXQABAZgDALQgCANgJAQQgXAngcAJQgIADgKAAIgIgBg");
	this.shape_134.setTransform(132.2,320.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#663300").s().p("AC+BrQgNgBgZgFQgegIgPgHQgYgLgLgRIgJgPQgFgKgGgEQgMgKgeADQgyAEgZAKIgVAJIgUAJIgRAHQgJADgGAEQgIAGgNANQgPAMgWgBQgVgBgPgNQgPgMgGgUQgGgUAFgTQALgpAxgWQAMgGAbgJIAhgQQAjgQAugFQAigFAyABQAcAAARAEQAYAFAOAPQAFAGALARQAIAQAJAGQAIAGAOAEIAYAHQASAGAOAOQAOAOAFATQAEATgIATQgIATgRAKQgNAHgTAAIgFAAg");
	this.shape_135.setTransform(130.2,310.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#663300").s().p("AAGB4QgSgEgOgPQgNgQgCgTQAAgOgCgHQgBgGgFgIIgHgNQgFgRgEgGIgLgQQgFgLgBgPQgBgTAEgLQAFgSARgMQARgMATAAIACgBIAAgBQATACAPAKQAQAKAKAQIAWArQAGAOACAGIADATQABAGAGAPQACAKAAAOQAAAegLASQgJARgTAIQgNAFgMAAQgHAAgGgCg");
	this.shape_136.setTransform(107.8,321.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#663300").s().p("AAvBLIgPgKQgJgFgIgCQgKgDgPAAIgbgBQgSgCgZgIQgYgIgKgIQgPgMgGgSQgFgUAHgRQAGgSARgLQAQgMATABIABgCQAOgCAVADIAjAGIAdADQAfADAWAIQAcALAQAUQATAagEAeQgCAPgJANQgJANgNAHQgNAHgPABQgQAAgNgIg");
	this.shape_137.setTransform(90.3,306.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#663300").s().p("ACeBcQgHgDgKgHIgPgLQgcgTgggHQgLgDgXgCIgygFQhOgIgnABQgmABgMgBQgcgDgQgOQgLgJgGgNQgGgOABgPQABgOAJgNQAIgNANgHQASgKAoAAIBlAAQApAAAUADIAoAGQAMABAWAAQAVAAAMAEQAIADALAGIATAKIAWAIQAOAEAHADQAQAJAZAbQARATAEALQAHAUgKAWQgLAYgbAKQgNAFgMAAQgOAAgMgGg");
	this.shape_138.setTransform(143.7,304.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#663300").s().p("AAbCLQgSgGgPgSQgMgMgOgWIgVghIgRgaQgPgRgHgIQgQgbACgnQgBgVAHgOQAGgQAQgKQAPgJARAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQATAAARAMQAQANAGATIAEASQAEAJAMAOIANAXIAQAQIALAQIAOAVQAGAKAGAXQAIAWgBANQgCAKgEAHQgKAVgVAJQgNAFgNAAQgJAAgJgCg");
	this.shape_139.setTransform(128.2,309.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("AitDBQgSgKgJgSQgKgSACgUQACgUANgQQANgQATgFQAMgDAXgDQAJgCAYgJIAcgKQASgGAKgFQAggOAOgVIAMgVQAHgOAFgGIAPgQQAIgJADgJQACgFABgKIADgQIAGgNIAHgMIAIgXQAFgOAFgIQAMgSAZgEQAZgDATANQATAMAIAXQAIAXgEAWQgDAPgKAYQgMAagDAMIgEAQQgCAKgDAGQgFAIgQAQIgUAfQgdAxgxAfQgSALgwAVIg3AXQgfALgWADIgLAAQgXAAgRgJg");
	this.shape_140.setTransform(106.3,298.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#006600").ss(13.2,1,1).p("EgrCgMaIQQLGILGgyIMCmuILtCCIL4FeIO2kYIIIlAIAKXHMhV7gAKg");
	this.shape_141.setTransform(274.5,323.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#006600").s().p("Egq4AMRIgK4rIQQLGILGgyIMCmuILtCCIL4FeIO2kYIIIlAIAKXHg");
	this.shape_142.setTransform(274.5,323.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#663300").s().p("AAsFcQgTgNgWgjQgig1gfg2QgQgbgHgRIgNgrIgRhHIgMg4QgEgUgDgbQgJhEABgtQADgygDgQIgGgfQgEgTACgMQADgZAXgQQAWgPAZAFQAZAGARAXQAPAWAEAcQADAVgCAhIgCA1QABASAGAxQAQBtARA6QAbBbAwA6IAUAYQAMANAHALQAUAggHAbQgEAQgMAMQgMAMgQAEQgKACgJAAQgWAAgVgOg");
	this.shape_143.setTransform(146.7,261.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#663300").s().p("AkUGDQgLgKgFgOQgFgPACgOQADgPAJgMQAJgNAOgGQAPgGAegBQAgAAANgEQAXgIAbgcQA/hAAvhOQArhJArhuQAphqAehtQAMguAMgTQAUgkAhgGQAagFAWASQAXASACAaQABAOgHATIgNAfQgLAbgLApIgSBEQgLAlgZA/QgfBQgTAqQgeBDghAxQghAwhHBRQgYAbgNAMQgWAVgVAKQglAThBABIgFAAQg0AAgWgVg");
	this.shape_144.setTransform(107.1,262.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#663300").s().p("AAYDsQgRgEgMgLQgNgMgFgRIgFggIgGgXQgCgKAAgWIAAg2QAAgRgBgJIgGgYIgHglQgDgNgLgcIgVgxQgLgagBgPQgCgSAJgRQAJgRAQgJQAQgIATAAQATABAOALQAOAKALATQAHANAIAXQANAlAPAyQAJAgADAQQACANACAZIAAAjQAAAWACANIAFAhIAEAhQADAngRAXQgKAOgRAGQgMAFgLAAIgKgBg");
	this.shape_145.setTransform(134.2,254.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#663300").s().p("AAUCXQgMgFgPgQQgRgRgIgOQgJgUgGgJIgNgOQgIgJgDgHIgFgPQgCgFgIgNQgGgIgFgOQgJgaAAgpQAAgUADgLQAGgRAPgMQAQgMASAAQAFAAAAgCQAYABASARQARASACAXIABAVQACAHAFAJQAIASAcAwIAZApIANAUQAJARgCAUQgDAUgOAOQgNAOgUAEIgMABQgNAAgMgGg");
	this.shape_146.setTransform(140.2,222.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#663300").s().p("AAEBGIgQgIIgSgHIgagGQgOgDgLgLQgLgKgGgOQgFgNACgPQACgPAIgMQAJgMAOgHQANgHAPAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAZgCANACQAVACAPAJIAMAIIAPAGQAYAJAKAXQAKAWgJAYQgEAJgHAJQgKALgJAFQgJAEgPACIgRABQgNAAgKgDg");
	this.shape_147.setTransform(169.7,296.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#663300").s().p("ABKFSQhHgqgeg/QgHgNgQgxQgOgtgTgrIgVgzQgIgTgKgfIgMgmQgXhLgVhTQgMgyADgaQADgUAKgRQALgSARgHQAVgJAYAKQAXAKAKAVQAFAMADAQIADAeQADAXAOAuIAoCGQALAjAIAVIASAqIARAqIAaBIQARAoAYAVIAgAYQATAOAIAOQAIANAAAQQABAQgIAOQgHANgNAJQgNAJgQABIgCAAQgYAAgggTg");
	this.shape_148.setTransform(154.1,266.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#663300").s().p("AAKC1QgSgDgPgOQgOgPgDgSQgCgSgCgIQgFgOgBgIIgBgMIgBgNIgHgVQgEgNACgeQABgdgFgPIgHgNIgGgOQgEgLAAgUQAAgUAEgMQAFgRAQgLQAQgMATABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQAUAAARAOQARAOAFAUIAFAUIAHAMQAMARgBAgIgBAaQAAAPACAKIAFAOQADAKAAAGIAAAPIABAOIAGARQAEAMAAAVQgBAZgIAQQgIARgTAJQgOAHgOAAIgJgBg");
	this.shape_149.setTransform(139.8,235.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#663300").s().p("AAMEdQgYgEgNgTQgEgGgEgLIgHgRQgLgVgDgMQgCgIgCgbQgCgNgGgYIgIglQgEgTAAgyIACiaQAAgigEgRQgHgaAAgOQAAgXATgRQASgRAXAAQAXgBATAPQAUAPAHAWQAFARAAAkIAADRQAAAmAGARIAHAPIAFAPQADALAAAWQABAKAHARIAKAaQAFAWgIAXQgJAWgTAMQgOAIgRAAIgMgBg");
	this.shape_150.setTransform(145.3,227.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#663300").s().p("AjkHjQgngEgUgUQgRgTADgbQADgcAVgOQAPgLAbgEIAugHQAbgIAegaQAiggASgPIAhgYQAVgOALgMQAXgWARgjQANgYAOgqQAkhiAahnQAQg/AEgqQADgxAEgYIAIgnIAKgmIAIgoQAGgYAIgPQAKgUARgMQASgNAUACQAaACAQAaQAPAYgBAdQgBAWgLAfIgQA0QgGAXgEAiIgGA5QgHBFgXBUQgOAygiBiQgPAvgLAaQgQAngUAcQgSAagdAcQgQAPgmAgIg0AtQgeAZgOAKQgZASgXAKQgmARgqAAIgVgBg");
	this.shape_151.setTransform(101.8,242.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#663300").s().p("Ag3CYQgbgNgHgbQgEgLABgOQABgQAJgiIAKgeIAIgdIAFgXIAGgPQACgOADgGIAGgJIAHgJIAEgKIAEgKQAHgRAPgKQAOgKASABQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAQAAAPAJQAPAJAIAPQAIAPABAWQAAAPgDAKQgCAJgJAPQgKAQgDAIQgEAJgBANIgRBCQgKAegHANQgNAXgRAKQgOAGgNAAQgNAAgMgFg");
	this.shape_152.setTransform(104.8,272.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#663300").s().p("Ah3BAQgXgGgMgQQgGgIgEgNQgIgfAPgaQAHgNANgIQAOgIAOABQAHAAgBgDQAeAJAPgCIAWgEQAOgDAcAAIBIAAQAmAAARAIQAQAIAKARQAJAQgBASQgBARgMAPQgMAQgRAFQgKAEgaABIhYADIgWAEQgSADgmAAQgfgBgLgDg");
	this.shape_153.setTransform(77.2,290.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#663300").s().p("AA3GwQgfgFgYglQgPgbgQg5QgThCgniSIgKgnIgMgwQgNg8ABg/QABgdAIhGQAHhAgBgkIgBgtQACgaAKgQQAMgTAWgHQAWgIATAJQAnATABBLQABAlgJBgQgIBTAFAxQAEAwAaBdIAjB9QAWBQAPAmIAKAaQAFAPAAALQABAcgWAUQgSARgVAAIgJgBg");
	this.shape_154.setTransform(151.5,252.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#663300").s().p("Ai/HdQgYgBgSgVQgRgVAEgZQADgVAZggIBih8QArg2ARgaQAgguARgpQAMgcAQg2IBVkXQAPgyABgXIACgoQABgXAIgOQANgXAdgGQAdgFAUAQQAeAZgCA7QgBAmgLAuQgGAdgRA1IhKDyQgQA0gLAZQgNAegaAqQhPCEhjBzQgVAZgRAMQgXAQgWAAIgDAAg");
	this.shape_155.setTransform(113.5,246.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#663300").s().p("AAUHsQgegCgPgXQgJgOgCgTQgCgMAAgYIADiIQABg1gDgcQgEgsgQghQgjgDgYgnQgWgnAAhDQgBgwAIgxIANhFQAShMADgtIACgpQACgZAEgRQALgwAjgTQATgJAngBQAkgBAUAEQAfAGAQASQATAWACAxQABAqgJAYIgIATQgFALgCAHQgDANABAUIADAhQAAASgEAYIgJApQgHAkgEArQgDAegCAfQgBAeAABdIABENQABAcgDAQQgEAYgNAOQgQATgbAAIgGAAg");
	this.shape_156.setTransform(138.3,199.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#663300").s().p("AgqFPQgTgOgEgUQgDgMADgRIAFgdQAEgXgBgmIgBm2QAAgoAKgSQAHgOAOgJQAOgIAPgBQAQAAAOAIQAPAHAIAOQAIAMADATQABAMAAAVIAAHtQAAApgIATQgIAUgRANQgSAOgTAAIgCAAQgUAAgRgMg");
	this.shape_157.setTransform(147.3,180.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#663300").s().p("AgdEaQgQgBgNgJQgYgRgEglQgDgVAHgqIALg7IAFgpIAAguQgBgdADgRIAFgUIACgUQAAgXADgMQAGgTACgLQACgJgBgPIgBgYQABgQAGgQQAIgaALgMQAMgOASgFQATgFASAHQARAGAMAQQALAPABATQABANgFAXQgHAZAAALIABAXQACAOgCAIQgCAKgHARQgBALAAAXQgBAPgIAcQgCAQABAjQACAigDARIgRBXIgBATIgCATQgCAQgKANQgKAOgOAGQgMAGgOAAIgEAAg");
	this.shape_158.setTransform(126.2,176.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#663300").s().p("AgBB/QgSgCgPgMQgPgNgFgRQgDgMAAgZIABg4QAAgOgBgDIgGgPQgFgNACgQQABgPAJgMQAIgMAOgHQANgHAPAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAgBAAQAeADAVAXQAPARAEAVQACAMAAAQIAABHQAAAogJARQgIARgSAJQgOAHgOAAIgGAAg");
	this.shape_159.setTransform(132.3,149.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#663300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_160.setTransform(125.8,137.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#663300").s().p("AhrCpQgXgGgOgRQgNgSAAgXQABgYAQgPQAIgHANgGIAWgLQAWgKAWgUQAOgMAYgaQAPgQACgFIARghQAJgLACgFIACgLIABgLQACgTAOgPQAPgPATgEQATgDASAJQATAIAJASQALATgBAhQgBAigLAQQgNAQgEAJQgDAHgDANQgFAPgUAUQg5A8g6AqQgbATgTAFQgLADgLAAQgLAAgLgDg");
	this.shape_161.setTransform(160.3,143.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#663300").s().p("AgaBrQggAAgPgGQgOgGgKgKQgRgQgEgQQgDgKAAgUQAAgnACgPQAEgeAQgUQATgYAcAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAPABANAIQAOAHAIANQAIAMADARQACAPgFAPQANABAbAAQAYACAOAHQAPAHAKAPQAJAOAAARQAAARgJAPQgJAPgPAIQgMAGgQACIgdABg");
	this.shape_162.setTransform(162.7,174.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#663300").s().p("AjBBJQgOgLgHgQQgIgQABgRQADgXAUgQQAVgRAXACIARADIARADQANAAAXgKIAwgZQAdgOAVgEQAQgDAXgBQA3gDAfAIQAxANARAmIAJAWQAGAPABAJQADAPgGAQQgGAQgMAKQgMAKgQADQgRADgPgFQgTgHgRgVQgHgJgFgCIgLgDQgYgDgNAEQgJACgVALQgQAJgjAOQgcAKgRAFQgaAGgVAAQgngBgZgUg");
	this.shape_163.setTransform(168.7,155.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AhcCqQgOgHgJgMQgJgNgCgPQgCgPAFgPQAFgPAMgKIAQgLIAQgLQAJgIAJgPIAQgZQAPgSAGgLQAJgPACgVIADgcQACgMAEgOQAEgPAGgKQAIgNAOgIQANgIAQgBQAPgBAPAHQAOAHAJANQATAbgJApIgGAUQgCALgBAWQgCAQgIATQgNAhgWAZQgVAZgEAIIgHAQQgEAKgFAFIgJAGIgJAHQgFAFgHALQgPATgkABIgGAAQgVAAgOgHg");
	this.shape_164.setTransform(142.3,144.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#663300").s().p("AhlBTQghAAgPgFQgagHgQgTQgRgWACgYQABgaAYgSQAVgQAdADIAfAGIAXABIAeAAIAXgBQAYgCA4gTQAzgRAeABQAZABARALQAOAJAIAQQAHAPgBARQgCAQgLAOQgKAOgQAGQgIADgQADQgSADgHACQgHACgKAFIgQAJQgSAIgcAEQgnAHhEAAIgiAAg");
	this.shape_165.setTransform(109.2,163.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#663300").s().p("ACiC1QgcgSgEgUQAAgRgDgIQgEgIgLgJIhrhUIgwglQgdgTgZgLQgpgSgtgCIgZgBQgOgBgKgEQgPgFgKgNQgLgNgDgQQgCgQAHgQQAGgPANgKQATgPAngCQBigEBVAzQAbARBAA2QA4AvAmATIAYAMQANAHAIAIQALAMAIAYIAOAoIAHAQQAFAJABAGQAIAdgRAWQgQAYgdACIgFAAQgWAAgbgRg");
	this.shape_166.setTransform(114.7,151.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#663300").s().p("AiPERQgPgFgKgLQgQgSgCghIAAgbIABgcIAAgaQAAgPACgKQADgQANgWQAQgbAYggQAagiBWhrIBThmQARgUALgHQAOgJARAAQARAAAOAIQAOAIAIAPQAIAPAAAQQgBAXgXAhQgUAdgzA6QgwA2gVAgIgSAbQgJAPgJAKIgTATQgLAKgFAJQgKAPgCAVQgCANABAaQAAAVgBALQgBARgGAMQgPAdgfAGIgKABQgJAAgKgEg");
	this.shape_167.setTransform(180.1,116.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#663300").s().p("AiFE4QgWgBgQgOQgPgNgHgVQgGgUADgVQACgMAHgSIAMgeQAFgQAGgWIAIgmQAQhAAYg3IAQgkIARggQAbgtApguQAcghAzgxQAZgYAQgHQAQgHATABQASACAOAJQAPAKAHARQAHASgEARQgEAQgQATQgNAPgcAYQgdAZgMAOQgKALgTAbQgbAmgQAbQgoBDgSBRIgMA0IgPAvIgLAqQgIAXgOALQgPALgTAAIgEAAg");
	this.shape_168.setTransform(157,122.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#663300").s().p("AAgEOQgQgDgMgLQgLgLgFgQQgCgGgCgLIgDgRQgDgMgLgXQgPgigNgiQgRgvgJglIgNg/QgJg2ACgbQABgOAHgmQAEgSAEgIQAFgLAPgQQATgUASgGQAOgFAQACQAPACAMAJQAMAKAHAOQAGAPgCAPQgCAOgJATQgQAjAAAUQgBAMAFAXQALA0AJAZIAMAjIAGAbQADAHAIANQAIAOACAHQAEAKAFAWIANAgQAIAagFAZQgEAWgNAQQgLAMgQAFQgJAEgKAAIgMgCg");
	this.shape_169.setTransform(130.2,124.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#663300").s().p("AD3DiQgWgFgXgYIgjgpQgVgYgSgNQgMgIgUgJIghgQQgXgLgogdIiLhiQgcgTgOgIQgZgOgVgEIgfgEQgSgCgLgFQgNgGgKgNQgJgNgCgPQgCgPAGgOQAGgPALgKQARgOAhgEQAzgEA6AbQAkARA8ArIBNA4QAuAgAYAOIBMArQA+ApA2BDQAYAcADAVQADAPgFAOQgFAPgLAKQgLALgQADQgHACgIAAQgHAAgHgCg");
	this.shape_170.setTransform(92.7,137.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#663300").s().p("AjeBEQgpgHgbgVQgOgMgHgNQgHgPACgSQADgTAMgNQALgNASgFQARgGASADIATAGIATAGQAKACAUAAIFJACQAdAAALgCIAYgHQAPgFAJgBQAUgCASAJQATAKAHASQAIAQgEATQgEARgMAPQgUAZgpAKQgaAFguAAIk4ABQgyAAgbgFg");
	this.shape_171.setTransform(83.2,166.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#663300").s().p("AkODdQgggCgRgWQgOgSADgZQACgZARgPQAJgHASgIQAUgJAIgGQALgIATgXQA1hABIguQBIguBQgVIAigJQAVgFANgFQAggMAlgZQAggXAJgFQAXgOAVABQAbABASAYQASAYgGAaQgHAegqAfQhPA4heAaIhDASQgbAKgpAbQg5AkgsAuIgoApQgYAXgWALQgXANgZAAIgIgBg");
	this.shape_172.setTransform(195.7,132.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#663300").s().p("AkcBhQgUgSgDgZQgCgZAPgWQAPgVAXgJQAVgIArAAIBAAAQAsAAAWgEQAXgDAogNIBlgfQAhgLAggIQAvgNAbADQATACAQAJQASAKAIAQQALAXgLAaQgLAZgYAJQgKAEgUACQgWACgJADQgIACgMAHIgTAJQgLAFgQACIgcAFQgZAEgxARQgvARgbAEQgYAEg7AAIguABQgSAAgLADQgGABgQAGQgOAEgJABIgFABQgWAAgSgQg");
	this.shape_173.setTransform(188.1,156.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#663300").s().p("ABYBlQivgdhxgEQgZgBgLgBQgUgDgNgIQgRgKgJgTQgJgSADgTQADgTAOgPQAOgPATgEQAPgDAXADICUAOQBvALA1AOQAZAGAMgEQAMgFAQgXQAng6AsACQAUABARAQQAQAPACAUQADAVgMAXQgIAPgTAXIgaAgQgQAVgNAKQgWAQgkACIgDAAQgXAAgngHg");
	this.shape_174.setTransform(178.6,179.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#663300").s().p("AgKBlQglgEgZgKIgrgXQgagPgSgDQgJgCgSgBIgbgBQgigEgWgYQgKgMgFgPQgEgQADgPQAGgVAUgSQATgRARgCQALgBAOAFIAZAJQANAEAhAHQAdAGAQAGQAJAEAjATQAbAOARADQANADAagBQA6gDAegKQAPgFAcgMQAZgJATAAQAcABATARQAVATgBAaQAAARgLAQQgRAYgtAQQhUAehYAAQgaAAgagCg");
	this.shape_175.setTransform(228.2,183.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#663300").s().p("AiMCAQgOgHgIgOQgJgOgBgQQAAgQAIgOQAHgPANgIQAJgGAfgJQA6gOA2gcQAMgGAEgHQADgFABgHIACgOQADgNAUgVQASgSANgHQASgIAVAFQAUAEANAPQANAOADAVQADAUgIATIgOAZIgLAgQgHAUgJAKQgJAJgTAKQgoAVgWAHIgYAJIgdAQQgkASgpABQgdAAgRgJg");
	this.shape_176.setTransform(226.7,150.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#663300").s().p("AhiEyQgRgKgKgSQgIgPgFgYQgHgZgEgdQgHg3AAhwQAAgfAFgRQAKgfAmgeIAfgYQASgOALgMQATgVAWgyQAXgzARgVQAUgYAYgGQAPgEAQAEQAQAFALALQALALAEAQQAFAPgEAQQgDAKgHAMIgNAVQgGALgQAjQgtBlg9AoIgRAKQgKAIgEAIQgFAKAAAQQgDBUAXBUIAIAgQADASgDANQgFATgRAMQgRAMgTAAIgCABQgSAAgRgLg");
	this.shape_177.setTransform(133.1,82.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#663300").s().p("Ai/D2QgegGgPgaQgHgNAAgPQAAgOAHgNQAIgPASgLQALgHAYgJIB2gvQA0gUAVgUQAPgNANgTIAVgnQAVgmAGgXQAGgbAEgNQAIgUADgLQAFgZAFgLQAGgNAKgJQAKgJANgDQAcgIAXAQQAQALAIAUQAHASgBAVQAAARgGAWIgNAlIgXA9QgUAwgKARQgPAagoArQgeAhgQALQgUANgoARIhFAeQg4AXgWAGQgXAIgTAAIgMgBg");
	this.shape_178.setTransform(200.8,99.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#663300").s().p("AAHBWQgPgBgMgJQgRgLgHgVIgFgOQgDgFgHgIQgJgIgCgEQgHgJAAgUQAAgRAFgJIAKgNQAKgNAJgEQAKgFATABIAAgCQAPABAXAMQApAVAJAfQAEAOgBAUQAAARgDALQgDAOgLALQgKAMgOAFQgKAEgLAAIgIgBg");
	this.shape_179.setTransform(145.3,122.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#663300").s().p("AinEGQgbgGgQgWQgRgWAIgbQAFgPAPgQIAagaQAKgMAKgSIAPggQAfhGALgdIALggIAYhMQAZg/AogTQAKgEAPgEIAZgGIAigLQAXgIAMgDQArgKAbARQANAIAIANQAIANAAAPQABAPgGAOQgHAOgLAJQgMAKgbAJIhDAWQgVAHgIAIQgMALgIAeQgmCKhKB8QgOAYgMALQgPANgTAFQgLADgKAAQgJAAgJgCg");
	this.shape_180.setTransform(158.6,93.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#663300").s().p("ABDCHQgLgDgUgMQgegSgKgJQgQgNgegeQgdgegRgMIgUgNQgLgJgHgIQgTgVABgcQABgcAUgVQASgRASADQACABADgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAWACAfAWQAOAJAIAIIANARQADAGAIAGIAOALQALAIAaAcQANAOAJAGQAKAFAUAJQAXANALAaQAHAUgDAOQgCAJgFAJQgMATgWAJQgNAFgNAAQgJAAgJgDg");
	this.shape_181.setTransform(111.7,122.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#663300").s().p("AgPCeQgfgNgHgaQgDgJAAgTIABhJQABghgGgTIgIgWQgGgOgBgJQgEgQAFgRQAEgRALgMQATgVAVADQAHACgBgFQAbAEAPAPQAHAHAJASQAJAUACAGIAEAWIAHAVQACAHAAAXIgBBCQAAAPACAFIAFARQAGARgGASQgGASgPAMQgPALgTACIgIABQgNAAgOgFg");
	this.shape_182.setTransform(88.2,116.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#663300").s().p("ABbCBIgvgLIg3gIQghgFgUgLQgVgNgWgfIglgyIgLgNIgLgOQgKgRgBgUQAAgUAKgRQAKgQATgIQATgJASAFQAXAFAYAbQAQASANAWIAKASQAHAKAHAFQAIAGAOACIAZADQAtADAoATQAVAKAKAMQAKALAEAPQADAPgEAOQgDAOgLAMQgKALgOAFQgKAEgOAAQgKAAgMgDg");
	this.shape_183.setTransform(76.2,131.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#663300").s().p("AiUCnQgQgBgOgJQgOgJgHgPQgSgiAZgwQAPgeAagWQAagXAggLIAXgHIAXgIQAUgJAigcIA0gpQAagWASgIQAUgJAUABQAWABAQALQAWAQAEAaQAEAagSAUQgIAJgPAJIgaAPQgRAMgcAeQgXAVgjARQgUAKgsASQgUAHgKAGQgQAJgIAMIgIAPIgJAPQgIAOgPAHQgNAHgOAAIgEAAg");
	this.shape_184.setTransform(99.2,178.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_185.setTransform(109.8,133.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_186.setTransform(95.8,128.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_187.setTransform(102.8,114.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_188.setTransform(81.8,104.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_189.setTransform(71.8,116.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_190.setTransform(60.8,126.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_191.setTransform(74.8,137.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_192.setTransform(92.8,138.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_193.setTransform(93.8,191.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_194.setTransform(77.8,172.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_195.setTransform(57.8,161.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_196.setTransform(73.8,159.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_197.setTransform(101.8,160.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_198.setTransform(114.8,174.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_199.setTransform(106.8,179.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_200.setTransform(117.8,90.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_201.setTransform(114.2,81.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#003300").s().p("AgdA9QgKgCgIgEQgIgEgHgHQgHgGgFgIQgGgKgBgPQgBgTAHgNQAEgIAJgIQAIgJAKgEQAJgEAQABIABgCQAegCAPADQAbAEAOARQAGAIAFANQACAIABAJQABAJgEAMQgDAIgGAIQgLAPgNAFQgIAEgLACIgVABQgXAAgMgCg");
	this.shape_202.setTransform(147.7,48.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_203.setTransform(140.8,64.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#003300").s().p("AgOA8QgXgGgPgUIgFgJQgDgIgBgLQgCgUAHgOIAMgOQANgMAIgDQAJgDAOABIAAgCQAQAAAPAJQALAHAHAIIAKAVIADARQAAAFgDAJQgFAQgHAIIgJAKQgRANgVAAg");
	this.shape_204.setTransform(154.8,43.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_205.setTransform(132.8,60.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_206.setTransform(121.8,57.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_207.setTransform(119.8,74.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_208.setTransform(107.8,81.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_209.setTransform(118.8,100.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_210.setTransform(144.8,108.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_211.setTransform(144.8,87.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_212.setTransform(184.7,72.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#003300").s().p("AAAA+IgPgCQgJgDgFgDQgGgDgHgGQgIgIgEgHQgGgLgBgRQgBgKADgJQADgLAMgNQALgMAKgEQAJgDAOABIAAgCQASABAOAIQAMAHAFAIIAKAVIADARQABAFgDAJQgGARgKAKQgRAUgZAAIgCAAg");
	this.shape_213.setTransform(162.7,67.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_214.setTransform(171.7,88.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#003300").s().p("AAAA+QgHAAgHgCQgXgGgPgUIgFgJQgDgIgBgLQgCgUAHgOIAMgOQANgMAIgDQAJgDAOABIAAgCQASABANAIQANAIAEAHQAEAFADAIIAEAIIADARQAAAFgDAJQgFAPgHAIQgRAYgcAAIgCAAg");
	this.shape_215.setTransform(155.8,96.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#003300").s().p("AAAA+IgPgCQgJgDgFgDQgGgDgHgGQgIgIgEgHQgGgLgBgRQgBgKADgJQADgLAMgNQALgMAKgEQAJgDAOABIAAgCQASABAOAIQAMAHAFAIIAKAVIADARQABAFgDAJQgGARgKAKQgRAUgZAAIgCAAg");
	this.shape_216.setTransform(162.7,140.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_217.setTransform(165.7,117.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_218.setTransform(181.7,95.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_219.setTransform(189.7,107.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_220.setTransform(209.7,97.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_221.setTransform(214.2,77.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_222.setTransform(226.7,97.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_223.setTransform(210.7,110.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_224.setTransform(193.7,121.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_225.setTransform(186.7,133.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_226.setTransform(208.7,123.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_227.setTransform(225.2,144.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_228.setTransform(236.7,145.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_229.setTransform(224.2,162.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_230.setTransform(204.7,143.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_231.setTransform(195.7,161.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#003300").s().p("AguA6QgPgGgKgMQgFgFgDgGQgLgTAEgUQAFgXAQgNQATgRAWAEIAAgCIAZgBIAZABQAeADAPARQAFAGAFAJIADAKQAGAQgEAPQgDAIgGAKQgKAOgJAGQgLAHgYACIgaABQgdAAgOgFg");
	this.shape_232.setTransform(176.2,189.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#003300").s().p("AgzA5QgWgIgLgVQgFgIgCgOQgDgbATgUQAUgUAbABIAAgCQAJABASAAIAaAAQAiACAQARQAGAGAEAJQAEAHADALQADAOgHAQQgDAHgHAKQgGAJgJAGQgNAIgXABIgbABQgmAAgNgGg");
	this.shape_233.setTransform(210.7,193.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_234.setTransform(243.2,190.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#003300").s().p("AguA6QgPgGgKgMQgFgFgDgGQgLgTAEgUQAFgXAQgNQATgRAWAEIAAgCIAZgBIAZABQAeADAPARQAFAGAFAJIADAKQAGAQgEAPQgDAIgGAKQgKAOgJAGQgLAHgYACIgaABQgdAAgOgFg");
	this.shape_235.setTransform(248.2,182.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#003300").s().p("AguA6QgPgGgKgMQgFgFgDgGQgLgTAEgUQAFgXAQgNQATgRAWAEIAAgCIAZgBIAZABQAeADAPARQAFAGAFAJIADAKQAGAQgEAPQgDAIgGAKQgKAOgJAGQgLAHgYACIgaABQgdAAgOgFg");
	this.shape_236.setTransform(221.2,176.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#003300").s().p("AB8BDIgagGIgWgBIi0gCQglAAgRgJQgPgHgJgPQgJgPAAgQQAAgRAJgPQAKgPAPgHQARgIAkAAIDIAAQAfAAAPAFQAQAGAPAPQANAOAEAQQAEANgDAQQgDAPgKAMQgKALgOAGQgLAEgLAAIgIAAg");
	this.shape_237.setTransform(181.6,174.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#003300").s().p("AicB2QgbgPgJgaQgEgMgBgZQAAgrAIgZQAQgvAsgZQAVgLAlgJQAZgGAUAAQAUgBAfAEQAmAGANAAIAzABQAfACARAOQALAKAHAOQAGAOgCAPQgBAPgJANQgJANgNAGQgQAJgaAAIgtgBIgdABQgRAAgLgCQgVgFgLAAQgMgBgXAGQgUAFgEALQgBAFACAHIAEAMQAFAOgCAOQgCAPgJAMQgIAMgNAHQgNAGgPAAQgQAAgSgJg");
	this.shape_238.setTransform(171.2,143.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#003300").s().p("Ag7BqQgNgBgKgFQgOgGgJgNQgJgNgCgPQAAgRgBgJIgEgQIgFgPQgCgQAFgPQAFgPALgLQAMgKAQgEQAPgDAPAEQAaAHAXAhQACgDABgNQABgYARgQQARgPAYAAIADgBQAQAAAPAJQAPAJAIAPQAHAOABAUQABAMgBAZQABAagDALQgFAYgUASQgZAVgnAGQgSADg0AAIgZgBg");
	this.shape_239.setTransform(169.3,166.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#003300").s().p("AA+BgQgJgDgdgPQgPgIgmgPIghgNIgYgIIgPgDQgJgCgGgDQgKgEgKgLQgQgSAAgbQABgbAQgTQATgVAWADIAEgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAiAIQAVAEAMAHQAJAEAOAKQALAHATAHQAcAMAaAHQAUAGAHADQAPAHAIAJQALALAEASQAGAdgNAXQgOAagcAEIgKABQgOAAgQgGg");
	this.shape_240.setTransform(122.7,141.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#003300").s().p("ABBBeQgKgEgRgMQgSgMgKgDIgQgFIgRgEIgagLIghgJQgrgLgPgeQgGgNAAgMQAAgbASgSQAUgSAZABQAAgCAFAAQA3AKAPAFQASAFAPAHQAnAQAiAWQAiAVAKAUQAHARgDATQgCASgNAOQgMANgSAFQgIABgHAAQgLAAgKgDg");
	this.shape_241.setTransform(117.2,130.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#003300").s().p("ADQCsQguAAgVgNQgPgJgVgcIgkgwQgTgZgOgEQgHgCgOAAIhwgBQhCgBgvgGQhHgIgigcQgXgTgHgdQgIgeAOgXQANgUAbgMQAYgKAXACQAaACAPARIAKANQAFAIAGAEQAHAGARACQAxAHA0gFQgEgWAGgUQAGgVAQgLQAOgKAUABQARAAARAKQAaAOAXAnQAJAOAGACQAGACAOgEQApgMAsABQA4ACAPAhIAFANQADAIAFAEQADADAGADIALAEQAaAKANAdQAJAVAAAiQgBA9ggAcQgTARgfAFQgQACgZAAIgQAAg");
	this.shape_242.setTransform(134.4,146.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#003300").s().p("AAtGQQgSgEgNgOQgMgNgCgSQgCgNgCgEQgFgIgOgFQgagIgNgGQgVgJgJgPQgHgKgCgQQgBgJAAgUIABhqQABg1gGgZIgKgdQgGgRgBgMQgCgPAFgVIAIgjQALgvAAhCIgChzQAAgmALgTQAHgOAOgIQAPgJAPAAQAQgBAPAIQANAIAIAOQAIAMADATQABAMAAAWIAACHQAAA5gFAcIgFAgQgEATABANQABAOAHAcQAHAigCA7QgCBIACAVQAiALASALQAbAPAMAWQAMAWgBAjQgCAlgPATQgKAPgSAGQgLAEgKAAQgHAAgHgCg");
	this.shape_243.setTransform(131.8,120.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#003300").s().p("AiDDRQgsgFgSgeIgHgPQgEgIgFgFQgFgEgJgDIgOgHQghgRgBg4IABgqQAAgYgEgRQgpAYgUAPQggAZgQAcIgVArQgOAXgRAJQgRAIgVgFQgUgGgMgQQgMgPgEgUQgDgTAEgUQAHgfAcgmQAagiAegWIAggWQATgNAKgKIAZgbQAPgPAOgEQAVgHAfAMIA1AUQAkAKAxgRQAcgJA4gYQAwgSBAgGQAtgEBIABQBXABA4AHQBOALA6AcQAnATALAYQALAagOAeQgMAagaAVQhDA1hbADQg6ADgogYQgLgHgSgOQgUgRgJgGQgogageAOQAPApAGATQAKAjABAcQADAugTAbQgNASgWAKQgWAKgYgCIgYgEQgOgCgKAAQgOABgaAIQglAKgZAAIgJAAg");
	this.shape_244.setTransform(148.7,165.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#003300").s().p("AgYA8QgKgDgGgDQgHgEgHgHQgGgGgFgHQgEgJgCgQQgBgNACgIQAEgQAPgNQAKgJAIgDQAJgDAPABIAAgCQAXgDAWAKQANAFAIAJQAEAFAEAJIAFAMQADAMgBAGIgEAPQgEALgDAFIgKAKQgJAJgGACQgGAEgOACIgQABQgNAAgLgDg");
	this.shape_245.setTransform(145.8,149.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#003300").s().p("AgYA8QgKgDgGgDQgHgEgHgHQgGgGgFgHQgEgJgCgQQgBgNACgIQAEgQAPgNQAKgJAIgDQAJgDAPABIAAgCQAXgDAWAKQANAFAIAJQAEAFAEAJIAFAMQADAMgBAGIgEAPQgEALgDAFIgKAKQgJAJgGACQgGAEgOACIgQABQgNAAgLgDg");
	this.shape_246.setTransform(137.8,184.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#003300").s().p("AgYA8QgKgDgGgDQgHgEgHgHQgGgGgFgHQgEgJgCgQQgBgNACgIQAEgQAPgNQAKgJAIgDQAJgDAPABIAAgCQAXgDAWAKQANAFAIAJQAEAFAEAJIAFAMQADAMgBAGIgEAPQgEALgDAFIgKAKQgJAJgGACQgGAEgOACIgQABQgNAAgLgDg");
	this.shape_247.setTransform(99.8,184.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#003300").s().p("AgDA+QgPgCgNgHIgOgLIgIgKIgFgLQgKgfAPgVQAEgHAKgHQAIgJAIgCQAIgEAPABIAAgCQARAAAPAJQAMAHAFAIQADAEAEAJIADAHIADASQABAFgDAJQgGAQgJALQgIAKgNAFQgLAFgMAAIgEAAg");
	this.shape_248.setTransform(152.7,182.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_249.setTransform(90.8,146.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#006600").s().p("AgRA8QgLgDgFgCQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_250.setTransform(90.2,161.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_251.setTransform(100.8,162.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#006600").s().p("AAABDIgPgCIgOgGQgFgCgJgIQgIgIgDgGQgGgJgCgUQgBgcAKgPIAJgKIANgLQAPgIAQACIAAgCQAdACARATQAIAJAEANQAEALAAAJQABANgEAMIgDAIQgGAMgFAFQgEAFgKAGQgPAJgPAAIgBAAg");
	this.shape_252.setTransform(77.8,151.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_253.setTransform(106.8,152.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_254.setTransform(80.8,146.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_255.setTransform(102.8,158.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#006600").s().p("AAABDIgPgCIgOgGQgFgCgJgIQgIgIgDgGQgGgJgCgUQgBgcAKgPIAJgKIANgLQAPgIAQACIAAgCQAdACARATQAIAJAEANQAEALAAAJQABANgEAMIgDAIQgGAMgFAFQgEAFgKAGQgPAJgPAAIgBAAg");
	this.shape_256.setTransform(67.8,159.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_257.setTransform(69.8,141.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_258.setTransform(102.8,135.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#006600").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_259.setTransform(137.2,116.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_260.setTransform(117.8,109.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_261.setTransform(107.8,76.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_262.setTransform(132.8,79.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#006600").s().p("AgOA8IgOgFQgHgEgHgGQgMgLgFgOQgCgJAAgGQgBgTAHgOIALgOQANgMAJgDQAIgDAPABIgBgCQARABAPAIQAMAHAFAIQADAFAEAIIADAIIADARQAAAGgCAIQgGASgMAMQgOAOgSADIgHAAQgIAAgJgCg");
	this.shape_263.setTransform(153.7,81.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_264.setTransform(139.8,110.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#006600").s().p("AgYA8QgKgDgGgDQgHgEgHgHQgGgGgFgHQgEgJgCgQQgBgNACgIQAEgQAPgNQAKgJAIgDQAJgDAPABIAAgCQAXgDAWAKQANAFAIAJQAEAFAEAJIAFAMQADAMgBAGIgEAPQgEALgDAFIgKAKQgJAJgGACQgGAEgOACIgQABQgNAAgLgDg");
	this.shape_265.setTransform(224.7,135.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_266.setTransform(216.7,162.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_267.setTransform(237.7,179.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#006600").s().p("AgyAlQgJgKgDgGQgGgNACgQQABgPAFgKQAEgHAKgKQAGgFAIgEQALgGARABIAAgCQAWABATAQQASAOAJAYQADAJAAAFQABAHgEALIgDAJIgHANQgGAIgMAHQgRAJgRAAQgagBgagdg");
	this.shape_268.setTransform(184.2,175.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_269.setTransform(177.7,159.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_270.setTransform(199.7,173.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_271.setTransform(207.7,161.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#006600").s().p("AgRBGQgIgEgJgIIgPgPQgPgRgCgFQgDgHgBgOQgDgZAHgPQADgHAJgJQAKgKAIgEQALgFAQACIABgDQAPACALAGQAPAGAHAMIAIAPIAMAPQAFAGADALIADAIQACAHgBAGQAAAHgDAKQgKAcgaAKQgMAEgLAAQgOAAgNgHg");
	this.shape_272.setTransform(191.7,127.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_273.setTransform(219.7,121.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#006600").s().p("AAHBCIgUgGQgYgEgLgGQgJgFgGgGQgHgGgEgIQgFgKgCgQIABgSQADgOANgNQAKgKAJgEQAMgFAOACIAAgDQAhgBAYAMQAfAPAKAbQADAJAAAGQABAJgCAIQgBAGgEAHQgKAUgTAJQgNAGgNAAQgHAAgHgBg");
	this.shape_274.setTransform(225.7,114.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_275.setTransform(221.7,104.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_276.setTransform(223.7,83.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_277.setTransform(198.7,110.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_278.setTransform(187.7,90.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_279.setTransform(208.7,91.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_280.setTransform(180.7,114.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_281.setTransform(176.7,102.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_282.setTransform(165.7,139.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#006600").s().p("AAABDIgPgCIgOgGQgFgCgJgIQgIgIgDgGQgGgJgCgUQgBgcAKgPIAJgKIANgLQAPgIAQACIAAgCQAdACARATQAIAJAEANQAEALAAAJQABANgEAMIgDAIQgGAMgFAFQgEAFgKAGQgPAJgPAAIgBAAg");
	this.shape_283.setTransform(173.7,120.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_284.setTransform(187.7,123.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_285.setTransform(213.7,129.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_286.setTransform(234.7,148.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_287.setTransform(221.7,154.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_288.setTransform(211.7,146.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_289.setTransform(192.7,146.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_290.setTransform(181.7,137.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_291.setTransform(165.7,134.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_292.setTransform(148.8,133.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#006600").s().p("AgkA7IgOgLIgIgKQgGgKgCgSQgCgLADgJQADgOARgRQAOgNAJgFQAOgHANADIAAgDQAOABAOAHQAKAFAGAGQAGAGAFALQAEAHABAFQADAMgBAGQAAAGgEAJQgNAggbANQgPAHgOAAQgRAAgNgIg");
	this.shape_293.setTransform(68.3,121.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_294.setTransform(69.8,143.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_295.setTransform(97.8,144.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#006600").s().p("AgFA/QgQgBgIgCQgXgGgOgTQgDgFgDgGQgDgJgBgLQgBgTAHgMQADgHAJgJQALgKAHgDQAJgEARABIABgCQAVgCASADQAWAFANAOQAGAHADAGQAFAJABALQACAGgBAHQgCARgKAOQgKAOgPAHQgOAGgYAAIgHAAg");
	this.shape_296.setTransform(118.2,170.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#006600").s().p("AgkA7IgOgLIgIgKQgGgKgCgSQgCgLADgJQADgOARgRQAOgNAJgFQAOgHANADIAAgDQAOABAOAHQAKAFAGAGQAGAGAFALQAEAHABAFQADAMgBAGQAAAGgEAJQgNAggbANQgPAHgOAAQgRAAgNgIg");
	this.shape_297.setTransform(92.3,172.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#006600").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_298.setTransform(70.2,171.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_299.setTransform(234.7,191.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_300.setTransform(221.7,192.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_301.setTransform(234.7,177.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_302.setTransform(225.7,200.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#006600").s().p("AgOBCQgbgFgPgVQgFgGgBgEQgDgIgBgNQgBgNACgGQADgPARgRQAOgNAJgEQAPgIAMADIAAgCQARAAAQAKQAIAFAGAHQAEAFAEAIIAFAMQADAMgBALQAAAJgEAMQgFAOgJAJQgGAHgJAEQgQAIgSAAIgOgBg");
	this.shape_303.setTransform(239.2,184.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_304.setTransform(216.7,172.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_305.setTransform(202.7,173.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_306.setTransform(194.7,186.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#006600").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_307.setTransform(179.2,193.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#006600").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_308.setTransform(166.2,185.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_309.setTransform(164.7,164.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_310.setTransform(179.7,166.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#006600").s().p("AgcBBQgHgDgHgHQgNgLgEgQQgDgIAAgWQAAgTAFgMQAEgJAJgKQAIgJAIgEQALgGARACIAAgCQARAAAQAKQAKAGAEAGQAEAFAEAIQADAGABAFQADAJABARQAAAOgCAIQgCAHgEAHQgDAHgEAFQgPASgVAEIgMABQgPAAgNgHg");
	this.shape_311.setTransform(95.8,117.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#006600").s().p("AgyAlQgJgKgDgGQgGgNACgQQABgPAFgKQAEgHAKgKQAGgFAIgEQALgGARABIAAgCQAWABATAQQASAOAJAYQADAJAAAFQABAHgEALIgDAJIgHANQgGAIgMAHQgRAJgRAAQgagBgagdg");
	this.shape_312.setTransform(107.3,100.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#006600").s().p("AgjBCQgIgDgHgGQgOgMgFgRQgDgMABgQQACgSAEgIQAFgKAMgLQAOgOAKgEQALgFANACIAAgDQAYgBAUAMQAIAFAGAHQAEAEAEAJQAEAHABAJQAFAWgNATIgNAQIgKAKQgMAMgEADQgNAJgQAAIgCAAQgOAAgOgGg");
	this.shape_313.setTransform(113.7,108.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_314.setTransform(103.8,108.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#006600").s().p("AgDA+QgPgCgNgHIgOgLIgIgKIgFgLQgKgfAPgVQAEgHAKgHQAIgJAIgCQAIgEAPABIAAgCQARAAAPAJQAMAHAFAIQADAEAEAJIADAHIADASQABAFgDAJQgGAQgJALQgIAKgNAFQgLAFgMAAIgEAAg");
	this.shape_315.setTransform(152.7,77.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_316.setTransform(176.7,70.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_317.setTransform(174.7,84.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#006600").s().p("AAAA+IgPgCQgJgDgFgDQgGgDgHgGQgIgIgEgHQgGgLgBgRQgBgKADgJQADgLAMgNQALgMAKgEQAJgDAOABIAAgCQASABAOAIQAMAHAFAIIAKAVIADARQABAFgDAJQgGARgKAKQgRAUgZAAIgCAAg");
	this.shape_318.setTransform(162.7,105.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#006600").s().p("AgUA7QgSgHgNgRIgFgJQgEgJgBgKQgCgVAIgNQADgGAIgIQAMgMAKgDQAIgDAPABIAAgDQAhAEAPAUQAFAIAFAMIACAJIABAKQAAAGgCAHQgCAHgEAIQgMAXgYAHQgJACgIAAQgKAAgLgDg");
	this.shape_319.setTransform(151.7,119.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_320.setTransform(140.8,119.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_321.setTransform(143.8,99.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#006600").s().p("AgOA8QgYgGgOgUIgFgJQgDgJgBgKQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABANAIQAMAHAFAIIALAVIADARQAAAGgDAIIgHAQQgNAZgdAFIgJABQgHAAgIgCg");
	this.shape_322.setTransform(158.8,83.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_323.setTransform(143.8,58.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_324.setTransform(131.8,49.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_325.setTransform(128.8,70.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_326.setTransform(131.8,86.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#006600").s().p("AgYA8QgKgDgGgDQgHgEgHgHQgGgGgFgHQgEgJgCgQQgBgNACgIQAEgQAPgNQAKgJAIgDQAJgDAPABIAAgCQAXgDAWAKQANAFAIAJQAEAFAEAJIAFAMQADAMgBAGIgEAPQgEALgDAFIgKAKQgJAJgGACQgGAEgOACIgQABQgNAAgLgDg");
	this.shape_327.setTransform(110.8,91.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_328.setTransform(141.8,126.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_329.setTransform(119.8,136.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_330.setTransform(107.8,128.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_331.setTransform(91.8,107.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_332.setTransform(79.8,117.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_333.setTransform(64.8,158.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_334.setTransform(56.8,171.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#006600").s().p("AAABDIgPgCIgOgGQgFgCgJgIQgIgIgDgGQgGgJgCgUQgBgcAKgPIAJgKIANgLQAPgIAQACIAAgCQAdACARATQAIAJAEANQAEALAAAJQABANgEAMIgDAIQgGAMgFAFQgEAFgKAGQgPAJgPAAIgBAAg");
	this.shape_335.setTransform(84.8,186.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_336.setTransform(89.8,161.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#006600").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_337.setTransform(113.8,116.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#003300").s().p("AgOA8QgXgGgPgUIgFgJQgDgIgBgLQgCgUAHgOIAMgOQANgMAIgDQAJgDAOABIAAgCQAQAAAPAJQALAHAHAIIAKAVIADARQAAAFgDAJQgFAQgHAIIgJAKQgRANgVAAg");
	this.shape_338.setTransform(154.8,43.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#003300").s().p("AAAA+QgHAAgHgCQgXgGgPgUIgFgJQgDgIgBgLQgCgUAHgOIAMgOQANgMAIgDQAJgDAOABIAAgCQASABANAIQANAIAEAHQAEAFADAIIAEAIIADARQAAAFgDAJQgFAPgHAIQgRAYgcAAIgCAAg");
	this.shape_339.setTransform(155.8,96.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#003300").s().p("AAAA+IgPgCQgJgDgFgDQgGgDgHgGQgIgIgEgHQgGgLgBgRQgBgKADgJQADgLAMgNQALgMAKgEQAJgDAOABIAAgCQASABAOAIQAMAHAFAIIAKAVIADARQABAFgDAJQgGARgKAKQgRAUgZAAIgCAAg");
	this.shape_340.setTransform(162.7,140.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_341.setTransform(181.7,95.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_342.setTransform(189.7,107.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_343.setTransform(209.7,97.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_344.setTransform(226.7,97.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_345.setTransform(210.7,110.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_346.setTransform(193.7,121.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_347.setTransform(186.7,133.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_348.setTransform(208.7,123.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_349.setTransform(236.7,145.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_350.setTransform(224.2,162.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_351.setTransform(204.7,143.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_352.setTransform(195.7,161.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#003300").s().p("AgRA8IgQgFQgGgDgHgHQgJgIgFgJQgEgJgCgPQgBgRAGgMQAEgJAMgLQAKgJAGgCQAJgEAQABIABgDQAUgBATALQAMAGAGAJIAHAMIAEAIIACAJIABAKQgBAJgDAHQgFAPgLALQgOAPgUADIgLABQgIAAgMgDg");
	this.shape_353.setTransform(243.2,190.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_354.setTransform(239.7,161.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_355.setTransform(230.7,113.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_356.setTransform(193.7,187.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_357.setTransform(169.7,60.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_358.setTransform(142.8,60.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_359.setTransform(193.7,71.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_360.setTransform(123.8,177.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_361.setTransform(107.8,121.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_362.setTransform(102.8,76.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_363.setTransform(85.8,101.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_364.setTransform(84.8,162.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_365.setTransform(52.8,151.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_366.setTransform(68.8,134.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_367.setTransform(61.8,174.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_368.setTransform(98.8,178.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_369.setTransform(242.7,113.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_370.setTransform(221.7,161.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_371.setTransform(248.7,146.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_372.setTransform(225.7,191.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_373.setTransform(197.7,190.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF0000").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_374.setTransform(246.7,187.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#003300").s().p("Ag0CAIgagCQgOgBgKgFQgNgGgKgMQgJgNgCgOQgRAEgSgFQgSgFgMgNQgMgNgDgSQgDgSAHgPQALgRADgJQAEgQADgHQAFgQAOgLQAOgKAQgBQANgBAYADQAIABANgCIAVgDIARABIARgBQAJgCAKgFIARgJQAhgPAtABQAgACAQAMQAaAUgBAvQAPABAOAJQAOAIAIAOQAKASgBAdQgCAwgdARQgNAIgXACQgfACgHACIggALQgRAFglAAg");
	this.shape_375.setTransform(189.2,163.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#003300").s().p("AhWFTQgtgPgcgjQgUAOgfADQgTADglgCQgUgBgLgCQgRgEgLgIQgZgVACgxQABgyAagTQAVgQAgAGQASAEAhASQgCgaACgQQADgYAMgOQANgQAkgMIBrglQgDgXAKgXQAJgXATgOIATgNQALgIAFgIQAHgKAEgaQAGgUAVgUQAMgLAagVQAUgSAjgnQAkgnATgRQAXgVAYgIQAdgKAXAKQAXAKAKAbQAKAZgFAbQgFAWgOAZQgJAQgVAbQgZAigQASQgYAagYAQIgTALQgLAGgHAGQgTASADAUQACAKAMAMIAUAUQASAUgCAeQgCAegUASQAYAZAIAiQAIAkgQAcQgJAQgSAOQgNAJgWANQgiAUgYAIQgeAKg1ADIgQAAQguAAgdgJg");
	this.shape_376.setTransform(108.3,107.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#003300").s().p("AmgGDQgagIgKgTIgqAUQgZAJgUACQgZADgVgJQgYgJgMgTQgPgXAIgfQAHgdAWgUQAigeBIgJIA5gFQAhgEAXgHQgQgNgIgWQgHgVAEgXQAGgkAfgqQAsg6A6gpIASgNQAKgIAFgJQAFgJACgOIABgZQABhCAgg8QAfg9A1gmQAhgZAkgFQApgHAZAYIAMAMQAHAHAGACQAJACAOgEIAXgHQAogHAoBBQAtBJAdAgIAcAdQAQASAJAOQAHANAKAeQAKAdAJAOQAVAhAqAOQAnAMArgIIAhgGQAVgFANgCQAqgDAWAUQAVAUgGAhQgFAfgYATQgUARggAIQgYAFgkABQh7ADhCgyQgqgggthRQgyhcgegeIg3A0QgQAQgEAGQgLARAAAiQgBArgCAKQgFAXgUAcIggAvIgSAgQgLAWgHALQgbAlgjgBQgIARAHAhQAIAlgEAOQgDAQgOANQgMAMgSAHQgXAIgtAAIiQACQgeAAgTgFg");
	this.shape_377.setTransform(142.5,124.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#003300").s().p("AhDFEIhnAAQgfAAgSgEQgagGgOgRQgPgQACgYQABgZARgOQAQgOAegFQAbgEAzAAQA2ABAZgDIgBgPQg/AAg5geQgUgMgKgCQgIgCgRAAQgSABgIgCQgSgEgPgPQgMgOgHgUQgFgNgFgZQgGgbgDgLIgNgiQgHgVABgPQABgaAVgSQAVgTAaACQAZABASAWQATAVgDAaQALABAKgKQAHgIAEgNIAGgXQAEgOAHgHQALgMAcgEQAfgEALgHQALgGAQgUQAQgPAegNIAygWQAQgIAtgkQAlgdAbgIQAfgKAiAIQAgAHAbAVQAjAaAPAqQAPArgPAmQgLAcgaAUQgYATgfAKQgaAIgjADQgUACgqAAQAGAXgNAaQgJARgUAZQgPASgDAJQgEAOAEAXIAHAyQATgHAVAFQAUAGANAPQAMAQABAVQABAVgLARQgNATgfANQglAMgSAHQgcANgPAFQgYAIgqAAIgKAAgAg6gcIgEACIgCADQgDAEAAADIgCAEIgDAEIgMALIAgAAIACAAIADgCQAOgNAEgHQgGgJgJgIg");
	this.shape_378.setTransform(194.7,114.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#003300").s().p("AhZFMQglgGgNgZQgIgPAAghIAAhYQgBgnAJgVQAFgLAMgOIATgXQALgOALgbIAehBQgXgMgJgeQgHgUABgiQABgeAEgqIAFgrQAEgeAHgLQAIgOAPgIQAPgIARgBQATgCASAHQAUAIAKAPQANASAAAiIAAA4QAZAFANAFQAVAJAKAOQAKAQACAlQAAAfgBANQgBAYgIASQgHAQgUAdQgNAVgNAjIgVA6QgJAVAEALQACAFAKALQANAQACAVQACAWgKARQgLAVglAWQg4AfgsAAIgTgBg");
	this.shape_379.setTransform(157.3,100.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#003300").s().p("AjsEZQgTgBgPgNQgPgOgFgSQgFgSAFgTQAFgTANgOQAOgOAYgLIArgRQAngSAagZQAKgKASgWQARgWAKgKQAPgPAigZIAWgVQAOgOAJgHQAVgRAhgSIA5gcQATgKAHgJQAJgNAAgaQgCgkACgHQADgTAPgOQAOgOASgDQATgDASAJQASAJAJAQQAMAUgBAoQgBArgGAcQgJAmgVAYQgKAKgPAKIgcARIhCAiQgnATgKAIQgLAIgNANIgWAXIghAfQgUASgLANQgXAigQAOQgOANgbAMIgtAVQgdATgPAIQgXAMgTAAIgEAAg");
	this.shape_380.setTransform(187.7,108.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#003300").s().p("Ak4DHQgPgFgLgLQgLgKgEgQQgEgPADgPQAGgVAbgbQBHhHBEglIAvgbIAdgTQARgLANgFQAdgMA8AAQAlgBAUACQAgADAXAKIAPAGQAIADAHgBQAJgBANgMQAUgUAUgaIAXgeQAOgQAOgIQAUgKAXAFQAXAFAMARQAJANABASQACAQgGAQQgIAagbAeIg8A+IgYAZQgPANgOAGQgfAMgugNIgmgMQgWgHgQgCQgMgBghABQgcACgKAEQgGACggAVQgNAIgdANQgcANgNAIQgcASgoArQgRARgLAJQgQAMgRAEQgGABgHAAQgIAAgJgCg");
	this.shape_381.setTransform(196.1,147.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#003300").s().p("AhUFyQghgFgPgTQgFgFgNgaQgKgUgMgGQgJgGgcgBQgjAAgRgOQgSgQgDggIABgbIABgbIgCg0QgBggAHgUQAKgbAggdQA9g2BQgVQAigJAJgEQAXgJAJgRQAHgNAAgaQAAgdADgLQAEgRANgMQANgMARgCQARgDARAHQAQAHAKAOQAJAOAHgDQgBgwAOgqQAPgzAggWQASgNAXgCQAYgBAQAOQAQANAHAaQAEARAAAeQABAhgDASQgDAcgNATQgFAIgLAMIgQATQgOATgJAhQgHAcgHAsIgQBjIgHAnQgFAVgJAPQgOAaggAVQgUANgoATQAWAbAFAZQAIAhgUAXQgOARgdAFQgOACglAAQgrAAgPgDg");
	this.shape_382.setTransform(155.8,163.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#003300").s().p("AguB/QgUgMgGgUQgEgNAAgVQAAggADgUIAJgmQAKgtALgVQAJgTANgKQAQgMARACQAFACgBgEQAcAAASAVQASAWgDAbQgBAHgIAYQgIAUgBANIgDAdIgEAMIgDAMQgCAJABASQgCAVgPARQgQARgUADIgJABQgQAAgQgKg");
	this.shape_383.setTransform(152.2,143.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#003300").s().p("AjWE3QgXgRgFgZQgCgLABgRIAAgcQgCgTgKgVQgGgNgOgYQgNgVgGgNQgIgUABgRQABgWARgUQAQgSAXgKQAQgIAdgJIAugOQAWgJALgLQAIgIAMgXQA8huBdhSQAigdAYgIQAjgNAvALQA4ANAaAjQARAWAGAhQAFAXAAAmQAAAygKAbQgOAkglAgQhAA3hFABQANArABASQACAkgSAYQgNAQgaALIgwAQIg/AYQgmANgcgBQAEAagRAXQgRAXgaAEIgKABQgVAAgSgNg");
	this.shape_384.setTransform(144.9,145.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#003300").s().p("AAOCYQgTAAgSgOQgRgOgFgUQgCgKAAgVIABgxQABgPgCgKQgCgIgDgGQgFgRgHgPQgKgWgCgLQgFgcASgVQAJgKAMgFQAMgGANABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQAeAAAgAmQAMAOADAKQAEAJACAVIAHATQACAJAAARIgBBZQAAAUgCAKQgGAUgRAOQgRANgTAAIgCAAg");
	this.shape_385.setTransform(127.3,180.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#006600").s().p("AgqCxQgSgCgPgJQgPgKgGgPQgGgOAAgbIAAhrQAAgmADgUQAEggAPgVQAHgMAWgUQAOgPALgFQALgFAUgBQAdgBAOACQAYAEANAPQAMANAEAVQAHAlgRAaQgJAMgQANIgZAXQgPAMgDAKQgCAHABAPQAAAOABAHIAHATQAEAMgCAUQgBAWgDAKQgIAUgUAMQgQAJgSAAIgIgBg");
	this.shape_386.setTransform(232.8,177.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#006600").s().p("AHxN7QgdgIgRgaQgRgbALgaQgtAKgugJQgvgIgmgaQhEASgmAEQg8AGgtgQIgggOQgUgJgMgDQgVgGgiABIg3ACQhLgEg5gyIkuAFQgbAAgPgBQgXgDgQgIQgTgKgLgTQgLgUAHgTQAGgPAXgSQAagUAHgKQAHgKAFgTQAGgZADgGQALgZAxgrQAtgnAGgfQAFgVgIgeQgMgigEgSQgMgrAJgvQAIguAaglQAGgJA5g+QAngpAKgkQhJAIgngBQg/gBgugSQgpgQgqgiQgegZgpgrQgrgvgagkQgigwgRguQgUg2AEg1QAFg6AfgqQAmgzBmglQB9gtAigXQAYgQAlgmQApgpAUgPQAzgoBAgLQBDgLA4AaQAiAQA6AzQA6AyAiAQQAtgnA/gBQBAgCAuAlIAcAaQASASALAIQASANAdAMIAyAUQBtAtBGBdIAZAgQAPARAQAHIAdAIQASAFAKAHQAMAKAFAUQADALACAbQAJBhA1BRIAbAnQAPAXAHASQAKAZADAhQABATAAAnIgHFYQgBAxAGAYQADALAIAUQAIAVADAKQAaBWhABsQglA9g1AyQg0AxhAAgQgwAZglAAQgOAAgMgEgAo8o+Ih9A5QgUAJgHAJQgHAMABAYQACAsAMAcQAMAcAdAiQAaAhAZAbQAoAsAhAXQAUANAPADQAIACAXAAIBqgCQgQgvAAgzIgigBQgXAAgMgBQgTgDgOgJQgQgJgHgPQgGgOABgaIABg+QABgjgDgSIgLgmQgJggACggIgGAAQgJAAgNAFgAlFrqIgEACIgSASIAIgEIACgBIAIgIIAMgHg");
	this.shape_387.setTransform(172.1,121.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#006600").s().p("AjML4QgZgCgSgKQgVgLgKgWQgLgWAJgUQg4AhhYgJQhogSgzgHQgfgEgIgCQgVgEgPgJQgbgSgMgmQgJgbgDgtQgLiAAFhEQAIhtArhLQAhgyANgbQAGgNAIgWIAMgjQASgxAog6QBoiWBzgIQgBgxANgpQAQgvAhgaQAOgLAYgLIAogUQAcgPAigdIA5gxQBzhjCTgzQCTgzCYAGQBSADArAdQA8ApAQBeQAMBIgWBDQgXBHg2AoQgUAOgqAUQgtAUgTANIhAAzQgnAdggADQAPBzglBtQgLAdgCAMQgFAXAFASQACAIARAdQANAWgCAPQgBAPgNAQIgXAbQgLAOgIAZIgPApQgJAXgPAPQgRARgUAAQAPAXgOAiQgGAPgaAqQgOAVghBKQgbA8gbAdQgqAthIAVQg3APhSACIgSABQgQAAgLgCgAEepLIgLAFQgKAGgKADIgNAFQgIAGACAGQABAEAJAHQAGAFAEAMIAHATQAIAVABAHQACAHAAAOIgBBIIBzgCQABgygBgZIgCgSQgDgPgKgdQgEgMgCgDQgDgEgOgLIgUgUQgGgGgEgCIgIgBIgRgBIgFAAIgEAAgAHro/QAJAbAIAgIAEAWQACANAAAVIAAAjQALgCAOgMQASgQAUgeQAHgJACgIQACgHAAgQIAAgeQAAgGgBgFQgCgFgHgIQgIgKgEgOQgGgRgGgDQgEgDgJAAIhNgCQAPASAMAjg");
	this.shape_388.setTransform(104.7,122.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#003300").s().p("AgDA+QgegCgSgaIgGgJQgDgHgBgMQgCgUAHgNQAEgHAIgIQALgLAKgEQAJgDAOABIAAgCQASABAOAIQAMAIAFAHIAKAVIAEARQAAAFgDAJQgGAQgGAIQgJALgOAHQgMAFgNAAIgDAAg");
	this.shape_389.setTransform(195.7,161.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#663300").s().p("AAOEdQgYgEgNgTQgDgGgFgLIgHgRQgKgVgDgMQgDgIgCgbQgCgNgGgYIgIglQgDgTgBgyIACiaQAAgigDgRQgIgaAAgOQAAgXATgRQAQgPAUgCQAaAcAHAGQAGAEAlASQADARAAAfIAADRQAAAmAHARIAGAPIAFAPIABADQgCA9AQA0IAEAMIgBADQgIAWgUAMQgOAIgRAAIgMgBg");
	this.shape_390.setTransform(145.1,227.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#663300").s().p("AjkHiQgngEgUgUQgRgTADgbQADgcAVgOQAPgLAbgEIAugHQAbgIAegaQAiggASgPIAhgYQAVgOALgMQAXgWARgjQANgYAOgqQAkhiAahnQAQg/AEgqQADgxAEgYIAIgnIAKgmIAIgoQAEgPAEgMIAggVQAegWARgKQAVAFANAVQAPAYgBAdQgBAWgLAfIgQA0QgGAXgEAiIgGA5QgHBFgXBUQgOAygiBiQgPAvgLAaQgQAngUAcQgSAagdAcQgQAPgmAgIg0AtQgeAZgOAKQgZASgXAKQgmARgqAAIgVgBg");
	this.shape_391.setTransform(101.8,242.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#663300").s().p("AA3GwQgfgFgYglQgPgbgQg5QgThCgniSIgKgnIgMgwQgNg8ABg/QABgdAIhGQAHhAgBgkIgBgtQACgaAKgQQAMgTAWgHQAWgIATAJQAnATABBLQABAlgJBgIgDAbQgEAnACAlIACAdQAEAwAaBdIAjB9QAWBQAPAmIAKAaQAFAPAAALQABAcgWAUQgSARgVAAIgJgBg");
	this.shape_392.setTransform(151.5,252.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},80).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}},{t:this.shape_174,p:{rotation:0,x:178.6,y:179.4}},{t:this.shape_173,p:{rotation:0,x:188.1,y:156.6}},{t:this.shape_172,p:{rotation:0,x:195.7,y:132.8}},{t:this.shape_171,p:{rotation:0,x:83.2,y:166.8}},{t:this.shape_170,p:{rotation:0,x:92.7,y:137.1}},{t:this.shape_169,p:{rotation:0,x:130.2,y:124.8}},{t:this.shape_168,p:{rotation:0,x:157,y:122.8}},{t:this.shape_167,p:{rotation:0,x:180.1,y:116.4}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}},{t:this.shape_174,p:{rotation:0,x:178.6,y:179.4}},{t:this.shape_173,p:{rotation:0,x:188.1,y:156.6}},{t:this.shape_172,p:{rotation:0,x:195.7,y:132.8}},{t:this.shape_171,p:{rotation:0,x:83.2,y:166.8}},{t:this.shape_170,p:{rotation:0,x:92.7,y:137.1}},{t:this.shape_169,p:{rotation:0,x:130.2,y:124.8}},{t:this.shape_168,p:{rotation:0,x:157,y:122.8}},{t:this.shape_167,p:{rotation:0,x:180.1,y:116.4}},{t:this.shape_184,p:{rotation:0,x:99.2,y:178.3}},{t:this.shape_183,p:{rotation:0,x:76.2,y:131.8}},{t:this.shape_182,p:{rotation:0,x:88.2,y:116.8}},{t:this.shape_181,p:{rotation:0,x:111.7,y:122.3}},{t:this.shape_180,p:{rotation:0,x:158.6,y:93.8}},{t:this.shape_179,p:{rotation:0,x:145.3,y:122.3}},{t:this.shape_178,p:{rotation:0,x:200.8,y:99.2}},{t:this.shape_177,p:{rotation:0,x:133.1,y:82.3}},{t:this.shape_176,p:{rotation:0,x:226.7,y:150.3}},{t:this.shape_175}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}},{t:this.shape_174,p:{rotation:0,x:178.6,y:179.4}},{t:this.shape_173,p:{rotation:0,x:188.1,y:156.6}},{t:this.shape_172,p:{rotation:0,x:195.7,y:132.8}},{t:this.shape_171,p:{rotation:0,x:83.2,y:166.8}},{t:this.shape_170,p:{rotation:0,x:92.7,y:137.1}},{t:this.shape_169,p:{rotation:0,x:130.2,y:124.8}},{t:this.shape_168,p:{rotation:0,x:157,y:122.8}},{t:this.shape_167,p:{rotation:0,x:180.1,y:116.4}},{t:this.shape_184,p:{rotation:0,x:99.2,y:178.3}},{t:this.shape_183,p:{rotation:0,x:76.2,y:131.8}},{t:this.shape_182,p:{rotation:0,x:88.2,y:116.8}},{t:this.shape_181,p:{rotation:0,x:111.7,y:122.3}},{t:this.shape_180,p:{rotation:0,x:158.6,y:93.8}},{t:this.shape_179,p:{rotation:0,x:145.3,y:122.3}},{t:this.shape_178,p:{rotation:0,x:200.8,y:99.2}},{t:this.shape_177,p:{rotation:0,x:133.1,y:82.3}},{t:this.shape_176,p:{rotation:0,x:226.7,y:150.3}},{t:this.shape_175},{t:this.shape_237,p:{rotation:0,x:181.6,y:174.2}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234,p:{x:243.2,y:190.8,rotation:0}},{t:this.shape_233},{t:this.shape_232,p:{rotation:0,x:176.2,y:189.8}},{t:this.shape_231,p:{x:195.7,y:161.8,rotation:0}},{t:this.shape_230,p:{x:204.7,y:143.8,rotation:0}},{t:this.shape_229,p:{x:224.2,y:162.8,rotation:0}},{t:this.shape_228,p:{x:236.7,y:145.8,rotation:0}},{t:this.shape_227,p:{x:225.2,y:144.8,rotation:0}},{t:this.shape_226,p:{x:208.7,y:123.8,rotation:0}},{t:this.shape_225,p:{x:186.7,y:133.8,rotation:0}},{t:this.shape_224,p:{x:193.7,y:121.8,rotation:0}},{t:this.shape_223,p:{x:210.7,y:110.8,rotation:0}},{t:this.shape_222,p:{x:226.7,y:97.8,rotation:0}},{t:this.shape_221,p:{x:214.2,y:77.8,rotation:0}},{t:this.shape_220,p:{x:209.7,y:97.8,rotation:0}},{t:this.shape_219,p:{x:189.7,y:107.8,rotation:0}},{t:this.shape_218,p:{x:181.7,y:95.8,rotation:0}},{t:this.shape_217,p:{x:165.7,y:117.8,rotation:0}},{t:this.shape_216,p:{y:140.8,rotation:0,x:162.7}},{t:this.shape_215,p:{y:96.8,rotation:0,x:155.8}},{t:this.shape_214,p:{x:171.7,y:88.8,rotation:0}},{t:this.shape_213,p:{y:67.8,rotation:0,x:162.7}},{t:this.shape_212,p:{x:184.7,y:72.8,rotation:0}},{t:this.shape_211,p:{x:144.8,y:87.8,rotation:0}},{t:this.shape_210,p:{x:144.8,y:108.8,rotation:0}},{t:this.shape_209,p:{x:118.8,y:100.8,rotation:0}},{t:this.shape_208,p:{x:107.8,y:81.8,rotation:0}},{t:this.shape_207,p:{x:119.8,y:74.8,rotation:0}},{t:this.shape_206,p:{x:121.8,y:57.8,rotation:0}},{t:this.shape_205,p:{x:132.8,y:60.8,rotation:0}},{t:this.shape_204,p:{y:43.8,rotation:0,x:154.8}},{t:this.shape_203,p:{x:140.8,y:64.8,rotation:0}},{t:this.shape_202,p:{rotation:0,x:147.7,y:48.8}},{t:this.shape_201,p:{x:114.2,y:81.8,rotation:0}},{t:this.shape_200,p:{x:117.8,y:90.8,rotation:0}},{t:this.shape_199,p:{x:106.8,y:179.8,rotation:0}},{t:this.shape_198,p:{x:114.8,y:174.8,rotation:0}},{t:this.shape_197,p:{x:101.8,y:160.8,rotation:0}},{t:this.shape_196,p:{x:73.8,y:159.8,rotation:0}},{t:this.shape_195,p:{x:57.8,y:161.8,rotation:0}},{t:this.shape_194,p:{x:77.8,y:172.8,rotation:0}},{t:this.shape_193,p:{x:93.8,y:191.8,rotation:0}},{t:this.shape_192,p:{x:92.8,y:138.8,rotation:0}},{t:this.shape_191,p:{x:74.8,y:137.8,rotation:0}},{t:this.shape_190,p:{x:60.8,y:126.8,rotation:0}},{t:this.shape_189,p:{x:71.8,y:116.8,rotation:0}},{t:this.shape_188,p:{x:81.8,y:104.8,rotation:0}},{t:this.shape_187,p:{x:102.8,y:114.8,rotation:0}},{t:this.shape_186,p:{x:95.8,y:128.8,rotation:0}},{t:this.shape_185,p:{x:109.8,y:133.8,rotation:0}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}},{t:this.shape_174,p:{rotation:0,x:178.6,y:179.4}},{t:this.shape_173,p:{rotation:0,x:188.1,y:156.6}},{t:this.shape_172,p:{rotation:0,x:195.7,y:132.8}},{t:this.shape_171,p:{rotation:0,x:83.2,y:166.8}},{t:this.shape_170,p:{rotation:0,x:92.7,y:137.1}},{t:this.shape_169,p:{rotation:0,x:130.2,y:124.8}},{t:this.shape_168,p:{rotation:0,x:157,y:122.8}},{t:this.shape_167,p:{rotation:0,x:180.1,y:116.4}},{t:this.shape_184,p:{rotation:0,x:99.2,y:178.3}},{t:this.shape_183,p:{rotation:0,x:76.2,y:131.8}},{t:this.shape_182,p:{rotation:0,x:88.2,y:116.8}},{t:this.shape_181,p:{rotation:0,x:111.7,y:122.3}},{t:this.shape_180,p:{rotation:0,x:158.6,y:93.8}},{t:this.shape_179,p:{rotation:0,x:145.3,y:122.3}},{t:this.shape_178,p:{rotation:0,x:200.8,y:99.2}},{t:this.shape_177,p:{rotation:0,x:133.1,y:82.3}},{t:this.shape_176,p:{rotation:0,x:226.7,y:150.3}},{t:this.shape_175},{t:this.shape_237,p:{rotation:0,x:181.6,y:174.2}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_353},{t:this.shape_233},{t:this.shape_232,p:{rotation:0,x:176.2,y:189.8}},{t:this.shape_352,p:{x:195.7,y:161.8}},{t:this.shape_351,p:{x:204.7,y:143.8}},{t:this.shape_350,p:{rotation:0,x:224.2,y:162.8}},{t:this.shape_349,p:{x:236.7,y:145.8}},{t:this.shape_234,p:{x:225.2,y:144.8,rotation:0}},{t:this.shape_348,p:{x:208.7,y:123.8}},{t:this.shape_347,p:{x:186.7,y:133.8}},{t:this.shape_346,p:{x:193.7,y:121.8}},{t:this.shape_345,p:{x:210.7,y:110.8,rotation:0}},{t:this.shape_344,p:{x:226.7,rotation:0,y:97.8}},{t:this.shape_229,p:{x:214.2,y:77.8,rotation:0}},{t:this.shape_343,p:{x:209.7,y:97.8,rotation:0}},{t:this.shape_342,p:{x:189.7,y:107.8,rotation:0}},{t:this.shape_341,p:{x:181.7,y:95.8,rotation:0}},{t:this.shape_231,p:{x:165.7,y:117.8,rotation:0}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_230,p:{x:171.7,y:88.8,rotation:0}},{t:this.shape_216,p:{y:67.8,rotation:0,x:162.7}},{t:this.shape_228,p:{x:184.7,y:72.8,rotation:0}},{t:this.shape_226,p:{x:144.8,y:87.8,rotation:0}},{t:this.shape_225,p:{x:144.8,y:108.8,rotation:0}},{t:this.shape_224,p:{x:118.8,y:100.8,rotation:0}},{t:this.shape_223,p:{x:107.8,y:81.8,rotation:0}},{t:this.shape_222,p:{x:119.8,y:74.8,rotation:0}},{t:this.shape_220,p:{x:121.8,y:57.8,rotation:0}},{t:this.shape_219,p:{x:132.8,y:60.8,rotation:0}},{t:this.shape_338,p:{rotation:0,x:154.8,y:43.8}},{t:this.shape_218,p:{x:140.8,y:64.8,rotation:0}},{t:this.shape_202,p:{rotation:0,x:147.7,y:48.8}},{t:this.shape_227,p:{x:114.2,y:81.8,rotation:0}},{t:this.shape_217,p:{x:117.8,y:90.8,rotation:0}},{t:this.shape_214,p:{x:106.8,y:179.8,rotation:0}},{t:this.shape_212,p:{x:114.8,y:174.8,rotation:0}},{t:this.shape_211,p:{x:101.8,y:160.8,rotation:0}},{t:this.shape_210,p:{x:73.8,y:159.8,rotation:0}},{t:this.shape_209,p:{x:57.8,y:161.8,rotation:0}},{t:this.shape_208,p:{x:77.8,y:172.8,rotation:0}},{t:this.shape_207,p:{x:93.8,y:191.8,rotation:0}},{t:this.shape_206,p:{x:92.8,y:138.8,rotation:0}},{t:this.shape_205,p:{x:74.8,y:137.8,rotation:0}},{t:this.shape_203,p:{x:60.8,y:126.8,rotation:0}},{t:this.shape_200,p:{x:71.8,y:116.8,rotation:0}},{t:this.shape_199,p:{x:81.8,y:104.8,rotation:0}},{t:this.shape_198,p:{x:102.8,y:114.8,rotation:0}},{t:this.shape_197,p:{x:95.8,y:128.8,rotation:0}},{t:this.shape_196,p:{x:109.8,y:133.8,rotation:0}},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330,p:{rotation:0,x:107.8,y:128.8}},{t:this.shape_329,p:{rotation:0,x:119.8,y:136.8}},{t:this.shape_328,p:{rotation:0,x:141.8,y:126.8}},{t:this.shape_327,p:{rotation:0,x:110.8,y:91.8}},{t:this.shape_326,p:{rotation:0,x:131.8,y:86.8}},{t:this.shape_325,p:{rotation:0,x:128.8,y:70.8}},{t:this.shape_324,p:{rotation:0,x:131.8,y:49.8}},{t:this.shape_323,p:{rotation:0,x:143.8,y:58.8}},{t:this.shape_322,p:{rotation:0,x:158.8,y:83.8}},{t:this.shape_321,p:{rotation:0,x:143.8,y:99.8}},{t:this.shape_320,p:{rotation:0,x:140.8,y:119.8}},{t:this.shape_319,p:{rotation:0,x:151.7,y:119.7}},{t:this.shape_318,p:{rotation:0,x:162.7,y:105.8}},{t:this.shape_317,p:{rotation:0,x:174.7,y:84.8}},{t:this.shape_316,p:{rotation:0,x:176.7,y:70.8}},{t:this.shape_315,p:{rotation:0,x:152.7,y:77.8}},{t:this.shape_314,p:{rotation:0,x:103.8,y:108.8}},{t:this.shape_313,p:{rotation:0,x:113.7,y:108.7}},{t:this.shape_312,p:{rotation:0,x:107.3,y:100.3}},{t:this.shape_311,p:{rotation:0,x:95.8,y:117.8}},{t:this.shape_310,p:{rotation:0,x:179.7,y:166.8}},{t:this.shape_309,p:{rotation:0,x:164.7,y:164.8}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{rotation:0,x:194.7,y:186.8}},{t:this.shape_305,p:{rotation:0,x:202.7,y:173.8}},{t:this.shape_304,p:{rotation:0,x:216.7,y:172.8}},{t:this.shape_303},{t:this.shape_302,p:{rotation:0,x:225.7,y:200.8}},{t:this.shape_301,p:{rotation:0,x:234.7,y:177.8}},{t:this.shape_300,p:{rotation:0,x:221.7,y:192.8}},{t:this.shape_299,p:{rotation:0,x:234.7,y:191.8}},{t:this.shape_298,p:{rotation:0,x:70.2,y:171.8}},{t:this.shape_297,p:{rotation:0,x:92.3,y:172.2}},{t:this.shape_296,p:{rotation:0,x:118.2,y:170.8}},{t:this.shape_295,p:{rotation:0,x:97.8,y:144.8}},{t:this.shape_294,p:{rotation:0,x:69.8,y:143.8}},{t:this.shape_293,p:{rotation:0,x:68.3,y:121.2}},{t:this.shape_292,p:{rotation:0,x:148.8,y:133.8}},{t:this.shape_291,p:{rotation:0,x:165.7,y:134.8}},{t:this.shape_290,p:{rotation:0,x:181.7,y:137.8}},{t:this.shape_289,p:{rotation:0,x:192.7,y:146.8}},{t:this.shape_288,p:{rotation:0,x:211.7,y:146.8}},{t:this.shape_287,p:{rotation:0,x:221.7,y:154.8}},{t:this.shape_286,p:{rotation:0,x:234.7,y:148.8}},{t:this.shape_285,p:{rotation:0,x:213.7,y:129.8}},{t:this.shape_284,p:{rotation:0,x:187.7,y:123.8}},{t:this.shape_283,p:{rotation:0,x:173.7,y:120.3}},{t:this.shape_282,p:{rotation:0,x:165.7,y:139.8}},{t:this.shape_281,p:{rotation:0,x:176.7,y:102.8}},{t:this.shape_280,p:{rotation:0,x:180.7,y:114.8}},{t:this.shape_279,p:{rotation:0,x:208.7,y:91.8}},{t:this.shape_278,p:{rotation:0,x:187.7,y:90.8}},{t:this.shape_277,p:{rotation:0,x:198.7,y:110.8}},{t:this.shape_276,p:{rotation:0,x:223.7,y:83.8}},{t:this.shape_275,p:{rotation:0,x:221.7,y:104.8}},{t:this.shape_274,p:{rotation:0,x:225.7,y:114.2}},{t:this.shape_273,p:{rotation:0,x:219.7,y:121.8}},{t:this.shape_272,p:{rotation:0,x:191.7,y:127.2}},{t:this.shape_271,p:{rotation:0,x:207.7,y:161.8}},{t:this.shape_270,p:{rotation:0,x:199.7,y:173.8}},{t:this.shape_269,p:{rotation:0,x:177.7,y:159.8}},{t:this.shape_268,p:{rotation:0,x:184.2,y:175.3}},{t:this.shape_267,p:{rotation:0,x:237.7,y:179.8}},{t:this.shape_266,p:{rotation:0,x:216.7,y:162.8}},{t:this.shape_265,p:{rotation:0,x:224.7,y:135.8}},{t:this.shape_264,p:{rotation:0,x:139.8,y:110.8}},{t:this.shape_263,p:{rotation:0,x:153.7,y:81.8}},{t:this.shape_262,p:{rotation:0,x:132.8,y:79.8}},{t:this.shape_261,p:{rotation:0,x:107.8,y:76.8}},{t:this.shape_260,p:{rotation:0,x:117.8,y:109.8}},{t:this.shape_259,p:{rotation:0,x:137.2,y:116.8}},{t:this.shape_258,p:{rotation:0,x:102.8,y:135.8}},{t:this.shape_257,p:{rotation:0,x:69.8,y:141.8}},{t:this.shape_256,p:{rotation:0,x:67.8,y:159.3}},{t:this.shape_255,p:{rotation:0,x:102.8,y:158.8}},{t:this.shape_254,p:{rotation:0,x:80.8,y:146.8}},{t:this.shape_253,p:{rotation:0,x:106.8,y:152.8}},{t:this.shape_252,p:{rotation:0,x:77.8,y:151.3}},{t:this.shape_251,p:{rotation:0,x:100.8,y:162.8}},{t:this.shape_250,p:{rotation:0,x:90.2,y:161.8}},{t:this.shape_249,p:{rotation:0,x:90.8,y:146.8}},{t:this.shape_195,p:{x:188.7,y:170.8,rotation:0}},{t:this.shape_194,p:{x:179.7,y:177.8,rotation:0}},{t:this.shape_248},{t:this.shape_193,p:{x:196.7,y:186.8,rotation:0}},{t:this.shape_192,p:{x:214.7,y:189.8,rotation:0}},{t:this.shape_215,p:{y:192.8,rotation:0,x:155.8}},{t:this.shape_191,p:{x:111.8,y:174.8,rotation:0}},{t:this.shape_247},{t:this.shape_190,p:{x:137.8,y:179.8,rotation:0}},{t:this.shape_213,p:{y:190.8,rotation:0,x:162.7}},{t:this.shape_246},{t:this.shape_189,p:{x:125.8,y:180.8,rotation:0}},{t:this.shape_188,p:{x:121.8,y:152.8,rotation:0}},{t:this.shape_245,p:{rotation:0,x:145.8,y:149.8}},{t:this.shape_187,p:{x:149.8,y:163.8,rotation:0}},{t:this.shape_204,p:{y:174.8,rotation:0,x:154.8}},{t:this.shape_186,p:{x:129.8,y:165.8,rotation:0}},{t:this.shape_221,p:{x:137.2,y:159.8,rotation:0}},{t:this.shape_185,p:{x:143.8,y:172.8,rotation:0}},{t:this.shape_244,p:{rotation:0,x:148.7,y:165.3}},{t:this.shape_243,p:{rotation:0,x:131.8,y:120.8}},{t:this.shape_242,p:{rotation:0,x:134.4,y:146.9}},{t:this.shape_241,p:{rotation:0,x:117.2,y:130.2}},{t:this.shape_201,p:{x:188.2,y:158.8,rotation:0}},{t:this.shape_240,p:{rotation:0,x:122.7,y:141.7}},{t:this.shape_239,p:{rotation:0,x:169.3,y:166.3}},{t:this.shape_238,p:{rotation:0,x:171.2,y:143.2}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}},{t:this.shape_174,p:{rotation:0,x:178.6,y:179.4}},{t:this.shape_173,p:{rotation:0,x:188.1,y:156.6}},{t:this.shape_172,p:{rotation:0,x:195.7,y:132.8}},{t:this.shape_171,p:{rotation:0,x:83.2,y:166.8}},{t:this.shape_170,p:{rotation:0,x:92.7,y:137.1}},{t:this.shape_169,p:{rotation:0,x:130.2,y:124.8}},{t:this.shape_168,p:{rotation:0,x:157,y:122.8}},{t:this.shape_167,p:{rotation:0,x:180.1,y:116.4}},{t:this.shape_184,p:{rotation:0,x:99.2,y:178.3}},{t:this.shape_183,p:{rotation:0,x:76.2,y:131.8}},{t:this.shape_182,p:{rotation:0,x:88.2,y:116.8}},{t:this.shape_181,p:{rotation:0,x:111.7,y:122.3}},{t:this.shape_180,p:{rotation:0,x:158.6,y:93.8}},{t:this.shape_179,p:{rotation:0,x:145.3,y:122.3}},{t:this.shape_178,p:{rotation:0,x:200.8,y:99.2}},{t:this.shape_177,p:{rotation:0,x:133.1,y:82.3}},{t:this.shape_176,p:{rotation:0,x:226.7,y:150.3}},{t:this.shape_175},{t:this.shape_237,p:{rotation:0,x:181.6,y:174.2}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_353},{t:this.shape_233},{t:this.shape_232,p:{rotation:0,x:176.2,y:189.8}},{t:this.shape_389},{t:this.shape_352,p:{x:204.7,y:143.8}},{t:this.shape_350,p:{rotation:0,x:224.2,y:162.8}},{t:this.shape_351,p:{x:236.7,y:145.8}},{t:this.shape_234,p:{x:225.2,y:144.8,rotation:0}},{t:this.shape_349,p:{x:208.7,y:123.8}},{t:this.shape_348,p:{x:186.7,y:133.8}},{t:this.shape_347,p:{x:193.7,y:121.8}},{t:this.shape_346,p:{x:210.7,y:110.8}},{t:this.shape_345,p:{x:226.7,y:97.8,rotation:0}},{t:this.shape_229,p:{x:214.2,y:77.8,rotation:0}},{t:this.shape_344,p:{x:209.7,rotation:0,y:97.8}},{t:this.shape_343,p:{x:189.7,y:107.8,rotation:0}},{t:this.shape_342,p:{x:181.7,y:95.8,rotation:0}},{t:this.shape_341,p:{x:165.7,y:117.8,rotation:0}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_231,p:{x:171.7,y:88.8,rotation:0}},{t:this.shape_216,p:{y:67.8,rotation:0,x:162.7}},{t:this.shape_230,p:{x:184.7,y:72.8,rotation:0}},{t:this.shape_228,p:{x:144.8,y:87.8,rotation:0}},{t:this.shape_226,p:{x:144.8,y:108.8,rotation:0}},{t:this.shape_225,p:{x:118.8,y:100.8,rotation:0}},{t:this.shape_224,p:{x:107.8,y:81.8,rotation:0}},{t:this.shape_223,p:{x:119.8,y:74.8,rotation:0}},{t:this.shape_222,p:{x:121.8,y:57.8,rotation:0}},{t:this.shape_220,p:{x:132.8,y:60.8,rotation:0}},{t:this.shape_338,p:{rotation:0,x:154.8,y:43.8}},{t:this.shape_219,p:{x:140.8,y:64.8,rotation:0}},{t:this.shape_202,p:{rotation:0,x:147.7,y:48.8}},{t:this.shape_227,p:{x:114.2,y:81.8,rotation:0}},{t:this.shape_218,p:{x:117.8,y:90.8,rotation:0}},{t:this.shape_217,p:{x:106.8,y:179.8,rotation:0}},{t:this.shape_214,p:{x:114.8,y:174.8,rotation:0}},{t:this.shape_212,p:{x:101.8,y:160.8,rotation:0}},{t:this.shape_211,p:{x:73.8,y:159.8,rotation:0}},{t:this.shape_210,p:{x:57.8,y:161.8,rotation:0}},{t:this.shape_209,p:{x:77.8,y:172.8,rotation:0}},{t:this.shape_208,p:{x:93.8,y:191.8,rotation:0}},{t:this.shape_207,p:{x:92.8,y:138.8,rotation:0}},{t:this.shape_206,p:{x:74.8,y:137.8,rotation:0}},{t:this.shape_205,p:{x:60.8,y:126.8,rotation:0}},{t:this.shape_203,p:{x:71.8,y:116.8,rotation:0}},{t:this.shape_200,p:{x:81.8,y:104.8,rotation:0}},{t:this.shape_199,p:{x:102.8,y:114.8,rotation:0}},{t:this.shape_198,p:{x:95.8,y:128.8,rotation:0}},{t:this.shape_197,p:{x:109.8,y:133.8,rotation:0}},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330,p:{rotation:0,x:107.8,y:128.8}},{t:this.shape_329,p:{rotation:0,x:119.8,y:136.8}},{t:this.shape_328,p:{rotation:0,x:141.8,y:126.8}},{t:this.shape_327,p:{rotation:0,x:110.8,y:91.8}},{t:this.shape_326,p:{rotation:0,x:131.8,y:86.8}},{t:this.shape_325,p:{rotation:0,x:128.8,y:70.8}},{t:this.shape_324,p:{rotation:0,x:131.8,y:49.8}},{t:this.shape_323,p:{rotation:0,x:143.8,y:58.8}},{t:this.shape_322,p:{rotation:0,x:158.8,y:83.8}},{t:this.shape_321,p:{rotation:0,x:143.8,y:99.8}},{t:this.shape_320,p:{rotation:0,x:140.8,y:119.8}},{t:this.shape_319,p:{rotation:0,x:151.7,y:119.7}},{t:this.shape_318,p:{rotation:0,x:162.7,y:105.8}},{t:this.shape_317,p:{rotation:0,x:174.7,y:84.8}},{t:this.shape_316,p:{rotation:0,x:176.7,y:70.8}},{t:this.shape_315,p:{rotation:0,x:152.7,y:77.8}},{t:this.shape_314,p:{rotation:0,x:103.8,y:108.8}},{t:this.shape_313,p:{rotation:0,x:113.7,y:108.7}},{t:this.shape_312,p:{rotation:0,x:107.3,y:100.3}},{t:this.shape_311,p:{rotation:0,x:95.8,y:117.8}},{t:this.shape_310,p:{rotation:0,x:179.7,y:166.8}},{t:this.shape_309,p:{rotation:0,x:164.7,y:164.8}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{rotation:0,x:194.7,y:186.8}},{t:this.shape_305,p:{rotation:0,x:202.7,y:173.8}},{t:this.shape_304,p:{rotation:0,x:216.7,y:172.8}},{t:this.shape_303},{t:this.shape_302,p:{rotation:0,x:225.7,y:200.8}},{t:this.shape_301,p:{rotation:0,x:234.7,y:177.8}},{t:this.shape_300,p:{rotation:0,x:221.7,y:192.8}},{t:this.shape_299,p:{rotation:0,x:234.7,y:191.8}},{t:this.shape_298,p:{rotation:0,x:70.2,y:171.8}},{t:this.shape_297,p:{rotation:0,x:92.3,y:172.2}},{t:this.shape_296,p:{rotation:0,x:118.2,y:170.8}},{t:this.shape_295,p:{rotation:0,x:97.8,y:144.8}},{t:this.shape_294,p:{rotation:0,x:69.8,y:143.8}},{t:this.shape_293,p:{rotation:0,x:68.3,y:121.2}},{t:this.shape_292,p:{rotation:0,x:148.8,y:133.8}},{t:this.shape_291,p:{rotation:0,x:165.7,y:134.8}},{t:this.shape_290,p:{rotation:0,x:181.7,y:137.8}},{t:this.shape_289,p:{rotation:0,x:192.7,y:146.8}},{t:this.shape_288,p:{rotation:0,x:211.7,y:146.8}},{t:this.shape_287,p:{rotation:0,x:221.7,y:154.8}},{t:this.shape_286,p:{rotation:0,x:234.7,y:148.8}},{t:this.shape_285,p:{rotation:0,x:213.7,y:129.8}},{t:this.shape_284,p:{rotation:0,x:187.7,y:123.8}},{t:this.shape_283,p:{rotation:0,x:173.7,y:120.3}},{t:this.shape_282,p:{rotation:0,x:165.7,y:139.8}},{t:this.shape_281,p:{rotation:0,x:176.7,y:102.8}},{t:this.shape_280,p:{rotation:0,x:180.7,y:114.8}},{t:this.shape_279,p:{rotation:0,x:208.7,y:91.8}},{t:this.shape_278,p:{rotation:0,x:187.7,y:90.8}},{t:this.shape_277,p:{rotation:0,x:198.7,y:110.8}},{t:this.shape_276,p:{rotation:0,x:223.7,y:83.8}},{t:this.shape_275,p:{rotation:0,x:221.7,y:104.8}},{t:this.shape_274,p:{rotation:0,x:225.7,y:114.2}},{t:this.shape_273,p:{rotation:0,x:219.7,y:121.8}},{t:this.shape_272,p:{rotation:0,x:191.7,y:127.2}},{t:this.shape_271,p:{rotation:0,x:207.7,y:161.8}},{t:this.shape_270,p:{rotation:0,x:199.7,y:173.8}},{t:this.shape_269,p:{rotation:0,x:177.7,y:159.8}},{t:this.shape_268,p:{rotation:0,x:184.2,y:175.3}},{t:this.shape_267,p:{rotation:0,x:237.7,y:179.8}},{t:this.shape_266,p:{rotation:0,x:216.7,y:162.8}},{t:this.shape_265,p:{rotation:0,x:224.7,y:135.8}},{t:this.shape_264,p:{rotation:0,x:139.8,y:110.8}},{t:this.shape_263,p:{rotation:0,x:153.7,y:81.8}},{t:this.shape_262,p:{rotation:0,x:132.8,y:79.8}},{t:this.shape_261,p:{rotation:0,x:107.8,y:76.8}},{t:this.shape_260,p:{rotation:0,x:117.8,y:109.8}},{t:this.shape_259,p:{rotation:0,x:137.2,y:116.8}},{t:this.shape_258,p:{rotation:0,x:102.8,y:135.8}},{t:this.shape_257,p:{rotation:0,x:69.8,y:141.8}},{t:this.shape_256,p:{rotation:0,x:67.8,y:159.3}},{t:this.shape_255,p:{rotation:0,x:102.8,y:158.8}},{t:this.shape_254,p:{rotation:0,x:80.8,y:146.8}},{t:this.shape_253,p:{rotation:0,x:106.8,y:152.8}},{t:this.shape_252,p:{rotation:0,x:77.8,y:151.3}},{t:this.shape_251,p:{rotation:0,x:100.8,y:162.8}},{t:this.shape_250,p:{rotation:0,x:90.2,y:161.8}},{t:this.shape_249,p:{rotation:0,x:90.8,y:146.8}},{t:this.shape_196,p:{x:188.7,y:170.8,rotation:0}},{t:this.shape_195,p:{x:179.7,y:177.8,rotation:0}},{t:this.shape_248},{t:this.shape_194,p:{x:196.7,y:186.8,rotation:0}},{t:this.shape_193,p:{x:214.7,y:189.8,rotation:0}},{t:this.shape_215,p:{y:192.8,rotation:0,x:155.8}},{t:this.shape_192,p:{x:111.8,y:174.8,rotation:0}},{t:this.shape_247},{t:this.shape_191,p:{x:137.8,y:179.8,rotation:0}},{t:this.shape_213,p:{y:190.8,rotation:0,x:162.7}},{t:this.shape_246},{t:this.shape_190,p:{x:125.8,y:180.8,rotation:0}},{t:this.shape_189,p:{x:121.8,y:152.8,rotation:0}},{t:this.shape_245,p:{rotation:0,x:145.8,y:149.8}},{t:this.shape_188,p:{x:149.8,y:163.8,rotation:0}},{t:this.shape_204,p:{y:174.8,rotation:0,x:154.8}},{t:this.shape_187,p:{x:129.8,y:165.8,rotation:0}},{t:this.shape_221,p:{x:137.2,y:159.8,rotation:0}},{t:this.shape_186,p:{x:143.8,y:172.8,rotation:0}},{t:this.shape_244,p:{rotation:0,x:148.7,y:165.3}},{t:this.shape_243,p:{rotation:0,x:131.8,y:120.8}},{t:this.shape_242,p:{rotation:0,x:134.4,y:146.9}},{t:this.shape_241,p:{rotation:0,x:117.2,y:130.2}},{t:this.shape_201,p:{x:188.2,y:158.8,rotation:0}},{t:this.shape_240,p:{rotation:0,x:122.7,y:141.7}},{t:this.shape_239,p:{rotation:0,x:169.3,y:166.3}},{t:this.shape_238,p:{rotation:0,x:171.2,y:143.2}},{t:this.shape_185,p:{x:145.8,y:154.8,rotation:0}},{t:this.shape_388,p:{rotation:0,x:104.7,y:122.2}},{t:this.shape_387,p:{rotation:0,x:172.1,y:121.7}},{t:this.shape_386,p:{rotation:0,x:232.8,y:177.3}},{t:this.shape_385,p:{rotation:0,x:127.3,y:180.8}},{t:this.shape_384,p:{rotation:0,x:144.9,y:145.8}},{t:this.shape_383,p:{rotation:0,x:152.2,y:143.3}},{t:this.shape_382,p:{rotation:0,x:155.8,y:163.8}},{t:this.shape_381,p:{rotation:0,x:196.1,y:147.8}},{t:this.shape_380,p:{rotation:0,x:187.7,y:108.7}},{t:this.shape_379,p:{rotation:0,x:157.3,y:100.8}},{t:this.shape_378,p:{rotation:0,x:194.7,y:114.7}},{t:this.shape_377,p:{rotation:0,x:142.5,y:124.9}},{t:this.shape_376,p:{rotation:0,x:108.3,y:107.4}},{t:this.shape_375,p:{rotation:0,x:189.2,y:163.3}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368,p:{rotation:0,x:98.8,y:178.8}},{t:this.shape_367,p:{rotation:0,x:61.8,y:174.8}},{t:this.shape_366,p:{rotation:0,x:68.8,y:134.8}},{t:this.shape_365,p:{rotation:0,x:52.8,y:151.8}},{t:this.shape_364,p:{rotation:0,x:84.8,y:162.8}},{t:this.shape_363,p:{rotation:0,x:85.8,y:101.8}},{t:this.shape_362,p:{rotation:0,x:102.8,y:76.8}},{t:this.shape_361,p:{rotation:0,x:107.8,y:121.8}},{t:this.shape_360,p:{rotation:0,x:123.8,y:177.8}},{t:this.shape_359,p:{rotation:0,x:193.7,y:71.8}},{t:this.shape_358,p:{rotation:0,x:142.8,y:60.8}},{t:this.shape_357,p:{rotation:0,x:169.7,y:60.8}},{t:this.shape_356,p:{rotation:0,x:193.7,y:187.8}},{t:this.shape_355,p:{rotation:0,x:230.7,y:113.8}},{t:this.shape_354,p:{rotation:0,x:239.7,y:161.8}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:0,x:126.2,y:176.8}},{t:this.shape_157,p:{rotation:0,x:147.3,y:180.2}},{t:this.shape_156,p:{rotation:0,x:138.3,y:199.6}},{t:this.shape_166,p:{rotation:0,x:114.7,y:151.1}},{t:this.shape_165,p:{rotation:0,x:109.2,y:163.8}},{t:this.shape_164,p:{rotation:0,x:142.3,y:144.3}},{t:this.shape_163,p:{rotation:0,x:168.7,y:155.8}},{t:this.shape_162,p:{rotation:0,x:162.7,y:174.3}},{t:this.shape_161,p:{rotation:0,x:160.3,y:143.9}},{t:this.shape_160,p:{rotation:0,x:125.8,y:137.8}},{t:this.shape_159,p:{rotation:0,x:132.3,y:149.2}},{t:this.shape_174,p:{rotation:0,x:178.6,y:179.4}},{t:this.shape_173,p:{rotation:0,x:188.1,y:156.6}},{t:this.shape_172,p:{rotation:0,x:195.7,y:132.8}},{t:this.shape_171,p:{rotation:0,x:83.2,y:166.8}},{t:this.shape_170,p:{rotation:0,x:92.7,y:137.1}},{t:this.shape_169,p:{rotation:0,x:130.2,y:124.8}},{t:this.shape_168,p:{rotation:0,x:157,y:122.8}},{t:this.shape_167,p:{rotation:0,x:180.1,y:116.4}},{t:this.shape_184,p:{rotation:0,x:99.2,y:178.3}},{t:this.shape_183,p:{rotation:0,x:76.2,y:131.8}},{t:this.shape_182,p:{rotation:0,x:88.2,y:116.8}},{t:this.shape_181,p:{rotation:0,x:111.7,y:122.3}},{t:this.shape_180,p:{rotation:0,x:158.6,y:93.8}},{t:this.shape_179,p:{rotation:0,x:145.3,y:122.3}},{t:this.shape_178,p:{rotation:0,x:200.8,y:99.2}},{t:this.shape_177,p:{rotation:0,x:133.1,y:82.3}},{t:this.shape_176,p:{rotation:0,x:226.7,y:150.3}},{t:this.shape_175},{t:this.shape_237,p:{rotation:0,x:181.6,y:174.2}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_353},{t:this.shape_233},{t:this.shape_232,p:{rotation:0,x:176.2,y:189.8}},{t:this.shape_389},{t:this.shape_352,p:{x:204.7,y:143.8}},{t:this.shape_350,p:{rotation:0,x:224.2,y:162.8}},{t:this.shape_351,p:{x:236.7,y:145.8}},{t:this.shape_234,p:{x:225.2,y:144.8,rotation:0}},{t:this.shape_349,p:{x:208.7,y:123.8}},{t:this.shape_348,p:{x:186.7,y:133.8}},{t:this.shape_347,p:{x:193.7,y:121.8}},{t:this.shape_346,p:{x:210.7,y:110.8}},{t:this.shape_345,p:{x:226.7,y:97.8,rotation:0}},{t:this.shape_229,p:{x:214.2,y:77.8,rotation:0}},{t:this.shape_344,p:{x:209.7,rotation:0,y:97.8}},{t:this.shape_343,p:{x:189.7,y:107.8,rotation:0}},{t:this.shape_342,p:{x:181.7,y:95.8,rotation:0}},{t:this.shape_341,p:{x:165.7,y:117.8,rotation:0}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_231,p:{x:171.7,y:88.8,rotation:0}},{t:this.shape_216,p:{y:67.8,rotation:0,x:162.7}},{t:this.shape_230,p:{x:184.7,y:72.8,rotation:0}},{t:this.shape_228,p:{x:144.8,y:87.8,rotation:0}},{t:this.shape_226,p:{x:144.8,y:108.8,rotation:0}},{t:this.shape_225,p:{x:118.8,y:100.8,rotation:0}},{t:this.shape_224,p:{x:107.8,y:81.8,rotation:0}},{t:this.shape_223,p:{x:119.8,y:74.8,rotation:0}},{t:this.shape_222,p:{x:121.8,y:57.8,rotation:0}},{t:this.shape_220,p:{x:132.8,y:60.8,rotation:0}},{t:this.shape_338,p:{rotation:0,x:154.8,y:43.8}},{t:this.shape_219,p:{x:140.8,y:64.8,rotation:0}},{t:this.shape_202,p:{rotation:0,x:147.7,y:48.8}},{t:this.shape_227,p:{x:114.2,y:81.8,rotation:0}},{t:this.shape_218,p:{x:117.8,y:90.8,rotation:0}},{t:this.shape_217,p:{x:106.8,y:179.8,rotation:0}},{t:this.shape_214,p:{x:114.8,y:174.8,rotation:0}},{t:this.shape_212,p:{x:101.8,y:160.8,rotation:0}},{t:this.shape_211,p:{x:73.8,y:159.8,rotation:0}},{t:this.shape_210,p:{x:57.8,y:161.8,rotation:0}},{t:this.shape_209,p:{x:77.8,y:172.8,rotation:0}},{t:this.shape_208,p:{x:93.8,y:191.8,rotation:0}},{t:this.shape_207,p:{x:92.8,y:138.8,rotation:0}},{t:this.shape_206,p:{x:74.8,y:137.8,rotation:0}},{t:this.shape_205,p:{x:60.8,y:126.8,rotation:0}},{t:this.shape_203,p:{x:71.8,y:116.8,rotation:0}},{t:this.shape_200,p:{x:81.8,y:104.8,rotation:0}},{t:this.shape_199,p:{x:102.8,y:114.8,rotation:0}},{t:this.shape_198,p:{x:95.8,y:128.8,rotation:0}},{t:this.shape_197,p:{x:109.8,y:133.8,rotation:0}},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330,p:{rotation:0,x:107.8,y:128.8}},{t:this.shape_329,p:{rotation:0,x:119.8,y:136.8}},{t:this.shape_328,p:{rotation:0,x:141.8,y:126.8}},{t:this.shape_327,p:{rotation:0,x:110.8,y:91.8}},{t:this.shape_326,p:{rotation:0,x:131.8,y:86.8}},{t:this.shape_325,p:{rotation:0,x:128.8,y:70.8}},{t:this.shape_324,p:{rotation:0,x:131.8,y:49.8}},{t:this.shape_323,p:{rotation:0,x:143.8,y:58.8}},{t:this.shape_322,p:{rotation:0,x:158.8,y:83.8}},{t:this.shape_321,p:{rotation:0,x:143.8,y:99.8}},{t:this.shape_320,p:{rotation:0,x:140.8,y:119.8}},{t:this.shape_319,p:{rotation:0,x:151.7,y:119.7}},{t:this.shape_318,p:{rotation:0,x:162.7,y:105.8}},{t:this.shape_317,p:{rotation:0,x:174.7,y:84.8}},{t:this.shape_316,p:{rotation:0,x:176.7,y:70.8}},{t:this.shape_315,p:{rotation:0,x:152.7,y:77.8}},{t:this.shape_314,p:{rotation:0,x:103.8,y:108.8}},{t:this.shape_313,p:{rotation:0,x:113.7,y:108.7}},{t:this.shape_312,p:{rotation:0,x:107.3,y:100.3}},{t:this.shape_311,p:{rotation:0,x:95.8,y:117.8}},{t:this.shape_310,p:{rotation:0,x:179.7,y:166.8}},{t:this.shape_309,p:{rotation:0,x:164.7,y:164.8}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{rotation:0,x:194.7,y:186.8}},{t:this.shape_305,p:{rotation:0,x:202.7,y:173.8}},{t:this.shape_304,p:{rotation:0,x:216.7,y:172.8}},{t:this.shape_303},{t:this.shape_302,p:{rotation:0,x:225.7,y:200.8}},{t:this.shape_301,p:{rotation:0,x:234.7,y:177.8}},{t:this.shape_300,p:{rotation:0,x:221.7,y:192.8}},{t:this.shape_299,p:{rotation:0,x:234.7,y:191.8}},{t:this.shape_298,p:{rotation:0,x:70.2,y:171.8}},{t:this.shape_297,p:{rotation:0,x:92.3,y:172.2}},{t:this.shape_296,p:{rotation:0,x:118.2,y:170.8}},{t:this.shape_295,p:{rotation:0,x:97.8,y:144.8}},{t:this.shape_294,p:{rotation:0,x:69.8,y:143.8}},{t:this.shape_293,p:{rotation:0,x:68.3,y:121.2}},{t:this.shape_292,p:{rotation:0,x:148.8,y:133.8}},{t:this.shape_291,p:{rotation:0,x:165.7,y:134.8}},{t:this.shape_290,p:{rotation:0,x:181.7,y:137.8}},{t:this.shape_289,p:{rotation:0,x:192.7,y:146.8}},{t:this.shape_288,p:{rotation:0,x:211.7,y:146.8}},{t:this.shape_287,p:{rotation:0,x:221.7,y:154.8}},{t:this.shape_286,p:{rotation:0,x:234.7,y:148.8}},{t:this.shape_285,p:{rotation:0,x:213.7,y:129.8}},{t:this.shape_284,p:{rotation:0,x:187.7,y:123.8}},{t:this.shape_283,p:{rotation:0,x:173.7,y:120.3}},{t:this.shape_282,p:{rotation:0,x:165.7,y:139.8}},{t:this.shape_281,p:{rotation:0,x:176.7,y:102.8}},{t:this.shape_280,p:{rotation:0,x:180.7,y:114.8}},{t:this.shape_279,p:{rotation:0,x:208.7,y:91.8}},{t:this.shape_278,p:{rotation:0,x:187.7,y:90.8}},{t:this.shape_277,p:{rotation:0,x:198.7,y:110.8}},{t:this.shape_276,p:{rotation:0,x:223.7,y:83.8}},{t:this.shape_275,p:{rotation:0,x:221.7,y:104.8}},{t:this.shape_274,p:{rotation:0,x:225.7,y:114.2}},{t:this.shape_273,p:{rotation:0,x:219.7,y:121.8}},{t:this.shape_272,p:{rotation:0,x:191.7,y:127.2}},{t:this.shape_271,p:{rotation:0,x:207.7,y:161.8}},{t:this.shape_270,p:{rotation:0,x:199.7,y:173.8}},{t:this.shape_269,p:{rotation:0,x:177.7,y:159.8}},{t:this.shape_268,p:{rotation:0,x:184.2,y:175.3}},{t:this.shape_267,p:{rotation:0,x:237.7,y:179.8}},{t:this.shape_266,p:{rotation:0,x:216.7,y:162.8}},{t:this.shape_265,p:{rotation:0,x:224.7,y:135.8}},{t:this.shape_264,p:{rotation:0,x:139.8,y:110.8}},{t:this.shape_263,p:{rotation:0,x:153.7,y:81.8}},{t:this.shape_262,p:{rotation:0,x:132.8,y:79.8}},{t:this.shape_261,p:{rotation:0,x:107.8,y:76.8}},{t:this.shape_260,p:{rotation:0,x:117.8,y:109.8}},{t:this.shape_259,p:{rotation:0,x:137.2,y:116.8}},{t:this.shape_258,p:{rotation:0,x:102.8,y:135.8}},{t:this.shape_257,p:{rotation:0,x:69.8,y:141.8}},{t:this.shape_256,p:{rotation:0,x:67.8,y:159.3}},{t:this.shape_255,p:{rotation:0,x:102.8,y:158.8}},{t:this.shape_254,p:{rotation:0,x:80.8,y:146.8}},{t:this.shape_253,p:{rotation:0,x:106.8,y:152.8}},{t:this.shape_252,p:{rotation:0,x:77.8,y:151.3}},{t:this.shape_251,p:{rotation:0,x:100.8,y:162.8}},{t:this.shape_250,p:{rotation:0,x:90.2,y:161.8}},{t:this.shape_249,p:{rotation:0,x:90.8,y:146.8}},{t:this.shape_196,p:{x:188.7,y:170.8,rotation:0}},{t:this.shape_195,p:{x:179.7,y:177.8,rotation:0}},{t:this.shape_248},{t:this.shape_194,p:{x:196.7,y:186.8,rotation:0}},{t:this.shape_193,p:{x:214.7,y:189.8,rotation:0}},{t:this.shape_215,p:{y:192.8,rotation:0,x:155.8}},{t:this.shape_192,p:{x:111.8,y:174.8,rotation:0}},{t:this.shape_247},{t:this.shape_191,p:{x:137.8,y:179.8,rotation:0}},{t:this.shape_213,p:{y:190.8,rotation:0,x:162.7}},{t:this.shape_246},{t:this.shape_190,p:{x:125.8,y:180.8,rotation:0}},{t:this.shape_189,p:{x:121.8,y:152.8,rotation:0}},{t:this.shape_245,p:{rotation:0,x:145.8,y:149.8}},{t:this.shape_188,p:{x:149.8,y:163.8,rotation:0}},{t:this.shape_204,p:{y:174.8,rotation:0,x:154.8}},{t:this.shape_187,p:{x:129.8,y:165.8,rotation:0}},{t:this.shape_221,p:{x:137.2,y:159.8,rotation:0}},{t:this.shape_186,p:{x:143.8,y:172.8,rotation:0}},{t:this.shape_244,p:{rotation:0,x:148.7,y:165.3}},{t:this.shape_243,p:{rotation:0,x:131.8,y:120.8}},{t:this.shape_242,p:{rotation:0,x:134.4,y:146.9}},{t:this.shape_241,p:{rotation:0,x:117.2,y:130.2}},{t:this.shape_201,p:{x:188.2,y:158.8,rotation:0}},{t:this.shape_240,p:{rotation:0,x:122.7,y:141.7}},{t:this.shape_239,p:{rotation:0,x:169.3,y:166.3}},{t:this.shape_238,p:{rotation:0,x:171.2,y:143.2}},{t:this.shape_185,p:{x:145.8,y:154.8,rotation:0}},{t:this.shape_388,p:{rotation:0,x:104.7,y:122.2}},{t:this.shape_387,p:{rotation:0,x:172.1,y:121.7}},{t:this.shape_386,p:{rotation:0,x:232.8,y:177.3}},{t:this.shape_385,p:{rotation:0,x:127.3,y:180.8}},{t:this.shape_384,p:{rotation:0,x:144.9,y:145.8}},{t:this.shape_383,p:{rotation:0,x:152.2,y:143.3}},{t:this.shape_382,p:{rotation:0,x:155.8,y:163.8}},{t:this.shape_381,p:{rotation:0,x:196.1,y:147.8}},{t:this.shape_380,p:{rotation:0,x:187.7,y:108.7}},{t:this.shape_379,p:{rotation:0,x:157.3,y:100.8}},{t:this.shape_378,p:{rotation:0,x:194.7,y:114.7}},{t:this.shape_377,p:{rotation:0,x:142.5,y:124.9}},{t:this.shape_376,p:{rotation:0,x:108.3,y:107.4}},{t:this.shape_375,p:{rotation:0,x:189.2,y:163.3}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368,p:{rotation:0,x:98.8,y:178.8}},{t:this.shape_367,p:{rotation:0,x:61.8,y:174.8}},{t:this.shape_366,p:{rotation:0,x:68.8,y:134.8}},{t:this.shape_365,p:{rotation:0,x:52.8,y:151.8}},{t:this.shape_364,p:{rotation:0,x:84.8,y:162.8}},{t:this.shape_363,p:{rotation:0,x:85.8,y:101.8}},{t:this.shape_362,p:{rotation:0,x:102.8,y:76.8}},{t:this.shape_361,p:{rotation:0,x:107.8,y:121.8}},{t:this.shape_360,p:{rotation:0,x:123.8,y:177.8}},{t:this.shape_359,p:{rotation:0,x:193.7,y:71.8}},{t:this.shape_358,p:{rotation:0,x:142.8,y:60.8}},{t:this.shape_357,p:{rotation:0,x:169.7,y:60.8}},{t:this.shape_356,p:{rotation:0,x:193.7,y:187.8}},{t:this.shape_355,p:{rotation:0,x:230.7,y:113.8}},{t:this.shape_354,p:{rotation:0,x:239.7,y:161.8}}]},5).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_392},{t:this.shape_153},{t:this.shape_152},{t:this.shape_391},{t:this.shape_390},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_158,p:{rotation:-60,x:24,y:209.7}},{t:this.shape_157,p:{rotation:-60,x:37.5,y:193.1}},{t:this.shape_156,p:{rotation:-60,x:49.7,y:210.6}},{t:this.shape_166,p:{rotation:-60,x:-4,y:206.8}},{t:this.shape_165,p:{rotation:-60,x:4.2,y:217.9}},{t:this.shape_164,p:{rotation:-60,x:3.9,y:179.5}},{t:this.shape_163,p:{rotation:-60,x:27,y:162.4}},{t:this.shape_162,p:{rotation:-60,x:40,y:176.8}},{t:this.shape_161,p:{rotation:-60,x:12.5,y:163.7}},{t:this.shape_160,p:{rotation:-60,x:-10.1,y:190.5}},{t:this.shape_159,p:{rotation:-60,x:3.1,y:190.6}},{t:this.shape_174,p:{rotation:-60,x:52.4,y:165.6}},{t:this.shape_173,p:{rotation:-60,x:37.4,y:146}},{t:this.shape_172,p:{rotation:-60,x:20.6,y:127.5}},{t:this.shape_171,p:{rotation:-60,x:-6.2,y:241.9}},{t:this.shape_170,p:{rotation:-60,x:-27.2,y:218.9}},{t:this.shape_169,p:{rotation:-60,x:-19,y:180.2}},{t:this.shape_168,p:{rotation:-60,x:-7.4,y:156}},{t:this.shape_167,p:{rotation:-60,x:-1.4,y:132.7}},{t:this.shape_184,p:{rotation:-60,x:11.8,y:233.8}},{t:this.shape_183,p:{rotation:-60,x:-40,y:230.4}},{t:this.shape_182,p:{rotation:-60,x:-47,y:212.6}},{t:this.shape_181,p:{rotation:-60,x:-30.5,y:195}},{t:this.shape_180,p:{rotation:-60,x:-31.7,y:140.1}},{t:this.shape_179,p:{rotation:-60,x:-13.7,y:165.8}},{t:this.shape_178,p:{rotation:-60,x:-6,y:106.3}},{t:this.shape_177,p:{rotation:-60,x:-54.4,y:156.4}},{t:this.shape_176,p:{rotation:-60,x:51.3,y:109.4}},{t:this.shape_237,p:{rotation:-60,x:49.4,y:160.4}},{t:this.shape_232,p:{rotation:-60,x:71.4,y:127.4}},{t:this.shape_345,p:{x:45.7,y:141.9,rotation:-60}},{t:this.shape_344,p:{x:34.6,rotation:-60,y:125.1}},{t:this.shape_350,p:{rotation:-60,x:60.8,y:117.8}},{t:this.shape_343,p:{x:52.3,y:98.4,rotation:-60}},{t:this.shape_234,p:{x:45.7,y:107.9,rotation:-60}},{t:this.shape_342,p:{x:19.3,y:111.7,rotation:-60}},{t:this.shape_341,p:{x:16.9,y:135.7,rotation:-60}},{t:this.shape_231,p:{x:10.1,y:123.7,rotation:-60}},{t:this.shape_230,p:{x:9,y:103.4,rotation:-60}},{t:this.shape_228,p:{x:5.8,y:83.1,rotation:-60}},{t:this.shape_229,p:{x:-17.8,y:83.9,rotation:-60}},{t:this.shape_226,p:{x:-2.7,y:97.8,rotation:-60}},{t:this.shape_225,p:{x:-4.1,y:120.1,rotation:-60}},{t:this.shape_224,p:{x:-18.5,y:121,rotation:-60}},{t:this.shape_223,p:{x:-7.4,y:145.9,rotation:-60}},{t:this.shape_216,p:{y:160,rotation:-60,x:11}},{t:this.shape_215,p:{y:144,rotation:-60,x:-30.6}},{t:this.shape_222,p:{x:-29.5,y:126.2,rotation:-60}},{t:this.shape_213,p:{y:123.5,rotation:-60,x:-52.2}},{t:this.shape_220,p:{x:-36.9,y:107,rotation:-60}},{t:this.shape_219,p:{x:-43.9,y:149,rotation:-60}},{t:this.shape_218,p:{x:-25.7,y:159.5,rotation:-60}},{t:this.shape_217,p:{x:-45.6,y:178.1,rotation:-60}},{t:this.shape_214,p:{x:-67.6,y:178.1,rotation:-60}},{t:this.shape_212,p:{x:-67.6,y:164.2,rotation:-60}},{t:this.shape_211,p:{x:-81.3,y:154,rotation:-60}},{t:this.shape_210,p:{x:-73.2,y:145.9,rotation:-60}},{t:this.shape_338,p:{rotation:-60,x:-77,y:118.4}},{t:this.shape_209,p:{x:-65.8,y:141,rotation:-60}},{t:this.shape_202,p:{rotation:-60,x:-76.1,y:127}},{t:this.shape_227,p:{x:-64.3,y:172.5,rotation:-60}},{t:this.shape_208,p:{x:-54.8,y:173.9,rotation:-60}},{t:this.shape_207,p:{x:16.5,y:218.5,rotation:-60}},{t:this.shape_206,p:{x:-2.1,y:222.8,rotation:-60}},{t:this.shape_205,p:{x:-17,y:246.5,rotation:-60}},{t:this.shape_203,p:{x:-23.3,y:261.4,rotation:-60}},{t:this.shape_200,p:{x:-3.8,y:249.6,rotation:-60}},{t:this.shape_199,p:{x:-25.7,y:219.6,rotation:-60}},{t:this.shape_198,p:{x:-35.6,y:234.7,rotation:-60}},{t:this.shape_197,p:{x:-52.1,y:241.3,rotation:-60}},{t:this.shape_196,p:{x:-55.2,y:226.8,rotation:-60}},{t:this.shape_195,p:{x:-60.6,y:212.1,rotation:-60}},{t:this.shape_194,p:{x:-41.5,y:198.9,rotation:-60}},{t:this.shape_193,p:{x:-32.9,y:212,rotation:-60}},{t:this.shape_192,p:{x:-21.5,y:202.4,rotation:-60}},{t:this.shape_330,p:{rotation:-60,x:-34.2,y:190.4}},{t:this.shape_329,p:{rotation:-60,x:-7.3,y:233.7}},{t:this.shape_328,p:{rotation:-60,x:-15.1,y:267.3}},{t:this.shape_326,p:{rotation:-60,x:-22.4,y:253.8}},{t:this.shape_325,p:{rotation:-60,x:-50.4,y:220.3}},{t:this.shape_324,p:{rotation:-60,x:-53,y:204.9}},{t:this.shape_323,p:{rotation:-60,x:-26.9,y:201.6}},{t:this.shape_321,p:{rotation:-60,x:-13.9,y:195.2}},{t:this.shape_320,p:{rotation:-60,x:-11.6,y:171.1}},{t:this.shape_327,p:{rotation:-60,x:-57.4,y:180.5}},{t:this.shape_317,p:{rotation:-60,x:-51.2,y:159.8}},{t:this.shape_316,p:{rotation:-60,x:-66.6,y:154.4}},{t:this.shape_314,p:{rotation:-60,x:-83.3,y:141.3}},{t:this.shape_310,p:{rotation:-60,x:-69.5,y:135.4}},{t:this.shape_322,p:{rotation:-60,x:-40.3,y:134.9}},{t:this.shape_309,p:{rotation:-60,x:-34,y:155.9}},{t:this.shape_306,p:{rotation:-60,x:-18.1,y:168.5}},{t:this.shape_319,p:{rotation:-60,x:-12.7,y:159}},{t:this.shape_318,p:{rotation:-60,x:-19.3,y:142.5}},{t:this.shape_305,p:{rotation:-60,x:-31.5,y:121.6}},{t:this.shape_304,p:{rotation:-60,x:-42.6,y:112.9}},{t:this.shape_315,p:{rotation:-60,x:-48.6,y:137.2}},{t:this.shape_302,p:{rotation:-60,x:-46.2,y:195.1}},{t:this.shape_313,p:{rotation:-60,x:-41.2,y:186.4}},{t:this.shape_312,p:{rotation:-60,x:-51.8,y:187.8}},{t:this.shape_311,p:{rotation:-60,x:-42.4,y:206.5}},{t:this.shape_301,p:{rotation:-60,x:42,y:158.3}},{t:this.shape_300,p:{rotation:-60,x:32.8,y:170.3}},{t:this.shape_299,p:{rotation:-60,x:59.6,y:141.9}},{t:this.shape_295,p:{rotation:-60,x:65.7,y:129.2}},{t:this.shape_298,p:{rotation:-60,x:-8.4,y:255.6}},{t:this.shape_297,p:{rotation:-60,x:3,y:236.8}},{t:this.shape_296,p:{rotation:-60,x:14.8,y:213.6}},{t:this.shape_294,p:{rotation:-60,x:-18,y:218.3}},{t:this.shape_292,p:{rotation:-60,x:-32.9,y:242}},{t:this.shape_293,p:{rotation:-60,x:-53.1,y:232.1}},{t:this.shape_291,p:{rotation:-60,x:-2,y:168.6}},{t:this.shape_290,p:{rotation:-60,x:7.3,y:154.4}},{t:this.shape_289,p:{rotation:-60,x:17.9,y:142}},{t:this.shape_288,p:{rotation:-60,x:31.2,y:137}},{t:this.shape_287,p:{rotation:-60,x:40.7,y:120.6}},{t:this.shape_286,p:{rotation:-60,x:52.6,y:115.9}},{t:this.shape_285,p:{rotation:-60,x:53.9,y:101.7}},{t:this.shape_284,p:{rotation:-60,x:27,y:110.3}},{t:this.shape_282,p:{rotation:-60,x:8.8,y:129.9}},{t:this.shape_283,p:{rotation:-60,x:-1.3,y:140.2}},{t:this.shape_281,p:{rotation:-60,x:11.6,y:156.9}},{t:this.shape_280,p:{rotation:-60,x:-14.9,y:128.9}},{t:this.shape_279,p:{rotation:-60,x:-2.5,y:131.4}},{t:this.shape_278,p:{rotation:-60,x:-8.4,y:95.7}},{t:this.shape_277,p:{rotation:-60,x:-19.8,y:113.4}},{t:this.shape_276,p:{rotation:-60,x:3,y:113.8}},{t:this.shape_275,p:{rotation:-60,x:-7.9,y:78.7}},{t:this.shape_273,p:{rotation:-60,x:9.3,y:90.9}},{t:this.shape_274,p:{rotation:-60,x:19.5,y:92.2}},{t:this.shape_271,p:{rotation:-60,x:23.1,y:101.1}},{t:this.shape_272,p:{rotation:-60,x:13.8,y:128.2}},{t:this.shape_270,p:{rotation:-60,x:51.7,y:131.5}},{t:this.shape_269,p:{rotation:-60,x:58.1,y:144.5}},{t:this.shape_267,p:{rotation:-60,x:35,y:156.5}},{t:this.shape_268,p:{rotation:-60,x:51.6,y:158.7}},{t:this.shape_266,p:{rotation:-60,x:57.1,y:124.2}},{t:this.shape_265,p:{rotation:-60,x:37.7,y:103.8}},{t:this.shape_264,p:{rotation:-60,x:-26.4,y:164.9}},{t:this.shape_263,p:{rotation:-60,x:-44.6,y:138.3}},{t:this.shape_262,p:{rotation:-60,x:-56.8,y:155.4}},{t:this.shape_261,p:{rotation:-60,x:-71.9,y:175.6}},{t:this.shape_260,p:{rotation:-60,x:-38.3,y:183.4}},{t:this.shape_259,p:{rotation:-60,x:-22.5,y:170.1}},{t:this.shape_258,p:{rotation:-60,x:-23.3,y:209.4}},{t:this.shape_257,p:{rotation:-60,x:-34.6,y:241}},{t:this.shape_256,p:{rotation:-60,x:-20.5,y:251.5}},{t:this.shape_255,p:{rotation:-60,x:-3.4,y:220.9}},{t:this.shape_254,p:{rotation:-60,x:-24.8,y:234}},{t:this.shape_253,p:{rotation:-60,x:-6.6,y:214.5}},{t:this.shape_252,p:{rotation:-60,x:-22.4,y:238.8}},{t:this.shape_251,p:{rotation:-60,x:-0.9,y:224.7}},{t:this.shape_250,p:{rotation:-60,x:-7,y:233.3}},{t:this.shape_249,p:{rotation:-60,x:-19.8,y:225.3}},{t:this.shape_191,p:{x:50,y:152.5,rotation:-60}},{t:this.shape_190,p:{x:15,y:221.1,rotation:-60}},{t:this.shape_189,p:{x:0.9,y:201.5,rotation:-60}},{t:this.shape_245,p:{rotation:-60,x:10.3,y:179.2}},{t:this.shape_188,p:{x:24.5,y:182.7,rotation:-60}},{t:this.shape_204,p:{y:183.9,rotation:-60,x:36.5}},{t:this.shape_187,p:{x:16.2,y:201,rotation:-60}},{t:this.shape_221,p:{x:14.7,y:191.6,rotation:-60}},{t:this.shape_186,p:{x:29.2,y:192.4,rotation:-60}},{t:this.shape_244,p:{rotation:-60,x:25.3,y:184.5}},{t:this.shape_243,p:{rotation:-60,x:-21.8,y:176.8}},{t:this.shape_242,p:{rotation:-60,x:2.2,y:187.7}},{t:this.shape_241,p:{rotation:-60,x:-20.9,y:194.2}},{t:this.shape_201,p:{x:39.3,y:147,rotation:-60}},{t:this.shape_240,p:{rotation:-60,x:-8.2,y:195.1}},{t:this.shape_239,p:{rotation:-60,x:36.4,y:167.1}},{t:this.shape_238,p:{rotation:-60,x:17.3,y:153.9}},{t:this.shape_185,p:{x:14.7,y:181.7,rotation:-60}},{t:this.shape_388,p:{rotation:-60,x:-34.1,y:201}},{t:this.shape_387,p:{rotation:-60,x:-0.8,y:142.4}},{t:this.shape_386,p:{rotation:-60,x:77.7,y:117.6}},{t:this.shape_385,p:{rotation:-60,x:27.9,y:210.7}},{t:this.shape_384,p:{rotation:-60,x:6.4,y:177.9}},{t:this.shape_383,p:{rotation:-60,x:7.9,y:170.4}},{t:this.shape_382,p:{rotation:-60,x:27.5,y:177.5}},{t:this.shape_381,p:{rotation:-60,x:33.8,y:134.6}},{t:this.shape_380,p:{rotation:-60,x:-4.3,y:122.4}},{t:this.shape_379,p:{rotation:-60,x:-26.3,y:144.7}},{t:this.shape_378,p:{rotation:-60,x:4.5,y:119.3}},{t:this.shape_377,p:{rotation:-60,x:-12.9,y:169.6}},{t:this.shape_376,p:{rotation:-60,x:-45.1,y:190.5}},{t:this.shape_375,p:{rotation:-60,x:43.8,y:148.3}},{t:this.shape_368,p:{rotation:-60,x:59.2,y:88.5}},{t:this.shape_367,p:{rotation:-60,x:58.7,y:119.4}},{t:this.shape_366,p:{rotation:-60,x:27.6,y:77.2}},{t:this.shape_365,p:{rotation:-60,x:-10,y:264.4}},{t:this.shape_364,p:{rotation:-60,x:-41.2,y:238.4}},{t:this.shape_363,p:{rotation:-60,x:-34.4,y:260.7}},{t:this.shape_362,p:{rotation:-60,x:-8.9,y:238.5}},{t:this.shape_361,p:{rotation:-60,x:-61.2,y:207.1}},{t:this.shape_360,p:{rotation:-60,x:-74.4,y:179.9}},{t:this.shape_359,p:{rotation:-60,x:-32.9,y:198.1}},{t:this.shape_358,p:{rotation:-60,x:-33.2,y:98.7}},{t:this.shape_357,p:{rotation:-60,x:-68.2,y:137.3}},{t:this.shape_356,p:{rotation:-60,x:-54.8,y:113.9}},{t:this.shape_355,p:{rotation:-60,x:21.6,y:87.6}},{t:this.shape_354,p:{rotation:-60,x:67.7,y:103.8}}]},38).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_155},{t:this.shape_392},{t:this.shape_153},{t:this.shape_152},{t:this.shape_391},{t:this.shape_390},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},13).to({state:[]},15).wait(54));

	// Moon
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.1,160.7,1,1,0,0,0,240.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:42,regY:43.2,rotation:4.8,x:77.7,y:166.5},0).wait(1).to({rotation:9.6,x:77.8,y:149.8},0).wait(1).to({rotation:14.4,x:79.5,y:133.2},0).wait(1).to({rotation:19.1,x:82.5,y:116.8},0).wait(1).to({rotation:23.9,x:86.8,y:100.8},0).wait(1).to({rotation:28.7,x:92.4,y:85.2},0).wait(1).to({rotation:33.5,x:99.3,y:70},0).wait(1).to({rotation:38.3,x:107.6,y:55.5},0).wait(1).to({rotation:43.1,x:116.9,y:41.8},0).wait(1).to({rotation:47.9,x:127.4,y:28.8},0).wait(1).to({rotation:52.6,x:138.9,y:16.8},0).wait(1).to({rotation:57.4,x:151.4,y:5.8},0).wait(1).to({rotation:62.2,x:164.8,y:-4.2},0).wait(1).to({rotation:67,x:178.9,y:-12.9},0).wait(1).to({rotation:71.8,x:193.7,y:-20.5},0).wait(1).to({rotation:76.6,x:209.1,y:-26.8},0).wait(1).to({rotation:81.3,x:225,y:-31.9},0).wait(1).to({rotation:86.1,x:241.3,y:-35.5},0).wait(1).to({rotation:90.9,x:257.8,y:-37.8},0).wait(1).to({rotation:95.7,x:274.4,y:-38.7},0).wait(1).to({rotation:100.5,x:291,y:-38.3},0).wait(1).to({rotation:105.3,x:307.6,y:-36.5},0).wait(1).to({rotation:110.1,x:323.9,y:-33.2},0).wait(1).to({rotation:114.8,x:339.9,y:-28.6},0).wait(1).to({rotation:119.6,x:355.5,y:-22.7},0).wait(1).to({rotation:124.4,x:370.5,y:-15.5},0).wait(1).to({rotation:129.2,x:384.9,y:-7.1},0).wait(1).to({rotation:134,x:398.5,y:2.4},0).wait(1).to({rotation:138.8,x:411.2,y:13.1},0).wait(1).to({rotation:143.5,x:423.1,y:24.8},0).wait(1).to({rotation:148.3,x:433.9,y:37.5},0).wait(1).to({rotation:153.1,x:443.7,y:51},0).wait(1).to({rotation:157.9,x:452.3,y:65.3},0).wait(1).to({rotation:162.7,x:459.6,y:80.2},0).wait(1).to({rotation:167.5,x:465.7,y:95.7},0).wait(1).to({rotation:172.3,x:470.4,y:111.7},0).wait(1).to({rotation:177,x:473.8,y:128},0).wait(1).to({rotation:181.2,x:475.7,y:142.4},0).wait(1).to({rotation:185.4,x:476.5,y:157},0).wait(1).to({rotation:189.6,x:476.2,y:171.6},0).wait(1).to({rotation:193.8,x:474.9,y:186.1},0).wait(1).to({rotation:198,x:472.5,y:200.5},0).wait(1).to({rotation:202.2,x:469,y:214.7},0).wait(1).to({rotation:206.4,x:464.6,y:228.6},0).wait(1).to({rotation:210.6,x:459.1,y:242.1},0).wait(1).to({rotation:214.7,x:452.7,y:255.1},0).wait(1).to({rotation:218.9,x:445.3,y:267.7},0).wait(1).to({rotation:223.1,x:437.1,y:279.7},0).wait(1).to({rotation:227.3,x:427.9,y:291.1},0).wait(1).to({rotation:231.5,x:418,y:301.8},0).wait(1).to({rotation:235.7,x:407.3,y:311.7},0).wait(1).to({rotation:239.9,x:395.9,y:320.8},0).wait(1).to({rotation:244.1,x:383.9,y:329.1},0).wait(1).to({rotation:248.3,x:371.3,y:336.4},0).wait(1).to({rotation:252.5,x:358.2,y:342.9},0).wait(1).to({rotation:256.6,x:344.7,y:348.3},0).wait(1).to({rotation:260.8,x:330.8,y:352.7},0).wait(1).to({rotation:265,x:316.6,y:356.1},0).wait(1).to({rotation:269.2,x:302.2,y:358.5},0).wait(1).to({rotation:273.4,x:287.7,y:359.8},0).wait(1).to({rotation:277.6,x:273.1,y:360.1},0).wait(1).to({rotation:281.8,x:258.6,y:359.3},0).wait(1).to({rotation:286,x:244.1,y:357.4},0).wait(1).to({rotation:290.2,x:229.8,y:354.4},0).wait(1).to({rotation:294.3,x:215.8,y:350.5},0).wait(1).to({rotation:298.5,x:202.1,y:345.5},0).wait(1).to({rotation:302.7,x:188.8,y:339.5},0).wait(1).to({rotation:306.9,x:176,y:332.6},0).wait(1).to({rotation:311.1,x:163.6,y:324.7},0).wait(1).to({rotation:315.3,x:152,y:316},0).wait(1).to({rotation:319.5,x:141,y:306.5},0).wait(1).to({rotation:323.7,x:130.7,y:296.1},0).wait(1).to({rotation:327.9,x:121.2,y:285.1},0).wait(1).to({rotation:332.1,x:112.5,y:273.3},0).wait(1).to({rotation:336.2,x:104.7,y:261.1},0).wait(1).to({rotation:340.4,x:97.8,y:248.2},0).wait(1).to({rotation:344.6,x:91.9,y:234.8},0).wait(1).to({rotation:348.8,x:87,y:221.2},0).wait(1).to({rotation:353,x:83.1,y:207.1},0).to({_off:true},1).wait(170));

	// Text1
	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgrBEQAegLAQgVQARgWAAgWQAAgGgDgEQgCgCgCAAQgDAAgKAFQgGAEgGAAQgOgBgJgIQgIgJAAgPQAAgOALgLQALgLAQAAQATABAPAQQAPARAAAdQAAAdgVAbQgVAbgtAOg");
	this.shape_393.setTransform(459.4,392.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AAPDUIAAgLIAGAAQATAAAIgGQAHgGADgLIABgcIAAhgQgBgtgEgNQgEgOgKgHQgLgHgOAAQgPAAgOAIQgRAHgWAXIAACQQAAAcAEAHQADAHAIAFQAJAEAVAAIAAALIiIAAIAAgLQATAAAKgGQAGgDAEgIQADgIAAgaIAAj2QAAgvgCgKQgCgLgEgEQgFgEgIAAQgGAAgPAFIgDgKIBRgiIANAAIAADIQAhglAUgKQATgKATAAQAXAAAQANQARAMAJAcQAFASAAAzIAABgQAAAaAFAKQACAHAHAEQAHAEAUAAIAAALg");
	this.shape_394.setTransform(436.4,368.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgMCwQgOgIgGgOQgGgOAAgeIAAi2IgrAAIAAgKQAQgGARgQQARgQAOgVQAHgLALgeIAJAAIAABZIBAAAIAAAVIhAAAIAACwQAAAbAIAIQAHAKAMAAQAKAAAJgGQAJgGAGgMIALAAQgKAdgTAPQgTAOgVAAQgNABgMgIg");
	this.shape_395.setTransform(413,372.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AhiCMIAAgKQAVAAALgHQAHgEADgLQABgFAAgYIAAhoQAAgwgBgJQgDgKgFgEQgFgEgIAAQgJAAgMAEIgDgKIBTgiIANAAIAAA+QAhg9AjgBQARAAALALQALAJAAAOQAAALgIAIQgIAJgKAAQgLgBgNgJQgNgLgGAAQgFAAgHAGQgNAMgNAcIAACCQgBAWAGAMQADAIAKAGQAJAFATAAIAAAKg");
	this.shape_396.setTransform(394.5,376);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAlCFQgJgKAAgZQgpAhgLAFQgQAHgSAAQgcAAgTgTQgSgTAAggQAAgUAJgOQAMgVAfgSQAegQBFgaIAAgLQAAgpgMgPQgOgPgXAAQgUAAgLAKQgLAKAAANIABASQAAANgHAIQgHAHgMAAQgLAAgGgHQgIgIABgOQAAgZAagWQAagVAwAAQAjAAAXAMQARAJAJAUQAFANABAnIAABcQgBAnACAJQACAJADADQADADAEAAQAFAAAEgDQAGgDASgSIAAAQQghAtgeAAQgQAAgIgKgAgdAAQgXAOgLAOQgKAOAAARQABAWAMAOQANAOARAAQAWAAAkgeIAAhnQgsASgNAGg");
	this.shape_397.setTransform(371.4,376.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AisDKIAAgLIAOAAQAOAAANgHQAKgFAEgJQADgJAAgeIAAkFQAAgngIgJQgKgMgaAAIgOAAIAAgLIE2AAIAFBZIgMAAQgGghgHgLQgJgMgOgGQgMgFgeAAIhuAAIAACgIBXAAQAkAAALgLQAQgNABgjIALAAIAACLIgLAAQgEgdgEgIQgGgKgMgHQgMgFgaAAIhXAAIAACEQAAAcADAFQACAGAFADQAHAEAQAAIBEAAQAiAAAPgFQAQgEAOgOQATgTATglIAMAAIgjBlg");
	this.shape_398.setTransform(338.2,369.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AhPBqQgkgmAAhBQAAhFAkgnQAlgnA0AAQAvAAAdAeQAdAfABAyIi8AAQgBA8AeAiQAeAjAoAAQAaAAAUgPQAUgOANgkIAKAGQgHApgeAhQgeAigtAAQgxAAgigngAgxhnQgUATgDAiIB9AAQgCgagEgLQgIgRgOgJQgPgKgPAAQgZAAgTAUg");
	this.shape_399.setTransform(291.1,376.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AAPDUIAAgLIAGAAQATAAAHgGQAIgGADgLIABgcIAAhgQAAgtgFgNQgFgOgJgHQgLgHgOAAQgOAAgQAIQgPAHgXAXIAACQQABAcADAHQADAHAJAFQAIAEAVAAIAAALIiIAAIAAgLQASAAALgGQAGgDADgIQAEgIAAgaIAAj2QAAgvgCgKQgCgLgEgEQgGgEgHAAQgHAAgOAFIgDgKIBRgiIANAAIAADIQAiglATgKQASgKAUAAQAXAAARANQAQAMAJAcQAFASAAAzIAABgQAAAaAFAKQACAHAIAEQAGAEAUAAIAAALg");
	this.shape_400.setTransform(262.1,368.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgMCwQgOgIgGgOQgGgOAAgeIAAi2IgrAAIAAgKQAQgGARgQQARgQAOgVQAHgLALgeIAJAAIAABZIBAAAIAAAVIhAAAIAACwQAAAbAIAIQAHAKAMAAQAKAAAJgGQAJgGAGgMIALAAQgKAdgTAPQgTAOgVAAQgNABgMgIg");
	this.shape_401.setTransform(238.7,372.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AhPBqQgjgmAAhBQgBhFAlgnQAkgnA1AAQAuAAAdAeQAeAfAAAyIi8AAQAAA8AeAiQAdAjAoAAQAaAAAUgPQAUgOANgkIAKAGQgHApgeAhQgeAigtAAQgwAAgjgngAgxhnQgUATgDAiIB9AAQgBgagFgLQgHgRgPgJQgPgKgPAAQgZAAgTAUg");
	this.shape_402.setTransform(201.4,376.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgBCNIhijmQgGgQgGgHQgGgHgJgEQgFgDgPgDIAAgLICAAAIAAALIgIAAQgMAAgGAGQgGAGAAAJQAAALAGAOIA/CWIA/icQAHgQAAgJQAAgEgCgDQgDgEgFgCQgFgCgQAAIAAgLIBZAAIAAALQgPACgGAFQgLAJgIAUIhhDqg");
	this.shape_403.setTransform(172.3,376.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AAlCFQgIgKgBgZQgpAhgKAFQgQAHgTAAQgcAAgSgTQgTgTAAggQAAgUAJgOQANgVAegSQAegQBFgaIAAgLQAAgpgNgPQgNgPgYAAQgSAAgLAKQgLAKAAANIAAASQAAANgHAIQgHAHgLAAQgLAAgHgHQgHgIgBgOQAAgZAbgWQAagVAvAAQAkAAAXAMQASAJAIAUQAGANgBAnIAABcQABAnABAJQABAJAEADQADADAFAAQAEAAAEgDQAGgDASgSIAAAQQghAtgfAAQgOAAgJgKgAgdAAQgYAOgJAOQgLAOAAARQAAAWANAOQANAOAQAAQAXAAAkgeIAAhnQgsASgNAGg");
	this.shape_404.setTransform(144.6,376.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgZDRQgJgCgdgJQgdgKgIAAQgIAAgEAFQgEAEgCAOIgLAAIAAiLIALAAQAIAsANAWQANAWAbAOQAbAOAfAAQAlAAAWgUQAVgTAAgbQAAgPgIgPQgIgQgRgNQgMgIgzgeQg0gcgVgRQgWgRgMgVQgLgVAAgZQAAgrAhggQAigfAzAAQAfAAAkAQQARAHAHAAQAIAAAFgFQAEgEADgOIALAAIAACLIgLAAQgFgogOgYQgOgXgZgPQgagNgaAAQgfAAgVATQgUATAAAXQAAATANAPQATAXBEAlQA4AfAVAPQAVAPALAXQALAWAAAYQAAAugjAhQgkAhg4AAQgRAAgPgCg");
	this.shape_405.setTransform(113.3,369.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393}]}).to({state:[]},80).wait(170));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap5J7QkHkIAAlzQAAlzEHkGQEGkHFzAAQF0AAEGEHQEHEGAAFzQAAFzkHEIQkGEGl0AAQlzAAkGkGg");
	mask.setTransform(275,158.3);

	// World
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-82,161.5,1,1,0,0,0,340,86.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-73.1},0).wait(1).to({x:-64.2},0).wait(1).to({x:-55.3},0).wait(1).to({x:-46.4},0).wait(1).to({x:-37.5},0).wait(1).to({x:-28.6},0).wait(1).to({x:-19.7},0).wait(1).to({x:-10.8},0).wait(1).to({x:-1.9},0).wait(1).to({x:7},0).wait(1).to({x:15.9},0).wait(1).to({x:24.8},0).wait(1).to({x:33.7},0).wait(1).to({x:42.6},0).wait(1).to({x:51.5},0).wait(1).to({x:60.4},0).wait(1).to({x:69.3},0).wait(1).to({x:78.2},0).wait(1).to({x:87.1},0).wait(1).to({x:96},0).wait(1).to({x:104.9},0).wait(1).to({x:113.8},0).wait(1).to({x:122.7},0).wait(1).to({x:131.6},0).wait(1).to({x:140.5},0).wait(1).to({x:149.4},0).wait(1).to({x:158.3},0).wait(1).to({x:167.2},0).wait(1).to({x:176.1},0).wait(1).to({x:185},0).wait(1).to({x:193.9},0).wait(1).to({x:202.8},0).wait(1).to({x:211.7},0).wait(1).to({x:220.6},0).wait(1).to({x:229.5},0).wait(1).to({x:238.4},0).wait(1).to({x:247.3},0).wait(1).to({x:256.2},0).wait(1).to({x:265.1},0).wait(1).to({x:274},0).wait(1).to({x:282.9},0).wait(1).to({x:291.8},0).wait(1).to({x:300.7},0).wait(1).to({x:309.6},0).wait(1).to({x:318.5},0).wait(1).to({x:327.4},0).wait(1).to({x:336.3},0).wait(1).to({x:345.1},0).wait(1).to({x:354},0).wait(1).to({x:362.9},0).wait(1).to({x:371.8},0).wait(1).to({x:380.7},0).wait(1).to({x:389.6},0).wait(1).to({x:398.5},0).wait(1).to({x:407.4},0).wait(1).to({x:416.3},0).wait(1).to({x:425.2},0).wait(1).to({x:434.1},0).wait(1).to({x:443},0).wait(1).to({x:451.9},0).wait(1).to({x:460.8},0).wait(1).to({x:469.7},0).wait(1).to({x:478.6},0).wait(1).to({x:487.5},0).wait(1).to({x:496.4},0).wait(1).to({x:505.3},0).wait(1).to({x:514.2},0).wait(1).to({x:523.1},0).wait(1).to({x:532},0).wait(1).to({x:540.9},0).wait(1).to({x:549.8},0).wait(1).to({x:558.7},0).wait(1).to({x:567.6},0).wait(1).to({x:576.5},0).wait(1).to({x:585.3},0).wait(1).to({x:594.3},0).wait(1).to({x:603.2},0).wait(1).to({x:612.1},0).wait(1).to({x:621},0).to({_off:true},1).wait(170));

	// Background
	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(0,0,255,0.647)").s().p("Ap+J/QkIkJAAl2QAAl1EIkIQEJkJF1AAQF2AAEIEJQEJEIAAF1QAAF2kJEJQkIEIl2AAQl1AAkJkIg");
	this.shape_406.setTransform(275.6,157.7);

	var maskedShapeInstanceList = [this.shape_406];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_406).to({_off:true},80).wait(170));

	// Background
	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(13.2,1,1).p("Egxrgi1MBjXAAAMAAABFrMhjXAAAg");
	this.shape_407.setTransform(276,205);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("EgxrAi2MAAAhFrMBjXAAAMAAABFrg");
	this.shape_408.setTransform(276,205);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(13.2,1,1).p("EgyEgiDMBkJAAAMAAABEHMhkJAAAg");
	this.shape_409.setTransform(281.5,200);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("EgyEAiEMAAAhEHMBkJAAAMAAABEHg");
	this.shape_410.setTransform(281.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_408},{t:this.shape_407}]}).to({state:[]},80).to({state:[{t:this.shape_410},{t:this.shape_409}]},116).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(226.5,175.5,649.2,459.2);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EarthNew_atlas_.png?1493436873743", id:"EarthNew_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;