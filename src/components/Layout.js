import React, { Component } from 'react';

//import Aux from './hoc/Aux';
import Toolbar from './Toolbar';
import SideDrawer from './NavigationItems/SideDrawer';
import Footer from './Footer/footer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
    <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer />
    </React.Fragment>
)
}
}

export default Layout;