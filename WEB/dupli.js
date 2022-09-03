var Link = {
  setColor:function(self){
    // var alist = document.querySelectorAll('a');
    // var i =0;
    // while (i < alist.length){
    //   alist[i].style.color = self;
    //   i+=1;
    // }
    $('a').css('color',self);
  }
}
  var Body = {
    setColor:function(self){
      // document.querySelector('body').style.color = self;
      $('body').css('color',self);
    },
    setBackgroundColor:function(self){
      // document.querySelector('body').style.backgroundColor = self;
      $('body').css('backgroundColor',self);
    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body')
    if(self.value === 'night') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';

      Link.setColor('powderblue');

    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Link.setColor('blue');
    }
  }
