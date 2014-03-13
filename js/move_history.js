function MoveHistory() {
  this.initialTiles = [];

  this.moves = [];
};

MoveHistory.prototype.addInitialTile = function(tile) {
  console.log('adding initial tile', tile);
  this.initialTiles.push(tile);
};

MoveHistory.prototype.recordMove = function(direction, newTile) {
  console.log('recordingMove', direction, newTile);
  this.moves.push({
    direction: direction,
    newTile: newTile
  });
};
