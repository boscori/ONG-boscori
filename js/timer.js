var intervalID, count;

function start() {
    count = 0;
    intervalID = setInterval(function () {
        count += 1;
        $('.counter').html(count);
    }, 200);
}

function stop() {
    clearInterval(intervalID);
}

$('.start').click(start);
$('.pause').click(stop);


