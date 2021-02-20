import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";
const CartContainer = styled.div`
  /* height: 100%;
  width: 100%; */
  padding: 30px;
`;
const CartHeader = styled.h2``;
const CartHeaderDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const CartListsDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const TotalDiv = styled.div`
height: 100%;
width: 100%;
float: left;
font-weight: bold;
`
const TotalName = styled.div`
width: 75%;
float: left;
text-align: center;
`
const TotalCount = styled.div`
width: 25%;
float: left;
text-align: right;
`
const CartListItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalDivConntainer = styled.div``;
const CartListItemImage = styled.img`
  width: 100px;
  height: 100px;
`;

const CartListItemName = styled.p``;

const CartListItemPrice = styled.p`
text-align: right;
`;

interface propsFromState {
  cartItems: Cart;
}

type AllProps = propsFromState;

const CartComponent: React.FC<AllProps> = ({ cartItems }) => {
  console.log("cartItems", cartItems);
  let total;
  console.log(cartItems.items.length);
  if(cartItems.items.length > 0)
  {
    let sum = 0;
    cartItems.items.forEach((e, i)=>{
      sum += parseInt(e.price);
    });
    
    
    total = <TotalDiv><TotalName>Total:</TotalName><TotalCount>{sum}</TotalCount></TotalDiv>;
  }
  return (
    <CartContainer>
      <CartHeaderDiv>
        <CartHeader>Your Cart</CartHeader>
      </CartHeaderDiv>
      <CartListsDiv>
        {cartItems.items.map(item => {
          return (
            <CartListItemDiv>
              <CartListItemImage src={item.image} />
              <CartListItemName>{item.name}</CartListItemName>
              <CartListItemPrice>{item.price}</CartListItemPrice>
            </CartListItemDiv>
          );
        })}
      </CartListsDiv>
      <TotalDivConntainer>
       {total}
      </TotalDivConntainer>
    </CartContainer>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(CartComponent);
