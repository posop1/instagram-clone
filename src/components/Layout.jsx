import '../styles/main.scss'
import { Navbar } from './Navbar/Navbar'

export const Layout = ({ nickName, avatarUrl, id, children }) => {
  return (
    <div className="app">
      <Navbar
        nickName={nickName}
        avatarUrl={avatarUrl}
        id={id}
      />
      <div className="main">{children}</div>
    </div>
  )
}
