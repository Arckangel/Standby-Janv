function play(idPlayer, control) {
  var player = document.querySelector('#' + idPlayer);
  if (player.paused) {
    player.play();
    document.getElementById('controlleur').innerHTML = '<span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span>';
  } else {
    player.pause();
    document.getElementById('controlleur').innerHTML = '<span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span>';
  }
}
function resume(idPlayer) {
  var player = document.querySelector('#' + idPlayer);
  player.currentTime = 0;
  player.pause();
}

function lorem(){
  document.title="UNDERTALE !?";
  document.getElementById('titre').innerHTML='UndeRtale';
  document.getElementById('question').innerHTML='Questions';
  document.getElementById('quest1').innerHTML='What is Undertale ?';
  document.getElementById('rep1').innerHTML='Undertale is a role-playing video game for PC, MAC and LINUX created by American indie developer and composer Toby Fox. In the game, players control a human child who has fallen into the Underground, a large, secluded region underneath the surface of the Earth, separated by a magic barrier. I don\'t kow why... But a lot of people love this game. Who knows. You may love it too.';
  document.getElementById('quest2').innerHTML='How it works ?';
  document.getElementById('rep2').innerHTML='In this RPG, you don\'t have to kill anyone. Each enemy can be "defeated" nonviolently. Dance with a slim. Pet a dog. Whisper your favorite secret to a knight. Or, ignore this choice and rain destruction upon your foes. But your journey will take determination. Each adversary has unique bullet patterns that you must dodga as well.';
  document.getElementById('quest3').innerHTML='Other features ?';
  document.getElementById('rep3').innerHTML='Time your attacks for extra damage, then dodge enemy attacks in a style reminiscent of top-down shooters. Original art and soundtrack brimming with personality. Soulful, character-rich story with an emphasis on humor. Created mostly by one person. Become friends with all of the bosses! At least 5 dogs. You can date a skeleton. Hmmm... now there are 6 dogs...? Maybe you won\'t want to date the skeleton. I thought I found a 7th dog, but it was actually just the 3rd dog. If you play this game, can you count the dogs for me...? I\'m not good at it.';
  document.getElementById('contact').innerHTML='ContAct';
  document.getElementById('username').placeholder='Username';
  document.getElementById('email').placeholder='Email';
  document.getElementById('message').placeholder='Message';
  document.getElementById('bouton').value='>> Send';
}

$(document).ready(function() {
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
});

function rep(id){
var rep = document.getElementById(id);
  if (rep.style.display =='block') {
    rep.style.display = 'none';
  }
  else {
    rep.style.display = 'block';
  }
}

function verif_champ(obj, id1, id2)
{
  if ( obj.value== ""){
    document.getElementById(id1).style.border = "2px solid red";
    document.getElementById(id2).innerHTML="It's empty here !";
  }
  else {
    document.getElementById(id1).style.border = "2px solid green";
    document.getElementById(id2).innerHTML="";
  }
}
