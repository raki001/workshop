function validateForm(){
    alert('im in validateForm fuction')
    let val=true;
    let nameValue = document.formName.nameName.value;
    let genderSelected = document.querySelector('input[name="gender"]:checked');

if (genderSelected) {
    alert("Gender selected: " + genderSelected.value);
} else {
    alert("No gender selected");
}

    
    if(nameValue.length <5){
        alert('!!!!!!!!!')
        val=false;
    }
    return val;
}
function resetForm(){
    alert('!!!!!!!!')
}

                

