import AvatarForm from "./AvatarForm";
import ProfileList from "./ProfileList";

const ProfilePage = () => {
  return (
    <>
    <div className="row content">
      <center>
      <h5>Привет, Джами! Давай расхламляться!</h5>
      </center>
      <div className="col s7 push-s5"> <ProfileList /><span className="flow-text"></span></div>
      <div className="col s5 pull-s7"> <AvatarForm /> <span className="flow-text">5-columns wide pulled to the left by 7-columns.</span></div>
    </div>

    </>
  );
}

export default ProfilePage;
