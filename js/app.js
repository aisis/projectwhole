var log = 0;
var money = 0;
var upgrade = 1;
var upgradecost = 1;
function addlog() {
	 log = log + upgrade;
	console.log('logs' + log);
	document.getElementById('log').innerHTML = log;
	// body...
}
function addmoney() {
	if(log > 0){
	log--;
	money++;
	console.log('logs' + log);
	console.log('money' + money);
	document.getElementById('money').innerHTML = money;
	document.getElementById('log').innerHTML = log;
	}else{ 
		console.log('you have no logs');
		alert('you have no logs, click on the log button to get more');
	};
}
function sell10() {
	if(log >= 10){
		 log = log - 10
		 money = money + 10
		 	console.log('logs' + log);
	console.log('money' + money);
	document.getElementById('money').innerHTML = money;
	document.getElementById('log').innerHTML = log;
	}else{
		alert('you do not have enough logs to sell');
	};
	// body...
}
function upgradelog() {
	if(money >= 30 * upgradecost){
		money = money - 30 * upgradecost; 
		upgrade++;
		upgradecost++;
		console.log('upgrade' + upgrade)
		console.log('upgradecost' + upgradecost)
		document.getElementById('upgrade').innerHTML = upgrade;
		document.getElementById('money').innerHTML = money;
	document.getElementById('upgradecost').innerHTML = upgradecost * 30;
	}else{
		alert('you dont have enough money to upgrade');
		console.log(money + 'is not enough');
	};
}