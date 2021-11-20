import style from "./Users.module.scss";
import React from "react";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
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
  )
}

export default Users