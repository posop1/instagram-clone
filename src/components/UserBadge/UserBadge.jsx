import { useNavigate } from 'react-router-dom'
import s from './UserBadge.module.scss'

export const UserBadge = ({ nickName, avatarUrl, id }) => {
  const navigate = useNavigate()

  const onUserNavigate = () => {
    navigate(`/${id}`)
  }

  return (
    <div
      className={s.UserBadge}
      onClick={onUserNavigate}
    >
      {avatarUrl ? (
        <img
          src=""
          className={s.image}
        />
      ) : (
        <div className={s.palceholder} />
      )}
      <span className={s.nickName}>{nickName}</span>
    </div>
  )
}
