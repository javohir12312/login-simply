let localS = window.localStorage;

let obj = [
  {
    login: "javohir",
    password: 123,
  }
]

let form = document.querySelector(".form")
let ellogin = document.querySelector(".inp__email")
let passw = document.querySelector(".inp__password")




form.addEventListener("submit", (evt) => {
  evt.preventDefault();


  let person = obj.find((user) => user.login == ellogin.value && user.password == passw.value)


  if (!person) {
    alert("xato")
  } else {
    localS.setItem("token", JSON.stringify(person));
    window.location.replace("/index.html")
  }
})