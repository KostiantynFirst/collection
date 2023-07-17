export const Materials = ({items}) => {
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <p>Title: {item.title}</p>
                <p>Link: {item.link}</p>
            </li>
            ))}
    </ul>
}