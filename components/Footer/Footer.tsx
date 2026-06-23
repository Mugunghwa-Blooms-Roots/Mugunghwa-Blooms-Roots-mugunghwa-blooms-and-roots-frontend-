import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import MugunghwaBloomsRootsLogo from '../../assets/logo/MugunghwaBloomsRootsLogo/transparent/MugunghwaBloomsRootsTransparentLogo.png';
import PhoneIcon from '@/assets/logo/PhoneIcon/PhoneIcon';
import MailIcon from '@/assets/logo/MailIcon/MailIcon';
import LocationIcon from '@/assets/logo/LocationIcon/LocationIcon';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.brandSection}>
                        <Image src={MugunghwaBloomsRootsLogo} className={styles.footerMugunghwaBloomsRootsLogo} alt="Mugunghwa Blooms Roots Logo" />
                        <p className={styles.footerDescription}>
                            Mugunghwa Blooms & Roots - онлайн-магазин товарів з Південної Кореї та не тільки
                        </p>
                    </div>
                    <div className={styles.footerLinksSection}>
                        <h3 className={styles.footerColumnTitle}>
                            Користувачам
                        </h3>
                        <ul className={styles.footerLinksList}>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Каталог продукції
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Доставка та оплата
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Повернення товару
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Питання та відповіді
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerLinksSection}>
                        <h3 className={styles.footerColumnTitle}>
                            Про нашу команду
                        </h3>
                        <ul className={styles.footerLinksList}>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Про Mugunghwa Blooms & Roots
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Наші контакти
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Стати продавцем
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.footerLink} href="#">
                                    Політика конфеденційності 
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerContactSection}>
                        <h3 className={styles.footerColumnTitle}>
                            Наші контакти
                        </h3>
                        <ul className={styles.footerLinksList}>
                            <p className={styles.footerContactInfo}>
                                <PhoneIcon className={styles.footerContactInfoIcon} /> 
                                + 38 (067) 83-33-023
                            </p>
                            <p className={styles.footerContactInfo}>
                                <MailIcon className={styles.footerContactInfoIcon} /> 
                                mugunghwabloomsandrootsteam@gmail.com
                            </p>
                            <p className={styles.footerContactInfo}>
                                <LocationIcon className={styles.footerContactInfoIcon} /> 
                                Працюємо по усім території України та Південної Кореї
                            </p>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottomBar}>
                    <p className={styles.footerBottomBarCopyrights}>
                        &copy;2026 Mugunghwa Blooms & Roots. Всі права захищені.     
                    </p>
                </div>
            </footer>
        </>
    );
}