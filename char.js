var characterSize = 96;
var characterSizeOnMap = 48;
(function (window) {
	var Character = function (img, idleImg,moveImg, x, y, hp, mp, dmg, weapon) {
		var self = this;
		this.name = 'Kirito';
		this.face = 'face';
		this.image = new CAAT.Foundation.SpriteImage().initialize(img, 11, 4);
		this.idleImg = new CAAT.Foundation.SpriteImage().initialize(idleImg, 8, 10);
		this.moveImg = new CAAT.Foundation.SpriteImage().initialize(moveImg, 8, 6);
		this.reset = function(){
			this.alive = true;
			this.exp = 0;
			this.level = 1;
			this.maxHP = hp;
			this.maxMP = mp;
			this.skill = [1];
			this.currentHP = hp;
			this.currentMP = mp;
			this.positionX = x;
			this.positionY = y;
			this.dmg = dmg;
			this.pointLeft = 0;
			this.state = "idle";
			this.direction = 0;
			this.positionOnMapX = x;
			this.positionOnMapY = y;
			this.action = 0;
			this.weapon = weapon;
			this.item = { 
				"weapon": {1: 1}, 
				"item": {0: 10,1 : 5}};
		}
		
		this.reset();
		this.character = new CAAT.ActorContainer().
			setBackgroundImage(self.image, true).
            setLocation(self.positionX, self.positionY).
			setScaleAnchored(characterSize / self.image.singleWidth, characterSize / self.image.singleHeight, 0, 0).
			setAnimationImageIndex([self.action * 4, self.action * 4 + 1, self.action * 4 + 2, self.action * 4 + 3]).
			setChangeFPS(200).
			enableEvents(false);
		this.update = function (action) {
			self.character.setLocation(self.positionX, self.positionY);
			if ((typeof action != "undefined") && (self.action != action)) {
				self.action = action;
				self.character.setAnimationImageIndex([self.action * 4, self.action * 4 + 1, self.action * 4 + 2, self.action * 4 + 3]);
			}
		}
		this.updateAction = function(action){
			self.action = action;
			self.character.setAnimationImageIndex([self.action * 4, self.action * 4 + 1, self.action * 4 + 2, self.action * 4 + 3]);
		}
		this.updateState = function(state){
			self.state = state;
			switch(state){
				case "idle":
					var animationArray = [];
					for(var i=0;i<10;i++){
						animationArray.push(self.direction*10+i);
					}
					self.character.
						setBackgroundImage(self.idleImg,true).
						setLocation(self.positionX, self.positionY).
						setScaleAnchored(characterSizeOnMap/self.idleImg.singleWidth/1.35, characterSizeOnMap/self.idleImg.singleHeight/1.1, 0, 0).
						setAnimationImageIndex(animationArray).
						setChangeFPS(300);
					break;
				case "move":
					var animationArray = [];
					for(var i=0;i<6;i++){
						animationArray.push(self.direction*6+i);
					}
					self.character.
						setBackgroundImage(self.moveImg,true).
						setLocation(self.positionX, self.positionY).
						setScaleAnchored(characterSizeOnMap/self.moveImg.singleWidth, characterSizeOnMap/self.moveImg.singleHeight, 0, 0).
						setAnimationImageIndex(animationArray).
						setChangeFPS(100);
					break;
				case "battle":
					self.positionX = 500;
					self.positionY = 300;
					self.character.
						setBackgroundImage(self.image, true).
						setLocation(self.positionX, self.positionY).
						setScaleAnchored(characterSize / self.image.singleWidth, characterSize / self.image.singleHeight, 0, 0).
						setAnimationImageIndex([self.action * 4, self.action * 4 + 1, self.action * 4 + 2, self.action * 4 + 3]).
						setChangeFPS(200);
					break;	
			}
		}
		this.updateDirection = function(direction){
			self.direction = direction;
			self.updateState(this.state);
		}
		this.attack = function (target, time,mainDirector,battleContainer,animationIndex) {
		    var toX = target.positionX+monsterSize+(monsterSize-characterSize)/4;
		    var toY = target.positionY+(monsterSize-characterSize)/2;
		    self.update(4);
			var animation = false;
			var takeDmg = false;
		    var moveBehavior = new CAAT.Behavior.PathBehavior();
			battleContainer.getChildAt(1).setVisible(false);
			if(animationIndex==0){
				toX -= monsterSize/2;
				var damage = (self.getdmg()*(Math.random()*0.2+0.9))>>0;
			}
			else{
				toX -= (monsterSize-characterSize)/2;
				var damage = ((skill[animationIndex].dmg*self.maxMP)*(Math.random()*0.2+0.9))>>0;
			}
		    var path = new CAAT.PathUtil.LinearPath().setInitialPosition(self.positionX+characterSize/2, self.positionY).setFinalPosition(toX, toY);
		    var alphaBehavior = new CAAT.Behavior.AlphaBehavior().setValues(0.75,1).setFrameTime(time,100).
				addListener({
					behaviorExpired:function(director,time){
						self.character.removeBehaviour(alphaBehavior);
						moveBehavior.setValues(path).setFrameTime(time, 1000).
							addListener({ 
								behaviorExpired: function (director, time) {
									self.character.removeBehaviour(moveBehavior);
									callback = function(animationTime){		
															
										path = new CAAT.PathUtil.LinearPath().setFinalPosition(self.positionX , self.positionY).setInitialPosition(toX, toY);
										moveBehavior.setValues(path).setFrameTime(time+animationTime, 1000).addListener({
											behaviorApplied: function(director,time){
												if(!takeDmg){
													self.update(5);
													takeDmg = true;
													target.takeDmg(damage);
													if(!target.alive){
														battleContainer.monsterDead(time);
													}
													if(animationIndex==0){
														var showDmg = new CAAT.DmgContainer().initialize(damage+"",toX,toY);
														showDmg.active(time);
														battleContainer.addChild(showDmg);
														mainDirector.audioPlay('attack');
													}
												}
											},
											behaviorExpired: function (director, time) {
												self.character.emptyBehaviorList();
												self.update(0);
											}
										});
										self.character.addBehavior(moveBehavior);
									}
									if(!animation){
										animation = true;							
										if(animationIndex>0){
											playAnimation(animationIndex,mainDirector,toX,toY,battleContainer,damage,callback);
										}
										else{
											self.updateAction(6);
											callback(800);
										}
									}
									else{
										battleContainer.getChildAt(1).setVisible(true);
										if(battleContainer.enemys.length==0){
											battleContainer.endBattle(time);
										}
										else{
											enemyTurn(battleContainer,time,mainDirector,0);
										}
									}
								 }
								 
							});
						self.character.addBehavior(moveBehavior);
					}
				});  
			self.character.addBehavior(alphaBehavior);
		}
		this.useItem = function(time,mainDirector,battleContainer,select,itemID){
			self.update(8);
			alphaBehavior = new CAAT.Behavior.AlphaBehavior().
				setValues(1,0.25).
				setFrameTime(time,500).
				addListener({
					behaviorExpired: function(director,time){
						mainDirector.audioPlay('item');
						self.character.removeBehaviour(alphaBehavior);
						alphaBehavior = new CAAT.Behavior.AlphaBehavior().
							setValues(0.25,1).
							setFrameTime(time,500).
							addListener({
								behaviorExpired: function(director,time){
									self.character.emptyBehaviorList();
									self.update(0);
									self.item.item[itemID]--;
									if(self.item.item[itemID]>0){
										battleContainer.itemsBox.getChildAt(select).setValues(self.item.item[itemID]);
									}
									else{
										battleContainer.itemsBox.removeSelectedFromList();
									}
									if(itemID==0){
										self.setHP(self.currentHP+itemData[itemID].heal+((itemData[itemID].percent*self.maxHP/100)<<0));
									}
									else{
										self.setMP(self.currentMP+itemData[itemID].heal+((itemData[itemID].percent*self.maxMP/100)<<0));
									}
									enemyTurn(battleContainer,time,mainDirector,0);
								}
							});
						self.character.addBehavior(alphaBehavior);
						
					}
				});
			self.character.addBehavior(alphaBehavior);
		}
		
		
		this.gainExp = function (exp) {
		    self.exp += exp;
		    while (self.exp >= 100) {
		        self.level++;
				self.pointLeft+=5;
		        self.exp -= 100;
				if((self.level%3)==0){
					var skill = self.level/3;
					if(skill<5){
						self.addSkill(skill+1);
					}
				}
		    }
		}
		this.addSkill = function (skill) {
		    self.skill.push(skill);
		}
		this.addTo = function (container) {
			self.container = container;
		    container.addChild(self.character);
		}
		this.setHP = function (hp) {
		    self.currentHP = hp;
			if(self.currentHP>self.maxHP){
				self.currentHP = self.maxHP;
			}
		}
		this.takeDmg = function(dmg){
			self.currentHP -= dmg;
			if(self.currentHP<=0){
				self.currentHP = 0;
				self.alive = false;
			}
		}
		this.setMP = function (mp) {
		    self.currentMP = mp;
			if(self.currentMP>self.maxMP){
				self.currentMP = self.maxMP;
			}
		}
		this.getdmg = function () {
		    return (self.dmg + self.weapon.dmg);
		}
	}

	window.Character = Character;
})(window)

