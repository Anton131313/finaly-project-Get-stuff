import React from 'react';
import { useSelector } from 'react-redux';
import ProfileData from './ProfileData';
import ProfileList from './ProfileList';

function ProfilePage() {
  const dataUser = useSelector((state) => state.user);
  const id = useParams();

  if (+id.id === dataUser.id) {
    return (
      <div className="row content">
        <center>
          <h5>
            Привет,
            {' '}
            {dataUser.name}
            ! Давай расхламляться!
          </h5>
        </center>
        <div className="col s5 pull-s7">
          <ProfileData />
          {' '}
          <ProfileList />
          {' '}
          {' '}
          <span className="flow-text" />
        </div>
      </div>
    );
  }
  return (
    <p> ни хрена не выйдет </p>
  );
}

export default ProfilePage;
