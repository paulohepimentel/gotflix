import React from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import data from '../../database/db.json';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
        videoDescription="Game of Thrones is based roughly on the storylines of A Song of Ice and Fire by George R. R. Martin, set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series utilizes several simultaneous plot lines."
      />

      <Carousel
        category={data.categories[1]}
      />

      <Carousel
        category={data.categories[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={data.categories[0]}
      />

      <Carousel
        category={data.categories[3]}
      />

      <Carousel
        category={data.categories[4]}
      />

    </PageDefault>
  );
}

export default Home;
