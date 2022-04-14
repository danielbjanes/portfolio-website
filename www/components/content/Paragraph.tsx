import styles from "./Content.module.css";

const Pargraph = (props: any) => {
  return (
    <>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          luctus <span className={styles.accent}>imperdiet</span> diam, quis
          sodales felis iaculis at. Suspendisse sed accumsan tellus. Ut
          imperdiet ante ut venenatis aliquam. Ut finibus cursus finibus. Nam
          faucibus venenatis tempus. Curabitur elementum
          <span className={styles.accent}> dignissim</span> leo, a tristique
          lorem. Pellentesque vulputate vitae ligula nec vestibulum.
          Pellentesque tincidunt diam vitae pharetra iaculis. Mauris ac aliquet
          metus. Nulla lectus nisl, lobortis in aliquet eget, vestibulum non
          neque. <span className={styles.accent}>Pellentesque</span> est ante,
          facilisis nec ipsum sit amet, auctor tempus elit. Morbi fermentum
          imperdiet arcu, id facilisis orci fringilla sit amet. Maecenas at
          molestie velit.
        </p>
        <br></br>
        <p>
          Donec molestie quam quis enim rhoncus, ut eleifend enim euismod.
          Quisque aliquet, metus eu mattis cursus, augue diam ultrices augue, ac
          suscipit lacus massa sit amet arcu. Suspendisse et nisi a nisl ornare
          sagittis. Etiam in venenatis justo. Cras lobortis tincidunt nisi, ac
          convallis magna. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nullam nibh nisi, auctor eu
          pellentesque eget, rutrum at sapien. Proin elementum libero at tellus
          consequat, at molestie eros sagittis. Ut ullamcorper nec ex nec
          aliquam. Etiam at mollis eros. Suspendisse vitae justo tempus,
          ultrices quam a, ornare mauris. Nunc fringilla ultrices tortor quis
          vulputate. Sed a est lacinia, congue massa nec, maximus est. Aenean id
          felis eu augue porttitor consequat a ac lorem. Phasellus vel arcu
          nunc.
        </p>
        <br></br>
        <p>
          Quisque sit amet nisl hendrerit, viverra quam posuere, faucibus quam.
          Nullam quis sagittis leo. Donec eleifend id metus tempus ultrices.
          Curabitur mattis urna nec rhoncus iaculis. Proin ultrices sed dui nec
          aliquam. Vestibulum ut enim in sem volutpat porttitor nec vel sapien.
          Etiam commodo a justo at cursus. Suspendisse potenti. Nullam consequat
          gravida ante vel vulputate. Cras a nibh a lectus pharetra ullamcorper
          vel a odio.
        </p>
      </div>

      <div id="heading1" className={styles.SubHeading}>
        About<br></br>
        ---
      </div>

      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent
          luctus <span className={styles.accent}>imperdiet</span> diam, quis
          sodales felis iaculis at.Suspendisse sed accumsan tellus.Ut imperdiet
          ante ut venenatis aliquam.Ut finibus cursus finibus.Nam faucibus
          venenatis tempus.Curabitur elementum
          <span className={styles.accent}> dignissim</span> leo, a tristique
          lorem.Pellentesque vulputate vitae ligula nec vestibulum.Pellentesque
          tincidunt diam vitae pharetra iaculis.Mauris ac aliquet metus.Nulla
          lectus nisl, lobortis in aliquet eget, vestibulum non neque.
          <span className={styles.accent}> Pellentesque</span> est ante,
          facilisis nec ipsum sit amet, auctor tempus elit.Morbi fermentum
          imperdiet arcu, id facilisis orci fringilla sit amet.Maecenas at
          molestie velit.
        </p>
        <br></br>
        <p>
          Donec molestie quam quis enim rhoncus, ut eleifend enim
          euismod.Quisque aliquet, metus eu mattis cursus, augue diam ultrices
          augue, ac suscipit lacus massa sit amet arcu.Suspendisse et nisi a
          nisl ornare sagittis.Etiam in venenatis justo.Cras lobortis tincidunt
          nisi, ac convallis magna.Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.Nullam nibh nisi, auctor eu
          pellentesque eget, rutrum at sapien.Proin elementum libero at tellus
          consequat, at molestie eros sagittis.Ut ullamcorper nec ex nec
          aliquam.Etiam at mollis eros.Suspendisse vitae justo tempus, ultrices
          quam a, ornare mauris.Nunc fringilla ultrices tortor quis
          vulputate.Sed a est lacinia, congue massa nec, maximus est.Aenean id
          felis eu augue porttitor consequat a ac lorem.Phasellus vel arcu nunc.
        </p>
        <br></br>
        <p>
          Fusce sollicitudin diam accumsan, tristique sem sed, consequat
          magna.Aliquam interdum nisl a ex hendrerit, ac imperdiet ante
          bibendum.Suspendisse tempor euismod sapien.Nulla facilisis, mauris
          tristique <span className={styles.accent}>bibendum</span> cursus,
          ipsum nisi vulputate sem, eu ultrices justo nulla et augue.Nullam quis
          libero non magna scelerisque sagittis non sed risus.Maecenas ut leo
          aliquam, commodo elit et, cursus enim.Sed ac odio at dui faucibus
          porta.Sed auctor arcu non nisi tempus, ac consectetur lorem
          mattis.Suspendisse non tincidunt massa, id tempus nisl.Nunc tristique
          lorem nec scelerisque congue.Vestibulum eu accumsan risus.Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.Ut eu laoreet justo.
        </p>
        <br></br>
        <p>
          Quisque sit amet nisl hendrerit, viverra quam posuere, faucibus
          quam.Nullam quis sagittis leo.Donec eleifend id metus tempus
          ultrices.Curabitur mattis urna nec rhoncus iaculis.Proin ultrices sed
          dui nec aliquam.Vestibulum ut enim in sem volutpat porttitor nec vel
          sapien.Etiam commodo a justo at cursus.Suspendisse potenti.Nullam
          consequat gravida ante vel vulputate.Cras a nibh a lectus pharetra
          ullamcorper vel a odio.
        </p>
      </div>

      <div id="heading2" className={styles.SubHeading}>
        Experience<br></br>
        ---
      </div>
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent
          luctus <span className={styles.accent}>imperdiet</span> diam, quis
          sodales felis iaculis at.Suspendisse sed accumsan tellus.Ut imperdiet
          ante ut venenatis aliquam.Ut finibus cursus finibus.Nam faucibus
          venenatis tempus.Curabitur elementum
          <span className={styles.accent}> dignissim </span>
          leo, a tristique lorem.Pellentesque vulputate vitae ligula nec
          vestibulum.Pellentesque tincidunt diam vitae pharetra iaculis.Mauris
          ac aliquet metus.Nulla lectus nisl, lobortis in aliquet eget,
          vestibulum non neque.
          <span className={styles.accent}> Pellentesque</span> est ante,
          facilisis nec ipsum sit amet, auctor tempus elit.Morbi fermentum
          imperdiet arcu, id facilisis orci fringilla sit amet.Maecenas at
          molestie velit.
        </p>
        <br></br>
        <p>
          Cras nec <span className={styles.accent}>elementum</span> felis, ut
          pharetra tellus.Sed porta quam efficitur, imperdiet elit sit amet,
          accumsan urna.Sed elementum
          <span className={styles.accent}> turpis</span> consequat
          tincidunt.Aenean dui, pharetra ut quam vitae, sagittis posuere
          odio.Praesent ornare at lacus vitae convallis.Nam ut felis sed est
          blandit faucibus vitae id turpis.Ut
          <span className={styles.accent}> consequat</span> eget ex sed
          interdum.Quisque ut rutrum enim.Nam sapien in lacus pretium, vitae
          tincidunt odio aliquam.
        </p>
        <br></br>
        <p>
          Donec molestie quam quis enim rhoncus, ut eleifend enim
          euismod.Quisque aliquet, metus eu mattis cursus, augue diam ultrices
          augue, ac suscipit lacus massa sit amet arcu.Suspendisse et nisi a
          nisl ornare sagittis.Etiam in venenatis justo.Cras lobortis tincidunt
          nisi, ac convallis magna.Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.Nullam nibh nisi, auctor eu
          pellentesque eget, rutrum at sapien.Proin elementum libero at tellus
          consequat, at molestie eros sagittis.Ut ullamcorper nec ex nec
          aliquam.Etiam at mollis eros.Suspendisse vitae justo tempus, ultrices
          quam a, ornare mauris.Nunc fringilla ultrices tortor quis
          vulputate.Sed a est lacinia, congue massa nec, maximus est.Aenean id
          felis eu augue porttitor consequat a ac lorem.Phasellus vel arcu nunc.
        </p>
      </div>

      <div id="heading3" className={styles.SubHeading}>
        Projects<br></br>
        ---
      </div>

      <div className={styles.paragraph}>
        <p>
          Fusce sollicitudin diam accumsan, tristique sem sed, consequat
          magna.Aliquam interdum nisl a ex hendrerit, ac imperdiet ante
          bibendum.Suspendisse tempor euismod sapien.Nulla facilisis, mauris
          tristique <span className={styles.accent}>bibendum</span> cursus,
          ipsum nisi vulputate sem, eu ultrices justo nulla et augue.Nullam quis
          libero non magna scelerisque sagittis non sed risus.Maecenas ut leo
          aliquam, commodo elit et, cursus enim.Sed ac odio at dui faucibus
          porta.Sed auctor arcu non nisi tempus, ac consectetur lorem
          mattis.Suspendisse non tincidunt massa, id tempus nisl.Nunc tristique
          lorem nec scelerisque congue.Vestibulum eu accumsan risus.Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.Ut eu laoreet justo.
        </p>
        <br></br>
        <p>
          Quisque sit amet nisl hendrerit, viverra quam posuere, faucibus
          quam.Nullam quis sagittis leo.Donec eleifend id metus tempus
          ultrices.Curabitur mattis urna nec rhoncus iaculis.Proin ultrices sed
          dui nec aliquam.Vestibulum ut enim in sem volutpat porttitor nec vel
          sapien.Etiam commodo a justo at cursus.Suspendisse potenti.Nullam
          consequat gravida ante vel vulputate.Cras a nibh a lectus pharetra
          ullamcorper vel a odio.
        </p>

        <p>---</p>
      </div>
    </>
  );
};

export default Pargraph;
