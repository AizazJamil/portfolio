// Slide Button
$(".sold").click(function(){
  $(".slide-button").removeClass("buy rent");
  $(".switch-type").removeClass("selected");
  $(".slide-button").addClass("sold");
  $(".switch-type.sold").addClass("selected");
})

$(".buy").click(function(){
  $(".slide-button").removeClass("sold rent")
  $(".switch-type").removeClass("selected");
  $(".slide-button").addClass("buy");
  $(".switch-type.buy").addClass("selected");
})

$(".rent").click(function(){
  $(".slide-button").removeClass("sold buy")
  $(".switch-type").removeClass("selected");
  $(".slide-button").addClass("rent");
  $(".switch-type.rent").addClass("selected");
})

// Edit Profile
$(document).ready(function() {
  $('.edit__icon1').click('.edit__image', function() {
    $('.edit__button__cover').toggle();
  });
    $('.edit__icon2').click('.edit__image', function() {
    $('.edit__button').toggle();
  });
  $('.btn_edit__cover').click('.edit__image', function() {
    $('.edit__button__cover').toggle();
  });

  $('.edit_pencil_click').click('.edit__bio__area' ,function() {
    $('.edit_option').css("display", "block");
    $('.edit_option .form_area').focus();
    $('.view__option').css("display", "none");
  });

})

function minimizeBtn() {
 // $('.minimize__area').hide();
  $('.maxB').show();
  $('.minB').hide();
  $( ".minimize__area" ).slideUp( "slow", function() {
    // Animation complete.
  });
}

function maximizeBtn() {
 // $('.minimize__area').show();
  $('.maxB').hide();
  $('.minB').show();
  $( ".minimize__area" ).slideDown( "slow", function() {
    // Animation complete.
  });
}

function focus__inline() {
  $('.dropdown__listing__area__filter').toggle();
}

function navbarDropdown() {
  $('.dropdown-menu').css('display', 'block');
}

function navbarDropdown_profile() {
  $('.dropdown-menu').css('display', 'none');
}



function radio1() {
  $('.photos__posting__area').css("display", "block");
  $('.video__posting__area').css("display", "none");
  $('.signing__posting__area').css("display", "none");
  $('#post').css("display", "none");

}

function radio2() {
  $('.video__posting__area').css("display", "block");
  $('.photos__posting__area').css("display", "none");
  $('.signing__posting__area').css("display", "none");
  $('#post').css("display", "none");

}

function radio3() {
  $('.video__posting__area').css("display", "none");
  $('.photos__posting__area').css("display", "none");
  $('.signing__posting__area').css("display", "block");
  $('#post').css("display", "none");
}

$(document).ready(function(){
    console.log(window.innerWidth);
 if(window.innerWidth > 720)
 {
    $("#fixed-wrap").sticky({topSpacing:0});
    $("#fixed-wrap1").sticky({topSpacing:350});
 }
  });
  
$( window ).resize(function() {
      if(window.innerWidth > 720)
     {
        $("#fixed-wrap").sticky({topSpacing:0});
        $("#fixed-wrap1").sticky({topSpacing:350});
     }
     else
     {
        $("#fixed-wrap").unstick();
        $("#fixed-wrap1").unstick();
     }
});  
  
 function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 
async function showMoreActivity()
 {
  $('.box').show();  
//  $('.box').jmspinner('large');
  $('.seeAllButton').hide();
  await sleep(2000);
  $('.box').hide();
  $('.moreContent').show();

 }


