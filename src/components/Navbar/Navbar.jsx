import { UserBadge } from '../UserBadge/UserBadge'
import s from './Navbar.module.scss'

export const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className={s.Navbar}>
      <div className={s.inner}>
        <h1 className={s.logo}>Rugram</h1>
        <UserBadge
          nickName={nickName}
          avatarUrl={avatarUrl}
          id={id}
        />
      </div>
    </div>
  )
}
