var W = 16;
var H = 16;

var MOVE_SPEED = 0.5;
(function () {

  MocuGame.GBoat = function () {
    MocuGame.MocuSprite.call(this, new MocuGame.Point(0, 0), new MocuGame.Point(W, H), "boat.png")
    this.addAnimation("Dance", "0,0 0,0 1,0", 10, true)
    this.play("Dance")
    this.visible = true
    this.fillStyle = "white"

    this.moving = false
    this.actionSteps = []

    this.pixelsMoved = W
  }
  MocuGame.GBoat.prototype = new MocuGame.MocuSprite
  MocuGame.GBoat.constructor = MocuGame.GBoat

  MocuGame.GBoat.prototype.update = function (deltaT) {
    MocuGame.MocuSprite.prototype.update.call(this, deltaT)

    if (this.x < 0) {
      this.x = 0
    }
    if (this.y < 0) {
      this.y = 0
    }

    if (this.x > 128 - W) {
      this.x = 128 - W
    }

    if (this.y > 128 - H) {
      this.y = 128 - H
    }

    if (!this.moving) {
      return;
    }

    if (this.moving) {
      this.pixelsMoved -= Math.abs(this.velocity.x) + Math.abs(this.velocity.y)
      if (this.pixelsMoved <= 0) {
        this.nextMove()
      }
    }
  }

  MocuGame.GBoat.prototype.nextMove = function () {
    // If there are no actions left, stop
    if (this.actionSteps.length == 0) {
      this.moving = false
      this.velocity.x = 0
      this.velocity.y = 0
      return
    }
    var action = this.actionSteps.shift()
    this.move(action)
  }

  MocuGame.GBoat.prototype.move = function (direction) {
    this.pixelsMoved = W
    this.velocity.x = 0
    this.velocity.y = 0
    switch (direction) {
      case "LEFT":
        this.velocity.x = -MOVE_SPEED
        break
      case "RIGHT":
        this.velocity.x = MOVE_SPEED
        break
      case "UP":
        this.velocity.y = -MOVE_SPEED
        break
      case "DOWN":
        this.velocity.y = MOVE_SPEED
        break
    }
  }

  MocuGame.GBoat.prototype.reset = function () {
    this.x = 0
    this.y = 0
    this.velocity.x = 0
    this.velocity.y = 0
    this.acceleration.x = 0
    this.acceleration.y = 0

    this.actionSteps = []
    this.pixelsMoved = W
    this.moving = false
  }

  MocuGame.GFlag = function (point, color, score) {
    MocuGame.MocuSprite.call(this, point, new MocuGame.Point(W, H), "yellowflag.png")
    this.addAnimation("Yellow", "0,0 0,0 1,0 0,0 0,0 2,0", 10, true)
    this.addAnimation("Red", "0,1 0,1 1,1 0,1 0,1 2,1", 10, true)
    this.addAnimation("Rock", "0,2", 10, true)

    this.name = color
    switch (color) {
      case "blueFlag":
        this.play("Yellow")
        break
      case "redFlag":
        this.play("Red")
        break
      case "rock":
        this.fillStyle = "black"
        this.play("Rock")
        break
    }
    this.visible = true
    this.score = score
  }
  MocuGame.GFlag.prototype = new MocuGame.MocuSprite
  MocuGame.GFlag.constructor = MocuGame.GFlag


  MocuGame.GState = function () {
    MocuGame.MocuState.call(this, 60);
    this.water = new MocuGame.MocuBackground(new MocuGame.Point(32, 32), new MocuGame.Point(128, 128), "gamebg.png")
    this.water.visible = true

    this.add(this.water)

    // this.boat = new MocuGame.MocuObject(new MocuGame.Point(0, 0), new MocuGame.Point(W, H))
    // this.boat.fillStyle = "white"
    // this.boat.visible = true
    this.boat = new MocuGame.GBoat()
    this.add(this.boat)

    this.started = false;

    this.items = []
    this.score = 0;

    this.draggedObj = null
    this.dragX = 0
    this.dragY = 0
  }
  MocuGame.GState.prototype = new MocuGame.MocuState;
  MocuGame.GState.constructor = MocuGame.GState;


  MocuGame.GState.prototype.createFromBoard = function (board) {
    var self = this;
    board.objects.forEach(function (obj) {
      var x = obj.x * W
      var y = obj.y * H
      var flag = new MocuGame.GFlag(new MocuGame.Point(x, y), obj.name, SCORE_FOR_ITEM[obj.name])
      self.items.push(flag)
      self.add(flag)
    })
  }

  MocuGame.GState.prototype.createBoardFromState = function() {
    var board = new Board()

    // First set boat position
    board.agentX = Math.floor(this.boat.x / W)
    board.agentY = Math.floor(this.boat.y / H)

    // Set flag positions
    for (var i = 0; i < this.items.length; i++) {
      var flag = this.items[i]
      var item = new BoardItem(
        flag.name,
        Math.floor(flag.x / W),
        Math.floor(flag.y / H),
      )
      board.objects.push(item)
    }

    return board
  }

  MocuGame.GState.prototype.kickoff = function (start) {
    if (this.started) {
      return;
    }
    var self = this
    var promise = new Promise((resolve, reject) => {
      var node = aStar(start)
      resolve(node)
    }).then(function(node) {
      self.started = true
      var actionSteps = node.actions
      self.boat.actionSteps = actionSteps
      self.boat.moving = true
      self.boat.nextMove()
    })


  }

  MocuGame.GState.prototype.update = function (deltaT) {
    MocuGame.MocuState.prototype.update.call(this, deltaT)
    $(".score").text("Score: " + this.score)

    if (!this.boat.moving) {
      return
    }

    // Check for collisions with items
    for (var i = 0; i < this.items.length; i++) {
      var flag = this.items[i]
      if (this.boat.overlapsWith(flag)) {
        flag.exists = false
        this.score += SCORE_FOR_ITEM[flag.name]
      }

    }

    // Update the score text
  }

  MocuGame.GState.prototype.resetBoard = function () {
    this.boat.reset()
    this.boat.actionSteps = []
    this.boat.moving = false
    this.dragX = 0;
    this.dragY = 0;
    this.score = 0;
    this.draggedObj = null;
    for (var i = 0; i < this.items.length; i++) {
      var flag = this.items[i]
      this.remove(flag)
    }
    this.items = []
    start.board.agentX = 0
    start.board.agentY = 0
    placeItems(start.board)
    this.createFromBoard(start.board)
    this.started = false
  }


  MocuGame.GState.prototype.onMouse = function (pointer) {
    if (this.started) {
      return
    }
    if (pointer.isDown && this.draggedObj == null) {
      // Check if collides with boat
      if (this.boat.overlapsWith(pointer.position)) {
        this.draggedObj = this.boat
      }

      // Check if collides with any of the flags
      else {
        for (var i = 0; i < this.items.length; i++) {
          var flag = this.items[i]
          if (flag.overlapsWith(pointer.position)) {
            this.draggedObj = flag
            break
          }
        }
      }

      if (this.draggedObj != null) {
        this.dragX = this.draggedObj.x - pointer.position.x
        this.dragY = this.draggedObj.y - pointer.position.y
      }
    }
    else if (pointer.isDown && this.draggedObj != null) {
      this.draggedObj.x = pointer.position.x + this.dragX
      this.draggedObj.y = pointer.position.y + this.dragY
    }
    else if (!pointer.isDown && this.draggedObj != null) {
      this.dropObj();
    }
  }

  MocuGame.GState.prototype.dropObj = function () {
    if (this.draggedObj == null) {
      return
    }
    // Snap to grid
    this.draggedObj.x = Math.floor((this.draggedObj.x + W / 2) / W) * W
    this.draggedObj.y = Math.floor((this.draggedObj.y + H / 2) / H) * H
    this.draggedObj = null
    this.dragX = 0;
    this.dragY = 0;

    // Regenerate board
    var board = this.createBoardFromState()
    start.board = board
  }
})();

$(document).ready(function () {
  $('.point-input').change(function () {
    var value = $(this).val()
    var key = $(this).attr('pointKey')
    // console.log(value)
    // console.log(key)
    SCORE_FOR_ITEM[key] = +value
  })

  $('.start-button').click(function () {
    MocuGame.currentState.kickoff(start)
  })

  $('.reset-button').click(function () {
    MocuGame.currentState.resetBoard()
  })

  $('.pause-button').click(function () {
    MocuGame.currentState.boat.active = !MocuGame.currentState.boat.active
  })

})