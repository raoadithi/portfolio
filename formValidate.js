document.getElementById('form-submit').addEventListener('click',function(){
    let name = document.getElementById('exampleNameInput').value;
    let emailaddress = document.getElementById('exampleInputEmail').value;
    let message = document.getElementById('exampleTextarea').value;

    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    if(name == ''){
        document.getElementById('name-error').innerText = 'Name is required';
    } else if ( emailaddress == ''){
        document.getElementById('email-error').innerText = 'Email is required';
    }else{
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
  });