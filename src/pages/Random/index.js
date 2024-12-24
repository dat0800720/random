import { useState, useEffect, useRef } from "react";
import styles from "./Random.module.scss";
import classNames from 'classnames/bind';
import PieChart from "~/components/PieChart";
import ListResult from "~/components/ListResult";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { Input } from 'antd';


const cx = classNames.bind(styles);

function Random() {
  const [nameRandom, setNameRandom] = useState('')
  const [listRandom, setListRandom] = useState([1, 1]);
  const [listLabel, setListLabel] = useState(["dam", "dat"])
  const [finalValue, setFinalValue] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [listRotation, setListRotation] = useState([{minDegree: 1, maxDegree: 180, value: 'dam'}, {minDegree: 181, maxDegree: 360, value: 'dat'}]);
  const elementRef = useRef()

  useEffect(() => {
    const length = listLabel.length
    const degree = 360 / length;
    let maxDegree = null
    setListRotation(listLabel.map((value) => {
      maxDegree += degree
      return { minDegree: (maxDegree - degree + 1), maxDegree: maxDegree, value: value }
    }))
  }, [listLabel])

  const wheelElement = elementRef.current;
  const handleSpinner = () => {
    if (isSpinning) return; // Nếu đang quay, không cho quay tiếp
    setIsSpinning(true);

    const randomDegree = Math.floor(Math.random() * 360); // random góc quay
    const rotation = 360 * 11 - randomDegree;

    // Áp dụng CSS xoay
    wheelElement.style.transition = "transform 5s ease-out";
    wheelElement.style.transform = `rotate(${rotation}deg)`;

    // Đợi animation kết thúc
    setTimeout(() => {
      const actualDegree = randomDegree % 360;
      determineValue(actualDegree);
      setIsSpinning(false); // Bật lại khả năng quay
    }, 5000);
  }

  // Hiển thị giá trị dựa trên góc quay
  const determineValue = (angleValue) => {
    for (let i of listRotation) {
      if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
        setFinalValue(i.value);
        break;
      }
    }
  };

  const handleRemoveValue = () => {
    setListLabel(listLabel.filter(item => (item !== finalValue)))
    setListRandom(listRandom.slice([1]))
    setFinalValue('')
    wheelElement.style.transform = `rotate(0deg)`;
    wheelElement.style.transition = "none";
  }

  const handleCloseAlert = () => {
    setFinalValue('')
    wheelElement.style.transform = `rotate(0deg)`;
    wheelElement.style.transition = "none";
  }

  const handleSubmit = (e) => {
    const name = nameRandom.trim()
    if (name) {
      setListLabel([...listLabel, name])
      setListRandom([...listRandom, 1])
      setNameRandom('')
    }

    e.preventDefault();
  }


  return (
    <div className={cx("body")}>
      <div className={cx("wp")}>
        <div className={cx("container")}>
          {finalValue && 
            <div className={cx("alert-final-value")}>
              <div className={cx("header-alert")}>
                <div className={cx("close-alert")} onClick={handleCloseAlert}>
                <RiCloseLargeLine />
                </div>
              </div>
              <p className={cx("value-alert")}>{finalValue}</p>
              <button className={cx("remove-alert-button") } onClick={handleRemoveValue} >Xóa kết quả </button>
              <button className={cx("close-alert-button")} onClick={handleCloseAlert}>Đóng</button>
          </div>}
          <div className={cx("spinBtn")} onClick={handleSpinner}>Spin</div>
          <div ref={elementRef} className={ cx("wheel")}>
            <PieChart value={listRandom} labels={listLabel}/>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={cx("form-input")}>
        <Input className={cx("input-value")} type="text" value={nameRandom} onChange={(e) => setNameRandom(e.target.value)}/>
        <button className={cx("submit-form")}><IoMdSend /></button>
      </form>
      <div className={cx("list-random")}>
        <ListResult children={listLabel} setLabel={setListLabel} data={listRandom} setRandom={setListRandom}/>
      </div>
    </div>
  );
}

export default Random;
