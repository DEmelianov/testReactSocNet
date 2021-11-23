import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloder";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user_photo_small.png"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img alt="" src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} alt=""/>
        {
          props.isOwner &&
          <input
            type="file"
            onChange={onPhotoSelected}
          />
        }
        <ProfileStatusWithHooks
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo