$(document).ready(function(){
  let h = document.getElementById('hour');        //時
  let m = document.getElementById('minutes');     //分
  let s = document.getElementById('seconds');     //秒
  let ms = document.getElementById('m-seconds');  //ミリ秒
  let timerId = null; //タイマーID

  /* スタートボタン押下時 */
  $(".button1").click(function(){
    $(this).prop("disabled", true);
    $(".button2").prop("disabled", false);
    $(".button3").prop("disabled", false);

    /* タイマー開始 */
    timerId = timerCount(h, m, s, ms);

  });

  /* ストップボタン押下時 */
  $(".button2").click(function(){
    $(this).prop("disabled", true);
    $(".button1").prop("disabled", false);
    $(".button3").prop("disabled", false);

    /* タイマー停止 */
    countStop(timerId);
  });

  /* リセットボタン押下時 */
  $(".button3").click(function(){
    $(this).prop("disabled", true);
    h.innerHTML = 0;
    m.innerHTML = 0;
    s.innerHTML = 0;
    ms.innerHTML = 0;
  });
});


/* カウントアップ関数 */
function timerCount(h, m, s, ms){
  let timer = null; //clearInterval用
  function countUp(){
    /* カウントアップ；時 */
    if(m.innerHTML == 59 && s.innerHTML == 59 && ms.innerHTML == 9){
      ms.innerHTML = 0;
      s.innerHTML = 0;
      m.innerHTML = 0;
      h.innerHTML++;
    }
    /* カウントアップ；分 */
    if(s.innerHTML == 59 && ms.innerHTML == 9){
      ms.innerHTML = 0;
      s.innerHTML = 0;
      m.innerHTML++;
    }
    /* カウントアップ；秒 */
    if(ms.innerHTML == 9){
      ms.innerHTML = 0;
      s.innerHTML++;
    }


    ms.innerHTML++;
  }
  timer = setInterval(countUp, 100);

  return timer;
}

/* カウントストップ関数 */
function countStop(timer){
  clearInterval(timer);
}