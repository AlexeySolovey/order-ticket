$('#additional-services-button').click(function(){
    $(this).hide();
    $('#order-first-step').hide();
    $('#order-second-step').fadeIn('slow');
});


// ============== add order-footer-eat ========
    let buttonCountMinus = document.getElementById("buttonCountMinus");
    let count = document.getElementById("buttonCountNumber");
    let count2 = document.getElementById("num");
    let number = 1;
    let price = 485;

    buttonCountPlus.onclick = function() {
        if (number <= 9 ) {
            number++;
            count.innerHTML = number;
            count2.value = number * price;
        }
    };

    buttonCountMinus.onclick = function() {
    if (number >= 2) {
        number--;
        count.innerHTML = number;
        count2.value = number * price;
        }
    }
// ============================================