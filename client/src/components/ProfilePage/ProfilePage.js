import React from 'react';
import AvatarForm from './AvatarForm';
import ProfileData from './ProfileData';
import ProfileList from './ProfileList';

function ProfilePage() {
  return (
    <div className="content">
      <div className="container">
        <div className="row login">
          <div className="col">
            <ProfileList />
          </div>
          <div className="col">
            <ProfileData />
            <AvatarForm />
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProfilePage;
