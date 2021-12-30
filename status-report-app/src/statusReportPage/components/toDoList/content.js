export const Content = (props) => {
  let deleteContent = props.deleteContent;
  let content = (
    <ul>
      {props.contentArray.map((contentData) => (
        <li key={contentData.content_id.toString()}>
          <p>{contentData.content}</p>
          <button
            className="removeContentButton"
            onClick={() => {
              deleteContent(props.project, contentData.content);
            }}
          >
            <i className="fas fa-minus"></i>
          </button>
        </li>
      ))}
    </ul>
  );
  return <div className="content">{content}</div>;
};
