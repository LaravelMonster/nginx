import React from 'react'

export default (props) => {
    return <div className="animated fadeInRight">
        <span className="clearfix">
            listen 443 ssl; 
        </span>
        <span className="clearfix">
            ssl_certificate {props.fullchain};
        </span>
        <span className="clearfix">
            ssl_certificate_key {props.privkey}; 
        </span>
        <span className="clearfix">
            include {props.include}; 
        </span>
    </div>
}