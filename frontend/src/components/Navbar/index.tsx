import axios from 'axios'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'src/contexts/userContext'
import toast from 'src/utils/toast'

//import logoText from '../../assets/logo-text.png'
import logo from '../../assets/logoImage.png'

import styles from './navbar.module.scss'

import Tag from 'components/Tag'

const default_image = 'https://avatars.githubusercontent.com/u/45668209?v=4'

const width = '4.5rem'
const height = '3.5rem'

export const Navbar = () => {
  const navigate = useNavigate()
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
    <nav className={styles.navbar}>
      <a href='/' className={styles.logo}>
        <img style={{ width, height }} src={logo} alt="logo" />
        <span>CHEERS</span>
      </a>
      <div className={styles.links}>
        <Tag>
          <div className={styles.cart}>
            <AiOutlineShoppingCart />
            <span>Cart</span>
            <span className={styles.cartCount}>{1}</span>
          </div>
        </Tag>

        <div className={styles.dropdown}>
          <a className={styles.dropdownText}>
            <img src={user.image_url || default_image} alt="picture" className={styles.profilePicture} />
            <span className={styles.name}>{user.name}</span>
            {user.email && <BiChevronDown />}
          </a>

          {user.email &&
            <div className={styles.dropdownContent}>
              <button>Settings</button>
              <hr />
              <button> Reviews</button>
              <hr />
              <button> Favorites</button>
              <hr />
              <button onClick={handleLogout}>Logout</button>
            </div>}
        </div>
      </div>
    </nav>
  )
}
