//Usar o Fetch para ir na URL e trazer o retorno da API para dentro do código e adcionar dados com o Post

//Passando constando para pegar o nosso servidor local
const url = "http://localhost:5500/api"

function getUsers(){
   fetch(url)
   .then(response => response.json())
   .then(data => renderApiResult.textContent = JSON.stringify(data))
   .catch(error => console.error(error))
   }
   
   function getUser(){
       fetch(`${url}/3`)
       .then(response => response.json())
       .then(data =>{
          userId.textContent = data.id
          userName.textContent = data.name
          userCity.textContent = data.city
          userAvatar.src = data.avatar
       })
          .catch(error => console.error(error))
   }

      function updateUser(updatedUser){
         //Recebendo um id dinamico abaixo
         fetch(`${url}/3`, {
            method: "PUT",
            // enviar pelo body o updateUser, porém transformando em texto simples com o JSON.stringify
            body: JSON.stringify(updatedUser),
            headers:{
               "Content-Type":"application/json;charset=UTF-8"      
            }
         })
         .then(response => response.json())
         .then(data => alertApi.textContent = data)
         .catch(error=>console.error(error))

      }
//Função com fetch para adicionar usuário com metodo post e enviar os dados
//através do body, para dentro da URL
function addUser(newUser){
   fetch(url,{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { 
   "Content-Type":"application/json; charset=UTF-8"      
      }
   })
.then(response => response.json())
.then(data => alertApi.textContent = data)
.catch(error => console.error(error ))
}

function deleteUser(id){
   fetch(`${url}/${id}`, {
      method: "DELETE",
      headers:{
         "Content-Type":"application/json;charset=UTF-8"
      }
   })
   .then(respose => response.json())
   .then(data => alertApi.textContent = data)
   .catch(error => console.error(error))
   }

const newUser = {
   name: "Dandara Sanders",
   avatar:"https://friendlystock.com/wp-content/uploads/2019/05/3-mom-holding-baby-cartoon-clipart.jpg",
   city: "Eusebio"
}

const updatedUser ={ 
   name: "Anderson Pinheiro",
   avatar:"https://www.designi.com.br/images/preview/10133553.jpg",
   city: "Eusebio"

}

//addUser(newUser)
updateUser(updatedUser)
getUser()
getUsers()
deleteUser(7)