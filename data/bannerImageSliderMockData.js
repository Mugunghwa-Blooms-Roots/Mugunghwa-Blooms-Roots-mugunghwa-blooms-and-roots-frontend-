import styles from '../components/BannerSlider/BannerSlider.module.css';
import BeautyOfJoseonLogo from "../assets/logo/BeautyOfJoseonLogo/BeautyOfJoseonLogo";
import TerrazenLogo from "../assets/logo/TerrazenLogo/TerrazenLogo";
import VTCosmeticsLogo from "../assets/logo/VTCosmeticsLogo/VTCosmeticsLogo";
import DrJartPlusLogo from "../assets/logo/DrJartPlusLogo/DrJartPlusLogo";
import MediCubeLogo from "../assets/logo/MediCubeLogo/MediCubeLogo";
import KwailnaraLogo from "../assets/logo/KwailnaraLogo/KwailnaraLogo";
import FraijourLogo from "../assets/logo/FraijourLogo/FraijourLogo";
import AxisYLogo from "../assets/logo/AxisYLogo/AxisYLogo";
import PetitfeeAndKoelfLogo from "../assets/logo/PetitfeeAndKoelfLogo/PetitfeeAndKoelfLogo";
import CosDeBahaLogo from "../assets/logo/CosDeBahaLogo/CosDeBahaLogo";
import NumbuzinLogo from "../assets/logo/NumbuzinLogo/NumbuzinLogo";
import MediPeelLogo from "../assets/logo/MediPeelLogo/MediPeelLogo";
import Skin1004Logo from "../assets/logo/Skin1004Logo/Skin1004Logo";
import KundalLogo from "../assets/logo/KundalLogo/KundalLogo";
import AnuaLogo from "../assets/logo/AnuaLogo/AnuaLogo";

const bannerImageSliderMockData = [
  { 
    id: 1, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Kwailnara"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Kwailnara" безкоштовно', 
    imgSrc: "https://i.ibb.co/FL2xzws3/Upfoto-XV95-H9-Bs-Uj6-EEHs-RKnlbg-L8e-VEST7yca-Dh-VACWi-Ao-CVv-P.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: KwailnaraLogo,
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 2,
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Anua"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Anua" безкоштовно',
    imgSrc: "https://i.ibb.co/DPMc1Tky/anua-banner.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: AnuaLogo, 
    brandLogoSize: styles.brandLogoSize50,
  },
  { 
    id: 3, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "PETITFEE & KOELF"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "PETITFEE & KOELF" безкоштовно', 
    imgSrc: "https://i.ibb.co/mVppJmN4/Upfoto-7r-TTpxj-BA1-EGd-Jkae-XOq3ez9-Vcbp314m1-S4-Vc-Jidx-Df-Kk-1.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: PetitfeeAndKoelfLogo, 
    brandLogoSize: styles.brandLogoSize150_30
  },
  { 
    id: 4,
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Cos De Baha"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Cos De Baha" безкоштовно', 
    imgSrc: "https://i.ibb.co/Nd7VSN1d/main-0506-01.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: CosDeBahaLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 5, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Beauty of Joseon"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Beauty of Joseon" безкоштовно', 
    imgSrc: "https://i.ibb.co/pmPZ2dh/March-Blog-Features-2023-beauty-of-joseon-976dd2eb-6307-4267-bde8-86ac590c17ea.webp", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: BeautyOfJoseonLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 6, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Medicube"',
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Medicube" безкоштовно', 
    imgSrc: "https://i.ibb.co/Q3bXJxmQ/Upfoto-Wg-Lr-WIVs78rm3-Rgv9yh7-Jckb7-JKbh-Xcfp28-SUeb3q9c-CJ.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: MediCubeLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 7, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "VTCosmetics"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "VTCosmetics" безкоштовно', 
    imgSrc: "https://i.ibb.co/DgSZpwT8/EQsqw-Qge8-My-Nmq-OPns-O9891-LJ1h-AEn-meta-Vl-Qt-Tk-VXLmpw-Zw.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: VTCosmeticsLogo, 
    brandLogoSize: styles.brandLogoSize70 
  },
  { 
    id: 8, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Dr. Jart+"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Dr. Jart+" безкоштовно', 
    imgSrc: "https://i.ibb.co/zWmjyLkn/Upfoto-m4-RAd-X6w-Mm-Ajj-X29-Vxe-M6f-Xwdicj-MPcgtg1-DUlss1iv-Df.jpg",
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: DrJartPlusLogo,
    brandLogoSize: styles.brandLogoSize120 
  },
  { 
    id: 9, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Fraijour"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Fraijour" безкоштовно', 
    imgSrc: "https://i.ibb.co/t6D5kP1/Upfoto-LUUGWM6ze6-MKDWQz-S1-Ip-ILol1ug-Pw-Bxj-Stg-Kdp65w-Jp-SE.jpg",
    contentMargin: styles.contentMarginFirstSlide,
    quality: 100, 
    sizes: "100vw", 
    logoComponent: FraijourLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 10, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Terrazen"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Terrazen" безкоштовно', 
    imgSrc: "https://i.ibb.co/zWvY1f34/BLEMISH-RELAX-BARRIER-CREAM-05.webp", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: TerrazenLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 11, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Axis-Y"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Axis-Y" безкоштовно', 
    imgSrc: "https://i.ibb.co/LD6vzSc9/Upfoto-LDJ8-Zcf-Tz4nl-Tyb-Dmc8qr-OKFrmy-Rz-DAt-R2-EZq-R2-D11mi-L.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: AxisYLogo, 
    brandLogoSize: styles.brandLogoSize135 
  },
  { 
    id: 12, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Numbuzin"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Numbuzin" безкоштовно', 
    imgSrc: "https://i.ibb.co/NdV2kpLS/numbuzin-no-9-nad-bio-lifting-sil-essence-review-1.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100,
    sizes: "100vw", 
    logoComponent: NumbuzinLogo, 
    brandLogoSize: styles.brandLogoSize95
  },
  { 
    id: 13, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Medi-Peel"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Medi-Peel" безкоштовно', 
    imgSrc: "https://i.ibb.co/nsg68FbC/5-MEDI-PEEL.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: MediPeelLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },
  { 
    id: 14, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "SKIN1004"',
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "SKIN1004" безкоштовно', 
    imgSrc: "https://i.ibb.co/8LD0YYTJ/Vignette-HP-Skin-1004-V2.webp",
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw", 
    logoComponent: Skin1004Logo, 
    brandLogoSize: styles.brandLogoSize80
  },
  { 
    id: 15, 
    text: 'В наявності уся лінійка продуктів одного з найкращих корейських брендів косметики "Kundal"', 
    subtext: 'Візьміть участь у розіграші та отримайте набір косметики "Kundal" безкоштовно', 
    imgSrc: "https://i.ibb.co/qFNxwjWy/octobernovember-blogs-2500x1700-1-1.jpg", 
    contentMargin: styles.contentMarginFirstSlide, 
    quality: 100, 
    sizes: "100vw",
    logoComponent: KundalLogo, 
    brandLogoSize: styles.brandLogoSize95 
  },

];

export default bannerImageSliderMockData;