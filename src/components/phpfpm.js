import React from 'react'

export default (props) => {
 return <div className="animated fadeInRight">
  <span className="clearfix">
    location ~ \.php$ {'{'}
  </span>
  <span className="clearfix">
    try_files $uri / index.php = 404;
  </span>
  <span className="clearfix">
    fastcgi_split_path_info ^ (. + \.php)(/.+)$;
  </span>
  <span className="clearfix">
    fastcgi_pass unix : /var/run/php/php7.0-fpm.sock;
  </span>
  <span className="clearfix">
    fastcgi_index index.php;
  </span>
  <span className="clearfix">
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
  </span>
  <span className="clearfix">
    include fastcgi_params;
  </span>
  <span className="clearfix">
    {'}'}
  </span>
</div>
}