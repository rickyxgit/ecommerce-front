import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";


const Title = styled.h1`
    font-size: 1.5em;
`


export default function  ProductsPage() {
    return (
        <>
            <Header />
            <Center>

                <Title></Title>
        
            <h1>All products</h1>
            </Center>
        </>
    );
}