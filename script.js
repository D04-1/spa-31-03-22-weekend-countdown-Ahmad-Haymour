
const myBtn = document.getElementById('button-addon1')

const text = document.querySelector('.myPara')

myBtn.addEventListener("click", (event) => {

    let name = document.querySelector('input').value
    text.textContent = `Halo ${name}. Today is Thursday only 1 day left until Weekend!`

    console.log(name);

})