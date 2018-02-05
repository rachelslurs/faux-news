import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import ImageGenerator from './ImageGenerator'

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <ImageGenerator images={['img/hannity.jpg', 'img/tucker.jpg']}/>
                </Row>
            </Grid>
        )
    }
}

export default App
