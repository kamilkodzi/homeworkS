function previewSurvey(){
const containerList=document.querySelector("#container-list");
project.forEach(function(question){
  let pattern;
  const ulToAdd=document.createElement("ul");
  ulToAdd.className="preview text-left";
  
        if(question.type=="Yes/No"){
          pattern=`
          
              <li class="preview d-block">
              <div class="questionAsked">${question.question}</div>
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
                  </div>
            </li>`;    
          
        }else{
          pattern=`
            <li class="preview">
            <div class="questionAsked">${question.question}</div>
              <div>
                <input type="text" class="form-control mb-2 mr-sm-2" id="previewInput">
              </div>
            </li>`;
        }
        ulToAdd.innerHTML=pattern;
        containerList.appendChild(ulToAdd);
  });
}




function hasChangeInPreview(e){
  const changedElementUl=e.target.parentElement.parentElement.parentElement;
  const placeToPasteNewElement=e.target.parentElement.parentElement;
  const changedValue=e.target.value;
  dbSequence=[];
  buildSequence(changedElementUl);
  
  console.log(changedElementUl);
  console.log(placeToPasteNewElement);
  console.log(changedValue);
  
}










