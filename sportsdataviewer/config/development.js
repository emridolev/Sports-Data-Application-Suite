/* ****************************************************************************
 * File: 		development.js
 *
 * Purpose: 	I provide development configuration data.
 *
 * Author: 		John Allen ( jallen@figleaf.com )
 *
 * Company: 	Fig Leaf Software
 *************************************************************************** */
var config = {
	appName: 'VOA Soccer Stats (development)', 
	detailedErrors: true, 
	debug: true, 
	hostname: null, 
	port: 443, 
	model: {
    	defaultAdapter: 'filesystem'
    }, 
    sessions: {
    	store: 'filesystem',
    	filename: '_session_store.json',
    	key: 'sid',
    	expiry: 14 * 24 * 60 * 60
    },
    ssl: {
        key: '/etc/apache2/SSL/voanews.com.key',
        cert: '/etc/apache2/SSL/VOANEWS.COM.crt'
    }
};

module.exports = config;