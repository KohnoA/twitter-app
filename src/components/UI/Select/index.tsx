import { ArrowIconStyled, SelectStyled, SelectWrapper } from './styled';

interface SelectProps {
  options: string[];
  placeholder?: string;
}

export const Select = ({ options, placeholder }: SelectProps) => (
  <SelectWrapper>
    <SelectStyled defaultValue={placeholder}>
      {placeholder && (
        <option disabled hidden>
          {placeholder}
        </option>
      )}

      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </SelectStyled>
    <ArrowIconStyled />
  </SelectWrapper>
);
