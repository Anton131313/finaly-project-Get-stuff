import React from 'react';
import AvatarForm from './AvatarForm';
import ProfileData from './ProfileData';
import ProfileList from './ProfileList';

function ProfilePage() {
  return (
    <div className="row content">
      <center>
        <h5>Привет, Джами! Давай расхламляться!</h5>
      </center>
      <div className="col s7 push-s5">
        {' '}
        <ProfileList />
        <span className="flow-text" />
      </div>
      <div className="col s5 pull-s7">
        {' '}
        <AvatarForm />
        {' '}
        <ProfileData />
        {' '}
        <span className="flow-text" />
      </div>
    </div>
  );
}

export default ProfilePage;
