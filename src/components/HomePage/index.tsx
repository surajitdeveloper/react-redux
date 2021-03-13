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




// const HomePage = () => 
class HomePage extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    let state = JSON.parse(JSON.stringify(this.state)); 
    if(state.products.length == 0)
    {
      fetchData()
      .then(e=>{
        console.log("fetchdata then", e);
        let produt = JSON.parse(JSON.stringify(e));
        console.log("produt --- ",produt);
        this.setState({products: produt})
      })
    }
  }
  render()
  {
    let render = "Please Wait !!! Products is loading";
    let state = JSON.parse(JSON.stringify(this.state));
    
    if(state.products.length > 0)
    {
      render = state.products.map(item => {return <ProductItem item={item} />;})
    }
    return (
      <Container>
        <ProductListItems>
          {render}
        </ProductListItems>
      </Container>
    );
  }
  
};



export default connect()(HomePage);
