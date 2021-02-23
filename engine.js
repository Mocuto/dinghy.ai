BOARD_WIDTH = 8
BOARD_HEIGHT = 8


SCORE_FOR_ITEM = {
  blueFlag: 1,
  redFlag: 10,
  rock: -2,
}

BoardItem = function (name, x, y) {
  this.name = name
  this.x = x
  this.y = y
  this.toBeDeleted = false
}

Board = function () {
  this.agentX = 0
  this.agentY = 0
  this.score = 0
  this.objects = []
}

isLocationValid = function(board, x, y) {
  if (x == 0 && y == 0) {
    return false
  }
  if (board.objects.length == 0) {
    return true
  }
  var dist = getClosestObject(board, x, y)
  return dist >= 2
}

getValidPosition = function(board) {
  var foundValid = false
  while(true) {
    var x = Math.floor(Math.random() * Math.floor(BOARD_WIDTH))
    var y = Math.floor(Math.random() * Math.floor(BOARD_HEIGHT))

    if (isLocationValid(board, x, y)) {
      return {
        x: x,
        y: y,
      }
    }
  }
}

placeItems = function(board) {
  board.objects = []

  // Place blue flags
  pos = getValidPosition(board)
  board.objects.push(new BoardItem("blueFlag", pos.x, pos.y))

  pos = getValidPosition(board)
  board.objects.push(new BoardItem("blueFlag", pos.x, pos.y))

  // Place red flag
  pos = getValidPosition(board)
  board.objects.push(new BoardItem("redFlag", pos.x, pos.y))

  // Place rocks
  pos = getValidPosition(board)
  board.objects.push(new BoardItem("rock", pos.x, pos.y))

  pos = getValidPosition(board)
  board.objects.push(new BoardItem("rock", pos.x, pos.y))

  pos = getValidPosition(board)
  board.objects.push(new BoardItem("rock", pos.x, pos.y))

  pos = getValidPosition(board)
  board.objects.push(new BoardItem("rock", pos.x, pos.y))
}

cloneBoard = function (board) {
  var newBoard = new Board()
  newBoard.agentX = board.agentX
  newBoard.agentY = board.agentY
  newBoard.score = board.score

  newBoard.objects = []
  board.objects.forEach(function (obj) {
    newBoard.objects.push(new BoardItem(
      obj.name,
      obj.x,
      obj.y,
    ))
  })
  return newBoard
}

euclideanDist = function (x1, y1, x2, y2) {
  return Math.sqrt(
    Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
  )
}

manhattanDist = function (x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

getClosestObject = function (board, x, y) {
  if (board.objects.length == 0) {
    return 0
  }

  var closest = null;
  var minDist = 99999;

  board.objects.forEach(function (obj) {
    dist = euclideanDist(x, y, obj.x, obj.y)
    if (dist < minDist && SCORE_FOR_ITEM[obj.name] > 0) {
      minDist = dist
      closest = obj
    }
  })
  return minDist
}

getClosestObjectManhattan = function (board, x, y) {
  if (board.objects.length == 0) {
    return 0
  }

  var closest = null;
  var minDist = 99999;

  board.objects.forEach(function (obj) {
    dist = manhattanDist(x, y, obj.x, obj.y)
    if (dist < minDist && SCORE_FOR_ITEM[obj.name] > 0) {
      minDist = dist
      closest = obj
    }
  })
  return minDist
}

Node = function (board, actions, depth) {
  this.board = board
  this.actions = actions
  this.h = heuristic(board)
  this.g = depth
  this.f = this.h + (this.g / 10)
}

isTerminal = function (board) {
  return board.objects.filter(function (obj) {
    return SCORE_FOR_ITEM[obj.name] > 0
  }).length == 0
}

heuristic = function (board) {
  var dist = -10 + getClosestObjectManhattan(board, board.agentX, board.agentY)
  if (board.objects.length > 1) {
    dist = 0;
  }
  return (dist / 100)-board.score
}

fixGameConstraints = function (board) {
  if (board.agentX < 0) {
    board.agentX = 0
  }
  if (board.agentX >= BOARD_WIDTH) {
    board.agentX = BOARD_WIDTH - 1
  }
  if (board.agentY < 0) {
    board.agentY = 0
  }
  if (board.agentY >= BOARD_HEIGHT) {
    board.agentY = BOARD_HEIGHT - 1
  }
  return board
}

checkCaptures = function (board) {
  for (var i = 0; i < board.objects.length; i++) {
    var obj = board.objects[i]
    if (obj.x == board.agentX && obj.y == board.agentY) {
      obj.toBeDeleted = true
    }
  }
}

removeCapturesAndUpdateScore = function (board) {
  checkCaptures(board)

  // Update the score
  board.objects.forEach(function (obj) {
    if (obj.toBeDeleted) {
      board.score += SCORE_FOR_ITEM[obj.name]
    }
  })

  // Remove old objects
  board.objects = board.objects.filter(function (obj) {
    return !obj.toBeDeleted
  })
  return board
}


move = function (board, xv, yv) {
  var newBoard = cloneBoard(board)
  newBoard.agentX += xv
  newBoard.agentY += yv
  newBoard = fixGameConstraints(newBoard)
  newBoard = removeCapturesAndUpdateScore(newBoard)
  return newBoard
}

moveLeft = function (board) {
  return move(board, -1, 0)
}

moveRight = function (board) {
  return move(board, 1, 0)
}

moveUp = function (board) {
  return move(board, 0, -1)
}

moveDown = function (board) {
  return move(board, 0, 1)
}

ACTIONS = [
  [moveLeft, "LEFT"],
  [moveRight, "RIGHT"],
  [moveUp, "UP"],
  [moveDown, "DOWN"],
]

getChildren = function (node) {
  return ACTIONS.map(function (pair) {
    var action = pair[0]
    var actionName = pair[1]
    var actions = node.actions.concat(actionName)

    var board = action(node.board)
    var depth = node.g + 1
    return new Node(board, actions, depth)
  })
}

aStar = function (start) {
  var maxIter = 100000
  var queue = new PriorityQueue({
    comparator: function (nodeA, nodeB) {
      return nodeA.f - nodeB.f
    }
  })
  queue.queue(start)
  while (queue.length > 0) {
    var lowest = queue.dequeue()
    if (isTerminal(lowest.board) || maxIter <= 0) {
      return lowest
    }

    var children = getChildren(lowest)
    // console.log(children)
    children.forEach(function (child) {
      queue.queue(child)
    })

    maxIter--;
  }
}

start = new Node(new Board(), [], 0)