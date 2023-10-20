//fetching data
//fetch("http://api.fikrcamp.com/student")
//.then((res)=>{
  //code  
 // return res.json()
//})
//.then((data)=>{
   //code 
  // console.log(data)
//})
// .catch(()=>{
//     console.log("error")
// })
// dog image API
document.querySelector("#btn").addEventListener("click",()=>{
  //GET request
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res)=>{
      return res.json()
  })
  .then((data)=>{
      document.querySelector("#dog-img").src = data.message
  })
  .catch(()=>{
      console.log("Error!")
  })
})

//wheather APP challenge
document.querySelector(".btn").addEventListener("click",()=>{
  let city =  document.querySelector("#search").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=100db93d0c467fdbd82b72c7c5aa1432`)
  
  .then((res)=>{
     return res.json()
  })
  .then((data)=>{
     console.log(data)
     document.querySelector("#location").innerText = data.name
     document.querySelector(".desc").innerText = data.weather[0].description
     document.querySelector(".c").innerText = data.main.temp
  })

})
// movie task list
document.querySelector("#search").addEventListener("click",()=>{
  let mov = document.querySelector(".search-box").value
  fetch(`https://api.tvmaze.com/search/shows?q=${mov}`)
  .then((res)=>{
      return res.json()
  })
  .then((data)=>{
     console.log(data)
       for(let i = 0; i< data.length;i++){
       let div1 = document.createElement("div").classList.add("movie-card")
        document.querySelector(".movies-section").appendChild(div1)
        let div2 = document.createElement("div").classList.add("movie-image")
        document.querySelector("movie-image").appendChild(div2)
        let img = document.createElement("img")
        img.innerText = data[i].show.image.original
        img.appendChild(div2)
        let h3 = document.createElement("h3").classList.add("movie-heading")
        h3.innerText = data[i].show.name
        h3.appendChild(div1)
        let div3 = document.createElement("div").classList.add("details")
        div3.innerText = data[i].show.details
        div3.appendChild(div1)
        let div4 = document.createElement("div").classList.add("rating")
        div4.appendChild(div3)
        let image = document.createElement("img")
        image.innerText = "https://pngimg.com/d/star_PNG41474.png"
        let h32 = document.createElement("h3")
        h32.innerText = data[i].show.rating.average
        let p = document.createElement("p")
        p.innerText = data[i].show.genres[0,1]
        p.appendChild(div3)
        let but = document.createElement("button").classList.add("button")
      }
   })
})
