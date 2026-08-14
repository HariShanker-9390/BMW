var users=[
    {
        "name":"john doe",
        "gender":"male",
        "image":"male.png"
    },
    {
        "name":"jane doe",
        "gender":"female",
        "image":"female.png"
    }
]

var curId=0;

function toggleUser(){
    curId=(curId+1)%2;

    var username= document.getElementById("user-name");
    var userimage= document.getElementById("user-image");
    var usergender= document.getElementById("user-gender");

    username.innerHTML=users[curId].name;
    usergender.innerHTML=users[curId].gender;
    userimage.src=users[curId].image;
}


function randomUser(){
    fetch("https://randomuser.me/api")
         .then(function(res){
            return res.json();
         })
         .then(function(data){
            var username= document.getElementById("user-name");
            var userimage= document.getElementById("user-image");
            var usergender= document.getElementById("user-gender"); 
            var newUserName=data.results[0].name.first+" "+data.results[0].name.last;  
            var newUserGender=data.results[0].gender;
            var newUserImage=data.results[0].picture.large;

            username.innerHTML=newUserName;
            usergender.innerHTML=newUserGender;
            userimage.src=newUserImage;

            .catch(function(err){
                console.log("Error occured:"+err);
            }



         })
}