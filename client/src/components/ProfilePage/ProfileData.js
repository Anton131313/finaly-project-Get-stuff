import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as config from '../../config/config';

function ProfileData() {
  const id = useParams();
  console.log(id);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get(`${config.getUser(id.id)}`)
      .then((response) => setCurrentUser(response.data));
  }, []);

  console.log(currentUser);
  // const [input, setInput] = useState();
  // const dispatch = useDispatch();

  // const dataUser = useSelector((state) => state.user);

  // useEffect(() => {
  //   setInput({
  //     name: dataUser.name, email: dataUser.email, phone: dataUser.phone, photo: dataUser.photo,
  //   });
  // }, [dataUser]);

  // const handleChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };
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
                <input className="text" type="text" name="name" placeholder="Имя" />
              </div>
            </div>
            <button type="button" className="btn btn-info">
              <i className="material-icons">
                edit
              </i>
            </button>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="email" placeholder="Email" />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Телефон</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="phone" placeholder="Телефон" />
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
      <button className="btn btn-secondary">Сохранить изменения</button>
    </form>
  );
}

export default ProfileData;
