
      // This script create a video on a background Element called #script
      var tag = document.createElement('script'); 
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      var width = window.innerWidth;
      var height = width/1.77777777;

      var playerBackground = document.getElementById("background-player");

     
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          width: width,
          height: height,
          videoId: '8d-bbBlg7Ao',
          playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo':0, 'modestbranding' : 1, 'loop': 1 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onStateChange
          }
        });
      }

      // When our player is read, this function mute them and apply a negative margin of 50%
      function onPlayerReady(event) {
        var heightDiff;
        var playerEl = document.getElementById('player');
        heightDiff = window.height*0.8 - height;

        //Usefull to keep the video-pattern over the video on de screens with less than 998 pixels
        if(window.width <998) {
          playerBackground.style.height = height*(0.8) + 'px';
        } 
      
        event.target.mute();
        playerEl.style.marginTop = heightDiff +'px';


      }

      

      // This add a Scroll Parallax effect to our background Video 
      window.onscroll  = function() {
        scrollVideo();
      }

      function scrollVideo() {
        var heightDiff;
        var playerEl = document.getElementById('player');
        heightDiff = window.height*0.8 - height;
      
        var top = document.body.scrollTop * 0.7;
        var marginTop = heightDiff + top;
        playerEl.style.marginTop = marginTop +'px';
        
      }

      //This function maintain the video looping
      function onStateChange(e) {
        
        if (e.data === YT.PlayerState.ENDED) {
            player.playVideo(); 
        }
     }

    //Function to update value  of gift on one-time box
    function outputUpdate(qtty) {
      document.querySelector('#gift_amount').value = qtty;
    }
    
    function inputUpdate(qtty) {
      document.getElementById('slide-qtty').value = qtty;
    }


    // functions to check if inputs has value
    
    var inputs = document.getElementsByClassName('inputs-fill');
    for (var i=0; i < inputs.length; i++) {
      checkFill(inputs[i]);
    }

    function checkFill(obj) {
      if (obj.value !== "")  { 
        obj.classList.add('filled');
      } else {
        obj.classList.remove('filled');
      }
    }


    // Add credit card to form
    new Card({ form: document.querySelector('form'), container: '.card'});

    //Function to alter the boxes monthly and one-time

    function changeBox(el) {
      var box = document.getElementById(el.dataset.giftClass);
      var boxes = document.getElementsByClassName('gift-box');
      
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('disabled');
      }
      box.classList.remove('disabled');

      var current =  document.getElementsByClassName('current');
      current[0].classList.remove('current');
      el.classList.add('current');


      if (! box.classList.contains('monthly'))  {
        var tab = document.getElementsByClassName('tab-monthly');
        for (var i=0; i< tab.length; i++) {
          if (tab[i].classList.contains('selected')) {
            tab[i].classList.remove('selected');
          }
        }     
      } else {
        var monthlyRadio = document.querySelector('input[name="gift_amount"]:checked');
        if (monthlyRadio) {
          var tab = document.getElementsByClassName('tab-monthly');
          for (var i=0; i< tab.length; i++) {
            if (tab[i].classList.contains(monthlyRadio.dataset.box)) {
              tab[i].classList.add('selected');
            }
          }     
        }  

      }

    }


    function msgBox(el) {
      var tab = document.getElementsByClassName('tab-monthly');
      for (var i=0; i< tab.length; i++) {
        if (tab[i].classList.contains(el.dataset.box)) {
          tab[i].classList.add('selected');
        } else {
          tab[i].classList.remove('selected');
        }
      }     
    }
  
  

  //Graphics from "How your donation is used"
var ctx = document.getElementById("donationChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Program Services", "Fundraising", "Management & General"],
        datasets: [{
            data: [88.7, 10.4, 0.9],
            backgroundColor: "#ed1c24",
            label: '% of donation',
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
