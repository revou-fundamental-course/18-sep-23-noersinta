function validationForm() {
    let name = document.forms['formContact']['yourName'].value;
    let email = document.forms['formContact']['yourEmail'].value;
    let opt = document.forms['formContact']['selection'].value;
    
    // console.log(name);
    // console.log(email);
    // console.log(opt);

    if(!name){
        document.getElementById("nameError").innerHTML = "Name cannot be blank!";
    }else{
        document.getElementById("nameError").innerHTML = "";
    }

    if(!email){
        document.getElementById("emailError").innerHTML = "Email cannot be blank!";
    }else{
        document.getElementById("emailError").innerHTML = "";
    }

    if(!opt){
        document.getElementById("selectError").innerHTML = "Interest cannot be blank!";
    }else{
        document.getElementById("selectError").innerHTML = "";
    }
};