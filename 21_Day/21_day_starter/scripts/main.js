const body = document.getElementsByTagName('body')[0]
body.style.margin = '10px'
body.style.padding = '0px'


const wrapper = document.getElementsByClassName('wrapper')[0]
wrapper.style.display = 'inline-grid'
wrapper.style.display = 'grid-column-start'
wrapper.style.width = '100vh'

console.log(wrapper);



const title = document.querySelector('h1').textContent

let regEx = /\d+/g
const message = title.replace(regEx, "<h1 id='year'>2020</h1>")
document.querySelector('h1').innerHTML = message

const year = document.getElementById('year')
year.style.fontSize = '90px'

function setColorStyle(el) {

    el.style.color = hexaColor()
}


const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

setInterval(() => {
    setColorStyle(year)
}, 1000);
