import React from "react";

export default function Search_input({
  query,
  setQuery,
  setIsSearchOpen,
  setPage,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
    setPage(1);
    // alert(query)
  };
  const handleFocus = () => {
    // setIsSearchOpen(false);
    if (!query) {
      setIsSearchOpen(false);
    }
  };
  const handleBlur = () => {
    if (!query) {
      setIsSearchOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-full rounded-lg text-sm focus:outline-none"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
