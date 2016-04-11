var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('javascript',function(){
	return gulp.src('./main.js')
				.pipe(reload({stream:true}))
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*.html', 'css/*.css'], {cwd: './'}, reload);
  gulp.watch('js/*.js', ['javascript']);
});
