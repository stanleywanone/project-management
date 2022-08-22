import styled from "styled-components"
import React, { Dispatch, SetStateAction } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: var(--primary-color);
  padding: 10px;
  margin: 0px 5px;
  border-radius: 5px;
`

const CardSectionName = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: var(--font-color);
  font-weight: bold;
`

const AddCard = styled.div`
  display: flex;
  color: var(--font-color);
  margin-top: 10px;
  cursor: pointer;
`

const CardContainerSectionContainer = styled.div`
  max-height: 550px;
  min-height: 0px;
  border-radius: 5px;
  overflow: scroll;
`

export interface CardContainerSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[]
}

export const CardContainerSection = ({
  children,
  ...props
}: CardContainerSectionProps) => {
  return (
    <CardContainerSectionContainer {...props}>
      {children}
    </CardContainerSectionContainer>
  )
}

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[]
  name?: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CardSection = ({
  children,
  name,
  setIsOpen,
  ...props
}: CardSectionProps) => {
  return (
    <Container {...props}>
      <CardSectionName>{name}</CardSectionName>
      <CardContainerSection>{children}</CardContainerSection>
      <AddCard onClick={() => setIsOpen(true)}>+ Add new card</AddCard>
    </Container>
  )
}

export default CardSection
