import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'react-bootstrap'
import ImagePicker from './ImagePicker'
import InputPane from './InputPane'

class ImageGenerator extends Component {
    onInputTextChange = this.onInputTextChange.bind(this);
    onSelectImage = this.onSelectImage.bind(this);
    onDropImage = this.onDropImage.bind(this);

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    static defaultProps = {
        images: [],
    };

    constructor(props) {
        super(props)

        this.state = {
            images: this.props.images,
            generatedImage: '',
            selectedImage: this.props.images[0] || {},
            inputText: '',
            topText: ''
        }
    }
    translateHeadline(digits) {
        let word1, word2, word3, word4
        switch(digits[0]) {
            case '0':
                word1 = 'Huma Abedin'
                break
            case '1':
                word1 = 'Obama'
                break
            case '2':
                word1 = 'Black Lives Matter'
                break
            case '3':
                word1 = 'George Soros'
                break
            case '4':
                word1 = 'The Deep State'
                break
            case '5':
                word1 = 'The Liberal MSM'
                break
            case '6':
                word1 = 'ISIS'
                break
            case '7':
                word1 = 'The Muslim Brotherhood'
                break
            case '8':
                word1 = 'Rev. Al. Sharpton'
                break
            case '9':
                word1 = 'Hillary Clinton'
                break
            default:
                word1 = ''
                break
        }
        switch(digits[1]) {
            case '0':
                word2 = 'Is Arming'
                break
            case '1':
                word2 = 'Is Funding'
                break
            case '2':
                word2 = 'Is Plotting With'
                break
            case '3':
                word2 = 'Is Working With'
                break
            case '4':
                word2 = 'Is Extorting'
                break
            case '5':
                word2 = 'Is Financing'
                break
            case '6':
                word2 = 'Is Giving Free Stuff To'
                break
            case '7':
                word2 = 'Is Teaming With'
                break
            case '8':
                word2 = 'Is Plotting With'
                break
            case '9':
                word2 = 'Is Conspiring With'
                break
            default:
                word2 = ''
                break
        }
        switch(digits[2]) {
            case '0':
                word3 = 'College Students'
                break
            case '1':
                word3 = 'Illegal Voters'
                break
            case '2':
                word3 = 'ISIS'
                break
            case '3':
                word3 = 'Illegal Aliens'
                break
            case '4':
                word3 = 'Trans People'
                break
            case '5':
                word3 = 'Antifa'
                break
            case '6':
                word3 = 'James Comey'
                break
            case '7':
                word3 = 'Liberal College Professors'
                break
            case '8':
                word3 = 'Refugees'
                break
            case '9':
                word3 = 'Democrats'
                break
            default:
                word3 = ''
                break
        }
        switch(digits[3]) {
            case '0':
                word4 = 'To Impose Sharia Law'
                break
            case '1':
                word4 = 'To Overthrow President Trump'
                break
            case '2':
                word4 = 'To Cover for Benghazi'
                break
            case '3':
                word4 = 'To Begin White Genocide'
                break
            case '4':
                word4 = 'To Commit Mass Voter Fraud'
                break
            case '5':
                word4 = 'To Wire Tap Trump Tower'
                break
            case '6':
                word4 = 'To Burn the American Flag and Disrespect the Troops'
                break
            case '7':
                word4 = 'To Orchestrate a False Flag Terrorist Attack'
                break
            case '8':
                word4 = 'To Overthrow Capitalism'
                break
            case '9':
                word4 = 'To Attack Whites'
                break
            default:
                word4 = ''
                break
        }
        return word1 + ' ' + word2 + ' ' + word3 + ' ' + word4
    }

    onInputTextChange(event) {
        this.setState({
            topText: this.translateHeadline(event.target.value),
            inputText: event.target.value
        })
    }

    onSelectImage(selectedImage) {
        this.setState({
            selectedImage
        })
    }

    onDropImage(droppedImages) {
        const images = this.state.images
        images.map(image => image)
            .concat(droppedImages.filter(ImageGenerator.isAcceptableImage))

        this.setState({
            images: droppedImages
        })
    }

    render = ({
        inputText,
        topText,
        images,
        selectedImage
    } = this.state) => {
        console.log(inputText, images, selectedImage)
        return(
            <Grid>
                <InputPane
                    images={images}
                    image={selectedImage}
                    inputText={inputText}
                    onInputTextChange={this.onInputTextChange}
                    onSelectImage={this.onSelectImage}
                    onDrop={this.onDropImage}
                />
                <Row className="ImageGenerator">
                    <ImagePicker topText={topText} image={selectedImage} />
                </Row>
            </Grid>
        )
    }
}

export default ImageGenerator
