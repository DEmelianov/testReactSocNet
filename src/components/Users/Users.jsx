import style from "./Users.module.scss";
import userPhoto from "../../assets/img/user_photo_small.png";
import React from "react";
import {NavLink} from "react-router-dom";

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
                      disabled={props.followingInProgress.some(id => id === user.id)}
                      onClick={
                        () => {
                          user.followed
                            ? props.unfollow(user.id)
                            : props.follow(user.id)
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