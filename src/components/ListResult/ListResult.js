import React, { useEffect, useState } from 'react';
import { List, Skeleton } from 'antd';
import styles from './ListResult.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const count = 3;
function ListResult({ children = [], setLabel, data, setRandom }) {
  const handleRemoveRandom = (item) => {
    setLabel(children.filter(i => (i !== item)))
    setRandom(data.slice(1));
  }

  return (
    <List
      className={cx("demo-loadmore-list")}
      loading={false}
      itemLayout="horizontal"
      loadMore={false}
      dataSource={children}
      renderItem={(item) => (
        <List.Item
          actions={[<a onClick={() => handleRemoveRandom(item)}>x</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta className={cx('line-item')}
              title={<p className={cx('text-list')}>{item}</p>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

export default ListResult;