var fs = require('fs');
var gulp = require('gulp');
var aglio = require('gulp-aglio');

srcFolder = './'
distFolder = './'

// Aglio Task
gulp.task('dist', function () {
	gulp.src(distFolder + '/apiary.apib')
		.pipe(aglio({ template: 'default', themeFullWidth: 'true', themeTemplate: 'triple' }))
		.pipe(gulp.dest(distFolder));
});

// Watches
gulp.task('watch', function() {
	gulp.watch([distFolder + '/hci-open-api.apib'], ['aglio']);
});

