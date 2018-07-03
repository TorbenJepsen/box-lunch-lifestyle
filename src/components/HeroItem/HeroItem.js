import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        width: 300,
        float: 'center',
        margin: '10px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        width: 200,
        display: 'flex',
    },

    contentHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const mapStateToProps = reduxState => ({
    entries: reduxState.entries,
})

class HeroItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImg: true,
        };
    }

    render() {
        const { classes } = this.props;

        let imgOutline = '/images/champion-belt.png'
        let imgColor = '/images/champion-belt-color.png'

        let displayImg;

        if (this.props.entries.allEntries.length >= 1) {
            displayImg = imgColor;

        } else {
            displayImg = imgOutline;
        }

        return (
            <div>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary">
                                June 30th 2018
          </Typography>
                            <Typography variant="headline" component="h2">
                                Hero (1 Day) <span><img src={displayImg}/></span>
          </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }

}

HeroItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(HeroItem));