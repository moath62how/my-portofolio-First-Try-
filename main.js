var myLANG = ["javascript", "C++", "Python", "CSS", "HTML"]
var myLANGp = [65, 10, 25, 89, 95]
const markup = `<div ="bars"><div id="progress-bar"><span></span></div> `
//document.getElementById('DOM').innerHTML = markup.repeat(myLANG.length)

for (let i = 0; i < myLANG.length; i++) {
    document.getElementById('DOM').innerHTML = `<div ="bars"><div id="progress-bar"><span>${myLANGp[i]}%</span></div>`
}