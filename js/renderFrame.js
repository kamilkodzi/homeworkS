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
            this.condition1=parentFrame[parentFrame.length-1].value;
            

            htmlCode=`
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="conditions">Condition</label>
                <div class="col-sm-6">
                  <select id="conditions" class="form-control">`;
          
          htmlCode+="<option>Equals</option><option>Greather than</option><option>Less than</option>";
         
          // switch(this.condition1){
          //   case "Yes/No":
          //     htmlCode+=("<option>Equals</option>");
          //   case "Text":
          //     htmlCode+=("<option>Equals</option>");
          //   case "Number":
          //     htmlCode+=("<option>Greather than</option><option>Greather than</option><option>Less than</option>");
          // }
          
          htmlCode+=(`</select></div><div class="col-sm-4">`);
          
          switch(this.condition1){
            case "Yes/No":
              htmlCode+=(`
            <select id="conditions" class="form-control">
              <option>Yes</option>
              <option>No</option>
            </select>
              `);
            break;
            default:
              htmlCode+=(`
              <input type="text" class="form-control" id="conditions">`);}
          
          
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

