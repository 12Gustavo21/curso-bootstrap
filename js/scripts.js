$(document).ready(function () {

    // Progress bar
    var containerA = document.getElementById("circleA");

    var circleA = new ProgressBar.Circle(containerA, {
        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 60);
            circle.setText(value);
        }
    });

    var containerB = document.getElementById("circleB");

    var circleB = new ProgressBar.Circle(containerB, {
        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 254);
            circle.setText(value);
        }
    });

    var containerC = document.getElementById("circleC");

    var circleC = new ProgressBar.Circle(containerC, {
        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 32);
            circle.setText(value);
        }
    });

    var containerD = document.getElementById("circleD");

    var circleD = new ProgressBar.Circle(containerD, {
        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 5243);
            circle.setText(value);
        }
    });

    // On scroll

    var dataAreaOffset = $('#data-area').offset();
    var stop = 0;

    $(window).scroll(function (e) {

        var scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    // Parallax

    setTimeout(function () {

        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });

    }, 250);

});