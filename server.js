const express=require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("frontend"));
app.use(express.json());
var users =[
    {
        "id":1,
        "name":"Ljubisav",
        "gender": "male",
        "image":"https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
        "id":2,
        "name":"Lada",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/85.jpg"
    },
    {
        "id":3,
        "name":"Tanveer",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        "id":4,
        "name":"Ceyhan",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/40.jpg"
    },
    {
        "id":5,
        "name":"Begonia",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        "id":6,
        "name":"kristina",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/82.jpg",
    },
    {
        "id":7,
        "name":"Martha",
        "gender": "female",
        "image":"https://randomuser.me/api/portraits/women/31.jpg"
    },
    {
        "id":8,
        "name":"Roland",
        "gender": "male",
        "image":"https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
        "id":9,
        "name":"hari",
        "gender": "male",
        "image":"https://randomuser.me/api/portraits/men/89.jpg"
    },
    {
        "id":10,
        "name":"shiva",
        "gender": "male",
        "image":"https://randomuser.me/api/portraits/men/92.jpg"
    }

]

var nextId=11;

function  findIndex(id){
    for(var i=0;i<users.length;i++){
        if(id===users[i].id){
            return i;
        }
    }
    return -1;
}

app.get("/api/users",function(req,res){
    return res.json(users);

})
 app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=findIndex(id);

    if(index===-1){
       return res.status(404).json({"message" : "User not found with id:"+id});
    }

    var user=users[index];
    return res.json(user);

 });


 app.get("/api/random-user", function(req,res){
    if(users.length===0){
        res.status(404).json({"message":"No user found"});
    }
     var randomIndex=Math.floor(users.length*Math.random());
    return res.json(users[randomIndex]);
 });

 app.post("/api/users",function(req,res){
      var newUser=req.body;
      var tempUser={
        "id":nextId,
        "name":newUser.name,
        "gender":newUser.gender,
        "image":newUser.image
    };
     nextId=nextId+1;
      users.push(tempUser);
      return res.status(201).json({"message":"user created successfully",
        "user":tempUser
      });
 })



 





app.listen(port,function(){
    console.log("Server running on http://localhost:"+port);
})