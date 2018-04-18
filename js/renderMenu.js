function deactiveMenu(){
    const tabs = document.querySelector("ul").children;
    for(let x=0;x<tabs.length;x++){
        tabs[x].children[0].classList.remove("active");
    }
}

function clearContainer(){
        while (container.firstChild){
            container.removeChild(container.firstChild);
    }
}

function renderExport(){
    clearContainer();
    deactiveMenu();
    menuExport.classList.add("active");
    const htmlElement=document.createElement("textarea");
    htmlElement.id="exportTextArea";
    container.appendChild(htmlElement);
    if((htmlElement.textContent=JSON.stringify(project)).length>2){
        htmlElement.textContent=JSON.stringify(project);
    }else{
        htmlElement.textContent="";
    }
}

function renderCreate(){
    clearContainer();
    deactiveMenu();
    menuCreate.classList.add("active");
    const htmlElement=document.createElement("div");
    const htmlElement2=document.createElement("a");
    htmlElement.id="container-list";
    container.appendChild(htmlElement);
    htmlElement2.id="inputAdd";
    htmlElement2.className="btn btn-dark float-left inputAdd";
    htmlElement2.href="#";
    htmlElement2.textContent="Add Input";
    container.appendChild(htmlElement2);
    renderHTML();
}

function renderPreview(){
    clearContainer();
    deactiveMenu();
    menuPreview.classList.add("active");
    const htmlElement=document.createElement("div");
    htmlElement.id="container-list";
    container.appendChild(htmlElement);
    previewSurvey(undefined,project);
}