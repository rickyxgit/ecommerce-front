import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div``;

const Box = styled.div`
  background-color: red;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight:bold;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <Box>
        <img src={images[0]} alt="" />
      </Box>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          
            <Button primary>
              <CartIcon />
              Add to cart
            </Button>
         
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
