import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    @media only screen and (min-width: 768px) {
        width: 40%;
    
        
    }
`

export const Row = styled.div`
width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 768px) {
        width: 100%;
    
        
    }
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

