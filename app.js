// Mapping navbars, buttons and container
document.addEventListener("click",runEvent);
document.addEventListener("change",hasChange);
 document.addEventListener("DOMContentLoaded",localStorageChecker);
 document.addEventListener("submit",function(e){e.preventDefault();document.activeElement.blur()});
 document.addEventListener("keyup",function(e){if(e.keyCode==13){document.activeElement.blur()}});
const menuCreate=document.querySelector("#menu-create");
const menuPreview=document.querySelector("#menu-preview");
const menuExport=document.querySelector("#menu-export");
const container=document.querySelector("#container");


function runEvent(e){
    // if(e.target.id==="inputType"){conditionByTypeChanger(e)}
    if(e.target.id==="menu-create"){renderCreate()}
    if(e.target.id==="menu-preview"){renderPreview()}
    if(e.target.id==="menu-export"){renderExport()}
    if(e.target.classList.contains("inputAdd")){inputAdd(e)} 
    if(e.target.classList.contains("deleteInput")){deleteInput(e)}
}

function inputAdd(e){
    const obj=new Frame();
    let element=obj.createIt(e);
    localUpdateAdd(obj,element);
    // obj.restoreMyOptions(obj,element);  <--- function used to restore
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    updateHTML();
e.preventDefault();
}

function deleteInput(e){
    let elementToDelete=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    dbSequence=[];
    localUpdateRemove(elementToDelete);
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    updateHTML();
}

function hasChange(e){
    if(e.target.id=="inputType" && menuCreate.classList.contains("active")){
        conditionByTypeChanger(e);
        updateHTML();
    }else if((e.target.id=="inputQuestion"||e.target.id=="conditions") && menuCreate.classList.contains("active")){
        hasChangeUpdate(e);
        updateHTML();
    }else if(menuPreview.classList.contains("active")){
        hasChangeInPreview(e);
    }
}


