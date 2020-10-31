import React, {FC} from 'react'
import style from './Header.module.sass'
import logo from '../../common/img/Social_Network_logo.svg'
import {NavLink} from 'react-router-dom'
import userIcon from '../../common/img/users_icon.png'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {logout} from '../../redux/authReducer'
import {Button} from '@material-ui/core'


export const Header: FC = () => {

  const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth)
  const login = useSelector((state: AppStateType) => state.authReducer.login)
  const avatar = useSelector((state: AppStateType) => state.authReducer.avatar)

  const dispatch = useDispatch()

  return (
    <header className={style.header}>
      <NavLink to="/profile"><img alt="" src={logo}/></NavLink>
      <div className={style.loginItem}>
        {isAuth
          ? <div className={style.ava}>
            <NavLink to="/profile">{login}</NavLink>
            <img alt="" src={avatar || userIcon}/>
            <Button onClick={() => dispatch(logout())}>Log Out</Button>
            {/*<button onClick={() => dispatch(logout())} className={style.signIn}>Log Out</button>*/}
          </div>
          : <div className={style.signIn}>
            <NavLink to={'/login'}>
              <Button>Sign IN</Button>
              {/*<button className={style.signIn}>Sign In</button>*/}
            </NavLink>
          </div>
        }
      </div>
    </header>
  )
}