import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    };
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='serach for you recipe' value={input} />
        </div>
        
    </FormStyle>
  )
}
const FormStyle = styled.form`
  
  div{
    position:relative;
    width:80%;
    margin:0 auto;
  }
  input{
    border:none;
    color:white;
    padding:1rem 3rem;
    font-size:1.5rem;
    border-radius:1rem;
    outline:none;
    calc(50% - 11rem);
    width:100%;
    background:linear-gradient(35deg, #494949, #313131)
  }
  svg{
    position:absolute;
    top:50%;
    left:0%;
    color:white;
    transform:translate(100%, -50%);
  }

`;
export default Search