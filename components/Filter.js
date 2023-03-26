import { useState } from "react";

const Filter = ({ options, onFilter }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isSelected = selectedOptions.includes(value);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleApplyClick = () => {
    onFilter(selectedOptions);
  };

  const isOptionSelected = (value) => {
    return selectedOptions.includes(value);
  };

  return (
    <div className="flex items-center justify-between">
      {options.map((option) => (
        <button
          key={option.value}
          className={`${
            isOptionSelected(option.value)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } font-bold py-2 px-4 rounded mr-4`}
          onClick={() => handleOptionChange({ target: { value: option.value } })}
        >
          {option.label}
        </button>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </div>
  );
};

export default Filter;
