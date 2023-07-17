import { MaterialItem } from "./MaterialItem"
export const Materials = ({items, ...otherProps}) => {
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <MaterialItem 
                    item={item} 
                    {...otherProps}/>
            </li>
            ))}
    </ul>
}