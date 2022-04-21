import fetch from 'node-fetch'

// async function getDataAsync() {
//    try {
//     const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
//     const data = await response.json()
//     console.log(data)
// }   catch (err) {
//     console.error(err)                                                       
//     }  
// }
// getDataAsync()


fetch('https://api.sampleis.com/beers/ale')
 .then(response) => {
     console.log(response)
     return response.json()
    })
    .then(data => {
     console.log(data[07])   
    })
    .catch(err) => {
        console.error(err)
    })



// fetch('https://api.sampleis.com/beers/ale')
//  .then(response) =>
