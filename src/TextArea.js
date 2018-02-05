import React from 'react'
import PropTypes from 'prop-types'
import { Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const TextArea = ({
    onInputTextChange,
    inputText,
    imageIsSelected
}) => (
    <Form>
        <FormGroup controlId="formBasicText" bsSize="large">
            <ControlLabel>Last 4 digits of your phone number</ControlLabel>
            <FormControl type="text" maxLength="4" value={inputText} disabled={!imageIsSelected} onChange={onInputTextChange} placeholder={imageIsSelected
                ? 'Enter last 4 digits of your phone number'
                : 'Select an image before entering text.'
            }/>
        </FormGroup>
    </Form>
)

TextArea.propTypes = {
    onInputTextChange: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired,
    imageIsSelected: PropTypes.bool.isRequired
}

export default TextArea
