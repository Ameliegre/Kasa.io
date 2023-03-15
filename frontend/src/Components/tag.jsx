
function Tag ({tags}) {
    return (
        <div className="tags-container">
            {Object.values(tags).map((tag, index) => <div className="tags-element" key={index}>{tag}</div>)}
        </div>
    )
}

export default Tag