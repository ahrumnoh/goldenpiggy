var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking81d835dfe59e6eb697fdb34af202117d3f63026835ca0939"; //<--my API

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          // cryptoCoin += `<td> ${coin.uuid} </td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> ${coin.tier} </td>`;
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> ${coin.btcPrice} </td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
          
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });


// Current Time //
var d = new Date();
document.getElementById('currentTime').innerHTML = d.toLocaleString();