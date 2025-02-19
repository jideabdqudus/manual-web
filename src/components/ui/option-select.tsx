export const OptionSelect = ({
  option,
  isSelected,
  onChange,
}: {
  option: any;
  isSelected: boolean;
  onChange: () => void;
}) => (
  <label
    className={`flex bg-white border border-gray-300 rounded-[8px] p-[20px] min-w-[400px] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-100 ${
      isSelected ? "!bg-primary-hex/20  !border-primary-hex !animate-pulse" : ""
    }`}
  >
    <input
      type="radio"
      name={`question-${option.value}`}
      value={`${option.value}`}
      checked={isSelected}
      onClick={onChange}
      className="hidden"
    />
    <span
      className={`mr-2 w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center ${
        isSelected ? "!bg-alternate" : ""
      }`}
    >
      {isSelected && <span className="w-2 h-2 bg-white rounded-full" />}
    </span>
    <span dangerouslySetInnerHTML={{ __html: option.display }} />
  </label>
);
