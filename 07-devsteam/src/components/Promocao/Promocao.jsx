import styles from "./Promocao.module.css";

const Promocao = () => {
  return (
    <div id={styles.card}>
      <div id={styles.top_banner}>
        <img
          className={styles.image}
          src="https://placehold.co/250x300"
          alt="Imagem de jogo em promoção"
        />
      </div>
      <div id={styles.bottom_info}>
        <div className={styles.offer}>
          <h1>OFERTA EXCLUSIVA</h1>
        </div>
        <div className={styles.discount}>
          <div className={styles.discountPercentage}>
            <h1>-50%</h1>
          </div>
          <div className={styles.discountPrice}>
            <h3>R$199,80</h3>
            <h1></h1>
          </div>
        </div>
        <div className={styles.addCart}></div>
      </div>
    </div>
  );
};

export default Promocao;
