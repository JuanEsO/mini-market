import Image from "next/image";
import styles from "@/styles/itemDetail.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "@/config/services";


// This function is used to get the quantity of the item
const getQuantity = (cartItems, item) => {
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
    return itemInCart ? itemInCart.quantity : 0;
};

// This function is used to render the item detail
const ItemDetail = ({ item }) => {
    const dispatch = useDispatch(); //
    const cartItems = useSelector(state => state.cartItems); 
    const quantity = getQuantity(cartItems, item);
 
    // This function is used to add an item to the cart
    const handleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART_REQUEST", payload: item});
    }

    // This function is used to remove an item from the cart
    const handleRemoveFromCart = () => {
        dispatch({ type: "REMOVE_FROM_CART_REQUEST", payload: item});
    };

    return (
        <div>
            {item ? <div className={styles.itemDetail}>
                <div className={styles.imageContainer}>
                    <div className={styles.quantity}>{quantity}</div>
                    <Image src={item?.image} alt={item?.name} width={"200"} height={item?.height} className={styles.image} />
                </div>
                <div className={styles.itemDetailInfo}>
                    <div className={styles.infoRow}>
                        <div className={styles.row}>
                            <h1>{item?.name}</h1>
                            <div className={styles.pointSeparator}/>
                            <h1 className={styles.priceText}>{formatCurrency(item?.price)}</h1>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.plusButton} onClick={handleAddToCart}> + </button>
                            <button className={styles.minusButton} onClick={handleRemoveFromCart}> - </button>
                        </div>
                    </div>
                    <div className={styles.descContainer}>
                        <p className={styles.descriptionText}>{item?.description}</p>
                    </div>
                </div>
            </div>: 
             <p>Please choose a product on the left</p>
            }
        </div>
    );
}

export default ItemDetail;