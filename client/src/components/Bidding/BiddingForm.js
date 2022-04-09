import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { ProductsThunk } from '../../redux/thunks/productsThunk';

function BiddingForm() {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  // const [photo, setPhoto] = useState([]);
  const [inputs, setInputs] = useState({
    title: '',
    info: '',
    category_id: '',
    condition_id: '',
    location: '',
    price: '',
    price_step: '',
    photo: '',
  });

  const dateHandler = (e) => {
    setDate(moment(e.target.value).format('YYYY-MM-DD HH:mm'));
    console.log(date);
  };
  // const photoHandler = (e) => {
  //   setPhoto([...e.target.file]);
  //   console.log(photo);
  // };

  const inputHandler = (e) => {
    if (e.target.files) {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
    console.log(3333, inputs);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('title', inputs.title);
  //   formData.append('file', inputs.file);
  //   oxios('/upload', 'POST', formData).then((data) => dispatch(addPost(data)));
  //   setInputs({});
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  // };
  const addItemToDB = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', inputs.title);
    formData.append('info', inputs.info);
    formData.append('category_id', inputs.category_id);
    formData.append('location', inputs.location);
    formData.append('price_step', inputs.price_step);
    formData.append('end_bidding', date);
    formData.append('photo', inputs.file);
    console.log('form data', Object.fromEntries(formData));
    console.log(formData);
    dispatch(ProductsThunk(Object.fromEntries(formData)));
  };

  //   try {
  //     const response = await fetch('http://localhost:3001/addBiddong', {
  //       method: 'POST',
  //       credentials: 'include',
  //       body: formData,
  //     });
  //     const data = await response.json();
  //     dispatch(ProductsThunk());
  //     console.log('---response', response);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="signup-form">
              <form action="" className="mt-5 border p-4 bg-light shadow">
                <h4 className="mb-5 text-secondary">Разместить объявление</h4>
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <select name="category_id" value={inputs.category_id} onChange={inputHandler} className="form-select" aria-label="Default select example">
                      <option selected>Категория товара</option>
                      <option value="1">Товары для дома</option>
                      <option value="2">Одежда</option>
                      <option value="3">Автотовары</option>
                      <option value="4">Техника</option>
                      <option value="5">Зоотовары</option>
                      <option value="6">Товары для детей</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>
                      Наименование товара
                    </label>
                    <input onChange={inputHandler} value={inputs.title} type="text" name="title" className="form-control" placeholder="Введите наименование" />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      Описание товара
                    </label>
                    <textarea onChange={inputHandler} value={inputs.info} name="info" className="form-control" placeholder="Описание товара" id="floatingTextarea" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>
                      Ввести локацию
                    </label>
                    <input onChange={inputHandler} value={inputs.location} type="text" name="location" className="form-control" placeholder="Локация товара" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="end_bidding">
                      Ввести дату окончания
                    </label>
                    <input id="end_bidding" onChange={dateHandler} value={date} type="datetime-local" name="end_bidding" className="form-control" placeholder="Дата окончания" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>
                      Стартовая цена
                    </label>
                    <input onChange={inputHandler} value={inputs.price} type="text" name="price" className="form-control" placeholder="Минимум 0 руб." />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>
                      Шаг аукциона
                    </label>
                    <input onChange={inputHandler} value={inputs.price_step} type="text" name="price_step" className="form-control" placeholder="руб." />
                  </div>
                  <div className="mb-3 col-md-12">
                    <select onChange={inputHandler} value={inputs.condition_id} name="condition_id" className="form-select" aria-label="Default select example">
                      <option selected>Состояние товара</option>
                      <option value="1">Идеальное</option>
                      <option value="2">Удовлетворительное</option>
                      <option value="3">Среднее</option>
                      <option value="4">Требует ремонта</option>
                      <option value="5">Не годится для использования</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="formFileMultiple" className="form-label">Добавить фото</label>
                    <input
                      value={inputs.photo}
                      type="file"
                      className="form-control"
                      onChange={inputHandler}
                      id="formFileMultiple"
                      multiple
                    />
                  </div>
                  <div className="col-md-12">
                    <button onClick={addItemToDB} type="submit" className="btn btn-primary float-end">Подтвердить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingForm;
