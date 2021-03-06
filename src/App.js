import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import _ from 'lodash';
import Cookie from 'js-cookie';
import Gzip from './components/gzip';
import Cache from './components/cache';
import Https from './components/https';
import Root from './components/root';
import Website from './components/website';
import WWW from './components/www';
import Http2Https from './components/http2https';
import Fpm from './components/phpfpm';
import DisableLog from './components/disable-log';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {};
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidUpdate(){
    Cookie.set('state',this.state);
  }
  componentDidMount(){
    Cookie.get('state') && this.setState(JSON.parse(Cookie.get('state')))
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
                        <input className="form-check-input" checked={this.state.gzip} onClick={()=>this.setState({gzip: !this.state.gzip})} type="checkbox"/> Gzip support
                      </label>
                    </div>
                    {this.state.gzip && <div>
                    <div className="form-group">
                        <input className="form-control" defaultValue={this.state.gzip_level || 1}  onChange={(event)=>this.setState({gzip_level: event.target.value})} type="number" max="9" min="1" placeholder="Compression level"/> 
                    </div>
                    <div className="form-group">
                        <input className="form-control" defaultValue={this.state.gzip_min_length || 256} onChange={(event)=>this.setState({gzip_min_length: event.target.value})} type="number" placeholder="Gzip min length"/> 
                    </div>
                    </div>}
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.https} onClick={()=>this.setState({https: !this.state.https})} type="checkbox"/> HTTPs Support
                      </label>
                    </div>
                    {this.state.https && <div className="animated slideInLeft">
                    <div className="form-group">
                        <input className="form-control" value={this.state.https_fullChain} onChange={(event)=>this.setState({https_fullChain: event.target.value})} type="text" placeholder="Path to full chain"/> 
                    </div>
                    <div className="form-group">
                        <input className="form-control" value={this.state.https_privKey} onChange={(event)=>this.setState({https_privKey: event.target.value})} type="text" placeholder="Path to priv key"/> 
                    </div>
                    <div className="form-group">
                        <input className="form-control" value={this.state.https_include} onChange={(event)=>this.setState({https_include: event.target.value})} type="text" placeholder="Path to optional config"/> 
                    </div>
                    </div>}
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.http2https} onClick={()=>this.setState({http2https: !this.state.http2https})} type="checkbox"/> HTTP to HTTPs
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.cache} onClick={()=>this.setState({cache: !this.state.cache})} type="checkbox"/> Cache Support
                      </label>
                    </div>
                     <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.phpfpm} onClick={()=>this.setState({phpfpm: !this.state.phpfpm})} type="checkbox"/> PHP FPM
                      </label>
                    </div>
                     <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.disable_log} onClick={()=>this.setState({disable_log: !this.state.disable_log})} type="checkbox"/> Disable Log
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.www === 'www'} onClick={()=>this.setState({www: 'www'})} name="www" type="radio"/> www to non-www
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.www === 'non-www'} onClick={()=>this.setState({www: 'non-www'})} name="www" type="radio"/> non-www to www
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" checked={this.state.www === 'both'}   onClick={()=>this.setState({www: 'both'})} name="www" type="radio"/> non-www && www
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
              { this.state.cache && <Cache />}
              { this.state.https && <Https paths={_.pick(this.state,['https_fullChain', 'https_include', 'https_privKey'])} />}
              { this.state.http2https && <Http2Https />}
              { this.state.www && <WWW type={this.state.www}/>}
              { this.state.phpfpm && <Fpm/>}
              { this.state.root && <Root dir={this.state.root} />}
              { this.state.website && <Website name={this.state.website} />}
              { this.state.disable_log && <DisableLog />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
