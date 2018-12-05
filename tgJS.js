// Time Period Creature sets

var pastCreature = [Lost, Stalker, Beast, Ancient, Golem, Elemental]

var presentCreature = [Assasin, Paladin, Collector, Tactition, Theif, Warrior]

var futureCreature = [Wanderer, Soldier, Mech, Generator, Engineer, Program]
//html callouts

var pp1 = a1.value 

const ppa1 = getElementById("a1")
const assign = getElementById("Populate");

function randomPast() {
	return pastCreature[Math.floor(Math.random()*pastCreature.length)];
	
}
assign.addEventListener('click', ()=>{
	pp1=randomPast;
});
