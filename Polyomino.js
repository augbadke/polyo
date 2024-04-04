class Polyomino {
  static boardState;
  constructor(board, boardState, polyomino, gridSize, color) {
    this.board = board;
    Polyomino.boardState = boardState;
    this.polyomino = polyomino;
    this.gridSize = gridSize;
    this.piece = null;
    this.blocks = [];
    this.numCols = Math.round(this.board.clientWidth / this.gridSize);
    this.numRows = Math.round(this.board.clientHeight / this.gridSize);
    this.polyominoInicialHeight = this.polyomino.length * this.gridSize;
    this.polyominoInicialWidth = this.polyomino[0].length * this.gridSize;
    this.color = color;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.lastTap = 0;
    this.isInBoard = false;
    this.prevState = false;
    this.isInitialPos = true;
    this.pieceInBoardIndex = [];

    this.createPiece();
  }

  createPiece() {
    this.piece = document.createElement('div');
    this.pieceRotate = document.createElement('div');

    this.polyomino.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell > 0) {
          const block = document.createElement('div');
          block.classList.add('onePiece');
          block.style.left = cellIndex * this.gridSize + 'px'; // Posicionamento relativo ao grupo
          block.style.top = rowIndex * this.gridSize + 'px';
          block.style.pointerEvents = 'auto';
          this.pieceRotate.appendChild(block);
          this.blocks.push(block);

          block.addEventListener('mousedown', this.startDrag);
          block.addEventListener('touchstart', (e) => {this.startDrag(e); e.preventDefault()}, { passive: false });
          block.addEventListener('touchend', this.endDrag);
          block.addEventListener('dblclick', this.rotatePiece);
          block.addEventListener('touchend', this.rotatePieceMobile);
        }
      });
    });

    this.piece.classList.add('pieceReferencePoint');

    this.pieceRotate.classList.add("pieceGroup")
    this.pieceRotate.style.transformOrigin=`${this.polyominoInicialWidth/2}px ${this.polyominoInicialHeight/2}px`;
    this.pieceRotate.style.width = `${this.polyomino[0].length*this.gridSize}px`
    this.pieceRotate.style.height = `${this.polyomino.length*this.gridSize}px`
    this.pieceRotate.style.pointerEvents = 'none';
    this.piece.style.pointerEvents = 'none';
    
    this.piece.appendChild(this.pieceRotate);
    this.pieceStart = document.getElementById('align_pieces');
    this.pieceStart.appendChild(this.piece);
    this.blocks.forEach((block) => {
      block.style.backgroundColor = this.color[0];
    });
  }

  startDrag = (e) => {
    document.body.style.overflow = 'hidden';
    this.piece.style.zIndex = Polyomino.nextZIndex++;

    if (!Polyomino.isTimerOn) {
      Polyomino.isTimerOn = true;
      Polyomino.initalTime = new Date;
    };

    if (e.type === 'mousedown') {
      this.touchStartX = e.clientX;
      this.touchStartY = e.clientY;
    } else if (e.type === 'touchstart') {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    };

    if (this.isInitialPos) {
      const boardRect = this.board.getBoundingClientRect();
      const pieceRect = this.piece.getBoundingClientRect();
      this.pieceStart.removeChild(this.piece);
      this.board.appendChild(this.piece);

      this.piece.style.position = "absolute";
      this.piece.style.left = `${pieceRect.left - boardRect.left}px`;
      this.piece.style.top = `${pieceRect.top - boardRect.top}px`;
      this.isInitialPos = false;
    }

    this.initialX = parseInt(this.piece.style.left);
    this.initialY = parseInt(this.piece.style.top);

    document.addEventListener('mousemove', this.dragPiece);
    document.addEventListener('mouseup', this.endDrag);
    document.addEventListener('touchmove', this.dragPiece);
  }

  dragPiece = (e) => {
    let currentX, currentY;

    if (e.type === 'mousemove') {
      currentX = e.clientX;
      currentY = e.clientY;
    } else if (e.type === 'touchmove') {
      currentX = e.touches[0].clientX;
      currentY = e.touches[0].clientY;
    }

    const offsetX = currentX - this.touchStartX;
    const offsetY = currentY - this.touchStartY;

    this.piece.style.left = parseInt(this.piece.style.left) + offsetX + 'px';
    this.piece.style.top = parseInt(this.piece.style.top) + offsetY + 'px';

    this.touchStartX = currentX;
    this.touchStartY = currentY;
  }

  endDrag = () => {
    document.body.style.overflow = '';
    document.removeEventListener('mousemove', this.dragPiece);
    document.removeEventListener('mouseup', this.endDrag);
    document.removeEventListener('touchmove', this.dragPiece);
    const boardRect = this.board.getBoundingClientRect();
    const pieceRect = this.piece.getBoundingClientRect();

    this.pieceInBoardIndex.forEach((row) => {
      Polyomino.boardState[row[0]][row[1]] = 0;
    })

    this.pieceInBoardIndex = [];

    this.blocks.forEach((block) => {
      block.style.backgroundColor = this.color[0];
    });

    if (pieceRect.x <= boardRect.right && pieceRect.x >= (boardRect.left-20) && pieceRect.y <= boardRect.bottom && pieceRect.y >= (boardRect.top-20)) {
      this.isInBoard = true;
      if (this.isInBoard !== this.prevState) {
        Polyomino.pieceInBoard++;
        this.prevState = true;
      }
      this.updateBoardState();
    } else {
      this.isInBoard = false;
      if (this.isInBoard !== this.prevState) {
        Polyomino.pieceInBoard--;
        this.prevState = false;
      }
    }
  }

  rotatePiece = () => {
    this.pieceInBoardIndex.forEach((row) => {
      Polyomino.boardState[row[0]][row[1]] = 0;
    })

    this.pieceInBoardIndex = [];

    this.blocks.forEach((block) => {
      block.style.backgroundColor = this.color[0];
    });

    this.polyomino = this.rotateMatrix(this.polyomino);
    const polyominoHeight = this.polyomino.length * this.gridSize;
    const translate = (this.polyominoInicialHeight - polyominoHeight) / 2;

    const rotateDeg = (parseInt(this.pieceRotate.style.transform.split('(')[1]) || 0);
    this.pieceRotate.style.transform = `rotate(${rotateDeg + 90}deg) translateX(${-translate * Math.cos(rotateDeg * (Math.PI / 180))}px) translateY(${-translate * Math.cos(rotateDeg * (Math.PI / 180))}px)`;

    this.updateBoardState();
  }

  rotatePieceMobile = () => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this.lastTap;
    if (tapLength < 300 && tapLength > 0) {
      this.rotatePiece()
    } else {
      this.lastTap = currentTime;
    }
  }

  rotateMatrix(matrix) {
    const rotatedMatrix = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < cols; i++) {
      rotatedMatrix.push([]);
      for (let j = rows - 1; j >= 0; j--) {
        rotatedMatrix[i].push(matrix[j][i]);
      }
    }
    return rotatedMatrix;
  };

  updateBoardState() {
    const closestX = Math.round(parseInt(this.piece.style.left) / this.gridSize) * this.gridSize;
    const closestY = Math.round(parseInt(this.piece.style.top) / this.gridSize) * this.gridSize;

    const i = (closestY/this.gridSize)
    const j = (closestX/this.gridSize)

    const nonZeros = this.getNonZeros(this.polyomino)
    const Boardvalues = nonZeros[0].map((_, index) => {
      const row = nonZeros[0][index]+i;
      const col = nonZeros[1][index]+j;
      if (row < this.numRows && col < this.numCols) {
        return Polyomino.boardState[row][col];
      }
    });

    const condition1 = (element) => element + i< this.numRows;
    const condition2 = (element) => element + j< this.numCols;
    const condition3 = (element) => element == 0;

    if (nonZeros[0].every(condition1) && nonZeros[1].every(condition2) && Boardvalues.every(condition3)) {
      nonZeros[0].map((_, index) => {
        const row = nonZeros[0][index]+i;
        const col = nonZeros[1][index]+j;
        Polyomino.boardState[row][col] = 1;
        this.pieceInBoardIndex.push([row,col])
      });
      this.piece.style.left = closestX + 'px';
      this.piece.style.top = closestY + 'px';
      this.blocks.forEach((block) => {
        block.style.backgroundColor = this.color[1];
      });
      if (typeof this.onBoardStateChange === 'function') {
          this.onBoardStateChange();
      }
    }
  };

  setOnBoardStateChange(callback) {
    this.onBoardStateChange = callback;
  };

  getNonZeros(matrix) {
    const nonZeroPositions = [[], []];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] != 0) {
              nonZeroPositions[0].push(i);
              nonZeroPositions[1].push(j);
          }
      }
  }

    return nonZeroPositions;
  };
}

Polyomino.isTimerOn = false;

Polyomino.initalTime = null;

Polyomino.nextZIndex = 1;

Polyomino.pieceInBoard = 0;