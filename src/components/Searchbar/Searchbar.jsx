import { Header, SearchButton, Form, Input } from "./Searchbar.styled";
import {FcSearch} from 'react-icons/fc'

export const Searchbar = ({ onSubmit }) => {
    return (
        <Header>
            <Form onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.elements.query.value);
          evt.target.reset();
        }}>
                <SearchButton type="submit">
                    <FcSearch/>
                </SearchButton>
  <Input
       type="text"
          name="query"
          placeholder="Search images and photos"
          required
    />
            </Form>
     </Header>
)
}