'use strict';


module.exports = function () {
	return process.env.HTTPS_PROXY ||
		process.env.https_proxy ||
		process.env.HTTP_PROXY ||
		process.env.http_proxy ||
		process.env.ALL_PROXY ||
		process.env.all_proxy ||
		process.env.npm_config_https_proxy ||
		process.env.npm_config_proxy ||
		null;
};
