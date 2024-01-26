import { Ui } from "./ui.module.js";

export class Details{
     constructor(id){
          document.querySelector('.btn-close').addEventListener('click',()=>{
               document.querySelector('.games').classList.remove('d-none')
               document.querySelector('.details').classList.add('d-none')
          })
          this.loading = document.querySelector('.loading')
          this.getDetails(id)
     }
    async getDetails(id){

     this.loading.classList.remove('d-none')
     const options = {
          method: 'GET',
          headers: {
               'X-RapidAPI-Key': '4a0e22dff4msh108ab6c75a5aa83p12a844jsn0378a38c4969',
               'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
     };

          const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
          const result = await response.json()
          // console.log(result)
          this.loading.classList.add('d-none')
          new Ui().displayDetails(result)
     }
}  