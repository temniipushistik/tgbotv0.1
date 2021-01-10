
//write code here and run it below
(async function() {
    const toolsLight = require('toolslight')
    const srvLight = require('srvlight')
    const tgmLight = require('tgmlight')
   
    //option - obj, it has key and value
    //
    var options = {
        //adress of tgbot on the server and path to a sertificate
        cert: __dirname + '/SSL/cert.pem',
        key: __dirname + '/SSL/key.pem'
    }
    console.log(__dirname);//(выводит в консоль) лютая хуйня разобраться. метод.метод

     
        
    //receive all requests from tg server
    
    let httpsServer = srvLight.https(options)

    //обработчик запросов 
    let requestHandler = async function(req,res){
        res.writeHead(200)
        res.end('OK')
        
        console.log('Incoming request to HTTPS server.')
        console.log(req.body)

        const botToken = '1445923082:AAHZdvlosw5rPMgXqTWz-3TTmBDWrJrGh00'
        

        const tgRequest = toolsLight.jsonToObject(req.body)
        let tgRequestChatId = tgRequest.message.from.id
        let tgRequestText = tgRequest.message.text

            

        const telegram2 = new tgmLight
        telegram2
        .setBotToken(botToken)
        .setChatId(tgRequestChatId)
        .setText(tgRequestText)
        .sendMessage()

                
    }
 
    httpsServer.route('/1445923082',requestHandler)

    httpsServer.start();



        
  

})()