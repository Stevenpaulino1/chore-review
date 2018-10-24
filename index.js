document.addEventListener('DOMContentLoaded', () => {
  const choresUrl = 'http://localhost:3000/chores'

  fetch(choresUrl)
  .then(response => response.json())
  .then(renderObject)


  function renderObject(obj){
    obj.forEach(slapOnDom)
  };

  function slapOnDom(chore){
    const choreCardDiv = document.createElement('div')
    choreCardDiv.className = 'chore-card'
    const button =  document.createElement('button')
    button.innerText = 'x'
    button.className = 'delete-button'
    const h3 =  document.createElement('h3')
    console.log(h3.innerText = chore.title)
    const p =  document.createElement('p')
    p.innerText = chore.duration
    const input =  document.createElement('input')
    //InnerText dont work boy 
    input.value = chore.priority
    const choreList = document.querySelector('#chore-list')
  choreCardDiv.append(button, h3, p, input)
  choreList.append(choreCardDiv)


    // <div class="chore-card">
    //   <button class='delete-button'>x</button>
    //   <h3> CHORE TITLE </h3>
    //   <p> Duration: CHORE DURATION </p>
    //   <input type="text" value="CHORE PRIORITY" />
    // </div>
    //
    // title": "test",
    //     "priority": "medium",
    //     "duration": "1 hour",
    //     "id": 4
  }



})
