const container=document.querySelector("#container-list");
const inputAddBtn=document.querySelector("#inputAdd");
const blankInput=document.createElement("li")
blankInput.className="list-group-item border-0";

blankInput.innerHTML=`
      <div id="frame-body-element" class="card border-dark">
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
              <button type="submit" class="btn btn-sm btn-dark">Add-Sub-Input</button>
                <button type="delete" class="btn btn-sm btn-dark">Delete</button>
            </div>
          </form>
      </div>
    </div>
`;

inputAddBtn.addEventListener("click",inputAdd);

function inputAdd(){
 container.appendChild(blankInput)  
}