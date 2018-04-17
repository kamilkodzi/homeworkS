function previewSurvey(){
const containerList=document.querySelector("#container-list");
    
containerList.innerHTML=`

<ul class="preview text-left">
  Czy Kamil lubi jesc placki?
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
  </li>
</ul>

<ul class="preview text-left">
  Jakie Kamil lubi jeść placki?
    <li class="preview">
      <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2">
  </li>
</ul>


<ul class="preview text-left">
  Ile Kamil lubi jeść placki?
    <li class="preview">
      <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2">
  </li>
</ul>
    
    
    
    
    `;
    
    // console.log("hello for survey js");
    // project.forEach(function(question){
    //   console.log(question); 
    //   console.log(containerList);
    //   const cosNowego=document.createElement("ul");
    //   cosNowego.innerText=question.question;
    //   const cosNowego2=document.createElement("li");
    //   cosNowego.appendChild(cosNowego2);
    //   cosNowego2.innerText="testujemy";
    //   containerList.appendChild(cosNowego);
    // });
    
    
}