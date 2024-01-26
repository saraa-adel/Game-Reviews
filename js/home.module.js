import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"

export class Home {
    constructor() {
        window.addEventListener("scroll",()=>{
            this.fixedNav()
        })
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                this.activeLink(link)
                const category = link.getAttribute("data-category")
               //  console.log(category)
                this.getGames(category)
            })
        })
        this.loading = document.querySelector('.loading')
        this.details = document.querySelector('.details')
        this.games = document.querySelector('.games')

        this.ui = new Ui()

        this.getGames('mmorpg')
    }


    fixedNav(){
        let header = document.querySelector('.navbar')
        let home = document.querySelector('.home')
        if (window.scrollY >182) {
            console.log(window.scrollY)
            header.classList.add('fixed-top');
            home.classList.add('mt-3' ,'pt-5');
        }
        else{
            header.classList.remove('fixed-top');
            home.classList.remove('mt-3' ,'pt-5');
        }
    }

    async activeLink(link) {
        document.querySelector(".active").classList.remove("active")
        link.classList.add("active")
    }

    async getGames(cat) {

     this.loading.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4a0e22dff4msh108ab6c75a5aa83p12a844jsn0378a38c4969',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        const result = await response.json()
        this.loading.classList.add('d-none')
     //    console.log(result)
        this.ui.displayGame(result)

        document.querySelectorAll('.game').forEach((game)=>{
          game.addEventListener("click" , () => {
               this.games.classList.add('d-none')    
               this.details.classList.remove('d-none')
               new Details(game.getAttribute("id"))
          })
     })
    }
}
