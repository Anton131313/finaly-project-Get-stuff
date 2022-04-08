import React, { useState } from 'react';

function BiddingForm() {
  const [inputs, setInputs] = useState({});

  const inputHandler = (e) => {
    setInputs(e.target.value);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value.trim(),
    });
  };
  // const inputHandler = (e) => {
  //   if (e.target.files) {
  //     setInputs((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //       file: e.target.files[0],
  //     }));
  //   } else {
  //     setInputs((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   }
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('title', inputs.title);
  //   formData.append('file', inputs.file);
  //   oxios('/upload', 'POST', formData).then((data) => dispatch(addPost(data)));
  //   setInputs({});
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    // ... submit to API or something
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="signup-form">
              <form action="" className="mt-5 border p-4 bg-light shadow">
                <h4 className="mb-5 text-secondary">Разместить объявление</h4>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label>
                      Категория товара
                    </label>
                    <input onChange={inputHandler} value={inputs.nameCategory} type="text" name="nameCategory" className="form-control" placeholder="Введите категория товара" />
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
                    <label>
                      Ввести дату окончания
                    </label>
                    <input onChange={inputHandler} value={inputs.location} type="datetime-local" name="end_bidding" className="form-control" placeholder="Дата окончания" />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>
                      Стартовая цена
                    </label>
                    <input onChange={inputHandler} value={inputs.price} type="text" name="price" className="form-control" placeholder="Минимум 0" />
                  </div>
                  <div className="mb-3 col-md-12">
                    <select name="condition_id" className="form-select" aria-label="Default select example">
                      <option onChange={inputHandler} selected>Состояние товара</option>
                      <option onChange={inputHandler} value="1">Идеальное</option>
                      <option onClick={inputHandler} value="2">Удовлетворительное</option>
                      <option onClick={inputHandler} value="3">Среднее</option>
                      <option onClick={inputHandler} value="4">Требует ремонта</option>
                      <option onClick={inputHandler} value="5">Не годится для использования</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-12">
                    <label htmlFor="formFileMultiple" className="form-label">Добавить фото</label>
                    <input value={inputs.fileName || ''} onChange={inputHandler} className="form-control" type="file" id="formFileMultiple" multiple />
                  </div>
                  <div className="col-md-12">
                    <button onClick={submitHandler} type="submit" className="btn btn-primary float-end">Подтвердить</button>
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
