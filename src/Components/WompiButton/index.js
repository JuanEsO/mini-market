import styles from "@/styles/WompiButton.module.css"
const WompiForm = ({ totalPay }) => {
    return (
        <form action="https://checkout.wompi.co/p/" method="GET">
            <button type="submit" className={styles.button}>Pagar</button>
            <input type="hidden" name="public-key" value="pub_test_OYPH56N6pP4cEF0CqchDHUhXX4SDv8Rs" />
            <input type="hidden" name="currency" value="COP" />
            <input type="hidden" name="amount-in-cents" value={totalPay} />
            <input type="hidden" name="reference" value="4XMPGKWWPKWQ" />
        </form>
    )
}

export default WompiForm