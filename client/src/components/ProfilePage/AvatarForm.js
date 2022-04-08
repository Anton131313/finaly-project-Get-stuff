import React from 'react';

function AvatarForm() {
  return (
    <div className="row profile">
      <center>
        <div className="col s10 m5">
          <div className="card">
            <div className="card-image">
              <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="аватар" />
            </div>
            <div className="card-content">
              <p>Добавить аватарку</p>
              <form action="#">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </div>

  );
}

export default AvatarForm;
