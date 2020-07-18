// function name
// feetToMile
// woodCalculator
// brickCalculator
// tinyFriend


// 1 No Question Ans. function name (own thinking solution)

function feetToMile(feet){
	var mile = feet / 5280;
	return mile;
}

// 2 No Question Ans.. function name (own thinking solution)

function woodCalculator(chair,table,bed) {
	
	var chairWoodCubic = chair * 5 ;
	var tableWoodCubic = table * 5 ;
	var bedWoodCubic = bed * 2 ;
	var totalWoodCubic = chairWoodCubic + tableWoodCubic + bedWoodCubic;
	return totalWoodCubic;
}

// 3 No Question Ans.. function name (own thinking + google help solution but i am not satisfied)

function tinyFriend(friends) {
	var min = friends[0].length;
	friends.map(v => min = Math.min(min, v.length));
	smallestFriend = friends.filter(v => v.length == min);
	return smallestFriend;
  }
  