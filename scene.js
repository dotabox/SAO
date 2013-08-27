(function () {
    CAAT.MenuContainer = function () {
        CAAT.MenuContainer.superclass.constructor.call(this);
        return this;   
    }
         
    CAAT.MenuContainer.prototype = {
        x: 0,
        y: 0,
        width: 0,
        hiehgt: 0,
        data: null,
        actor: null,
        selected: -1,
        current: 0,
        leftPanel: null,
        rightPanel: null,
        elapsedTime: 0,
        initialize: function (x, y, width, height, data, actor, map) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.data = data;
            this.actor = actor;
            this.panel = data.panel;
            this.items = data.items;
            for (var i = 0; i < this.panel.length; i++) {
                var rect = this.panel[i];
                var p = new CAAT.ActorContainer().setBounds(rect[0], rect[1], rect[2], rect[3]);
                this.addChild(p);
            }
            this.leftPanel = this.getChildAt(0);
            for (var i = 0; i < this.items.length; i++) {
                var rect = this.panel[0];
                if (i == this.current) {
                    var p = new CAAT.ActorSelect().
                        initialize(this.items[i], CAAT.ICON_LEFT, this.items[i], '#101010', 'bold 16px Times New Roman', null, '#F0FFF0', true).
                        setBounds(10, 80 + 40 * i, rect[2] - 40, 30);
                }
                else {
                    var p = new CAAT.ActorSelect().
                        initialize(this.items[i], CAAT.ICON_LEFT, this.items[i], '#101010', 'bold 16px Times New Roman', null, '#F0FFF0', false).
                        setBounds(10, 80 + 40 * i, rect[2] - 40, 30);
                }
                this.leftPanel.addChild(p);
            }
            this.rightPanel = this.getChildAt(1);
            var rect = this.panel[1];
            this.helpPanel = new CAAT.Help().initialize(rect[0]+50, 380, rect[2] - 80, 50, '', 4);
            this.addChild(this.helpPanel);
            this.update();
            return this;
        },

        paint: function (director, time) {
            CAAT.MenuContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            ctx.clearRect(0, 0, this.width, this.height);
            ctx.drawImage(director.getImage('menu_bg'), 0, 0);
        },

        update: function () {
            var rect = this.panel[1];
            var self = this;
            var numChild = this.rightPanel.getNumChildren();
            for (i = 0; i < numChild; i++) {
                this.rightPanel.removeLastChild();
            }

            switch (this.selected) {
                // Show menu
                case -1:
                    var partySize = 1;
					this.helpPanel.hide();
                    for (var i = 0; i < partySize; i++) {
                        var p = new CAAT.ActorContainer().setBounds(40, 80 + 120 * i, rect[2] - 65, 85);
                        p.paint = function (director, time) {
                            var face = director.getImage('face');
                            var ctx = director.ctx;
                            // draw face
                            ctx.drawImage(face, 25, 25);
                            // draw name
                            ctx.fillStyle = '#000000';
                            ctx.textBaseline = 'middle';
                            ctx.textAlign = 'left';
                            ctx.font = 'bold 16px Times New Roman';
                            ctx.fillText(self.actor.name, 30, 15);
                            var level = self.actor.level;
                            // draw text
                            ctx.drawImage(director.getImage('hp_tx'), 150, 25);
                            ctx.drawImage(director.getImage('mp_tx'), 150, 45);
                            ctx.drawImage(director.getImage('exp_tx'), 150, 65);
                            ctx.drawImage(director.getImage('lv_tx'), 350, 25);
                            ctx.fillText(level, 390, 35);


                            // draw bar 
                            var maxHP = self.actor.maxHP;
                            var maxMP = self.actor.maxMP;
                            var curHP = self.actor.currentHP;
                            var curMP = self.actor.currentMP;
                            var hpLeft = curHP / maxHP;
                            var mpLeft = curMP / maxMP;
                            var exp = self.actor.exp;

                            var hpBarWidth = director.getImage('hp_bar').width;
                            var hpBarHeight = director.getImage('hp_bar').height;
                            var expBarWidth = director.getImage('exp_bar').width;
                            var expBarHeight = director.getImage('exp_bar').height;
                            ctx.drawImage(director.getImage('hp_bar'), 200, 30);
                            ctx.drawImage(director.getImage('hp_bar'), 200, 50);
                            ctx.drawImage(director.getImage('exp_bar'), 200, 72);
                            if (hpLeft != 0) {
                                ctx.drawImage(director.getImage('hp_meter'), 0, 0, (hpLeft * hpBarWidth) >> 0, hpBarHeight,
																			 200, 30, (hpLeft * hpBarWidth) >> 0, hpBarHeight);
                            }
                            if (mpLeft != 0) {
                                ctx.drawImage(director.getImage('mp_meter'), 0, 0, (mpLeft * hpBarWidth) >> 0, hpBarHeight,
																			 200, 50, (mpLeft * hpBarWidth) >> 0, hpBarHeight);
                            }
                            if (exp != 0) {
                                ctx.drawImage(director.getImage('exp_meter'), 0, 0, (exp / 100 * expBarWidth) >> 0, expBarHeight,
																			 200, 72, (exp / 100 * expBarWidth) >> 0, expBarHeight);
                            }
                            ctx.fillStyle = '#777';
                            ctx.font = '14px Times New Roman';
                            ctx.fillText(curHP, 277, 30);
                            ctx.fillText(curMP, 277, 50);
                        };
                        this.rightPanel.addChild(p);
                    }
                    break;
                    // Show item
                case 0:
                    var actorItems = self.actor.item;
                    console.log(actorItems);
					this.helpPanel.show();
                    var icons = [];
                    var names = [];
                    var values = [];
                    var helps = [];
                    
                    var it = actorItems['item'];
                    var wp = actorItems['weapon'];
					
                    for (key in it) {
						if(it[key]>0){
							icons.push(itemData[key].id);
							names.push(itemData[key].name);
							helps.push(itemData[key].help);
							values.push(it[key]);
						}
                    }

                    for (key in wp) {
						if(wp[key]>0){
							icons.push(weaponData[key].id);
							names.push(weaponData[key].name);
							helps.push(weaponData[key].help);
							values.push(wp[key]);
						}
                    }
                    
                    var p = new CAAT.ActorSelectArea().
                        setBounds(40, 150, rect[2] - 60, rect[3] - 170).
                        initialize(10, 2, icons, names, values, helps, '#000000', '16px Times New Roman', '#AAFFFA', false);
                    this.rightPanel.addChild(p);
                    

                    var p2 = new CAAT.ActorContainer().setBounds(40, 50, rect[2] - 60, 90);
                    p2.paint = function (director, time) {
                        var ctx = director.ctx;
                        ctx.drawImage(director.getImage('equip_tx'), 0, 30);
                        ctx.drawImage(director.getImage('dmg_tx'), rect[2] - 190, 30);
                        ctx.fillStyle = '#000000';
                        ctx.fillRect(10, this.height - 2, this.width - 20, 2);
                    }
                    this.rightPanel.addChild(p2);
                    this.helpPanel.setText(p.getHelp(p.selected));
					var weapon = self.actor.weapon;
                    var p1 = new CAAT.ActorSelect().
                        initialize(weapon.id, CAAT.ICON_LEFT, weapon.name, '#000000', '16px Times New Roman', weapon.dmg, "#AAFFFA", false).
                        setBounds(40, 90, rect[2] - 160, 50);
                    this.rightPanel.addChild(p1);
                    break;
                    // Show skill
                case 1:
                    var actorSkills = self.actor.skill;
					this.helpPanel.show();
                    var icons = [];
                    var names = [];
                    var helps = [];
                    var values = [];
                    for (var i = 0; i < actorSkills.length; i++) {
                        icons.push(skill[actorSkills[i]].id);
                        names.push(skill[actorSkills[i]].name);
                        helps.push(skill[actorSkills[i]].help);
                        values.push(skill[actorSkills[i]].cost);
                    }
                    var p = new CAAT.ActorSelectArea().
                        setBounds(40, 100, rect[2] - 60, rect[3] - 120).
						initialize(10, 1, icons, names, values, helps, '#000000', '20px Times New Roman', '#AAFFFA', false);
                    this.rightPanel.addChild(p);
                    var mp = new CAAT.ActorContainer().
						setBounds(rect[2] - 60, 70, 30, 30);
                    mp.paint = function (director, time) {
                        var ctx = director.ctx;
                        ctx.font = '20px Times New Roman';
                        ctx.fillStyle = "#000";
                        ctx.textAlign = "left";
                        ctx.textBaseline = 'top';
                        ctx.fillText("MP", 0, 0);
                    }
                    this.rightPanel.addChild(mp);
                    this.helpPanel.setText(p.getHelp(p.selected));
                    break;
                    // Show status
                case 2:
					this.helpPanel.show();
					this.helpPanel.setText("Kirito: Nhân vật chính của câu chuyện, bị đưa vào thế giới của Sword Art Offline và trở thành một tay chơi solo xuất sắc.");
                    var p = new CAAT.ActorContainer().
                        setBounds(20, 80, rect[2] - 40, rect[3] - 120);
                    p.paint = function (director, time) {
                        var ctx = director.ctx;
                        var maxHP = self.actor.maxHP;
                        var maxMP = self.actor.maxMP;
                        var curHP = self.actor.currentHP;
                        var curMP = self.actor.currentMP;
                        var dmg = self.actor.dmg;
                        var exp = self.actor.exp;
                        var weapon = self.actor.weapon;
                        var pointLeft = self.actor.pointLeft;
                        ctx.fillStyle = '#000000';
                        ctx.textBaseline = 'middle';
                        ctx.textAlign = 'left';
                        ctx.font = 'bold 16px Times New Roman';

                        ctx.drawImage(director.getImage('char_full'), 10, 10);
                        ctx.drawImage(director.getImage('info_tx'), 270, 3);
                        ctx.fillText('Kirito', 315, 35);
                        ctx.drawImage(director.getImage('hp_tx'), 310, 45);
                        ctx.drawImage(director.getImage('mp_tx'), 310, 65);
                        ctx.drawImage(director.getImage('dmg_tx'), 310, 85);
                        ctx.drawImage(director.getImage('exp_tx'), 310, 105);

                        ctx.fillStyle = '#000000';
                        ctx.textBaseline = 'middle';
                        ctx.textAlign = 'left';
                        ctx.font = 'bold 16px Times New Roman';
                        ctx.fillText(curHP + "/" + maxHP, 350, 55);
                        ctx.fillText(curMP + "/" + maxMP, 350, 75);
                        ctx.fillText(dmg + ' + ' + weapon.dmg, 350, 95);
                        ctx.fillText(exp + "%", 350, 115);
                        ctx.fillText("Điểm còn lại: " + pointLeft, 310, 136);

                        ctx.drawImage(director.getImage('equip_tx'), 270, 165);
                        ctx.drawImage(director.getImage(weapon.id), 295, 195);
                        ctx.fillText(weapon.name, 330, 210);
                    }
                    this.rightPanel.addChild(p);
                    var pointLeft = self.actor.pointLeft;

                    if (pointLeft > 0) {
                        for (var i = 0; i < 3; i++) {
                            var addActor = new CAAT.ActorContainer().setId(i).
                                setBounds(420, 45 + 20 * i, 16, 16);
                            addActor.paint = function (director, time) {
                                var ctx = director.ctx;
                                ctx.drawImage(director.getImage('add_icon'), 0, 0);
                            }

                            addActor.mouseClick = function (event) {
                                function doAction(index) {
                                    switch (index) {
                                        case 0: self.actor.maxHP += 17; self.actor.currentHP += 17; break;
                                        case 1: self.actor.maxMP += 13; self.actor.currentMP += 13; break;
                                        case 2: self.actor.dmg += 9; break;
                                    }
                                }
                                self.actor.pointLeft--;
                                if (self.actor.pointLeft == 0) {
                                    p.emptyChildren();
                                }
                                doAction(this.getId());
                            }
                            p.addChild(addActor);
                        }
                    }
                    break;
                    // Back, change scene only
                case 3:
                    this.helpPanel.hide();
                    break;
                case 4:
                    this.helpPanel.hide();
                    var p = new CAAT.ActorContainer().setBounds(145, 145, 200, 30);
                    p.paint = function (director, time) {
                        var ctx = director.ctx;
                        ctx.fillStyle = '#000000';
                        ctx.textBaseline = 'top';
                        ctx.textAlign = 'center';
                        ctx.font = 'bold 16px Times New Roman';
                        ctx.fillText("Bạn có thực sự muốn thoát", 100, 0);
                    }
                    var exitTtems = ["Có", "Không"];
                    var area = new CAAT.ActorSelectArea().
                        setBounds(205, 180, 80, 50).
                        initialize(exitTtems.length, 1, null, exitTtems, null, null, '#000000', '16px Times New Roman', '#AAFFFA', false);
                    area.setSelectedTo(0);
                    this.rightPanel.addChild(area);
					this.rightPanel.addChild(p);
                    break;
            }
        },

        setSelectedTo: function (index) {
            if (index == this.current) return;
            if (index < 0 || index >= this.items.length) return;
            this.leftPanel.getChildAt(this.current).removeSelected();
            this.leftPanel.getChildAt(index).setSelected();
            this.current = index;
        },

        mouseClick: function (event) {
        }
    }
    extend(CAAT.MenuContainer, CAAT.ActorContainer);
})();

