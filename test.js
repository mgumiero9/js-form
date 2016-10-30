var myForm = document.forms.myForm;
var myMessage = document.getElementById('message');
myForm.onsubmit = function () {
    if (myForm.name.value == "") {
        myMessage.innerHTML = 'Enter a name!';
        console.log('empty');
        return false;
    }
    else {
        myMessage.innerHTML = '';
        console.log('filled');
        console.log(myForm.name.value);

        return true;
    }
}