async function LoadMoreActivity()
 {
  $('.box1').show();  
//  $('.box1').jmspinner('large');
  $('.LoadMoreButton').hide();
  await sleep(2000);
  $('.box1').hide();
  $('.moreContent1').show();

 }
 
 async function HomeLoadMoreActivity()
 {
  $('.boxH').show();  
 // $('.boxH').jmspinner('large');
  $('.LoadMoreButtonH').hide();
  await sleep(2000);
  $('.boxH').hide();
  $('.moreContentH').show();

 }
 
  async function ProfileLoadMoreActivity1()
 {
  $('.boxP1').show();  
 // $('.boxP1').jmspinner('large');
  $('.LoadMoreButtonP1').hide();
  await sleep(2000);
  $('.boxP1').hide();
  $('.moreContentP1').show();

 }
 
  async function ProfileLoadMoreActivity2()
 {
  $('.boxP2').show();  

  $('.LoadMoreButtonP2').hide();
  await sleep(2000);
  $('.boxP2').hide();
  $('.moreContentP2').show();

 }
 
  async function EditProfileLoadMoreActivity1()
 {
  $('.boxE1').show();  
 // $('.boxE1').jmspinner('large');
  $('.LoadMoreButtonE1').hide();
  await sleep(2000);
  $('.boxE1').hide();
  $('.moreContentE1').show();

 }
 
  async function EditProfileLoadMoreActivity2()
 {
  $('.boxE2').show();  
 // $('.boxE2').jmspinner('large');
  $('.LoadMoreButtonE2').hide();
  await sleep(2000);
  $('.boxE2').hide();
  $('.moreContentE2').show();

 }
 
  async function EditProfileLoadMoreActivity3()
 {
  $('.boxE3').show();  
 // $('.boxE3').jmspinner('large');
  $('.LoadMoreButtonE3').hide();
  await sleep(2000);
  $('.boxE3').hide();
  $('.moreContentE3').show();

 }
 
  async function EditProfileLoadMoreActivity4()
 {
  $('.boxE4').show();  
 // $('.boxE4').jmspinner('large');
  $('.LoadMoreButtonE4').hide();
  await sleep(2000);
  $('.boxE4').hide();
  $('.moreContentE4').show();

 }
 
  
 function occupiedClick()
 {
   $('.occupiedB1').show(); 
   $('.freeAgentB1').show(); 
   $('.occupiedB2').hide();
   $('.freeAgentB2').hide(); 
 }
 
 function freeAgentClick()
 {
     $('.occupiedB2').show(); 
   $('.freeAgentB2').show(); 
   $('.occupiedB1').hide();
   $('.freeAgentB1').hide(); 
 }
 
 function editButtonPhotos(){
     $('.deleteButton').show(); 
     $('.editButton').hide();
 }
 
 
  function editButtonPhotos1(){
     $('.deleteButton1').show(); 
     $('.editButton1').remove();
 }
 
  function editExisting(){
     $('.editexisting').show(); 
     $('.editbutton0').remove();
 }
 function textenterClick(){
 
     $('.ul__listing__area').show(); 
      $('.ul__listing__area div').show(); 
      $('.okbutton').hide();
 }

function reposition_clicked(){
    $('#demp_pic2').show();
    console.log('i am here');
    $('.cpic').hide();
    if ( $('#demp_pic2').hasClass('croppie-container') )
    {
        
    }
    else
    {
    $('#demp_pic2').croppie({
    url: 'images/cover__photos.png',
    viewport: {
        width: 1166,
        height: 250
    }
});
}
$('#demp_pic2').show();
$('.edit__button__cover').hide();
$('.saveB').show();

}



function revertBack(){
    $('.cpic').show();
    $('#demp_pic2').hide();
    $('.edit__button__cover').show();
    $('.saveB').hide();
}



function dropdownselected(){
    $('.okbutton').show();
    $('#textenter').val('Name surename');
    $('.ul__listing__area').hide();
}

function textenterClick_position(){
 
     $('.area_position').show(); 
      $('.area_position div').show(); 
 }
 
function dropdownselected_position(){
    $('#textenter_position').val('Position');
    $('.area_position').hide();
}


function textenterClick_League(){
 
     $('.area_League').show(); 
      $('.area_League div').show(); 
 }
 
function dropdownselected_League(){
    $('#textenter_League').val('League');
    $('.area_League').hide();
}

function textenterClick_Region(){
 
     $('.area_Region').show(); 
      $('.area_Region div').show(); 
 }
 
function dropdownselected_Region(){
    $('#textenter_Region').val('Region');
    $('.area_Region').hide();
}

function textenterClick_Country(){
 
     $('.area_Country').show(); 
      $('.area_Country div').show(); 
 }
 
function dropdownselected_Country(){
    $('#textenter_Country').val('Country');
    $('.area_Country').hide();
}

function textenterClick_Salary(){
 
     $('.area_Salary').show(); 
      $('.area_Salary div').show(); 
 }
 
function dropdownselected_Salary(){
    $('#textenter_Salary').val('Salary');
    $('.area_Salary').hide();
}


function reposition_Modal() {
  $('#edit_image').modal('show');
  $('#demp_pic1').croppie({
    url: 'images/profile/02.png',
    viewport: {
        width: 220,
        height: 220,
        type:'circle'
    },
    boundary: { width: 220, height: 220 },
    enforceBoundary:true
});

	
   $("#demp_pic1 .cr-slider-wrap input").attr('min','1');
   $("#demp_pic1 .cr-slider-wrap input").attr('max','2');
}