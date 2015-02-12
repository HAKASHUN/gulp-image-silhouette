# gulp-image-silhouette

> image-silhouette plugin for [gulp](https://github.com/wearefractal/gulp)

![gulp-image-silhouette](https://cloud.githubusercontent.com/assets/1150412/6162386/728b7e66-b2c5-11e4-813a-094b34dfa851.png)

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
Possible values: `black`, `white`

The Silhouette color for image.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
