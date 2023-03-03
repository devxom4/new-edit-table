/* eslint-disable no-underscore-dangle */
import React from 'react';
import Modal from '@splunk/react-ui/Modal';
import T from 'prop-types';

import RowForm from './RowForm';

const ModalStyle = {
    width: `640px`,
};

const ModalBodyStyle = {
    padding: 24,
};

const ModalComponent = ({ onClose, onSave, data, open, model, labelMap }) => {
    return (
        <Modal onRequestClose={onClose} open={open} style={ModalStyle}>
            <Modal.Header title={`Edit ${data._key} entry`} onRequestClose={onClose} />
            <Modal.Body style={ModalBodyStyle}>
                <RowForm data={data} onSave={onSave} model={model} labelMap={labelMap} />
            </Modal.Body>
        </Modal>
    );
};

ModalComponent.propTypes = {
    onClose: T.func,
    onSave: T.func,
    data: T.object,
    open: T.bool,
    model: T.object,
    labelMap: T.array
};

export default ModalComponent;
