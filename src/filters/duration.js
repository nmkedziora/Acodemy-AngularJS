angular.module('app')
    .filter('durationTime', function() {
        return function(time) {
            var minutes = 10;
            var seconds = time / 10;

            minutes = parseInt(parseInt(time / 1000) / 60);
            seconds = parseInt(time / 1000) % 60;

            return minutes + ":" + seconds;
        };
    });
