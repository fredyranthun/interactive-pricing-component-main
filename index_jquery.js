$(function() {
    // jquery script; only executes when the page is loaded;
    // declaring arrays for values of Plan, discount and number of Views
    var arrPlan = [8, 12, 16, 24, 36];

    var arrDiscount = [];

    for (var i = 0; i < arrPlan.length; i++) {
        arrDiscount.push(Math.round(arrPlan[i] * 0.75));
    }

    var arrViews = ["10K", "50K", "100K", "500K", "1M"];

    // declaring initial values for Plan and Pageviews;

    $('#finalValue').text(arrPlan[$('#slide').val()] + '$');
    $('#pageviews').text(arrViews[$('#slide').val()] + ' PAGEVIEWS');

    // functions for modifying value;

    $('#slide').on('input', function() {
        if($('#discount').is(':checked')) {
            $('#finalValue').text(arrDiscount[$('#slide').val()] + '$');
        }
        else {
            $('#finalValue').text(arrPlan[$('#slide').val()] + '$');
        }
        $('#pageviews').text(arrViews[$('#slide').val()] + ' PAGEVIEWS');
    });

    $('#discount').on('click', function() {
        if($('#discount').is(':checked')) {
            $('#finalValue').text(arrDiscount[$('#slide').val()] + '$');
        }
        else {
            $('#finalValue').text(arrPlan[$('#slide').val()] + '$');
        }
    });

    // for modifying size of slider background
    $('#slide').on('input', function(e){
        var min = e.target.min,
            max = e.target.max,
            val = e.target.value;
        
        $(e.target).css({
          'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
        });
      }).trigger('input');
});

