import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export const App = ({
    title,
    subtitle
}) => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <AppBar title={title} />
            <Card>
                <CardTitle
                    title={title} 
                    subtitle={subtitle}/>
                
                <CardText>
                    <p>This is where content would go</p>
                </CardText>
            </Card>
        </div>
    </MuiThemeProvider>
);