(function () {
    CAAT.DEBUG_BATTLE_SCENE = false;
    CAAT.BattleContainer = function () {
        CAAT.BattleContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.BattleContainer.prototype = {
        actor: null,
        //party: null,
        enemys: null,
		selectedEnemy: null,
		exp : 0,
		drop: null,
		dropWeapon: null,
        background: null,
        actionName: null,
        actionBox: null,
        itemsBox: null,
        skillsBox: null,
        current: 0,
		battleOver : null,
        initialize: function (actor, enemys, background) {
			this.battleOver = false;
            this.actor = actor;
            this.enemys = enemys;
            this.background = background;
            this.actionName = ['Tấn công', 'Kỹ năng', 'Vật phẩm'];
            this.actionHelp = ['Tấn công mục tiêu', 'Sử dụng kỹ năng các nhân', 'Sử dụng các vật phẩm'];
            this.actionBox = new CAAT.ActorSelectArea().
                setBounds(500, 170, 100, 100).
                initialize(3, 1, null, this.actionName, null, this.actionHelp, '#000000', '20px Times New Roman', '#00FFFF', false, '#FF9007', 'back_menu');
            this.actionBox.setSelectedTo(0);

            var actorSkills = this.actor.skill;
            var icons = [];
            var names = [];
            var helps = [];
            var values = [];
			var disabled = [];
            for (var i = 0; i < actorSkills.length; i++) {
                icons.push(skill[actorSkills[i]].id);
                names.push(skill[actorSkills[i]].name);
                helps.push(skill[actorSkills[i]].help);
                values.push(skill[actorSkills[i]].cost);
				if(actor.currentMP<skill[actorSkills[i]].cost){
					disabled.push(1);
				}
				else{
					disabled.push(0);
				}
            }
            this.skillsBox = new CAAT.ActorSelectArea().
                setBounds(180, 130, 300, 150).
                initialize(5, 1, icons, names, values, helps, '#000000', '20px Times New Roman', '#AAFFFA', false, '#FF9007', 'back_menu',disabled,"#AAAAAA");
            this.skillsBox.setSelectedTo(0);

            var items = this.actor.item.item;
            var weapons = this.actor.item.weapon;
            var icons = [];
            var names = [];
            var helps = [];
            var values = [];
            for (key in items) {
				if(items[key]>0){
					icons.push(itemData[key].id);
					names.push(itemData[key].name);
					helps.push(itemData[key].help);
					values.push(items[key]);
				}
            }
            for (key in weapons) {
				if(weapons[key]>0){
					icons.push(weaponData[key].id);
					names.push(weaponData[key].name);
					helps.push(weaponData[key].help);
					values.push(weapons[key]);
				}
			}
            this.itemsBox = new CAAT.ActorSelectArea().
                setBounds(100, 130, 380, 200).
                initialize(10, 2, icons, names, values, helps, '#000000', '18px Times New Roman', '#00FFFF', false, '#FF9007', 'back_menu');
            this.itemsBox.setSelectedTo(0);
			this.addActionBox();
            actor.addTo(this);
            this.addHpBar(actor);
			this.exp = 1;
			this.drop = [0,0];
			this.dropWeapon = [];
            for (var i = 0; i < enemys.length; i++) {
                enemys[i].addTo(this);
				//this.addHpBar(enemys[i]);
				this.exp+= ((enemys[i].exp)/Math.pow(1.5,actor.level))>>0;
				if(Math.random()<enemys[i].dropRate/100){
					if(typeof enemys[i].drop === "number"){
						this.drop[enemys[i].drop]++;
					}
					else{
						var weaponIndex = parseInt(enemys[i].drop.substr(1));
						this.dropWeapon.push(weaponIndex);
					}
				}
            }
			if(this.exp>100){
				this.exp = 100;
			}
			
			this.selectedEnemy = (enemys.length/2)>>0;
            
            return this;
        },
           
        paint: function(director, time) {
            CAAT.BattleContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            ctx.strokeStyle = '#000000';
            ctx.drawImage(this.background, 0, 0);
            if (CAAT.DEBUG_BATTLE_SCENE) {
                for (var i = 0; i < this.width; i += 50) {
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, this.height);
                }
                for (var i = 0; i < this.height; i += 50) {
                    ctx.moveTo(0, i);
                    ctx.lineTo(this.width, i);
                }
                ctx.stroke();
             }
        },

        addActionBox: function () {
            this.addChild(this.actionBox);
            return this;
        },

        addSkillBox: function () {
            
            this.addChild(this.skillsBox);
            return this;
        },

        addItemsBox: function () {   
            this.addChild(this.itemsBox);
            return this;
        },
		setSelectedTo: function(index){
			this.removeLastChild();
			this.selectedEnemy = index;
			this.select(index);
		},
		select: function(index){
			var actor = this.enemys[index];
			var p = new CAAT.ActorContainer().setBounds(actor.positionX + 96 / 2 - 5, actor.positionY - 20, 10, 10);
            p.paint = function (director, time) {
                var img = director.getImage('select');
                var ctx = director.ctx;
                ctx.drawImage(img, 0, 0,15,15);
				
				ctx.translate(-25,35);
				var curHP = actor.currentHP;
                var maxHP = actor.maxHP;
				var curMP = actor.currentMP;
				var maxMP = actor.maxMP;
                var hpLeft = curHP / maxHP;
				var mpLeft = curMP / maxMP;
                var ctx = director.ctx;
				ctx.strokeStyle = '#FF0000';
				ctx.strokeRect(0,0,60,5);
				ctx.strokeStyle = '#0000FF';
				ctx.strokeRect(0,10,60,5);
                if (hpLeft >= 0) {
                    ctx.fillStyle = '#FF0000';
                    ctx.fillRect(0, 0, hpLeft * 60, 5);
                }
				if (mpLeft >= 0) {
					ctx.fillStyle = '#0000FF';
                    ctx.fillRect(0, 10, mpLeft * 60, 5);
				}
				
				ctx.font = "16px Times New Roman";
				ctx.fillStyle = '#008800';
				var text = actor.name+" Level "+actor.level;
				ctx.fillText(text,-25,-10);
				ctx.fillStyle = '#FF0000';
				ctx.fillText(curHP+"/"+maxHP,60,5);
				ctx.fillText("HP",-25,5);
				ctx.fillStyle = '#0000FF';
				ctx.fillText(curMP+"/"+maxMP,60,20);
				ctx.fillText("MP",-25,20);
				
            }
			this.addChild(p);
		},
        addHpBar: function (actor) {
			var p1 = new CAAT.ActorContainer().setBounds(actor.positionX + 96 / 2 - 30, actor.positionY - 5, 60, 5);
            p1.paint = function (director, time) {
                var curHP = actor.currentHP;
                var maxHP = actor.maxHP;
				var curMP = actor.currentMP;
				var maxMP = actor.maxMP;
                var hpLeft = curHP / maxHP;
				var mpLeft = curMP / maxMP;
                var ctx = director.ctx;
				ctx.strokeStyle = '#FF0000';
				ctx.strokeRect(0,0,60,5);
				ctx.strokeStyle = '#0000FF';
				ctx.strokeRect(0,10,60,5);
                if (hpLeft >= 0) {
                    ctx.fillStyle = '#FF0000';
                    ctx.fillRect(0, 0, hpLeft * 60, 5);
                }
				if (mpLeft >= 0) {
					ctx.fillStyle = '#0000FF';
                    ctx.fillRect(0, 10, mpLeft * 60, 5);
				}
				
				ctx.font = "16px Times New Roman";
				ctx.fillStyle = '#008800';
				var text = actor.name+" Level "+actor.level;
				ctx.fillText(text,-25,-10);
				ctx.fillStyle = '#FF0000';
				ctx.fillText(curHP+"/"+maxHP,60,5);
				ctx.fillText("HP",-25,5);
				ctx.fillStyle = '#0000FF';
				ctx.fillText(curMP+"/"+maxMP,60,20);
				ctx.fillText("MP",-25,20);
            }
            this.addChild(p1);
        },
		
        removeActionBox: function () {
            this.removeChild(this.actionBox);
            return this;
        },

        removeSkillBox: function () {
            this.removeChild(this.skillsBox);
            return this;
        },

        removeItemsBox: function () {
            this.removeChild(this.itemsBox);
            return this;
        },

        addAnimation: function (animation) {
            this.addChild(animation);
        },
		monsterDead: function(time){
			var select = this.selectedEnemy;
			var deadMonster = this.getChildAt(2+select);
			this.removeChildAt(2+select);
			this.enemys.splice(select,1);
			this.selectedEnemy = ((this.enemys.length)/2)<<0;
			var disappear = new CAAT.AlphaBehavior().setValues(1,0).setFrameTime(time,1000).setCycle(false).
				addListener({
					behaviorExpired: function(director,time){
						deadMonster.emptyBehaviorList();
					}
				});
			deadMonster.setDiscardable(true).enableEvents(false).addBehavior(disappear);
			this.addChild(deadMonster);
		},
		endBattle: function(timeStart){
			var self = this;
			var run = false;
			var lvlup = false;
			var drawItem = false;
			monsterSize = 96;
			for(var i=0;i<this.drop.length;i++){
				this.actor.item.item[i]+=this.drop[i];
			}
			var weaponDrop = this.dropWeapon;
			var weaponActor = this.actor.item.weapon;
			for(var i=0;i<weaponDrop.length;i++){
				if(typeof weaponActor[weaponDrop[i]] == "undefined"){
					weaponActor[weaponDrop[i]] = 1;
				}
				else{
					weaponActor[weaponDrop[i]]++;
				}
			}
			var exp = new CAAT.ActorContainer().setBounds(200,400,100,10);
			exp.paint = function(director,time){
				var ctx = director.ctx;
				var line = 0;
				ctx.fillStyle = "#FFFF00";
				ctx.strokeStyle = "#FFFF00";
				ctx.strokeRect(0,0,200,10);
				var curExp = self.actor.exp;
				ctx.fillRect(0,0,200*curExp/100,10);
				ctx.font = "16px Times New Roman";
				ctx.fillText("EXP",-10,-10);
				ctx.fillText(curExp,205,10);
				
				ctx.font = "26px Times New Roman";
				ctx.fillStyle = "#001099";
				if(self.exp>0){
					self.actor.gainExp(1);
					self.exp--;
					if(self.actor.exp == 0){
						lvlup = true;
					}
				}
				else{
					drawItem = true;
					self.battleOver = true;
				}
				
				if(lvlup){
					if(!run){
						run = true;
						var level = new CAAT.ActorContainer().
							setBounds(self.actor.positionX-characterSize/2,self.actor.positionY-60,50,50).
							setBackgroundImage(director.getImage("lvlup"),true);
						var skillImage = director.getImage("addskill");
						var add = [false,false,false,false];
						var alphaBehavior = new CAAT.AlphaBehavior().setValues(0,1).setFrameTime(director.time-timeStart,1000).
							addListener({
								behaviorExpired: function(director,time){
									level.removeBehaviour(alphaBehavior);
									alphaBehavior.setValues(1,0).setFrameTime(time,1000).
										addListener({
											behaviorExpired: function(director,time){
												level.removeBehaviour(alphaBehavior);
												if(((self.actor.level%3)==0)&&(self.actor.level/3<5)){
													level.setBackgroundImage(skillImage,true);
													alphaBehavior.setValues(0,1).setFrameTime(time,1000).
														addListener({
															behaviorExpired: function(director,time){
																level.removeBehaviour(alphaBehavior);
																alphaBehavior.setValues(1,0).setFrameTime(time,1000).
																	addListener({
																		behaviorExpired: function(director,time){
																			level.emptyBehaviorList();
																		}
																	});
																if(!add[3]){
																	level.addBehavior(alphaBehavior);
																	add[3] = true;
																}
															}
														});
													if(!add[2]){
														level.addBehavior(alphaBehavior);
														add[2] = true;
													}
												}
											}
										});
									if(!add[1]){
										level.addBehavior(alphaBehavior);
										add[1] = true;
									}
								}
							});
						if(!add[0]){
							level.addBehavior(alphaBehavior);	
							self.addChild(level);
							add[0]= true;
						}
					}
					ctx.fillText("Bạn đã nâng lên level "+self.actor.level,-80,line*25-150);
					line++;
					if((self.actor.level%3)==0){
						var skillIndex = self.actor.level/3;
						if(skillIndex<5){
							ctx.fillText("Bạn học được kỹ năng "+skill[skillIndex+1].name,-80,line*25-150);
							line++;
						}
					}
				}
				if(drawItem){
					for(var i=0;i<self.drop.length;i++){
						if(self.drop[i]>0){
							var itemName = itemData[i].name;
							ctx.fillText("Bạn nhận được "+self.drop[i]+" "+itemName,-80,line*25-150);
							line++;
						}
					}
					
					for(var i=0;i<weaponDrop.length;i++){
						var weaponName = weaponData[weaponDrop[i]].name;
						ctx.fillText("Bạn nhận được " +weaponName,-80,line*25-150);
						line++;
					}
				}	
			}
			this.addChild(exp);
		} 
    }
    extend(CAAT.BattleContainer, CAAT.ActorContainer);
})();

