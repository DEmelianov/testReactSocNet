import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
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
              onBlur={deactivateEditMode}
              onChange={onStatusChange}
              value={status}
              autoFocus={true}
            />
          </div>
        )
      }
    </>
  )
}

export default ProfileStatusWithHooks