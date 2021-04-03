// var nav = document.querySelector(".nav");
// var isActive = false;

// bars.addEventListener("click", function(){
//     nav.style.backgroundCorlor = "block";
// });





// var bars = document.querySelector(".bars");
// var nav = document.querySelector(".nav");

// bars.addEventListener("click", function(){
//     nav.style.display = "block";
// });


////////  if and else
//  var yosh = 12;


//  if(yosh >= 18) {
//      console.log('Ha mumkin');
//  }else if(yosh < 18) {
// //      console.log('Mumkin emas');
//  }

 var old = 60;

 // if - else

  // if(old <= 18) {
  //     console.log('Hali yoshbolasan qerga shoshasan!');
  //   }else if(old < 60) {
  //     console.log('Bemmalol Gazini bos!');
  //   }else if(old == 60) {
  //       console.log('1 yil qoldi Gazini bos!');
  //   }
  //   else{
  //     console.log("Tog`a qaribsiz ku damdi olovirin endi!")
  // }

// switch

// var Ali = "Ali";

// switch(Ali) {
//   case 'Abo':
//     console.log('Salom Abo')
//     break;
//   case 'Ali':
//     console.log('Salom Ali')
//   break;
// }



// var username =  document.getElementById("name");
// var password =  document.getElementById("password");


// document.querySelector('.form-btn').addEventListener("click", function(e){
//   e.preventDefault();
//   if(username.value == 'vali' &&  password.value == 'vali777'){
//     console.log("Xush kelibsiz")
//   }else{
//     console.log("Parol noto'g'ri")
//   }
// });

// &&  password.value == 'vali777
  















var username = document.getElementById('name');
var password = document.getElementById('password');
var  seePassword = false;


function check(e){
  e.preventDefault();
  if(username.value == 'damir' &&  password.value == 'damir111') {
    console.log('Xush kelibsiz');
    username.value = '';
    password.value = '';
  }else if(username.value != 'damir' && password.value != 'damir111'){
    console.log("Noto'g'ri kiritdingiz qaytadan yozing!");
  }
}

function see(){
  if(seePassword == true){
    password.type = 'password';
    seePassword = false;
    document.querySelector('.form-eye-icon--none').style.display = 'none';
    document.querySelector('.form-eye-icon').style.display = 'block';
  }else{
    password.type = 'text';
    document.querySelector('.form-eye-icon--none').style.display = 'block';
    document.querySelector('.form-eye-icon').style.display = 'none';
    seePassword = true;
  }
}

 

