import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://lh3.googleusercontent.com/proxy/ZD6CwISLQAhBcnuhTrVTXmvzDPNyKBb0iTmJkBPpqI0Xi_nTEE0DcGuEjqONOol2z1LB1ZFgCEuB1fvfT6o49L8Eh-qYTrtwL9d9TwWSvvFxLHuAgMrp3w" alt=""/>
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post