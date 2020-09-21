const SECONDS_IN_HOUR = 3600;
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;    
  turnsSpeed = turnsSpeed / SECONDS_IN_HOUR;
  const seconds = Math.floor(turns / turnsSpeed);
  return {turns, seconds};
}
