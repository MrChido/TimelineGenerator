// Time Period Creature sets

var pastCreature = [ 'Lost', 'Stalker', 'Beast', 'Ancient', 'Golem', 'Elemental']

var presentCreature = [ 'Assasin', 'Paladin', 'Collector', 'Tactition', 'Theif', 'Warrior']

var futureCreature = [ 'Wanderer', 'Soldier', 'Mech', 'Generator', 'Engineer', 'Program'] 
//html callouts

var pp1 = a1.value 

const ppa1 = document.getElementById("a1");
const assign = document.getElementById("Populate");

function randomPast(pastCreature) {
	return pastCreature[Math.floor(Math.random()*pastCreature.length)];
	
}
assign.addEventListener('click', ()=>{
	a1.value=randomPast;
});
