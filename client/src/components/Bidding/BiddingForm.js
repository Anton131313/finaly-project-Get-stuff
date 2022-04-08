import React from 'react';
import styles from './bidding.module.css';

function BiddingForm() {
  return (
    <div className="content">
      <div className="row" style={styles.BiddingForm}>
        <form className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="" id="category" type="text" className="validate" />
              <label htmlFor="first_name">Категория товара</label>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <textarea id="textarea2" className="materialize-textarea" data-length="120" />
                <label htmlFor="textarea2">Описание товара</label>
              </div>
            </div>
          </div>
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Новый</option>
              <option value="2">Б/у</option>
              <option value="3">Хороший</option>
            </select>
            <label>Состояние товара</label>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BiddingForm;
