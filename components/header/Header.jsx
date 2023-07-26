import React, { useState } from 'react'
import styles from "./Header.module.css";
import Link from "next/link"


const Header = () => {
  const [ openMenu, setOpenMenu ] = useState(false);
  const menuFunction = () => {
    setOpenMene(!openMenu);
  }
  return (
    <>
      <header id='header' className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo}>
            Kohta
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/">
                About
              </Link>
            </li>
            <li>
              <Link href="/">
                Service
              </Link>
            </li>
            <li>
              <Link href="/">
                Price
              </Link>
            </li>
            <li>
              <Link href="/">
                Member
              </Link>
            </li>
            <li>
              <Link href="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
