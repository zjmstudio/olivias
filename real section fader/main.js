var timeline = new TimelineMax();

timeline.from(".ccbottom", 1, {ease:Elastic.easeOut, x:650});

timeline.from(".cctop", 0.3, {opacity:0, y:-350, delay:.1});

timeline.from(".sprinkles", 0.3, {opacity:0, y:-100, delay:.1});

timeline.from(".cherry", .1, {opacity:0, y:-100, delay:.3});



window.onload = function() {



  //page heights:
  TweenMax.set(".checkpoint01", {y: 500});
  TweenMax.set(".checkpoint02", {y: 1500});
  TweenMax.set(".checkpoint03", {y: 2500});
  TweenMax.set(".checkpoint04", {y: 3500});
  TweenMax.set(".checkpoint05", {y: 3500});
  TweenMax.set(".main", {y:3000});

  var active01 = false;
  var image01 = new TimelineMax({paused:true, onStart:stop01})
  .to(".image01",.5, {ease: Sine.easeOut})
  .to(".image01",0.4, {autoAlpha:0, ease: Sine.easeOut},"-=0.4")

  var active02 = false;
  var image02 = new TimelineMax({paused:true, onStart:stop02})
  .to(".image02",.5, {ease: Sine.easeOut})
  .to(".image02",0.4, {autoAlpha:0, ease: Sine.easeOut},"-=0.4")

  var active03 = false;
  var image03 = new TimelineMax({paused:true, onStart:stop03})
  .to(".image03",.5, {ease: Sine.easeOut})
  .to(".image03",0.4, {autoAlpha:0, ease: Sine.easeOut},"-=0.4")

  var active04 = false;
  var image04 = new TimelineMax({paused:true, onStart:stop04})
  .to(".image04",.5, {ease: Sine.easeOut})
  .to(".image04",0.4, {autoAlpha:0, ease: Sine.easeOut},"-=0.4")

  var active05 = false;
  var image05 = new TimelineMax({paused:true, onStart:stop05})
  .to(".image05",0, {ease: Sine.easeOut})
  .to(".image05",0, {autoAlpha:0, ease: Sine.easeOut},"-=0.4")
  .to(".main",0, {autoAlpha:0, ease: Sine.easeOut})

   function stop01 (){
    active01 = true;
  }
   function stop02 (){
    active02 = true;
  }
   function stop03 (){
    active03 = true;
  }

  function stop04 (){
   active04 = true;
 }

 function stop05 (){
  active05 = true;
}

 // ================================================================
  onResize = function() {

    $( window ).scroll(function() {

      var check01 = $('.checkpoint01').offset().top - $(window).scrollTop() -0;
      var check02 = $('.checkpoint02').offset().top - $(window).scrollTop() -0;
      var check03 = $('.checkpoint03').offset().top - $(window).scrollTop() -0;
      var check04 = $('.checkpoint04').offset().top - $(window).scrollTop() -0;
      var check05 = $('.checkpoint05').offset().top - $(window).scrollTop() -0;

      if(!active01 && check01 <= 0 ) {
        image01.restart();
        TweenLite.set('.checkpoint01',);
      }
      else if(check01 > 0 ) {
        image01.reverse().timeScale(1);
        TweenLite.set('.checkpoint01',);
        active01 = false;
      }

      if(!active02 && check02 <= 0 ) {
        image02.restart();
        TweenLite.set('.checkpoint02',);
      }
      else if(check02 > 0 ) {
        image02.reverse().timeScale(1);
        TweenLite.set('.checkpoint02',);
        active02 = false;
      }

      if(!active03 && check03 <= 0 ) {
        image03.restart();
        TweenLite.set('.checkpoint03',);
      }
      else if(check03 > 0 ) {
        image03.reverse().timeScale(1);
        TweenLite.set('.checkpoint03',);
        active03 = false;
      }

      if(!active04 && check04 <= 0 ) {
        image04.restart();
        TweenLite.set('.checkpoint04',);
      }
      else if(check04 > 0 ) {
        image04.reverse().timeScale(1);
        TweenLite.set('.checkpoint04',);
        active04 = false;
      }

      if(!active05 && check05 <= 0 ) {
        image05.restart();
        TweenLite.set('.checkpoint05',);
      }
      else if(check05 > 0 ) {
        image05.reverse().timeScale(1);
        TweenLite.set('.checkpoint05',);
        active05 = false;
      }


    });
  }

  $(document).ready(onResize);
  $(window).resize(onResize);
}

// to the top //

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//to the top//

//page 3 text change//

jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);

		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function(){
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');

		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else if($bool) {
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');

		if(!$letter.is(':last-child')) {
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else {
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

//end text change//

document.getElementById('video-player').controls = false

// grid item 1 //

// get modal element
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside Click
window.addEventListener('click', outsideClick1);


// Function to open modal
function openModal(){
  modal.style.display = 'block';
}


// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick1(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}


// grid item 2 //

var modal2 = document.getElementById('simpleModal2');

var modalBtn2 = document.getElementById('modalBtn2');

var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

//listen for open click
modalBtn2.addEventListener('click', openModal2);

//listen for close click
closeBtn2.addEventListener('click', closeModal2);

//listen for outside Click
window.addEventListener('click', outsideClick2);


// Function to open modal
function openModal2(){
  modal2.style.display = 'block';
}


// Function to close modal
function closeModal2(){
  modal2.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick2(e){
  if(e.target == modal2){
  modal2.style.display = 'none';
  }
}

//---------- grid item 3 ---------------------///

var modal3 = document.getElementById('simpleModal3');

var modalBtn3 = document.getElementById('modalBtn3');

var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

//listen for open click
modalBtn3.addEventListener('click', openModal3);

//listen for close click
closeBtn3.addEventListener('click', closeModal3);

//listen for outside Click
window.addEventListener('click', outsideClick3);


// Function to open modal
function openModal3(){
  modal3.style.display = 'block';
}


// Function to close modal
function closeModal3(){
  modal3.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick3(e){
  if(e.target == modal3){
  modal3.style.display = 'none';
  }
}

//---------- grid item 4 ---------------------///

var modal4 = document.getElementById('simpleModal4');

var modalBtn4 = document.getElementById('modalBtn4');

var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];

//listen for open click
modalBtn4.addEventListener('click', openModal4);

//listen for close click
closeBtn4.addEventListener('click', closeModal4);

//listen for outside Click
window.addEventListener('click', outsideClick4);


// Function to open modal
function openModal4(){
  modal4.style.display = 'block';
}


// Function to close modal
function closeModal4(){
  modal4.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick4(e){
  if(e.target == modal4){
  modal4.style.display = 'none';
  }
}

//---------- grid item 5 ---------------------///

var modal5 = document.getElementById('simpleModal5');

var modalBtn5 = document.getElementById('modalBtn5');

var closeBtn5 = document.getElementsByClassName('closeBtn5')[0];

//listen for open click
modalBtn5.addEventListener('click', openModal5);

//listen for close click
closeBtn5.addEventListener('click', closeModal5);

//listen for outside Click
window.addEventListener('click', outsideClick5);


// Function to open modal
function openModal5(){
  modal5.style.display = 'block';
}


// Function to close modal
function closeModal5(){
  modal5.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick5(e){
  if(e.target == modal5){
  modal5.style.display = 'none';
  }
}

//---------- grid item 6 ---------------------///

var modal6 = document.getElementById('simpleModal6');

var modalBtn6 = document.getElementById('modalBtn6');

var closeBtn6 = document.getElementsByClassName('closeBtn6')[0];

//listen for open click
modalBtn6.addEventListener('click', openModal6);

//listen for close click
closeBtn6.addEventListener('click', closeModal6);

//listen for outside Click
window.addEventListener('click', outsideClick6);


// Function to open modal
function openModal6(){
  modal6.style.display = 'block';
}


// Function to close modal
function closeModal6(){
  modal6.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick6(e){
  if(e.target == modal6){
  modal6.style.display = 'none';
  }
}


//-------- grid item 7 ------------//

var modal7 = document.getElementById('simpleModal7');

var modalBtn7 = document.getElementById('modalBtn7');

var closeBtn7 = document.getElementsByClassName('closeBtn7')[0];

//listen for open click
modalBtn7.addEventListener('click', openModal7);

//listen for close click
closeBtn7.addEventListener('click', closeModal7);

//listen for outside Click
window.addEventListener('click', outsideClick7);


// Function to open modal
function openModal7(){
  modal7.style.display = 'block';
}


// Function to close modal
function closeModal7(){
  modal7.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick7(e){
  if(e.target == modal7){
  modal7.style.display = 'none';
  }
}

//-------- grid item 8 ------------//

var modal8 = document.getElementById('simpleModal8');

var modalBtn8 = document.getElementById('modalBtn8');

var closeBtn8 = document.getElementsByClassName('closeBtn8')[0];

//listen for open click
modalBtn8.addEventListener('click', openModal8);

//listen for close click
closeBtn8.addEventListener('click', closeModal8);

//listen for outside Click
window.addEventListener('click', outsideClick8);


// Function to open modal
function openModal8(){
  modal8.style.display = 'block';
}


// Function to close modal
function closeModal8(){
  modal8.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick8(e){
  if(e.target == modal8){
  modal8.style.display = 'none';
  }
}

//-------- grid item 9 ------------//

var modal9 = document.getElementById('simpleModal9');

var modalBtn9 = document.getElementById('modalBtn9');

var closeBtn9 = document.getElementsByClassName('closeBtn9')[0];

//listen for open click
modalBtn9.addEventListener('click', openModal9);

//listen for close click
closeBtn9.addEventListener('click', closeModal9);

//listen for outside Click
window.addEventListener('click', outsideClick9);


// Function to open modal
function openModal9(){
  modal9.style.display = 'block';
}


// Function to close modal
function closeModal9(){
  modal9.style.display = 'none';
}


// Function to close modal if outside click
function outsideClick9(e){
  if(e.target == modal9){
  modal9.style.display = 'none';
  }
}
