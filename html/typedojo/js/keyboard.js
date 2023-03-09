// JavaScript Document 
window.total = 0;
window.correct = 0;
window.wrong = 0;
window.flag = 0;
window.settypetime = 0;
window.remainingtypetime = 0;
window.usedtypetime = 0;
window.realtimenetwpm = 0;  
var nextCharCode='';
var shiftkey=newshiftkey='';
var base_url = window.location.origin;
var lefthand=["Q","W","E","R","T","A","S","D","F","B","G","Z","X","C","V","!","@","#","$","%","1","2","3","4","5","a","b","c","d","e","f","g","q","r","s","t","v","w","x","z","capslock","keycolon","esc","tab","shift"];
var righthand=["Y","U","I","O","P","H","J","K","L","N","M","6","7","8","9","0","h","i","j","k","l","m","n","o","p","u","y","space","&","*",")","^","(","-","_","'",";",":",".",",","?","/","|","[","]","{","}","<",">","=","+","\\"];

var leftshiftkey=["U","I","O","P","H","J","K","L","N","M","Y",":","<",">","|","?","{","}","&","*",")","(","_","+","^"];
var rightshiftkey=["Q","W","E","R","T","A","B","S","D","F","G","Z","X","C","V","!","@","#","$","%","~"];

var shiftrequired=["^","$","~","!","@","#","%","&","*","(",")","_","+","|","{","}",":","<",">","?","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

jQuery(document).ready(function(){ 
   

    /*code for toogle on off*/
    
    /*end*/  
    var typingBody=$(".typing-content").html();
   
    jQuery(".test-line").removeClass('activeTestLine');
  
    jQuery(".typing-content").find('div:nth-child(1)').addClass('activeTestLine').find('span:nth-child(1)').addClass('goingnew');
    

    
    var nextWord=jQuery(".typing-content").find('div:nth-child(1)').find('span:nth-child(1)').text();
    var regex1 = new RegExp("^[a-zA-Z\!\@\#\$\%\^\&\*\(\)\_\+\|\}\{\:\"\?\>\<]+$");
    if (regex1.test(nextWord)){
        if(nextWord==nextWord.toUpperCase()){
            newshiftkey=16;
        }  
    }

    var charCode=nextWord.charCodeAt(0);
    jQuery('.keyboard-bg').find('.newkey-'+charCode).parent().addClass('keyHighlight');
    jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
    jQuery('.newkeyboardset').find('.newhandkey-'+charCode).addClass('keydisplayfinger');
    if(charCode=="34")
    {
        jQuery('.keyboard-bg').find('#shift_leftnew').addClass('keyHighlight');
        $(".keyboard-bg").find("#shift_leftnew").children().addClass("shiftlefttext");
        jQuery('.newkeyboardset').find('.newhandkey-left').addClass('keydisplayfinger');
    }
    var matchleftkey=lefthand.indexOf(nextWord);
    var matchrightkey=righthand.indexOf(nextWord);
    if(matchleftkey!=-1){
        $("#f_defaultnew").hide();
        $("#j_defaultnew").show();  
    }
    if(matchrightkey!=-1){
    $("#j_defaultnew").hide();
    $("#f_defaultnew").show();

    }
    var matchleftkey=lefthand.indexOf(nextWord);
    var matchrightkey=righthand.indexOf(nextWord);
    
    var shiftkey=shiftrequired.indexOf(nextWord);
    var leftshiftkeynew=leftshiftkey.indexOf(nextWord);
    var rightshiftkeynew=rightshiftkey.indexOf(nextWord);
    if(newshiftkey!=''){
           if(rightshiftkeynew!=-1){
            $('#j_defaultnew').hide();
            $(".keyboard-bg").find("#shift_leftnew").children().removeClass("shiftlefttext");
            $(".keyboard-bg").find("#shift_rightnew").addClass("keyHighlight");
            $(".keyboard-bg").find("#shift_rightnew").children().addClass("shiftrighttextcolor");
            // $(".newhandkey-right").show();
            jQuery('.newkeyboardset').find('.newhandkey-right').addClass('keydisplayfinger');
        
        }
        if(matchrightkey!=-1)
        {
            if(leftshiftkeynew!=-1){
            $('#f_defaultnew').hide();
            $(".keyboard-bg").find("#shift_rightnew").children().removeClass("shiftrighttextcolor");
            $(".keyboard-bg").find("#shift_leftnew").addClass("keyHighlight");
            $(".keyboard-bg").find("#shift_leftnew").children().addClass("shiftlefttext");
            // $(".newhandkey-left").show();
            jQuery('.newkeyboardset').find('.newhandkey-left').addClass('keydisplayfinger');
        }
        }

    }
    var findFinger=$('.newkey-'+charCode).attr('data-finger');
    var findHand=$('.newkey-'+charCode).attr('data-hand');
    $('.lHfingerCircle').css('display','none');
    if(newshiftkey!=''){
        if(findHand=='left'){var shiftHandKey='rightnew';}else{var shiftHandKey='left';
    }
    if(jQuery('.keyboard-bg').find('.newkey-'+newshiftkey).hasClass(shiftHandKey))
        {
            jQuery('#'+shiftHandKey+'Shift').addClass('keyHighlight');
            var findShiftFinger=jQuery('#'+shiftHandKey+'Shift').attr('data-finger');
            $('.'+findShiftFinger).css('display','block');	
        }				
        
    }
    $('.'+findFinger).css('display','block');
    /*code for wpm and accuracy*/
    jQuery(document).one("keypress", function (e) {
        cTimer();
        realtimeScore();
    });
    /*end*/
    jQuery(document).keypress(function(e){

        /*code for wpm and accuracy*/
        
        /*end*/
        //jQuery('.activeTestLine span:last-child').find('.goingnewnew').removeClass('goingnewnew').addClass('goingnew');

        $(".keyboard-bg").find("#shift_leftnew").removeClass("keyHighlightnewshift");
        /*code for shifty right new*/
        $(".keyboard-bg").find("#shift_rightnew").children().removeClass("shiftrighttextcolor");
        $(".keyboard-bg").find("#shift_leftnew").children().removeClass("shiftlefttext");
        /*end*/
        $(".keyboard-bg").find("#shift_rightnew").removeClass("keyHighlightnewshift");
        $(".keyboard-bg").find(".keyHighlightnew").removeClass("keyHighlightnew");
        $(".typing-content").find(".iswrong").addClass("wrongnew");
        $(".typing-content").find(".iswrong").removeClass("iswrong");
        var going=jQuery(".test-line").find('.goingnew').next().text();
        var goingne=jQuery(".test-line").find('.goingnewnew').next().text();
        var newval=jQuery(".test-line").find('.iswrong').next().text();
        if((going.charCodeAt(0)===94) || (goingne.charCodeAt(0)===94)|| (newval.charCodeAt(0)===94) || (going.charCodeAt(0)===72) || (goingne.charCodeAt(0)===72)|| (newval.charCodeAt(0)===72)
        || (going.charCodeAt(0)===78) || (goingne.charCodeAt(0)===78)|| (newval.charCodeAt(0)===78)|| (going.charCodeAt(0)===89) || (goingne.charCodeAt(0)===89)|| (newval.charCodeAt(0)===89)
        || (going.charCodeAt(0)===160) || (goingne.charCodeAt(0)===160)|| (newval.charCodeAt(0)===160) || (going.charCodeAt(0)===65) || (goingne.charCodeAt(0)===65)|| (newval.charCodeAt(0)===65)
        || (going.charCodeAt(0)===90) || (goingne.charCodeAt(0)===90)|| (newval.charCodeAt(0)===90))
        {
            $('#shift_right').hide();
            $('#shift_left').hide();
            $('#j_defaultnew').hide();
            $('#f_defaultnew').hide();
            

            
        }
        // var goingi=jQuery(".test-line").find('.goingnew').text();
        // var goingnei=jQuery(".test-line").find('.goingnewnew').text();
        // var newvalnew=jQuery(".test-line").find('.iswrong').text();
        // if((goingi.charCodeAt(0)===160) || (goingnei.charCodeAt(0)===160)|| (newvalnew.charCodeAt(0)===160))
        // {
        //     $('#shift_left').hide();

        // }
        
        var chr = String.fromCharCode( e.keyCode );
        var x = e.which || e.keyCode;	
        var newkeypress=e.key;
        /*code for capslock check*/
        
        /*end*/
        keyPress  = e.key;
        if (e.which === 32){
            e.preventDefault();
        }
       
        var wrongkey=$(".wrong").length;  
        if(e.which === 8){
            e.preventDefault();  
        }
        else{
            var time=$('#timer').html();
            if(time!='00:00'){
                if (e.which === 32){
                    e.preventDefault();
                }
                    if($('.typing-content').find('.test-line:last').prev().prev().prev().find('.letter:last').hasClass('goingnew')){

                        $(".typing-content").append(typingBody);

                    }
                // if(jQuery('.activeTestLine span:last').prev().hasClass('iswrong') ){

                //     jQuery('.newkeyboardset').find('.newhandkey-32').removeClass('keydisplayfinger');
                //     jQuery('.keyboard-bg').find('.keyHighlight').removeClass('keyHighlight');
                //     jQuery(".keyboard-bg").find(".newkey-32").parent().addClass("keyHighlightnew");
                //     jQuery("#f_defaultnew").hide();
                //     jQuery("#j_defaultnew").hide();

                //     jQuery('.newkeyboardset').find('.newhandkey-32').addClass('keydisplayfinger');


                // }
                // if(jQuery('.activeTestLine span').hasClass('goingnew') || jQuery('.activeTestLine span').hasClass('goingnewnew') ){
                //     if (e.which == 13 || e.which == 32){
                       
                //         jQuery(".test-line").find('.goingnew').addClass('rightnew');
                //         jQuery(".test-line").find('.goingnewnew').addClass('rightnew');

                //         jQuery(".test-line").find('.goingnew').addClass('rightnew');
                //         jQuery(".test-line").find('.goingnew').removeClass('goingnew').parent().addClass('gone').removeClass('activeTestLine').next().addClass('activeTestLine').addClass('startLine').find('span:nth-child(1)').addClass('goingnew').parent().next().addClass('paddingTop');
                        
                //         jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').parent().addClass('gone').removeClass('activeTestLine').next().addClass('activeTestLine').addClass('startLine').find('span:nth-child(1)').addClass('goingnew').parent().next().addClass('paddingTop');
                //         window.correct++;
                //     }else{
                //     //  alert('wrong');
                //         jQuery(".test-line").find('.goingnew').removeClass('goingnew').addClass('iswrong');
                //         jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('iswrong');

                //         jQuery(".test-line").find('.iswrong').parent().addClass('gone').removeClass('activeTestLine').next().addClass('activeTestLine').addClass('startLine').find('span:nth-child(1)').addClass('goingnew').parent().next().addClass('paddingTop');

                //         window.wrong++;
                //     }
                   
                   	
                  
                  
                // }
                
                if(jQuery('.activeTestLine span:last').hasClass('goingnew') || jQuery('.activeTestLine span:last').hasClass('goingnewnew') ){
                    if ( e.which == 32){
                       
                        jQuery(".test-line").find('.goingnew').addClass('rightnew');
                        jQuery(".test-line").find('.goingnewnew').addClass('rightnew');

                        jQuery(".test-line").find('.goingnew').addClass('rightnew');
                        jQuery(".test-line").find('.goingnew').removeClass('goingnew').parent().addClass('gone').removeClass('activeTestLine').next().addClass('activeTestLine').addClass('startLine').find('span:nth-child(1)').addClass('goingnew').parent().next().addClass('paddingTop');
                        
                        jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').parent().addClass('gone').removeClass('activeTestLine').next().addClass('activeTestLine').addClass('startLine').find('span:nth-child(1)').addClass('goingnew').parent().next().addClass('paddingTop');
                        window.correct++;
                    }else{
                    //  alert('wrong');
                        jQuery(".test-line").find('.goingnew').removeClass('goingnew').addClass('iswrong');
                        // jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('iswrong');

                        jQuery(".test-line").find('.iswrong').parent().addClass('gone').removeClass('activeTestLine').next().addClass('activeTestLine').addClass('startLine').find('span:nth-child(1)').addClass('goingnew').parent().next().addClass('paddingTop');

                        window.wrong++;
                    }
                   
                    jQuery('.typing-content').find('.gone').slideUp();
                    // jQuery('.typing-content').find('.gone').addClass('hideLine');	
                    if ($(".gone,.hideLine").length > 0) {
                        $(".gone,.hideLine").each(function() {
                            if($(this).hasClass('startLine')){
                                $(this).removeClass('startLine');
                            }
                            if($(this).hasClass('paddingTop')){
                                $(this).removeClass('paddingTop');
                            }
                        }); 
                    }
                    if ($(".activeTestLine,.startLine").length > 0) {
                        $(".activeTestLine,.startLine").each(function() {
                            if($(this).hasClass('paddingTop')){
                                $(this).removeClass('paddingTop');
                            }
                            if($(this).hasClass('hideLine')){
                                $(this).removeClass('hideLine');
                            }
                        }); 
                    }
                }else{
                     var forspace=jQuery(".test-line").find('.goingnew').text();
                     var spa=forspace.replace('\xa0', ' ');
                    //  var nobreak=keyPress;
                    //  if(nobreak==keypress)
                    //  {
                    //      var pressval=160;
                    //  }
                    if((keyPress  == jQuery(".test-line").find('.goingnew').text()) || (keyPress==spa)){
                        // alert('ok');
                        // jQuery('.keyboard-bg').removeClass('blinkone');
                        jQuery(".test-line").find('.goingnew').removeClass('goingnew').addClass('rightnew').next().addClass('goingnew');
                        
                        window.correct++;	
                    }
                    else{
                     
                       
                       
                        var wronglength=jQuery(".wrong").length;
                        // if(wronglength==1){
                           
                        //     jQuery(".test-line").find('.wrong').removeClass('wrong').addClass('goingnewnew');
                        //     jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
                        //     jQuery('.newkeyboardset').find('.newhandkey-'+charCode).addClass('keydisplayfinger');

                        // }else{
                            // alert("charactercodessd"+charCode);
                           
                            jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
                            jQuery('.newkeyboardset').find('.newhandkey-'+charCode).addClass('keydisplayfinger');
                            
                            jQuery(".test-line").find('.goingnew').removeClass('goingnew').addClass('iswrong');
                           jQuery(".test-line").find('.iswrong').next().addClass('goingnewnew');
                           if(jQuery(".test-line").find('.iswrong').next().hasClass('goingnewnew')){
                            // alert('wrong');

                           window.wrong++;
                           }

                           
                            var val= jQuery(".test-line").find('.iswrong').next().text();
                            var go=jQuery(".test-line").find('.iswrong').text();
                            var asci=go.charCodeAt(0);
                            var nextval= val.charCodeAt(0);
                            if (e.which === 32){
                                e.preventDefault();
                            }
                            // if(val===keyPress)
                            // {
                            //     alert('kkkk');
                            //     jQuery(".test-line").find('.iswrong').next().addClass('goingnewnew');
                                

                            // }
                            if(nextval==160){
                              
                        //    alert('space');
                        // jQuery('.newkeyboardset').find('.newhandkey-left').find('.keydisplayfinger').removeClass('keydisplayfinger');
                            $("#shift_left").hide();
                            jQuery(".test-line").find('.iswrong').next().addClass('goingnewnew');
                            
                            jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
                            jQuery('.keyboard-bg').find('.keyHighlight').removeClass('keyHighlight');
                            jQuery(".keyboard-bg").find(".newkey-32").parent().addClass("keyHighlightnew");
                            jQuery("#f_defaultnew").hide();
                            jQuery("#j_defaultnew").hide();

                            jQuery('.newkeyboardset').find('.newhandkey-32').addClass('keydisplayfinger');

                            return false;

                            
                            }
                            else{
                                // alert('add goingnewnew');
                                jQuery(".test-line").find('.iswrong').next().addClass('goingnewnew');
                               
                            }
                            // if(val==keyPress){
                              
                            //     //    alert('space');
                            //     // jQuery('.newkeyboardset').find('.newhandkey-left').find('.keydisplayfinger').removeClass('keydisplayfinger');
                            //         // $("#shift_left").hide();
                            //         // jQuery(".test-line").find('.iswrong').next().addClass('goingnewnew');
                                    
                            //         // jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
                            //         // jQuery('.keyboard-bg').find('.keyHighlight').removeClass('keyHighlight');
                            //         // jQuery(".keyboard-bg").find(".newkey-32").parent().addClass("keyHighlightnew");
                            //         // jQuery("#f_defaultnew").hide();
                            //         // jQuery("#j_defaultnew").hide();
        
                            //         // jQuery('.newkeyboardset').find('.newhandkey-32').addClass('keydisplayfinger');
        
                            //         return false;
        
                                    
                            //         }
                            //         else{
                            //             alert('add goingnewnew');
                            //             jQuery(".test-line").find('.iswrong').next().addClass('goingnewnew');
                                       
                            //         }
                            // alert(val.charCodeAt(0));
                            


                        //  }
                        var goingnewnew_val=jQuery(".goingnewnew").text();
                        //alert(goingnewnew_val);
                        if(goingnewnew_val!=""){
                            var goingnewnew=jQuery(".goingnewnew").text();
                        }else{
                            var goingnewnew=jQuery(".goingnew").text();
                        }
                        var goingnewn=jQuery(".goingnew").next().text();
                        var vale=goingnewn.charCodeAt(0);
                        // alert("goingnewnew"+goingnewnew);
                        
                        var goingnewnew=goingnewnew.replace('\xa0', ' ');
                        var originaltext=goingnewnew.charCodeAt(0);
                        //alert("originalteshf"+originaltext);
                        var currentiswrong=$(".iswrong").length;
                        var nextwrongkey=$(".wrongnew").length;
                        var asciivalueat=newkeypress.charCodeAt(0);

                        // alert("newkeypress"+asciivalueat);
                        // alert("orginaltext"+originaltext);

                        // if (e.which === 32){
                        //                 e.preventDefault();
                        //             }
                        // if(asciivalueat===vale)
                        //        {
                        //            alert('jjj');
                        //         //    jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('goingnewnew');
       
                        //        }
                        if((currentiswrong<1)&&(nextwrongkey>=1)){
                            // alert("wrongkey");
                            
                            if(asciivalueat==originaltext ){
                        //    alert('match');
                            //    if(goingnewnew.charCodeAt(0)===asciivalueat){
                            //     jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('rightnew').next().addClass('goingnew');

                            //              window.correct++;
                            //    }
                            //    else 
                            //    {
                            //     jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('goingnewnew');

                            //    }
                                
                                // if (e.which === 32){
                                //     //e.preventDefault();
                                  
                                //     if(goingnewnew.charCodeAt(0)==160){
                                // // jQuery('.newkeyboardset').find('.newhandkey-32').addClass('keydisplayfinger');	
                                      
                                //         jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('rightnew').next().addClass('goingnew');

                                //         window.correct++;
                                //     }else{
                                       
                                //         jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('goingnewnew');
                                //     }
                                   
                                // }  else{
                                    jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('rightnew').next().addClass('goingnew');
                                    window.correct++;
                                //}
                            
                            // alert('matched');
                            //$(".test-line").find("iswrong").next().addClass(goingnew);
                        }else{
                        //  alert("test11");
                            // jQuery(".test-line").find('.goingnewnew').removeClass('goingnewnew').addClass('iswrong');
                        }
                        }else{
                            // alert("rihght")
                            
                            $(".test-line").find("iswrong").removeClass('iswrong').addClass('wrong');
                        }
                        
                        // alert("count");
                        //  window.wrong++;

                        }
                    var currentText=jQuery('.activeTestLine').find('.goingnew').text();
                    
                    if(jQuery('.activeTestLine span:last').hasClass('goingnew')){
                        nextCharCode=13;
                    }
                }
            }
        }
        var nextChar_new=jQuery('.activeTestLine').find('.goingnew').text();

        // alert(nextChar_new);
        if(nextChar_new==""){
        // var nextChar=jQuery(".typing-content").find('div:nth-child(1)').find('span:nth-child(1)').text();

            var nextChar=jQuery('.activeTestLine').find('.goingnewnew').text();
        }else{
        // var nextChar=jQuery(".typing-content").find('div:nth-child(1)').find('span:nth-child(1)').text();

            var nextChar=jQuery('.activeTestLine').find('.goingnew').text();
        }
        var nextnewcharater=nextChar.charCodeAt(0);
        var regex = new RegExp("^[a-zA-Z\!\@\#\$\%\^\&\*\(\)\_\+\|\}\{\:\"\?\>\<]+$");
        if (regex.test(nextChar)){
            if(nextChar==nextChar.toUpperCase()){
                shiftkey=16;
            }
        }
        if(nextCharCode==''){
            nextCharCode=nextChar.charCodeAt(0);
        }
        //alert("nextcharcodetest"+nextCharCode);
        var wrongkeyfinal=$(".wrong").text();
        
        var goingnewnewkey_val=$(".goingnewnew").text();
        if(goingnewnewkey_val==""){
            var goingnewnewkey=$(".goingnew").text();
        }else{
            var goingnewnewkey=$(".goingnewnew").text();
        }

        var highlightfirstwrong=wrongkeyfinal.charCodeAt(0);
        var highlightsecondwrong=goingnewnewkey.charCodeAt(0);
        if(highlightfirstwrong!="" && highlightfirstwrong!=NaN){
           
            $(".keyboard-bg").find(".newkey-"+highlightfirstwrong).parent().removeClass("keyHighlightnew");
            $(".keyboard-bg").find(".newkey-"+highlightfirstwrong).parent().addClass("keyHighlightnew");
        }
        if(highlightsecondwrong!="" && highlightsecondwrong!=NaN){
            $(".keyboard-bg").find(".newkey-"+highlightsecondwrong).parent().removeClass("keyHighlightnew");
            $(".keyboard-bg").find(".newkey-"+highlightsecondwrong).parent().addClass("keyHighlightnew");
          
        }
        if(wrongkeyfinal!=""){
         
            var wreongfinalallval=wrongkeyfinal.charCodeAt(0);
            var asciinewwrong=newkeypress.charCodeAt(0);
            if(asciinewwrong!=wreongfinalallval){
               
            jQuery('.keyboard-bg').find('.newkey-'+asciinewwrong).parent().addClass('blinkone');
            setTimeout(function(){
                jQuery('.keyboard-bg').find('.blinkone').removeClass('blinkone');  
            },300);
            }
            // end
            jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
            jQuery('.newkeyboardset').find('.newhandkey-'+wreongfinalallval).addClass('keydisplayfinger');
        }
        else if(goingnewnewkey!=""){
           
            var ascinewkeypress=newkeypress.charCodeAt(0);
            var goingnewnewallval=goingnewnewkey.charCodeAt(0);
            //alert("ascinewkeypress"+ascinewkeypress);
            // alert("goingnewnewallval"+goingnewnewallval);
            var goingnewkeyvaldatanew=$(".goingnewnew").prev().text();
            //alert("goingnewkeyvaldatanew"+goingnewkeyvaldatanew);
            var currentgoingnewvaluenew=$(".goingnew").prev().text();
            var goingnewww=$(".goingnewnew").text();
            var currentgoingnewvaluenew=currentgoingnewvaluenew.replace('\xa0', ' ');
            
           //alert("goingnewww"+goingnewww);

            //if(goingnewkeyvaldatanew!=)
            // alert("goingnewkeyvaldatanew"+goingnewkeyvaldatanew);
            // alert("currentgoingnewvaluenew"+currentgoingnewvaluenew);
            // alert("newkeypress"+newkeypress);
            //alert("goingnewkeyvaldatanew"+goingnewkeyvaldatanew);
            //alert("currentgoingnewvaluenew"+currentgoingnewvaluenew);
            /*new code for solve the new highlight red*/

            /*end*/
            //alert("new key press"+newkeypress);
            //alert("goingnewkeyvaldatanew"+goingnewkeyvaldatanew);
           
            if(goingnewkeyvaldatanew!=""){
                
                if(newkeypress!=goingnewkeyvaldatanew ){
                    // alert('newkey-'+ascinewkeypress);
                jQuery('.keyboard-bg').find('.newkey-'+ascinewkeypress).parent().addClass('blinkone');
            setTimeout(function(){
            jQuery('.keyboard-bg').find('.blinkone').removeClass('blinkone');	
        },300);
            }
            }

            /*code for blink*/
            if(goingnewww!=""){
                    if((goingnewww!=newkeypress) ){
                // alert("newww");
            var asciigoingnewvaldta=goingnewww.charCodeAt(0);	
            // alert(ascinewkeypress);
            jQuery('.keyboard-bg').find('.newkey-'+ascinewkeypress).parent().addClass('blinkone');
            setTimeout(function(){
            jQuery('.keyboard-bg').find('.blinkone').removeClass('blinkone');	
        },300);
            }
            }
        
            /*end*/
            if(currentgoingnewvaluenew!=""){
                
                if((newkeypress!=currentgoingnewvaluenew)){
                    
                jQuery('.keyboard-bg').find('.newkey-'+ascinewkeypress).parent().addClass('blinkone');
            setTimeout(function(){
            jQuery('.keyboard-bg').find('.blinkone').removeClass('blinkone');	
        },300);
            }
            }
            
        // 	if(ascinewkeypress!=goingnewnewallval){
        // 	var goingnewkeyvaldata=$(".goingnewnew").text();
        // 	var currentgoingnewvalue=$(".goingnew").text();
        // 	if(newkeypress==goingnewkeyvaldata && newkeypress==currentgoingnewvalue ){
        // 		jQuery('.keyboard-bg').find('.newkey-'+ascinewkeypress).parent().addClass('blinkone');
        // 	setTimeout(function(){
        // 	jQuery('.keyboard-bg').find('.blinkone').removeClass('blinkone');	
        // },300);
        // 	}else{
        // 		var rightkeypress=$('.activeTestLine span:last-child').find('.rightnew').text();
        // 		var asciinewrightpress=rightkeypress.charCodeAt(0);
        // 		if(asciinewrightpress!=ascinewkeypress){
                    
        // 			jQuery('.keyboard-bg').find('.newkey-'+ascinewkeypress).parent().addClass('blinkone');
        // 	setTimeout(function(){
        // 	jQuery('.keyboard-bg').find('.blinkone').removeClass('blinkone');	
        // },300);
        // 		}

                

        // 	}
            
        // 	}
            jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
            jQuery('.newkeyboardset').find('.newhandkey-'+goingnewnewallval).addClass('keydisplayfinger');	
            }else{
            // alert("fgoinddhddhgdhdg");
        jQuery('.keyboard-bg').find('.blinkclass').removeClass('blinkclass');
        jQuery('.newkeyboardset').find('.keydisplayfinger').removeClass('keydisplayfinger');
        jQuery('.newkeyboardset').find('.newhandkey-'+nextnewcharater).addClass('keydisplayfinger');	
                            var matchleftkeypress=lefthand.indexOf(nextChar);
                            var matchrightkeypress=righthand.indexOf(nextChar);
                            var shiftkey=shiftrequired.indexOf(nextCharCode);
                            //alert("matchrightkeypress"+shiftkey);
                            if(matchleftkeypress!=-1){
                            $("#f_defaultnew").hide();
                            $("#j_defaultnew").show();
                            }
                            if(matchrightkeypress!=-1){
                            $("#j_defaultnew").hide();
                            $("#f_defaultnew").show();

                            }
                            /*end*/
        }
        jQuery('.keyboard-bg').find('.keyHighlight').removeClass('keyHighlight');
        jQuery('.keyboard-bg').find('.newkey-'+nextnewcharater).parent().addClass('keyHighlight');
        var firstwrongkey=jQuery(".wrong").text();
        var nextagainwrong=jQuery(".goingnewnew").text();
        if(firstwrongkey!=""){
        var firstwrongkeyleft=leftshiftkey.indexOf(firstwrongkey);
        var firstwrongightkey=rightshiftkey.indexOf(firstwrongkey);
        if(firstwrongkeyleft>=0){
            $(".keyboard-bg").find("#shift_rightnew").children().removeClass("shiftrighttextcolor");
            $(".keyboard-bg").find("#shift_leftnew").children().addClass("shiftlefttext");
            jQuery(".keyboard-bg").find("#shift_rightnew").removeClass("keyHighlightnewshift");
            jQuery(".keyboard-bg").find("#shift_leftnew").addClass("keyHighlightnewshift");
            //$(".keyboard-bg").find("#shift_leftnew").addClass("keyHighlightnewshift");
        }
        if(firstwrongightkey>=0){
            $(".keyboard-bg").find("#shift_rightnew").children().addClass("shiftlefttext");
            $(".keyboard-bg").find("#shift_leftnew").children().removeClass("shiftrighttextcolor");
            jQuery(".keyboard-bg").find("#shift_leftnew").removeClass("keyHighlightnewshift");
            jQuery(".keyboard-bg").find("#shift_rightnew").addClass("keyHighlightnewshift");
            jQuery(".keyboard-bg").find("#shift_leftnew").removeClass("keyHighlightnewshift");
        }
        }
        if(nextagainwrong!=""){
        var secondnextkeyleft=leftshiftkey.indexOf(nextagainwrong);
        var secondnextkeyfinal=rightshiftkey.indexOf(nextagainwrong);
        if(secondnextkeyleft>=0){
            $(".keyboard-bg").find("#shift_rightnew").children().removeClass("shiftrighttextcolor");
            $(".keyboard-bg").find("#shift_leftnew").children().addClass("shiftlefttext");
            jQuery(".keyboard-bg").find("#shift_rightnew").removeClass("keyHighlightnewshift");
            jQuery(".keyboard-bg").find("#shift_leftnew").addClass("keyHighlightnewshift");
        
        }
        if(secondnextkeyfinal>=0){ 
            $(".keyboard-bg").find("#shift_rightnew").children().addClass("shiftrighttextcolor");
            $(".keyboard-bg").find("#shift_leftnew").children().removeClass("shiftlefttext");
            jQuery(".keyboard-bg").find("#shift_rightnew").addClass("keyHighlightnewshift");
            jQuery(".keyboard-bg").find("#shift_lefttnew").removeClass("keyHighlightnewshift");
        }	
        }
    //   var nextChar=jQuery(".typing-content").find('div:nth-child(1)').find('span:nth-child(1)').text();
        
        var matchleftkeypress=lefthand.indexOf(nextChar);
        var matchrightkeypress=righthand.indexOf(nextChar);
        var spacekeysnew=righthand.indexOf(nextCharCode);
        var shiftkey=shiftrequired.indexOf(nextChar);
        var leftshiftkeynew=leftshiftkey.indexOf(nextChar);
        var rightshiftkeynew=rightshiftkey.indexOf(nextChar);
        //alert(nextCharCode);
        if(nextCharCode==13){
        $(".newhandkey-left").hide();
        $(".newhandkey-right").hide();
        $("#j_defaultnew").hide();
        $(".newhandkey-32").show();	
        $("#f_defaultnew").show();
        $(".keyboard-bg").find(".newkey-32").parent().addClass("keyHighlight");
        }
        if(shiftkey==-1){
        if(nextCharCode!="32")  
        {
            if(matchleftkeypress!=-1)
            {
                $(".newhandkey-32").hide();	
                $(".newhandkey-15 ").hide();		
                $("#f_defaultnew").hide();
                $(".newhandkey-left").hide();
                $(".newhandkey-right").hide();
                $("#j_defaultnew").show();
            }
            if(matchrightkeypress!=-1)
            {//$(".keyboard-bg").find(".newkey-32").parent().removeClass("keyHighlight");
                $(".newhandkey-32").hide();	
                $(".newhandkey-15 ").hide();
                $("#j_defaultnew").hide();
                $(".newhandkey-left").hide();
                $(".newhandkey-right").hide();
                $("#f_defaultnew").show();  
            }
            }
            else
            {
            //$(".keyboard-bg").find(".newkey-32").parent().removeClass("keyHighlight");
            $(".newhandkey-32").hide();	
            $(".newhandkey-15 ").hide();
            $("#j_defaultnew").hide();
            $(".newhandkey-left").hide();
            $(".newhandkey-right").hide();
            $("#f_defaultnew").show(); 
            }
            }else{
                if(leftshiftkeynew!=-1){
                $(".newhandkey-32").hide();	
                $("#j_defaultnew").hide();
                $("#f_defaultnew").hide(); 
                // $(".newhandkey-left").hide();
                jQuery('.newkeyboardset').find('.newhandkey-left').removeClass('keydisplayfinger');
                $(".keyboard-bg").find("#shift_rightnew").children().removeClass("shiftrighttextcolor");
                $(".keyboard-bg").find("#shift_leftnew").addClass("keyHighlight");
                $(".keyboard-bg").find("#shift_leftnew").children().addClass("shiftlefttext");
                // $(".newhandkey-left").show();
                jQuery('.newkeyboardset').find('.newhandkey-left').addClass('keydisplayfinger');
                }
                if(rightshiftkeynew!=-1){
                $(".newhandkey-32").hide();	
                $("#j_defaultnew").hide();
                $("#f_defaultnew").hide(); 
                // $(".newhandkey-right").hide();
                jQuery('.newkeyboardset').find('.newhandkey-right').removeClass('keydisplayfinger');
                $(".keyboard-bg").find("#shift_leftnew").children().removeClass("shiftlefttext");
                $(".keyboard-bg").find("#shift_rightnew").children().addClass("shiftrighttextcolor");
                $(".keyboard-bg").find("#shift_rightnew").addClass("keyHighlight");
                // $(".newhandkey-right").show();
                jQuery('.newkeyboardset').find('.newhandkey-right').addClass('keydisplayfinger');
                }
            }
            if(nextCharCode==34){
              $("#j_defaultnew").hide();
              $("#f_defaultnew").hide(); 
                // jQuery('.newkeyboardset').find('.newhandkey-32').removeClass('keydisplayfinger');  
            $(".keyboard-bg").find("#shift_rightnew").children().removeClass("shiftrighttextcolor");
            $(".keyboard-bg").find("#shift_leftnew").addClass("keyHighlight");
            $(".keyboard-bg").find("#shift_leftnew").children().addClass("shiftlefttext");
            //change on 27-09
             jQuery('.newkeyboardset').find('.newhandkey-left').addClass('keydisplayfinger');
             jQuery('.newkeyboardset').find('.newhandkey-right').hide();
            // jQuery('.newkeyboardset').find('.newhandkey-32').removeClass('keydisplayfinger');

            }
            if(nextCharCode==39){
                $("#shift_leftnew").removeClass('keyHighlightnew keyHighlight');

            }
            var nextfindFinger=$('.newkey-'+nextCharCode).attr('data-finger');
            var nextfindHand=$('.newkey-'+nextCharCode).attr('data-hand');
            $('.lHfingerCircle').css('display','none');
            if(shiftkey!=''){
            if(nextfindHand=='left'){var shiftHand='rightnew';}else{var shiftHand='left';}
            if(jQuery('.keyboard-bg').find('.newkey-'+shiftkey).hasClass(shiftHand)){
                jQuery('#'+shiftHand+'Shift').addClass('keyHighlight');
                var findShiftFinger=jQuery('#'+shiftHand+'Shift').attr('data-finger');
                $('.'+findShiftFinger).css('display','block');	
            }				
            }
            $('.'+nextfindFinger).css('display','block');
            nextCharCode='';
            shiftkey='';
            //var lastspanchild=$(".startLine span:last-child").find(".goingnewnew").length;
            //alert(lastspanchild);

            /*code for last class*/
            // var lastclass = $('.activeTestLine span:last-child').attr('class'); 
            // if(lastclass == 'letter goingnewnew'){
            //  $('.activeTestLine span:last-child').removeClass('goingnewnew').addClass('goingnew');
            //  $("#shift_left").hide();
            //  $("#shift_right").hide();
            //  $("#space").show();
            //  $("#f_defaultnew").show();
            // // $("#space").addClass("keyHighlightnew");  
            // $(".newkey-32").parent().addClass("keyHighlightnew");

            // }
            var lastclassnew = $('.activeTestLine span:last-child').attr('class'); 
            if(lastclassnew=="letter goingnew"){
            $(".newkey-32").parent().addClass("keyHighlightnew");
            jQuery('.newkeyboardset').find('.newhandkey-32').addClass('keydisplayfinger');
            }
            /*end*/
            // if(e.which==32){
            //     $('#yes-no').change(function(){
            //                         if($('#yes-no').prop('checked', false))
            //                         {
            //                                 alert("ddd");
            //                                 $('.keyboard-container').hide();
                                    
            //                         }else{
                                        
            //                         }
            //                     });  
            // }
          
            
        });
    jQuery(document).on('click', '#guestprint', function(){
        jQuery("#guestprintform").submit();
    });

    
    jQuery(document).on('click', '#keyboardHideView', function(){
        $('#keyboard-content').css('display','none');
        jQuery("#keyboardHideView").css('display','none');
        jQuery("#keyboardShowView").css('display','block');
    });
    jQuery(document).on('click', '#keyboardShowView', function(){
        $('#keyboard-content').css('display','block');
        jQuery("#keyboardHideView").css('display','block');
        jQuery("#keyboardShowView").css('display','none');
    });
    //$(".activeTestLine span:last-child").find('.goingnewnew').addClass('goingnew').removeClass('goingnewnew');
    
    //var x=$('.activeTestLine span:last-child').find('.goingnewnew').length; alert(x); 
});

function blink() {
$('.keyHighlight').fadeOut('slow', function() {  
    $(this).fadeIn('slow', function() {
        blink(this);
    });
});
}

/*code blink red*/
function blinknew() {
$('.blinkclass').fadeOut('slow', function() {
    $(this).fadeIn('slow', function() {
        blink(this);
    });
});
}

/*code for toggle button*/
    
    /*end*/

function cTimer(){
    var timer = $("#typingtime").val();
    $('#timer').countdowntimer({
        minutes :0+(timer-1),
        seconds : 59,
        size : "lg",
    });	
}

function realtimeScore(){
    setInterval(function(){ 
        var correct = 0;	
        var wrong = 0;	
        var total = 0;
        var grosswpm = 0;
        var netwpm = 0;
        var realtimenetwpm = 0;
        var accuracy = 0;
        var errorrate = 0;
        var time = 0;
        
        if(window.flag == 0){
            window.settypetime = (jQuery("#typingtime").val()*60);	
            window.remainingtypetime = window.settypetime-1;	
            window.flag = 1;
        }
        
        window.remainingtypetime = --window.remainingtypetime;
        window.usedtypetime = (window.settypetime - window.remainingtypetime);
        
        correct = window.correct;	
        wrong = window.wrong;	
        
        total = correct + wrong;
        grosswpm = ((total)/5);	
        netwpm = ((grosswpm - (wrong/5)));
        realtimenetwpm = (netwpm / window.usedtypetime) * 60
        accuracy = (correct/total)*100;
        errorrate = (wrong/total)*100;
        
        if(isNaN(realtimenetwpm) || realtimenetwpm < 0){
            window.realtimenetwpm = 0; 
        }else{
            window.realtimenetwpm = realtimenetwpm; 
        }
        
        jQuery("#wpm").text(Math.floor(window.realtimenetwpm));
        jQuery("#accuracy").text(Math.floor(accuracy)+'%');
        
        time = jQuery('#timer').html();
        if(time == '00:00'){
            scoreCard();
            jQuery('#timer').html('');
        }
    }, 1000);
}
function scoreCard(){

    var speed;

    var rating;

    var testname = jQuery("#testname").val();
   

    var typetime = jQuery("#typingtime").val();

    var correct = window.correct;	

    var wrong = window.wrong;	

    

    var total = correct + wrong;

    var grosswpm = ((total/5)/typetime);

    var netwpm = (grosswpm - (wrong/5));



    if(netwpm < 0){

        netwpm = 0;

    }



    var accuracy =((netwpm/grosswpm)*100);

    var errorrate = (100-accuracy);

    

    jQuery(".typing-content,.keyboard-setting,.keyboard-container").css('display', 'none');

    jQuery(".result-block").css('display', 'block');

    jQuery(".result-block-test").css('display', 'block');

    

    jQuery("table tr td:eq(1)").text(total);

    jQuery("table tr td:eq(3)").text(correct);

    jQuery("table tr td:eq(5)").text(wrong);

    jQuery("table tr td:eq(7)").text(Math.floor(errorrate));

    jQuery("table tr td:eq(9)").text(Math.floor(grosswpm));

    

    jQuery("#netwpm").html(Math.floor(netwpm)+'<sub>WPM</sub>');

    jQuery("#finalaccuracy").html(Math.floor(accuracy)+'<sub>%</sub>');



    jQuery("#grosswpm").val(Math.floor(grosswpm));

    jQuery("#faccuracy").val(Math.floor(accuracy));

    jQuery("#speed").val(Math.floor(netwpm));

    

    if(jQuery("#islogin").val() == 1){

        var today = new Date();

        var dd = today.getDate();

        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();

        

        if(dd<10) {

            dd='0'+dd

        } 

        

        if(mm<10) {

            mm='0'+mm

        } 



        today = yyyy+'-'+mm+'-'+dd;

        speed = Math.floor(netwpm);



        if(speed >= 0 && speed <= 10){

            rating = 1;

        }else if(speed >= 11 && speed <= 30){

            rating = 2;

        }else if(speed >= 31 && speed <= 40){

            rating = 3;

        }else if(speed >= 41 && speed <= 60){

            rating = 4;

        }else if(speed >= 61){

            rating = 5;

        }

        

        jQuery.ajax({

            url: base_url+'/ajax.php',

            data: {'p': 'scoresave', 'testname': testname, 'date': today, 'length': typetime, 'speed': speed, 

                   'accuracy': Math.floor(accuracy), 'rating': rating},

            type:"POST",

            cache:false,

            dataType: "json",

            success: function(response){

                jQuery("#userprint").attr('href', base_url+'/'+response.certificate_id+'/user-pdf.html');

                jQuery("#userprint").attr('target', '_blank');

                // console.log(response);

                console.log("Success");

            },

            error: function(response){

                console.log("Error");

            }

        }); 

    }

}



                 
