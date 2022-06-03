import Dog from "./images/Dog.png"
import Horse from "./images/Horse.png"
import Cat from "./images/Cat.png"
import Rat from "./images/Rat.png"

export const getAvatarSource = (selectedAvatar = localStorage.getItem("valgtAvatar")) => {
    switch(selectedAvatar){
        case "Dog": return Dog
        case "Cat": return Cat
        case "Horse": return Horse
        case "Rat": return Rat
        default: return Dog
    }
}