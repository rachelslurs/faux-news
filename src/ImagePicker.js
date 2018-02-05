import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import ImageContainer from './ImageContainer'

const ImagePicker = ({image, topText}) => (
    <Row>
        {
            Object.keys(image).length
                ? (<ImageContainer image={image} topText={topText}/>)
                : (<Col>No image selected.</Col>)
        }
    </Row>
)

ImagePicker.propTypes = {
    image: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired
}

export default ImagePicker
