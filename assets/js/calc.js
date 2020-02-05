$().ready(function(){
    $("#form_calc").validate
    ({
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
            let pesoch = Number($("#pesoch").val());
            
            let notacn = Number($("#notacn").val());
            let pesocn = Number($("#pesocn").val());

            let notalc = Number($("#notalc").val());
            let pesolc = Number($("#pesolc").val());

            let notamt = Number($("#notamt").val());
            let pesomt = Number($("#pesomt").val());

            let notard = Number($("#notard").val());
            let pesord = Number($("#pesord").val());

            let somapesos = pesoch + pesocn + pesolc + pesomt + pesord;
            let media = ((notach * pesoch) + (notacn * pesocn) + (notalc * pesolc) + (notamt * pesomt) + (notard * pesord)) / somapesos;
            $("#resultado").val(media);
            $("html, body").animate({scrollTop:$("#resultado-title").offset().top}, 800);
        }
    });
    $("input").click(function () 
    {
        $(this).select();
    });
    $("#copyToClipboard").click(function ()
    {
        $("#resultado").select();
        // $("#resultado").setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Conteúdo Copiado!");
    });
})