export const DisplayContent = (props) => {
    console.log(props.contentArray.length);
    let content = (
        <ul>
            {props.contentArray.map((contentData) => (
                <li key={contentData.content_id.toString()}>
                    <p>{contentData.content}</p>
                </li>
            ))}
        </ul>
    );
    return (
        <div className="content">
            {props.contentArray.length === 0 ? (
                <span className="message">
                    Press The Below Button To Add Issue
                </span>
            ) : (
                content
            )}
        </div>
    );
};
