import React, {useState} from "react";
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true)
  }

  return (
    <>
      {!editMode
        ? (
          <div>
              <span
                onDoubleClick={activateEditMode}
              >{props.status || 'Empty'}</span>
          </div>
        )
        : (
          <div>
            <input
              type="text"
              autoFocus={true}
            />
          </div>
        )
      }
    </>
  )
}

export default ProfileStatusWithHooks