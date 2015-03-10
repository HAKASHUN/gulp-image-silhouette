# gulp-image-silhouette

> image-silhouette plugin for [gulp](https://github.com/wearefractal/gulp)

![gulp-image-silhouette](https://cloud.githubusercontent.com/assets/1150412/6162386/728b7e66-b2c5-11e4-813a-094b34dfa851.png)

### GraphicsMagick or ImageMagick
Make sure GraphicsMagick or ImageMagick is installed on your system and properly set up in your `PATH`.

Ubuntu:

```shell
apt-get install imagemagick
apt-get install graphicsmagick
```

Mac OS X (using [Homebrew](http://brew.sh/)):

```shell
brew install imagemagick
brew install graphicsmagick
```

Windows & others: 

[http://www.imagemagick.org/script/binary-releases.php](http://www.imagemagick.org/script/binary-releases.php)

Confirm that ImageMagick is properly set up by executing `convert -help` in a terminal.

## Usage

First, install `gulp-image-silhouette` as a development dependency:

```shell
npm install --save-dev gulp-image-silhouette
```

Then, add it to your `gulpfile.js`:

```javascript
var silhouette = require("gulp-image-silhouette");

gulp.src("./src/*.png")
	.pipe(silhouette({
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
