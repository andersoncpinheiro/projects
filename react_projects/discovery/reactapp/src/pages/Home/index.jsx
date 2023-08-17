//Uso do useState, garante que o conteúdo da variavel irá refletir 
//na tela além de ser armazenado em uma variavel
import React, {useState, useEffect}from 'react';

import './styles.css'
import {Card} from '../../components/Card';

function Home() {
  const[studentName, setStudentName] = useState('');
  const[students, setStudents]=useState([]);
  const[user, setUser] = useState({name:'', avatar:''});
function handleStudent(){
const newStudent ={
  name: studentName,
  time: new Date().toLocaleTimeString("pt-br",{
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit'
  })
};

setStudents( prevState =>[...prevState, newStudent]);

}  
//Executado sempre que aplicação é renderizada
  useEffect(()=>{
    fetch('https://api.github.com/users/andersoncpinheiro')
    .then(response => response.json())
    .then(data =>{
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
    .catch(error => console.error(error))
},[students]);

  return(
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar}alt="Foto Perfil"/>
        </div>
      </header>
    <input 
      type="text" 
      placeholder="Digite o nome"
      onChange={ e => setStudentName(e.target.value)}
    />
    
    <button type="button" onClick={handleStudent}>
      Adicionar</button>
    
    {
    students.map(student => 
    <Card 
    key={student.time}
    name={student.name} 
    time={student.time}/> )    
    
    }
    </div>

  )
}

export default Home