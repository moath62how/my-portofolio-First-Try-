var myLANG = ["Javascript", "C++", "Python", "CSS", "HTML"]
var myLANGp = [65, 10, 25, 89, 95]
const markup = `<div ="bars"><div id="progress-bar"><span></span></div> `
//document.getElementById('DOM').innerHTML = markup.repeat(myLANG.length)

for (let i = 0; i < myLANG.length; i++) {
    document.getElementById('DOM').innerHTML += `<div ="bars">${myLANG[i]} :<div id="progress-bar"><span id="pbar${i}">${myLANGp[i]}% </span></div></div>`
}
for (let j = 0; j < myLANG.length; j++) {
    document.getElementById(`pbar${j}`).style.width = `${myLANGp[j]}%`
    document.getElementById(`pbar${j}`).style.textAlign = `center`
    document.getElementById(`pbar${j}`).style.overflow = "visible"
    // window.getComputedStyle(`pbar${j}`, `::after`).content = `${myLANG[j]}`
}