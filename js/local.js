let storage = window.localStorage

function signup(){

    let user = document.getElementById("username").value
    let pas = document.getElementById("password").value

    if(storage.getItem(user, pas)){
        alert("bu ma'lumot bor !")
        alert("kodingiz xafsizlik uchun o'zgartirildi")
    }else{
        storage.setItem(user,pas)
    }
}
signup()

