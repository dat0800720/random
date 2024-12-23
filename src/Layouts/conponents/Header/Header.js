import classNames from 'classnames/bind';
import { Link } from'react-router-dom';
import { Fragment } from 'react';
import styles from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from'react';
import { SidebarData } from './SidebarData';

const cx = classNames.bind(styles);
function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Fragment>
      <div className={cx('navbar')}>
        <div className={cx('title-website')}>XOXO STUDIO</div>
        <Link to='#' className={cx('menu-bars')}>
          <FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? cx('nav-menu', 'active') : cx('nav-menu')}>
        <ul className={cx('nav-menu-items')} onClick={showSidebar}>
          <li className={cx('navbar-toggle')}>
            <Link to='#' className={cx('nav-bars')}>
              <RiCloseLargeLine onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={cx(`${item.cName}`)}>
                <Link to={item.path} className={cx('nav-bars')}>
                  {item.icon}
                  <span className={cx('nav-links-text')}>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;