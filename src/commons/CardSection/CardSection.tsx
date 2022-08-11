import styled from "styled-components"
import React, { Dispatch, SetStateAction } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  background-color: var(--primary-color);
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
`

const CardSectionName = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 20px;
  color: var(--font-color);
  font-weight: bold;
`

const AddCard = styled.div`
  display: flex;
  width: 300px;
  color: var(--font-color);
  cursor: pointer;
`

export interface CardSectionProps {
  children?: JSX.Element | JSX.Element[]
  name?: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CardSection = ({
  children,
  name,
  setIsOpen,
}: CardSectionProps) => {
  return (
    <Container>
      <CardSectionName>{name}</CardSectionName>
      {children}
      <AddCard onClick={() => setIsOpen(true)}>+ Add new card</AddCard>
    </Container>
  )
}

export default CardSection
