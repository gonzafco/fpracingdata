import styles from "./Us.module.scss";
import BrandContainer from "../BrandContainer";

export default function index({ firstText, secondText, id } = props) {
  const brands = [
    {
      name: "BMW",
      img: "/assets/images/brands-logos/bmw.png",
    },
    {
      name: "Ford",
      img: "/assets/images/brands-logos/ford.png",
    },
    {
      name: "Honda",
      img: "/assets/images/brands-logos/honda.png",
    },
    {
      name: "Toyota",
      img: "/assets/images/brands-logos/toyota.png",
    },
    {
      name: "Audi",
      img: "/assets/images/brands-logos/audi.png",
    },
    {
      name: "Jeep",
      img: "/assets/images/brands-logos/jeep.png",
    },
    {
      name: "Hyundai",
      img: "/assets/images/brands-logos/hyundai.png",
    },
    {
      name: "Alfa Romeo",
      img: "/assets/images/brands-logos/alfaromeo.png",
    },
    {
      name: "Nissan",
      img: "/assets/images/brands-logos/nissan.png",
    },
    {
      name: "Chevrolet",
      img: "/assets/images/brands-logos/chevrolet.png",
    },
    {
      name: "Kia",
      img: "/assets/images/brands-logos/kia.png",
    },
    {
      name: "Mercedes Benz",
      img: "/assets/images/brands-logos/mercedez.png",
    },
    {
      name: "Volkswagen",
      img: "/assets/images/brands-logos/vw.png",
    },
    {
      name: "Peugeot",
      img: "/assets/images/brands-logos/peugeot.png",
    },
    {
      name: "Mitsubishi",
      img: "/assets/images/brands-logos/mitsubishi.png",
    },
    {
      name: "Citroen",
      img: "/assets/images/brands-logos/citroen.png",
    },
    {
      name: "Suzuki",
      img: "/assets/images/brands-logos/suzuki.png",
    },
    {
      name: "Fiat",
      img: "/assets/images/brands-logos/fiat.png",
    },
  ].sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <section id={`${id}`} className={styles.Us}>
      <div className={styles.ContainerBox}>
        <p className={styles.TextBox}>{firstText} {secondText}</p>
      </div>
      <BrandContainer brands={brands} />
    </section>
  );
}
