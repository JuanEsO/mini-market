import React from "react";
import styles from "@/styles/modal.module.css";


const MyModal = ({ open, onClose, children, className }) => {
    const _onClose = (event) => {
        event.stopPropagation();
        onClose && onClose();
    };
    const _onClickContent = (event) => event.stopPropagation();

    return open ? (
        <div className={styles.modal} onClick={_onClose}>
            <div className={`${styles.mcontent} ${className}`} onClick={_onClickContent}>
                <div className={styles.mbody}>{children}</div>
            </div>
        </div>
    ) : null;
};

export default MyModal;