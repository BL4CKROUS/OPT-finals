function fn(){
    const pass= document.getElementById("pass").value
    const passcode= "12345"

    if(pass == passcode) {
        
        window.location.href = "https://bl4ckrous.github.io/portfolio/"
    } else if(pass == "") {
        alert("Please Enter Passcode")
    } else if(pass != passcode) {
        alert("You Enter the Wrong Passcode")
    } 



}
