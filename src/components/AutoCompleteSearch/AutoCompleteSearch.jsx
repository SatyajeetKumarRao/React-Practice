import { useEffect, useRef, useState } from "react";
import "./AutoCompleteSearch.css";

const AutoCompleteSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestionListData, setSuggestionListData] = useState([]);
  const [cachedData, setCachedData] = useState({});
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const fetchRef = useRef();

  const inputRef = useRef();

  const listRefs = useRef([]);

  const containerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowSuggestion(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (fetchRef.current) {
          fetchRef.current.abort();
        }

        const inputValue = searchValue.trim();
        setSelectedIndex(-1);

        if (cachedData[inputValue]) {
          console.log("Cached Data");
          setSuggestionListData(cachedData[inputValue]);
          return;
        }

        const controller = new AbortController();
        fetchRef.current = controller;
        const { signal } = controller;
        const data = await fetch(
          `https://dummyjson.com/recipes/search?q=${inputValue}`,
          { signal },
        );
        const responseData = await data.json();
        console.log(responseData);
        setSuggestionListData(responseData.recipes);
        setCachedData((prev) => ({
          ...prev,
          [inputValue]: responseData.recipes,
        }));
        fetchRef.current = null;
      } catch (error) {
        console.log("error", error);
      }
    }
    const delayTimerId = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayTimerId);
  }, [cachedData, searchValue]);

  function handleSuggestionClick(e) {
    const clickedItem = e.target.closest(".suggestion-item");

    if (!clickedItem) return;
    setSearchValue(clickedItem.textContent);
    setShowSuggestion(false);
    setSelectedIndex(-1);
  }

  const scrollToSelectedItem = (index) => {
    if (listRefs.current[index]) {
      listRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  function handleKeyPress(e) {
    console.log(e.key);
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => {
        const index = prev > 0 ? prev - 1 : suggestionListData.length - 1;
        scrollToSelectedItem(index);
        return index;
      });
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => {
        const index = prev < suggestionListData.length - 1 ? prev + 1 : 0;
        scrollToSelectedItem(index);
        return index;
      });
    } else if (e.key === "Enter" && selectedIndex != -1) {
      setSearchValue(suggestionListData[selectedIndex].name);
    } else if (e.key === "Escape") {
      setShowSuggestion(false);
      inputRef.current.blur();
      setSelectedIndex(-1);
    }
  }
  return (
    <div className="autocomplete-search-container">
      <h2>Autocomplete Search</h2>
      <div className="search-container" ref={containerRef}>
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onKeyDown={handleKeyPress}
          ref={inputRef}
        />
        {showSuggestion ? (
          suggestionListData.length > 0 ? (
            <div className="suggestion-container" onClick={handleSuggestionClick}>
              {suggestionListData.map((item, index) => (
                <span
                  className={`suggestion-item ${index === selectedIndex ? "selected" : ""}`}
                  key={item.id}
                  ref={(el) => (listRefs.current[index] = el)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          ) : (
            <div>No Data</div>
          )
        ) : null}</div>
    </div>
  );
};

export default AutoCompleteSearch;
