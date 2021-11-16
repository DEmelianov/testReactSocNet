import React from "react";
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode
          ? (
            <div>
              <span
                onDoubleClick={this.activateEditMode}
              >{this.props.status}</span>
            </div>
          )
          : (
            <div>
              <input
                type="text"
                value={this.props.status}
                autoFocus="true"
                onBlur={this.deactivateEditMode}
              />
            </div>
          )
        }
      </>
    )
  }
}

export default ProfileStatus