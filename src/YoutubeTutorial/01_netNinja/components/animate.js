export const animationText = {
    transitions : {
      type:'spring', stiffness:300
    },
    whileHover : {
      scale:1.3, originX:0, color:'yellow'
    }
}
  
  export const animationButton = {
    whileHover : {
      scale : 1.2,
      textShadow : '0px 0px 8px white',
      boxShadow : '0px 0px 8px white'
    }
  }

  export const animationButtonKeyFrames = {
    whileHover : {
      scale : [1,1.2,1,1.2,1,1.2,1,1.2,1],
      textShadow : '0px 0px 8px white',
      boxShadow : '0px 0px 8px white',
    }
  }

  export const animationButtonKeyFramesYoyo = {
    whileHover : {
      scale : 1.1,
      textShadow : '0px 0px 8px white',
      boxShadow : '0px 0px 8px white',
      transition : {
        duration : 0.2,
        yoyo : Infinity
      }
    }
  }
  
  export const animationContainer = {
    initial: (direction) => {
      return {x : '100vw' , opacity : 0};
    },
    animate:{x:0, opacity : 1 ,transition:{type:'spring', delay:0.5}},
    exit: (direction) => {
      if(direction.pathname !== direction.pathname) {
        return {x:'100vw', transition:{duration:0.2}};
      }else {
        if(direction.pathname !== '/' && direction.pathname !== '/base' && direction.pathname !== 'toppings') {
          return {x:'-100vw', transition:{duration:0.2}};
        }else {
          return {x:'100vw', transition:{duration:0.2}};
        }
      }
    }
  }

  export const animationContainerHome = {
      hidden:{scale : 0, opacity: 0},
      visible:{scale : 1 ,opacity: 1, transition:{delay : .5, type:'spring', stiffness : 200}},
      exit:{x:'-100vw', transition:{duration:0.2}}
  }
  
  export const animationChildren = {
    initial:{x : '-100vh'},
    animate:{x : 0, transition:{type:'spring', stiffness:150}},
  }

  export const animationContainer2 = {
    hidden:{x:'100vw'},
    visible:{
        x:0, 
        transition:{
          type:'spring', 
          mass:1, 
          when:'beforeChildren',
          staggerChildren : 0.5
        }
    },
    exit: (direction) => {
      if(direction.pathname !== direction.pathname) {
        return {x:'100vw', transition:{duration:0.2}};
      }else {
        if(direction.pathname !== '/' && direction.pathname !== '/base' && direction.pathname !== '/toppings' && direction.pathname !== '/order') {
          return {x:'-100vw', transition:{duration:0.2}};
        }else {
          return {x:'100vw', transition:{duration:0.2}};
        }
      }
    }
  }
  
  export const animationChildren2 = {
    hidden : {opacity : 0},
    visible : {opacity : 1}
  }

  export const animationChildrenTopings = {
    initial:{x : '-100vh'},
    animate:{x : 0, transition:{type:'spring', stiffness:150}},
    whileHover : {
      scale : 1.1,
      textShadow : '0px 0px 8px white',
      boxShadow : '0px 0px 8px white',
      transition : {
        duration : 0.2,
        yoyo : Infinity
      }
    }
  }