(function () {
    CAAT.ActorSelectArea = function () {
        CAAT.ActorSelectArea.superclass.constructor.call(this);
        return this;
    }
    CAAT.ActorSelectArea.prototype = {
        maxmaxRow: 0,
        col: 0,
        texts: null,
        icons: null,
        textColor: '#FFFFFF',
        font: '14px Times New Roman',
        selected: 0,
        current: 0,
        backgroundColor: null,
        bgImage: null,
		
        initialize: function (maxRow, col, icons, texts, values, helps, textColor, font, selectedColor, selected, backgroundColor, bgImage, disabled, disabledColor) {
            this.maxRow = maxRow;
            this.col = col;
            this.icons = icons;
            this.texts = texts;
            this.helps = helps;
            var itemW = this.width / col;
            var itemH = this.height / maxRow;

            this.backgroundColor = backgroundColor;
            this.bgImage = bgImage;

            for (var i = 0; i < texts.length; i++) {
                var x = (i % col) * itemW + 2;
                var y = ((i / col) >> 0) * itemH + 2;
                var icon;
                var value;

                if (icons == null || typeof icons[i] === 'undefined') {
                    icon = null;
                }
                else {
                    icon = icons[i];
                }

                if (values == null || typeof values[i] == 'undefined') {
                    value = null;
                }
                else {
                    value = values[i];
                }

				var usedColor = textColor;
				if(typeof disabled != "undefined"){
					if(disabled[i]==1){
						usedColor = disabledColor;
					}
					else{
						usedColor = textColor;
					}
				}
                var p = new CAAT.ActorSelect().
                            initialize(icon, CAAT.ICON_LEFT, texts[i], usedColor, font, value, selectedColor, selected).
                            setBounds(x, y, itemW - 10, itemH - 4);
                this.addChild(p);
            }
            this.setSelectedTo(0);

            return this;
        },

        paint: function (director, time) {
            CAAT.BattleContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            if (typeof this.backgroundColor !== 'undefined') {
                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(0, 0, this.width, this.height);
            }
            if (typeof this.bgImage !== 'undefined') {
                var image = new CAAT.SpriteImage().initialize(director.getImage(this.bgImage), 1, 1);
                image.paintAtRect(director, time, 0, 0, this.width, this.height);
            }
        },
		removeSelectedFromList: function (){
			var select = this.selected;
			this.setSelectedTo(0);
			this.removeChildAt(select);
			var itemW = this.width / this.col;
            var itemH = this.height / this.maxRow;
			this.texts.splice(select,1)
			for(var i=select;i<this.texts.length;i++){
				var x = (i % this.col) * itemW + 2;
                var y = ((i / this.col) >> 0) * itemH + 2;
				this.getChildAt(i).setBounds(x,y,itemW-10,itemH-4);
			}
			if(select == 0){
				this.setSelectedTo(0);
			}
		},
        setSelectedTo: function (index) {
            this.getChildAt(this.selected).removeSelected();
            var child = this.getChildAt(index);
            if (typeof child === 'undefined') return;
            child.setSelected();
            this.selected = index;
        },

        getHelp: function (index) {
            if (index >= this.helps.length || index < 0) {
                return "";
            } else {
                return this.helps[index];
            }
            
        },

        setBounds: function (x, y, w, h) {
            CAAT.ActorSelectArea.superclass.setBounds.call(this, x, y, w, h);
            return this;
        }
    }

    extend(CAAT.ActorSelectArea, CAAT.ActorContainer);
})();

