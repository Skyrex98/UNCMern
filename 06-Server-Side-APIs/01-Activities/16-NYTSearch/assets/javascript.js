$(document).ready(function(){

    // $("#submit").on(function(e){
    //   e.preventDefault();
    //   var searchTerm=$("#search-term").val();
    //   var startYear=$("#start-year").val();
    //   var endYear=$("#end-year").val();
    // })

    $(".placeholder").on("click", function(e) {
        e.preventDefault();
      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
      url += '?' + $.param({ 'api-key': "GSi9GsigeVIg4ptW3zAz5AnxD7Z2b8TJ"});
    
    console.log(url);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
    
    console.log(result);
    
    })

    // var results = $("#submit");

    //   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //     url += '?' + $.param({
    //     'api-key': "GSi9GsigeVIg4ptW3zAz5AnxD7Z2b8TJ"
    //   });
    //   console.log(url);

    });
});  