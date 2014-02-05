/* jshint devel: true, unused: true */
/* global request, response*/

(function(wsocket) {
    'use strict';

    var config;

    config = {
        /* example of config */
        uri: 'ws://websocket.example.com',
        version: 'v1.verse',
        username: 'username',
        passwd: 'yourverysecretpassword'
    };

    wsocket.init(config);


}(wsocket));
