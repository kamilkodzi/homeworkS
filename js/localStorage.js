let dbSequence=[];
var project=[];

function updateHTML(){
localStorage.setItem("projectHTML",JSON.stringify(container.innerHTML));
}

function renderHTML(){
container.innerHTML=JSON.parse(localStorage.getItem("projectHTML"));
}

project.__proto__.updateDB= function(){
localStorage.setItem("project",JSON.stringify(this));
};


function buildSequence(element){
    let sequence;
    if(element.parentElement.id=="container-list"){
         sequence=(Array.from(element.parentElement.children)).indexOf(element);
        dbSequence.unshift(sequence);
        return dbSequence;
    }else{
        sequence=(Array.from(element.parentElement.children)).indexOf(element)-1;
        dbSequence.unshift(sequence);
        return buildSequence(element.parentElement.parentElement);
    }
}

function byPathValueUpdate(obj,sequence,project){
    if(sequence.length==1){
        project[sequence].question=obj.question;
        project[sequence].type=obj.type;
        project[sequence].condition1=obj.condition1;
        project[sequence].condition2=obj.condition2;
    }else{
        const i=sequence[0];
        sequence.shift();
        return byPathValueUpdate(obj,sequence,project[i].subQuestions);
    }
}

function byPathUpdateOneValue(type,value,sequence,project,firstInTree){
    if(sequence.length==1){
        if(type=="question"){project[sequence].question=value}
        if(type=="condition1"){project[sequence].condition1=value}
        if(type=="condition2"){project[sequence].condition2=value}
    }else{
        const i=sequence[0];
        sequence.shift();
        return byPathUpdateOneValue(type,value,sequence,project[i].subQuestions,true);//poprawić
    }
}

function byPathUpdate(obj,sequence,project){
    if(sequence.length==1){
        return project.push(obj);
    }else{
        const i=sequence[0];
        sequence.shift();
        return byPathUpdate(obj,sequence,project[i].subQuestions);
    }
}

function byPathRemove(sequence,project){
    if(sequence.length==1){
        project.splice(sequence,1);
    }else{
        const i=sequence[0];
        sequence.shift();
        return byPathRemove(sequence,project[i].subQuestions);
    }
}

function localUpdateAdd(obj,element){
    if(element.parentElement.id=="container-list"){
        //no parrents - simple add to DB
        project.push(obj);
        project.updateDB();
    }else{
        //perrents exists-we need to locate where to push.
       dbSequence=[];
       let formPath= buildSequence(element);
       byPathUpdate(obj,formPath,project);
       project.updateDB();
}}

function localUpdateRemove(element){
    dbSequence=buildSequence(element);
    if(dbSequence.length==0){
       project.splice(dbSequence[0],1);
       project.updateDB();
    }else{
       byPathRemove(dbSequence,project); 
       project.updateDB();
    }
}

function localStorageChecker(){
    if(localStorage.getItem("project")==null){
       project.updateDB();
    }else{
        project=JSON.parse(localStorage.getItem("project"));
    }
    
    if(localStorage.getItem("projectHTML")==null){
        updateHTML();
    }else{
        renderHTML();
    }
}

function hasChangeUpdate(e){
    dbSequence=[];
    const toChangeType=e.target.classList[e.target.classList.length-1];
    const toChangeValue=e.target.value;
    const element=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    buildSequence(element);
    byPathUpdateOneValue(toChangeType,toChangeValue,dbSequence,project,false);
    
    if(e.target.type=="text"){
        e.target.setAttribute("value",e.target.value);
    }else{
        for (let i=0;i<e.target.childElementCount;i++){
            e.target.children[i].removeAttribute("selected");
        }
        
        if(e.target.value=="Yes"){e.target.children[0].setAttribute("selected",true)}
        if(e.target.value=="No"){e.target.children[1].setAttribute("selected",true)}
        if(e.target.value=="Equals"){e.target.children[0].setAttribute("selected",true)}
        if(e.target.value=="Greather than"){e.target.children[1].setAttribute("selected",true)}
        if(e.target.value=="Smaller than"){e.target.children[2].setAttribute("selected",true)}
    }
    project.updateDB();
}