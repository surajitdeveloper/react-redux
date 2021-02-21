import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ProductItem from "../ProductItem";
import { fetchData } from "../../store/inventory/action";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const ProductListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;




const HomePage = () => {
  const [products, setProducts] = React.useState([
    {
      name: "Levo Tan Lounge Chair",
      price: "600",
      image: "./images/products/chair6.png",
      description:
        "You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather sofa iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
      brand: "Mahesh",
      currentInventory: 15,
      id: "994d33fb-7ee3-43a6-ae51-1687f9cd7c15"
    }
  ]);
  let render = {};
  if(products.length > 0)
  {
    render = products.map(item => {return <ProductItem item={item} />;})
  }
  useEffect(()=>{
    fetchData().then(e=>{
      console.log("fetchdata then", e);
      let produt = JSON.parse(JSON.stringify(e));
      setProducts(produt);
      console.log("products ---", products);
    })
  },[]);
  
  return (
    <Container>
      <ProductListItems>
        {  render  }
      </ProductListItems>
    </Container>
  );
};



export default connect()(HomePage);
