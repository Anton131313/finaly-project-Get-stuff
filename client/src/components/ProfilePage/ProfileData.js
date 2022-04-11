import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as config from '../../config/config';
import { editUser } from '../../redux/actions/userAction';
import style from './profile.module.css';

function ProfileData() {
  const id = useParams();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios.get(`${config.getUser(id.id)}`)
      .then((response) => setCurrentUser(response.data));
  }, []);
  console.log(currentUser);

  const handleChange = (e) => {
    if (e.target.files) {
      setCurrentUser((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setCurrentUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  // console.log(currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', currentUser.file);
    formData.append('name', currentUser.name);
    formData.append('email', currentUser.email);
    formData.append('phone', currentUser.phone);
    console.log(formData, '==>');

    const res = await fetch(`${config.editUser(id.id)}`, {
      method: 'PATCH',
      credentials: 'include',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => dispatch(editUser(data)));
    // if (response.status === 200) { await dispatch(editUser(response.json())); }
  };

  return (
    <form onSubmit={handleSubmit} className={style.formochka}>
      <div className="container col-md-4 mb-3 my-3">
        <div className="card">
          <div className="d-flex flex-column align-items-center text-center my-3">
            <img src={`http://localhost:3001/img/${currentUser.photo}`} alt="profilephoto" className="rounded-circle" width="350" />
            <div className="my-3">
              <h4>{currentUser.name}</h4>
              <input
                className="inputphoto input-file"
                id="file"
                onChange={handleChange}
                type="file"
                name="photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5>Ваши персональные данные</h5>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Имя</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="name" placeholder="Имя" value={currentUser.name} onChange={handleChange} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="email" placeholder="Email" value={currentUser.email} onChange={handleChange} disabled />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Телефон</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="phone" placeholder="Телефон" value={currentUser.phone} onChange={handleChange} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Страна</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                Россия
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-secondary my-3">Сохранить изменения</button>
        <Link to="/addBidding"><button className="btn btn-secondary my-3 mx-3">Подать объявление</button></Link>
        <Link to="/myProducts"><button className="btn btn-secondary my-3 mx-1">Мои товары</button></Link>
      </div>
    </form>
  );
}

export default ProfileData;
