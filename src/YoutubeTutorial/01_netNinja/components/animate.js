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
  
  export const animationContainer = {
    initial:{x:'100vw'},
    animate:{x:0, transition:{type:'spring', delay:0.5}}
  }
  
  export const animationChildren = {
    initial:{x : '-100vh'},
    animate:{x : 0, transition:{type:'spring', stiffness:150}},
  }