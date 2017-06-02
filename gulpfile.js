var gulp = require("gulp");

gulp.task("coyp-index",function(){
	
	gulp.src("index.html").pipe(gulp.dest("dist"));
})

gulp.task("watch",function(){
	gulp.watch("index.html",["coyp-index"]);
})