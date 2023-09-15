import { LoadMore } from "./Button.styled"

export const Button = ({ onLoadMore }) => {
    return (
        <LoadMore onClick={onLoadMore} type="button">
        Load more
        </LoadMore>
    )
   
}