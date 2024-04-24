// import React from 'react';
import './styles/UserCard.css';

const UserCard = ({user, deleteUser, setUpDateUser, setIsOpen}) => {

    // console.log(user);

    const handleDelete = () => {
        deleteUser('users', user.id);
    }

    const handleEdit = () => {
        setUpDateUser(user);
    }

  return (
    <section className='user'>
        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
        <hr className='user__line'/>
        <ul className='user__list'>
            <li className='user__item'><span>Email: </span><span><ion-icon name="mail-outline"></ion-icon> {user.email}</span></li>
            <li className='user__item'><span>Birthday: </span><span><ion-icon name="gift-outline"></ion-icon> {user.birthday}</span></li>
        </ul>
        <hr className='user__line'/>
        <div className='user__buttoms'>
            <button className= 'user__btn' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon> Delete</button>
            <button className= 'user__btn' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon> Edit</button>
        </div>
    </section>
  )
}

export default UserCard; 