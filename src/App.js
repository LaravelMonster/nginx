import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import Gzip from './components/gzip';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <form action="/html/tags/html_form_tag_action.cfm">
              <fieldset className="form-group">
                <div className="row">
                  <div className="col-9">
                  <legend className="col-form-legend">Check required</legend>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({gzip: !this.state.gzip})} type="checkbox"/> Gzip support
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({https: !this.state.https})} type="checkbox"/> HTTPs Support
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({http2https: !this.state.http2https})} type="checkbox"/> HTTP to HTTPs
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({cache: !this.state.cache})} type="checkbox"/> Cache Support
                      </label>
                    </div>
                     <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({phpfpm: !this.state.phpfpm})} type="checkbox"/> PHP FPM
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({www: 'www'})} name="www" type="radio"/> www to non-www
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({www: 'non-www'})} name="www" type="radio"/> non-www to www
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" onClick={()=>this.setState({www: 'both'})} name="www" type="radio"/> non-www && www
                      </label>
                    </div>
                    <div className="form-group">
                      <input type="text" value={this.state.root} required onChange={(event)=>{this.setState({root: event.target.value})}} className="form-control form-control-md" placeholder="Root directory" />
                      <span className="form-text text-muted">For e.g. /var/www/html/laravel/public</span>
                    </div>
                    <div className="form-group">
                      <input type="text" value={this.state.website} required onChange={(event)=>{this.setState({website: event.target.value})}}  className="form-control form-control-md" placeholder="Website Url (without http:// or https://)" />
                      <span className="form-text text-muted">For e.g. example.com (no need for www.example.com)</span>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <div className="jumbotron" style={{height: '100%' }}>
              { this.state.gzip && <Gzip />}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
