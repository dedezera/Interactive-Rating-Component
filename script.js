const mainContainer = document.querySelector(".container")

const thanksContainer = document.querySelector(".thank-you")

const submitBtn = document.getElementById('btn')

const rating = document.getElementById("rating")

const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
thanksContainer.classList.remove("hidden")
mainContainer.style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})