$().ready(function(){
    $("#form_calc").validate({
        rules: 
        {
            notach:
            {
                required: true,
                maxlength: 4
            },
            notacn:
            {
                required: true,
                maxlength: 4
            },
            notalc:
            {
                required: true,
                maxlength: 4
            },
            notamt:
            {
                required: true,
                maxlength: 4
            },
            notard:
            {
                required: true,
                maxlength: 4
            }
            

        },
        messages:
        {
            notach: 
            {
                required: "Requerido",
                maxlength: "4 digitos no maximo",
                min: "Minimo 0",
                max: "Máximo 1000",
                number: "Somente números"
            },
            notacn: 
            {
                required: "Requerido",
                maxlength: "4 digitos no maximo",
                min: "Minimo 0",
                max: "Máximo 1000",
                number: "Somente números"
            },
            notalc: 
            {
                required: "Requerido",
                maxlength: "4 digitos no maximo",
                min: "Minimo 0",
                max: "Máximo 1000",
                number: "Somente números"
            },
            notamt: 
            {
                required: "Requerido",
                maxlength: "4 digitos no maximo",
                min: "Minimo 0",
                max: "Máximo 1000",
                number: "Somente números"
            },
            notard: 
            {
                required: "Requerido",
                maxlength: "4 digitos no maximo",
                min: "Minimo 0",
                max: "Máximo 1000",
                number: "Somente números"
            }
        },
        submitHandler: function(form)
        {
            let notach = Number($("#notach").val());
            let notacn = Number($("#notacn").val());
            let notalc = Number($("#notalc").val());
            let notamt = Number($("#notamt").val());
            let notard = Number($("#notard").val());
            let media = (notach + notacn + notalc + notamt + notard) / 5;
            $("#resultado").text(media);
            $("html, body").animate({scrollTop:$("#resultado").offset().top}, 800);
        }
    });

})