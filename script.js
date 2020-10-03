const cardprofile = document.querySelector(".cardprofile")
const cardinterests = document.querySelector(".cardinterests")

const profilebutton = document.querySelector("#profilebutton")
const interestsbutton = document.querySelector("#interestsbutton")

cardinterests.style.display = "none"

profilebutton.addEventListener("click", () => {
  cardprofile.style.display = "block"
  cardinterests.style.display = "none"
  profilebutton.classList.add("active")
  interestsbutton.classList.remove("active")
    
})

interestsbutton.addEventListener("click", () => {
  cardprofile.style.display = "none"
  cardinterests.style.display = "flex"
  
  interestsbutton.classList.add("active")
  profilebutton.classList.remove("active")
  
})
