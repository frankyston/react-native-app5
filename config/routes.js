import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Index from '../pages/index';
import About from '../pages/about';
import Other from '../pages/other';
import Result from '../pages/result';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key='root' component={Index} initial />
                    <Scene key='about' component={About} />
                    <Scene key='other' component={Other} />
                    <Scene key='result' component={Result} />
                </Stack>
            </Router>
        );
    }
}