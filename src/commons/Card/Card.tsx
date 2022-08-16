import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 5px;
`

export interface CardProps {
  title: string
  onClick: (e: any) => void
  priority?: string
}

const CardTitle = styled.div`
  color: var(--font-color);
`

const PriorityContainer = styled.div`
  display: flex;
  justify-content: end;
`

const PriorityLabel = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: end;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 3px;
`

export const Card = ({ title, onClick, priority = "high" }: CardProps) => {
  const priorityBackGroundColor = (priority: string): string => {
    switch (priority) {
      case "high":
        return "red"
      case "medium":
        return "#E8A317"
      default:
        return "green"
    }
  }

  return (
    <Container onClick={onClick}>
      <CardTitle>{title}</CardTitle>
      <PriorityContainer>
        <PriorityLabel backgroundColor={priorityBackGroundColor(priority)}>
          {priority}
        </PriorityLabel>
      </PriorityContainer>
    </Container>
  )
}

export default Card
