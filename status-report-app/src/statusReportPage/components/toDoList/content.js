export const Content = (props) => {
    let deleteContent = props.deleteContent;
    console.log(props.contentArray.length);
    let content = (
        <ul>
            {props.contentArray.map((contentData) => (
                <li key={contentData.content_id.toString()}>
                    <p>{contentData.content}</p>
                    <button
                        title="delete content"
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
    return (
        <div className="content">
            {props.contentArray.length === 0 ? (
                <span className="message">
                    Press The Below Button To Add Content
                </span>
            ) : (
                content
            )}
        </div>
    );
};
