import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { GlobalStyles } from "GlobalStyles";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchImages } from "../api.js";
import { Loader } from "./Loader/Loader";
import { Wrapper } from "./App.styled";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  }

  handleChangeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      totalPages: 1,
  })
  }
  
  async componentDidUpdate(prevProps, prevState) {
   
    const { query, page } = this.state;
   

    if (query !== prevState.query || page !== prevState.page) {
      try {
        this.setState({loading: true})
        const searchQuery = query.slice(query.indexOf('/') + 1);
  
        const images = await fetchImages(searchQuery, page);
         const { hits, total } = images;
       
        if (!hits.length) {
          toast.error('Sorry, no pictures were found for your search') }
         
          this.setState(prevState => ({
            images: page > 1 ? [...prevState.images, ...hits] : hits,
            totalPages: Math.ceil(total / 12),
          }))
      } catch(error) {
         console.log(error)
      } finally {
        this.setState({loading: false})
      }
      
    }
  } 
  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
     }))
  }

  render() {
    const { images, totalPages, page, loading } = this.state;

    return <Wrapper>
      <Searchbar onSubmit={this.handleChangeQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages && <Button onLoadMore={this.handleLoadMore} />}
      {loading && <Loader/>}

      <GlobalStyles />
      <ToastContainer/>
    </Wrapper>
  }
}


