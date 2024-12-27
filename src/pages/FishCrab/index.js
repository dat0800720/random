import styles from './FishCrab.module.scss'
import classNames from 'classnames/bind';
import Image from "~/components/Image"
import images from '~/assets/images';
import { useRef, useState } from 'react';
import { Switch } from 'antd';

const cx = classNames.bind(styles);

function FishCrab() {
  const diceFirstRef = useRef();
  const diceSecondRef = useRef();
  const diceThreeRef = useRef();
  const bowlRef = useRef();
  const [isOn, setIsOn] = useState(true);

  const rollDice = (diceRef, random) => {
    diceRef.classList.add(styles.rolling);
    setTimeout(() => {
      switch (random) {
        case 1: 
          diceRef.style.transform = 'rotateX(0deg) rotateY(0deg)'
          break
        case 2:
          diceRef.style.transform = 'rotateX(-90deg) rotateY(0deg)'
          break
        case 3:
          diceRef.style.transform = 'rotateX(0deg) rotateY(90deg)'
          break
        case 4:
          diceRef.style.transform = 'rotateX(0deg) rotateY(-90deg)'
          break
        case 5:
          diceRef.style.transform = 'rotateX(90deg) rotateY(0deg)'
          break
        case 6:
          diceRef.style.transform = 'rotateX(180deg) rotateY(0deg)'
          break
        default: break;
      }
      diceRef.classList.remove(styles.rolling);
      if (isOn) {
        bowlRef.current.style.display = 'block';
        bowlRef.current.classList.remove(styles.openBowl)
      }

    }, 4050);
  }

  const handleShow = () => {
    if (isOn) {
      bowlRef.current.classList.add(styles.openBowl)
    }
  }

  const handleSubmit = () => {
    if (isOn) {
      bowlRef.current.style.display = 'none';
    }
    const randomFirst = Math.floor(Math.random() * 7);
    const randomSecond = Math.floor(Math.random() * 7);
    const randomThree = Math.floor(Math.random() * 7);

    if (randomFirst >= 1 && randomFirst <= 6) {
      rollDice(diceFirstRef.current,randomFirst);
      rollDice(diceSecondRef.current, randomSecond);
      rollDice(diceThreeRef.current, randomThree);
    } else {
      handleSubmit();
    }
  }

  const handleToggle = (checked) => {
    setIsOn(checked);
    bowlRef.current.style.display = 'none';
  };

  return (
    <div className={cx("wp")}>
      <div className={cx("body")}>
        <Image className={cx('img-main')} src={images.cuaca} alt="cuaca" />
        <div className={cx("show-bowl")}>
          <Switch checked={isOn} onChange={handleToggle} />
          <div className={cx("show-bowl-text")}>{isOn ? 'Úp: ON' : 'Úp: OFF'}</div>
        </div>
        <div className={cx("container")}>
          <div ref={bowlRef} className={cx("bowl")} onClick={handleShow}>
            <div class={cx("bowl-border")}></div>
          </div>
          <div className={cx("circle")}>
          </div>
          <div className={cx("dice-container-1")}>
            <div ref={diceFirstRef} className={cx("dice-1")}>
              <div className={cx("face", "front")}>
                <Image className={cx('avatar')} src={images.bau} alt="Bầu" />
              </div>
              <div className={cx("face", "back")}>
                <Image className={cx('avatar')} src={images.ga} alt="gà" />
              </div>
              <div className={cx("face", "top")}>
                <Image className={cx('avatar')} src={images.huou} alt="Hươu" />
              </div>
              <div className={cx("face", "bottom")}>
                <Image className={cx('avatar')} src={images.tom} alt="Tôm" />
              </div>
              <div className={cx("face", "right")}>
                <Image className={cx('avatar')} src={images.cua} alt="Cua" />
              </div>
              <div className={cx("face", "left")}>
                <Image className={cx('avatar')} src={images.ca} alt="Cá" />
              </div>
            </div>
          </div>
          <div className={cx("dice-container-2")}>
            <div ref={diceSecondRef} className={cx("dice-2")}>
              <div className={cx("face", "front")}>
                <Image className={cx('avatar')} src={images.bau} alt="Bầu" />
              </div>
              <div className={cx("face", "back")}>
                <Image className={cx('avatar')} src={images.ga} alt="gà" />
              </div>
              <div className={cx("face", "top")}>
                <Image className={cx('avatar')} src={images.huou} alt="Hươu" />
              </div>
              <div className={cx("face", "bottom")}>
                <Image className={cx('avatar')} src={images.tom} alt="Tôm" />
              </div>
              <div className={cx("face", "right")}>
                <Image className={cx('avatar')} src={images.cua} alt="Cua" />
              </div>
              <div className={cx("face", "left")}>
                <Image className={cx('avatar')} src={images.ca} alt="Cá" />
              </div>
            </div>
          </div>
          <div className={cx("dice-container-3")}>
            <div ref={diceThreeRef} className={cx("dice-3")}>
              <div className={cx("face", "front")}>
                <Image className={cx('avatar')} src={images.bau} alt="Bầu" />
              </div>
              <div className={cx("face", "back")}>
                <Image className={cx('avatar')} src={images.ga} alt="gà" />
              </div>
              <div className={cx("face", "top")}>
                <Image className={cx('avatar')} src={images.huou} alt="Hươu" />
              </div>
              <div className={cx("face", "bottom")}>
                <Image className={cx('avatar')} src={images.tom} alt="Tôm" />
              </div>
              <div className={cx("face", "right")}>
                <Image className={cx('avatar')} src={images.cua} alt="Cua" />
              </div>
              <div className={cx("face", "left")}>
                <Image className={cx('avatar')} src={images.ca} alt="Cá" />
              </div>
            </div>
          </div>
        </div>
        <button className={cx("start-game")} onClick={handleSubmit}>Xóc bài</button>
      </div>
    </div>
  );
}

export default FishCrab;