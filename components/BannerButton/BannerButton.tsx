import React from "react";
import styles from "../BannerButton/BannerButton.module.css";

interface BannerButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  Icon?: React.ElementType; 
}

const BannerButton: React.FC<BannerButtonProps> = ({ 
  text = 'Перейти до сторінки бренду',
  onClick, 
  className,
  Icon
}) => {
  return (
    <button 
      className={`${styles.bannerBtn} `} 
      onClick={onClick}
    >
      <span className={styles.btnText}>{text}</span>
      {Icon && <Icon className={`${styles.brandLogo} ${className}`} />}
    </button>
  );
};

export default BannerButton;