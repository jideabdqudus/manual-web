import { Text } from "@/src/components/ui";
import { Option } from "@/src/common/types/data.types";

export const MultiSelect = ({
  option,
  isSelected,
  onChange,
}: {
  option: Option;
  isSelected: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`bg-white border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer rounded-[16px] w-[155px] min-h-[170px] ${
      isSelected ? "!bg-primary-hex/20 !border-primary-hex" : ""
    }`}
  >
    <span dangerouslySetInnerHTML={{ __html: option.display }} />
    <Text size="sm" weight="light">
      {option?.value}
    </Text>
  </button>
);
