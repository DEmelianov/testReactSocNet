import React from 'react'
import style from './Users.module.scss'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user_photo_small.png'

class Users extends React.Component {
  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(user => {
              return (
                <div key={user.id}>
                <span>
                  <div>
                    <img src={user.photos.small || userPhoto}
                         className={style.userPhoto}
                         alt=""/>
                  </div>
                  <div>
                    <button
                      onClick={
                        () => {
                          user.followed ? this.props.unfollow(user.id) : this.props.follow(user.id)
                        }
                      }
                    >
                      {
                        user.followed ? 'unfollow' : 'follow'
                      }
                    </button>
                  </div>
                </span>
                  <span>
                  <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                  </span>
                  <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                  </span>
                </span>
                </div>
              )
            }
          )
        }
      </div>
    )
  }
}

export default Users