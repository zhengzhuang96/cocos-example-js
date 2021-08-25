// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
	extends: cc.Component,

	properties: {
		block_show: {
			type: cc.Node,
			default: null
		},
		block_arr: {
			type: [cc.Prefab],
			default: []
		},
		line_show: {
			type: cc.Node,
			default: null
		},
		gg_show: {
			type: cc.Node,
			default: null
		},
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		var self = this
		this.block_show.active = false

		this.setTouch()
		this.line_show.opacity = 0


		this.createHeadFruit()

		// 开启物理系统
		cc.director.getPhysicsManager().enabled = true;

		this.time = this;
	},

	// 屏幕触摸
	setTouch: function () {
		// 使用事件名来注册
		this.node.on('touchstart', function (event) {
			var pos_touch = event.getLocation()
			// 世界坐标转换成节点坐标
			pos_touch = this.node.convertToNodeSpaceAR(pos_touch)
			this.positionY = 450;
			this.block_show.setPosition(cc.v2(pos_touch).x, this.positionY)
		}, this);
		this.node.on('touchmove', function (event) {
			var pos_touch = event.getLocation()
			// 世界坐标转换成节点坐标
			pos_touch = this.node.convertToNodeSpaceAR(pos_touch)
			// this.block_show.setPosition(cc.v2(pos_touch))
			this.block_show.setPosition(cc.v2(pos_touch).x, this.positionY)
		}, this);
		this.node.on('touchend', function (event) {
			this.block_show.active = false
			var pos_touch = event.getLocation()
			// 世界坐标转换成节点坐标
			pos_touch = this.node.convertToNodeSpaceAR(pos_touch)
			this.block_show.setPosition(cc.v2(pos_touch).x, this.positionY)
			this.createBlock(pos_touch)
		}, this);
		this.node.on('touchcancel', function (event) {
			console.log('touchcancel');
		}, this);
	},

	// 在顶部创建一个新的水果
	createHeadFruit: function () {
		this.block_random = Math.floor(Math.random() * 5) + 2
		this.block_show.active = true

		var children = this.block_show.children
		for (let i = 0; i < children.length; i++) {
			if (children[i].name == this.block_random) {
				children[i].active = true
			} else {
				children[i].active = false
			}
		}

		var pos_touch = this.node.convertToNodeSpaceAR({
			x: 100,
			y: 100
		})
		this.positionY = 450;
		this.block_show.setPosition(cc.v2(pos_touch).x, this.positionY)
	},

	// 创建元素块
	createBlock: function (pos_touch) {
		var node_block = cc.instantiate(this.block_arr[this.block_random]) // 从 Prefab 实例化出新节点
		node_block.parent = this.node // 从资源中添加到node中
		node_block.setPosition(pos_touch.x, this.positionY)
		this.time.schedule(function () {
			cc.log('123123123')
			this.createHeadFruit()
		}, 0.5, 0);
	},


	// 创建固定位置固定元素的元素块
	createRandomBlock: function (num, pos_touch) {
		var node_block = cc.instantiate(this.block_arr[num]) // 从 Prefab 实例化出新节点
		node_block.parent = this.node // 从资源中添加到node中
		node_block.setPosition(pos_touch)
	},

	// 判断是否过线
	crosslineState(fruitsY) {
		if (fruitsY > this.line_show.y) {
			// console.log("过线了")
			this.gg_show.active = true
			this.node.off('touchstart')
			this.node.off('touchmove')
			this.node.off('touchend')
			this.node.off('touchcancel')
		}
	},

	update(dt) { // 每秒运行60次
		// console.log(this.block_show.y)
		// if (this.block_show.y > 300) {
		// 	this.createHeadFruit()
		// }
	},
});