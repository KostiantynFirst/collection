export const MaterialItem = ({item, onDelete, onUpdate}) => {
    return (
       <div>
       <p>Title: {item.title}</p>
       <p>Link: {item.link}</p>
       <button 
           type="button" 
           onClick={() => onDelete(item.id)}>
           Delete
       </button>
       <button 
           type="button" 
           onClick={() => onUpdate({ id: item.id, title: Date.now() })}
           >
               Update
       </button>
       </div>
    );

};