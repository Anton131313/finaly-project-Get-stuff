import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as config from '../../config/config';
import { editUser } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';

function ProfileData() {
  const id = useParams();
  dispatch = useDispatch();
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
    const response = await fetch(`${config.editUser(id.id)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(currentUser),
    });
    if (response.status === 200) { await dispatch(editUser()); }
  };

  return (
    <form>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Имя</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="name" placeholder="Имя" value={currentUser.name} onChange={handleChange} />
                <button type="button" className="btn btn-secondary mx-3">
                  <i className="material-icons">
                    edit
                  </i>
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="email" placeholder="Email" value={currentUser.email} onChange={handleChange} />
                <button type="button" className="btn btn-secondary mx-3">
                  <i className="material-icons">
                    edit
                  </i>
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Телефон</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="phone" placeholder="Телефон" value={currentUser.phone} onChange={handleChange} />
                <button type="button" className="btn btn-secondary mx-3">
                  <i className="material-icons">
                    edit
                  </i>
                </button>
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
