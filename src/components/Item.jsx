import React, { useState } from 'react';
import FoodItem from './FoodItem';
import styled from 'styled-components';


import Thumbnail1 from '../images/pizaa.jpg';
import Thumbnail2 from '../images/Burger.jpg';
import Thumbnail3 from '../images/Sushi.jpg';
import Thumbnail4 from '../images/Tacos.jpg';
import Thumbnail5 from '../images/pasta.jpg';
import Thumbnail6 from '../images/Sushi Burrito.jpg';




const Food_item = [
  {
    id: 1,
    name: "Pizza",
    description: "A classic Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven.",
    Thumbnail:Thumbnail1
    
  },
  {
    id: 2,
    name: "Burger",
    description: "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
    Thumbnail: Thumbnail2

  },
  {
    id: 3,
    name: "Sushi",
    description: "A Japanese dish consisting of small balls or rolls of vinegar-flavored cold cooked rice served with a garnish of raw fish, vegetables, or egg.",
    Thumbnail:Thumbnail3

  },
  {
    id: 4,
    name: "Tacos",
    description: "A traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling, typically made with meat, beans, lettuce, and salsa.",
    Thumbnail:Thumbnail4

  },
  {
    id: 5,
    name: "Pasta",
    description: "An Italian dish typically made with unleavened dough of wheat or buckwheat flour, water, and sometimes eggs, that is formed into various shapes and boiled.",
    Thumbnail:Thumbnail5

  },
  {
    id: 6,
    name: "Sushi Burrito",
    description: "A fusion of sushi and burrito styles, where sushi ingredients are wrapped inside a large seaweed sheet and served in a roll similar to a burrito.",
    Thumbnail:Thumbnail6

  }
]


const Item = () => {
  const [food, setFood] = useState(Food_item)

  return (
    <Container>

      {
        food.map(({id, name, description, Thumbnail}  )=>
           <FoodItem key={id} name={name} description={description} Thumbnail={Thumbnail} />)
      }
      
    </Container>
  )
}

export default Item;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start; /* Align items vertically */
  gap: 2rem; /* Add gap between Card items */
  padding-bottom: 2rem;
`

