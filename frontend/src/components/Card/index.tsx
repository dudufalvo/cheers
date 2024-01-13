import styles from './card.module.scss'

import Button from 'components/Button'


type CardType = {
  title: string,
  price: string,
  image_url: string
}

export const Card = ({ title, price, image_url }: CardType) => {
  return (
    <div className={styles.card}>
      <img src={image_url} alt='' />
      <h1>{title}</h1>
      <div>
        <span>{price}</span>
        <Button>CART</Button>
      </div>
    </div>
  )
}
