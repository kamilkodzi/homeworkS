let dbSequence=[];
var project=[];

project.__proto__.updateDB= function(){
     console.log("updating...");
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
    console.log(sequence);
    console.log(obj);
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
}

