import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaBars } from "react-icons/fa6";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header>
      <FaBars />
    </header>
  );
}

export default Header;