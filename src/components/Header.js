import React , {useState} from 'react'
import styled from 'styled-components'
import {selectCars} from '../features/cars/carSlice';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {

  const [burgerStatus ,  setBurgerStatus] = useState(false);
 
  return (
    <Container>
            <img style={{padding: 20, height: 55, width: 170}} src="/images/images/logo.svg" alt="Tesla"></img>

            <MenuCenter>

            <p style={{paddingLeft: 200}}><a href={'#'}>Model S</a></p>
            <p><a href={'#'}>Model 3</a></p>
            <p><a href={'#'}>Model X</a></p>
            <p><a href={'#'}>Model Y</a></p>
            <p><a href={'#'}>Solar Roof</a></p>
            <p><a href={'#'}>Solar Panels </a></p>

            </MenuCenter>

            <RightMenu>
              <a style={{paddingLeft: 130}} href={'#'}>SHOP</a>
              <a href={'#'}>ACCOUNT</a>
             

              <CustomMenu onClick={() => setBurgerStatus(true)}/>
            
            </RightMenu>

            <BurgerNavMenu show = {burgerStatus}>
            <CloseWrapper>
              
               <CustomClose  onClick={() => setBurgerStatus(false)}/>

            </CloseWrapper>
            
               <li><a href =""> Existing Inventory</a> </li>
               <li><a href =""> Trade-In</a> </li>
               <li><a href =""> Test Drive </a> </li>
               <li><a href =""> Insurance </a> </li>
               <li><a href =""> Cybertruck</a> </li>
               <li><a href =""> Roadster</a> </li>
               <li><a href =""> Semi</a> </li>
               <li><a href =""> Charging</a> </li>
               <li><a href =""> Powerwall</a> </li>
               <li><a href =""> Commercial Energy</a> </li>
               <li><a href =""> Utilities</a> </li>
               <li><a href =""> Support</a> </li>
               <li><a href =""> Investor Relations</a> </li>
               <li><a href ="">    <Language /> United States
                  <span>English</span> </a> </li>

            </BurgerNavMenu>

    </Container>
  )
}

export default Header


const Container = styled.div`
        min-height: 60px;
        position:fixed;
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding:0 20px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      
`

const MenuCenter = styled.div`
      display:flex;
      justify-contents: center;
      align-items: center;

      a{
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        padding: 0 15px;
      }

      @media(max-width: 768px){
        display:none
      }
`

const RightMenu = styled.div`
      a{
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        padding: 0 15px;
      }
`


const CustomMenu = styled(MenuIcon)`
      cursor:pointer;
      height:15px !important;
      padding: 0 !important;
`;

const CustomClose = styled(CloseIcon)`
      cursor:pointer;
`
const BurgerNavMenu = styled.div`
    position:fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index:100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
      padding: 10px 2px;

      a{
        font-weight: 600;
        font-size: 13px;
        color: grey;
      }
      span{
        color:grey;
      }
    }
`
const Language = styled(LanguageIcon)``


const CloseWrapper = styled.div`
      display: flex;
      justify-content: flex-end;
`