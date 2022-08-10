import styled from "styled-components"
import React from "react"
const Container = styled.section`
  display: flex;
  width: 400px;
  justify-content: center;
  background-color: var(--primary-color);
  padding-bottom: 20px;
  padding-top: 20px;
`

export interface CardSectionProps {
  children?: JSX.Element
}

export const CardSection = ({ children }: CardSectionProps) => {
  return <Container>{children}</Container>
}

export default CardSection
