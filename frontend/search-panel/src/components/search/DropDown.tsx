import React, { useState, useEffect, useRef } from "react";

type Options = {
  label: string;
  value: string;
};

const options: Options[] = [
  { label: "Product Name", value: "product" },
  { label: "Indian Company", value: "indian" },
  { label: "Foreign Company", value: "foreign" },
];

interface DropDownProps {
  onSelectedChange: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = (event: MouseEvent) => {
      // contains is a DOM api
      // Judge if a DOM is inside of another DOM
      if (ref.current !== null) {
        //console.log(ref.current);
        if (ref.current.contains(event.target as Node)) {
          return;
        }

        setOpen(false);
      }
      document.body.addEventListener("click", onBodyClick);

      return () => {
        document.body.removeEventListener("click", onBodyClick);
      };
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          setSelected(option);
          onSelectedChange(option.value);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="search-dropdown ui form">
      <div className="field">
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
