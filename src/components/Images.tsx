import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { v4 as uuid } from 'uuid';
import styles from '../style/image.module.css';
export default function Images(): ReactElement {
  const [images, setimages] = useState([]);

  const [start, setstart] = useState(1);
  let count = 1;
  useEffect(() => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos?client_id=${accessKey}&page=${start}`)
      .then((res) => {
        setimages(res.data);
      });
  });

  const fetchImages = () => {
    setstart(start + count);
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'WhzQng2sWq0gfcc6ia7dumUqTJDTwcuWzSRHjPzE1P4';

    axios
      .get(`${apiRoot}/photos?client_id=${accessKey}&page=${start}`)
      .then((res) => setimages(images.concat(res.data)));
  };
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<h1 style={{ textAlign: 'center' }}>Загрузка....</h1>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Конец загрузки</b>
        </p>
      }
    >
      <div>
        {images.map((imag: any) => {
          return (
            <div key={imag.id}>
              <img src={imag.urls.regular} className={styles.image} alt="" />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
