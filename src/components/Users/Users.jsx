import style from "./Users.module.scss";
import userPhoto from "../../assets/img/user_photo_small.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {
          pages.map(page => {
            return (
              <span key={'page' + page}
                    className={props.currentPage === page && style.selectedPage}
                    onClick={() => props.onPageChanged(page)}
              >
                  {page}
                </span>
            )
          })
        }
      </div>
      {
        props.users.map(user => {
            return (
              <div key={user.id}>
                <span>
                  <div>
                    <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small || userPhoto}
                           className={style.userPhoto}
                           alt=""/>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      onClick={
                        () => {
                          user.followed
                            ? (
                              axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                  withCredentials: true,
                                  headers: {
                                    'API-KEY': 'b7966b07-c235-4419-8e44-b431e2d687e7'
                                  }
                                })
                                .then(() => {
                                  props.unfollow(user.id)
                                })
                            )
                            : (
                              axios
                                .post(
                                  `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                  null,
                                  {
                                    withCredentials: true,
                                    headers: {
                                      'API-KEY': 'b7966b07-c235-4419-8e44-b431e2d687e7'
                                    }
                                  }
                                )
                                .then(response => {

                                })
                                .then(() => {
                                  props.follow(user.id)
                                })
                            )
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