import React from 'react'

export default (props) =>{
return <div className="animated fadeInRight">
    <span className="clearfix">
        gzip on;
    </span>
    <span className="clearfix">
        gzip_http_version 1.1;
    </span>
    <span className="clearfix">
        gzip_comp_level 5;
    </span>
    <span className="clearfix">
        gzip_min_length 256;
    </span>
    <span className="clearfix">
        gzip_proxied any;
    </span>
    <span className="clearfix">
        gzip_vary on;
    </span>
    <span className="clearfix">
        gzip_types
    </span>
    <span className="clearfix">
        application / javascript
    </span>
    <span className="clearfix">
        application / json
    </span>
    <span className="clearfix">
        text / css
    </span>
    <span className="clearfix">
        text / plain;
    </span>
</div>
}