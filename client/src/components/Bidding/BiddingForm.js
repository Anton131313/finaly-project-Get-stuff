import React from 'react';

function BiddingForm() {
  return (

    <div className="login content">
      <center>
        <form className="container align-items-center justify-content-center">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Категория товара</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputCondition1" className="form-label">Состояние</label>
            <input type="text" className="form-control" id="exampleInputCondition1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation1" className="form-label">Локация</label>
            <input type="text" className="form-control" id="exampleInputLocation1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Состояние</option>
              <option value="1">Идеальное</option>
              <option value="2">Среднее</option>
              <option value="3">Удовлетворительное</option>
              <option value="3">Требует ремонта</option>
              <option value="3">Не годится для использования</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Опишите товар</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">Добавить фото</label>
            <input className="form-control" type="file" id="formFileMultiple" multiple />
          </div>

          <button type="submit" className="btn btn-primary">Разместить</button>
        </form>
      </center>
    </div>
  );
}

export default BiddingForm;
