const hero = {
   name: 'Batman',
   health: 100,
   heatEnemy : function (hero) {  hero.health = hero.health -10 },  
};
const enemy = {
   name: 'Joker',
   health: 100,
   heatHero : function (enemy) {  enemy.health =   enemy.health  -10 },
};




function startGame(heroPlayer, enemyPlayer )
{
if(getRandomNumberInRange(0, 1)===0){
   heroPlayer.heatEnemy(enemyPlayer)
   console.log(`Hero hit, Enemy has ${enemyPlayer.health} health points`)
   if (enemyPlayer.health<=0){console.log('Hero Win!')}
}else{
   enemyPlayer.heatHero(heroPlayer)
   console.log(`Enemy hit, Hero has ${heroPlayer.health} health points`)
   if (heroPlayer.health<=0){console.log('Enemy Win!')}
}
}
function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
while(hero.health > 0&& enemy.health >0){
   startGame(hero, enemy);
}

