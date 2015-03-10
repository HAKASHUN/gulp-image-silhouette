# gulp-image-silhouette

> image-silhouette plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-image-silhouette` as a development dependency:

```shell
npm install --save-dev gulp-image-silhouette
```

Then, add it to your `gulpfile.js`:

```javascript
var image-silhouette = require("gulp-image-silhouette");

gulp.src("./src/*.png")
	.pipe(image-silhouette({
		color: 'white'
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### image-silhouette(options)

#### options.color
Type: `String`  
Default: `black`

The Silhouette color for image.

Ex. `rgb(0, 0, 0)`, `#CCCCCC`


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
