export const DisplayContent = (props) => {
    let content = (
        <ul>
            {props.contentArray.map((contentData) => (
                <li key={contentData.content_id.toString()}>
                    <p>{contentData.content}</p>
                </li>
            ))}
        </ul>
    );
    return <div className="content">{content}</div>;
};
