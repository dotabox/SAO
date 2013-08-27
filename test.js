window.onload = function() {
	
		mapData = {
		2: 	{
				"tile": "tile1",
				"name": "Rừng Cây Âm U",
				"data": 
				[
					[-1, -1, -1, -1, -1, 37, -1, -1, -1, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, -1, -1, -1, -1, 37, -1, 10, -1, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, 48, 49, 50, 51, -1, -1, -1, -1, 37, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, 56, 57, 58, 59, 37, -1, -1, 10, 37, -1, -1, -1, -1, 10, -1, -1, -1, -1, -1],
					[-1, 64, 65, 66, 67, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, 72, 73, 74, 75, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, 80, 81, 82, 83, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, -1, -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 48, 49, 50, 51, -1, -1],
					[-1, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 56, 57, 58, 59, -1, -1],
					[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 64, 65, 66, 67, -1, -1],
					[31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 72, 73, 74, 75, -1, -1],
					[39, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 80, 81, 82, 83, -1, -1],
					[31, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					[39, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 37, -1, -1]
				],
				"cdata":
				[
					[0, 0, 0, 0, 0, 1, 6, 6, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 1, 1, 0, 0, 0, 16, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
				]
			},
		3:	{
				"tile": "tile3",
				"name": "Hang Động Nguyên Thủy",
				"data":
				[
					[49,49,49,49,49,49,49,49,50,91,48,49,49,49,49,49,49,49,49,49],
					[57,57,57,57,57,57,57,57,58,99,56,57,57,57,57,57,57,57,57,57],
					[65,65,65,65,65,65,65,65,66,-1,64,65,65,65,65,65,65,65,65,65],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,231,-1,-1,-1,-1,-1],
					[-1,-1,14,-1,18,-1,-1,21,-1,-1,-1,21,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,14,-1,26,-1,-1,29,-1,-1,-1,29,-1,-1,-1,-1,-1,87,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,14,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,37,38,39,-1,-1,-1,-1],
					[-1,-1,-1,87,-1,-1,-1,-1,-1,-1,-1,-1,-1,45,46,47,-1,-1,14,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,53,54,55,-1,-1,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,56,57,58,-1,-1,87,-1],
					[-1,-1,14,-1,-1,-1,14,-1,125,126,127,-1,-1,64,65,66,-1,-1,-1,-1],
					[-1,-1,-1,-1,18,-1,-1,-1,133,134,135,-1,-1,-1,-1,-1,-1,14,-1,-1],
					[-1,-1,-1,-1,26,-1,-1,-1,141,142,143,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
				],
				"cdata":
				[
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
					[0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0],
					[0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
					[0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
					[0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,15,0,0,0,1,1,1,0,0,1,0],
					[0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0],
					[0,0,0,0,1,0,0,0,1,5,1,0,0,0,0,0,0,1,0,0],
					[0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			},
		4:	{
				"tile": "tile2",
				"name": "Cổ Mộ",
				"data":
				[
					[13,32,33,34,35,36,37,13,115,116,117,-1,-1,-1,-1,-1,10,32,33,34],
					[-1,40,41,42,43,44,45,-1,123,124,125,-1,-1,-1,-1,-1,-1,40,41,42],
					[-1,48,49,50,51,52,53,-1,131,132,133,-1,-1,-1,13,-1,-1,48,49,50],
					[19,56,57,58,59,60,61,-1,128,129,130,-1,-1,-1,-1,-1,-1,56,57,58],
					[-1,64,65,66,67,68,69,-1,136,137,138,-1,-1,-1,-1,19,-1,64,65,66],
					[-1,-1,-1,-1,-1,12,-1,-1,144,145,146,-1,-1,-1,-1,-1,-1,10,-1,-1],
					[-1,10,-1,-1,-1,-1,-1,-1,-1,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,32,33,34,35,36,37,-1,5,-1,-1,-1,-1,12,-1,72,73,74,75],
					[-1,-1,40,41,42,43,44,45,-1,5,-1,-1,-1,-1,-1,-1,80,81,82,83],
					[-1,-1,48,49,50,51,52,53,-1,5,-1,-1,-1,-1,-1,-1,88,89,90,91],
					[-1,-1,56,57,46,47,60,61,-1,5,-1,-1,12,-1,-1,-1,96,97,98,99],
					[-1,-1,64,65,54,55,68,69,-1,5,-1,-1,-1,-1,-1,-1,104,105,106,107],
					[-1,13,-1,-1,-1,-1,-1,102,-1,5,-1,102,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,119,-1,5,-1,119,-1,-1,-1,-1,-1,-1,-1,10],
					[27,26,27,26,27,26,27,127,-1,5,-1,127,26,27,26,27,26,27,26,27]
				],
				"cdata":
				[
					[0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1],
					[0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1],
					[0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1],
					[0,0,1,1,1,1,0,0,1,99,1,0,0,0,0,0,0,0,1,1],
					[0,0,0,1,1,0,0,0,1,99,1,0,0,0,0,0,0,0,0,1],
					[0,0,0,0,0,0,0,0,1,99,1,0,0,0,0,0,0,1,0,0],
					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
					[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
					[0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
					[0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
					[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
					[0,0,0,0,0,0,0,1,0,13,0,1,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],
					[0,0,0,0,0,0,0,1,0,3,0,1,0,0,0,0,0,0,0,0]
				]
			},
		5:	{
				"tile": "tile9",
				"name": "Cổzzz Mộ",
				"data":
				[
					[138,138,138,138,138,138,138,138,138,138,138,138,155,24,25,25,25,25,25,25],
					[56,33,33,80,80,82,33,33,33,27,20,17,17,19,25,25,25,25,25,25],
					[64,65,89,88,88,90,92,93,92,56,57,27,25,25,25,25,25,25,25,25],
					[72,73,97,96,96,98,100,101,100,64,65,56,57,57,57,57,57,57,57,57],
					[7,-1,-1,-1,-1,-1,-1,-1,-1,72,73,64,65,65,65,65,65,65,65,65],
					[15,-1,-1,-1,-1,-1,11,-1,-1,-1,-1,72,73,73,73,73,73,73,73,73],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,16,17,18,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,24,25,26,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1,-1,-1],
					[-1,-1,32,33,34,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[4,-1,40,41,42,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
					[12,-1,48,49,50,-1,-1,-1,-1,11,-1,-1,-1,-1,-1,16,17,18,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,24,25,26,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,32,33,34,-1,5],
					[-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,40,41,42,-1,13]
				],
				"cdata":
				[
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,0,0,0,0,0,0,13,0,1,1,1,1,1,1,1,1,1,1,1],
					[1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
					[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
					[0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,16,0,6],
					[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
					[1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
					[1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
					[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1]
				]
			},
		6:	{
				"tile": "tile4",
				"name": "Cổ Mzzzộ",
				"data":
				[
					[69,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,64,65,66,70],
					[0,0,0,0,30,0,0,0,6,0,0,0,0,0,0,0,72,126,74,0],
					[-1,6,-1,-1,-1,-1,-1,-1,14,-1,24,25,26,-1,-1,-1,80,134,82,-1],
					[-1,14,-1,-1,-1,-1,-1,-1,-1,-1,32,33,34,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,40,41,42,-1,-1,-1,-1,-1,-1,-1],
					[-1,-1,-1,-1,-1,-1,-1,30,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,30,-1],
					[53,54,54,54,123,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
					[61,62,81,81,131,62,62,62,62,62,62,62,62,62,62,62,62,62,62,63],
					[-1,-1,-1,0,132,0,0,0,60,65,59,0,0,0,0,0,0,0,0,0],
					[-1,-1,-1,-1,-1,-1,-1,60,66,78,64,59,-1,-1,-1,-1,-1,-1,-1,-1],
					[64,65,65,65,65,65,65,66,77,86,79,64,65,65,65,65,65,65,65,66],
					[69,70,70,68,70,70,70,71,85,86,87,69,68,70,70,70,68,70,70,71],
					[77,78,78,78,78,78,78,79,93,94,95,77,78,78,78,78,78,78,78,79],
					[85,86,86,86,86,86,86,87,101,102,103,85,86,86,86,86,86,86,86,87],
					[93,94,94,94,94,94,94,95,101,102,103,93,94,94,94,94,94,94,94,95]
				],
				"cdata":
				[
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0],
					[0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,5,1,0],
					[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[2,12,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
					[2,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				]
			}
			
	};
	load();
	var menuData = {
		"panel": [[0, 0, 150, 480], [150, 0, 490, 480]],
		"items" : ['Trang bị', 'Kỹ năng', 'Thông tin', 'Trở lại', 'Thoát']
	}
	var tileSize = TILE_SIZE;
	var viewWidth = CANVAS_WIDTH, viewHeight = CANVAS_HEIGHT;
	weaponData = {
		0: { "id": "sword1","name": "Kiếm Sắt Gỉ", "dmg": 50, "help" : "Một thanh kiếm gỉ nhưng vẫn xài tốt, Damage: 50"},
		1: { "id": "sword2", "name": "Kiếm Thép", "dmg": 90, "help": "Xịn hơn kiếm gỉ một tý, Damage: 90" },
		2: { "id": "sword3", "name": "Trường Kiếm", "dmg": 130, "help": "Kiếm ngon phết, Damage: 130" },
		3: { "id": "sword4", "name": "Bá Vương Kiếm", "dmg": 420, "help": "Kiếm khủng, thường được các bậc đế vương trong truyền thuyết sử dụng, Damage: 420" },
		4: { "id": "sword5", "name": "Sát Thủ Kiếm", "dmg": 220, "help": "Đơn giản, gọn nhẹ, tốt cho mọi người, Damage: 220" },
		5: { "id": "sword6", "name": "Hoàng Gia Kiếm", "dmg": 500, "help": "Hàng xịn không sợ thử lửa, đáng giá cả một gia tài, lưu hành nội bộ trong hoàng tộc, Damage: 500" }
	};
	itemData = {
		0: { "id": "hp_pot", "name": "HP  Potion", "heal": 100, "percent": 30 , "help": "Hồi 100 HP + 30% HP tối đa khi sử dụng"},
		1: { "id": "mp_pot", "name": "MP  Potion", "heal": 100, "percent": 30 , "help": "Hồi 100 MP + 30% MP tối đa khi sử dụng"}
	};
	skill = {
	    0: {
	        "name": "Normal Attack",
	        "animation": {

	        }
	    },

	    1: {
	        "id": "skill 1", "name": "Hỏa Long Phi Thiên", "dmg": 1.2, "cost": 12, "help": "Tích tụ và phun ra hỏa khí trong người. Tiêu tốn 12 nội lực",
	        "animation": {
	            "file": ["animation", "character"],
	            "x0": 5,
	            "y0": 6,
	            "x1": 4,
	            "y1": 11,
	            "animationdata":
					[
						[],
						[[5,-68,-112,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[5,-133,4,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[5,-133,4,64,64,0,0,100],[5,-133,-60,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100],[12,-165,-47,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100],[12,-165,-47,64,64,0,0,100],[12,-183,-21,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100],[12,-165,-47,64,64,0,0,100],[12,-183,-21,64,64,0,0,100],[13,-209,-51,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100],[12,-165,-47,64,64,0,0,100],[12,-183,-21,64,64,0,0,100],[13,-209,-51,64,64,0,0,100],[13,-238,-32,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[20,-68,-28,64,64,0,0,100],[20,-101,-28,64,64,0,2,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100],[12,-165,-47,64,64,0,0,100],[12,-183,-21,64,64,0,0,100],[13,-209,-51,64,64,0,0,100],[13,-238,-32,64,64,0,0,100],[12,-274,-59,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[5,-5,48,64,64,0,0,100],[5,-69,48,64,64,0,0,100],[21,-127,-19,64,64,0,2,100],[11,-135,-26,64,64,0,0,100],[12,-165,-47,64,64,0,0,100],[12,-183,-21,64,64,0,0,100],[13,-209,-51,64,64,0,0,100],[13,-238,-32,64,64,0,0,100],[12,-274,-59,64,64,0,0,100],[13,-272,-17,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[5,60,-63,64,64,0,0,100],[5,60,1,64,64,0,0,100],[12,-165,-47,64,64,0,0,100],[12,-183,-21,64,64,0,0,100],[13,-209,-51,64,64,0,0,100],[13,-238,-32,64,64,0,0,100],[12,-274,-59,64,64,0,0,100],[13,-272,-17,64,64,0,0,100],[14,-314,-54,64,64,0,0,100]],
						[[5,-68,-112,64,64,0,0,100],[5,-4,-112,64,64,0,0,100],[12,-183,-21,64,64,0,0,100],[13,-209,-51,64,64,0,0,100],[13,-238,-32,64,64,0,0,100],[12,-274,-59,64,64,0,0,100],[13,-272,-17,64,64,0,0,100],[14,-314,-54,64,64,0,0,100],[10,-317,-17,64,64,0,0,100]],
						[[13,-238,-32,64,64,0,0,100],[12,-274,-59,64,64,0,0,100],[13,-272,-17,64,64,0,0,100],[14,-314,-54,64,64,0,0,100],[10,-317,-17,64,64,0,0,100],[12,-367,-53,64,64,0,0,100]],
						[[14,-314,-54,64,64,0,0,100],[10,-317,-17,64,64,0,0,100],[12,-367,-53,64,64,0,0,100],[13,-354,-30,64,64,0,0,100],[23,-331,-41,64,64,0,0,100],[24,-357,-11,64,64,0,0,100]],
						[[14,-314,-54,64,64,0,0,100],[23,-331,-41,64,64,0,0,100],[24,-357,-11,64,64,0,0,100]],
						[[14,-366,-37,64,64,0,0,100]],
						[]
					],
	            "characterdata":
					[
						[[0,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[0,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[32,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]]
					]
	        }
	    },
	    2: {
	        "id": "skill 2", "name": "Băng Phong", "dmg": 1.4, "cost": 30, "help": "Tạo ra tòa núi băng gây sát thương đến địch thủ. Tiêu tốn 20 nội lực",
	        "animation": {
				"file": ["animation2", "character"],
	            "x0": 5,
	            "y0": 2,
	            "x1": 4,
	            "y1": 11,
				"animationdata":
					[
						[],
						[[5,-129,-14,64,64,0,0,100]],
						[[5,-134,-24,74,74,0,0,100]],
						[[5,-141,-36,86,86,0,0,100]],
						[[5,-146,-47,97,97,0,0,100]],
						[[8,-146,-47,97,97,0,0,100]],
						[[7,-146,-47,97,97,0,0,100]],
						[[7,-146,-47,97,97,0,0,100]],
						[[7,-146,-47,97,97,0,0,100]],
						[[7,-146,-47,97,97,0,0,100]],
						[[7,-146,-47,97,97,0,0,100]],
						[[7,-146,-47,97,97,0,0,100]],
						[]
					],
				"characterdata":
					[
						[[1,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[32,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
					]
	        }
	    },
	    3: {
	        "id": "skill 3", "name": "Thiên Lôi Công", "dmg": 1.7, "cost": 55, "help": "Tạo sấm sét giáng xuống đầu địch thủ. Tiêu tốn 30 nội lực",
	        "animation": {
				"file": ["animation3", "character"],
	            "x0": 5,
	            "y0": 3,
	            "x1": 4,
	            "y1": 11,
				"animationdata":
					[
						[],
						[[11,-145,-50,56,56,0,0,100]],
						[[11,-145,-50,72,72,0,0,100]],
						[[11,-145,-50,90,90,0,0,100]],
						[[12,-145,-50,90,90,0,0,100]],
						[[11,-145,-50,90,90,0,0,100]],
						[[12,-145,-50,90,90,0,0,100],[12,-144,-49,64,64,0,0,100]],
						[[5,-145,-50,90,90,0,0,100]],
						[[12,-171,-57,64,64,0,0,100],[12,-106,-68,66,66,260,0,100],[5,-145,-50,90,90,0,0,100]],
						[[11,-171,-57,81,81,0,0,100],[12,-116,-68,77,77,265,0,100]],
						[[11,-153,-52,77,77,0,0,100]],
						[[11,-144,-52,61,61,0,0,100]],
						[]
					],
				"characterdata":
					[
						[[1,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[32,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
					]
	        }
	    },
	    4: {
	        "id": "skill 4", "name": "Vô Ảnh Kiếm", "dmg": 2.1, "cost": 77, "help": "Gây sát thương bằng những đường kiếm vô hình. Tiêu tốn 35 nội lực",
	        "animation": {
				"file": ["animation4", "character"],
	            "x0": 5,
	            "y0": 6,
	            "x1": 4,
	            "y1": 11,
				"animationdata":
					[
						[],
						[[23,-93,-34,64,64,0,0,100]],
						[[24,-93,-34,64,64,0,0,100]],
						[[6,-149,-40,85,85,0,0,100],[25,-93,-34,64,64,0,0,100]],
						[[26,-93,-34,64,64,0,0,100],[16,-148,-29,85,85,0,0,100]],
						[[27,-93,-34,64,64,0,0,100],[18,-155,-32,98,98,0,0,100]],
						[[8,-155,-31,97,97,0,0,100]],
						[[9,-155,-31,97,97,0,0,100]],
						[[9,-155,-31,97,97,0,0,100]],
						[[11,-155,-31,97,97,0,0,100]],
						[[19,-155,-31,97,97,0,0,100]],
						[[20,-155,-31,97,97,0,0,100]],
						[]
					],
				"characterdata":
					[
						[[1,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[32,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
					]
	        }
	    },
		5: {
		    "id": "skill 5", "name": "Hải Triều Kiếm", "dmg": 2.5, "cost": 100, "help": "Tạo ra thủy triều cuốn trôi địch thủ. Tiêu tốn 40 nội lực",
			"animation": {
				"file": ["animation5", "character"],
	            "x0": 5,
	            "y0": 6,
	            "x1": 4,
	            "y1": 11,
				"animationdata":
					[
						[],
						[[1,-138,-22,100,100,0,0,100]],
						[[2,-138,-22,100,100,0,0,100]],
						[[3,-138,-22,100,100,0,0,100]],
						[[4,-138,-22,100,100,0,0,100]],
						[[5,-138,-22,100,100,0,0,100]],
						[[6,-138,-22,100,100,0,0,100]],
						[[7,-138,-22,100,100,0,0,100]],
						[[10,-138,-22,100,100,0,0,100]],
						[[11,-138,-23,100,100,0,0,100]],
						[[12,-138,-23,100,100,0,0,100]],
						[[13,-138,-23,100,100,0,0,100]],
						[[14,-138,-23,100,100,0,0,100]],
						[[15,-138,-23,100,100,0,0,100]],
						[[15,-138,-23,100,100,0,0,100]],
						[[16,-138,-23,100,100,0,0,100]],
						[[17,-138,-23,100,100,0,0,100]],
						[]
					],
				"characterdata":
					[
						[[1,-48,-48,96,96,0,0,100]],
						[[3,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
						[[32,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[33,-48,-48,96,96,0,0,100]],
						[[34,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]],
						[[1,-48,-48,96,96,0,0,100]],
						[[2,-48,-48,96,96,0,0,100]]
					]
			}
		}
	};
	var bossAlive = true;
	function load() {
	    new CAAT.Module.Preloader.Preloader().
			addElement("character", "img/character.png").
			addElement("char_idle", "img/char.png").
			addElement("char_move", "img/char_run.png").
			addElement("boss1", "img/boss1.png").
			addElement("boss2", "img/boss2.png").
			addElement("char_full", 'img/char_full.png').
			addElement("animation", "img/ani 4.png").
			addElement("animation2", "img/ani 999.png").
			addElement("animation3", "img/ani 15.png").
			addElement("animation4", "img/ani 594.png").
			addElement("animation5", "img/ani 591.png").
			addElement("face", "img/face.PNG").
			addElement("faceBoss", "img/faceBoss.png").
			addElement("hp_meter", "img/HP_Meter.PNG").
			addElement("mp_meter", "img/MP_Meter.PNG").
			addElement("exp_meter", "img/EXP_Meter.png").
			addElement("hp_tx", "img/HP_Tx2.png").
			addElement("mp_tx", "img/MP_Tx2.png").
			addElement("exp_tx", "img/Exp_Tx2.png").
			addElement("lv_tx", "img/Lv_Tx2.png").
			addElement("hp_bar", "img/bar.PNG").
			addElement("exp_bar", "img/Exp_Back.png").
			addElement("menu_bg", "img/menu_bg.png").
			addElement("hp_pot", "img/hp_pot.png").
			addElement("mp_pot", "img/mp_pot.png").
			addElement("sword1", "img/sword1.png").
			addElement("sword2", "img/sword2.png").
			addElement("sword3", "img/sword3.png").
			addElement("sword4", "img/sword4.png").
			addElement("sword5", "img/sword5.png").
			addElement("sword6", "img/sword6.png").
			addElement("Trang bị", "img/equip.png").
			addElement("Kỹ năng", "img/skill.PNG").
			addElement("Thông tin", "img/status.PNG").
			addElement("Trở lại", "img/back.png").
			addElement("Thoát", "img/exit.png").
			addElement("bg1", "img/battle_bg1.jpg").
			addElement("bg2", "img/battle_bg2.jpg").
			addElement("bg3", "img/battle_bg3.jpg").
			addElement("bg4", "img/battle_bg4.jpg").
			addElement("bg5", "img/battle_bg5.jpg").
			addElement("bg6", "img/battle_bg6.jpg").
			addElement("bg7", "img/battle_bg7.jpg").
			addElement("skill 1", "img/skill 1.png").
			addElement("skill 2", "img/skill 2.png").
			addElement("skill 3", "img/skill 3.png").
			addElement("skill 4", "img/skill 4.png").
			addElement("skill 5", "img/skill 5.png").
			addElement("back_menu", "img/back_menu.jpg").
			addElement("select", "img/select.png").
			addElement("tile1", "img/tile1.png").
			addElement("tile2", "img/tile2.png").
			addElement("tile3", "img/tile3.png").
			addElement("tile4", "img/tile4.png").
			addElement("tile5", "img/tile5.png").
			addElement("tile6", "img/tile6.png").
			addElement("tile7", "img/tile7.png").
			addElement("tile8", "img/tile8.png").
			addElement("tile9", "img/tile9.png").
			addElement("info_tx", "img/info_tx.png").
			addElement("equip_tx", "img/equip_tx.png").
			addElement("dmg_tx", "img/dmg_tx.png").
			addElement("add_icon", "img/add_icon.png").
			addElement("start_bg", "img/start_bg.jpg").
			addElement("mask", "img/mask.png").
			addElement("story_tx", "img/story_text.PNG").
			addElement("story_bg", "img/story_bg.jpg").
			addElement("dmg", "img/Combo_Damage.PNG").
			addElement("lvlup", "img/levelup.png").
			addElement("addskill", "img/newskill.png").
			addElement("monster1", "img/monster1.png").
			addElement("monster2", "img/monster2.png").
			addElement("monster3", "img/monster7.png").
			addElement("monster4", "img/monster4.png").
			addElement("monster5", "img/monster6.png").
			addElement("monster6", "img/monster8.png").
			addElement("monster7", "img/monster13.png").
			addElement("monster8", "img/monster11.png").
			addElement("monster9", "img/monster14.png").
			addElement("monster10", "img/monster5.png").
            addElement("win", "img/win.jpg").
            addElement("gameover", 'img/gameover.jpg').
			load(function onAllAssetsLoaded(images) {
				run(images);
			}
		);
	}    
	var selectMenuBar = -1;
	var selectItem = 0;
	var selectSkill = 1;
	var selectQuit = 4;
	var selectKeyEvent = selectMenuBar;
	
	var selectMenuBc = 0;
	var selectChooseTarget = 1;
	var selectSkillBc = 2;
	var selectItemBc = 3;
	var normalAttack = false;
	var moveToSkill = true;
	var selectKeyBc = selectMenuBc;
	function run(images) {
		var director = new CAAT.Director().initialize(CANVAS_WIDTH, CANVAS_HEIGHT, document.getElementById('canvas'));
		director.setImagesCache(images);
		director.addAudio('attack', document.getElementById('attack_sound')).
				addAudio('item', document.getElementById('item_sound')).
				addAudio('boss1', document.getElementById('boss1_sound')).
				addAudio('meetmonster', document.getElementById('meetmonster_sound')).
				addAudio('keypress', document.getElementById('keypress_sound')).
				addAudio('skill1', document.getElementById('fire_sound')).
				addAudio('skill2', document.getElementById('ice_sound')).
                addAudio('skill3', document.getElementById('thunder_sound')).
                addAudio('skill4', document.getElementById('attack_sound')).
                addAudio('skill5', document.getElementById('item_sound')).
                addAudio('boss1', document.getElementById('boss1_sound')).
                addAudio('battle1', document.getElementById('battle1_sound')).
                addAudio('battle2', document.getElementById('battle2_sound')).
                addAudio('battle3', document.getElementById('battle3_sound')).
                addAudio('battle4', document.getElementById('battle4_sound')).
                addAudio('story', document.getElementById('story_sound')).
                addAudio('gameover', document.getElementById('gameover_sound')).
                addAudio('bossMusic', document.getElementById('bossMusic_sound'));
				
		var startScene = director.createScene();
		var storyScene = director.createScene();
		var mapScene = director.createScene();
		var menuScene = director.createScene();
		var battleScene = director.createScene();
		var winScene = director.createScene();
		var gameoverScene = director.createScene();

		startScene.setBounds(0, 0, director.width, director.height);
		storyScene.setBounds(0, 0, director.width, director.height);
		mapScene.setBounds(0, 0, director.width, director.height);
		menuScene.setBounds(0, 0, director.width, director.height);
		battleScene.setBounds(0, 0, director.width, director.height);
		winScene.setBounds(0, 0, director.width, director.height);
		gameoverScene.setBounds(0, 0, director.width, director.height);

		var map;
		var startMoving = true;
		var changingMap = false;
		var switchingScene = false;
		var inDialog = false;
		
		var lastMap = 2;
		var newMap;
		var keys = [0, 0, 0, 0];
		var stepNumber = 0;
		var img = [director.getImage("character"),director.getImage("char_idle"),director.getImage("char_move")];
		
		character = new Character(img[0], img[1],img[2], 250, 200, 200, 100, 50, weaponData[0]);
		character.updateState("idle");
     
		/* ----------------------------Test map --------------------------------*/
		
		var map = new CAAT.TileMap().create(director,"map 1", director.getImage(mapData[lastMap].tile), mapData[lastMap].data, mapData[lastMap].cdata).setBounds(0, 0, director.width-1, director.height-1);
		
		

		/* ---------------------------------- Test Battle --------------------------- */
		var mc = new CAAT.MenuContainer();
		var bc = new CAAT.BattleContainer();
		var startContainer = new CAAT.StartContainer().initialize();
		var storyContainer = new CAAT.Story().initialize(director);

		var index = 0;
	
		startScene.addChild(startContainer);
		storyScene.addChild(storyContainer);
		mapScene.addChild(map);
		winScene.addChild(new CAAT.WinContainer().initialize());
		gameoverScene.addChild(new CAAT.GameOverContainer().initialize());
		director.switchToScene(index, 500, 1, 1);
		
		///*
		mapScene.createTimer( mapScene.time, Number.MAX_VALUE, null,
			function() {
				if(!inDialog){
					if(!changingMap){
						var moveHorizontal = keys[1]-keys[0];
						var moveVertical = keys[3]-keys[2];
						var direction;
						
						if((moveHorizontal==0)&&(moveVertical==0)){
							if(startMoving){
								startMoving = false;
								if(character.state!="idle"){
									character.updateState("idle");
								}
							}
							return;
						}
						else{
							if(!startMoving){
								startMoving = true;
								character.updateState("move");
							}
						}
						if((moveHorizontal==0)&&(moveVertical==1)){
							direction = 0;
						}
						else if((moveHorizontal==0)&&(moveVertical==-1)){
							direction = 1;
						}
						else if((moveHorizontal==1)&&(moveVertical==0)){
							direction = 2;
						}
						else if((moveHorizontal==-1)&&(moveVertical==0)){
							direction = 3;
						}
						else if((moveHorizontal==1)&&(moveVertical==-1)){
							direction = 4;
						}
						else if((moveHorizontal==-1)&&(moveVertical==-1)){
							direction = 5;
						}
						else if((moveHorizontal==1)&&(moveVertical==1)){
							direction = 6;
						}
						else if((moveHorizontal==-1)&&(moveVertical==1)){
							direction = 7;
						}
						if(direction!= character.direction){
							character.updateDirection(direction);
						}
						var x = character.positionX+ 2*moveHorizontal;
						var y = character.positionY+ 2*moveVertical;
						var moved = false;
						if(!checkCollision(x,y)){
							character.positionX = x;
							character.positionY = y;
							moved = true;
						}
						else{
							if(!checkCollision(x,character.positionY)){
								character.positionX = x;
								moved = true;
							}
							if(!checkCollision(character.positionX,y)){
								character.positionY = y;
								 moved = true;
							}
						}
						if(keys.indexOf(1)!=-1){
							character.update();
						}
						if(moved){
							stepNumber++;
							if(stepNumber>100){
								if(Math.random()<0.02){
									stepNumber = 0;
									character.character.parent.removeChild(character.character);
									character.positionOnMapX = character.positionX;
									character.positionOnMapY = character.positionY;
									character.updateState("battle");
									var monsterNumber = (Math.random()*3+1)<<0;
									if(monsterNumber >3){
										monsterNumber = 3;
									}
									var startPositionX =180-70*(3-monsterNumber);
									var startPositionY = 240 +35*(3-monsterNumber);
									var monsterArray = [];
									for(var i=0;i<monsterNumber;i++){
										var type = ((character.level/2)<<0)+((Math.random()*5-2)<<0);
										if(type>dataMonster.length-1) {
											type = dataMonster.length-1 - ((Math.random()*3)<<0);
										}
										else if(type < 0){
											type = 0;
										}
										var level = character.level-((Math.random()*6)<<0);
										if(level<=0){
											level = 1;
										}
										var monsterImg = director.getImage(dataMonster[type].icon);
										var monster = new Monster(monsterImg,startPositionX - 70*i,startPositionY+70*i,type,level);
										monsterArray.push(monster);
									}
									var rdBackground = (Math.random()*6+1)<<0;
									if(rdBackground>6){
										rdBackground = 6;
									}
									bc = new CAAT.BattleContainer().
										initialize(character, monsterArray, director.getImage('bg'+rdBackground)).
										setBounds(0, 0, director.width, director.height);
									battleScene.addChild(bc);
									director.switchToScene(4, 500, 1, 1);
									keys = [0,0,0,0];
									var rds =  (Math.random()*4+1)<<0;
									if(rdBackground>4){
										rdBackground = 4;
									}
									director.endSound();
									director.audioLoop('battle' + rds);
								}
							}
						}
					}
					else{
						var cell;
						for(var i=0;i<map.gate.length;i++){
							if(map.gate[i][0]==lastMap+10){
								cell = [map.gate[i][1],map.gate[i][2]];
								break;
							}
						}
						character.positionX = cell[1]*TILE_SIZE;
						character.positionY = cell[0]*TILE_SIZE;
						character.update();
						if(mapScene.getNumChildren()<2){
							character.addTo(mapScene);
						}
						changingMap = false;
					}
				}
			},
			null
		);

		CAAT.registerKeyListener(function event(e){
			e.preventDefault();
			if(!inDialog){
				if(director.currentScene.id-3 == 0){
					if(e.getAction()==="down"){
						if(startContainer.state==0){
							if( e.getKeyCode()===CAAT.Keys.ENTER){
								e.preventDefault();
								startContainer.swapSelect();
							}
						}
						else{
							var area = startContainer.getChildAt(0);
							if ((e.getKeyCode() === CAAT.Keys.LEFT) || (e.getKeyCode() === CAAT.Keys.UP)) {
								e.preventDefault();
								if (area.selected > 0) {
									area.setSelectedTo(area.selected - 1);
								}
								else{
									area.setSelectedTo(area.texts.length - 1);
								}
							}
							if ((e.getKeyCode() === CAAT.Keys.RIGHT) || (e.getKeyCode() === CAAT.Keys.DOWN)) {
								e.preventDefault();
								if (area.selected < area.texts.length - 1) {
									area.setSelectedTo(area.selected + 1);
								}
								else{
									area.setSelectedTo(0);
								}
							}
							if(e.getKeyCode()=== CAAT.Keys.ENTER){
								e.preventDefault();
								if(area.selected==0){
								    director.switchToScene(1, 500, 1, 1);
									keys = [0,0,0,0];
								    director.endSound();
								    director.audioLoop('story');
								}
							}
							if(e.getKeyCode()=== CAAT.Keys.ESCAPE){
								e.preventDefault();
								startContainer.swapSelect();
							}
						}
					}
				}
				else if(director.currentScene.id-3 == 1){
					if(e.getAction()=== "down"){
						if(!switchingScene){
							switchingScene = true;
							lastMap = 2;
							bossAlive = true;
							selectKeyEvent = selectMenuBar;
							character.reset();
							if(typeof character.container != "undefined"){
								character.container.removeChild(character.character);
							}
							character.addTo(mapScene);
							director.switchToScene(2, 500, 1, 1);
							keys = [0,0,0,0];
							var rds = (Math.random()*4+1)<<0;
							if(rds>4){
							    rds = 4;
							}
							director.endSound();
						}
					}
				}
				else if(director.currentScene.id-3 == 2){
					switchingScene = false;
					if ( e.getKeyCode()===CAAT.Keys.UP ) {
						e.preventDefault();
						keys[2]= ( e.getAction()==='up' ) ? 0 : 1;
					}
					if ( e.getKeyCode()===CAAT.Keys.DOWN ) {
						e.preventDefault();
						keys[3]= ( e.getAction()==='up' ) ? 0 : 1;
					}
					if ( e.getKeyCode()===CAAT.Keys.LEFT ) {
						e.preventDefault();
						keys[0]= ( e.getAction()==='up' ) ? 0 : 1;
					}
					if ( e.getKeyCode()===CAAT.Keys.RIGHT ) {
						e.preventDefault();
						keys[1]= ( e.getAction()==='up' ) ? 0 : 1;
					}
					if(e.getAction()=== "down"){
						if( e.getKeyCode()===CAAT.Keys.ESCAPE){
							director.switchToScene(3,500,1,1);
							mc = new CAAT.MenuContainer().initialize(0, 0, director.width, director.height, menuData, character);
							menuScene.addChild(mc);
							keys = [0,0,0,0];
						}
					}
				}
				else if(director.currentScene.id-3 == 3){
					if (e.getAction() === "down") {
						if (e.getKeyCode() === CAAT.Keys.ESCAPE) {
							if (mc.selected != -1) {
								mc.selected = -1;
								selectKeyEvent = selectMenuBar;
								mc.update();
							}
							else{
								mc.destroy();
								director.switchToScene(2,500,1,1);
								keys = [0,0,0,0];
							}
						}
						if (selectKeyEvent == selectMenuBar) {
							if (e.getKeyCode() === CAAT.Keys.UP) {
								e.preventDefault();
								var index = mc.current;
								if (index > 0) index--;
								else index = mc.items.length - 1;
								mc.setSelectedTo(index);
							}
							if (e.getKeyCode() === CAAT.Keys.DOWN) {
								e.preventDefault();
								var index = mc.current;
								if (index < mc.items.length - 1) index++;
								else index = 0;
								mc.setSelectedTo(index);
							}
							if (e.getKeyCode() === CAAT.Keys.ENTER) {
								if(mc.current!=3){
									mc.selected = mc.current;
									selectKeyEvent = mc.selected;
									mc.update();
								}
								else{
									director.switchToScene(2,500,1,1);
									keys = [0,0,0,0];
								}
							}

						}
						else if (selectKeyEvent == selectItem) {
							var area = mc.rightPanel.getChildAt(0);
							var textChange = false;
							if (e.getKeyCode() === CAAT.Keys.LEFT) {
								e.preventDefault();
								if (area.selected > 0) {
									area.setSelectedTo(area.selected - 1);
									textChange = true;
								}
							}
							if (e.getKeyCode() === CAAT.Keys.RIGHT) {
								e.preventDefault();
								if (area.selected < area.texts.length - 1) {
									area.setSelectedTo(area.selected + 1);
									textChange = true;
								}
								else if (area.selected > 0) {
									area.setSelectedTo(area.selected - 1);
									textChange = true;
								}
							}
							if (e.getKeyCode() === CAAT.Keys.UP) {
								e.preventDefault();
								if (area.selected > 1) {
									area.setSelectedTo(area.selected - 2);
									textChange = true;
								}
								else if (area.selected > 0) {
									area.setSelectedTo(area.selected - 1);
									textChange = true;
								}
							}
							if (e.getKeyCode() === CAAT.Keys.DOWN) {
								e.preventDefault();
								if (area.selected < area.texts.length - 2) {
									area.setSelectedTo(area.selected + 2);
									textChange = true;
								}
								else if (area.selected < area.texts.length - 1) {
									area.setSelectedTo(area.selected + 1);
									textChange = true;
								}
							}
							if (e.getKeyCode() === CAAT.Keys.ENTER) {
								e.preventDefault();
								var useItem = false;
								var item = area.getChildAt(area.selected);
								for(key in itemData){
									if(item.icon == itemData[key].id){
										if(key==0){
											if(character.currentHP<character.maxHP){
												character.item.item[key]--;
												director.audioPlay('item');
												character.setHP(character.currentHP+itemData[key].heal+((itemData[key].percent*character.maxHP/100)<<0));
												if(character.item.item[key]>0){
													item.setValues(character.item.item[key]);
												}
												else{
													area.removeSelectedFromList();
												}
											}
										}
										else{
											if(character.currentMP<character.maxMP){
												character.item.item[key]--;
												director.audioPlay('item');
												character.setMP(character.currentMP+itemData[key].heal+((itemData[key].percent*character.maxMP/100)<<0));
												if(character.item.item[key]>0){
													item.setValues(character.item.item[key]);
												}
												else{
													area.removeSelectedFromList();
												}
											}
										}
										useItem = true;
										break;
									}
								}
								if(!useItem){
									for(key in weaponData){
										if(item.icon == weaponData[key].id){
											var lastWeapon = character.weapon;
											var lastWeaponKey = parseInt(lastWeapon.id.substr(5))-1;
											//area.removeFirstChild();
											mc.rightPanel.removeLastChild();
											character.weapon = weaponData[key];
											character.item.weapon[key]--;
											if(character.item.weapon[key]!=0){
												item.setValues(character.item.weapon[key]);
											}
											else{
												area.removeSelectedFromList();
											}
											if((typeof character.item.weapon[lastWeaponKey] == "undefined")||(character.item.weapon[lastWeaponKey]==0)){
												character.item.weapon[lastWeaponKey] = 1;
												var itemW = area.width / area.col;
												var itemH = area.height / area.maxRow;
												var textsLength = area.texts.length;
												area.texts.push(lastWeapon.name);
												var x = (textsLength % area.col) * itemW + 2;
												var y = ((textsLength / area.col) >> 0) * itemH + 2;
												var p1 = new CAAT.ActorSelect().
													initialize(lastWeapon.id, CAAT.ICON_LEFT, lastWeapon.name, '#000000', '16px Times New Roman', 1, "#AAFFFA", false).
													setBounds(x,y,itemW-10,itemH-4);
												area.addChild(p1);
											}
											else{
												character.item.weapon[lastWeaponKey]++;	
												for(var i=0;i<area.texts.length;i++){
													if(area.getChildAt(i).icon==weaponData[lastWeaponKey].id){
														area.getChildAt(i).setValues(character.item.weapon[lastWeaponKey]);
													}
												}
											}
											var weapon = character.weapon;
											var rect = mc.panel[1];
											var p2 = new CAAT.ActorSelect().
												initialize(weapon.id, CAAT.ICON_LEFT, weapon.name, '#000000', '16px Times New Roman', weapon.dmg, "#AAFFFA", false).
												setBounds(40, 90, rect[2] - 160, 50);
											mc.rightPanel.addChild(p2);
											break;
										}
									}
								}
							}
							if(textChange){
								var iconId = area.getChildAt(area.selected).icon;
								var text;
								for(key in itemData){
									if(itemData[key].id==iconId){
										text = itemData[key].help;
										break;
									}
								}
								if(typeof text =="undefined"){
									for(key in weaponData){
										if(weaponData[key].id==iconId){
											text = weaponData[key].help;
											break;
										}
									}
								}
								mc.helpPanel.setText(text);
							}
						}
						else if (selectKeyEvent == selectSkill) {
							var area = mc.rightPanel.getChildAt(0);
							var textChange = false;
							if ((e.getKeyCode() === CAAT.Keys.LEFT) || (e.getKeyCode() === CAAT.Keys.UP)) {
								e.preventDefault();
								if (area.selected > 0) {
									area.setSelectedTo(area.selected - 1);
									textChange = true;
								}
							}
							if ((e.getKeyCode() === CAAT.Keys.RIGHT) || (e.getKeyCode() === CAAT.Keys.DOWN)) {
								e.preventDefault();
								if (area.selected < area.texts.length - 1) {
									area.setSelectedTo(area.selected + 1);
									textChange = true;
								}
							}
							if(textChange){
								var iconId = area.getChildAt(area.selected).icon;
								var text;
								for(key in skill){
									if(skill[key].id==iconId){
										text = skill[key].help;
										break;
									}
								}
								mc.helpPanel.setText(text);
							}
						}
						else if(selectKeyEvent==selectQuit){
							var area = mc.rightPanel.getChildAt(0);
							if ((e.getKeyCode() === CAAT.Keys.LEFT) || (e.getKeyCode() === CAAT.Keys.UP)||(e.getKeyCode() === CAAT.Keys.RIGHT) || (e.getKeyCode() === CAAT.Keys.DOWN)) {
								e.preventDefault();
								if (area.selected > 0) {
									area.setSelectedTo(area.selected - 1);
								}
								else{
									area.setSelectedTo(1);
								}
							}
							if (e.getKeyCode() === CAAT.Keys.ENTER){
								e.preventDefault();
								if (area.selected != 0) {
									area.setSelectedTo(area.selected + 1);
									mc.selected = -1;
									selectKeyEvent = selectMenuBar;
									mc.update();
								}
								else{
									director.switchToScene(0,500,1,1);
									keys = [0,0,0,0];
								}
							}
						}
					}
				}
				else if(director.currentScene.id-3 == 4){
					if(e.getAction()==="down"){
						if(bc.battleOver){
							character.positionX = character.positionOnMapX;
							character.positionY = character.positionOnMapY;
							character.updateState("idle");
							character.character.parent.removeChild(character.character);
							character.addTo(mapScene);
							var rds = (Math.random() * 4 + 1) << 0;
							if (rds > 4) {
							    rds = 4;
							}
							director.endSound();
							director.switchToScene(2,500,1,1);
							keys = [0,0,0,0];
							bc.destroy();
						}
						if(selectKeyBc== selectMenuBc){
							if(bc.findChild(bc.actionBox)!=-1){
								if((e.getKeyCode()===CAAT.Keys.LEFT)||(e.getKeyCode()===CAAT.Keys.UP)){
									e.preventDefault();
									var select = bc.actionBox.selected;
									if(select>0){
										bc.actionBox.setSelectedTo(select-1);
									}
									else{
										bc.actionBox.setSelectedTo(bc.actionBox.texts.length-1);
									}
								}
								if((e.getKeyCode()===CAAT.Keys.RIGHT)||(e.getKeyCode()===CAAT.Keys.DOWN)){
									e.preventDefault();
									var select = bc.actionBox.selected;
									if(select<bc.actionBox.texts.length-1){
										bc.actionBox.setSelectedTo(select+1);
									}
									else{
										bc.actionBox.setSelectedTo(0);
									}
								}
								if(e.getKeyCode()===CAAT.Keys.ENTER){
									e.preventDefault();
									switch(bc.actionBox.selected){
										case 0:
											//Chém thường
											bc.select(bc.selectedEnemy);
											normalAttack = true;
											selectKeyBc = selectChooseTarget;
											break;
										case 1:
											//Skill
											bc.addSkillBox();
											for(var i=0;i<bc.actor.skill.length;i++){
												var skillSelect = skill[bc.actor.skill[i]];
												if(bc.actor.currentMP<skillSelect.cost){
													bc.skillsBox.getChildAt(i).setTextColor("#AAAAAA");
												}
												else{
													bc.skillsBox.getChildAt(i).setTextColor('#000000');
												}
											}
											selectKeyBc = selectSkillBc;
											break;
										case 2:
											//Item
											bc.addItemsBox();
											selectKeyBc = selectItemBc;
											break;
									}
								}	
							}
						}
						else if(selectKeyBc == selectChooseTarget){
							if((e.getKeyCode()===CAAT.Keys.LEFT)||(e.getKeyCode()===CAAT.Keys.UP)){
								e.preventDefault();
								var select = bc.selectedEnemy;
								if(select>0){
									bc.setSelectedTo(bc.selectedEnemy-1);
								}
								else{
									bc.setSelectedTo(bc.enemys.length-1);
								}
							}
							if((e.getKeyCode()===CAAT.Keys.RIGHT)||(e.getKeyCode()===CAAT.Keys.DOWN)){
								e.preventDefault();
								var select = bc.selectedEnemy;
								if(select<bc.enemys.length-1){
									bc.setSelectedTo(bc.selectedEnemy+1);
								}
								else{
									bc.setSelectedTo(0);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.ENTER){
								e.preventDefault();
								
								if(!normalAttack){
									bc.removeLastChild();
									var select = bc.skillsBox.selected;
									selectKeyBc = selectMenuBc;
									bc.removeActionBox();
									var enemy = bc.enemys[bc.selectedEnemy];
									var skillSelect = skill[bc.actor.skill[select]];
									character.attack(enemy, 0 ,director,bc,bc.actor.skill[select]);
									character.setMP(character.currentMP-skillSelect.cost);
								}
								else{
									bc.removeLastChild();
									bc.removeActionBox();
									selectKeyBc = selectMenuBc;
									var enemy = bc.enemys[bc.selectedEnemy];
									character.attack(enemy, 0,director,bc,0);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.ESCAPE){
								bc.removeLastChild();
								if(normalAttack){
									normalAttack = false;
									selectKeyBc = selectMenuBc;
								}
								else{
									selectKeyBc = selectSkillBc;
									bc.addSkillBox();
								}
								
							}
						}
						else if (selectKeyBc == selectSkillBc){
							if((e.getKeyCode()===CAAT.Keys.LEFT)||(e.getKeyCode()===CAAT.Keys.UP)){
								e.preventDefault();
								var select = bc.skillsBox.selected;
								if(select>0){
									bc.skillsBox.setSelectedTo(select-1);
								}
								else{
									bc.skillsBox.setSelectedTo(bc.skillsBox.texts.length-1);
								}
							}
							if((e.getKeyCode()===CAAT.Keys.RIGHT)||(e.getKeyCode()===CAAT.Keys.DOWN)){
								e.preventDefault();
								var select = bc.skillsBox.selected;
								if(select<bc.skillsBox.texts.length-1){
									bc.skillsBox.setSelectedTo(select+1);
								}
								else{
									bc.skillsBox.setSelectedTo(0);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.ENTER){
								e.preventDefault();
								var select = bc.skillsBox.selected;
								var skillSelect = skill[bc.actor.skill[select]];
								if(bc.actor.currentMP>=skillSelect.cost){
									bc.select(bc.selectedEnemy);
									bc.removeSkillBox();
									selectKeyBc = selectChooseTarget;
									normalAttack  =false;
								}
							}
							if(e.getKeyCode()===CAAT.Keys.ESCAPE){
								e.preventDefault();
								bc.removeSkillBox();
								selectKeyBc = selectMenuBc;
							}
						}
						else if(selectKeyBc == selectItemBc){
							if(e.getKeyCode()===CAAT.Keys.LEFT){
								e.preventDefault();
								var select = bc.itemsBox.selected;
								if(select>0){
									bc.itemsBox.setSelectedTo(select-1);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.RIGHT){
								e.preventDefault();
								var select = bc.itemsBox.selected;
								if(select<bc.itemsBox.texts.length-1){
									bc.itemsBox.setSelectedTo(select+1);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.UP){
								e.preventDefault();
								var select = bc.itemsBox.selected;
								if(select>1){
									bc.itemsBox.setSelectedTo(select-2);
								}
								else if(select>0){
									bc.itemsBox.setSelectedTo(select-1);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.DOWN){
								e.preventDefault();
								var select = bc.itemsBox.selected;
								if(select<bc.itemsBox.texts.length-2){
									bc.itemsBox.setSelectedTo(select+2);
								}
								else if(select<bc.itemsBox.texts.length-1){
									bc.itemsBox.setSelectedTo(select+1);
								}
							}
							if(e.getKeyCode()===CAAT.Keys.ENTER){
								e.preventDefault();
								var select = bc.itemsBox.selected;
								var itemName = bc.itemsBox.getChildAt(select).text;
								var itemId = null;
								for(key in itemData){
									if(itemName == itemData[key].name){
										itemId = key;
									}
								}
								if(((itemId==0)&&(bc.actor.currentHP<bc.actor.maxHP))||
									((itemId==1)&&(bc.actor.currentMP<bc.actor.maxMP))){							
										bc.removeItemsBox();
										bc.removeActionBox();
										selectKeyBc = selectMenuBc;	
										bc.actor.useItem(0,director,bc,select,itemId);
									}
							}
							if(e.getKeyCode()===CAAT.Keys.ESCAPE){
								e.preventDefault();
								bc.removeItemsBox();
								selectKeyBc = selectMenuBc;
							}
						}
					}
				}
			}
			else{
				if(e.getAction()==="down"){
					if(e.getKeyCode()===CAAT.Keys.ENTER){
						var meetBossDialog = mapScene.getChildAt(mapScene.getNumChildren()-1);
						meetBossDialog.callback();
						if (meetBossDialog.textIndex < meetBossDialog.texts.length - 1) {
							meetBossDialog.textIndex++;
						}
					}
				}
			}
		});
		
		CAAT.loop(60);
		
		function checkCollision(x,y){
			if((x<0)||(x>TILE_SIZE*map.collisionData[0].length-characterSizeOnMap)||(y<0)||(y>TILE_SIZE*map.collisionData.length-characterSizeOnMap)){
				return true;
			}
			var startX = ((x+characterSizeOnMap/4)/TILE_SIZE)>>0, startY = ((y+characterSizeOnMap/4)/TILE_SIZE)>>0;
			var endX = ((x+3*characterSizeOnMap/4)/TILE_SIZE)>>0, endY = ((y+3*characterSizeOnMap/4)/TILE_SIZE)>>0;
			for(var i=startX;i<=endX;i++){
				for(var j=startY;j<=endY;j++){
					if((map.collisionData[j][i]==99)&&(bossAlive)){
						bossAlive = false;
						inDialog = true;
						character.updateState("idle");
						keys = [0,0,0,0];
						monsterSize = 192;
						var bossLevel = character.level;
						if(bossLevel>15){
							bossLevel = 15;
						}
						var boss = new Monster(director.getImage("boss2"), 130, 250, 10, bossLevel, "faceBoss",true);
						var callback = function() {
						    if (dialog.actor.name == character.name) {
						        dialog.actor = boss;
						    }
						    else {
						        dialog.actor = character;
						    }
						    if (dialog.textIndex == this.texts.length - 1) {
						        dialog.destroy();
						        inDialog = false;
						        character.character.parent.removeChild(character.character);
						        character.positionOnMapX = character.positionX;
						        character.positionOnMapY = character.positionY;
						        character.updateState("battle");
						        bc = new CAAT.BattleContainer().
									initialize(character, [boss], director.getImage('bg7')).
									setBounds(0, 0, director.width, director.height);
						        battleScene.addChild(bc);
						        director.switchToScene(4, 500, 1, 1);
								keys = [0,0,0,0];
						        director.endSound();
						        director.audioPlay('boss1');
						        director.audioLoop('bossMusic');
						    }
						}
						var texts = ["Ngươi có phải boss của tầng này không?", "Không. Ta là tử thần cai quản con đường tới địa ngục",
                            "Dưới đó có gì hot?", "Ta sẽ nói cho ngươi khi ngươi đánh bại ta", "Vậy chết đi"];
						var dialog = new CAAT.Dialog().
							initialize(texts, character, true, CAAT.FACE_LEFT, true, null, callback).
                            setBounds(200, 200, 300, 100);
						
						
						mapScene.addChild(dialog);
						
						return;
					}
					if((map.collisionData[j][i]!=0)&&(map.collisionData[j][i]<=10)){
						if((map.collisionData[j][i]!=1)){
							mapScene.removeLastChild();
							if(typeof newMap!= "undefined"){
								lastMap = newMap;
							}
							newMap = map.collisionData[j][i];
							mapScene.removeLastChild();
							var data = mapData[newMap];
							map = new CAAT.TileMap().create(director,data.name, director.getImage(data.tile), data.data, data.cdata).setBounds(0, 0, director.width-1, director.height-1);
							map.paint();
							mapScene.addChild(map);
							changingMap = true;
						}
						return true;
					}
				}
			}
			return false;
		}
	}
}