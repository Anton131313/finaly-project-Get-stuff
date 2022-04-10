import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as config from '../../config/config';
import { editUser } from '../../redux/actions/userAction';

function ProfileData() {
  const id = useParams();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios.get(`${config.getUser(id.id)}`)
      .then((response) => setCurrentUser(response.data));
  }, []);

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${config.editUser(id.id)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(currentUser),
    })
      .then((response) => response.json())
      .then((data) => dispatch(editUser(data)));
    // if (response.status === 200) { await dispatch(editUser(response.json())); }
  };

  return (
    <form>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={currentUser.photo} alt="profilephoto" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>{currentUser.name}</h4>
                      <input
                        className="inputphoto input-file"
                        id="file"
                        onChange={handleChange}
                        accept="image/*"
                        type="file"
                        name="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
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
                <input className="text" type="text" name="email" placeholder="Email" value={currentUser.email} onChange={handleChange} />
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
                <h6 className="mb-0">Город</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                Москва
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={handleSubmit}>Сохранить изменения</button>
    </form>
  );
}

export default ProfileData;
