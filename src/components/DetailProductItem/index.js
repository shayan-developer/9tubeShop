import React from 'react'
import { notification } from 'antd';
import { TiTick } from "react-icons/ti";
import { FaTimesCircle } from "react-icons/fa";
function Detail() {
    const openNotification = () => {
        notification.info({
            message: <p className={styles.title_notif}>{t("added_basket")}</p>,
            description: <div className={styles.notif}>
                <img src={img} alt={title} className={styles.img_notif} />
                <div className={styles.text_notif}>{title}</div>
            </div>,
            closeIcon: <FaTimesCircle className={styles.notif_icon} />,
            className: styles.contain_notif,
        });
    };
    return (
        <div>
            
        </div>
    )
}

// dispath({
//     type: "ADD",
//     item: {
//         id, title, img, price, amount
//     }
// })

export default index
