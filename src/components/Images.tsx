import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuid } from 'uuid';

import styles from '../style/image.module.css';
export default function Images(): ReactElement {
  const [image, setimage]: any = useState([]);

  useEffect(() => {
    fetchImages();
  });
  const fetchImages = (count = 5, page = 1) => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'WhzQng2sWq0gfcc6ia7dumUqTJDTwcuWzSRHjPzE1P4';
    axios
      .get(
        `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&page=${page}`
      )
      .then((res) => {
        setimage([...image, ...res.data]);
      });
  };

  return (
    <InfiniteScroll
      dataLength={image.length}
      next={fetchImages}
      hasMore={true}
      loader={<h1 style={{ textAlign: 'center' }}>Load more ....</h1>}
    >
      {image.map((imag: any) => {
        return (
          <div key={uuid()}>
            <img src={imag.urls.regular} className={styles.image} alt="" />
          </div>
        );
      })}
    </InfiniteScroll>
  );
}
