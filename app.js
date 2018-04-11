// Mapping navbars, buttons and container
const menuCreate=document.querySelector("#menu-create");
const menuPreview=document.querySelector("#menu-preview");
const menuExport=document.querySelector("#menu-export");
const container=document.querySelector("#container");
const inputAddBtn=document.querySelector("#inputAdd");
var storageMyData=[];
let cos;

document.addEventListener("click",runEvent);
function runEvent(e){
    if(e.target.id==="menu-create"){renderCreate()}
    if(e.target.id==="menu-preview"){renderPreview()}
    if(e.target.id==="menu-export"){renderExport()}
    if(e.target.id==="inputAdd"){inputAdd()}
    if(e.target.classList.contains("addSubInput")){inputAddSub()}
    if(e.target.classList.contains("deleteInput")){deleteInput()}
}



function deactiveMenu(){
    const tabs = document.querySelector("ul").children;
    for(let x=0;x<tabs.length;x++){
        tabs[x].children[0].classList.remove("active");
    }
}



function clearContainer(){
        while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function renderExport(){
    clearContainer();
    deactiveMenu();
    menuExport.classList.add("active");
    
    const htmlElement=document.createElement("textarea");
    htmlElement.id="exportTextArea";
    container.appendChild(htmlElement);
}

function renderCreate(){
    clearContainer();
    deactiveMenu();
    menuCreate.classList.add("active");
    
    const htmlElement=document.createElement("ul");
    const htmlElement2=document.createElement("a");
    htmlElement.id="container-list";
    htmlElement.className="list-group border-0";
    container.appendChild(htmlElement);
    htmlElement2.id="inputAdd";
    htmlElement2.className="btn btn-dark float-left";
    htmlElement2.href="#";
    htmlElement2.textContent="Add Input";
    container.appendChild(htmlElement2);
    
}

function renderPreview(){
    clearContainer();
    deactiveMenu();
    menuPreview.classList.add("active");
    
    const htmlElement=document.createElement("ul");
    htmlElement.id="container-list";
    htmlElement.className="list-group border-0";
    container.appendChild(htmlElement);

    
}










//     function x(clearContainer,callback){
//         callback(function z(){
//             const list=document.createElement("ul");
//             list.className="list-group border-0";
//             list.id="container-list";
//     //         container.appendChild(list);
//     //     });
//     // }
// }


function Frame(question="",type="Yes/No"){
    this.question=question;
    this.type=type;
}

// document.addEventListener("submit",function(e){
// cos=e;
// console.log(cos);
// e.preventDefault();
// });


function inputAddSub(){
    console.log("new sub input added");
}

function deleteInput(){
    console.log("input deleted");
}

function inputAdd(e){
    const blankInput=document.createElement("li");
    const container=document.querySelector("#container-list");
    const newFrame=new Frame();
    blankInput.className="list-group-item border-0";

blankInput.innerHTML=`
      <div class="card border-dark frame-body-element">
        <div class="card-body text-dark">
          <form name="homeform">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="inputQuestion">Question</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputQuestion">
              </div>
            </div>
             
            <div class="form-group row">
               <label for="inputType" class="col-sm-2 col-form-label">Type</label>
               <div class="col-sm-10">
                 <select id="inputType" class="form-control">
                   <option>Yes/No</option>
                   <option>Text</option>
                   <option>Number</option>
                 </select>
               </div>
            </div>
            <div class="float-right">
            <a href="#" class="btn btn-sm btn-dark addSubInput">Add-Sub-Input</a>
            <a href="#" class="btn btn-sm btn-dark deleteInput">Delete</a>
            </div>
          </form>
      </div>
    </div>
`;
    
    
    
 container.appendChild(blankInput);
//  e.preventDefault();
 storageMyData.push(newFrame);
 document.activeElement.blur();
}