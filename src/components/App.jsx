import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { GlobalStyles } from "GlobalStyles";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchImages } from "../api.js";
import { Loader } from "./Loader/Loader";
import { Wrapper } from "./App.styled";
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    if (query === '') {
         return
    }
    
   async function getFetchedImages() {
     try {
       setLoading(true);
       const searchQuery = query.slice(query.indexOf('/') + 1);
  
        const images = await fetchImages(searchQuery, page);
         const { hits, total } = images;
       
        if (!hits.length) {
         toast.error('Sorry, no pictures were found for your search')
       }
       
       setImages(prevState => page > 1 ? [...prevState, ...hits] : hits);
       setTotalPages(Math.ceil(total / 12))
     } catch (error) {
       console.log(error)
     } finally {
       setLoading(false)
     }
  }

  getFetchedImages();
}, [page, query])

  
  
  const handleChangeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
    setTotalPages(1);
  }

  const handleLoadMore = () => {
   setPage(prevState => prevState + 1)
  }

  return (
    <Wrapper>
      <Searchbar onSubmit={handleChangeQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages && <Button onLoadMore={handleLoadMore} />}
      {loading && <Loader/>}

      <GlobalStyles />
      <ToastContainer/>
    </Wrapper>)
}