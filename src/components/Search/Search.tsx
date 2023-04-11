import { useState } from "react";
import { SearchIcon } from "../../assets/svg";
import "./Search.scss";

interface IProps {
  onChange: (val: string) => void;
}

export const Search: React.FC<IProps> = ({ onChange }) => {
  const [value, setValue] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="search">
      <label htmlFor="search" className="wrapper-search-icon">
        <SearchIcon />
      </label>
      <input
        placeholder="Search"
        id="search"
        type="text"
        value={value}
        onChange={onChangeSearch}
      ></input>
    </div>
  );
};
