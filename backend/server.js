const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh',(req,res)=>{
    const refreshToken = req.body.refreshToken
})

app.post('/login',(req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi ({
        redirectUri:'http://localhost:3000',
        clientId:'637a3bbbcc30400e897ce9e8a7dacf83',
        clientSecret:'ad0d6784d8934c1983c574d6558ef392'
    })
    
    spotifyApi
        .authorizationCodeGrant(code)
        .then(data=>{
            req.json({
                accessToken: data.body.access_token,
                refreshToken:data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(()=>{
            res.sendStatus(400)
        })
})

app.listen(3001)