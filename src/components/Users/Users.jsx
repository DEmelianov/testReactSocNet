import React from 'react'
import style from './Users.module.scss'
import * as axios from 'axios'
import userPhoto from '../../assets/img/user_photo_small.png'
const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      })
    /*props.setUsers(
      [
        {
          id: 1,
          fullName: 'Dmitrii E.',
          photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png',
          status: 'I am the boss',
          followed: true,
          location: {
            city: 'Tyumen',
            country: 'Russia'
          }
        },
        {
          id: 2,
          fullName: 'User 2',
          photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png',
          status: 'status 3',
          followed: false,
          location: {
            city: 'Tyumen 2',
            country: 'Russia 2'
          }
        },
        {
          id: 3,
          fullName: 'User 3',
          photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png',
          status: 'status 3',
          followed: false,
          location: {
            city: 'Tyumen 3',
            country: 'Russia 3'
          }
        }
      ]
    )*/
  }

  return (
    <div>
      {
        props.users.map(user => {
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
                          user.followed ? props.unfollow(user.id) : props.follow(user.id)
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

export default Users