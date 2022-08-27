import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import {Splide , SplideSlide} from '@splidejs/react-splide'
import {Wrapper, Card, Gradient } from  '../components/styledFile';
import { Link } from "react-router-dom";
function Popular() {

    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async()=>{
        const check = localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const dataP =  await api.json();
            localStorage.setItem('popular', JSON.stringify(dataP.recipes))
            setPopular(dataP.recipes)
        }
        
    }
  return (
    <div>
                <Wrapper>
                    <h3>Popular Picks</h3>
                    <Splide  options={{
                        perPage: 4,
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap:'2rem',
                        }}>
                    {
                    popular.map((recipe)=>{
                            return(
                                <SplideSlide key={recipe.id}>
                                    <Link to={'/recipe/'+recipe.id}>
                                      <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}  />
                                        <Gradient/>
                                      
                                      </Card>
                                    </Link>
                                </SplideSlide>
                                
                            )
                        })
                    }
                    </Splide>

                </Wrapper>
    </div>
  )
}
export default Popular