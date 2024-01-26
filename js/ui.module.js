export class Ui{
     constructor(){}

     displayGame(data){
          
          let gameCard =``
          for (let i = 0; i < data.length; i++) {
          gameCard += `
          <div id="${data[i].id}" role="button" class="game col-lg-3 col-md-6 text-white">
          <div>
            <div class="borderr rounded-2">
              <div class="p-3 height">
                <div class="text-center"><img src="${data[i].thumbnail}" class="w-100" alt=""></div>
              <div class="d-flex justify-content-between pt-3">
                <h3>${data[i].title}</h3>
                <button class="btn rounded-2 px-2 py-0">Free</button>
              </div>
              <p class="p-0 m-0 text-center pb-3">${data[i].short_description.split(' ').slice(0, 8).join(' ')}</p>
              </div>
              <div class="borderr-top">
                <div class="d-flex justify-content-between py-2 px-3">
                  <span class="rounded-1 px-1 fw-bold">${data[i].genre}</span>
                <span class="rounded-1 px-1 fw-bold">${data[i].platform}</span>
                </div>
              </div>
            </div>
          </div>
      </div>`
          }
          document.getElementById('gameData').innerHTML =gameCard
     }

     displayDetails(data){
          const gameDetails=`
          <div class="col-md-4 pb-4">
          <div><img src="${data.thumbnail}" class="w-100" alt=""></div>          
        </div>
        <div class="col-md-8 text-white">
          <div>
            <h3>Title: ${data.title}</h3>
          <p>Category: <span class="rounded-3 text-black px-2 py-1 bg-info">${data.genre}</span></p>
          <p>Platform: <span class="rounded-3 text-black px-2 py-1 bg-info">${data.platform}</span></p>
          <p>Status: <span class="rounded-3 text-black px-2 py-1 bg-info">${data.status}</span></p>
          <p>${data.description}</p>
          <button type="button" class="btn btn-outline-warning text-white">
          <a target="_blank" href="${data.game_url}">Show Game</a>
      </button>
                </div>
        </div>
          `

          document.getElementById('gameD').innerHTML= gameDetails
     }
     
}