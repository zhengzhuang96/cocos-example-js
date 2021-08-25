cc.Class({
	extends: cc.Component,

	properties: {
		title: cc.Node,
		loginBut: cc.Node,
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {

		this.menuBox = this.node.getComponent(cc.Animation)
		this.menuBox.goToMenuListEnd = function () {
			this.menuBox.node.children[0].active = false
			this.menuBox.node.children[1].active = false
			this.menuBox.node.children[2].active = true
		}.bind(this)
	},

	// start () { },

	// 进入游戏列表
	goToGameListButton: function () {
		this.menuBox.play('GameHide')
	},

	// 返回首页
	goToHome: function () {
		this.menuBox.node.children[2].active = false
		this.menuBox.node.children[0].active = true
		this.menuBox.node.children[1].active = true
		this.menuBox.play('GameShow')
	},

	onClickToTop: function () {

	},

	// 场景跳转
	sceneClickJump: function (event, url) {
		cc.log("场景跳转")
		cc.log(url)
		cc.director.loadScene("daxigua");
	},

	// update (dt) {},
});