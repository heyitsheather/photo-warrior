var request = require('request'),
    apiKey = 'acc_c7ea824cb6d11be',
    apiSecret = '32a5dc90d936cae122e7931ceb1d4e12',
    imageUrl = 'https://imagga-com-assets.azureedge.net/static/images/categorization/skyline-14619_640.jpg',
    categorizer = 'general_v3',
    index_id = '{index_id}';

request.get('https://api.imagga.com/v2/similar-images/categories/'+categorizer+'/'+index_id+'?image_url='+encodeURIComponent(imageUrl), function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
}).auth(apiKey, apiSecret, true);