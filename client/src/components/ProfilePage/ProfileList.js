import style from './profile.module.css'

const ProfileList = () => {
  return (
    <>
    <div className="container">
    <div className={style.profileList}>
      <center>
      <ul>
        <li>Подать объявление</li>
        <li>Мои объявления</li>
        <li>Избранное</li>
      </ul>
      </center>
      </div>
    </div>
    </>
  );
}

export default ProfileList;
