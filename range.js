$('input[type="range"]').change(function() {
    
    var $value = parseFloat($(this).val());
    var $min = parseFloat($(this).attr('min'));
    var $max = parseFloat($(this).attr('max'));

    // Calculate the range value as percentage
    calc = 100 * ($value-$min) / ($max-$min);  
    
    // Update the track runner
    $('.runner').animate({width: calc + '%'});
    
});