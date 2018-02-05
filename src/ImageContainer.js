import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import domToImage from 'dom-to-image'
import FileSaver from 'file-saver'

class ImageContainer extends Component {
	downloadImage = this.downloadImage.bind(this);

	static propTypes = {
	    image: PropTypes.string.isRequired,
	    topText: PropTypes.string.isRequired
	};

	downloadImage() {
	    domToImage.toBlob(this.captureDiv).then(blob => {
	        FileSaver.saveAs(blob, 'my-headline.png')
	    })
	}

	render = ({image, topText} = this.props) => (
	    <Grid>
    	    <div ref={div => {this.captureDiv = div}}>
    	        <Row>
    	            <Image src={image.preview} alt={topText}/>
    	        </Row>
    	        <Row>
    	            <div>
    	                <h2>{topText}</h2>
    	            </div>
    	        </Row>
    	    </div>
    	    <Row>
    	        <Col md={6}>
    	            <Button bsStyle='primary' bsSize='large' block="block" onClick={this.downloadImage}>
    					Download
    	            </Button>
    	        </Col>
    	    </Row>
    	</Grid>
	);
}

export default ImageContainer
