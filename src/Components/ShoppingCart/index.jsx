import Image from 'next/image'
import styles from '@/styles/shopping-cart.module.css'
import WompiButton from '@/Components/WompiButton';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '@/config/services';

const ShoppingCart = () => {
    const {cartItems, cartTotal} = useSelector(state => state);

    const ProducItem = ({ data }) => {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.quantity}>
                    {data.quantity}
                </div>
                <Image src={data.image} alt={data.name} width={80} height={80} />
                <div className={styles.info}>
                    <h1 className={styles.infoName}>{data.name}</h1>
                    <p className={styles.infoPrice}> ${data.price} - Und</p>
                </div>
                
            </div>
        )
    }

    return (cartItems?.length > 0 ? ( <div className={styles.container}>
            {cartItems.map((product, index) => (
                <ProducItem key={index} data={product} />
            ))}
            <div className={styles.total}>
                Total: <span className={styles.totalNum}>{formatCurrency(cartTotal)}</span>
            </div>
            <WompiButton totalPay={cartTotal+"00"} />
        </div>) : (
            <div className={styles.empty}>
                <h1 className={styles.emptyTitle}>Your cart is empty</h1>
                <p className={styles.emptyText}>Add some items to your cart</p>
            </div>
        )
    )
}

export default ShoppingCart