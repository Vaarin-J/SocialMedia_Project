//import { tabsListClasses } from '@mui/base';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestion from '../Suggestion/Suggestion';



class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state= {}
    }

    render() { 
        return (  <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        
                        <InfoSection />
                        <Suggestion/>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>);
    }
}
 
export default MainContent;