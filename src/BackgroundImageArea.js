import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
// import Dropzone from 'react-dropzone';

import BackgroundImage from './BackgroundImage'

const BackgroundImageArea = ({
    images,
    onSelectImage,
    onDrop,
    dropzoneStyles = {
        width: '100%',
        padding: '1.5rem',
        transition: 'all .2s',
        backgroundColor: 'rgba(0, 0, 0, .25)',
        borderRadius: 4,
        border: '3px dashed rgba(0, 0, 0, .35)',
        borderColor: 'rgba(0, 0, 0, .35)',
    },
}) =>
    (
        <Col md={8}>
            <h4>Choose Your State-Controlled Media Host</h4>
            {images.map((image, i) => (
                <BackgroundImage
                    key={i}
                    image={image}
                    onSelectImage={onSelectImage}
                />
            ))}
        </Col>
    )

BackgroundImageArea.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    dropzoneStyles: PropTypes.objectOf(PropTypes.any),
    onDrop: PropTypes.func.isRequired,
    onSelectImage: PropTypes.func.isRequired,
}

export default BackgroundImageArea
