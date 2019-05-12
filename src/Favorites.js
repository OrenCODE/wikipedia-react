import React from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Favorites = ({openModal, handleClose, stateFavorites, removeFromFavorites}) => {
    return (
        <Modal show={openModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>My Favorites</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {stateFavorites.map((favorite) => {
                    return (
                        <div className="card" key={favorite.pageid}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a target="_blank" rel="noopener noreferrer"
                                       href={`https://en.wikipedia.org/wiki/${favorite.title}`}>{favorite.title}</a>
                                    <Button variant="danger" size="sm" className="delete-button"
                                            onClick={() => removeFromFavorites(favorite.pageid)}>Del</Button>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close and Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default Favorites


// class Favorites extends Component {
//
//     render() {
//         const {openModal, handleClose, stateFavorites , removeFromFavorites} = this.props;
//         return (
//
//             <Modal show={openModal} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>My Favorites</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {stateFavorites.map((favorite) => {
//                             return (
//                                 <div className="card-header" key={favorite.pageid}>
//                                     <a target="_blank" rel="noopener noreferrer"
//                                        href={`https://en.wikipedia.org/wiki/${favorite.title}`}>{favorite.title}</a>
//                                     <Button variant="danger" size="sm" className="delete-button" onClick={() => removeFromFavorites(favorite.pageid)}>Del</Button>
//                                 </div>
//                             )
//                         }
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="primary" onClick={handleClose}>
//                         Close and Save
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//
//         );
//     }
// }
//
// export default Favorites