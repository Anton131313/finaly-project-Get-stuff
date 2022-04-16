import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUserData } from '../../redux/actions/userAction';
import style from './profile.module.css';

function ProfileData() {
  const id = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const [inputs, setInputs] = useState({ ...userData });

  useEffect(() => {
    dispatch(getUserData(id));
  }, []);

  const handleChange = (e) => {
    if (e.target.files) {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  // console.log(currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editUser(inputs, id));
  };
  console.log(inputs);

  return (
    <form onSubmit={handleSubmit} className={style.formochka}>
      <div className="container col-md-4 mb-3 my-3">
        <div className="card">
          <div className="d-flex flex-column align-items-center text-center my-3">
            <img src={inputs.photo ? `http://localhost:3001/img/${userData.photo}` : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt="profilephoto" className="rounded" width="350px" height="300px" />
            <div className="my-3">
              <h4>
                {' '}
                <span className="material-icons">
                  verified
                </span>
                {inputs.name}
              </h4>
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
                <h6 className="mb-0">
                  <span className="material-icons">
                    account_circle
                  </span>
                  {' '}
                  Имя
                </h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="name" placeholder="Имя" value={inputs.name} onChange={handleChange} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">
                  <span className="material-icons">
                    email
                  </span>
                  {' '}
                  Email
                </h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} disabled />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">
                  <span className="material-icons">
                    phone_enabled
                  </span>
                  {' '}
                  Телефон
                </h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="phone" placeholder="Телефон" value={inputs.phone} onChange={handleChange} />
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
        <Link to="/myProducts"><button className="btn btn-secondary my-3 mx-1">Мои объявления</button></Link>
        <Link to="/myAuctions"><button className="btn btn-secondary my-3 mx-1">Мои аукционы</button></Link>
      </div>
    </form>
  );
}

export default ProfileData;
