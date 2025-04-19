import React from 'react';
import Navigations from '../Navigations/Navigations';
import { AuthorisationContext } from '../App';
import { useContext, useState, useEffect } from 'react';
import axios from '../axios';
import Modalwindow from '../Modalwindow/Modalwindow';
import Table from './Table/Table'

import styles from './Rqstchangecoin.module.css';

const Rqstchangecoin = () => {
  const { isAuthorised, setAuthorised } = useContext(AuthorisationContext);

  const [allUsers, setAllUsers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [rqstId, setRqstId] = useState('');
  const [summa, setSumma] = useState('');
    

  function changeDoneBtnHandler(userid, rqstid, sum) {
    setUserId(userid);
    setRqstId(rqstid);
    setSumma(sum);

    setModalOpen(true);
  }

  async function modalYesBtnHandler() {
    // console.log('запрос на сервак');

    try {
        // Отправка данных на сервер
        const response = await axios.post('/api/logChanging', {
            rqstId: rqstId,
            userId: Number(userId),
            summa: Number(summa),
        });

        // console.log(response);  // Делаем что-то с ответом от сервера

        // После получения ответа вызываем handleFetchData
        handleFetchData();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}


  const handleFetchData = async () => {
    await getAllUsers();  
    // console.log('Данные загружены и состояние обновлено');
    setModalOpen(false);
  };


  const getAllUsers = async () => {
    try {
      const response = await axios.get('/api/getAllChangeRqst');
      const users = response.data.map((data) => ({
        userid: data.userid,
        sum: data.sum,
        walletAdress: data.walletAdress,
        rqstid: data._id,
      }));
      // console.log('users for check=',users)
      setAllUsers(users);
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
    }
    
  };

  
  useEffect(() => {
    getAllUsers();
  }, []);


 
  return (
    <>
      {isAuthorised ? (
        <>
          <div className={styles.title}>Запросы на обмен:</div>

          
          <Table allUsers={allUsers} onDoneClick={changeDoneBtnHandler} />

          <Modalwindow isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h3>Подтвердите действие</h3>
            <p>Перевод отправлен клиенту?</p>
            <button onClick={modalYesBtnHandler} className={styles.modalYesBtn}>
              Да
            </button>
            <button onClick={() => setModalOpen(false)} className={styles.modalNoBtn}>
              Нет
            </button>
          </Modalwindow>
        </>
      ) : (
        <div>not auth</div>
      )}
    </>
  );
};

export default Rqstchangecoin;