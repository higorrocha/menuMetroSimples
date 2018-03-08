$(function () {
    var maiorLinha = 0;
    $(".container .linha").each(function () {
        var larguraLinha = 0;
        $(this).children(".bloco").each(function () {
            larguraLinha += $(this).width();
            larguraLinha += 2*parseInt($(this).css("margin-right").toString().replace("px", ""));
        });
        if (larguraLinha > maiorLinha)
            maiorLinha = larguraLinha+5;
    });
    $(".container").css("width", maiorLinha.toString() + "px");
    
    $(".bloco").mousedown(function () {
        $(this).addClass("corSelecionada");
    });
    
    $(".bloco").mouseup(function () {
        $(this).removeClass("corSelecionada");
    });
    $(".bloco").mouseleave(function () {
        $(this).removeClass("corSelecionada");
    });
});
