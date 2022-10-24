
const url ="http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
})
        .catch(error => console.error(error))
}

function addNewuser(newUser){
    axios.post(url,newUser)
    .then(response => {
        console.log(response)   
    })
    .catch(error => console.error(error))
}
const newUser = {
    "name":"Anderson Pinheiro",
    "avatar":"https://www.designi.com.br/images/preview/10133553.jpg",
    "city":"Eusebio"
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        const data = response.data
        userID.textContent = data.id
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, updatedUser){
    axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
        .catch(error => console.error(error))
}

const updatedUser ={ 
    name: "Jakeliny Gracielly",
    avatar: "https://avatars.githubusercontent.com/u/17316392?v=4",
    city: "São Paulo"
  }

function deleteUser(id){
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))

}   

deleteUser(6)
  
getUser(3)
updateUser(1, updatedUser)
//addNewuser(newUser)
getUsers()
