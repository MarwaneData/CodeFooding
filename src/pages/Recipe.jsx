import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


function Recipe() {
    const [recipeinfo, setRecipeInfo] = useState([])
    const [activeTab, setActiveTab] = useState('instructions');
    let params = useParams()
    const getInfo= async () =>{
        const data =await  fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipe =  await data.json();
        setRecipeInfo(recipe)

        
    };
    useEffect(()=>{
        getInfo()    
    },[params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{recipeinfo.title}</h2>
        <img src={recipeinfo.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={ ()=>setActiveTab('instructions') }>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''}  onClick={ ()=>setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipeinfo.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipeinfo.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' &&
          (
            <ul>
              {recipeinfo.extendedIngredients.map((ingredient) =>
              (
                <li key={ingredient.id}> {ingredient.original} </li>
              )
              )}
            </ul>
          )
        }
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin:10rem 0 5rem 0;
  display:flex;
  .active{
    color:white;
    background:linear-gradient(35deg, #494949, #313131);
  }
  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1.2rem;
    line-height:1.2rem;
  }
  ul{
    margin-top:2rem;
  }
`;

const Button = styled.button`
  padding:1rem 2rem;
  color:#313131;
  background:white;
  border:2px solid black;
  margin-right:2rem;
  font-weight:600;
`;
const Info = styled.div`
  margin-left:10rem;
`;

export default Recipe
