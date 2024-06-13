const studentDetailsBox = document.getElementsByClassName("studentDetailsBox");
const netStudentDetailsBox = studentDetailsBox.length;

for(let i=0;i<netStudentDetailsBox;i++){
    let netStudentDetailsBoxChildren = studentDetailsBox[i].childNodes.length;
    for(let j=0;j<netStudentDetailsBoxChildren;j++){
        if(j%2==0){
            studentDetailsBox[i].childNodes[j].classList.add("even");
        } else {
            studentDetailsBox[i].childNodes[j].classList.add("odd");
        }



    }
}