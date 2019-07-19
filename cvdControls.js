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
    $("#diabMark").tooltip({title: "Please choose either yes or no", placement: "bottom", trigger: "manual"});
    $("#smokeMark").tooltip({title: "Please choose either current or never", placement: "bottom", trigger: "manual"});
    $("#hyperMark").tooltip({title: "Please choose either yes or no", placement: "bottom", trigger: "manual"});
    $("#statinMark").tooltip({title: "Please choose either yes or no", placement: "bottom", trigger: "manual"});
    $("#BP_Dia").tooltip({title: "Please enter a diastolic blood pressure between 60 and 130 mm HG", placement: "right", trigger: "manual"});
    $("#TotChol").tooltip({title: "Please enter total cholesterol between 130 and 320 mg/dL", placement: "bottom", trigger: "manual"});
    $("#HDL").tooltip({title: "Please enter HDL cholesterol between 20 and 100 mg/dL", placement: "bottom", trigger: "manual"});
    $("#LDL").tooltip({title: "Please enter LDL cholesterol between 30 and 300 mg/dL", placement: "bottom", trigger: "manual"});
    $("#fpGluc").tooltip({title: "Please enter fasting glucose between 60 snd 150 mg/dL", placement: "bottom", trigger: "manual"});
    $("#alAmint").tooltip({title: "Please enter an ALT value between 7 and 56 IU/L", placement: "bottom", trigger: "manual"});
    $("#creatPhos").tooltip({title: "Please enter a creatinine phosphokinase value between 20 and 200 IU/L", placement: "bottom", trigger: "manual"});
    $("#serK").tooltip({title: "Please enter a serum potassium level between 2.6 and 6 mmol/L", placement: "bottom", trigger: "manual"});
    $("#serCreat").tooltip({title: "Please enter a serum creatinine level between 0.5 and 1.2 mg/dL", placement: "bottom", trigger: "manual"});
    $("#urAlb").tooltip({title: "Please enter a urine albumin value between 0 and 300 mg/DL", placement: "bottom", trigger: "manual"});
    $("#A1C").tooltip({title: "Please enter an A1C value between 4.6 and 7.5 mmol/mol", placement: "bottom", trigger: "manual"});
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
        } else
        {
            if (txtAge_Val())
            {
                $("#txtAge").tooltip("hide");
                if (($("input[name = 'Sex']:checked").val() != 'Male') && ($("input[name = 'Sex']:checked").val() != 'Female'))
                {
                    $("#sexMark").tooltip("show");
                    $("#Sex").focus();
                } else
                {
                    $("#sexMark").tooltip("hide");
                    if (($("input[name = 'Race']:checked").val() != 'White') && ($("input[name = 'Race']:checked").val() != 'AfrAm')
                            && ($("input[name = 'Race']:checked").val() != 'Hisp') && ($("input[name = 'Race']:checked").val() != 'Other'))
                    {
                        $("#raceMark").tooltip("show");
                        $("#Race").focus();
                    } else
                    {
                        $("#raceMark").tooltip("hide");
                        if (($("input[name = 'Diabetes']:checked").val() != 'Yes') && ($("input[name = 'Diabetes']:checked").val() != 'No'))
                        {
                            $("#diabMark").tooltip("show");
                            $("#diab").focus();
                        } else
                        {
                            $("#diabMark").tooltip("hide");
                            if (($("input[name = 'Smoker']:checked").val() != 'Current') && ($("input[name = 'Smoker']:checked").val() != 'Never'))
                            {
                                $("#smokeMark").tooltip("show");
                                $("#smoker").focus();
                            } else
                            {
                                $("#smokeMark").tooltip("hide");
                                if (($("input[name = 'Hypertension']:checked").val() != 'Yes') && ($("input[name = 'Hypertension']:checked").val() != 'No'))
                                {
                                    $("#hyperMark").tooltip("show");
                                    $("#Hypertension").focus();
                                } else
                                {
                                    $("#hyperMark").tooltip("hide");
                                    if (($("input[name = 'Statin']:checked").val() != 'Yes') && ($("input[name = 'Statin']:checked").val() != 'No'))
                                    {
                                        $("#statinMark").tooltip("show");
                                        $("#Statin").focus();
                                    } else
                                    {
                                        $("#statinMark").tooltip("hide");
                                        if (!(bpSys_Val()))
                                        {
                                            $("#bpSys").tooltip("show");
                                            $("#bpSys").focus();
                                        } else
                                        {
                                            $("#bpSys").tooltip("hide");
                                            if (!(bpDia_Val()))
                                            {
                                                $("#bpDia").tooltip("show");
                                                $("#bpDia").focus();
                                            } else
                                            {
                                                $("#bpDia").tooltip("hide");
                                                if (!(totChol_Val()))
                                                {
                                                    $("#totChol").tooltip("show");
                                                    $("#totChol").focus();
                                                } else
                                                {
                                                    $("#totChol").tooltip("hide");
                                                    if (!(HDL_Val()))
                                                    {
                                                        $("#HDL").tooltip("show");
                                                        $("#HDL").focus();
                                                    } else
                                                    {
                                                        $("#HDL").tooltip("hide");
                                                        if (!(LDL_Val()))
                                                        {
                                                            $("#LDL").tooltip("show");
                                                            $("#LDL").focus();
                                                        } else
                                                        {
                                                            $("#LDL").tooltip("hide");
                                                            /*now check diabetic labs only if diabetes was set to yes */
                                                            if ($("input[name = 'Diabetes']:checked").val() === 'Yes')
                                                            {
                                                                /*check all diabetes fields*/
                                                                if (!(fpGluc_Val()))
                                                                {
                                                                    $("#fpGluc").tooltip("show");
                                                                    $("#fpGluc").focus();
                                                                } else
                                                                {
                                                                    $("#fpGluc").tooltip("hide");
                                                                    if (!(alAmint_Val()))
                                                                    {
                                                                        $("#alAmint").tooltip("show");
                                                                        $("#alAmint").focus();
                                                                    } else
                                                                    {
                                                                        $("#alAmint").tooltip("hide");
                                                                        if (!(creatPhos_Val()))
                                                                        {
                                                                            $("#creatPhos").tooltip("show");
                                                                            $("#creatPhos").focus();
                                                                        } else
                                                                        {
                                                                            $("#creatPhos").tooltip("hide");
                                                                            if (!(serK_Val()))
                                                                            {
                                                                                $("#serK").tooltip("show");
                                                                                $("#serK").focus();
                                                                            } else
                                                                            {
                                                                                $("#serK").tooltip("hide");
                                                                                if (!(serCreat_Val()))
                                                                                {
                                                                                    $("#serCreat").tooltip("show");
                                                                                    $("#serCreat").focus();
                                                                                } else
                                                                                {
                                                                                    $("#serCreat").tooltip("hide");
                                                                                    if (!(urAlb_Val()))
                                                                                    {
                                                                                        $("#urAlb").tooltip("show");
                                                                                        $("#urAlb").focus();
                                                                                    } else
                                                                                    {
                                                                                        $("#urAlb").tooltip("hide");
                                                                                        if (!(A1C_Val()))
                                                                                        {
                                                                                            $("#A1C").tooltip("show");
                                                                                            $("#A1C").focus();
                                                                                        } else
                                                                                        {
                                                                                            $("#A1C").tooltip("hide");
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
        if (txtAge_Val())
        {
            $("#txtAge").tooltip("hide");
            $("#Sex").focus();
        }
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
        } else
        {
            $(".diabetesFields").hide();
            $(".diabetesFields").removeAttr('required');
        }
        $("#diabMark").tooltip("hide");
    })
    $("input[name='Smoker']").change(function () {
        $("#smokeMark").tooltip("hide");
        $("#Hypertension").focus();
    });

    $("input[name='Hypertension']").change(function () {
        $("#hyperMark").tooltip("hide");
        $("#Statin").focus();
    });
    $("input[name='Statin']").change(function () {
        $("#statinMark").tooltip("hide");
        $("#BP_Sys").focus();
    });
    $("#BP_Sys").blur(function () {
        bpSys_Val();
    });
    $("#BP_Dia").blur(function () {
        bpDia_Val();
    });
    $("#TotChol").blur(function () {
        totChol_Val();
    });
    $("#HDL").blur(function () {
        HDL_Val();
    });
    $("#LDL").blur(function () {
        LDL_Val();
    });
    /*don't think that we need to check if diabetes if yes here*/
    $("#fpGluc").blur(function () {
        fpGluc_Val();
    });

    $("#alAmint").blur(function () {
        alAmint_Val();
    });

    $("#creatPhos").blur(function () {
        creatPhos_Val();
    });

    $("#serK").blur(function () {
        serK_Val();
    });

    $("#serCreat").blur(function () {
        serCreat_Val();
    });

    $("#urAlb").blur(function () {
        urAlb_Val();
    });

    $("#A1C").blur(function () {
        A1C_Val();
    });
});

function txtAge_Val() {
    var input = $("#txtAge");
    if ((parseInt(input.val()) < 20 || parseInt(input.val()) > 79) || (input.val() === ''))
    {
        $("#txtAge").tooltip("show");
        input.removeClass("valid").addClass("invalid");
        $("#txtAge").focus();
        return false;
    } else
    {
        $("#txtAge").tooltip("hide");
        input.removeClass("invalid").addClass("valid");
        return true;
    }
}
function bpSys_Val() {
    var input = $("#BP_Sys");

    if (parseInt(input.val()) < 90 || parseInt(input.val()) > 200 || input.val() === "")
    {

        $("#BP_Sys").tooltip("show");
        $("#BP_Sys").removeClass("valid").addClass("invalid");
        $("#BP_Sys").focus();
        return false;
    } else
    {
        $("#BP_Sys").tooltip("hide");
        $("#BP_Sys").removeClass("invalid").addClass("valid");
        return true;
    }
}

function bpDia_Val() {
    var input = $("#BP_Dia");

    if (parseInt(input.val()) < 60 || parseInt(input.val()) > 130 || input.val() === "")
    {

        $("#BP_Dia").tooltip("show");
        $("#BP_Dia").removeClass("valid").addClass("invalid");
        $("#BP_Dia").focus();
        return false;
    } else
    {
        $("#BP_Dia").tooltip("hide");
        $("#BP_Dia").removeClass("invalid").addClass("valid");
        return true;
    }
}

function totChol_Val() {
    var input = $("#TotChol");

    if (parseInt(input.val()) < 130 || parseInt(input.val()) > 320 || input.val() === "")
    {

        $("#TotChol").tooltip("show");
        $("#TotChol").removeClass("valid").addClass("invalid");
        $("#TotChol").focus();
        return false;
    } else
    {
        $("#TotChol").tooltip("hide");
        $("#TotChol").removeClass("invalid").addClass("valid");
        return true;
    }
}

function HDL_Val() {
    var input = $("#HDL");

    if (parseInt(input.val()) < 20 || parseInt(input.val()) > 100 || input.val() === "")
    {

        $("#HDL").tooltip("show");
        $("#HDL").removeClass("valid").addClass("invalid");
        $("#HDL").focus();
        return false;
    } else
    {
        $("#HDL").tooltip("hide");
        $("#HDL").removeClass("invalid").addClass("valid");
        return true;
    }
}

function LDL_Val() {
    var input = $("#LDL");

    if (parseInt(input.val()) < 30 || parseInt(input.val()) > 300 || input.val() === "")
    {

        $("#LDL").tooltip("show");
        $("#LDL").removeClass("valid").addClass("invalid");
        $("#LDL").focus();
        return false;
    } else
    {
        $("#LDL").tooltip("hide");
        $("#LDL").removeClass("invalid").addClass("valid");
        return true;
    }
}
function fpGluc_Val() {
    var input = $("#fpGluc");

    if (parseInt(input.val()) < 60 || parseInt(input.val()) > 150 || input.val() === "")
    {

        $("#fpGluc").tooltip("show");
        $("#fpGluc").removeClass("valid").addClass("invalid");
        $("#fpGluc").focus();
        return false;
    } else
    {
        $("#fpGluc").tooltip("hide");
        $("#fpGluc").removeClass("invalid").addClass("valid");
        return true;
    }
}

function alAmint_Val() {
    var input = $("#alAmint");

    if (parseInt(input.val()) < 7 || parseInt(input.val()) > 56 || input.val() === "")
    {

        $("#alAmint").tooltip("show");
        $("#alAmint").removeClass("valid").addClass("invalid");
        $("#alAmint").focus();
        return false;
    } else
    {
        $("#alAmint").tooltip("hide");
        $("#alAmint").removeClass("invalid").addClass("valid");
        return true;
    }
}

function creatPhos_Val() {
    var input = $("#creatPhos");

    if (parseInt(input.val()) < 20 || parseInt(input.val()) > 200 || input.val() === "")
    {

        $("#creatPhos").tooltip("show");
        $("#creatPhos").removeClass("valid").addClass("invalid");
        $("#creatPhos").focus();
        return false;
    } else
    {
        $("#creatPhos").tooltip("hide");
        $("#creatPhos").removeClass("invalid").addClass("valid");
        return true;
    }
}

function serK_Val() {
    var input = $("#serK");

    if (parseFloat(input.val()) < 2.6 || parseFloat(input.val()) > 6 || input.val() === "")
    {

        $("#serK").tooltip("show");
        $("#serK").removeClass("valid").addClass("invalid");
        $("#serK").focus();
        return false;
    } else
    {
        $("#serK").tooltip("hide");
        $("#serK").removeClass("invalid").addClass("valid");
        return true;
    }
}

function serCreat_Val() {
    var input = $("#serCreat");

    if (parseFloat(input.val()) < 0.5 || parseFloat(input.val()) > 1.2 || input.val() === "")
    {

        $("#serCreat").tooltip("show");
        $("#serCreat").removeClass("valid").addClass("invalid");
        $("#serCreat").focus();
        return false;
    } else
    {
        $("#serCreat").tooltip("hide");
        $("#serCreat").removeClass("invalid").addClass("valid");
        return true;
    }
}

function urAlb_Val()
{
    var input = $("#urAlb");

    if (parseInt(input.val()) < 0 || parseInt(input.val()) > 300 || input.val() === "")
    {

        $("#urAlb").tooltip("show");
        $("#urAlb").removeClass("valid").addClass("invalid");
        $("#urAlb").focus();
        return false;
    } else
    {
        $("#urAlb").tooltip("hide");
        $("#urAlb").removeClass("invalid").addClass("valid");
        return true;
    }
}

function A1C_Val() {
    var input = $("#A1C");

    if (parseFloat(input.val()) < 4.6 || parseFloat(input.val()) > 7.5 || input.val() === "")
    {

        $("#A1C").tooltip("show");
        $("#A1C").removeClass("valid").addClass("invalid");
        $("#A1C").focus();
        return false;
    } else
    {
        $("#A1C").tooltip("hide");
        $("#A1C").removeClass("invalid").addClass("valid");
        return true;
    }
}
