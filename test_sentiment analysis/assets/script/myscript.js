function request_sentiment(){

let url = 'https://api.textgain.com/sentiment'
let base_url = 'https://api.textgain.com/sentimenttag'
let query = '/test_sentiment analysis/csvjson.json'



fetch(base_url + query) 
.then(function (response){ 
    return response.json()
})
.then(function (data){ 
   build_facts(data)

})
.catch(function (error){
    console.log(error)
})
}

