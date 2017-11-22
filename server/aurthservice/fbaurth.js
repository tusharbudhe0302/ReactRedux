const request = require('request-promise');
const FB = require('fb');
const graph = require('fbgraph');
const aurthConfig = require('../aurthconfig/fb.config');
// const feeds = {fields: ['id', 'name', 'feeds']};
// exports.getfbData = async function (UserID, callback) {
//     FB.setAccessToken(aurthConfig.accessToken);
//     FB.options({version: 'v2.4'});
//     FB.extend({appId: aurthConfig.appID , appSecret: aurthConfig.appSecret})
//     console.log(UserID);
//     await FB.api('100023211961169', { fields: ['id', 'name','feeds'] }, function (res) {
//         if(!res || res.error) {
//             console.log(!res ? 'error occurred' : res.error);
//             callback(res,null);
//         }else{
//             callback(null,res);
//         }
//         console.log(res.id);
//         console.log(res.name);
//     });
// };

exports.getfbDatagraphAPI = function (UserID, callback) {
    graph.setAccessToken(aurthConfig.accessToken);
    var params = { fields: "feeds" };
    graph.get("zuck", params,  function(err, res) {
        if(err){
            callback(err,null);
        }else {
            callback(null,res);
        }
        console.log(res); // { picture: "http://profile.ak.fbcdn.net/..." }
    });
};
