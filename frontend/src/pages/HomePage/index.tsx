import { FaArrowRight } from 'react-icons/fa'

import styles from './homepage.module.scss'


import alcohol from 'assets/alcohol.png'
import baby from 'assets/baby.png'
import { Card } from 'components/Card'
import { Filter } from 'components/Filter'
import { Navbar } from 'components/Navbar'

const filters = [
  { name: 'Alcohol', image_url: alcohol },
  { name: 'Condoms', image_url: baby }
]

const alcoholProducts = [
  {
    title: 'Super Bock 1L',
    price: '€2.49',
    image_url: 'https://maissabor.pt/cdn/shop/products/3200000186_CERVEJA-SUPER-BOCK-1LT_1080x.png?v=1612805419'
  },
  {
    title: 'Vodka Miss Silver',
    price: '€7.79',
    image_url: 'https://www.continente.pt/on/demandware.static/-/Sites-col-master-catalog/default/dw28c0187d/images/col/467/4670037-frente.jpg'
  },
  {
    title: 'Sagres Mini',
    price: '€1.25',
    image_url: 'https://www.portugalvineyards.com/61809/sagres-mini-original.jpg'
  },
  {
    title: 'Sidra Somersby 0.5L',
    price: '€2.19',
    image_url: 'https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw452b356f/images/hi-res/003039611.jpg'
  },
  {
    title: 'Vinho Tinto Santa Vitória',
    price: '€5.99',
    image_url: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202009/04/05218722203587____3__600x600.jpg'
  },
  {
    title: 'Whisky Bourbon Jack Daniels',
    price: '€26.69',
    image_url: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw3c2e2828/images/col/205/2050268-frente.jpg?sw=2000&sh=2000'
  },
  {
    title: 'Garrafa Vintage Licor Beirão 70CL',
    price: '€10.99',
    image_url: 'https://loja.licorbeirao.com/cdn/shop/products/Loja-LB70cl_8e5d9ec4-88c4-42e6-b9a2-6d0221f2c3fb_grande.png?v=1598960449'
  },
  {
    title: 'Licor Jagermeister - Licor de Ervas',
    price: '€21.99',
    image_url: 'https://estadoliquido.pt/6031-large_default/licor-jagermeister-alemanha.jpg'
  },
  {
    title: 'Vinho Tinto Decadence',
    price: '€2.99',
    image_url: 'https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h39/h26/11941382979614.png'
  }
]

const width = '1.25rem'
const height = '1.25rem'

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.filters}>
        {filters.map(filter => (
          <Filter name={filter.name} image_url={filter.image_url} />
        ))}
      </div>
      <div className={styles.alcohol}>
        <div className={styles.title}>
          <h1>Alcohol</h1>
          <a href='alcohol'>
            <span>See all</span>
            <FaArrowRight style={{ width, height }} />
          </a>
        </div>
        <div className={styles.cards}>
          {alcoholProducts.slice(0, 10).map(product => (
            <Card title={product.title} price={product.price} image_url={product.image_url} />
          ))}
        </div>
      </div>
      <div className={styles.condoms}>
        <div className={styles.title}>
          <h1>Condoms</h1>
          <a href='condoms'>
            <span>See all</span>
            <FaArrowRight style={{ width, height }} />
          </a>
        </div>
        <div className={styles.cards}>
          {alcoholProducts.slice(0, 10).map(product => (
            <Card title={product.title} price={product.price} image_url={product.image_url} />
          ))}
        </div>
      </div>
    </div>
  )
}
