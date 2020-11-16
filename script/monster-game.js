$(document).ready(function (){
    var head_count = 0, eye_count = 0, nose_count = 0, mount_count = 0;
    function lighting_one(){
        $("#lighting1").fadeIn(250).fadeOut(250);
        setTimeout(lighting_one,2000);
    }
    function lighting_two(){
        $("#lighting2").fadeIn(250).fadeOut(250);
        setTimeout(lighting_two,3000);
    }
    function lighting_three(){
        $("#lighting3").fadeIn(250).fadeOut(250);
        setTimeout(lighting_three,4000);
    }
    lighting_one();
    lighting_two();
    lighting_three();
    $("#head").click(function (){
        if(head_count<9){
            $("#head").animate({left : "-=367px"},500);
            head_count += 1;
        }else{
            $("#head").animate({left : "0px"},500);
            head_count = 0;
        }
    });
    $("#eye").click(function (){
        if(eye_count<9){
            $("#eye").animate({left : "-=367px"},500);
            eye_count += 1;
        }else{
            $("#eye").animate({left : "0px"},500);
            eye_count = 0;
        }
    });
    $("#nose").click(function (){
        if(nose_count<9){
            $("#nose").animate({left : "-=367px"},500);
            nose_count += 1;
        }else{
            $("#nose").animate({left : "0px"},500);
            nose_count = 0;
        }
    });
    $("#mouth").click(function (){
        if(mount_count<9){
            $("#mouth").animate({left : "-=367px"},500);
            mount_count += 1;
        }else{
            $("#mouth").animate({left : "0px"},500);
            mount_count = 0;
        }
    });
});