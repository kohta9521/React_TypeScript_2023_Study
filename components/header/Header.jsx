import React, { useState } from 'react'
import styles from "./Header.module.css";
import Link from "next/link"


const Header = () => {
  const [ openMenu, setOpenMenu ] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <header id='header' className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
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

      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/">
              <p>Home</p>
              <p>ホーム</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>About</p>
              <p>私について</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Service</p>
              <p>サービスについて</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Price</p>
              <p>料金形態</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Member</p>
              <p>メンバーについて</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Contact</p>
              <p>連絡をとる</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
