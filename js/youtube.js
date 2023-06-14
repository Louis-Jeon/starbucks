//youtube Iframe api를 비동기로 로드
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  //<div id='player'>
new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true, //자동재생 유무
      loop: true, //반복재생 유무
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 id 목록
    },
    events: {
      onReady: function (event){
        event.target.mute(); //음소거
        event.target.playVideo();
      }
    }
  });
}
