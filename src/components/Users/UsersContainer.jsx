import React from 'react'
import {connect} from "react-redux"
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
} from "../../redux/users-reducer"
import * as axios from "axios"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloder";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.setUsers(this.props.currentPage)
  }

  setUsers = (currentPage, pageSize = this.props.pageSize) => {
    this.props.setIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    if (this.props.currentPage !== page) {
      this.props.setCurrentPage(page)
      this.setUsers(page)
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(
  mapStateToProps,
  {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching
  }
  )(UsersContainer)