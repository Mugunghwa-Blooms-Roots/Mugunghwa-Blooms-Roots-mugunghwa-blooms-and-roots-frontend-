import React from "react";
import styles from "./CardButton.module.css";
import BasketLogo from "@/assets/logo/BasketLogo/BasketLogo";

interface CardButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const CardButton: React.FC<CardButtonProps> = ({ 
  text = 'Додати в корзину',
  onClick,
  className,
}) => {
  return (
    <button 
      className={`${styles.cardBtn} `} 
      onClick={onClick}
    >
      <span className={styles.cardBtnText}>{text}</span>
      <BasketLogo className={`${styles.basketLogo} ${className}`} />
    </button>
  );
};

export default CardButton;