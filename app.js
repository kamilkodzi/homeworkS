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
    // if(e.target.id==="inputAdd"){inputAdd(e)}
    if(e.target.classList.contains("inputAdd")){inputAdd(e)} //inputAddSub(e)
    if(e.target.classList.contains("deleteInput")){deleteInput(e)}
}



function conditionByTypeChanger(e){
    const answers={
        "Yes/No":["Equals"],
        "Text":["Equals"],
        "Number":["Equals","Greather than","Smaller than"]
    };
    const list=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const chosenOption =e.target.value;

 
    for (let i=1;i<list.children.length;i++){
        const firstConditionField= list.children[i].firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild;
        console.log(firstConditionField.parentElement.nextElementSibling)
        
        
        if(chosenOption=="Yes/No"){
            firstConditionField.parentElement.nextElementSibling.innerHTML=`           
            <select id="conditions" class="form-control">
              <option>Yes</option>
              <option>No</option>
            </select>`;
        }else{
            firstConditionField.parentElement.nextElementSibling.innerHTML=`<input type="text" class="form-control" id="conditions">`;
        }
        
    while (firstConditionField.options.length) {
        firstConditionField.remove(0);
    }
    
    for (let i = 0; i < answers[chosenOption].length; i++) {
        console.log(answers[chosenOption]);
        let myNewOption=document.createElement("option");
        myNewOption.text=answers[chosenOption][i];
        firstConditionField.options.add(myNewOption);
        }
    
        
    }
}