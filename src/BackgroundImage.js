import React from 'react'
import PropTypes from 'prop-types'
import { Col, Button } from 'react-bootstrap'

const BackgroundImage = ({image, onSelectImage}) => (
    <Col xs={6} md={4}>
        <Button onClick={() => onSelectImage(image)}>
            <img src={image.preview} alt="thumbnail" />
        </Button>
    </Col>
)

BackgroundImage.propTypes = {
    onSelectImage: PropTypes.func.isRequired,
    image: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default BackgroundImage
