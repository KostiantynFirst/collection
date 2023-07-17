import { Component } from "react"

const EditMaterialModal = ({onClose, onEdit}) => {
    return <div>
        <h2>Модалка редактирования материала</h2>
        <button type="button" onClick={() => {onEdit(); onClose()}}>Вот теперь точно редактировать</button>
        <button type="button" onClick={onClose}>Close</button>
    </div>
}

export class MaterialItem extends Component {

    state = {
        isModalOpen: false,
    };

    openModal = () => this.setState({isModalOpen: true});
    closeModal = () => this.setState({isModalOpen: false});

    render() {

        const { item, onUpdate, onDelete } = this.props;
        const { isModalOpen } = this.state;

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
                onClick={this.openModal}
             //    onClick={() => onUpdate({ id: item.id, title: Date.now() })}
                >
                    Update
            </button>
            {isModalOpen && <EditMaterialModal onClose={this.closeModal} onEdit={() => onUpdate({ id: item.id, title: Date.now() })}/>}
            </div>
         );
    }

};