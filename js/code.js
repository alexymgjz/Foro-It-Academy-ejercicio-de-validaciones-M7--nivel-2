var NameValidate = false;
var MailValidate = false;
var PasswordValidate = false;
var Rewritepassword = false;
var validateSelect = false;

function validateName(identificadorDeCampo, identificadorDeTexto) {
  const validPasswordReg  = /^[a-zñ]{3,}$/
  const addClasses = document.getElementById(identificadorDeCampo).value;

  if (addClasses.match(validPasswordReg)) {
    document.getElementById(identificadorDeCampo).classList.remove("is-invalid");
    document.getElementById(identificadorDeCampo).classList.add("is-valid");
    document.getElementById(identificadorDeTexto).classList.add("hide");
    NameValidate = true
  }else if(!addClasses.match(validPasswordReg)){
    document.getElementById(identificadorDeCampo).classList.add("is-invalid");
    document.getElementById(identificadorDeCampo).classList.remove("is-valid");
    document.getElementById(identificadorDeTexto).classList.remove("hide");
    NameValidate = false;
}
console.log(NameValidate);
return NameValidate;
}



function validateMail(identificadorDeCampo, identificadorDeTexto) {
  const validPasswordReg  = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const addClasses = document.getElementById(identificadorDeCampo).value;

  if (addClasses.match(validPasswordReg)) {
    document.getElementById(identificadorDeCampo).classList.remove("is-invalid");
    document.getElementById(identificadorDeCampo).classList.add("is-valid");
    document.getElementById(identificadorDeTexto).classList.add("hide");
    MailValidate = true
  }else if(!addClasses.match(validPasswordReg)){
    document.getElementById(identificadorDeCampo).classList.add("is-invalid");
    document.getElementById(identificadorDeCampo).classList.remove("is-valid");
    document.getElementById(identificadorDeTexto).classList.remove("hide");
    MailValidate = false;
}
console.log(MailValidate);
return MailValidate;
}


function validatepassword(identificadorDeCampo, identificadorDeTexto) {

  const validPasswordReg  = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}/
  const text = document.getElementById(identificadorDeCampo).value;
  if (text.match(validPasswordReg)) {
    document.getElementById(identificadorDeCampo).classList.remove("is-invalid");
    document.getElementById(identificadorDeCampo).classList.add("is-valid");
    document.getElementById(identificadorDeTexto).classList.add("hide");
    PasswordValidate = true;
  }else if(!text.match(validPasswordReg)){
    document.getElementById(identificadorDeCampo).classList.add("is-invalid");
    document.getElementById(identificadorDeCampo).classList.remove("is-valid");
    document.getElementById(identificadorDeTexto).classList.remove("hide");
    PasswordValidate = false;
}
console.log(PasswordValidate);
return PasswordValidate;
}

function validateRewritepassword(identificadorDePasOriginal,identificadorDePassActual, identificadorDeTexto) {

  const text = document.getElementById(identificadorDePasOriginal).value;
  const text1 = document.getElementById(identificadorDePassActual).value;
  
  if (text==text1&& text!= '') {
    document.getElementById(identificadorDePassActual).classList.remove("is-invalid");
    document.getElementById(identificadorDePassActual).classList.add("is-valid");
    document.getElementById(identificadorDeTexto).classList.add("hide");
    Rewritepassword = true;
  }else{
    document.getElementById(identificadorDePassActual).classList.add("is-invalid");
    document.getElementById(identificadorDePassActual).classList.remove("is-valid");
    document.getElementById(identificadorDeTexto).classList.remove("hide");
    Rewritepassword = false;
}
console.log(Rewritepassword);
return Rewritepassword;
}

function validateSelection(identificadorDeCampo, identificadorDeTexto) {
  const addClasses = document.getElementById(identificadorDeCampo).value;

  if (addClasses!=='') {
    document.getElementById(identificadorDeCampo).classList.remove("is-invalid");
    document.getElementById(identificadorDeCampo).classList.add("is-valid");
    document.getElementById(identificadorDeTexto).classList.add("hide");
    validateSelect = true
  }else{
    document.getElementById(identificadorDeCampo).classList.add("is-invalid");
    document.getElementById(identificadorDeCampo).classList.remove("is-valid");
    document.getElementById(identificadorDeTexto).classList.remove("hide");
    validateSelect = false;
}
return validateSelect;
}




const myForm = document.getElementById('Sign');
myForm.addEventListener('submit', (e)=>{
    if(MailValidate && PasswordValidate){
    $("#Sign").submit();

}else{
  e.preventDefault();
  document.getElementById('mail').classList.add("is-invalid");
  document.getElementById('pass').classList.add("is-invalid");
  document.getElementById('required-text').classList.remove("hide");
  document.getElementById('required-password').classList.remove("hide");
} 

} )

const myForm1 = document.getElementById('register');
myForm1.addEventListener('submit', (e)=>{
    if(MailValidate && PasswordValidate && NameValidate && Rewritepassword){
    $("#Sign").submit();

}else{
  e.preventDefault();
  if (!NameValidate) {
    document.getElementById('name').classList.add("is-invalid");
    document.getElementById('required-name').classList.remove("hide");
  }

  if (!MailValidate) {
    document.getElementById('mail1').classList.add("is-invalid");
    document.getElementById('required-text1').classList.remove("hide");
  }

  if (!PasswordValidate) {
    document.getElementById('password1').classList.add("is-invalid");
    document.getElementById('required-password1').classList.remove("hide");
  }

  if (!Rewritepassword) {
    document.getElementById('rewrite-password').classList.add("is-invalid");
    document.getElementById('rewrite-text').classList.remove("hide");
  }
  if (!validateSelect) {
    document.getElementById('region').classList.add("is-invalid");
    document.getElementById('select-text').classList.remove("hide");
  }
} 

} )

const identificadores = [
  {id:'Fdlp'},
  {id:'Frontend-Angular'},
  {id:'front-end-react'},
  {id:'front-end-vue'},
  {id:'dot-net'},
  {id:'data-science'},
  {id:'java'},
  {id:'node-js-backend'},
  {id:'php'},
];

const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const  buscar = ()=> { 
  resultado.innerHTML='';
const texto = formulario.value.toLowerCase();
for (let identificador of identificadores) {
  
  let nombre = identificador.id.toLowerCase();
  if (nombre.indexOf(texto) !== -1) {
    resultado.innerHTML +=`<li><a href="#${identificador.id}">${identificador.id}</a></li>`
    console.log(resultado);
  }
}
  if (resultado.innerHTML=='') {
    resultado.innerHTML += `<li>Tema no encontrado</li>`    
  }   
} 
  
formulario.addEventListener('keyup', buscar);
buscar();

function mostrarUl(){ 
  document.getElementById('resultado').classList.remove('hide');
}


function hideUl(){ 
  document.getElementById('resultado').classList.toggle('hide');
}

