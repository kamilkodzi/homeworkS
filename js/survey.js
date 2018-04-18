function previewSurvey(){
const containerList=document.querySelector("#container-list");
    

project.forEach(function(question){
let pattern;
const ulToAdd=document.createElement("ul");
ulToAdd.className="preview text-left";

      if(question.type=="Yes/No"){
        pattern=`
        ${question.question}
            <li class="preview">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                    <label class="form-check-label" for="exampleRadios1">
                        Yes
                    </label>
                </div>
                
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                    <label class="form-check-label" for="exampleRadios2">
                        No
                    </label>
                </div>
          </li>`;    
        
      }else{
        pattern=`
          ${question.question}
            <li class="preview">
              <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2">
          </li>`;
      }
      ulToAdd.innerHTML=pattern;
      containerList.appendChild(ulToAdd);
});
    
    
}