import { useState } from "react"
import { Image } from "./ImageGalleryItem.styled"
import { ModalWindow } from "components/Modal/Modal"

export const ImageGalleryItem = ({ image: { largeImageURL, webformatURL, tags }}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

return (
            <>
                 <Image onClick={openModal} src={webformatURL} alt={tags} />
                     <ModalWindow isOpen={isModalOpen} closeModal={closeModal} src={largeImageURL} alt={tags} />
            </>      
    )
}