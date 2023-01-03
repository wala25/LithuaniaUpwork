const signupBtn=document.getElementById('signupBtn')
const emailInput=document.getElementById('email')
const nameInput=document.getElementById('name')
const passwordInput=document.getElementById('password')
const errorHTML=document.getElementById('error-msg')

signupBtn.addEventListener('click',e=>{
    e.preventDefault()
    errorHTML.style.display="none"
    let email=emailInput.value;
    let name=nameInput.value;
    let password=passwordInput.value;
    if((email.length&&name.length&&password.length)>0){
        let user={email:email,name:name,password:password}
        errorHTML.style.display="none"
        console.log(user)   
    }
    else{
        errorHTML.style.display="block"
    }
    
})

