import Head from 'next/head'
import { useState, useMemo, useCallback, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeaderBar from '@/Components/HeaderBar'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ItemDetail from '@/Components/ItemDetail'
import ShoppingCart from '@/Components/ShoppingCart'
import Modal from '@/Components/Modal'
// import { readFileSync } from 'fs'
import products from 'Products/data'


export default function Home() {

  const [itemSelected, setItemSelected] = useState(null);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleSelectItem = (item) => {
    setItemSelected(item);
    setCartIsOpen(false);
  }

  const handleOpenCart = () => {
    setCartIsOpen(true);
  }

  const SectionHeader = ({ title }) => (
    <div className={styles.sectionHead}>
      <h1 className={styles.sectionHeadTitle}>{title}</h1>
    </div>
  )

  const ProductListItem = ({ product }) => {
    return (
      <div className={styles.productListItem} onClick={() => handleSelectItem(product)}>
        <div className={styles.productListItemImage}>
          <Image src={product.image} alt={product.name} width={"200"} height={product.height} className={styles.image} />
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Mini Market</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeaderBar openCart={handleOpenCart} />
        <main className={styles.main}>
          <div className={styles.productList}>
            <SectionHeader title="Store" />
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
              <Masonry columnsCount={3}>
                {products?.data?.map((product) => (
                          <ProductListItem product={product} key={product?.name} />
                      ))}
            </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className={styles.rigthPanel}>
            <SectionHeader title={cartIsOpen ? "Shopping Cart" : "Product"} />
            
            {cartIsOpen ? <ShoppingCart /> : <ItemDetail item={itemSelected} />}
          </div>
        </main>
      </div>
      {/* <Modal open={isPayModalOpen}>
        <div className={styles.modal}>
          <ItemDetail item={products?.data[0]} /> 
        </div>
      </Modal> */}
    </>
  )
}
