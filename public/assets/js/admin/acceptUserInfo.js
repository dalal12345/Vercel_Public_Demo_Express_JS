const copyHandlers = document.getElementsByClassName("copyHandler");
// console.log(copyHandlers)
const studentSecretKeys = document.getElementsByClassName("studentSecretKey");
let secretKeyIsVisible = true;
let netKeys = studentSecretKeys.length;

for(let i=0;i<netKeys;i++){
    //CopyHandler
    copyHandlers[i].addEventListener("click",(e)=>{
        if(secretKeyIsVisible){
            e.target.innerHTML="SecretKey is visible";
            e.target.classList.remove("btn-primary");
            e.target.classList.add("btn-danger");
            studentSecretKeys[i].style.display="grid";
            secretKeyIsVisible = false;
        } else {
            e.target.innerHTML="SecretKey";
            e.target.classList.add("btn-success");
            e.target.classList.remove("btn-danger");
            studentSecretKeys[i].style.display="none";
            secretKeyIsVisible = true;
        }
    })
}



