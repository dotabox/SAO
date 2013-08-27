dataMonster = {
	"length": 10,
	0: {"name" : "Gà Trống Biến Dị", "id" : 0,"icon": "monster1","baseHP": 100,"baseMP": 50, "baseDmg": 10, "exp": 20,"drop": 0,"rate":30},
	1: {"name" : "Kỵ Sĩ Cưỡi Chó", "id" : 1,"icon": "monster2","baseHP": 125,"baseMP": 60, "baseDmg": 13,"exp": 21.5,"drop":"w2","rate":30},
	2: {"name" : "Thủy Lam Bọt", "id" : 2,"icon": "monster3","baseHP": 150,"baseMP": 70, "baseDmg": 16,"exp": 23,"drop":1,"rate":40},
	3: {"name" : "Mị Hoặc Yêu Hoa", "id" : 3,"icon": "monster4","baseHP": 175,"baseMP": 80, "baseDmg": 19, "exp": 24.5,"drop":0,"rate":45},
	4: {"name" : "Chó Lửa Dễ Thương", "id" : 4,"icon": "monster5","baseHP": 200,"baseMP": 90, "baseDmg": 22, "exp": 26,"drop":"w4","rate":25},
	5: {"name" : "Dơi Hút Máu", "id" : 5,"icon": "monster6","baseHP": 225,"baseMP": 100, "baseDmg": 25, "exp": 27.5,"drop":0,"rate":60},
	6: {"name" : "Phù Thủy Cưỡi Chổi", "id" : 6,"icon": "monster7","baseHP": 250,"baseMP": 110, "baseDmg": 28, "exp": 29,"drop": 1,"rate":80},
	7: {"name" : "Khủng Long Viễn Cổ", "id" : 7,"icon": "monster8","baseHP": 275,"baseMP": 120, "baseDmg": 31, "exp": 30.5,"drop":0,"rate":75},
	8: {"name" : "Băng Giá Kiếm Sĩ", "id" : 8,"icon": "monster9","baseHP": 300,"baseMP": 130, "baseDmg": 34, "exp": 32,"drop":"w3","rate":20},
	9: {"name" : "Quỷ Vương Bóng Tối", "id" : 9,"icon": "monster10","baseHP": 350,"baseMP": 140, "baseDmg": 37, "exp": 35,"drop":"w5","rate":15},
	10: {"name" : "Tử Thần Địa Ngục", "id" : 10,"icon": "boss2","baseHP": 2000,"baseMP": 1000, "baseDmg": 100, "exp": 300,"drop":"w5","rate":0}
};

