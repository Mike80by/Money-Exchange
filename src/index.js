// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coinsArr = [50,25,10,5,1];
    var countArr = [0,0,0,0,0];
    var obj = {};
    if ((currency > 0) && (currency <= 10000)) {
    	for (let i = 0; i < coinsArr.length; i++) {
    		if (currency % coinsArr[i]) {
    			countArr[i] = Math.floor(currency / coinsArr[i]);
    			currency = currency % coinsArr[i];
    		} else {
    			countArr[i] = currency / coinsArr[i];
    			break;
    		}
    	}
    	obj = {
		   	H: countArr[0],
		  	Q: countArr[1],
		   	D: countArr[2],
		   	N: countArr[3],
		   	P: countArr[4]
    	}
    	for (let key in obj) {
    		if (obj[key] == 0) delete obj[key];
    	}
    	return obj;
    } else if (currency <= 0) {
    	return obj = {};
    } else return obj = {"error": "You are rich, my friend! We don't have so much coins for exchange"}
}