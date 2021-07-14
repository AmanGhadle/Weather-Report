const express=require("express");
const https=require("https");
const app=express();
app.post("/",function(request,response){
  const url="https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=680ba2e053565d764bdeac25c8ef5d9d";
  https.get(url,function(response2){
    console.log(response2);
    response2.on("data",function(data){
      const data1=JSON.parse(data);

    })
    })
  response.send()
})
app.listen(3000,function(){
  console.log("The server is running on this port.");
})
