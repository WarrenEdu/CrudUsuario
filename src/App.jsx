import { useEffect, useState } from 'react';
import './App.css'
import useCrud from './hooks/useCrud'
import UserForm from './components/UserForm';
// import UserCard from './components/UserCard';

function App() {

  const urlBase = 'https://users-crud.academlo.tech/';

  const [isOpen, setIsOpen] = useState(false);

  const [upDateUser, setUpDateUser] = useState();

  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase);

  useEffect(() => {
    const path = 'users'; 
    getUsers(path);
  }, [])
  
  console.log(users);

  const handleOpen = () => {
    setIsOpen(true);
  }

  return (
    <div className='app'>
      <header className='app__header'>
       <h1 className='app__title'><ion-icon name="people-outline"></ion-icon> Crud Users <ion-icon name="people-outline"></ion-icon></h1>
       <button className='app__create' onClick={handleOpen}>Create User</button>
      </header>
    <UserForm
      createUser={createUser}
      upDateUser={upDateUser}
      editUser={editUser}
      setUpDateUser={setUpDateUser}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
    <div className='app__container'>
      {
        users?.map((user)=> (
          <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUpDateUser={setUpDateUser}
          />
        ))
      }
    </div>
    </div>
  )
}

export default App
