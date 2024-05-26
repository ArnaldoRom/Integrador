function validar() {
    const formNombre = document.getElementById("nombre"); 
    const formTelefono = document.getElementById("telefono");
    const formEmail = document.getElementById("email");
    const textArea = document.getElementById("textArea");

    const expRegNombre = /^[a-zA-Z\s]{1,40}$/
    const expRegTelefono = /^[1-9][0-9]{0,10}$/
    const expRegEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

    let confirma = false;

    function limpiar (){
        const errores = document.querySelectorAll('.error');
        errores.forEach(error => error.remove());

        const erroresInput = document.querySelectorAll('.errorInput');
        erroresInput.forEach(input => input.classList.remove('errorInput'));
    }

    limpiar();

    if(formNombre.value.trim() == "" || !expRegNombre.test(formNombre.value)){
        let error = document.createElement('span');
        error.innerHTML = 'Ingrese un Nombre y apellido valido';
        error.className = 'error';
        formNombre.classList.add('errorInput');
        formNombre.insertAdjacentElement('afterend',error);
        
        confirma = true;
        
    }
    
    if(formTelefono.value.trim() == "" || !expRegTelefono.test(formTelefono.value)){
        let error = document.createElement('span');
        error.innerHTML = 'Ingrese un Telefono valido';
        error.className = 'error';
        formTelefono.classList.add('errorInput');
        formTelefono.insertAdjacentElement('afterend',error);
        
        confirma = true;
        
    }
    
    if(formEmail.value.trim() == "" || !expRegEmail.test(formEmail.value)){
        let error = document.createElement('span');
        error.innerHTML = 'Ingrese un Email valido';
        error.className = 'error';
        formEmail.classList.add('errorInput');
        formEmail.insertAdjacentElement('afterend',error);
        
        confirma = true;
        
    } 
    
    if(textArea.value.trim() == "" ){
        let error = document.createElement('span');
        error.innerHTML = 'Ingrese motivo de contacto';
        error.className = 'error';       
        textArea.classList.add('errorInput');
        textArea.insertAdjacentElement('afterend',error);
        
        confirma = true;
    }  
    
    if(confirma){
        return false;
    } else{    
        let msj =` Muchas gracias ${formNombre.value}, Pronto estaremos en contacto.`;
        const formu = document.getElementById('form')
        formu.innerHTML = `<h3 class = "confirmaFormulario">${msj}</h3>`;     
        
    }    

    return false;
}



