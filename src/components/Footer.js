import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (
    <Container>
        <a href='#'>Tesla &copy; 2022 </a>
        <a href ='#'>Privacy & Legal</a>
        <a href ='#'>Vehicle Recalls</a>
        <a href ='#'>Contact</a>
        <a href ='#'>Careers</a>
        <a href ='#'>News</a>   
        <a href ='#'>Engage</a>
        <a href ='#'>Locations</a>



    </Container>
  )
}

export default Footer


const Container = styled.div`
        min-height: 60px;
        a{
            padding: 8px;
            font-size: 13px;
            opacity:0.7;
            font-weight: 500;

        }
`