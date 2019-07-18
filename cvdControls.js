$(function () {
    $(".controlgroup").controlgroup()
    $(".controlgroup-vertical").controlgroup({
        "direction": "vertical"
    });
});
// get selection
$('.colors input[type=radio]').on('change', function () {
    console.log(this.value);
});
$("input:radio[name='thename']").each(function (i) {
    this.checked = false;
});
$(document).ready(function () {
    $("#txtAge").focus();
    $("#txtAge").tooltip({title: "Please enter an age between 20 and 79", placement: "bottom", trigger: "manual"});
    $("#sexMark").tooltip({title: "Please choose either Male or Female", placement: "bottom", trigger: "manual"});
    $("#raceMark").tooltip({title: "Please choose White, African American, Hispance or Other", placement: "bottom", trigger: "manual"});
    $("#BP_Sys").tooltip({title: "Please enter a systolic blood pressure between 90 and 200 mm HG", placement: "right", trigger: "manual"});
    $("#BP_Dia").tooltip({title: "Please enter a diastolic blood pressure between 60 and 130 mm HG", placement: "right", trigger: "manual"});
    $("#TotChol").tooltip({title: "Please enter total cholesterol between 130 and 320 mg/dL", placement: "bottom", trigger: "manual"});
    $("#HDL").tooltip({title: "Please enter HDL cholesterol between 20 and 100 mg/dL", placement: "bottom", trigger: "manual"});
    $("#LDL").tooltip({title: "Please enter LDL cholesterol between 30 and 300 mg/dL", placement: "bottom", trigger: "manual"});
    $("#fpGluc").tooltip({title:"Please enter fasting glucose between 60 snd 150 mg/dL",placement: "bottom",trigger: "manual"});
    $("#alAmint").tooltip({title: "Please enter an ALT value between 7 and 56 IU/L", placement: "bottom",trigger:"manual"});
    $("#creatPhos").toolTip({title: "Please enter a creatinine phosphokinase value between 20 and 200 IU/L",placement:"bottom",trigger:"manual"});
    $("#serK").toolTip({title: "Please enter a serum potassium level between 2.6 and 6 mmol/L",placement:"bottom",trigger:"manual"});
    $("#serCreat").toolTip({title: "Please enter a serum creatinine level between 0.5 and 1.2 mg/dL",placement:"bottom",trigger:"manual"});
    $("#urAlb").toolTip({title: "Please enter a urine albumin value between 0 and 300 mg/DL",placement: "bottom",trigger:"manual"});
    $("#A1C").toolTip({title: "Please enter an A1C value between 4.6 and 7.5 mmol/mol",placement: "bottom",trigger:"manual"});
    $(".diabetesFields").hide();
    /*$('#myForm').on('submit', function(e){
     e.preventDefault();
     this.submit();
     calc_risk();
     });*/
    $('#sub').on('click', function (event) {
        var isvalidate = $("#myForm")[0].checkValidity();
        if (isvalidate) {
            event.preventDefault();
            $('#message').html('Your score is: ' + calc_risk());
            $('#myModal').modal('show');
        }
        else
        {
            var input = $("#txtAge");
            if ((parseInt(input.val()) < 20 || parseInt(input.val()) > 79) || ($(input).val() === ''))
            {
                $(input).tooltip("show");
                input.removeClass("valid").addClass("invalid");
                $(input).focus();


            }
            else
            {
                $(input).tooltip("hide");
                input.removeClass("invalid").addClass("valid");

                if (($("input[name = 'Sex']:checked").val() != 'Male') && ($("input[name = 'Sex']:checked").val() != 'Female'))
                {
                    $("#sexMark").tooltip("show");
                    $("#Sex").focus();
                }
                else
                {
                    $("#sexMark").tooltip("hide");
                    if (($("input[name = 'Race']:checked").val() != 'White') && ($("input[name = 'Race']:checked").val() != 'AfrAm')
                            && ($("input[name = 'Race']:checked").val() != 'Hisp') && ($("input[name = 'Race']:checked").val() != 'Other'))
                    {
                        $("#raceMark").tooltip("show");
                        $("#Race").focus();
                    }
                    else
                    {
                        $("#raceMark").tooltip("hide");
                        if (($("input[name = 'Diabetes']:checked").val() != 'Yes') && ($("input[name = 'Diabetes']:checked").val() != 'No'))
                        {
                            $("#diabMark").tooltip("show");
                            $("#diab").focus();
                        }
                        else
                        {
                            $("#diabMark").tooltip("hide");
                            if (($("input[name = 'Smoker']:checked").val() != 'Current') && ($("input[name = 'Smoker']:checked").val() != 'Never'))
                            {
                                $("#smokeMark").tooltip("show");
                                $("#smoker").focus();
                            }
                            else
                            {
                                $("#smokeMark").tooltip("hide");
                                if (($("input[name = 'Hypertension']:checked").val() != 'Yes') && ($("input[name = 'Hypertension']:checked").val() != 'No'))
                                {
                                    $("#hyperMark").tooltip("show");
                                    $("#Hypertension").focus();
                                }
                                else
                                {
                                    $("#hyperMark").tooltip("hide");
                                    if (($("input[name = 'Statin']:checked").val() != 'Yes') && ($("input[name = 'Statin']:checked").val() != 'No'))
                                    {
                                        $("#statinMark").tooltip("show");
                                        $("#Statin").focus();
                                    }
                                    else
                                    {
                                        $("#statinMark").tooltip("hide");
                                        if (!(bpSys_val()))
                                        {
                                            $("#bpSys").tooltip("show");
                                            $("#bpSys").focus();
                                        }
                                        else
                                        {
                                             $("#bpSys").tooltip("hide");
                                             
                                        }
                                        
                                    }
                                }
                            }
                        }





                    }

                }

            }
        }
    });
    $("#txtAge").blur(function () {
        var input = $(this);
        //alert(parseInt(input.val()));
        //var error_element=$(this).next();

        //error_element.addClass('error_show').removeClass('error');

        if ((parseInt(input.val()) < 20 || parseInt(input.val()) > 79) || ($(this).val() === ''))
        {
            $(this).tooltip("show");
            input.removeClass("valid").addClass("invalid");
            $(this).focus();
        }
        else
        {
            $(this).tooltip("hide");
            input.removeClass("invalid").addClass("valid");
            $("#Sex").focus();

            //  alert(error_element.val());
            // error_element.removeClass("error").addClass("error_show"); 
        }
        /* else
         {
         input.removeClass("invalid").addClass("valid");
         error_element.removeClass("error_show").addClass("error");
         }*/
    });

    $("input[name='Sex']").change(function () {
        $("#sexMark").tooltip("hide");
        $("#Race").focus();
    });

    $("input[name='Race']").change(function () {
        $("#raceMark").tooltip("hide");
        $("#Diabetes").focus();
    });
    $("input[name='Diabetes']").change(function () {
        if ($("input[name = 'Diabetes']:checked").val() === "Yes")
        {
            $(".diabetesFields").show();
            $(".diabetesFields").attr('required', '');
        }
        else
        {
            $(".diabetesFields").hide();
            $(".diabetesFields").removeAttr('required');
        }
    })

    $("#BP_Sys").blur(function () {
        bpSys_val();
    });
    $("#BP_Dia").blur(function () {
        var input = $(this);
        //alert(parseInt(input.val()));
        //var error_element=$(this).next();

        //error_element.addClass('error_show').removeClass('error');
        if (parseInt(input.val()) < 60 || parseInt(input.val()) > 130)
        {
            $(this).tooltip("show");
            input.removeClass("valid").addClass("invalid");
            $(this).focus();
        }
        else
        {
            $(this).tooltip("hide");
            input.removeClass("invalid").addClass("valid");
        }
    });
    $("#TotChol").blur(function () {
        var input = $(this);
        //alert(parseInt(input.val()));
        //var error_element=$(this).next();

        //error_element.addClass('error_show').removeClass('error');
        if (parseInt(input.val()) < 130 || parseInt(input.val()) > 320)
        {
            $(this).tooltip("show");
            input.removeClass("valid").addClass("invalid");
            $(this).focus();
        }
        else
        {
            $(this).tooltip("hide");
            input.removeClass("invalid").addClass("valid");
        }
    });
    $("#HDL").blur(function () {
        var input = $(this);
        //alert(parseInt(input.val()));
        //var error_element=$(this).next();

        //error_element.addClass('error_show').removeClass('error');
        if (parseInt(input.val()) < 20 || parseInt(input.val()) > 100)
        {
            $(this).tooltip("show");
            input.removeClass("valid").addClass("invalid");
            $(this).focus();
        }
        else
        {
            $(this).tooltip("hide");
            input.removeClass("invalid").addClass("valid");
        }
    });
    $("#LDL").blur(function () {
        var input = $(this);
        //alert(parseInt(input.val()));
        //var error_element=$(this).next();

        //error_element.addClass('error_show').removeClass('error');
        if (parseInt(input.val()) < 30 || parseInt(input.val()) > 300)
        {
            $(this).tooltip("show");
            input.removeClass("valid").addClass("invalid");
            $(this).focus();
        }
        else
        {
            $(this).tooltip("hide");
            input.removeClass("invalid").addClass("valid");
        }
    });
});
function bpSys_val() {
        var input = $("#BP_Sys");

       if (parseInt(input.val()) < 90 || parseInt(input.val()) > 200 || input.val()==="")
    {
          
        $("#BP_Sys").tooltip("show");
        $("#BP_Sys").removeClass("valid").addClass("invalid");
        $("#BP_Sys").focus();
        return false;
    }
    else
    {
        $("#BP_Sys").tooltip("hide");
        $("#BP_Sys").removeClass("invalid").addClass("valid");
        return true;
    }
}

