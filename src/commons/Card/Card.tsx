import styled from "styled-components"

const Container = styled.div`
  height: 100px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  margin-bottom: 10px;
`

export interface CardProps {
  title: string
  onClick: (e: any) => void
}

const CardTitle = styled.div`
  color: var(--font-color);
  margin-left: 10px;
  margin-top: 10px;
`

export const Card = ({ title, onClick }: CardProps) => {
  return (
    <Container onClick={onClick}>
      <CardTitle>{title}</CardTitle>
    </Container>
  )
}

export default Card
