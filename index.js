// console.log(document.childNodes[1].childNodes[0].childNodes[5].innerHTML = "Javascript");


var image = document.getElementById('image')
var btn = document.getElementById('btn')
var count = 0;

btn.addEventListener('click', function () {
    if (count % 2 === 0) {
        image.src = "On.jpg"
        btn.innerHTML = "Off"
        count++
    }
    else{
        image.src = "Off.jpg"
        btn.innerHTML = "On"
        count++
    }
})
// var ima;
// btn.addEventListener('click', function () {
//     if (ima === 'On.jpg') {
//         btn.innerHTML = "On"
//         image.src = "Off.png"
//     } 
//     else
//     {
//      ima === "Off.png"
//      btn.innerHTML = 'Off'
//      image.src = "On.jpg"
    
//     }
    
// })