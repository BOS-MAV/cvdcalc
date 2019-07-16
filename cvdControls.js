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
                                $("#sexMark").tooltip("hide");

                            if (($("input[name = 'Race']:checked").val() != 'White') && ($("input[name = 'Race']:checked").val() != 'African American')
                                    && ($("input[name = 'Race']:checked").val() != 'Hispanic') && ($("input[name = 'Race']:checked").val() != 'Other'))
                            {
                                $("#raceMark").tooltip("show");
                                $("#Race").focus();
                            }
                            else
                                $("#raceMark").tooltip("hide");


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
                    var input = $(this);
                    //alert(parseInt(input.val()));
                    //var error_element=$(this).next();

                    //error_element.addClass('error_show').removeClass('error');
                    if (parseInt(input.val()) < 90 || parseInt(input.val()) > 200)
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
           