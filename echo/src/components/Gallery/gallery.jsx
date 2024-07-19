
// export default gallery
import React, { useEffect, useState } from 'react';
import './gallery.css';

function Gallery() {
  const [query, setQuery] = useState('Dog');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);

  const getPhotos = async (type) => {
    let url = `https://api.pexels.com/v1/search?query=${query}`;
    if (data?.next_page && type === 'next') {
      url = data.next_page;
    }
    if (data?.prev_page && type === 'back') {
      url = data.prev_page;
    }
    setLoading(true);
    try {
      console.log("API Key:", import.meta.env.VITE_APP_PEXELS_API_KEY); // Debugging log
      const response = await fetch(url, {
        headers: {
          Authorization: import.meta.env.VITE_APP_PEXELS_API_KEY,
        },
      });

      const result = await response.json();
      setData(result);
      setPhotos(result.photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [query]);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
    }
  };

  return (
    <>
      <h1 className="text-center text-green-800 text-3xl font-bold font-serif hover:text-green-600 p-4">Gallery</h1>
      {/* <div className="h-1 w-52 bg-green-900 ml-[430px]"></div> */}
      <div className="h-auto w-auto bg-white pt-0 px-12 pb-8">
        <input
          className="inputSearch"
          onKeyDown={onKeyDownHandler}
          placeholder="Search Here"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {loading && <h1>Searching...</h1>}
        <div className="container">
          {photos?.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.src.medium} alt={item.id} />
            </div>
          ))}
        </div>
        <div className='text-center ml-8'>
          <button className='h-14 w-20 bg-green-700 text-white border-gray-950 border-2 outline outline-offset-1 rounded-lg hover:bg-green-600' onClick={() => getPhotos('back')}>Prev</button>
          <button className='h-14 w-20 bg-green-700 text-white border-gray-950 border-2 outline outline-offset-1 rounded-lg ml-2 hover:bg-green-600' onClick={() => getPhotos('next')}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Gallery;
