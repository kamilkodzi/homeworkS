var project=[];
let dbSequence=[];

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
    }else{
        //perrents exists-we need to locate where to push.
       dbSequence=[];
       let formPath= buildSequence(element);
       byPathUpdate(obj,formPath,project);
       
}}

function localUpdateRemove(element){
    
    dbSequence=buildSequence(element);
    if(dbSequence.length==0){
       project.splice(dbSequence[0],1); 
    }else{
       byPathRemove(dbSequence,project); 
    }
}

