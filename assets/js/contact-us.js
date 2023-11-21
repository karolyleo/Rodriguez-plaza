let form = document.getElementById("out-reach");


form.addEventListener("submit", () => {
    let name = document.getElementById("inputName").value,
        email = document.getElementById("inputEmail").value,
        phone = document.getElementById("inputPhone").value,
        msg = document.getElementById("inputMessage").value,
        outReach = "Name: "+name+"\nEmail: "+email+"\nPhone: "+phone+"\nMessage: "+msg;

    console.log(outReach);
})