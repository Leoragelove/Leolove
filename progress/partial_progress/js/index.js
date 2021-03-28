(function(){
  let _num = 0;
  const element = document.querySelector('._data-cnt')
  function myAnimate(){
    let myAnimation = element.animate([
      // keyframes
      {width: 0 + '%'},
      {width: _num + '%'}
    ],{
      // timing options
      duration: 500,
      delay: 0,
      fill: "forwards"
    })
    // 取消动画，会立即清除所有的关键帧效果。
    myAnimation.cancel();
    return myAnimation
  }
  // 模拟接口回传的数据
  setTimeout(()=>{
    _num = 60;
    console.log('开始执行');
    // 动画继续。
    myAnimate().play();
  },800)
})()