import React, { useState } from 'react';

function ProfileData() {
  const [data, setData] = useState([]);
  const [changer, setChanger] = useState(false);
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, { id: Date.now(), text: input }]);
    setInput('');
  };

  const changeText = () => {

  };

  return (
    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <form onSubmit={submitHandler}>
              <div className="col-sm-3">
                <h6 className="mb-0">Имя</h6>
              </div>
            </form>
            <div className="col-sm-9 text-secondary">
              Kenneth Valdez
            </div>
          </div>
          <button type="button" onClick={() => setChanger((prev) => !prev)} className="btn btn-info">
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
              fip@jukmuh.al
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Телефон</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              (239) 816-9029
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
  );
}

export default ProfileData;
