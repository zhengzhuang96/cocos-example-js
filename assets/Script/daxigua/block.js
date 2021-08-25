var game = require("game");

cc.Class({
  extends: cc.Component,

  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact: function (contact, selfCollider, otherCollider) {
    var _t = this

    // 如果是大西瓜就成功
    if (selfCollider.node.name == "block_11") {
      return
    }

    //是否碰撞到其他水果
    if (otherCollider.node.group == "fruit") {

      // 判断是否过线
      var game = cc.find('Canvas').getComponent('game')
      game.crosslineState(selfCollider.node.y)
      // console.log(selfCollider.node.y)

      //两个水果编号一样
      if (selfCollider.node.name == otherCollider.node.name) {

        // return
        // 先销毁当前节点
        var node = this.node;
        node.destroy();
        contact.disabledOnce = true;


        //下面的水果碰撞上面的水果跳过
        if (selfCollider.node.y < otherCollider.node.y) {
          // console.log('下面的水果碰撞上面的水果跳过')
          return;
        }

        switch (otherCollider.node.name) {
          case "block_1":
            game.createRandomBlock(2, selfCollider.node)
            break;
          case "block_2":
            game.createRandomBlock(3, selfCollider.node)
            break;
          case "block_3":
            game.createRandomBlock(4, selfCollider.node)
            break;
          case "block_4":
            game.createRandomBlock(5, selfCollider.node)
            break;
          case "block_5":
            game.createRandomBlock(6, selfCollider.node)
            break;
          case "block_6":
            game.createRandomBlock(7, selfCollider.node)
            break;
          case "block_7":
            game.createRandomBlock(8, selfCollider.node)
            break;
          case "block_8":
            game.createRandomBlock(9, selfCollider.node)
            break;
          case "block_9":
            game.createRandomBlock(10, selfCollider.node)
            break;
          case "block_10":
            game.createRandomBlock(11, selfCollider.node)
            break;
          default:
            break;
        }
      }
    }
  },

  // 只在两个碰撞体结束接触时被调用一次
  // onEndContact: function (contact, selfCollider, otherCollider) {
  // },

  // 每次将要处理碰撞体接触逻辑时被调用
  // onPreSolve: function (contact, selfCollider, otherCollider) {
  //   // console.log("每次将要处理碰撞体接触逻辑时被调用")
  //   // console.log(selfCollider)
  //   // console.log(otherCollider)
  // },

  // 每次处理完碰撞体接触逻辑时被调用
  // onPostSolve: function (contact, selfCollider, otherCollider) {
  //   console.log("每次处理完碰撞体接触逻辑时被调用-------")
  //   // console.log(selfCollider)
  //   // console.log(otherCollider)
  // },
})