

// function calculateTriangle() {
//   // triangle-base
//   // const triangleBase = document.getElementById('triangle-base');
//   // const triangleBaseValue = triangleBase.value;
//   // const base = parseFloat(triangleBaseValue)
//   // console.log(base) ;

//   // triangle-hight
//   const triangleHight = document.getElementById('triangle-hight');
//   const triangleHightValue = triangleHight.value;
//   const hight = parseFloat(triangleHightValue);
//   // console.log(hight) ;

//   // Calculate

//   const result = 0.5 * base * hight;
//   console.log(result);


//   // Triangle Area
//   const TriangleArea = document.getElementById('triangle-area');
//   TriangleArea.innerText = result;
// }




// Triangle Area

function calculateTriangle() {

  const triangleBase = calculateInput('triangle-base') ;
  console.log(triangleBase)

  const rectangleHight = calculateInput('triangle-hight') ;
  console.log(rectangleHight)

  // Calculate 
  const result = 0.5 * triangleBase * rectangleHight ;
  console.log(result) ;

  setInnerText('triangle-area', result)
}

// Rectangle Area 

function calculateRectangle(){
  
  // rectangle Width
  const rectangleWidth = calculateInput('rectangle-width') ;
  console.log(rectangleWidth) ;

  // Rectangle Hight 
  const rectangleHight = calculateInput('rectangle-hight') ;
  console.log(rectangleHight) ;

  // calculate Rectangle 
  const rectangleResult = rectangleWidth * rectangleHight ;
  console.log(rectangleResult)

  // rectangle Area 
  setInnerText('rectangle-area' , rectangleResult ) ;

}



// Parallelogram Area 


function calculateParallelogram(){
 
  // Parallelogram Width
  const parallelogramWidth = calculateInput('parallelogram-width') ;
  // console.log(parallelogramWidth) ;

  // Parallelogram Hight 
  const parallelogramHight = calculateInput('parallelogram-hight') ;
  // console.log(parallelogramHight) ;

  // calculate Parallelogram
  const result = parallelogramWidth * parallelogramHight ;
  // console.log(result)

  // Parallelogram Area 
  setInnerText('parallelogram-area' , result ) ;

}



// Rhombus Area 


function calculateRhombus(){
 
  // Rhombus Width
  const rhombusWidth = calculateInput('rhombus-width') ;
  // console.log(rhombusWidth) ;

  // Rhombus Hight 
  const rhombusHight = calculateInput('rhombus-hight') ;
  // console.log(rhombusHight) ;

  // calculate Rhombus
  const rhombusResult = rhombusWidth * rhombusHight ;
  // console.log(rhombusResult)

  // Rhombus Area 
  setInnerText('rhombus-area' , rhombusResult ) ;

}




// Pentagon Area 


function calculatePentagon(){
 
  // Pentagon Width
  const pentagonWidth = calculateInput('pentagon-width') ;
  // console.log(pentagonWidth) ;

  // Pentagon Hight 
  const pentagonHight = calculateInput('pentagon-hight') ;
  // console.log(pentagonHight) ;

  // Pentagon calculate
  const pentagonResult = pentagonWidth * pentagonHight ;
  // console.log(pentagonResult)

  // Pentagon Area 
  setInnerText('pentagon-area' , pentagonResult ) ;

}





// Ellipse Area 


function calculateEllipse(){
 
  // Ellipse Width
  const ellipseWidth = calculateInput('ellipse-width') ;
  // console.log(ellipseWidth) ;

  // Ellipse Hight 
  const ellipseHight = calculateInput('ellipse-hight') ;
  // console.log(ellipseHight) ;

  // Ellipse Calculate
  const ellipseResult = 3.14 * ellipseWidth * ellipseHight ;
  // console.log(ellipseResult)

  // Ellipse Area 
  setInnerText('ellipse-area' , ellipseResult ) ;

}


// All Input Call 

function calculateInput(input1) {
  const input = document.getElementById(input1);
  const inputValue = input.value ;
  // console.log(inputValue)
  return inputValue ;

}

function setInnerText (elementId , area){
  const element = document.getElementById(elementId) ;
  element.innerText = area ;
  
}











// function calculateRectangle() {
//   // rectangleBase Width
//   const rectangleBase = document.getElementById('rectangle-width');
//   const rectangleBaseValue = rectangleBase.value;
//   console.log(rectangleBaseValue);

//   // rectangle hight

//   const rectangleHight = document.getElementById('rectangle-hight');
//   const rectangleHightValue = rectangleHight.value;
//   console.log(rectangleHightValue);

//   // calculate Rectangle 
//   const result = rectangleBaseValue * rectangleHightValue;
//   console.log(result)

//   // rectangle Area 
//   const rectangleArea = document.getElementById('rectangle-area');
//   rectangleArea.innerText = result;


// }




