import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode
          ? (
            <div>
              <span
                onDoubleClick={this.activateEditMode}
              >{this.props.status || 'Empty'}</span>
            </div>
          )
          : (
            <div>
              <input
                type="text"
                value={this.state.status}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                onChange={this.onStatusChange}
              />
            </div>
          )
        }
      </>
    )
  }
}

export default ProfileStatus