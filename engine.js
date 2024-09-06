const jarmu = ['Autó','Busz','Vonat','Repülő','Villamos']

function init() {
    document.getElementById('body').innerHTML = jarmu.map( v => 
        `<div onclick="f('${ v }')" style="color: ${v}">${ v }</div>`
    ).join("")
}

const f = a => {
    console.log(a)
}