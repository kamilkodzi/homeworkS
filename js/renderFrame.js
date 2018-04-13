function inputAdd(e){
    const x=new Frame();
    x.createIt(e);
}

function deleteInput(e){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}



function Frame(question="",type="Yes/No",condition1,condition2){
    this.question=question;
    this.type=type;
    this.condition1=condition1;
    this.condition2=condition2;
    let framePlace;
    
    Frame.prototype.createIt= function(e){
        
        if(e.target.parentElement.id=="container"){
            framePlace=document.querySelector("#container-list");
        }else{
            framePlace=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        }
        
        
        // let myContainer=document.querySelector("#container-list");
        // // let myContainer="#container-list";
        // if(this.isSubquestion==!false){
        //     myContainer=cont;
        // }
        
        
        
        const patternConditionFormOptions=`
            <option>Equals</option>
            <option>Greather than</option>
            <option>Less than</option>
        `;
        
        
        const patternConditionFormAnswer=`
            <select id="conditions" class="form-control">
              <option>Yes</option>
              <option>No</option>
            </select>
        `;
        
        
        //bedzie zalezec od rodzina jakie odpowiedzi
        const patternConditionForm=`
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="conditions">Question</label>
              <div class="col-sm-6">
                <select id="conditions" class="form-control">
                 ${patternConditionFormOptions} 
                </select>
              </div>
              <div class="col-sm-4">
                ${patternConditionFormAnswer}
              </div>
            </div>
        `;
        
        
        const patternQuestionValue="";





    
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
    
    
    
    const pattern=document.createElement("ul");
    pattern.className="list-group border-0";

pattern.innerHTML=`
            <li class="list-group-item border-0">
                <div class="card border-dark frame-body-element">
                  <div class="card-body text-dark">
                    <form name="homeform">
                    ${patternConditionForm}
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label" for="inputQuestion">Question</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputQuestion" value="${patternQuestionValue}">
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
                        <div id="buttons" class="float-right">
                          <a href="#" class="btn btn-sm btn-dark inputAdd">Add-Sub-Input</a>
                          <a href="#" class="btn btn-sm btn-dark deleteInput">Delete</a>
                        </div>
                    </form>
                  </div>
                </div>
             </li>
`;

 framePlace.appendChild(pattern);
 document.activeElement.blur();
    };
}

