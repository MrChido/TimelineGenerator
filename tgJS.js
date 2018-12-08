// Time Period Creature sets

var pastCreature = [ 'Lost', 'Stalker', 'Beast', 'Ancient', 'Golem', 'Elemental']

var presentCreature = [ 'Assasin', 'Paladin', 'Collector', 'Tactition', 'Theif', 'Warrior']

var futureCreature = [ 'Wanderer', 'Soldier', 'Mech', 'Generator', 'Engineer', 'Program'] 
//html callouts
const pastOne =document.getElementById('a1');
const pastTwo= document.getElementById('a2');
const pastThree= document.getElementById('a3');

const presentOne=document.getElementById('r1');
const presentTwo=document.getElementById('r2');
const presentThree=document.getElementById('r3');

const futureOne=document.getElementById('f1');
const futureTwo=document.getElementById('f2');
const futureThree=document.getElementById('f3');

const assign = document.getElementById("Populate");

//function zone
function randomPast() {
	return pastCreature[Math.floor(Math.random()*pastCreature.length)];
	}
function randomPresent(){
return presentCreature[Math.floor(Math.random()*presentCreature.length)];
}	
function randomFuture(){
return futureCreature[Math.floor(Math.random()*futureCreature.length)];
}
//action area	
assign.addEventListener('click', ()=>{
	a1.value=randomPast();
	a2.value=randomPast();
	a3.value=randomPast();
	r1.value=randomPresent();
	r2.value=randomPresent();
	r3.value=randomPresent();
	f1.value=randomFuture();
	f2.value=randomFuture();
	f3.value=randomFuture();
});
