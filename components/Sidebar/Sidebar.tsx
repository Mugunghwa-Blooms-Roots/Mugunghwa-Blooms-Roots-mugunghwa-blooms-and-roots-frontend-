import styles from "./Sidebar.module.css";
import Image from "next/image";
import categoriesMockData from "../../data/categoriesMockData";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.categoryList}>
        {
          categoriesMockData.map((category, index) => (
            <li key={index} className={styles.categoryItem}>
              <div className={styles.categoryContent}>
                {
                  category.icon && (
                    <Image 
                      className={styles.categoryListImg} 
                      src={category.icon} 
                      alt={`${category.name} Icon`} 
                      width={category.width} 
                      height={category.height} 
                    />
                  )
                }
                <span className={styles.categoryName}>{category.name}</span>
              </div>
              <span className={styles.arrow}>›</span>
              {
                category.subCategories && category.subCategories.length > 0 && (
                  <ul className={styles.submenu}>
                    {
                      category.subCategories.map((subCategory, subIndex) => (
                        <li key={subIndex} className={styles.submenuItem}>
                          <div className={styles.itemWrapper}>
                            {
                              subCategory.icon && (
                                <Image 
                                  className={styles.categoryListImg} 
                                  src={subCategory.icon} 
                                  alt={`${subCategory.name} Icon`} 
                                  width={subCategory.width} 
                                  height={subCategory.height} 
                                />
                              )
                            }
                            <span className={styles.submenuName}>{subCategory.name}</span>
                            {
                              subCategory.items && subCategory.items.length > 0 && (
                                <span className={styles.subArrow}>›</span>
                              )
                            }
                          </div>
                          {
                            subCategory.items && subCategory.items.length > 0 && (
                              <ul className={styles.subSubmenu}>
                                {
                                  subCategory.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className={styles.subSubmenuItem}>
                                      {
                                        item.icon && (
                                          <Image 
                                            src={item.icon} 
                                            alt={`${item.name} Icon`} 
                                            width={item.width} 
                                            height={item.height} 
                                          />
                                        )
                                      }
                                      {item.name}
                                    </li>
                                  ))
                                }
                              </ul>
                            )
                          }
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>
    </aside>
  );
}