import "./index.css";

const WelcomeHome = (props) => {
  const { onclickPlay, onchangeusername, username } = props;

  const onclickPlaying = () => {
    onclickPlay();
  };

  const onchangeuser = (event) => {
    onchangeusername(event);
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">React Tiles</h1>
      <div className="username-container">
        <h1 className="username-heading">Enter Your Name</h1>
        <input
          type="text"
          onChange={onchangeuser}
          value={username}
          className="userinput"
        />
        <button type="button" className="play-button" onClick={onclickPlaying}>
          Play
        </button>
      </div>
    </div>
  );
};

export default WelcomeHome;
