import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
      <Container className='scroll'>
          <Section
            title="Model S"
            description = "Order online for touchless delivery"
            backgroungimage = "model-s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
          />
          <Section
            title="Model Y"
            description = "Order online for touchless delivery"
            backgroungimage = "model-y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"
          />
          <Section
            title="Model 3"
            description = "Order online for touchless delivery"
            backgroungimage = "model-3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>
          <Section
            title="Model X"
            description = "Order online for touchless delivery"
            backgroungimage = "model-x.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing Inventory"/>
            <Section
            title="Lowest Cost Solar Panels"
            description = "Money-back guarantee"
            backgroungimage = "solar-panel.jpg"
            leftBtnText = "Order now"
            rightBtnText = "Learn More"/>
            <Section
            title="Accessories"
            description = ""
            backgroungimage = "accessories.jpg"
            leftBtnText = "Shop Now"/>
      </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`