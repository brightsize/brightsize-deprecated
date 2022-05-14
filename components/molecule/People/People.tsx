import React from "react";
import { Person, PersonProps } from "../../atoms";

import styles from "./People.module.css";

type PeopleProps = {
  people: PersonProps[];
};

const People = ({ people }: PeopleProps) => {
  return (
    <div className={styles.container}>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
};

export { People };
