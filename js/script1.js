// var imageArray =[
//     "image/images(1)",
//     "image/images(2)",
//     "image/images(3)",
//     "image/images(4)",
//     "image/images(5)"
//     ];
    
//         function assignUrl(img_num)
//         {
//             return "http://lokeshdhakar.com/projects/lightbox2/img/demopage/" + imageArray[img_num];
//         }
        
//         $(function() {
//             for (var i = 0; i < imageArray.length; i++){
//                 var div = $("<a/>").attr("href",assignUrl(i)).attr("data-lightbox","imageGallery");
//                 div.append($("<img/>").attr("src",assignUrl(i)).attr("width","20%").attr("height","20%"));
//                 console.log($);
//                 $(".gallery").append(div);    
//             }
//             $('a[rel="lightbox"]').lightBox();
//         });




$("input").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("input").after(img);
    }
});

