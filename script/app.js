// Write your code here!
var imgSelect = $("img");

 $("div.overlay").on("click", function(){
            
            $(this).css('display','none');
          
        });

imgSelect.each(function(){
    
    var $img = $(this);
    
    $img.on("click", function(){
        
        var $url = $(this).attr("src");
        var $alt = $(this).attr("alt");
        
        $("div.overlay").css('display','inline-flex');
     //   $("div.overlay-img").append('<img src="'+$url+'"><p>'+$alt+'</p>');
        $("p.overlay-text").text($alt);
        $("img.overlay-img").attr("src", $url);
       
    });
});