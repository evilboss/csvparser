const csvFilePath = './storage/EUR_USD Historical Data.csv';
const csv = require('csvtojson');
csv()
	.fromFile(csvFilePath)
	.then((jsonObj) => {
		console.log(jsonObj);
	}).catch(error => {
	console.error('error occured');
});
