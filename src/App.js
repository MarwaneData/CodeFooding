import Pages from "./pages/pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import {CgSmileMouthOpen} from 'react-icons/cg'
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>CodeFooding</Logo>
          <CgSmileMouthOpen />
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
      <Footer>
        <div className="copyright">
          <p>Coding By <a href="https://marwanedev.com/">marwanedata.com</a>  </p>
        </div>
      </Footer>

    </div>
  );
}
const Logo = styled(Link)`
   text-decoration:none;
   font-size:1.5rem;
   font-weight:400;
`;
const Nav = styled.div`
   padding:4rem 0rem;
   display:flex;
   justify-content:flex-start;
   align-items:center;
   svg{
    font-size:2rem
   }
`;
const Footer = styled.footer`
  text-align:center;
  padding:20px 0;
  margin:30px 0 0 0;
  background: linear-gradient(to right, #f27121, #e94057);
  p{
    font-size:20px;
    color:white;
  }
`;

export default App;
