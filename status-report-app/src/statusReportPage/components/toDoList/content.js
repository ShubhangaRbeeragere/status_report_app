
export const Content = (props) => {
    let content = <ul>
        {
            props.contentArray.map((contentData) => 
                <li key={contentData.content_id.toString()}>
                    {contentData.content}
                </li>
            )
        }
    </ul>
    return(
        <div className="content">
            {content}
        </div>
    )
}
