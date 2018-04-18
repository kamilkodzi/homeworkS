function createPreviewElement(question,placeToAdd){
  let pattern;
  const ulToAdd=document.createElement("ul");
  ulToAdd.className="preview text-left";
  
  if(placeToAdd===document.querySelector("#container-list")){
  }else{
    ulToAdd.style.display="none";
  }
        if(question.type=="Yes/No"){
          pattern=`
              <li class="preview d-block">
             ${question.question}
                <form class="form-group">
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="previewRadio" id="previewRadioYes" value="Yes">
                      <label class="form-check-label" for="previewRadio">
                          Yes
                      </label>
                  </div>
                  
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="previewRadio" id="previewRadioNo" value="No">
                      <label class="form-check-label" for="previewRadio">
                          No
                      </label>
                  </form>
              </div>
            </li>`;    
        }else{
          pattern=`
            <li class="preview">
            ${question.question}
              <form>
                <div class="form-group">
                  <input type="text" class="form-control mb-2 mr-sm-2" id="previewInput">
                </div>
              </form> 
            </li>`;
        }
        ulToAdd.innerHTML=pattern;
        return placeToAdd.appendChild(ulToAdd);
}

function previewSurvey(myPlace,myProject){
if(myPlace===undefined){
  myPlace=document.querySelector("#container-list");
}else{
  
}

myProject.forEach(function(question,index){
      const x=createPreviewElement(question,myPlace);
      if(question.subQuestions.length==!0){
         return previewSurvey(x.firstElementChild,myProject[index].subQuestions);
      }
  });
}

function hasChangeInPreview(e){
  const changedElementUl=e.target.parentElement.parentElement.parentElement.parentElement;
  const listOfChildrenElements=e.target.parentElement.parentElement.parentElement;
  const changedValue=e.target.value;
  // const changedValueType=e.target.type;
  dbSequence=[];
  buildSequence(changedElementUl);
  const subQuestions=byPathPreviewAdd(dbSequence,project);
  
  subQuestions.forEach(function(question,index){
    if(question.condition1=="Equals"){
       if(changedValue==question.condition2){
         //change to dispal yes
         listOfChildrenElements.children[index+1].style.display="";
       }else{
         listOfChildrenElements.children[index+1].style.display="none";
       }
    }
    
    if(question.condition1=="Greather than"){
       if(Number(changedValue)>Number(question.condition2)){
         //change to dispal yes
         listOfChildrenElements.children[index+1].style.display=""
       }else{
        listOfChildrenElements.children[index+1].style.display="none";
         
       }
    }
    
    if(question.condition1=="Less than"){
       if(Number(changedValue)<Number(question.condition2)){
         //change to dispal yes
         listOfChildrenElements.children[index+1].style.display=""
       }else{
         listOfChildrenElements.children[index+1].style.display="none";
       }
    }
  });
}

function byPathPreviewAdd(sequence,project){
    if(sequence.length==1){
      return project[sequence].subQuestions;
    }else{
        const i=sequence[0];
        sequence.shift();
        return byPathPreviewAdd(sequence,project[i].subQuestions);
    }
}