$(document).ready(function() {
  $(".spinner").slideUp (2000 ,function(){
    $(".itemwiatt").fadeOut (1000)
  })
  $("itemapi").ready(function() {
    $(".spinner").slideUp (2000 ,function(){
      $(".itemwiatt").fadeOut (1000)
    })

  })
  $('a').click(function(eventInfo){
    $(eventInfo.target).siblings().css('Color',"Red")
   
   })
  let getapi;
  let likenavapi=document.querySelectorAll('.adapiclick');
  console.log(likenavapi);
  for(let i=0;i<likenavapi.length;i++) { 
  likenavapi[i].addEventListener('click',function(eventInfo){
 let codeapi= eventInfo.target.getAttribute('data-code');
 itemapi(codeapi);
  })
  }
 
 let  grtapititel
 async function itemapi(Apicod)
 {
     const options = {
         method: 'GET',
         headers: {
             'X-RapidAPI-Key': 'a37750505amsh4f0359c017180d8p11c337jsned6ab61f0759',
             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
         }
     };
   const apiweb= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Apicod}`, options);
   getapi= await apiweb.json();
   let cartona=``
   for(let i=0; i< getapi.length ;i++){
       cartona +=`

       <div onclick="updateapititel(${getapi[i].id})" class="col-md-3  "> 
       <div class="card itemcard" style="width: 18rem;">
         <img src="${getapi[i].thumbnail}" class="card-img-top" alt="...">
         <div class="card-body id="namecrud">
             <div class="d-flex justify-content-between">
                 <h5 class="card-title">${getapi[i].title}</h5>
                 <span>
                 ${getapi[i].release_date}
                 </span>
             </div>
           <p class="card-text">${getapi[i].short_description}</p>
           <div class="d-flex justify-content-between">
           <h5 class="card-title">${getapi[i].platform}</h5>
           <h5>${getapi[i].genre}
           </h5>
       </div>
         </div>
       </div>
     </div>
     
   
       `
   }
   document.getElementById('itemapi').innerHTML = cartona;
  
 }

  
 async function updateapititel(gameId){
  
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '28a2355122mshbcfc376da496f55p188e02jsne82c707e5495',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

let soloGameData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)

grtapititel= await soloGameData.json();
console.log(grtapititel);

let cartona=``;

  cartona=`
  <div class="d-flex flex-row justify-content-between p-2">
  <h2>Details Game</h2>
  <button class="btn-close btn-close-white" id="btnClose"></button>
</div>

<div class="container d-flex  ">
  <div class="row">
    <div class="col-md-7">
<img src="${grtapititel.thumbnail}" alt="" class="w-100">
    </div>

    <div class="col-md-5">
      <h5 class="titel">"${grtapititel.title}</h5>
        <p>Category :"${grtapititel.genre} </p>
        <p>Platform :"${grtapititel.platform} </p>
        <p>Status :"${grtapititel.status} </p>
        <p>Status :"${grtapititel.status} </p>
        <p>${grtapititel.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${grtapititel.game_url}">Show Game</a>
    </div>
  </div>
</div>
  `

document.getElementById('itemaapititel').innerHTML = cartona;
 
} 









})




















// //////////////////////////////////////////////////////////
// $(".itemwiatt").hide(3000)