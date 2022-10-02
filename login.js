let localS = window.localStorage;

if(!localS.getItem("token")){
  window.location.replace("/login1.html")
}


let heading = document.querySelector(".h1");