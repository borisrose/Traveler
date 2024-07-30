import Container from "../../models/container.model.js";

export default class HomeContainer extends Container {
    constructor(onNavigate, Alp){
        super(onNavigate)
        this.Alp = Alp
        this.setData()
        this.setStore()
    }   

    setData(){
        this.Alp.data('home-login-button', () => ({
            onClick() {
                
            }
        }))
    }

    setStore(){

        this.Alp.store('home', {
            message: 'Bienvenue sur Traveler',
            actions: [
                {
                    href: "#login",
                    icon: "fa-solid fa-right-to-bracket",
                    textContent: "Votre session vous attend"
                },
                {
                    href: "#register",
                    icon: "fa-solid fa-user-plus",
                    textContent: "Nouvea ? C'est parti!"
                }
            ]    
        })
    }
    
    onClick () {
        this.onNavigate("#login")
    }
}