import React from 'react';

const Modal = ({ show, onCloseButtonClick, cardInfo }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="body">
                    <div className="card">
                        <img src={cardInfo.img} alt="" className="img-card" />
                        <div>{cardInfo.title}</div>
                    </div>
                    <button onClick={onCloseButtonClick}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
