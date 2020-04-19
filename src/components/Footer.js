import React from 'react';
import styles from '../css/footer.module.css';
import links from '../components/constants/links';
import socialIcons from '../components/constants/social-icons';
import { Link } from 'gatsby';
import { FaRProject } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a key={index} href={item.uel} target="_blank" rel="noopener noreferrer">
              {item.icons}
            </a>
          );
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all right reserver
      </div>
    </footer>
  );
};

export default Footer;
