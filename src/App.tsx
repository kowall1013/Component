import GlobalStyles from './GlobalStyles';
import { COLORS } from './constants';
import styled from 'styled-components';
import Cards from './components/Cards';

const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Cards />
    </Wrapper>
  );
}

export default App;
