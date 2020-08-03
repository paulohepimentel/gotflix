import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';

// import data from '../../database/db.json';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [data, setData] = useState([]);
  const highVideo = 'https://youtu.be/TZE9gVF1QbA';

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setData(categoriesWithVideos);
      });
  }, []);

  return (
    <PageDefault to="/add/video" textButton="Add Video">
      {data.length === 0 && (
        <Loading />
      )}

      {data.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={data[3].videos[0].title}
                url={highVideo}
                description="Based on the best-selling book series 'A Song of Ice and Fire' by George R.R. Martin, this sprawling HBO drama is set in a world where summers span several decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne."
              />

              <Carousel
                category={data[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
