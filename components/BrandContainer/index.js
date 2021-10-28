import styles from "./BrandContainer.module.scss";
export default function index({ brands } = props) {
  return (
    <div className={styles.BrandContainer}>
      {brands.map((brand, key) => {
        return (
          <img className={styles.BrandBox} src={brand.img} alt={brand.name} height={100} width={100} />
        );
      })}
    </div>
  );
}