function playAnimation(animationIndex,director,positionX,positionY,battleContainer,damage,callback){
	
	var scene = director.currentScene;
	battleContainer.actor.character.setVisible(false);
	positionX+=characterSize/2;
	positionY+=characterSize/2;
	var startAnimationTime = +new Date();
	var img0 = director.getImage(skill[animationIndex].animation.file[0]);
	var img1 = director.getImage(skill[animationIndex].animation.file[1]);
	var x0 = skill[animationIndex].animation.x0;
	var y0 = skill[animationIndex].animation.y0;
	var x1 = skill[animationIndex].animation.x1;
	var y1 = skill[animationIndex].animation.y1;
	var img0Sprite = new CAAT.Foundation.SpriteImage().initialize(img0,y0,x0);
	var img1Sprite = new CAAT.Foundation.SpriteImage().initialize(img1,y1,x1);
	var animationData = skill[animationIndex].animation.animationdata;
	var characterData = skill[animationIndex].animation.characterdata;
	var frameIndex = 0;
	var paintActor = new CAAT.ActorContainer().setBounds(0,0,director.width,director.height);
	var lastTime = +new Date();
	paintActor.paint = function(director,time){
		var context = director.ctx;
		var animationFrame = animationData[frameIndex];
		var characterFrame = characterData[frameIndex];
		var numberChildren = paintActor.getNumChildren();
		for(var i=0;i<numberChildren;i++){
			paintActor.removeFirstChild();
		}
		for(var i=0;i<animationFrame.length;i++){
			var scaleX = 1, scaleY = 1;
			if(animationFrame[i][6]==1){
				scaleY = -1;
			}
			if(animationFrame[i][6]==2){
				scaleX = -1;
			}
			var actor = new CAAT.ActorContainer().
				setBackgroundImage(img0Sprite,true).
				setScaleAnchored(scaleX*animationFrame[i][3]/img0Sprite.singleWidth, scaleY*animationFrame[i][4]/img0Sprite.singleHeight,0,0).
				setRotation(animationFrame[i][5]/180*Math.PI).
				setBounds(animationFrame[i][1]+positionX,animationFrame[i][2]+positionY,animationFrame[i][3],animationFrame[i][4]).
				setAnimationImageIndex([animationFrame[i][0]]).
				setAlpha(animationFrame[i][7]/100).
				enableEvents(false);
			paintActor.addChild(actor);
		}
		for(var i=0;i<characterFrame.length;i++){
			var scaleX = 1, scaleY = 1;
			if(characterFrame[i][6]==1){
				scaleY = -1;
			}
			if(characterFrame[i][6]==2){
				scaleX = -1;
			}
			var actor = new CAAT.ActorContainer().
				setBackgroundImage(img1Sprite,true).
				setScaleAnchored(scaleX*characterFrame[i][3]/img1Sprite.singleWidth, scaleY*characterFrame[i][4]/img1Sprite.singleHeight,0,0).
				setRotation(characterFrame[i][5]/180*Math.PI).
				setBounds(characterFrame[i][1]+positionX,characterFrame[i][2]+positionY,characterFrame[i][3],characterFrame[i][4]).
				setAnimationImageIndex([characterFrame[i][0]]).
				setAlpha(characterFrame[i][7]/100).
				enableEvents(false);
			paintActor.addChild(actor);	
		}
		if(+new Date()- lastTime >50){
			frameIndex++;
			lastTime = +new Date();
			if(frameIndex==((2*animationData.length/5)>>0)){
				director.audioPlay('skill'+animationIndex);
			}
			if(frameIndex==((animationData.length*2/3)>>0)){
				var showDmg = new CAAT.DmgContainer().initialize(damage+"",positionX-characterSize/2,positionY-characterSize/2);
				showDmg.active(time);
				battleContainer.addChild(showDmg);
			}
			if(frameIndex>=animationData.length){
				scene.removeChild(paintActor);
				battleContainer.actor.character.setVisible(true);
				callback(+new Date() - startAnimationTime);
			}
		}
	}
	scene.addChild(paintActor);
}