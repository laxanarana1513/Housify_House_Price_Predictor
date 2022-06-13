import React from 'react';
import classes from './Layout.css';
import Auxi from '../../hoc/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import {connect} from 'react-redux';



class Layout extends React.Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Auxi>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    isAuth={this.props.isAuthenticated} />

                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                    <Footer />

                </main>
            </Auxi>

        )
    }
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null   
    }
}

export default connect(mapStateToProps)(Layout)