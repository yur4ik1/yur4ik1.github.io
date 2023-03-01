// like animations

if (document.querySelector('.games-admin') !== null) {
    // Get all elements with class "like-cnt"
    const likeCnts = document.querySelectorAll('.heart .like-cnt');
  
    // Initialize check_status to false
    let check_status = false;
  
    // Loop through all likeCnts elements and attach a click event listener to each
    likeCnts.forEach((likeCnt) => {
      likeCnt.addEventListener('click', function () {
        // Create new Timeline objects
        const t1 = new TimelineLite();
        const t2 = new TimelineLite();
  
        if (!check_status) {
          // If check_status is false, run animation for liking the post
          t1.set(this, { scale: 0 });
          t1.set(this, { scale: 0 });
          t1.to(this, 0.6, { scale: 1, opacity: 1, ease: Expo.easeOut });
          t2.to(this, 0.65, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) }, '+=0.2');
          check_status = true;
  
          // Create new mojs.Burst object and replay the animation
          const burst = new mojs.Burst({
            parent: this.parentNode,
            radius: { 10: 30 },
            count: 15,
            angle: { 0: 30 },
            children: {
              delay: 250,
              duration: 700,
              radius: { 10: 0 },
              opacity: 1,
              easing: mojs.easing.bezier(.08, .69, .39, .97)
            }
          });
          burst.replay();
        } else {
          // If check_status is true, run animation for unliking the post
          t1.to(this, 1, { scale: 1 })
            .to(this, 1, { scale: 1, opacity: 1, ease: Power4.easeOut });
          t1.timeScale(7);
          check_status = false;
        }
      });
    });
  
  
    document.querySelector('.like-js .like-cnt').addEventListener('click', function () {
      var t1 = new TimelineLite();
      var t2 = new TimelineLite();
      // var link = document.querySelector('.like-js .link');
      // if (link.textContent === 'I like this') {
      // link.innerHTML = 'Unlike';
      // } else {
      // link.innerHTML = 'I like this';
      // }
  
      var check_status = false;
      if (!check_status) {
        t1.set(this, { scale: 0 });
        t1.set(this, { scale: 0 });
        t1.to(this, 0.6, { scale: 1, opacity: 1, ease: Expo.easeOut });
        t2.to(this, 0.65, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) }, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
          parent: this.parentElement,
          radius: { 10: 30 },
          count: 15,
          angle: { 0: 30 },
          children: {
            delay: 250,
            duration: 700,
            radius: { 10: 0 },
            fill: ['#4385f5'],
            easing: mojs.easing.bezier(.08, .69, .39, .97)
          }
        });
        burst.replay()
      } else {
        t1.to(this, 1, { scale: 1 })
          .to(this, 1, { scale: 1, ease: Power4.easeOut });
        t1.timeScale(7);
        check_status = false;
        // added in 07-01-2021 for bluncing animation
        var burst = new mojs.Burst({
          parent: this.parentElement,
          radius: { 10: 30 },
          count: 15,
          angle: { 0: 30 },
          children: {
            delay: 250,
            duration: 700,
            radius: { 10: 0 },
            fill: ['#4385f5'],
            easing: mojs.easing.bezier(.08, .69, .39, .97)
          }
        });
        burst.replay()
        // end
      }
    });
  
    document.querySelector(".chain-js .like-cnt").addEventListener("click", function () {
      var t1 = new TimelineLite();
      var t2 = new TimelineLite();
      var link = document.querySelector('.chain-js .link');
      if (link.textContent === 'Get link') {
        link.innerHTML = 'Copied';
      } else {
        link.innerHTML = 'Get link';
      }
  
      var check_status = false;
      if (!check_status) {
        t1.set(this, { scale: 0 });
        t1.set(this, { scale: 0 });
        t1.to(this, 0.6, { scale: 1, opacity: 1, ease: Expo.easeOut });
        t2.to(this, 0.65, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) }, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
          parent: this.parentNode,
          radius: { 15: 35 },
          count: 15,
          angle: { 0: 30 },
          children: {
            delay: 250,
            duration: 700,
            radius: { 10: 0 },
            fill: ['#34a853'],
            easing: mojs.easing.bezier(.08, .69, .39, .97)
          }
        });
        burst.replay()
      } else {
        t1.to(this, 1, { scale: 1 })
          .to(this, 1, { scale: 1, opacity: 1, ease: Power4.easeOut });
        t1.timeScale(7);
        check_status = false;
        // added in 07-01-2021 for bluncing animation
        var burst = new mojs.Burst({
          parent: this.parentNode,
          radius: { 15: 35 },
          count: 15,
          angle: { 0: 30 },
          children: {
            delay: 250,
            duration: 700,
            radius: { 10: 0 },
            fill: ['#34a853'],
            easing: mojs.easing.bezier(.08, .69, .39, .97)
          }
        });
        burst.replay()
        // end
      }
    });
  
  
    document.querySelector(".dislike .like-cnt").addEventListener('click', function () {
      var t1 = new TimelineLite();
      var t2 = new TimelineLite();
  
      // if ( document.querySelector('.dislike-js .dislink').textContent === 'I dislike this') {
      // document.querySelector('.dislike-js .dislink').innerHTML = 'Dislike remove';
      // } else {
      // document.querySelector('.dislike-js .dislink').innerHTML = 'I dislike this';
      // }
  
      if (!check_status) {
        t1.set(this, { scale: 0 });
        t1.set(this, { scale: 0 });
        t1.to(this, 0.6, { scale: 1, opacity: 1, ease: Expo.easeOut });
        t2.to(this, 0.65, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) }, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
          parent: this.parentNode,
          radius: { 15: 35 },
          count: 15,
          angle: { 0: 30 },
          children: {
            delay: 250,
            duration: 700,
            radius: { 10: 0 },
            fill: ['#ea4237'],
            easing: mojs.easing.bezier(.08, .69, .39, .97)
          }
        });
        burst.replay()
      } else {
        t1.to(this, 1, { scale: 1 })
          .to(this, 1, { scale: 1, opacity: 1, ease: Power4.easeOut });
        t1.timeScale(7);
        check_status = false;
  
        // added in 07-01-2021 for bluncing animation
        var burst = new mojs.Burst({
          parent: this.parentNode,
          radius: { 15: 35 },
          count: 15,
          angle: { 0: 30 },
          children: {
            delay: 250,
            duration: 700,
            radius: { 10: 0 },
            fill: ['#ea4237'],
            easing: mojs.easing.bezier(.08, .69, .39, .97)
          }
        });
        burst.replay()
        // end
      }
  
    });
  
  }