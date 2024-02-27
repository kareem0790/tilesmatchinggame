import { FaHandsClapping } from "react-icons/fa6";
import EmojiItem from "../EmojiItem";
import "./index.css";

const GameBoard = (props) => {
  const {
    count,
    score,
    emojiList,
    selectedList,
    username,
    showImage,
    clearTimer,
  } = props;

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const clearingTimer = () => {
    clearTimer();
  };
  const onShowImage = (id) => {
    showImage(id);
  };

  if (emojiList.length === selectedList.length) {
    clearingTimer();
    return (
      <div className="game-board-container">
        <h1 className="game-board-heading">React Tiles</h1>
        <div className="board-container">
          <div className="score-container">
            <p className="score">Score:{score}</p>
            <p className="score">
              Time:{minutes}:{seconds}
            </p>
          </div>
          <div className="tiles-container">
            <p className="name">
              Welcome {username} <FaHandsClapping className="claps" />
            </p>
            <h1 className="game-finished-heading">Game Finished!</h1>
            <p className="final-score">Score: {score}</p>
            <p className="final-timer">
              Time Taken: {minutes}:{seconds}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="game-board-container">
        <h1 className="game-board-heading">Mahajong Game</h1>
        <div className="board-container">
          <div className="score-container">
            <p className="score">Score:{score}</p>
            <p className="score">
              Time:{minutes}:{seconds}
            </p>
          </div>
          <div className="tiles-container">
            <p className="name">
              Welcome {username} <FaHandsClapping className="claps" />
            </p>
            <ul className="list-container">
              {emojiList.map((each) => (
                <EmojiItem
                  emojiDetails={each}
                  onShowImage={onShowImage}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default GameBoard;
