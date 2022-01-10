import React, { FC, useEffect, useState, useCallback } from 'react';
import UserCard from './components/UserCard';
import Modal from './components/Modal'
import users from './Interface/users';
import axios, { AxiosResponse } from 'axios'
import './App.scss';

interface modalData {
  open: boolean;
  user: users | null;
}


const App: FC = () => {

  const [userData, setUserData] = useState<users[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<modalData>({ open: false, user: null });

  useEffect(() => {
    axios.get<users[]>('https://jsonplaceholder.typicode.com/users')
      .then((res: AxiosResponse) => setUserData(res.data));
  }, [])

  const handleButton = (user: users | null, type: 'like' | 'delete' | 'edit' | 'update') => {
    if (user) {
      var userIndex = userData.findIndex(u => u.id === user.id);
      switch (type) {
        case 'like':
          userData[userIndex].like = !userData[userIndex].like;
          break;
        case 'delete':
          userData.splice(userIndex, 1);
          break;
        case 'edit':
          setIsModalVisible({ open: true, user: userData[userIndex] })
          break;
        case 'update':
          userData[userIndex] = user;
          setIsModalVisible({ open: false, user: null })
          break;
        default:
          break;
      }
      setUserData([...userData]);
    }
  }

  const buttonCallBack = useCallback(handleButton, [userData]);

  return (
    <div className="App h-center">
      <div className='user-container'>
        {userData.map(user => <UserCard
          key={user.id} userData={user}
          buttonClick={buttonCallBack}
        ></UserCard>)}
      </div>
      {isModalVisible.open ? <Modal
        userData={isModalVisible.user}
        onOk={buttonCallBack}
        onCancel={() => setIsModalVisible({ open: false, user: null })}
      ></Modal> : <></>}
    </div>
  );
}

export default App;
