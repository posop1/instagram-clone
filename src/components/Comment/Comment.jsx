import s from './Comment.module.scss'

const Comment = ({ nickName, text }) => {
  return (
    <div className={s.Comment}>
      <span className={s.name}>{nickName}</span>
      <span className={s.text}>{text}</span>
    </div>
  )
}

export default Comment
