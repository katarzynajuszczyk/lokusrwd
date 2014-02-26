$(document).ready(function(){      
    
  var login_form_input_focus = function() {
       if ($(this).val() == $(this)[0].title)
       {
           $(this).removeClass("defaultTextActive");
           $(this).val("");
       }
   };

   var login_form_input_blur = function() {
       if ($(this).val() == "")
       {
           $(this).addClass("defaultTextActive");
           $(this).val($(this)[0].title);
       }
   };

   $("#admin_login_form input").focus(login_form_input_focus);

   $("#admin_login_form input").blur(login_form_input_blur);

   $("#admin_login_form input").blur();

   $("#login_form input").focus(login_form_input_focus);

   $("#login_form input").blur(login_form_input_blur);

   $("#login_form input").blur();
   
   $("#login_yes").click(function(){     
       
       var feide_url = $('#feide_url').html();
       feide_url = $("<div/>").html(feide_url).text();
       
       $("#login_no").removeClass('active');
       $("#login_no").addClass('inactive');
       $(this).parent("div.buttons_col").css("opacity", "1.0");
       $("#login_form").fadeOut('fast','swing');
       $("#login_no").parent("div.buttons_col").css("opacity","0.2");       
       window.location.href = feide_url;       	
   });
   
   $("#login_no").click(function(){
        $(this).removeClass('inactive');
        $(this).addClass('active');
        $(this).parent("div.buttons_col").css("opacity", "1.0");
        $("#login_yes").parent("div.buttons_col").css("opacity","0.2");                     
        $("#login-form").fadeIn('fast','swing');
        $(".login_buttons").hide();
        $(".hidden").show();
   });     
   
   $('body').not($('#feide_info')).click(function() {       
       $("#feide_info").hide();       
   });
   
   /*$("#feide_info_link").click(function(event){
       event.stopPropagation();
       $("#feide_info").show();       
   });*/
   
   var faq1 = {
       q : "<a href='#'>Hvordan får skolen brukernavn og passord?</a>",
       a : "<p>Ta kontakt på <a href='mailto:lokus@aschehoug.no'>lokus@aschehoug.no</a> eller ring 22 40 04 55 for å få et brukernavn og passord som er felles for alle lærere på skolen.</p><p>Lærere kan bruke felles brukernavn og passord for å få tilgang til Lokus interaktive tavler.</p>"
   }
   
   var faq2 = {
       q : "<a href='#'>Vet ikke om jeg er FEIDE-bruker</a>",
       a : "<p>Klikk «JA» på denne siden. Dersom din kommune vises i menyen under «velg tilhørighet», bruker dere FEIDE.</p><p>Hvis din kommune ikke vises i menyen under «velg tilhørighet», eller du er usikker på ditt brukernavn og passord, kan du ta kontakt med supportansvarlig i kommunen. Se <a href='http://www.feide.no/brukerstotte' target='_blank' alt='Brukerstøtte for FEIDE'>liste over e-postadresser til supportansvarlige i FEIDE-kommuner</a></p>"
   }
   
   var faq3 = {
       q : "<a href='#'>Hvorfor trenger jeg å logge meg inn?</a>",
       a : "<p>Hvis du som lærer ønsker tilgang til Lokus interaktive tavler, må du logge deg inn. I gratisperioden kan du fritt prøve ut våre interaktive tavler, men etter at gratisperioden er slutt, vil du kun få tilgang til de produktene som skolen har kjøpt.</p><p>Øvrige produkter krever foreløpig ikke innlogging.</p>"
   }
  
   var faq4 = {
       q : "<a href='#'>Vet ikke</a>",
       a : "<p>Som privatperson kan du ikke bruke FEIDE.</p><p>Hvis du er lærer eller elev, kan du sjekke om din skole bruker FEIDE ved å klikke «JA» på denne siden. Dersom din kommune vises i menyen under «velg tilhørighet», bruker dere FEIDE.</p><p>Hvis din kommune ikke vises i menyen under «velg tilhørighet», eller du er usikker på ditt brukernavn og passord, kan du ta kontakt med supportansvarlig i kommunen. Se <a href='http://www.feide.no/brukerstotte' target='_blank' alt='Brukerstøtte for FEIDE'>liste over e-postadresser til supportansvarlige i FEIDE-kommuner</a>.</p>"
   }
   

    $(".faq_container.faq1").prepend(faq1.q);
    $(".faq_container.faq2").prepend(faq2.q);
    $(".faq_container.faq3").prepend(faq3.q);
    $(".faq_container.faq4").prepend(faq4.q);
    
    $(".faq_container.faq1 a").on('click',function(e){
        e.preventDefault();
        $(this).next().html(faq1.a).slideToggle();
    });
    $(".faq_container.faq2 a").on('click',function(e){
        e.preventDefault();
        $(this).next().html(faq2.a).slideToggle();
    });
    $(".faq_container.faq3 a").on('click',function(e){
        e.preventDefault();
        $(this).next().html(faq3.a).slideToggle();
    });
    $(".faq_container.faq4 a").on('click',function(e){
        e.preventDefault();
        $(this).next().html(faq4.a).slideToggle();
    });
   
  // $("#cancel_btn").click(function(){
  //     cancelAction();
  // });
   
});


function cancelAction(){
   
    var return_url = $('#return_url').html();
    //return_url = $("<div/>").html(return_url).text();

    return_url = return_url.substring(0, return_url.length - 6);
    
    if(return_url != ''){
	window.location.href = return_url;
    }
}