(function () {
    CAAT.ICON_LEFT = 0;
    CAAT.ICON_RIGHT = 1;
    CAAT.ActorSelect = function () {
        CAAT.ActorSelect.superclass.constructor.call(this);
        return this;
    }

    CAAT.ActorSelect.prototype = {
        icon: null,
        iconPos: CAAT.ICON_LEFT,
        text: '',
        textColor: '#FFFFFF',
        textPos: null,
        font: '12px Arial',
        value: null,
        selectedColor: '#000000',
        selected: false,
        behavior: null,

        initialize: function (icon, iconPos, text, textColor, font, value, selectedColor, selected, textPos) {
            this.icon = icon;
            this.iconPos = iconPos;
            this.text = text;
            this.textColor = textColor;
            this.textPos = textPos;
            if (typeof this.textPos === 'undefined') {
                this.textPos = LEFT;
            }
            this.value = value;
            this.selectedColor = selectedColor;
            this.font = font;
            this.behavior = new CAAT.AlphaBehavior().setValues(1, 0.2).setPingPong().setFrameTime(0, 2000).setCycle(true);
            if (selected) {
                this.setSelected();
            }
            return this;
        },
        setBounds : function(x, y, w, h) {
            CAAT.ActorSelect.superclass.setBounds.call(this, x, y, w, h);
            return this;
        },
        addBehavior: function (behavior) {
            CAAT.ActorSelect.superclass.addBehavior.call(this, behavior);
            return this;
        },
		setTextColor: function(color){
			this.textColor = color;
		},
		setValues: function(value){
			this.value = value;
		},
        setSelected: function () {
            this.selected = true;
            this.addBehavior(this.behavior);
            return this;
        },
        removeSelected: function () {
            this.selected = false;
            this.alpha = 1;
            this.removeBehaviorById(0);
            return this;
        },

        paint: function (director, time) {
            CAAT.ActorSelect.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            if (this.selected) {
                ctx.fillStyle = this.selectedColor;
                ctx.fillRect(0, 0, this.width, this.height);
            }
            ctx.textBaseline = 'middle';
            if (this.icon == null) {
                ctx.fillStyle = this.textColor;
                ctx.font = this.font;
                ctx.textAlign = this.textPos;
                switch (this.textPos) {
                    case LEFT:
                        ctx.fillText(this.text, 10, this.height / 2);
                        break;
                    case CENTER: 
                        ctx.fillText(this.text, this.width / 2, this.height / 2);
                        break;
                    case RIGHT:
                        ctx.fillText(this.text, this.width - 10, this.height / 2);
                        break;
                }
            
               
                if (this.value != null) {
                    ctx.textAlign = 'right';
                    ctx.fillText(this.value, this.width - 10, this.height / 2);
                }
            }
            else {
                var image = director.getImage(this.icon);
                var w = image.width;
                var h = image.height;
                ctx.fillStyle = this.textColor;
                ctx.font = this.font;
                ctx.textAlign = 'left';

                if (this.iconPos == CAAT.ICON_LEFT) {
                    ctx.drawImage(image, 5, (this.height - h) / 2);
                    ctx.fillText(this.text, 10 + w, this.height / 2);
                    if (this.value != null) {
                        ctx.textAlign = 'right';
                        ctx.fillText(this.value, this.width - 10, this.height / 2);
                    }
                }
                else {
                    ctx.drawImage(image, this.width - w - 5, (this.height - h) / 2);
                    ctx.fillText(this.text, 5, this.height / 2);
                    if (this.value != null) {
                        ctx.textAlign = 'right';
                        ctx.fillText(this.value, this.width  - w  - 10, this.height / 2);
                    }
                }
            }
            
        },

        mouseClick: function (event) {
        }
    };
    extend(CAAT.ActorSelect, CAAT.ActorContainer);	
})();
(function () {
    CAAT.DmgContainer = function () {
        CAAT.DmgContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.DmgContainer.prototype = {
        texts: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,

        initialize: function (text, x, y) {
            var length = text.length;
            this.texts = [];
            for (var i = 0; i < length; i++) {
                this.texts.push(parseInt(text[i]));
            }
            this.x = x;
            this.y = y;
            this.width = 16 * length;
            this.height = 22;
            this.setBounds(this.x, this.y, this.width, this.height);
            return this;
        },

        paint: function (director, time) {
            CAAT.DmgContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            var img = director.getImage('dmg');
            for(var i=0; i<this.texts.length; i++) {
                ctx.drawImage(img, this.texts[i] * 22, 0, 22, 22, i*14, 0, 22, 22);
            }
        },
		
        active: function (time) {
            var alphaBehavior = new CAAT.AlphaBehavior().setValues(1, 0).setFrameTime(time, 1000);
            var path = new CAAT.PathUtil.LinearPath().setInitialPosition(this.x, this.y).setFinalPosition(this.x, this.y - 30);
            var pathBehavior = new CAAT.PathBehavior().setValues(path).setFrameTime(time, 1000);
            this.
                setDiscardable(true).
                enableEvents(false).
                setFrameTime(time, 1000).
                addBehavior(alphaBehavior).
                addBehavior(pathBehavior);
        }
		
    }
    extend(CAAT.DmgContainer, CAAT.ActorContainer);
})();

(function () {
    CAAT.StartContainer = function () {
        CAAT.StartContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.StartContainer.prototype = {
        state: null,
        startPanel: null,
        selectPanel: null,
        initialize: function () {
            this.setBounds(0, 0, CANVAS_WIDTH-10, CANVAS_HEIGHT-10);
            this.state = 0;
            this.startPanel = new CAAT.ActorSelect().
                initialize(null, null, 'Start', '#000000', 'bold 24px Times New Roman', null, '#AAFFFA', true, CENTER).
                setBounds(245, 270, 150, 40);
            var startTtems = ["New game", "Option", "Credits"];
            this.selectPanel = new CAAT.ActorSelectArea().
                setBounds(250, 240, 140, 100).
                initialize(startTtems.length, 1, null, startTtems, null, null, '#000000', '18px Times New Roman', '#AAFFFA', false);
            this.selectPanel.setSelectedTo(0);
            this.addChild(this.startPanel);
            return this;
        },
        swapSelect: function () {
            this.removeChildAt(0);
            if (this.state == 0) {
                this.state = 1;
                this.addChild(this.selectPanel);
            }
            else {
                this.state = 0;
                this.addChild(this.startPanel);
            }
        },

        paint: function (director, time) {
            CAAT.StartContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            ctx.drawImage(director.getImage('start_bg'), 0, 0);
        }
    }
    extend(CAAT.StartContainer, CAAT.ActorContainer);
})();

(function () {
    CAAT.Help = function () {
        CAAT.Help.superclass.constructor.call(this);
        return this;
    }

    CAAT.Help.prototype = {
        textX: 0,
        textWidth: 0,
        speed: 2,
        text: null,
        initialize: function (x, y, w, h, text, speed) {
            this.setBounds(x, y, w, h);
            this.text = text;
            if (typeof speed !== 'undefined') {
                this.speed = speed;
            }
            return this;
        },

        paint: function (director, time) {
            var ctx = director.ctx;
			
            ctx.fillStyle = '#000000';
            ctx.strokeStyle = '#000000';
			
            ctx.lineWidth = 2;
            ctx.font = 'bold 16px Times New Roman';
            ctx.textAlign = CAAT.TEXT_LEFT;
            ctx.textBaseline = 'middle';
            this.textWidth = ctx.measureText(this.text).width;
            ctx.fillText("HELP", 10, 0);
			///*
			ctx.fillRect(0,0,5,2);
			ctx.fillRect(60,0,this.width-60,2);
			ctx.fillRect(0,0,2,this.height);
			ctx.fillRect(0,this.width,2,this.height);
			ctx.fillRect(0,this.height-2,this.width,2);
			ctx.fillRect(this.width-2,0,2,this.height);
			//*/
			/*
            ctx.moveTo(60, 0);
            ctx.lineTo(this.width, 0);
            ctx.lineTo(this.width, this.height);
            ctx.lineTo(0, this.height);
            ctx.lineTo(0, 0);
            ctx.lineTo(5, 0);
            ctx.stroke();
			//*/
            ctx.font = '16px Times New Roman';
            wrapText(ctx, this.text, 15, 20, this.width - 5, 16);
			
        },

        setText: function (text) {
            this.text = text;
            return this;
        },

        show: function () {
            this.setVisible(true);
            return this;
        },

        hide: function () {
            this.setVisible(false);
            return this;
        }
    }
    extend(CAAT.Help, CAAT.ActorContainer);
})();

(function () {
    CAAT.FACE_LEFT = 0;
    CAAT.FACE_RIGHT = 1;

    CAAT.DISABLE_NAME = 0;
    CAAT.ENABLE_NAME = 1;

    CAAT.COMIC_DIALOG = 0;
    CAAT.NORMAL_DIALOG = 1;

    CAAT.Dialog = function () {
        CAAT.Dialog.superclass.constructor.call(this);
        return this;
    }

    CAAT.Dialog.prototype = {
        faceMode: null,
        enableName: null,
        text: null,
        texts: null,
        textIndex: 0,
        actor: null,
        dialogMode: null,
        callback: null,
        font: '20px Times New Roman',
        boundStrokeStyle: '#FFAFFA',
        bgFillStyle: 'rgba(220, 200, 220, 0.6',
        bgFillStyle: 'rgba(220, 200, 255, 0.6)',
        textFillStyle: '#000000',
        textAlign: LEFT,
        textBaseLine: 'top',
        initialize: function (texts, actor, enableFace, faceMode, enableName, dialogMode, callback) {
            this.texts = texts;


            if (actor != null || typeof actor !== 'undefined') {
                this.actor = actor;
            }

            if (enableFace) {
                this.faceMode = faceMode;
            }
            this.enableName = enableName;
            this.dialogMode = dialogMode;
            this.callback = callback;
            return this;
        },

        paint: function (director, time) {
            CAAT.Dialog.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
            var drawX;
            ctx.textAlign = this.textAlign;
            ctx.textBaseline = this.textBaseLine;
            ctx.lineWidth = 2;
            ctx.font = this.font;
            ctx.strokeStyle = this.boundStrokeStyle;
            ctx.fillStyle = this.bgFillStyle;
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.fillStyle = this.textFillStyle;
            this.text = this.texts[this.textIndex];
            if (this.actor == null) return;
            var faceImg = director.getImage(this.actor.face);
            switch (this.faceMode) {
                case CAAT.FACE_LEFT:
                    switch (this.textAlign) {
                        case LEFT:
                            drawX = 10 + faceImg.width;
                            break;
                        case RIGHT:
                            drawX = this.width - 10;
                            break;
                        case CENTER:
                            drawX = ((this.width - faceImg.width) / 2 + faceImg.width) >> 0;
                            break;
                    }
					if(this.enableName){
						ctx.fillText(this.actor.name,5,0);
					}
                    ctx.drawImage(faceImg, 5, (this.height - faceImg.height) / 2);
                    wrapText(ctx, this.text, drawX, 20, this.width - 10 - faceImg.width, 16);
                    break;
                case CAAT.FACE_RIGHT:
                    switch (this.textAlign) {
                        case LEFT:
                            drawX = 5;
                            break;
                        case RIGHT:
                            drawX = this.width - 10 - faceImg.width;
                            break;
                        case CENTER:
                            drawX = ((this.width - faceImg.width) / 2) >> 0;
                            break;
                    }
                    ctx.drawImage(faceImg, this.width - 5 - faceImg.width, (this.height - faceImg.height) / 2);
                    wrapText(ctx, this.text, drawX, 5, this.width - 10 - faceImg.width, 16);
                    break;
            }
            
            ctx.strokeRect(0, 0, this.width, this.height);
            if (this.textIndex < this.texts.length - 1) {
                ctx.moveTo(this.width / 2 - 4, this.height - 10);
                ctx.lineTo(this.width / 2 + 4, this.height - 10);
                ctx.lineTo(this.width / 2, this.height - 5);
                ctx.fill();
            }
        },

        setTextAlign: function (textAlign) {
            this.textAlign = textAlign;
            return this;
        },

        setText: function (text) {
            this.text = text;
            return this;
        },

        setFaceMode: function (faceMode) {
            this.faceMode = faceMode;
            return this;
        }
    }
    extend(CAAT.Dialog, CAAT.ActorContainer);
})();

(function () {
    wrapText = function (context, text, x, y, maxWidth, lineHeight) {
        var line = '';
        var words = text.split(' ');

        for (var i = 0; i < words.length; i++) {
            var testLine = line + words[i] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth) {
                context.fillText(line, x, y);
                line = words[i] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, x, y);
    }
})();