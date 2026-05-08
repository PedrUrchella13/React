import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div id={styles.header_main}>
        <div className={styles.nav_container}>
          <div className={styles.logo}>
            <img src="https://placehold.co/72x72" alt="-" />
            <h1>DevSteam</h1>
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Buscar" />
          </div>
          <div className={styles.cart}>
            <img src="https://placehold.co/46x46" alt="-" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
