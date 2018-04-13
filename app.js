// Mapping navbars, buttons and container
document.addEventListener("click",runEvent);
const menuCreate=document.querySelector("#menu-create");
const menuPreview=document.querySelector("#menu-preview");
const menuExport=document.querySelector("#menu-export");
const container=document.querySelector("#container");

function runEvent(e){
    if(e.target.id==="menu-create"){renderCreate()}
    if(e.target.id==="menu-preview"){renderPreview()}
    if(e.target.id==="menu-export"){renderExport()}
    if(e.target.id==="inputAdd"){inputAdd()}
    if(e.target.classList.contains("addSubInput")){inputAddSub(e)}
    if(e.target.classList.contains("deleteInput")){deleteInput(e)}
}
