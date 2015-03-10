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
			var imageMagick = gm.subClass({ imageMagick: true });

			var color = param.color || 'black';
			imageMagick(file.contents, file.path)
				.command('convert')
				.in('-background', color)
				.in('-shadow', '100x0+0+0')
				.toBuffer(function(err, buffer) {
					file.contents = buffer;
					return callback(null, file);
				});
		}
	}

	return through.obj(imageSilhouette);
};
