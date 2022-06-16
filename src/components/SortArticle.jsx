import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortArticle() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSorted, setSorted] = useState(true);

  const handleSortByChange = (e) => {
    setSearchParams({ sort_by: e.target.value });
    setSorted(false);
  };

  const sort_by = searchParams.get("sort_by");

  const handleAscDescChange = (e) => {
    setSearchParams({ sort_by, order: e.target.value });
  };

  return (
    <div className="sort-article">
      <form>
        <label>Sort article by: </label>
        <select
          onChange={(e) => {
            handleSortByChange(e);
          }}
        >
          <option key="created_at" value={"created_at"}>
            Date
          </option>
          <option key="title" value={"title"}>
            Title
          </option>
          <option key="votes" value={"votes"}>
            Votes
          </option>
        </select>

        <select disabled={isSorted}
          onChange={(e) => {
            handleAscDescChange(e);
          }}
        >
          <option key="descending" value={"desc"}>
            Descending
          </option>
          <option key="ascending" value={"asc"}>
            Ascending
          </option>
        </select>
      </form>
    </div>
  );
}

export default SortArticle;
