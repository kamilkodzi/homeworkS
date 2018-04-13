function inputAdd(e){
    const x=new Frame();
    x.createIt(e);
}

function inputAddSub(e){
    const x=new Frame("","Yes/No",true);
    const path=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    x.createIt(path);
}

function deleteInput(e){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}



function Frame(question="",type="Yes/No",condition1,condition2){
    this.question=question;
    this.type=type;
    this.isSubquestion=condition1;
    this.condition2=condition2;
    
    Frame.prototype.createIt= function(cont){
        
        
        const patter=`
        <ul id="container-list" class="list-group border-0">
            <li class="list-group-item border-0">
                <div class="card border-dark frame-body-element">
                  <div class="card-body text-dark">
                    <form name="homeform">
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label" for="conditions">Question</label>
                          <div class="col-sm-6">
                            <select id="conditions" class="form-control">
                              <option>Equals</option>
                              <option>Greather than</option>
                              <option>Less than</option>
                            </select>
                          </div>
                          <div class="col-sm-4">
                            <select id="conditions" class="form-control">
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </div>
                        </div>
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
             </li>
        </ul>
        `;
        
        
          
        
        
        
        
        
    
    let myElement="li";
    if(this.isSubquestion==!false){myElement="ul"}
    
    
    let myContainer=document.querySelector("#container-list");
    // let myContainer="#container-list";
    if(this.isSubquestion==!false){
        myContainer=cont;
    }
    
    let myClass="list-group-item border-0";
    if(this.isSubquestion==!false){myClass="list-group border-0"}
    
    let extraLi="";
    if(this.isSubquestion==!false){extraLi=`<li class="list-group-item border-0">`}
    
    let extraLiEnd="";
    if(this.isSubquestion==!false){extraLiEnd=`</li>`}
    
    
    function subquestionInput1(e){
        console.log(e.target);
    }
    
    
    function subquestionInput2(){
        
    }
    
    
    
    let extraDivForSubInput="";
    if(this.isSubquestion==!false){extraDivForSubInput=`
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="inputCondition">Condition</label>
              <div class="col-sm-10">
                <select id="inputType" class="form-control">
                    
                   <option>Equals</option>
                   <option>Greater than</option>
                   <option>Less than</option>
                </select>
                
              </div>
            </div>
    
    `}
    
    let extraDivForSubInputEnd="";
    if(this.isSubquestion==!false){extraDivForSubInput=`
    
    
    `}
    
    
    
    const blankInput=document.createElement(`${myElement}`);
    console.log(myElement);
    blankInput.className=myClass;

blankInput.innerHTML=`
        ${extraLi}
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
    ${extraLiEnd}
`;

 myContainer.appendChild(blankInput);
 document.activeElement.blur();
    };
}

