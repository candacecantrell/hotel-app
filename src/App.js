import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import AllHotelList from '../src/components/HomePage/HomePage';
import SanDiegoHome from '../src/components/SanDiego/sandiegohome';
import SeattleHome from '../src/components/Seattle/seattlehome';
import MiamiHome from '../src/components/Miami/miamihome';
import LasVegasHome from '../src/components/LasVegas/lasvegashome';
import PortlandHome from '../src/components/Portland/portlandhome';
import CheckoutData from './components/Booking/CheckoutData';
import GlobalState from '../src/components/BookingState/BookingState'

function App() {
    const [state, setState] = useState({}); 
        return (
            <GlobalState.Provider value={[state, setState]}>
            <div className="styleAll">
                <Layout>
                <Switch>
        <Route exact path="/"
        component={AllHotelList}/>
        <Route path="/sandiego"
        component={SanDiegoHome}/>
        <Route path="/seattle"
        component={SeattleHome}/>
        <Route path="/miami"
        component={MiamiHome}/>
        <Route path="/lasvegas"
        component={LasVegasHome}/>
        <Route path="/portland"
        component={PortlandHome}/>
        <Route path="/checkout"
        component={CheckoutData}/>
    </Switch>
                </Layout>
            </div>
            </GlobalState.Provider>
        );
}

export default App;


// import React, { Component } from 'react';

// //import Aux from './hoc/Aux';
// // import './Layout.css';
// import Toolbar from './components/Toolbar';
// import SideDrawer from './components/NavigationItems/SideDrawer';
// import Footer from './components/Footer/footer';
// import AllHotelList from './components/HomePage/HomePage';

// class App extends Component {
//     state = {
//         showSideDrawer: false
//     }

//     sideDrawerClosedHandler = () => {
//         this.setState( { showSideDrawer: false } );
//     }

//     sideDrawerToggleHandler = () => {
//         this.setState( ( prevState ) => {
//             return { showSideDrawer: !prevState.showSideDrawer };
//         } );
//     }

//     render () {
//         return (
//     <React.Fragment>
//         <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
//                 <SideDrawer
//                     open={this.state.showSideDrawer}
//                     closed={this.sideDrawerClosedHandler} />
//                 <main className="Content">
//                     <AllHotelList/>
//                     {this.props.children}
//                 </main>
//                 <Footer/>
//     </React.Fragment>
// )
// }
// }

// export default App;