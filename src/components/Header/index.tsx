import Image from "next/image";
import clsx from "classnames";

import styles from "./style.module.scss";
import { useScroll } from "../../hooks/useScroll";

export const Header = () => {
  const scroll = useScroll();

  const headerStyle = clsx({
    [styles.header]: true,
    [styles.header__scrolled]: scroll,
  });

  return (
    <header className={headerStyle}>
      <div className={styles.header__logo}>
        <Image src="/netflix-logo.png" alt="Netflix" layout="fill" objectFit="fill" priority />
      </div>

      <div className={styles.header__avatar}>
        <Image src="/netflix-avatar.png" alt="Netflix" layout="fill" objectFit="fill" />
      </div>
    </header>
  );
};
