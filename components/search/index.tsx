import { FunctionComponent, useCallback } from 'react';
import { Container, IconWrapper, InputText } from './searchStyled';
import SearchIcon from '@mui/icons-material/Search';

export type SearchProps = {
  onChange(searchText: string): void;
  value: string;
};

const Search: FunctionComponent<SearchProps> = ({ value, onChange }) => {
  return (
    <Container>
      <IconWrapper>
        <SearchIcon  htmlColor="rgba(0, 0, 0, 0.25)"/>
      </IconWrapper>
      <InputText
        onChange={(event) => {
          const value = event.target.value;

          onChange(value);
        }}
        value={value}
      />
    </Container>
  );
};

export default Search;
