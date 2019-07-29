window.onload = function () {
    $(".submit").on("click", front);
    return
};

var place = -1;
var left = 15;
var timer;
var wrong;
var right;
var answer;

function countdown() {
    left--;
    $("#titlebox").text(left);
    if (left === 0) {
        console.log("TIME UP");
        clearInterval(timer);
        timeup();
    }
}

function next() {
    left = 15;
    place++;
    console.log(place, right, wrong)
    if (place === 0) {
        mid1();
    }
    else if (place === 1) {
        mid2();
    }
    else if (place === 2) {
        mid3();
    }
    else if (place === 3) {
        mid4();
    }
    else if (place === 4) {
        end();
    }
}

function fail() {
    $("<h4>").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/rip.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><h4 class = 'goaway'>wrong!</h4>");
    clearInterval(timer);
    wrong++;
    $("#titlebox").text(0);
    $("#titlebox").after("<p class = log>answer: " + answer + "</p>")
    setTimeout(next, 5000);
}

function pass() {
    $("<h4>").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/dealwithit.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><h4 class = 'goaway'>oh yeah</h4>")
    clearInterval(timer);
    right++;
    $("#titlebox").text(15);
    setTimeout(next, 5000);
}

function timeup() {
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/statefair.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><h4 class = 'goaway'>time up!</h4>");
    clearInterval(timer);
    wrong++;
    $("#titlebox").text(0);
    $("#titlebox").after("<p class = log>answer: " + answer + "</p>")
    setTimeout(next, 5000);
}

function front() {
    wrong = 0;
    right = 0;
    left = 15;
    answer = ("1869");
    $(".form").remove();
    $(".log").remove();
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".ben").after("<img src='assets/images/busterkeaton.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><div class = form><h4>The first transcontinental railroad in the US, connecting the east and the west coasts, was completed in what year?</h4><a class='submit c1' href='#'>1525</a><a class='submit c2' href='#'>1869</a><a class='submit c3' href = '#'>2020</a><a class='submit c4' href = '#'>2004</a></div>");
    $(".c1").on("click", fail);
    $(".c2").on("click", pass);
    $(".c3").on("click", fail);
    $(".c4").on("click", fail);
    timer = setInterval(countdown.bind(), 1000);
}

function mid1() {
    answer = ("Japan");
    $(".log").remove();
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/n700.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><div class = form><h4>What country first invented the bullet train after world war II?</h4><a class='submit c1' href='#'>France</a><a class='submit c2' href='#'>USA</a><a class='submit c3' href = '#'>China</a><a class='submit c4' href = '#'>Japan</a></div>");
    $(".c1").on("click", fail);
    $(".c2").on("click", fail);
    $(".c3").on("click", fail);
    $(".c4").on("click", pass);
    timer = setInterval(countdown.bind(), 1000);
}

function mid2() {
    answer = ("Australia")
    $(".log").remove();
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/yoyo.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><div class = form><h4>What country recently has been known for having the longest trains in the world?</h4><a class='submit c1' href='#'>Australia</a><a class='submit c2' href='#'>USA</a><a class='submit c3' href = '#'>Russia</a><a class='submit c4' href = '#'>India</a></div>");
    $(".c1").on("click", pass);
    $(".c2").on("click", fail);
    $(".c3").on("click", fail);
    $(".c4").on("click", fail);
    timer = setInterval(countdown.bind(), 1000);
}

function mid3() {
    answer = ("pennsylvania RR")
    $(".log").remove();
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/santa fe.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><div class = form><h4>The largest corperation in the world in 1882 was regarded as which railroad?</h4><a class='submit c1' href='#'>TGV</a><a class='submit c2' href='#'>Amtrak</a><a class='submit c3' href = '#'>Pennsylvania RR</a><a class='submit c4' href = '#'>NYC Subway</a></div>");
    $(".c1").on("click", fail);
    $(".c2").on("click", fail);
    $(".c3").on("click", pass);
    $(".c4").on("click", fail);
    timer = setInterval(countdown.bind(), 1000);
}

function mid4() {
    answer = ("Alaska RR")
    $(".log").remove();
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/russian.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><div class = form><h4>What US railway runs up the highest mountain in North America?</h4><a class='submit c1' href='#'>BNSF</a><a class='submit c2' href='#'>Disney Monorail</a><a class='submit c3' href = '#'>Alaska RR</a><a class='submit c4' href = '#'>LA Metrolink</a></div>");
    $(".c1").on("click", fail);
    $(".c2").on("click", fail);
    $(".c3").on("click", pass);
    $(".c4").on("click", fail);
    timer = setInterval(countdown.bind(), 1000);
}

function end() {
    answer = null;
    clearInterval(timer);
    $(".log").remove();
    $(".goaway").remove();
    $(".submit").remove();
    $(".gif").remove();
    $(".form").remove();
    $(".ben").after("<img src='assets/images/dude.gif' class = 'gems gif'><br class = 'goaway'><br class = 'goaway'><div class = form><h4>How did you do?</h4><a class='submit c1' href='#'>Play Again</a></div>");
    $("#titlebox").after("<p class = log>correct: " + right + "</p>")
    $("#titlebox").after("<p class = log>failed: " + wrong + "</p>")
    place = -1;
    $(".c1").on("click", front);
    $("#titlebox").text(00);
}