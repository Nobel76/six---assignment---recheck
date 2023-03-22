const loadTools = async(dataLimit) =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayTools(data.data.tools,dataLimit)
}

const displayTools = (tools, dataLimit )=>{
   const toolsContainer = document.getElementById('tools-container');
  //  display show 6 only

    const seeMore = document.getElementById('see-more');
    if(dataLimit && tools.length > 6){
      tools = tools.slice(0,6);
      seeMore.classList.remove('d-none');
    }
    else{
      seeMore.classList.add('d-none');
    };


   tools.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML =` 
    <div class="card">
    <img src="${tool.image}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${tool.name}</h5>
      <p class="card-text">${tool.description }.</p>
    </div>
    <hr class= w-auto>
    <div class="d-flex p-4 justify-content-between">
    <div> <h2>${tool.name}</h2>
    <p>${tool.published_in}</p>
    </div
    </div>
  </div>
    `;
  toolsContainer.appendChild(toolDiv);

 });
}
const process = (dataLimit) =>{
  toggleSpinner(true);
  const seeMore = document.getElementById('show-all');
  const see = seeMore;
  process(dataLimit);
}

// not the best way to load show all
document.getElementById('show-all').addEventListener('click', function(){
 process(6);
})

loadTools();