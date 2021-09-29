class Gishatich {
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.energy = 12;
       this.index = index;
       this.directions = [];
    }
 
    chooseCell(character) {
       this.getNewCoordinates();
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
 
    getNewCoordinates() {
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
 
    mul() {
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
 
       if (newCell && this.energy >= 12) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          var newGishatich = new Gishatich(newX, newY, this.index);
          GishatichArr.push(newGishatich);
       }
    }
 
    move() {
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
 
       if (newCell) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          matrix[this.y][this.x] = 0;
 
          this.x = newX;
          this.y = newY;
 
          this.energy--;
       }
 
       this.die();
    }
 
 
    eat() {
       var emptyCells = this.chooseCell(2);
       var newCell = random(emptyCells);
 
       if (newCell) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          matrix[this.y][this.x] = 0;
 
          this.x = newX;
          this.y = newY;
 
          this.energy++;
 
          for (var i in grassEaterArr) {
             if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
             }
 
          }
          this.mul();
       } else {
          this.move()
       }
 
    }
    die() {
       if (this.energy <= 0) {
          for (var i in GishatichArr) {
             if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
             }
          }
 
       }
    }
 
 }