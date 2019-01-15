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


function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

previewFile(); 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

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