let http = require('http')
    express = require('express'),
    app = express();
    //interpreta os parâmetros enviados por POST, eles devem ser encodados e desencodados para serem interperetados pela aplicação
// app.use(express.urlencoded({extended:false}));
    app.get('a',(req,res)=>{
            res.end(<h1>Página A</h1>)
    });


    //app.post('a',(req,res)=>{
      //  res.end(<h1>Página A</h1>)
//});
    http.createServer(app).listen(3000);