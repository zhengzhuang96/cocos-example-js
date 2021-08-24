// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
	extends: cc.Component,

	properties: {
		title: cc.Node,
		loginBut: cc.Node
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {

		this.loginBut = this.node.getComponent(cc.Animation)
		// this.title.titleToTopPlayEnd = function () {
		// 	cc.log("结束")
		// }
	},

	// start () { },

	// 进入游戏列表
	goToGameListButton: function () {
		cc.log('进入游戏列表按钮')
		// var titleNode = this.node.getComponent(cc.Label)
		// cc.log(titleNode)
		this.loginBut.play('GameHide')
	},

	onClickToTop: function () {

	}

	// update (dt) {},
});