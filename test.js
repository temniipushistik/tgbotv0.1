(async function() {
    const tl = require('../NodePackage/toolslight')
    const srvlight = require('../NodePackage/srvlight')
    const tgmlight = require('../NodePackage/tgmlight')
    const sequelize = require('sequelize')
    
    var options = {
        cert: __dirname + '/SSL/cert.pem',
        key: __dirname + '/SSL/key.pem'
    }
    
    let httpsServer = srvlight.https(options)
    
    httpsServer.route('/1591505611', async (req, res) => {
        res.writeHead(200)
        res.end('OK')
        
        console.log('Incoming request to HTTPS server.')
        console.log(tl.jsonToObject(req.body))

        const botToken = '1591505611:AAGu5wxksAc63N_iVS1htgcW9sWnqM0MyJg'

        const tgRequest = tl.jsonToObject(req.body)
        
        var requestOptions = {
            method: 'POST', // Can be 'GET', 'POST', 'PUT', 'DELETE', 'CONNECT'.
            protocol: 'https', // Can be 'http', 'https', 'ws', 'wss'.
            host: 'api.telegram.org',
            port: 443,
            path: '/bot' + botToken + '/sendMessage',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({chat_id: tgRequest.message.from.id, text: tgRequest.message.text}),
        }
      
        var err, data
        [err, data] = await tl.request(requestOptions)
        if (err) {
            console.log(err)
        }
        console.log(data)
    })

    httpsServer.start()
})()