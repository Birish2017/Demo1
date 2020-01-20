import React from 'react';
import {Grid,Row} from 'react-bootstrap'
import Header from './header/Header'

export default (props)=>(

    <Grid  fluid>
<Row>
    <Header/>
</Row>
<Row>
    { props.children }
</Row>

    </Grid>
)