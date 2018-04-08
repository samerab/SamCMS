
export class samo {

    scrollTo(elementId: string, duration: number = 1000) { 

        let elementOffsetTop = document.getElementById(elementId).offsetTop;
        let pageYOffset = window.pageYOffset;
        let diff = elementOffsetTop - pageYOffset;
        let start;
      
        
        let timestamp1 = new Date().getTime();
        window.requestAnimationFrame(function step(timestamp1) {
          if (!start) start = timestamp1;
          
          let time = timestamp1 - start;
         
          let percent = Math.min(time / duration, 1);
      
          window.scrollTo(0, pageYOffset + diff * percent);
          console.log(start + 'pageYOffset: ' + pageYOffset + '  ' + 'diff: ' + diff + '  ' +  'percent: ' + percent + '  --all: ' + pageYOffset + diff * percent);
          // Proceed with animation as long as we wanted it to.
          if (time < duration) {
            window.requestAnimationFrame(step);
          }
        })
    }

}

 
  
