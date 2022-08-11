import { useState } from "react"
import { Card } from "../../commons/Card"
import { CardSection } from "../../commons/CardSection"
import { NewCard } from "../../commons/NewCard"

export const Body = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <CardSection name="Backlog" setIsOpen={setIsOpen}>
        <Card title="test1" />
        <Card title="test2" />
      </CardSection>
      <CardSection name="To Do" setIsOpen={setIsOpen}>
        <Card title="test1" />
        <Card title="test2" />
      </CardSection>
      <CardSection name="In Progress" setIsOpen={setIsOpen}>
        <Card title="test1" />
        <Card title="test2" />
      </CardSection>
      <CardSection name="Paused" setIsOpen={setIsOpen}>
        <Card title="test1" />
        <Card title="test2" />
      </CardSection>
      <CardSection name="Accepted" setIsOpen={setIsOpen}>
        <Card title="test1" />
        <Card title="test2" />
      </CardSection>
      <NewCard isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Body
