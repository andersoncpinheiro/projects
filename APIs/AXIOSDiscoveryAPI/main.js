
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
getUser(6)
const newUser = {
    "name":"Anderson Pinheiro",
    "avatar":"https://www.designi.com.br/images/preview/10133553.jpg/100/150",
    "city":"Eusebio"
}

//addNewuser(newUser)
getUsers()
