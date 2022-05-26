//youtube video: https://youtu.be/M8Gq_HPDXsU


// var textPath = document.querySelector('#text-path') //verknüpfung zu textpfad und ID

// function updateTextPathOffset(offset) {
//     textPath.setAttribute('startOffset', offset) //Start Text
// }

// //Verbindung Animation mit scrollen
// function onScroll() {
//     requestAnimationFrame(function() {
//         updateTextPathOffset(window.scrollY * 2)
//     })
// }

// window.addEventListener('scroll', onScroll);


// const titles = document.querySelectorAll('.anim'); //Verknüpfung Animation

// observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//        if (entry.isIntersecting == true) {
// entry.target.classList.add('animate');
//        } else{
//         entry.target.classList.remove('animate');
//        }
//     })
// })

// titles.forEach(title => {
//     observer.observe(title);
// })




/*
//Test-Chalid
var textPaths = document.getElementsByClassName('animatedPath') //verknüpfung zu textpfad und ID

function updateTextPathOffset(offset) {
    for(let n = 0; n < textPaths.length; n++) {
    textPaths[n].setAttribute('startOffset', offset) //Start Text
    }
}

//Verbindung Animation mit scrollen
function onScroll() {
    requestAnimationFrame(function() {
        updateTextPathOffset(window.scrollY * 2)
    })
}

window.addEventListener('scroll', onScroll);


const titles = document.querySelectorAll('.anim'); //Verknüpfung Animation

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       if (entry.isIntersecting == true) {
entry.target.classList.add('animate');
       } else{
        entry.target.classList.remove('animate');
       }
    })
})

titles.forEach(title => {
    observer.observe(title);
})
*/
