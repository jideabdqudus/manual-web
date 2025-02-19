import { Option } from "@/src/common/types/data.types";
import { MultiSelect, OptionSelect } from "@/src/components/ui";
export const Select = ({
  option,
  isSelected,
  onChange,
  isChoiceType,
}: {
  option: Option;
  isSelected: boolean;
  onChange: () => void;
  isChoiceType: boolean;
}) => {
  if (isChoiceType) {
    return (
      <OptionSelect
        option={option}
        isSelected={isSelected}
        onChange={onChange}
      />
    );
  } else {
    return (
      <MultiSelect
        option={option}
        isSelected={isSelected}
        onChange={onChange}
      />
    );
  }
};
