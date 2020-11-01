import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Result from "./Result";
import { ExportData, SearchParams } from "../../type.d";
import DropDown from "./DropDown";
import { createFalse } from "typescript";

function Search() {
  const [label, setLabel] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [isExact, setIsExact] = useState<boolean>(false);
  const [searchOption, setSearchOption] = useState<string>("product");
  const [results, setResults] = useState<ExportData[]>([]);
  const [resultCount, setResultCount] = useState<number>(0);

  const searchByPage = async (page: number) => {
    const response = await api.get("/export/search", {
      params: {
        keyword: searchValue,
        choice: searchOption,
        isExact: isExact ? 1 : 0,
        page,
      },
    });
    const { results, count } = response.data;
    //console.log(results);

    setResults(results);
    setResultCount(count);
    setSearchValue("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue === "") return;
    setLabel(searchValue);
    searchByPage(1);
  };

  return (
    <div>
      <form className="search-section" onSubmit={handleSearch}>
        <label>Choose your search category:</label>
        <DropDown onSelectedChange={setSearchOption} />
        <div className="ui input search-input">
          <input
            type="text"
            placeholder="Enter search keyword"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <div className="search-btn">
          <button className="ui primary button">Search</button>
        </div>
        <div className="search-checkbox ui toggle checkbox">
          <input
            type="checkbox"
            name="public"
            onChange={(e) => {
              setIsExact(!isExact);
            }}
          />
          <label>Exact Search</label>
        </div>
      </form>
      <Result
        results={results}
        count={resultCount}
        label={label}
        option={searchOption}
        setPage={searchByPage}
      />
    </div>
  );
}

export default Search;
