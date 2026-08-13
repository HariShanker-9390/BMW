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

    var username= document.getElementById("user-name").textContent=users[curId].name;
    var userimage= document.getElementById("user-image");
    var usergender= document.getElementById("user-gender");

    // username.innerHTML=users[curId].name;
    usergender.innerHTML=users[curId].gender;
    userimage.src=users[curId].image;


}