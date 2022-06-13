import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auxi from './hoc/Auxi';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import PricePredictor from './containers/PricePredictor/PricePredictor';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Reviews from './containers/Reviews/Reviews';
import * as actions from './store/actions/indexactions';


class App extends React.Component {
  // state = {
  //   area_type: '',
  //   bhk: '',
  //   bath: '',
  //   sqft: '',
  //   output: ''
  // }

  // handleChange1 = event => {
  //   this.setState({ area_type: event.target.value });
  // }
  // handleChange2 = event => {
  //   this.setState({ bhk: event.target.value });
  // }
  // handleChange3 = event => {
  //   this.setState({ bath: event.target.value });
  // }
  // handleChange4 = event => {
  //   this.setState({ sqft: event.target.value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     area_type: this.state.area_type,
  //     bhk: this.state.bhk,
  //     bath: this.state.bath,
  //     sqft: this.state.sqft
  //   };

  //   fetch("/predict", {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify({
  //       "area": user.area_type,
  //       "bhk": user.bhk,
  //       "bath": user.bath,
  //       "sqft": user.sqft
  //     })
  //   }).then(r => r.json()).then(result => {
  //     if (result) {
  //       console.log(result + "Lakhs");
  //       this.setState({ output: result });
  //     }
  //     else {
  //       console.log("not added");
  //     }
  //   })
  // }

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/price_predictor" component={PricePredictor} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      // <div>
      //   <form onSubmit={this.handleSubmit} style={{paddingTop: "5.3rem"}}>
      //     <label>
      //       Person Name:
      //       <input type="text" name="area_type" onChange={this.handleChange1} />
      //       <input type="text" name="bhk" onChange={this.handleChange2} />
      //       <input type="text" name="bath" onChange={this.handleChange3} />
      //       <input type="text" name="sqft" onChange={this.handleChange4} />
      //     </label>
      //     <button type="submit">Add</button>
      //   </form>
      //   <div>{this.state.output}</div>
      // </div>


      <Auxi>
        <Layout>
          {/* <About /> */}
          {routes}
        </Layout>

      </Auxi>

    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
