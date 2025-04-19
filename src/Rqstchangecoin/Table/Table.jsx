import React, { useState } from 'react';
import TextCopied from '../TextCopied/TextCopied';
import styles from './Table.module.css';
import copy  from '../../images/copy.png';







const Table = ({allUsers,onDoneClick,rerenderCounter}) => {

  const [isShownCopyText,setShownCopyText]=useState(false)

  function copyBtnHandler(walletAdress) {
    navigator.clipboard.writeText(walletAdress).then(() => {
      console.log('Адрес скопирован в буфер обмена!',walletAdress);
      setShownCopyText(true)


      setTimeout(() => {
        setShownCopyText(false);
      }, 2000);

    }).catch((err) => {
      console.error('Ошибка при копировании: ', err);
    });
  }
  

return(
  <>
  {isShownCopyText && <TextCopied /> }
  
    <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>telegram id</th>
                  <th>баллы для обмена</th>
                  <th>кошелек</th>
                  <th>действие</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, index) => (
                  <tr key={user.rqstid}>
                    <td>{index + 1}</td>
                    <td>{user.userid}</td>
                    <td>{user.sum}</td>
                    <td><button className={styles.btnCopy} onClick={() => copyBtnHandler(user.walletAdress)}><img src={copy} className={styles.copyIcon}/></button>{user.walletAdress}</td>
                    <td>
                      <button
                        className={styles.doneBtn}
                        onClick={() =>
                            onDoneClick(
                            user.userid,
                            user.rqstid,
                            user.sum
                          )
                        }
                      >
                        отправлено
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </>
)
};

export default Table