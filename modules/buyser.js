class Buyser {
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.havelyal = 0;
       this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
       ];
    }
    chooseCell(character) {
       var found = [];
       for (var i in this.directions) {
          var x = this.directions[i][0];
          var y = this.directions[i][1];
          if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
             if (matrix[y][x] == character) {     //stugelu jamanak characteri poxaren en index htmli mej stugman exanakov kanenq lesson 4i 20 slaydi exacy
                found.push(this.directions[i]);
             }
          }
       }
       return found;
    }
 
    mul() {
       this.havelyal++;
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
 
       
       if (newCell && grassEaterArr.length == 0) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = 5;
 
          var newGrass = new Grass(newX, newY, this.index);
          grassArr.push(newGrass);
          this.havelyal++;
 
       }
    }
 
 } 