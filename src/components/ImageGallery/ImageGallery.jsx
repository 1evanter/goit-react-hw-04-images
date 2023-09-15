import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { GalleryList } from "./ImageGallery.styled"
import { Item } from "components/ImageGalleryItem/ImageGalleryItem.styled"

export const ImageGallery = ({images}) => {
    return (
        <GalleryList>
           {images.map(image => (
                <Item key={image.id}>
                    <ImageGalleryItem image={image} />
                </Item>
            ))}   
        </GalleryList>
    )
}