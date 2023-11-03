import axios from 'axios'
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from 'src/contexts/userContext'

import logo from '../../assets/burger.svg'
import logoTextWhite from '../../assets/logo-text-white.svg'
import logoText from '../../assets/logo-text.svg'

import styles from './navbar.module.scss'

import toast from 'utils/toast'

export const Navbar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const path = useLocation().pathname
  const { user } = useUser()

  const handleLogout = () => {
    axios.delete(`${import.meta.env.VITE_API_BASE_URL}/users/logout`)
      .then(() => {
        localStorage.removeItem('token')
        toast.success('Logged out successfully')
        navigate('/sign-in')
      })
      .catch(() => toast.error('Failed to logout'))
  }

  return (
    <>
      <nav className={styles.navbar}>
        <a href='/' className={styles.logo}>
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo" />
        </a>
        <div className={styles.links}>
          <a href='/groups' className={path.includes('group') ? styles.activeLink : ''}>Groups</a>
          <a href='/locations' className={path.includes('location') ? styles.activeLink : ''}>Locations</a>
          <div className={styles.dropdown}>
            <a className={styles.dropdownText} href='/account?tab=settings'>
              <img src={user?.image_url} alt="picture" className={styles.profilePicture} />
              <span className={styles.name}>{user?.name}</span>
              <BiChevronDown />
            </a>

            <div className={styles.dropdownContent}>
              <button onClick={() => navigate({ pathname: '/account', search: '?tab=settings' })}>Settings</button>
              <hr />
              <button onClick={() => navigate({ pathname: '/account', search: '?tab=reviews' })}> Reviews</button>
              <hr />
              <button onClick={() => navigate({ pathname: '/account', search: '?tab=favorites' })}> Favorites</button>
              <hr />
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div >
      </nav >
      <nav className={`${styles.navbarMobile} ${active && styles.navbarMobileActive}`}>
        <div className={styles.navbarTop}>
          <a href='/' className={styles.logo}>
            <img src={active ? logoTextWhite : logoText} alt="logo" />
          </a>
          <img
            src={logo}
            alt="burger"
            className={styles.burger}
            onClick={() => setActive(!active)}
          />
        </div>
        {
          active &&
          <div className={styles.burgerMenu}>
            <button onClick={() => navigate('/groups')} className={path.includes('group') ? styles.activeLink : ''}>Groups</button>
            <button onClick={() => navigate('/locations')} className={path.includes('location') ? styles.activeLink : ''}>Locations</button>
            <button onClick={() => navigate({ pathname: '/account', search: '?tab=settings' })} className={styles.profile}>
              <img src={user?.image_url} alt="picture" className={styles.profilePicture} />
              <span className={styles.name}>{user?.name}</span>
            </button>
          </div>
        }
      </nav>
    </>
  )
}
