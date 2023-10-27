// Selector.tsx
import React from 'react';
import * as St from './STSelector';

interface SelectorProps {
  options: { value: any; label: any }[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode; // children 속성을 선택적으로 추가
}

const Selector: React.FC<SelectorProps> = ({ options, onChange }) => {
  const normalizedOptions = options || [];

  return (
    <St.SelectorBar>
      <St.Selector onChange={onChange}>
        {normalizedOptions.map((option) => (
          <option>
            {option.label}
          </option>
        ))}
      </St.Selector>
    </St.SelectorBar>
  );
};

export default Selector;
