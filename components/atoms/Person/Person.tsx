import Image from "next/image";
import React from "react";

import styles from "./Person.module.css";

export type PersonProps = {
  name: string;
  role: string;
  pic: string;
  // favouriteIceCream: string; // TODO: Add favouriteIceCream
};

const Person = ({ name, role, pic }: PersonProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.image_container}>
        <Image src={pic} alt={name} height={50} />
      </div>
      <div className={styles.content}>
        {name} - <i>{role}</i>
      </div>
    </section>
  );
};

export { Person };
