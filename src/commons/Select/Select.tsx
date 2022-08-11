import styled from "styled-components"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options?: SelectOption[]
  onChange: (e: any) => void
}

const SelectCustom = styled.select`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`

export const Select = ({ options = [], onChange }: SelectProps) => {
  return (
    <SelectCustom onChange={onChange}>
      {options.map((option) => {
        return (
          <option value={option.value} key={`${option.value} value`}>
            {option.label}
          </option>
        )
      })}
    </SelectCustom>
  )
}

export default Select
