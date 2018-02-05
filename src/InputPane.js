import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap'
import TextArea from './TextArea'
import BackgroundImageArea from './BackgroundImageArea'

// handleChange(e) {
//   this.setState({ value: e.target.value });
// }
// constructor(props, context) {
//   super(props, context);
//
//   this.handleChange = this.handleChange.bind(this);
//
//   this.state = {
//     value: ''
//   };
// }

const InputPane = ({
    images,
    onInputTextChange,
    inputText,
    onSelectImage,
    onDrop,
    image,
}) => (
    <Grid>
        <Row>
            <Col md={8}>
                <TextArea
                    onInputTextChange={onInputTextChange}
                    imageIsSelected={Object.keys(image).length > 0}
                    inputText={inputText}
                />
            </Col>
        </Row>
        <Row>
            <Col md={10}>
                <BackgroundImageArea
                    onSelectImage={onSelectImage}
                    images={images}
                    onDrop={onDrop}
                />
            </Col>
        </Row>
    </Grid>
)

InputPane.propTypes = {
    images: PropTypes.array.isRequired,
    inputText: PropTypes.string.isRequired,
    onInputTextChange: PropTypes.func.isRequired,
    onSelectImage: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
}

export default InputPane
