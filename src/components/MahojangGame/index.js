import { Component } from "react";
import { v4 } from "uuid";
import WelcomeHome from "../WelcomeHome";
import GameBoard from "../GameBoard";
import "./index.css";

const emojisLists = [
  {
    id: 0,
    showImage: false,
    emojiName: "Face with stuck out tongue",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 1,
    showImage: false,
    emojiName: "Face with head bandage",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 2,
    showImage: false,
    emojiName: "Face with hugs",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 3,
    showImage: false,
    emojiName: "Face with laughing",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 4,
    showImage: false,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 5,
    showImage: false,
    emojiName: "Face with mask",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 6,
    showImage: false,
    emojiName: "Face with silence",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 7,
    showImage: false,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 8,
    showImage: false,
    emojiName: "Grinning face with sweat",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 9,
    showImage: false,
    emojiName: "Smiling face with heart eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 10,
    showImage: false,
    emojiName: "Grinning face",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 11,
    showImage: false,
    emojiName: "Smiling face with star eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
  {
    id: 12,
    showImage: false,
    emojiName: "Face with stuck out tongue",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 13,
    showImage: false,
    emojiName: "Face with head bandage",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 14,
    showImage: false,
    emojiName: "Face with hugs",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 15,
    showImage: false,
    emojiName: "Face with laughing",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 16,
    showImage: false,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 17,
    showImage: false,
    emojiName: "Face with mask",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 18,
    showImage: false,
    emojiName: "Face with silence",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 19,
    showImage: false,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 20,
    showImage: false,
    emojiName: "Grinning face with sweat",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 21,
    showImage: false,
    emojiName: "Smiling face with heart eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 22,
    showImage: false,
    emojiName: "Grinning face",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 23,
    showImage: false,
    emojiName: "Smiling face with star eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
];

class MahojangGame extends Component {
  state = {
    score: 0,
    timerId: "",
    count: 0,
    emojiList: emojisLists,
    selectedList: [],
    tempList: [],
    username: "",
    isPlaying: false,
    savedusernameid: "",
  };

  timer = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onclickPlay = () => {
    const { username } = this.state;
    if (username !== "") {
      const id = v4();
      localStorage.setItem(`username${id}`, { username });
      const timerId = setInterval(() => {
        this.timer();
      }, 1000);
      this.setState({
        isPlaying: true,
        savedusernameid: `username${id}`,
        timerId: timerId,
      });
    }
  };

  onchangeusername = (event) => {
    this.setState({ username: event.target.value });
  };

  filteredImage = (id) => {
    const { emojiList } = this.state;
    const filteredList = emojiList.map((each) => {
      if (each.id === id) {
        return { ...each, showImage: true };
      }
      return each;
    });
    this.setState({ emojiList: filteredList });
  };

  showImage = (id) => {
    const { tempList, selectedList, emojiList } = this.state;

    const selectlist = emojiList.filter((each) => each.id === id);
    const check = tempList.includes(selectlist[0].emojiName);
    console.log(selectedList);
    if (tempList.length === 0) {
      this.setState((prevState) => ({
        selectedList: [...prevState.selectedList, selectlist[0].emojiName],
        tempList: selectlist[0].emojiName,
      }));
      this.filteredImage(id);
    } else if (check) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
        selectedList: [...prevState.selectedList, selectlist[0].emojiName],
        tempList: [],
      }));
      this.filteredImage(id);
    } else {
      this.setState((prevState) => ({
        score: prevState.score - 1,
        selectedList: [...prevState.selectedList, selectlist[0].emojiName],
        tempList: [],
      }));
      this.filteredImage(id);
    }
  };

  clearTimer = () => {
    const { timerId } = this.state;
    clearInterval(timerId);
  };

  render() {
    const {
      isPlaying,
      username,
      count,
      selectedList,
      score,
      emojiList,
    } = this.state;

    return (
      <div className="app-container">
        {isPlaying ? (
          <GameBoard
            count={count}
            score={score}
            emojiList={emojiList}
            username={username}
            clearTimer={this.clearTimer}
            selectedList={selectedList}
            showImage={this.showImage}
          />
        ) : (
          <WelcomeHome
            username={username}
            onclickPlay={this.onclickPlay}
            onchangeusername={this.onchangeusername}
          />
        )}
      </div>
    );
  }
}

export default MahojangGame;
