export const Materials = ({items, onDelete}) => {
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <p>Title: {item.title}</p>
                <p>Link: {item.link}</p>
                <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
            </li>
            ))}
    </ul>
}