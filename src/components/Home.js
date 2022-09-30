import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Section from './Section'
function Home() {
  return (
    <Container>
       <Section 
            title= "Model S"
            description= "Order online for touchless delivery"
            leftButtonText = "Custom Order"
            rightButtonText = " Existing Inventory"
            backgroundImg = "model-s.jpg"

      /> 
      <Section 
            title= "Model 3"
            description= "Order online for touchless delivery"
            leftButtonText = "Custom Order"
            rightButtonText = " Existing Inventory"
            backgroundImg = "model-3.jpg"
      />
      <Section 
            title= "Model X"
            description= "Order online for touchless delivery"
            leftButtonText = "Custom Order"
            rightButtonText = " Existing Inventory"
            backgroundImg = "model-x.jpg"

        />
        <Section 
            title= "Model Y"
            description= "Order online for touchless delivery"
            leftButtonText = "Custom Order"
            rightButtonText = " Existing Inventory"
            backgroundImg = "model-Y.jpg"
      />
      <Section 
            title= "Solar Roof"
            description= "Produce Clean Energy From Your Roof"
            leftButtonText = "Order Now"
            rightButtonText = "Learn More"
            backgroundImg = "solar-roof.jpg"
      />
      <Section 
            title= "Solar Panels"
            description= "Lowest Cost Solar Panels in America"
            leftButtonText = "Order Now"
            rightButtonText = "Learn More"
            backgroundImg = "solar-panel.jpg"
      />
      
      <Section 
            title= "Accessories"
            description= ""
            leftButtonText = "Shop Now"
            rightButtonText = ""
            backgroundImg = "accessories.jpg"

      /> 

      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
        height:100vh
`