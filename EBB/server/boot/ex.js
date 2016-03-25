var app=require('../server.js');
app.models.Uploader.create({
  "id": "1",
  "noOfPosts": 0,
  "noOfSubscriber": 0,
  "pPic": "string",
  "cPic": "string"
},
function(err,u){
  console.log('Ji');
  console.log(u);

})
app.models.posts.create([{
  "name": "string",
  "poster": "string",
  "description": "string",
  "realeaseDate": "2016-03-24",
  "startDate": "2016-03-24",
  "endDate": "2016-03-24",
  "likes": 0,
  "like": [
    "string"
  ],
  "type": true,
  "id": "string",
  "uploaderId": "string"
}]);
 