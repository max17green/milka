$(function() {
    // Подсказки для выбора региона
    $(document).on('input propertychange', '.hints_region_input', function() {
        var data_search = $.trim($(this).val());
        
        $('.hints_region_value, .hints_region_value_data').val('');
        
        $('.hints_city_list').html('').hide();
        $('.hints_city_value').val('');
        $('.hints_city_input').val('').attr('readonly', true);
        $('.city_div_block').hide();
        
        if (data_search.length > 2) {
            $.ajax({
                url: '/site/hints', 
                data: {data_search: data_search, type: 'region'},
                type: 'GET',
                success: function(result) {
                    $('.hints_region_list').show().html(result);
                }
            });
        }
    });
    
    // Выбор региона 
    $(document).on('click', '.hints_region_list .yandex_hints_item', function() {
        var id_json = $(this).attr('data-json');
        var region = $(this).text();
        
        if (id_json) {
            $('#error_region').hide().text('');
            
            $('.hints_region_input').val(region); // Просто вывод названия для юзера
            $('.hints_region_value').val(region); // Параметр для проверки в afterValidate
            $('.hints_region_value_data').val(id_json); // yandex geocode json данные о регионе и городе
            
            $('.hints_region_list').html('').hide();
            
            if (region.match(/(москва|севастополь|байконур|санкт петербург|санкт-петербург)+$/ig)) {
                $('.hints_city_list').html('').hide();
                $('.hints_city_value').val('');
                $('.hints_city_input').val('').attr('readonly', true);
                $('.city_div_block').hide();
            } else {
                $('.city_div_block').show();
                $('.hints_city_input').attr('readonly', false);
            }
        }
    });
    
    // Подсказки для выбора города
    $(document).on('input propertychange', '.hints_city_input', function() {
        var data_search = $('.hints_region_input').val() + ' ' + $.trim($(this).val());
        //var data_search = $.trim($(this).val());
        
        $('.hints_city_value').val('');
        
        if (data_search.length > 1) {
            $.ajax({
                url: '/site/hints', 
                data: {data_search: data_search, type: 'city'},
                type: 'GET',
                success: function(result) {
                    $('.hints_city_list').show().html(result);
                }
            });
        }
    });
    
    // Выбор города 
    $(document).on('click', '.hints_city_list .yandex_hints_item', function() {
        var id_json = $(this).attr('data-json');
        var city = $(this).attr('data-title');
        
        $('#error_city').hide().text('');
        
        $('.hints_city_input').val(city);
        $('.hints_city_value').val(city);
        $('.hints_region_value_data').val(id_json);
        
        $('.hints_city_list').html('').hide();
    });
    
    $(document).on('input propertychange', '.yandex_address_input', function() {
        var form_id = $(this).closest('div').attr('data-form-id');
        var data_search = $.trim($(this).val());
        
        $('#' + form_id + ' .yandex_address_data, #' + form_id + ' .yandex_address_id').val('');
        $('#' + form_id + ' .yandex_address_list').html('').hide();
             
        if (data_search.length > 2) {
            $.ajax({
                url: '/site/hints', 
                data: {data_search: data_search, type: 'house'},
                type: 'GET',
                success: function(result) {
                    $('#' + form_id + ' .yandex_address_list').show().html(result);
                }
            });
        }
    });
    
    $(document).on('click', '.yandex_address_list .yandex_hints_item', function() {
        var form_id = $(this).parent().parent().attr('data-form-id');
        var house = $(this).text();
        var data_json = $(this).attr('data-json');
        
        $('#' + form_id + ' .yandex_address_input').val(house);
        $('#' + form_id + ' .yandex_address_id').val(house);
        $('#' + form_id + ' .yandex_address_data').val(data_json);
        $('#' + form_id + ' .yandex_address_list').html('').hide();
    });
});