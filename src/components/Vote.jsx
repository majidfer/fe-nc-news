import { useState } from "react";
import { patchArticle } from "../utils/api";

function Vote({ currArticle }) {
  const [currVote, setCurrVote] = useState(currArticle.votes);
  const [voteChange, setVoteChange] = useState(0);
  const [isError, setError] = useState(null);

  const handleUpVoteClick = () => {
    patchArticle(currArticle.article_id, 1)
      .then((updatedArticle) => {
        setCurrVote((currVote) => currVote + 1);
        setVoteChange((currVote) => currVote + 1);
        setError(null);
        console.log(updatedArticle);
      })
      .catch((err) => {
        setError("Something went wrong, please try again.");
      });
  };

  const handleDownVoteClick = () => {
    patchArticle(currArticle.article_id, -1)
      .then((updatedArticle) => {
        setCurrVote((currVote) => currVote - 1);
        setVoteChange((currVote) => currVote - 1);
        setError(null);
        console.log(updatedArticle);
      })
      .catch((err) => {
        setError("Something went wrong, please try again.");
      });
  };

  if (isError) return <p className="error">Please try again!</p>;

  return (
    <>
      <div className="vote">
        <button
          className="vote-button"
          onClick={handleDownVoteClick}
          disabled={voteChange !== 0}
        >
          <span className="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </button>
        <p>{currVote} votes</p>
        <button
          className="vote-button"
          onClick={handleUpVoteClick}
          disabled={voteChange !== 0}
        >
          <span className="material-symbols-outlined">
            keyboard_double_arrow_up
          </span>
        </button>
      </div>
    </>
  );
}

export default Vote;
