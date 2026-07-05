'use client';

import { useState, useEffect } from 'react';
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
import InstagramRedLogo from '@/assets/logo/InstagramLogo/InstagramRedLogo';
import TikTokLogo from '../../assets/logo/TikTokLogo/TikTokLogo';
import TelegramLogo from '../../assets/logo/TelegramLogo/TelegramLogo';
import ViberLogo from '../../assets/logo/ViberLogo/ViberLogo';
import LinkedInLogo from '../../assets/logo/LinkedInLogo/LinkedInLogo';
import XLogo from '../../assets/logo/XLogo/XLogo';
import PinterestLogo from '../../assets/logo/PinterestLogo/PinterestLogo';
import PhoneLogo from '../../assets/logo/PhoneLogo/PhoneLogo';
import { useFavoritesGoods } from '@/context/FavoritesGoodsContext/FavoritesGoodsContext';
import { useCompareGoods } from '@/context/CompareGoodsContext/CompareGoodsContext';
import FacebookRedLogo from '@/assets/logo/FacebookLogo/FacebookRedLogo';
import TikTokRedLogo from '@/assets/logo/TikTokLogo/TikTokRedLogo';
import TelegramRedLogo from '@/assets/logo/TelegramLogo/TelegramRedLogo';
import ViberRedLogo from '@/assets/logo/ViberLogo/ViberRedLogo';
import LinkedInRedLogo from '@/assets/logo/LinkedInLogo/LinkedInRedLogo';
import XRedLogo from '@/assets/logo/XLogo/XRedLogo';
import PinterestRedLogo from '@/assets/logo/PinterestLogo/PinterestRedLogo';
import MailLogo from '@/assets/logo/MailIcon/MailIcon';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { favoritesGoodsCount } = useFavoritesGoods();
    const { compareGoodsCount } = useCompareGoods();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className={styles.desktopContainer}>
                <div className={styles.salesAndPropositions}>
                    <div className={styles.salesAndPropositionsWrapper}>
                        <a href="email:mugunghwarootandbloomsteam@gmail.com" className={styles.phoneButton}>
                            <MailLogo className={styles.phoneButtonLogo} />
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
                            <span>Каталог</span>
                        </div>
                        <div className={styles.actionItem} style={{ position: 'relative' }}>
                            <SavesLogo className={styles.catalogLogo} /> 
                            {compareGoodsCount > 0 && 
                                <span className={styles.compareBadge}>{compareGoodsCount}</span>
                            }
                            <span>Порівняння</span>
                        </div>
                        <div className={styles.actionItem} style={{ position: 'relative' }}>
                            <FavoritesLogo className={styles.catalogLogo} /> 
                            {favoritesGoodsCount > 0 && 
                                <span className={styles.favoritesBadge}>{favoritesGoodsCount}</span>
                            }
                            <span>Улюблене</span>
                        </div>
                        <div className={styles.actionItem}>
                            <ShoppingCartLogo className={styles.catalogLogo} />
                            <span>Кошик</span>
                        </div>
                        <div className={styles.actionItem}>
                            <AuthorizationLogo className={styles.catalogLogo} /> 
                            <span>Увійти</span>
                        </div>
                    </div>
                </header>
            </div>
            <div className={styles.mobileContainer}>
                <div 
                    className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`} 
                    onClick={toggleMenu}
                >
                </div>
                <div className={`${styles.mobileSidebar} ${isMenuOpen ? styles.sidebarOpen : ''}`}>
                    <div className={styles.sidebarHeader}>
                        <span className={styles.sidebarTitle}>Меню</span>
                        <button className={styles.closeBtn} onClick={toggleMenu}>&times;</button>
                    </div>
                    <div className={styles.sidebarContent}>
                        <div className={styles.sidebarActions}>
                            <div className={styles.sidebarActionItem}>
                                <CatalogLogo className={styles.catalogLogoMobile} /> 
                                Каталог
                            </div>
                            <div className={styles.sidebarActionItem}>
                                <NewProductsLogo className={styles.catalogLogoMobile} /> 
                                Акції та новинки
                            </div>
                            <div className={styles.sidebarActionItem} style={{ position: 'relative' }}>
                                <SavesLogo className={styles.catalogLogoMobile} /> 
                                Порівняння
                                {compareGoodsCount > 0 &&
                                    <span className={styles.compareBadgeMobile}>{compareGoodsCount}</span>
                                }
                            </div>
                            <div className={`${styles.sidebarActionItem} ${styles.favoritesGoodsActionItem}`} style={{ position: 'relative' }}>
                                <FavoritesLogo className={styles.catalogLogoMobile} /> 
                                Улюблене
                                {favoritesGoodsCount > 0 && 
                                    <span className={styles.favoritesBadgeMobile}>{favoritesGoodsCount}</span>
                                }
                            </div>
                            <div className={`${styles.sidebarActionItem} ${styles.authorizeToSystemActionItem}`}>
                                <AuthorizationLogo className={styles.catalogLogoMobile} /> 
                                Увійти
                            </div>
                        </div>
                        <div className={styles.sidebarDivider}></div>
                        <div className={styles.sidebarSocials}>
                            <InstagramRedLogo className={`${styles.socialIconLogo} ${styles.instagramLogo}`} />
                            <FacebookRedLogo className={`${styles.socialIconLogo} ${styles.facebookLogo}`} />
                            <TikTokRedLogo className={`${styles.socialIconLogo} ${styles.tikTokLogo}`} />
                            <TelegramRedLogo className={`${styles.socialIconLogo} ${styles.telegramLogo}`} />
                            <ViberRedLogo className={`${styles.socialIconLogo} ${styles.viberLogo}`} />
                            <LinkedInRedLogo className={`${styles.socialIconLogo} ${styles.linkedInLogo}`} />
                            <XRedLogo className={`${styles.socialIconLogo} ${styles.xLogo}`} />
                            <PinterestRedLogo className={`${styles.socialIconLogo} ${styles.pinterestLogo}`} />
                        </div>
                        <div className={styles.sidebarContacts}>
                            <a href="tel:+380678333023" className={styles.phoneButtonMobile}>
                                <PhoneLogo className={styles.phoneButtonLogoMobile} />
                                <span className={styles.phoneButtonTextMobile}>(067)-833-30-23</span>
                            </a>
                        </div> 
                    </div>
                </div>
                <header className={styles.mobileHeader}>
                    <div className={styles.mobileHeaderTop}>
                        <button className={styles.burgerBtn} onClick={toggleMenu}>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </button>
                        <div className={styles.logoMobile}>
                            <Image src={MugunghwaBloomsRootsLogo} className={styles.mugunghwaBloomsRootsLogoMobile} alt="Mugunghwa Blooms Roots Logo" />
                        </div>
                        <div className={styles.mobileCartBtn}>
                            <ShoppingCartLogo className={styles.cartLogoMobile} />
                        </div>
                    </div>
                    <div className={styles.mobileSearchContainer}>
                        <input 
                            type="text" 
                            placeholder="Пошук товарів..."
                            className={styles.mobileSearchInput} 
                        />
                    </div>
                </header>
            </div>
        </>  
    );
}