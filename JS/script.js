//definimos las variables
const stars = document.querySelectorAll('.star')
const commentBox = document.getElementById('comment-box')
const submitButton = document.getElementById('submit-button')
const Logo = document.getElementById('logo')
//arreglo de todas las estrellas
const visibleStars = {
    star1: document.getElementById('star1'),
    star2: document.getElementById('star2'),
    star3: document.getElementById('star3'),
    star4: document.getElementById('star4'),
    star5: document.getElementById('star5')
}
//arreglo de las estrellas visibles
const visibleStarsArr = Object.keys(visibleStars) // ["star1","star2","star3","star4","star5"]

stars.forEach(star =>{
    star.addEventListener('click', () =>{
        const starNumber = visibleStarsArr.findIndex(e=> e === star.getAttribute('id'))
        const hiddenStars = visibleStarsArr.slice(starNumber + 1 ,5)
        //ocultamos las estrellas 
        hiddenStars.map(hiddenStars => {
            visibleStars[hiddenStars].classList.remove('visible')
            visibleStars[hiddenStars].classList.add('hidden')
        })
        
        if (star.getAttribute('id') !== 'star5' ){
            //mostramos comment box cuando se marca menos de 5 estrellas
            commentBox.classList.remove('hidden')
            commentBox.classList.add('visible')
            Logo.src ="https://i.ibb.co/nBDVV0G/Gift-02.png"
        }       
    })
})
//evento del boton submit
submitButton.addEventListener('click', () => {

    visibleStarsArr.map(showStar => {
        //mostramos todas las estrellas
        visibleStars[showStar].classList.remove('hidden')
        //ocultamos en commentBox
        commentBox.classList.remove('visible')
        commentBox.classList.add('hidden')
        //cambio del logo
        Logo.src ="https://i.ibb.co/Snt3GZN/Christmas-tree-02.png"
    })
})

