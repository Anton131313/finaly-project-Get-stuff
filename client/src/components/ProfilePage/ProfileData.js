import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProfileData() {
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();

  const dataUser = useSelector((state) => state.user);
  useEffect(() => {
  dataUser && console.log(dataUser);
  }, [dataUser]);
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
                <input className="text" type="text" name="name" />
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
                <input className="text" type="text" name="email" />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Телефон</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="phone" />
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
            <hr />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileData;
