import styles from './GodDecides.module.scss';
import classNames from 'classnames/bind';
import { GodDecideData } from './GodDecideData';

const cx = classNames.bind(styles);

function GodDecides() {
  return (
    <div className={cx("wp")}>
      <h1 className={cx("title")}>God Decides Page</h1>
      <div className={cx("layout-slide")}>
        <div className={cx("slide")} style={{'--count': GodDecideData.length}}>
          <div className={cx("list")}>
            {
              GodDecideData.map((item, index) => (
                <div key={index} className={cx(item.cName)} style={{'--position': (index+1)}}>
                  <div className={cx("layout-item")}>
                    <h2 className={cx("text-vn")}>{item.content}</h2>
                    <p className={cx("text-en")}>{item.conten_en}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default GodDecides;