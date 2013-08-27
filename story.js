(function () {
    CAAT.Story = function () {
        CAAT.Story.superclass.constructor.call(this);
        return this;
    }

    CAAT.Story.prototype = {
        
        mask: null,
        text: null,
        star: null,
        initialize: function (director) {
            this.setBounds(0, 0, director.width, director.height);
			var mainDirector = director;
            var textImg = director.getImage('story_tx');
            var dw = director.width;
            var dh = director.height;
            var w = textImg.width;
            var h = textImg.height;

            var bgX = dw;
            this.bg = new CAAT.ActorContainer().setBounds(0, 0, dw, dh);
            var bgImg = director.getImage('story_bg');
            this.bg.paint = function (director, time) {
                var ctx = director.ctx;
                ctx.drawImage(bgImg, bgX, 0);
                ctx.drawImage(bgImg, bgX - bgImg.width, 0);
                bgX--;
                if (bgX <= 0) bgX = bgImg.width;
            }

            this.text = new CAAT.ActorContainer().setBounds((dw - w) / 2, dh / 2, w, h).setBackgroundImage(textImg);
            var path = new CAAT.PathUtil.LinearPath().
                setInitialPosition((dw - w) / 2, dh / 2).
                setFinalPosition((dw - w) / 2, - h);
            var textBehavior = new CAAT.PathBehavior().
                setValues(path).
                setFrameTime(director.time, 30000).
                addListener({
                    behaviorExpired: function (director, time) {
                        
                    }
                })

            this.mask = new CAAT.ActorContainer().
                setBounds(0, 0, dw, dh).
                setBackgroundImage(director.getImage('mask'));
            this.text.addBehavior(textBehavior);
            this.addChild(this.bg);
            this.addChild(this.text);
            this.addChild(this.mask);
            return this;
        },

        paint: function (director, time) {
            CAAT.Story.superclass.paint.call(this, director, time);

            var ctx = director.ctx;
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, director.width, director.height);
        }
    }
    extend(CAAT.Story, CAAT.ActorContainer);
})();

(function () {
    CAAT.GameOverContainer = function () {
        CAAT.GameOverContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.GameOverContainer.prototype = {
        mask: null,
        text: null,
        star: null,
        initialize: function () {
            this.setBounds(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            return this;
        },

        paint: function (director, time) {
            CAAT.Story.superclass.paint.call(this, director, time);
            var img = director.getImage('gameover');
            var ctx = director.ctx;
            ctx.drawImage(img, 0, 0);
        }
    }
    extend(CAAT.GameOverContainer, CAAT.ActorContainer);
})();

(function () {
    CAAT.WinContainer = function () {
        CAAT.GameOverContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.WinContainer.prototype = {

        mask: null,
        text: null,
        star: null,
        initialize: function () {
            this.setBounds(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            return this;
        },

        paint: function (director, time) {
            CAAT.Story.superclass.paint.call(this, director, time);
            var img = director.getImage('win');
            var ctx = director.ctx;
            ctx.drawImage(img, 0, 0);
        }
    }
    extend(CAAT.WinContainer, CAAT.ActorContainer);
})();