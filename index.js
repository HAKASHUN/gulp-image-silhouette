var through = require("through2"),
	gutil = require("gulp-util"),
	gm = require('gm');

module.exports = function (param) {
	"use strict";

	param = param || {};

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function imageSilhouette(file, enc, callback) {
		/*jshint validthis:true*/
		var self = this;

		// Do nothing if no contents
		if (file.isNull()) {
			self.push(file);
			return callback();
		}

		if (file.isStream()) {

			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			self.emit("error",
				new gutil.PluginError("gulp-image-silhouette", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

			var outline = gm(file.contents, file.path).modulate(0);

			if(param.color === 'white') {
				outline
					.stream(function(err, stdout, stderr) {
						if(err) {
							// accepting streams is optional
							self.emit("error",
								new gutil.PluginError("gulp-image-silhouette", "Failed getting image as stream."));
							return callback();
						}
						gm(stdout)
							.negative()
							.toBuffer(function(err, buffer) {
								file.contents = buffer;
								return callback(null, file);
							});
					});
			} else {
				outline
					.toBuffer(function(err, buffer) {
						file.contents = buffer;
						return callback(null, file);
					});
			}

		}
	}

	return through.obj(imageSilhouette);
};