function bpDia_val() {
           var input = $("#BP_Dia");

       if (parseInt(input.val()) < 60 || parseInt(input.val()) > 130 || input.val()==="")
    {
          
        $("#BP_Dia").tooltip("show");
        $("#BP_Dia").removeClass("valid").addClass("invalid");
        $("#BP_Dia").focus();
        return false;
    }
    else
    {
        $("#BP_Dia").tooltip("hide");
        $("#BP_Dia").removeClass("invalid").addClass("valid");
        return true;
    }
}

function totChol_val(){
       var input = $("#TotChol");

       if (parseInt(input.val()) < 130 || parseInt(input.val()) > 320 || input.val()==="")
    {
          
        $("#TotChol").tooltip("show");
        $("#TotChol").removeClass("valid").addClass("invalid");
        $("#TotChol").focus();
        return false;
    }
    else
    {
        $("#TotChol").tooltip("hide");
        $("#TotChol").removeClass("invalid").addClass("valid");
        return true;
    }
}

function HDL_Val(){
        var input = $("#HDL");

       if (parseInt(input.val()) < 20 || parseInt(input.val()) > 100 || input.val()==="")
    {
          
        $("#HDL").tooltip("show");
        $("#HDL").removeClass("valid").addClass("invalid");
        $("#HDL").focus();
        return false;
    }
    else
    {
        $("#HDL").tooltip("hide");
        $("#HDL").removeClass("invalid").addClass("valid");
        return true;
    }
}

function LDL_Val(){
      var input = $("#LDL");

       if (parseInt(input.val()) < 30 || parseInt(input.val()) > 300 || input.val()==="")
    {
          
        $("#LDL").tooltip("show");
        $("#LDL").removeClass("valid").addClass("invalid");
        $("#LDL").focus();
        return false;
    }
    else
    {
        $("#LDL").tooltip("hide");
        $("#LDL").removeClass("invalid").addClass("valid");
        return true;
    }
}
