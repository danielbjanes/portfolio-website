
import styles from "../../styles/Content.module.css"

const Pargraph = (props: any) => {
  return (
    <div className={styles.paragraph}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus{" "}
        <span className={styles.accent}>imperdiet</span> diam, quis sodales felis iaculis
        at. Suspendisse sed accumsan tellus. Ut imperdiet ante ut venenatis
        aliquam. Ut finibus cursus finibus. Nam faucibus venenatis tempus.
        Curabitur elementum <span className={styles.accent}>dignissim</span> leo, a
        tristique lorem. Pellentesque vulputate vitae ligula nec vestibulum.
        Pellentesque tincidunt diam vitae pharetra iaculis. Mauris ac aliquet
        metus. Nulla lectus nisl, lobortis in aliquet eget, vestibulum non
        neque. <span className={styles.accent}>Pellentesque</span> est ante, facilisis nec
        ipsum sit amet, auctor tempus elit. Morbi fermentum imperdiet arcu, id
        facilisis orci fringilla sit amet. Maecenas at molestie velit.{" "}
      </p>

      <p>
        Donec molestie quam quis enim rhoncus, ut eleifend enim euismod. Quisque
        aliquet, metus eu mattis cursus, augue diam ultrices augue, ac suscipit
        lacus massa sit amet arcu. Suspendisse et nisi a nisl ornare sagittis.
        Etiam in venenatis justo. Cras lobortis tincidunt nisi, ac convallis
        magna. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nullam nibh nisi, auctor eu pellentesque eget,
        rutrum at sapien. Proin elementum libero at tellus consequat, at
        molestie eros sagittis. Ut ullamcorper nec ex nec aliquam. Etiam at
        mollis eros. Suspendisse vitae justo tempus, ultrices quam a, ornare
        mauris. Nunc fringilla ultrices tortor quis vulputate. Sed a est
        lacinia, congue massa nec, maximus est. Aenean id felis eu augue
        porttitor consequat a ac lorem. Phasellus vel arcu nunc.{" "}
      </p>

      <p>
        Quisque sit amet nisl hendrerit, viverra quam posuere, faucibus quam.
        Nullam quis sagittis leo. Donec eleifend id metus tempus ultrices.
        Curabitur mattis urna nec rhoncus iaculis. Proin ultrices sed dui nec
        aliquam. Vestibulum ut enim in sem volutpat porttitor nec vel sapien.
        Etiam commodo a justo at cursus. Suspendisse potenti. Nullam consequat
        gravida ante vel vulputate. Cras a nibh a lectus pharetra ullamcorper
        vel a odio.{" "}
      </p>
    </div>
  );
};

export default Pargraph;
