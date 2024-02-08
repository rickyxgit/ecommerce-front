import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem; 

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 8 rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto; 
  }
  div:nth-child(1) {
    order: 2;
  }


  @media screen and (min-width: 768px) {
    grid-template-columns: 0.9fr 1.1fr;
    div:nth-child(1) {
      order: 0;
    }

    img {
      max-width: 100%;
    }
  }
 `;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: columns;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;
export default function Featured({product}) {
  const {addProduct} = useContext(CartContext)
 
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title> {product.title} </Title>
              <Desc> {product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={'/product/' + product._id} outline={1} white={1} >
                  {" "}
                  Read more
                </ButtonLink>
                <Button  white={1} onClick={addFeaturedToCart}>
                <CartIcon/>
                  Add to cart{" "}
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg"
              alt=""
            ></img>
          </div>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
