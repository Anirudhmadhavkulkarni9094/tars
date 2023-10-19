import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

function HomePage({ query, mode }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      // If query is empty, fetch photos from the default URL
      axios.get("https://api.unsplash.com/photos?page=1&client_id=ltSwtZZ9j991rdtVkwvrxyhn6hcHPv4qWDOexmGacRQ")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    } else {
      // Clear any previous data when the query changes
      setData([]);
      setLoading(true);

      
      const delay = 2000; 

      const timer = setTimeout(() => {
        axios
          .get(`https://api.unsplash.com/search/photos?pages=5&query=${query}&client_id=ltSwtZZ9j991rdtVkwvrxyhn6hcHPv4qWDOexmGacRQ`)
          .then((res) => {
            setData(res.data.results);
            setLoading(false);
          })
          .catch((error) => {
            console.error('API request error:', error);
            setLoading(false);
          });
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [query]);

  return (
    <div className={`m-auto p-5 ${mode ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
      {loading ? (
        <img className="loading fixed -z-10" src={require('./Assets/Images/loading.gif')} alt="Loading" />
      ) : data.length === 0 ? (
        <h1 className='text-center'>No image found with name "{query.toUpperCase()}"</h1>
      ) : (
        <div className='items-center m-auto flex flex-wrap gap-10 relative justify-center'>
          {data.map(item=>{
            return <ImageCard data={item} mode = {mode}></ImageCard>
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
