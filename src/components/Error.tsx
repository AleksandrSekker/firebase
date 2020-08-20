import React, { ReactElement } from 'react';
import style from '../style/error.module.css';
export default function Error(): ReactElement {
  return (
    <div>
      <h2 className={style.text}>Доступ заблокирован</h2>
    </div>
  );
}
