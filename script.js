const start_btn = document.querySelector('.container .commands .start-btn') 
const commands_section = document.querySelector('.commands')
const timer = ()=>{
  timeOutput = document.querySelector('.container .time span');
  let currentTime = {
    milliseconds:+timeOutput.textContent.slice(-2),
    seconds:+timeOutput.textContent.slice(3,5),
    minutes:+timeOutput.textContent.slice(0,2),
  };
  currentTime.milliseconds++
  if(currentTime.milliseconds == 100){
    currentTime.milliseconds = 0;
    currentTime.seconds++
  }
  if(currentTime.seconds == 60){
    currentTime.seconds = 0;
    currentTime.minutes++
  }
  let output_ms = currentTime.milliseconds < 10?"0"+currentTime.milliseconds:currentTime.milliseconds
  let output_s = currentTime.seconds < 10?"0"+currentTime.seconds:currentTime.seconds
  let output_m = currentTime.minutes < 10?"0"+currentTime.minutes:currentTime.minutes
  timeOutput.textContent=`${output_m}:${output_s}:${output_ms}`
}


start_btn.addEventListener('mouseup',()=>{
  let timeOutput = document.querySelector('.container .time span');
  start_btn.remove();
  const clear_btn = document.createElement('button');
  clear_btn.textContent="CLEAR";
  clear_btn.classList.add('clear-btn');
  const stop_btn = document.createElement('button');
  stop_btn.textContent="STOP";
  stop_btn.classList.add('stop-btn');
  commands_section.appendChild(clear_btn);
  commands_section.appendChild(stop_btn);
  let timeInterval = setInterval(timer,10);
  let stopped = false;
  clear_btn.addEventListener('mouseup',()=>{
    clearInterval(timeInterval)
    timeOutput.textContent = "00:00:00";
    clear_btn.remove();
    stop_btn.remove();
    commands_section.appendChild(start_btn)
  })
  stop_btn.addEventListener("mouseup",()=>{
    if(stopped == false){
      clearInterval(timeInterval)
      stop_btn.textContent="RESUME"
      stopped = true
    }else{
       timeInterval = setInterval(timer,10);
       stop_btn.textContent="STOP"
       stopped = false
    }
  })
})