// Mapping navbars, buttons and container
document.addEventListener("click",runEvent);
document.addEventListener("change",conditionByTypeChanger);
const menuCreate=document.querySelector("#menu-create");
const menuPreview=document.querySelector("#menu-preview");
const menuExport=document.querySelector("#menu-export");
const container=document.querySelector("#container");

function runEvent(e){
    // if(e.target.id==="inputType"){conditionByTypeChanger(e)}
    if(e.target.id==="menu-create"){renderCreate()}
    if(e.target.id==="menu-preview"){renderPreview()}
    if(e.target.id==="menu-export"){renderExport()}
    // if(e.target.id==="conditions"||e.target.id==="inputType"){console.log("Here will be refresh function")}
    // if(e.target.id==="inputAdd"){inputAdd(e)}
    if(e.target.classList.contains("inputAdd")){inputAdd(e)} 
    if(e.target.classList.contains("deleteInput")){deleteInput(e)}
}


function inputAdd(e){
    const obj=new Frame();
    let element=obj.createIt(e);
    // obj.restoreMyOptions(obj,element);  <--- function used to restore
    
    let project=[];
    project.push(obj);
    console.log(obj);
    console.log(JSON.stringify(obj));
    
    
    // localStorage.setItem("project",project);
    
    
}

function deleteInput(e){
  console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement==e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2]);
   
    // e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}