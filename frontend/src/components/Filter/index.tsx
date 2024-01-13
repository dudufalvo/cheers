import styles from './filter.module.scss'

type FilterType = {
  name: string;
  image_url: string;
}

export const Filter = ({ name, image_url }: FilterType) => {
  return (
    <div className={styles.filter}>
      <div><img src={image_url} alt="" className={styles.image} /></div>
      <span>{name}</span>
    </div>
  )
}
