import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/header-bar.module.css'
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { formatCurrency } from '@/config/services'

const HeaderBar = ({ openCart }) => {
    const { cartTotal } = useSelector(state => state)
    return (
        <div className={styles.container}>
            <div>
                <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
            </div>
            <div>
                <div className={styles.button} onClick={openCart}>
                    {cartTotal > 0 && <div className={styles.cartTotal}>{formatCurrency(cartTotal)}</div>}
                    <BsCart3 className={styles.buttonIcon} />
                </div>
            </div>
        </div>
    )
}

export default HeaderBar