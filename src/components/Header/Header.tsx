import styled from "styled-components"

export const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  background-color: var(--primary-color);
  color: white;
  font-size: xx-large;
  font-weight: bolder;
  padding-left: 10px;
  align-items: center;
`

export interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return <HeaderContainer>{title}</HeaderContainer>
}

export default Header
