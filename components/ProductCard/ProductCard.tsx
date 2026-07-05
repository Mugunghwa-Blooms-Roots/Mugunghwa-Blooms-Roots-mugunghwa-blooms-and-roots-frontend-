"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import CardButton from "../CardButton/CardButton";
import { useFavoritesGoods } from '@/context/FavoritesGoodsContext/FavoritesGoodsContext';
import MugunghwaBloomsRootsGrayLogo from '../../assets/logo/MugunghwaBloomsRootsLogo/gray/MugunghwaBloomsRootsGrayLogo';
import HeartLogo from '@/assets/logo/HeartLogo/HeartLogo';
import CompareLogo from '@/assets/logo/CompareLogo/CompareLogo';
import { useCompareGoods } from '@/context/CompareGoodsContext/CompareGoodsContext';

interface ProductCardProps {
    img: string;
    alt: string;
    titlePartOne: string;
    titlePartTwo: string;
    titlePartThree: string;
    recommendedFor: string;
    creator: string;
    skinType: string,
    oldPrice: number;
    originalPrice : number;
    rating: number;
    reviewsCount: number;
    badge?: string;
    badgeIcon: string;
    badgeAlt: string;
    imgWidth: number;
    imgHeight: number;
    badgeWidth: number;
    badgeHeight: number;
    volumeFirstOne: string;
    volumeSecondOne: string;
    volumeThirdOne: string;
    producerImgSrc: string;
    producerImgAlt: string;
    producerImgWidth: number | undefined;
    producerImgHeight: number | undefined;
}

export default function ProductCard({
    img, 
    alt,
    titlePartOne,
    titlePartTwo,
    titlePartThree,
    recommendedFor,
    creator,
    skinType,
    oldPrice,
    originalPrice, 
    rating,
    volumeFirstOne,
    volumeSecondOne,
    volumeThirdOne,
    reviewsCount, 
    badge,
    badgeIcon,
    badgeAlt,
    badgeWidth,
    badgeHeight,
    imgWidth,
    imgHeight,
    producerImgSrc,
    producerImgAlt,
    producerImgWidth,
    producerImgHeight,
}: ProductCardProps) {
    const [selectedVolume, setSelectedVolume] = useState<number | null>(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCompared, setIsCompared] = useState(false);
    const { toggleFavoritesGoods } = useFavoritesGoods();
    const { toggleCompareGoods } = useCompareGoods();

    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.actionButtonsWrapper}>
                    <button 
                        className={`${styles.actionBtn} ${isFavorite ? styles.favoriteActive : ''}`}
                        onClick={(e) => { 
                            e.stopPropagation();
                            const newState = !isFavorite;
                            setIsFavorite(newState);
                            toggleFavoritesGoods(newState);
                        }}
                        title={isFavorite ? "Видалити з улюбленого" : "Додати в улюблене"}
                    >
                        <HeartLogo className={styles.heartLogo} />
                    </button>
                    <button 
                        className={`${styles.actionBtn} ${isCompared ? styles.compareActive : ''}`}
                        onClick={(e) => { 
                            e.stopPropagation(); 
                            const newState = !isCompared;
                            setIsCompared(newState); 
                            toggleCompareGoods(newState);
                        }}
                        title={isCompared ? "Прибрати з порівняння" : "Додати до порівняння"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 3 21 8 16 13"></polyline>
                            <line x1="21" y1="8" x2="9" y2="8"></line>
                            <polyline points="8 21 3 16 8 11"></polyline>
                            <line x1="3" y1="16" x2="15" y2="16"></line>
                        </svg>
                    </button>
                </div>
                {
                    badge && (
                        <span className={styles.productBadge}>
                            <Image 
                                src={badgeIcon} 
                                alt={badgeAlt} 
                                width={badgeWidth}  
                                height={badgeHeight}
                                className={styles.productBadgeIcon}
                            />
                            <span className={styles.productBadgeText}>{badge}</span>
                        </span> 
                    )
                }
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.productImg} 
                        src={img} 
                        alt={alt}
                        width={imgWidth}
                        height={imgHeight} 
                    />
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productRating}>
                        <div className={styles.productStarsWrapper}>
                            <span className={styles.productStars}>★</span>
                            <span className={styles.productStars}>★</span>
                            <span className={styles.productStars}>★</span>
                            <span className={styles.productStars}>★</span>
                            <span className={styles.productStars}>★</span>
                        </div>
                        <span className={styles.productAverageRating}>{rating}</span>
                        <span className={styles.productReviewsCount}>({reviewsCount})</span>
                    </div>
                    <p className={`${styles.productTitle} ${styles.productTitleFirstPart}`}>{titlePartOne}</p>
                    <p className={`${styles.productTitle} ${styles.productTitleSecondPart}`}>{titlePartTwo}</p>
                    <p className={`${styles.productTitle} ${styles.productTitleThirdPart}`}>{titlePartThree}</p>
                    <div className={styles.productPriceSection}>
                        <h5 className={styles.productCreator}>
                            <b>Виробник</b>: 
                            <span className={styles.brandInfoWrapper}>
                                <Image 
                                    src={producerImgSrc} 
                                    alt={producerImgAlt} 
                                    width={producerImgWidth} 
                                    height={producerImgHeight} 
                                />
                                <span className={styles.brandName}>{creator}</span>
                            </span>
                        </h5>
                        <h5 className={styles.productRecommendedFor}>
                            <b>Доступність</b>: В наявності
                        </h5>
                        <h5 className={styles.productCreator}>
                            <b>Рекомендовано для</b>: {recommendedFor}
                        </h5>
                        <h5 className={styles.productVolume}>
                            <b>Об'єм</b>:
                            <button 
                                className={`${styles.productVolumeBtn} ${styles.productVolumeBtnFirstOne} ${selectedVolume === 1 ? styles.activeVolume : ''}`}
                                onClick={() => setSelectedVolume(1)}
                            >
                                {volumeFirstOne}
                            </button>
                            <button 
                                className={`${styles.productVolumeBtn} ${styles.productVolumeBtnSecondOne} ${selectedVolume === 2 ? styles.activeVolume : ''}`}
                                onClick={() => setSelectedVolume(2)}
                            >
                                {volumeSecondOne}
                            </button>
                            <button 
                                className={`${styles.productVolumeBtn} ${styles.productVolumeBtnThirdOne} ${selectedVolume === 3 ? styles.activeVolume : ''}`}
                                onClick={() => setSelectedVolume(3)}
                            >
                                {volumeThirdOne}
                            </button>
                        </h5>
                        <h5 className={styles.productSkinType}><b>Тип шкіри</b>: {skinType}</h5>
                        <h5 className={styles.productOriginalPrice}>{originalPrice} (грн.)</h5>
                        {
                            oldPrice > 0 && (
                                <h5 className={styles.oldPrice}>{oldPrice} (грн.)</h5>
                            )
                        }
                        <CardButton className={styles.cardButton} />
                    </div>
                </div>
                <div className={styles.productFooter}>
                    <p className={styles.productFooterText}>Ексклюзивна пропозиція від</p>
                    <MugunghwaBloomsRootsGrayLogo className={styles.mugunghwaBloomsRootsGrayLogo} />
                </div>
            </div>
        </>
    );
}