var request = require('request');

// Accesses historical data for a given stock symbol, type (daily, minutes, weekly, etc.), start date and
// end date (optional), and callback
// Uses barchart free api
function historicalStockScraper(symbol, type, startDate, fCallback, endDate, keyNumber) {

    // optional arguments
    if (typeof endDate === 'undefined') {

      endDate = "null";
    }
    if (typeof keyNumber === 'undefined') {

      keyNumber = 1;
    }

    var keys = ["d3aec7bd98718c9fa45caa2d8c12eaeb", "f3b460304a11da7c0bdfe79b17d2b9cf"];

    var url = "http://marketdata.websol.barchart.com/getHistory.json?key=" + keys[keyNumber] + "&symbol=" + symbol + "&type=" + type + "&startDate=" + startDate + "&endDate=" + endDate;
    console.log(url);
    request(url, function(error, response, body) {
      if(!error && response.statusCode == 200){
        fCallback(JSON.parse(body)['results']);
      } else if (error) {

        console.log(error);
      } else {

        //try again with other api key
        historicalStockScraper(symbol, type, startDate, fCallback, endDate, (keyNumber + 1) % 2);
      }
    });
}

module.exports = historicalStockScraper("tsla", "daily", 20150619000000, function(results){
    console.log(results);
});
