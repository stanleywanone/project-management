import styled from "styled-components"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[]
  onChange: (e: any) => void
  value?: any
}

const SelectCustom = styled.select`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`

export const Select = ({ options = [], onChange, value }: SelectProps) => {
  return (
    <SelectCustom onChange={onChange} value={value}>
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
