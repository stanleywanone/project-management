import { useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 5px;
`;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onClick: (e: any) => void;
  priority?: string;
  type?: string;
  isDragging: boolean;
}

const CardTitle = styled.div`
  color: var(--font-color);
`;

const PriorityContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const PriorityLabel = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: end;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 3px;
`;

const CardType = styled.div<{ type: string }>`
  background-color: ${(props) => props.type};
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  padding: 0px 5px;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardOwner = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  padding: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = ({
  title,
  onClick,
  priority = "high",
  type = "fix",
  isDragging,
  ...props
}: CardProps) => {
  const priorityBackGroundColor = (priority: string): string => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "#E8A317";
      default:
        return "green";
    }
  };

  const typeBackgroundColor = (type: string): string => {
    switch (type) {
      case "feature":
        return "#4ee44e";
      case "modify":
        return "#bf90ee";
      case "fix":
        return "#ee9090";
      case "feature-frontend":
      case "feature-backend":
        return "#4ee44e";
      case "modify-frontend":
      case "modify-backend":
        return "#bf90ee";
      case "fix-frontend":
      case "fix-backend":
        return "#ee9090";
      default:
        return "#ee9090";
    }
  };

  const shortTitle = useCallback((title: string) => {
    if (title.length > 80) {
      const newTitle = title.substring(0, 81) + "...";
      return newTitle;
    }
    return title;
  }, []);

  return isDragging ? null : (
    <Container onClick={onClick} {...props}>
      <CardHeader>
        {" "}
        <CardType type={typeBackgroundColor(type)}>{type}</CardType>
        {localStorage.getItem("username") !== null && (
          <CardOwner>{(localStorage.getItem("username") as any)[0]}</CardOwner>
        )}
      </CardHeader>

      <CardTitle> {shortTitle(title)}</CardTitle>
      <PriorityContainer>
        <PriorityLabel backgroundColor={priorityBackGroundColor(priority)}>
          {priority}
        </PriorityLabel>
      </PriorityContainer>
    </Container>
  );
};

export default Card;
