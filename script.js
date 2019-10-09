$('input[type="range"]').change(function() {
    
    var $value = parseFloat($(this).val());
    var $min = parseFloat($(this).attr('min'));
    var $max = parseFloat($(this).attr('max'));

    // Calculate the range value as percentage
    calc = 100 * ($value-$min) / ($max-$min);  
    
    // Update the track runner
    $('.runner').animate({width: calc + '%'});
    
});

// FORM VALIDATION
let questionOne = document.querySelectorAll('.form-q1--input');
let questionTwo = document.getElementById('q2Input');
let questionThree = document.querySelectorAll('.form-q3--input');
let checkboxes = document.querySelectorAll('input');


  for(let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('input', function(e){
      if($('#testForm').find('input[name=q1]:checked').length > 0 && $('#testForm').find('input[name=q3]:checked').length > 0 && $('#q2Input').val().length > 3){
        document.getElementById('submitBtn').removeAttribute("disabled", "");
        document.getElementById('submitInfo').classList.add('hidden');
      }else{
        document.getElementById('submitBtn').setAttribute("disabled", "");
        document.getElementById('submitInfo').classList.remove('hidden');
      }
    })
  }

