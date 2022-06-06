import Blonde from "./images/Blonde.svg"
import Brunette from "./images/Brunette.svg"
import Brunette2 from "./images/Brunette2.svg"
import Blue from "./images/Blue.svg"

export const getAvatarSource = (selectedAvatar = localStorage.getItem("valgtAvatar")) => {
    switch(selectedAvatar){
        case "Blonde": return Blonde
        case "Brunette": return Brunette
        case "Brunette2": return Brunette2
        case "Blue": return Blue
        default: return Blonde
    }
}