import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import BannerSlider from '@/components/BannerSlider/BannerSlider';
import Header from '@/components/Header/Header';
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Sidebar from "@/components/Sidebar/Sidebar";
import NewsletterSubscription from "@/components/NewsletterSubscription/NewsletterSubscription";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainLayout}>
        <Sidebar />
        <BannerSlider />        
      </main>
      <ProductGrid />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}