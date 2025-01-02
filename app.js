const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSects = document.querySelector(".main-content")

function PageTransition(){
    for(let i = 0; i < secBtn.length; i++ ){
        secBtn[i].addEventListener("click", function()
        {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace(" active-btn", "")
            this.className += " active-btn";
        })
    }

    allSects.addEventListener('click', e => {
        const id = e.target.dataset.id;
        if (id) {
            sections.forEach((sect)=> {
                sect.classList.remove("active");
            })
            const elem = document.getElementById(id);
            elem.classList.add("active");
        }
    })
}

PageTransition();