const movies = document.querySelector(".cntr").innerHTML
const nextMovies = document.querySelector(".nextCntr").innerHTML
const nextMovies2 = document.querySelector(".nextCntr2").innerHTML
const nextPage = document.getElementById("nextPage")
const previousePage = document.getElementById("previousePage")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")

let movieList = []
let pages = 0
const save=()=>{
    localStorage.setItem('pages',pages)
}
const saveLocal = ()=>{
    localStorage.setItem(JSON.stringify(movieList))
}

movieList.push(movies)
movieList.push(nextMovies)
movieList.push(nextMovies2)
// movePageBtn()
// function movePageBtn(){
    let j = localStorage.getItem('pages')
    console.log(j)
    if(j === movieList.length-1){
        nextBtn.classList.add('active')
        prevBtn.classList.remove('active')
    }
    if(j === 0){
        nextBtn.classList.remove('active')
        prevBtn.classList.add('active')
    }
// }
nextPage.addEventListener("click",()=>{
    let i = localStorage.getItem('pages')
    // console.log(i)
    if(i != movieList.length-1){
        gotoNext()
    }
})
previousePage.addEventListener("click",()=>{
    let i = localStorage.getItem('pages')
    // console.log(i)
    if(i > 0){
        gotoPrev()
    }
})
currentPage()
function currentPage(){
    let i = localStorage.getItem('pages')
    // console.log(i)
    document.querySelector(".cntr").innerHTML = movieList[i]
}
function gotoNext(){
    pages++
    save()
    document.querySelector(".cntr").innerHTML = movieList[pages];
}
function gotoPrev(){
    pages--
    save()
    document.querySelector(".cntr").innerHTML = movieList[pages]
}