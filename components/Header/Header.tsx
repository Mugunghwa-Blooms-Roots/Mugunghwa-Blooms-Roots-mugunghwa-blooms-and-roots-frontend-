import styles from './Header.module.css';
import Image from 'next/image';
import MugunghwaBloomsRootsLogo from "../../assets/logo/MugunghwaBloomsRootsLogo/transparent/MugunghwaBloomsRootsTransparentLogo.png";
import CatalogLogo from "../../assets/logo/CatalogLogo/CatalogLogo";
import NewProductsLogo from "../../assets/logo/NewProducts/NewProductsLogo";
import FavoritesLogo from "../../assets/logo/FavoritesLogo/FavoritesLogo";
import ShoppingCartLogo from "../../assets/logo/ShoppingCartLogo/ShoppingCartLogo";
import AuthorizationLogo from "../../assets/logo/AuthorizationLogo/AuthorizationLogo";
import SavesLogo from "../../assets/logo/SavesLogo/SavesLogo";
import FacebookLogo from '../../assets/logo/FacebookLogo/FacebookLogo';
import InstagramLogo from '../../assets/logo/InstagramLogo/InstagramLogo';
import TikTokLogo from '../../assets/logo/TikTokLogo/TikTokLogo';
import TelegramLogo from '../../assets/logo/TelegramLogo/TelegramLogo';
import ViberLogo from '../../assets/logo/ViberLogo/ViberLogo';
import LinkedInLogo from '../../assets/logo/LinkedInLogo/LinkedInLogo';
import XLogo from '../../assets/logo/XLogo/XLogo';
import PinterestLogo from '../../assets/logo/PinterestLogo/PinterestLogo';
import PhoneLogo from '../../assets/logo/PhoneLogo/PhoneLogo';

export default function Header() {
    return (
        <>
            <div className={styles.salesAndPropositions}>
                <div className={styles.salesAndPropositionsWrapper}>
                    <a href="email:mugunghwarootandbloomsteam@gmail.com" className={styles.phoneButton}>
                        <PhoneLogo className={styles.phoneButtonLogo} />
                        <span className={styles.phoneButtonText}>mugunghwarootandbloomsteam@gmail.com</span>
                    </a>
                    <a href="tel:+380678333023" className={styles.phoneButton}>
                        <PhoneLogo className={styles.phoneButtonLogo} />
                        <span className={styles.phoneButtonText}>(067)-833-30-23</span>
                    </a>
                    <InstagramLogo className={`${styles.socialIconLogo} ${styles.instagramLogo}`} />
                    <FacebookLogo className={`${styles.socialIconLogo} ${styles.facebookLogo}`} />
                    <TikTokLogo className={`${styles.socialIconLogo} ${styles.tikTokLogo}`} />
                    <TelegramLogo className={`${styles.socialIconLogo} ${styles.telegramLogo}`} />
                    <ViberLogo className={`${styles.socialIconLogo} ${styles.viberLogo}`} />
                    <LinkedInLogo className={`${styles.socialIconLogo} ${styles.linkedInLogo}`} />
                    <XLogo className={`${styles.socialIconLogo} ${styles.xLogo}`} />
                    <PinterestLogo className={`${styles.socialIconLogo} ${styles.pinterestLogo}`} />
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src={MugunghwaBloomsRootsLogo} className={styles.mugunghwaBloomsRootsLogo} alt="Mugunghwa Blooms Roots Logo" />
                </div>
                <div className={styles.searchContainer}>
                    <input 
                        type="text" 
                        placeholder="Будь ласка, введіть назву товару, категорію або бренд ..."
                        className={styles.searchInput} 
                    />
                    <button className={styles.searchBtn}>
                        <Image className={styles.searchBtnImg} src="https://i.ibb.co/WWWYd5jC/1150612.png" alt="Search Button Icon" width={20} height={20} style={{ paddingRight: "4px" }}/>
                        Шукати
                    </button>
                </div>
                <div className={styles.userActions}>
                    <div className={styles.actionItem}>
                        <CatalogLogo className={styles.catalogLogo} />
                        Каталог
                    </div>
                    <div className={styles.actionItem}>
                        <NewProductsLogo className={styles.catalogLogo} />
                        Акції та новинки
                    </div>
                     <div className={styles.actionItem}>
                        <SavesLogo className={styles.catalogLogo} />
                        Закладки
                    </div>
                    <div className={styles.actionItem}>
                        <FavoritesLogo className={styles.catalogLogo} />
                        Улюблене
                    </div>
                    <div className={styles.actionItem}>
                        <ShoppingCartLogo className={styles.catalogLogo} />
                        Кошик
                    </div>
                    <div className={styles.actionItem}>
                        <AuthorizationLogo className={styles.catalogLogo} />
                        Увійти
                    </div>
                </div>
            </header>
        </>  
    );
}