(function () {
    CAAT.DEBUG_VIEWPORT = 1;
    CAAT.TileMap = function () {
        CAAT.TileMap.superclass.constructor.call(this);
        return this;
    };

    CAAT.TileMap.prototype = {
        canvas: null,
        ctx: null,
        name: '',
        directionY: 1,
        data: null,
        collisionData: null,
		gate: null,
        create: function (director, name, tileImage, data, collisionData) {
            this.tileSize = TILE_SIZE;
            this.tileImages = new CAAT.SpriteImage().initialize(tileImage, tileImage.height / this.tileSize, tileImage.width / this.tileSize);
            this.name = name;
            this.data = data;
            this.collisionData = collisionData;
            this.mapHeight = this.data.length;
            this.mapWidth = this.data[0].length;
            this.viewport = new CAAT.Viewport().initialize(director.width, director.height, 40, 40);
            this.viewport.setMapSize(this.mapWidth * TILE_SIZE, this.mapHeight * TILE_SIZE);
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d'); 
			this.gate = [];
			for(var i=0;i<collisionData.length;i++){
				for(var j=0;j<collisionData[0].length;j++){
					if(collisionData[i][j]>10){
						this.gate.push([collisionData[i][j],i,j]);
					}
				}
			}
            return this;
        },

        paint: function (director, time) {
            CAAT.TileMap.superclass.paint.call(this, director, time);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '12px arial';
            this.viewport.setContext(this.ctx);

            if (CAAT.DEBUG_VIEWPORT) {
                this.i += 4 * this.directionX;
                this.j += 4 * this.directionY;
                if (this.i < 0 || this.i > this.mapWidth * TILE_SIZE) {
                    this.directionX = -this.directionX;
                }
                if (this.j < 0 || this.j > this.mapHeight * TILE_SIZE) {
                    this.directionY = -this.directionY;
                }
                this.ctx.fillRect(this.i - 5, this.j - 5, 10, 10);
                this.viewport.setViewportTo(this.i, this.j);
            }
            
            var vx = this.viewport.viewportX;
            var vy = this.viewport.viewportY;
            
            var vw = this.viewport.viewportWidth;
            var vh = this.viewport.viewportHeight;

            var startCol = Math.floor(vx / this.tileSize);
            var startRow = Math.floor(vy / this.tileSize);

            var col = Math.floor(vw / this.tileSize);
            var row = Math.floor(vh / this.tileSize);


            for (var i = startRow; i <= startRow+row+1; i++) {
                for (var j = startCol; j <= startCol + col + 1; j++) {
				this.tileImages.paintTile(this.ctx, 0, j * TILE_SIZE, i * TILE_SIZE); 
                    if (j >= this.mapWidth || i >= this.mapHeight) continue;
                    if (this.data[i][j] != -1) {
						//console.log(this.data[i][j]);
                        this.tileImages.paintTile(this.ctx, this.data[i][j], j * TILE_SIZE, i * TILE_SIZE); 
                    }
                    if (this.showMode == TILE_MODE) {
                        this.ctx.fillText(this.data[i][j], j * TILE_SIZE + 14, i * TILE_SIZE + 16);
                    }
                    else {
                        if (this.showMode == DIRECTION_MODE) {
                            this.ctx.fillText(this.collisionData[i][j], j * TILE_SIZE + 12, i * TILE_SIZE + 18);
                        }
                    }
                }
            }
        },
		/*
        mouseClick: function (mouseEvent) {
            if (this.showMode < DIRECTION_MODE) this.showMode++;
            else this.showMode = DEFAULT_MODE;
        }
		*/
    };
    extend(CAAT.TileMap, CAAT.Actor);
})();

(function () {
    CAAT.Viewport = function () {
        return this;
    }
    CAAT.Viewport.prototype = {
        viewportX: 0,
        viewportY: 0,
        viewportWidth: 0,
        viewportHeight: 0,
        triggerWidth: 0,
        triggerHeight: 0,
        mapWidth: 0,
        mapHeight: 0,
        // Triggle from 0 to 50%
        initialize: function (viewportWidth, viewportHeight, triggerWidth, triggerHeight) {
            this.viewportX = 0;
            this.viewportY = 0;
            this.viewportWidth = viewportWidth;
            this.viewportHeight = viewportHeight;

            this.triggerWidth = (viewportWidth * triggerWidth / 100) >> 0;
            this.triggerHeight = (viewportHeight * triggerHeight / 100) >> 0;

            return this;
        },

        setContext: function (ctx) {
            ctx.translate(-this.viewportX, -this.viewportY);
            return this;
        },

        setMapSize: function (mapW, mapH) {
            this.mapWidth = mapW;
            this.mapHeight = mapH;
            return this;
        },

        setViewportTo: function (x, y) {
            var vx = this.viewportX;
            var vy = this.viewportY;
            var vw = this.viewportWidth;
            var vh = this.viewportHeight;
            var tw = this.triggerWidth;
            var th = this.triggerHeight;
            var _x = x - vx;
            var _y = y - vy;

            var incX = 0, incY = 0;
            if (_x < tw || _x > vw - tw) {
                incX = _x < vw / 2 ? _x - tw :  _x - (vw - tw);
            }
            if (_y < th || _y > vh - th) {
                incY = _y < vh / 2 ? _y - th : _y - (vh - th);
            }
            vx += incX;
            vy += incY;

            if (incX === 0 && incY === 0) {
                return;
            }
            if (vx < 0) {
                vx = 0;
            } else if (vx > this.mapWidth - vw) {
                vx = this.mapWidth - vw;
            }

            if (vy < 0) {
                vy = 0;
            } else if (vy > this.mapHeight - vh) {
                vy = this.mapHeight - vh;
            }

            this.viewportX = vx;
            this.viewportY = vy;
            return this;
        }
    }
})();