$(function() {
    // static
    $(document).on('click', '.errorMessage', function() {
        $(this).hide();
        $(this).parent().removeClass('error');
    });
    
    $(document).on('click', 'input', function() {
        var id = $(this).attr('id');
        $('#' + id + '_em_').hide();
        $(this).parent().removeClass('error');
    });
    
    $(document).on('change', '#Users_day, #Users_month, #Users_year', function() {
        $('#Users_birthday_em_').hide();
        $(this).closest('.error').removeClass('error');
    });
    
    $(document).on('click', '.hints_region_input', function() {
        $('#error_region').hide();
        $(this).closest('.error').removeClass('error');
    });
    
    $(document).on('click', '.hints_city_input', function() {
        $('#error_city').hide();
        $(this).closest('.error').removeClass('error');
    });
    
    $(document).on('click', '.oneimg_select', function() {
        var divblock = $(this).attr("data-div");
        $('.oneimg_' + divblock + ' .MultiFile-applied:last').trigger('click');
    });
    
    $(':input[placeholder]').placeholder();
});