/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	gulp = require('gulp'),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	imageSilhouette = require("../");

describe("gulp-image-silhouette", function () {

	var expectedFile = new gutil.File({
		path: "test/expected/octcat.png",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/octcat.png")
	});

	it("should produce expected file via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/octcat.png",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/octcat.png")
		});

		var stream = imageSilhouette({
			color: 'white'
		});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {
			should.exist(newFile);
			should.exist(newFile.contents);

            String(newFile.contents).should.equal(String(expectedFile.contents));
			done();
		});


		stream.write(srcFile);
		stream.end();
	});

	it("should error on stream", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/octcat.png",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.createReadStream("test/fixtures/octcat.png")
		});

		var stream = imageSilhouette();

		stream.on("error", function(err) {
			should.exist(err);
			done();
		});

		stream.on("data", function (newFile) {
			newFile.contents.pipe(es.wait(function(err, data) {
				done(err);
			}));
		});

		stream.write(srcFile);
		stream.end();
	});

});
