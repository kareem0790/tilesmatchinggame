import "./index.css";

const EmojiItem = (props) => {
  const { emojiDetails, onShowImage } = props;
  const { id, emojiUrl, showImage } = emojiDetails;
  const onclickShowImage = () => {
    onShowImage(id);
  };

  const buttonShow = showImage ? true : false;

  return (
    <li className="col-4 list-item">
      <button
        disabled={buttonShow}
        className="emoji-button"
        onClick={onclickShowImage}
      >
        {showImage && (
          <img src={emojiUrl} className="image" alt={`{emoij${id}}`} />
        )}
      </button>
    </li>
  );
};

export default EmojiItem;
