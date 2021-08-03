const Url = require('../Schemas/UrlSchema');
const ids = require('shortid');
const validUrl = require('valid-url');

class UrlController{
    async shortUrl(req, res){
        let {url, flag, slogan} = req.body;
        console.log(req.body)
        
        if(validUrl.isUri(url)){
            try{
                const existed = await Url.findOne({url})
                if(existed){
                    const answer = existed.shortUrl.length === 0 ?  existed.friendlyUrl : existed.shortUrl;
                    res.send({
                        errorFlag: false,
                        error: null,
                        answer
                    })
                }else{
                    let friendlyUrl = '';
                    let shortUrl = '';

                    if(flag && slogan.length){
                        friendlyUrl = process.env.baseUrl + '/' + slogan;
                    }else{
                        const shortCode = ids.generate();
                        shortUrl = process.env.baseUrl + '/' + shortCode;
                    }

                    await Url.create({
                        url,
                        shortUrl,
                        friendlyUrl
                    })
                    res.send({
                        errorFlag: false,
                        error: null,
                        shortUrl,
                        friendlyUrl
                    })
                }
            }catch(error){
                console.log(error)
            }
        }else{
            res.send({
                errorFlag: true,
                error: "Provided value is not valid URL"
            })
        }

    }

    async redirect(req, res){
        const code = req.params.url;
        const url = process.env.baseUrl + '/' + code;
        try{
            const existedUrl = await Url.findOne({$or: [{shortUrl: url}, {friendlyUrl: url}]});
            if(existedUrl){
                res.redirect(existedUrl.url);
            }else{
                res.send({
                    invalid: "There is no URL found"
                })
            }
        }catch(error){
            console.log(error)
        }
    }
}


module.exports = UrlController