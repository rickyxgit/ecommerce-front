import Header from "@/components/Header";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
`
export default function CartPage() {
    return (
        <>
            <Header />
        </>
    );
}