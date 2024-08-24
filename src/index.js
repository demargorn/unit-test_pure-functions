function showHealth(hero) {
   let indicator;
   if (hero.health >= 50) {
      indicator = 'healthy';
   } else if (hero.health >= 15 && hero.health < 50) {
      indicator = 'wounded';
   } else {
      indicator = 'critical';
   }
   return indicator;
}
export default showHealth;
