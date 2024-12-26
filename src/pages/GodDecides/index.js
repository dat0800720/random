import { useState, useRef, useEffect } from 'react';
import styles from './GodDecides.module.scss';
import classNames from 'classnames/bind';
import { GodDecideData } from './GodDecideData';

const cx = classNames.bind(styles);

function GodDecides() {
  const [start, setStart] = useState(true);
  const [data, setData] = useState(GodDecideData);
  
  const elementRefs = useRef([]);

  useEffect(() => {
    setData(shuffleArray(GodDecideData))
  },[start]);

  // const handleRandomGod = async () => {
  //   setStart(!start);
  //   elementRefs.current.map((item, index) => {
  //     item.style.animationPlayState = "running";
  //     item.style.opacity = 1;
  //   })

  //   const indexElement = Math.floor(Math.random()*elementRefs.current.length +1) || 5; 


  //   // setIndexArray(Math.floor(Math.random()*elementRefs.current.length +1 ));
    
    
  //     elementRefs.current.some((_, index) => {
  //       if(index === indexElement) {
  //         console.log('====>', index, );
  //         console.log('-time--->',Math.floor(4/13*index*1000));
  //         setTimeout(()=>{
  //           elementRefs.current.map((i,_index)=>{
  //             i.style.animationPlayState = "paused";
  //             if(_index !== indexElement-1) {
  //               i.style.opacity = 0;
  //             }
  //             else {
  //               i.style.cssText = 'left: -7px !important; z-index: 5';
  //             }
  //           })
  //         },(Math.floor(4/13*index*1000) + 4000))
  //       };
  //     })
  // }

  const handleRandomGod = () => {
    if (start) {
      elementRefs.current.map((item) => {
        item.style.animationPlayState = "running";
      })
      setTimeout(()=>{
        elementRefs.current.map((item, index)=>{
          item.style.animationPlayState = "paused";
        });
      }, 4000);
    } else {
      elementRefs.current[8].style.cssText = 'left: -7px!important; z-index: 5';
    }
    setStart(false);    
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Chọn ngẫu nhiên một chỉ số từ 0 đến i
      [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi phần tử
    }
    return array;
  };

  return (
    <div className={cx("wp")}>
      <h1 className={cx("title")}>
        <p>"Không có gì là Ngẫu Nhiên.</p>
        <p>Mọi Chuyện đều là Tất Nhiên."</p>
      </h1>
      <div className={cx("layout-slide")}>
        <div className={cx("slide")} style={{'--count': 20}}>
          <div className={cx("list")}>
            {
              data.slice(0, 20).map((item, index) => (
                <div key={index} ref={(el) => (elementRefs.current[index] = el)} className={cx(item.cName)} style={{'--position': (index+1)}}>
                  <div className={cx("layout-item")}>
                    <h2 className={cx("text-vn")}>{item.content}</h2>
                    <p className={cx("text-en")}>{item.conten_en}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className={cx("name-book")}>
            <div className={cx("text-name-line-one")}>
              <div className={cx("text-name-book")}>Vị thần</div>
              <div className={cx("text-name-book-two")}>của Những</div>
            </div>
            <div className={cx("text-name-book-three")}>Quyết Định</div>
            <div className={cx("note")}>The Book of Answers</div>
            <div className={cx("more")}>UNIVERSE</div>
            <div className={cx("author")}>Đàm Đức Đạt</div>
          </div>
        </div>
      </div>
      <div className={cx("layout-start")}>
        <button className={cx('start-game')} onClick={handleRandomGod}>Bắt đầu</button>
      </div>
    </div>
  );
}

export default GodDecides;