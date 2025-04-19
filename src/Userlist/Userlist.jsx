import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Navigations from '../Navigations/Navigations';
import { AuthorisationContext } from '../App';
import axios from '../axios';
import styles from './Userlist.module.css';

const Userlist = () => {
  const { isAuthorised, setAuthorised } = useContext(AuthorisationContext);
  const [allUsers, setAllUsers] = useState([]);
  

  useEffect(() => {
    axios
      .get('/api/getAllUsers')
      .then((response) => {
        console.log('response=', response.data);

        // const users = response.data.map((data) =>data.tlgid);

        const users = response.data.map((data) => ({
          tlgid: data.tlgid,
          score: data.score,
          energy: data.energy,
          userLevel: data.userLevel,
          referalQty: data.referalQty,
        }));

        setAllUsers(users);
        console.log('allUsers=', users);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <>
    {isAuthorised ? (
      <>
        <div className={styles.title}>Список пользователей аппки ( всего: {allUsers.length} чел.)</div>

        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>telegram id</th>
                <th>очки</th>
                <th>энергия</th>
                <th>уровень</th>
                <th>кол-во рефералов</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.tlgid}</td>
                  <td>{user.score}</td>
                  <td>{user.energy}</td>
                  <td>{user.userLevel}</td>
                  <td>{user.referalQty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ) : (
      <div>not auth</div>
    )}
  </> 
  );
};

export default Userlist;

