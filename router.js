import homeView from "./src/js/views/home-view/home-view.js"
import Alpine from './node_modules/alpinejs/dist/module.esm.js'
import HomeContainer from "./src/js/containers/home-container/home-container.js"

window.onNavigate = navigateToPage

window.onpopstate = () => {
    navigateToPage(window.location.hash)
}


function navigateToPage (h) {

    if(!(typeof h == "string")){
        console.log('bad input')
        return
    }

    const root = document.getElementById("root")
    root.innerHTML = ""
    window.history.pushState({}, "", window.location.pathname + h)
    
    switch(h){
        case "":
            window.Alpine = Alpine
            Alpine.start()
            root.innerHTML = homeView()
            new HomeContainer(window.onNavigate, Alpine)
            break;
        case "#login":
            break;
        default:
            break;
    }

}


export default function () {
    navigateToPage(window.location.hash)
}


