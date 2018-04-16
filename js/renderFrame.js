


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
        if(chosenOption=="Yes/No"){
            firstConditionField.parentElement.nextElementSibling.innerHTML=`           
            <select id="conditions" class="form-control">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>`;
        }else{
            firstConditionField.parentElement.nextElementSibling.innerHTML=`<input type="text" class="form-control" id="conditions" value="">`;
        }
    while (firstConditionField.options.length) {
        firstConditionField.remove(0);
    }
    
    for (let i = 0; i < answers[chosenOption].length; i++) {
        let myNewOption=document.createElement("option");
        myNewOption.text=answers[chosenOption][i];
        myNewOption.setAttribute("value",answers[chosenOption][i]);
        firstConditionField.options.add(myNewOption);
        }
    }
}



function Frame(question="",type="Yes/No",condition1=null,condition2=null){
    this.question=question;
    this.type=type;
    this.condition1=condition1;
    this.condition2=condition2;
    this.subQuestions=[];
    let framePlace;


    Frame.prototype.restoreMyOptions=function(obj,ele){
      const typeOfForm=ele.querySelectorAll("input").length*ele.querySelectorAll("select").length;
      let question;
      let type;
      let condition1;
      let condition2;
      console.log(typeOfForm);
      switch (typeOfForm){
        case 1:
          type=ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1].lastElementChild.firstElementChild;
          question=ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild;
          question.value=obj.question;
          type.value=obj.type;
        break;
        
        default:
          condition1=ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[0].children[1].firstElementChild;
          condition2=ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[0].lastElementChild.firstElementChild;
          type=ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[2].lastElementChild.firstElementChild;
          question=ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.children[1].lastElementChild.firstElementChild;
          condition1.value=obj.condition1;
          condition2.value=obj.condition2;
          type.value=obj.type;
          question.value=obj.question;
        break;
      }
    };


    Frame.prototype.createIt= function(e){
        //We`re checking is place to paste the new Form basing on clicked target
        let htmlCode;
        let pattern;
        
        if(e.target.parentElement.id=="container"){
            //If we clicked AddInput
            framePlace=document.querySelector("#container-list");
            htmlCode="";
            
            
            
            
            
        }else{
            //If we added sub input
            framePlace=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            const parentFrame=(framePlace.firstElementChild.firstElementChild.firstElementChild);
            const parentType=parentFrame[parentFrame.length-1].value;
            this.condition1="Equals";
            this.condition2="Yes";
            // this.condition1=parentFrame[parentFrame.length-1].value;
            // console.log(this.condition1);

            htmlCode=`
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="conditions">Condition</label>
                <div class="col-sm-6">
                  <select id="conditions" class="form-control">`;

          switch(parentType){
            case "Yes/No":
              htmlCode+=('<option value="Equals">Equals</option>');
              break;
            case "Text":
              htmlCode+=('<option value="Equals">Equals</option>');
               break;
            case "Number":
              htmlCode+=('<option value="Equals">Equals</option><option value="Greather than">Greather than</option><option value="Less than">Less than</option>');
               break;
          }
          
          htmlCode+=(`</select></div><div class="col-sm-4">`);
          
          switch(parentType){
            case "Yes/No":
              htmlCode+=(`
            <select id="conditions" class="form-control">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
              `);
            break;
            default:
              htmlCode+=(`
              <input type="text" class="form-control" id="conditions" value="">`);}
          
          
          htmlCode+=(`
            </div>
            </div>`);
        }
        
   
        
    pattern=document.createElement("ul");
    pattern.className="list-group border-0";
   
        pattern.innerHTML=`
            <li class="list-group-item border-0">
                <div class="card border-dark frame-body-element">
                  <div class="card-body text-dark">
                    <form name="homeform">
                    ${htmlCode}
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label" for="inputQuestion">Question</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputQuestion" value="">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputType" class="col-sm-2 col-form-label">Type</label>
                          <div class="col-sm-10">
                            <select id="inputType" class="form-control">
                              <option value="Yes/No">Yes/No</option>
                              <option value="Text">Text</option>
                              <option value="Number">Number</option>
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
 return(framePlace.lastElementChild);
    };
    
    
            
    
    
}

