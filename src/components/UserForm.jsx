import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/UserForm.css';

const UserForm = ({createUser, upDateUser, editUser, setUpDateUser, isOpen, setIsOpen}) => {
    /**first_name, last_name, email, password, birthday */

    const {handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (upDateUser) {
            reset(upDateUser);
            setIsOpen(true);
        }
    }, [upDateUser]);
    

    const submit = data => {
        if (upDateUser) {
            editUser('users', data, upDateUser.id);
            setUpDateUser();
        } else {
            createUser('users', data);
        }
        setIsOpen(false);
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
    }

    const handleClose = () => {
        setIsOpen(false);
        setUpDateUser();
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
    }

  return (
    <div className={`form__back ${isOpen && 'active' }`}>
        <form className='form' onSubmit={handleSubmit(submit)}>

            <button className='form__close' onClick={handleClose}>X</button>
            <h2 className='form__title'>User Form</h2>
            <div className='form__item'>
                <label htmlFor="first_name">First name</label>
                <input {...register('first_name')} id='first_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="last_name">Last name</label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="text" />
            </div>
            <div className='form__item'>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div className='form__item'>
                <label htmlFor="birthday">Birthday</label>
                <input {...register('birthday')} id='birthday' type="date" />
            </div>
            <button className='form__btn'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm;