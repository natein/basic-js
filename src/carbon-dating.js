const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
    if(arguments.length == 0 || sampleActivity === null || sampleActivity == "" || typeof(sampleActivity) != 'string') return false;
    sampleActivity = parseFloat(sampleActivity);
    if(isNaN(sampleActivity) == true) return false;
    if(sampleActivity <= 0 || sampleActivity > 15) return false;
    let k = LN2 / HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    return t;
};