var monsterSize = 96;
(function (window) {
	var Monster = function (img,x, y,type,level,face,limitDamage) {
		var self = this;
		this.type = type;
		this.name = dataMonster[type].name;
		this.face = face;
		this.drop = dataMonster[type].drop;
		this.dropRate = dataMonster[type].rate;
		this.exp = (dataMonster[type].exp*Math.pow(1.5,level)*(Math.random()*0.4+0.8))>>0;
		this.maxHP = (dataMonster[type].baseHP*Math.pow(1.1,level)*(Math.random()*0.2+0.9))>>0;
		this.maxMP = (dataMonster[type].baseMP*Math.pow(1.1,level)*(Math.random()*0.2+0.9))>>0;
		this.dmg = (dataMonster[type].baseDmg*Math.pow(1.1,level)*(Math.random()*0.2+0.9))>>0;
		if(typeof limitDamage =="undefined"){
			while(this.dmg>200){
				this.dmg-=13;
			}
		}
		this.currentHP = this.maxHP;
		this.currentMP = this.maxMP;
		this.skill = [];
		this.image = new CAAT.Foundation.SpriteImage().initialize(img, 11, 4);
		this.positionX = x;
		this.positionY = y;
		this.action = 0;
		this.character = new CAAT.ActorContainer().
			setBackgroundImage(self.image, true).
            setLocation(self.positionX+monsterSize, self.positionY).
			setScaleAnchored(-monsterSize / self.image.singleWidth, monsterSize / self.image.singleHeight, 0, 0).
			setAnimationImageIndex([self.action * 4, self.action * 4 + 1, self.action * 4 + 2, self.action * 4 + 3]).
			setChangeFPS(200).
			enableEvents(false);
		this.update = function (action) {
			if ((typeof action != "undefined") && (self.action != action)) {
				self.action = action;
				self.character.setAnimationImageIndex([self.action * 4, self.action * 4 + 1, self.action * 4 + 2, self.action * 4 + 3]);
			}
		}
		this.attack = function (target, time,mainDirector,battleContainer,index) {
		    var toX = target.positionX+characterSize/2;
		    var toY = target.positionY-(monsterSize-characterSize)/2;
			var animation = false;
			var takeDmg = false;
		    var moveBehavior = new CAAT.Behavior.PathBehavior();
			var lastTime;
			var damage = (self.dmg*(Math.random()*0.2+0.9))>>0;
		    var path = new CAAT.PathUtil.LinearPath().setInitialPosition(self.positionX+monsterSize+20, self.positionY).setFinalPosition(toX, toY);
		    moveBehavior.setValues(path).setFrameTime(time, 1000).
                addListener({ 
                    behaviorExpired: function (director, time) {
						self.character.removeBehaviour(moveBehavior);
						callback = function(animationTime){
							
							path = new CAAT.PathUtil.LinearPath().setFinalPosition(self.positionX +monsterSize+20, self.positionY).setInitialPosition(toX, toY);
							moveBehavior.setValues(path).setFrameTime(time+animationTime, 1000).addListener({
								behaviorApplied: function(director,time){
									if(!takeDmg){
										takeDmg = true;
										self.update(0);
										target.update(1);
										if(Math.random()>=0.5){
											target.update(3);
										}
										lastTime = +new Date();
										target.takeDmg(damage);
										mainDirector.audioPlay('attack');
										var showDmg = new CAAT.DmgContainer().initialize(damage+"",toX-characterSize/2,toY);
										showDmg.active(time);
										battleContainer.addChild(showDmg);
										if(!target.alive){
										    mainDirector.endSound();
										    mainDirector.audioLoop('gameover');
										    mainDirector.switchToScene(6, 500, 1, 1);
										}
									}
									if(+new Date() - lastTime>400){
										target.update(0);
									}
								},
								behaviorExpired: function (director, time) {
									self.character.emptyBehaviorList();
									
								}
							});
							self.character.addBehavior(moveBehavior);
						}
						if(!animation){
							animation = true;
							self.update(6);
							callback(800);
						}
						else{
							if(battleContainer.enemys.length==0){
								battleContainer.endBattle(battleContainer);
							}
							else{
								if(index>=battleContainer.enemys.length-1){
									battleContainer.addActionBox();
								}
								else{
									enemyTurn(battleContainer,time,mainDirector,index+1);
								}
							}
						}
                     }
                });
              
		    this.character.addBehavior(moveBehavior);
		}
		
		this.alive = true;
		this.level = level;
		this.addTo = function (container) {
		    container.addChild(self.character);
		}
		this.removeFrom = function(container){
			container.removeChild(self.character);
		}
		this.setAnimation = function () {

		}
		this.takeDmg = function (dmg) {
		    self.currentHP -= dmg;
			if(self.currentHP<=0){
				self.alive = false;
			}
		}
	}
	window.Monster = Monster;
})(window)
function enemyTurn(battleContainer,time,mainDirector,index){
	var enemy = battleContainer.enemys[index];
	var action = (Math.random()*4)>>0;
	switch(action){
		case 0: 
			if(index>=battleContainer.enemys.length-1){
				battleContainer.addActionBox();
			}
			else{
				enemyTurn(battleContainer,time,mainDirector,index+1);
			}
			break;
		default:
			enemy.attack(battleContainer.actor,time,mainDirector,battleContainer,index);
			break;
	}
}