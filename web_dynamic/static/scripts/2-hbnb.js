$(document).ready(function () {
    let amenities = {};
    $('input[type = "checkbox"]').on('change', function () {
        if ($(this).is(':checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        $('.amenities h4').text(Object.values(amenities).join(', '));
     
    })

    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function(data)
    {
        if (data.status == "OK")
        {
            $('div#api_status').addClass('available');
        }
        else
        {
            $('div#api_status').removeClass('available');
        }
    }
)

})
