import styled from "styled-components"

const Container = styled.div`
  height: 100px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  margin-bottom: 10px;
`

export interface CardProps {
  title: string
}

const CardTitle = styled.div`
  color: var(--font-color);
  margin-left: 10px;
  margin-top: 10px;
`

export const Card = ({ title }: CardProps) => {
  return (
    <Container>
      <CardTitle>{title}</CardTitle>
    </Container>
  )
}

export default Card
