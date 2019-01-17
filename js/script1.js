
$("input").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(this.files[0]);
        $("input").after(img);//display the preview images
        
        myDropzone.on("complete", function(file) {
           myDropzone.removeFile(file);
          });
    }
});

