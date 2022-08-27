import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiChopsticks />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/French'}>
        <GiNoodles />
        <h4>French</h4>
      </SLink>
    </List>
  )
}

const List =  styled.div`
  display:flex;
  justify-content:center;
  margin:2rem 0rem;
`;

const SLink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  border-radius:50%;
  margin-right:2rem;
  width:5rem;
  height:5rem;
  transform:scale(0.8);
  text-decoration:none;
  background:linear-gradient(35deg, #494949, #313131);
  h4{
    color:white;
    font-size:.8rem
  }
  svg{
    color:white;
    font-size:1.5rem;
  }
  &.active{
    background:linear-gradient(to right, #f27121, #e94057)
  }
`

export default Category
