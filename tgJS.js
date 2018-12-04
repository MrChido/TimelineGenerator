// Time Period Creature sets

var pastCreature = [Lost, Stalker, Beast, Ancient, Golem, Elemental]

var presentCreature = [Assasin, Paladin, Collector, Tactition, Theif, Warrior]

var futureCreature = [Wanderer, Soldier, Mech, Generator, Engineer, Program]

const assign = getElementById("Populate");

function(randomPast) {
	return pastCreature[Math.floor(Math.random()*pastCreature.length)];
	
}
assign.addEventListener('click', ()=>{
	p1.value=randomPast;
});
