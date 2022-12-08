import './App.css';
import React from 'react';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

// import { render } from '@testing-library/react';

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//     }

//     render() {
//       // change code below this line
//       return (
//         <div className='uk-animation-slide-bottom'>
//             <h1>Hi! This is calculator</h1>
            
//             <p className='uk-text'>Very handy and beautiful calculator, the most important thing is that it counts correctly!</p>
//         </div>
//       );
//       // change code above this line
//     }
//   };

function App() {
  let result = "";
  let arr = [];
  let operatorArr = ["/","*","-","+",".","="];

  const calcValue = (e) => {
    // e.target.className += "";
    switch (e.target.textContent) {
        case "1":
            result += "1";
            break;
        case "2":
            result += "2";
            break;
        case "3":
            result += "3";
            break;
        case "4":
            result += "4";
            break;
        case "5":
            result += "5";
            break;
        case "6":
            result += "6";
            break;
        case "7":
            result += "7";
            break;
        case "8":
            result += "8";
            break;
        case "9":
            result += "9";
            break;
        case "0":
            result += "0";
            break;
        case "AC":
            result = ""
            break;
        case "C":
            result = result.slice(0, -1);
            break;
        case "+\\-":
            result = +result
            result = result > 0 ? -result : result-result * 2;
            break;
        case "/":
            result += "/";
            // for (let i = 0; i < operatorArr.length; i++) {
            //     const element = result.includes(operatorArr[i])
            //     if(element !== true) {
            //         result += "/"
            //     }
            // }
            break;
        case "*":
            result += "*";
            break;
        case "-":
            result += "-";
            break;
        case "+":
            result += "+";
            break;
        case ",":
            result += "."
            break;
        case "=":
            arr.push({
                "nums": result, 
                "match": eval(result)
            })
            result = eval(result);
            break;
        default:
            console.log("i don't know")
            break;
    }
    document.getElementById("calcDisplay").textContent = result
  }

  return (
    <div className='uk-container uk-section'>
        <div className="uk-width-expand@s uk-text-center uk-flex uk-flex-center uk-flex-column">
                <div className='calc-container uk-padding-remove uk-padding-2xsmall' data-uk-scrollspy="cls:uk-animation-fade">
                    {/* <h1 className='uk-light'>Calc</h1> */}
                    <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                        <div className='calc-display'>
                            <div className="uk-padding uk-light uk-text-right uk-height-small">
                            <h1 id="calcDisplay" className='uk-padding-small'>
                            </h1>
                            </div>
                        </div>
                    </div>

                    <div className="uk-grid-collapse uk-child-width-1-4 uk-text-center" data-uk-grid>
                    {/* <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid> */}
                        <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">AC</div>
                        </div>
                        <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">+\-</div>
                        </div>
                        <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">C</div>
                        </div>
                        {/* <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">%</div>
                        </div> */}
                        <div className='calc-button calc-button-operation' onClick={calcValue}>
                            <div className="uk-padding-small">/</div>
                        </div>
                    </div>

                    <div className="uk-grid-collapse uk-child-width-1-4 uk-text-center" data-uk-grid>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">7</div>
                        </div>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">8</div>
                        </div>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">9</div>
                        </div>
                        <div className='calc-button calc-button-operation' onClick={calcValue}>
                            <div className="uk-padding-small">*</div>
                        </div>
                    </div>

                    <div className="uk-grid-collapse uk-child-width-1-4 uk-text-center" data-uk-grid>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">4</div>
                        </div>
                        <div className='calc-button'onClick={calcValue}>
                            <div className="uk-padding-small">5</div>
                        </div>
                        <div className='calc-button'onClick={calcValue}>
                            <div className="uk-padding-small">6</div>
                        </div>
                        <div className='calc-button calc-button-operation'onClick={calcValue}>
                            <div className="uk-padding-small">-</div>
                        </div>
                    </div>

                    <div className="uk-grid-collapse uk-child-width-1-4 uk-text-center" data-uk-grid>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">1</div>
                        </div>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">2</div>
                        </div>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">3</div>
                        </div>
                        <div className='calc-button calc-button-operation' onClick={calcValue}>
                            <div className="uk-padding-small">+</div>
                        </div>
                    </div>

                    <div className="uk-grid-collapse uk-child-width-1-4 uk-text-center" data-uk-grid>
                        <div className='calc-button'>
                            <div className="uk-padding-small"></div>
                        </div>
                        
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">0</div>
                        </div>

                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">,</div>
                        </div>
                        
                        <div className='calc-button calc-button-operation' onClick={calcValue} >
                            <div className="uk-padding-small">=</div>
                        </div>
                    </div>
                </div>
                {/* <div className='uk-text-left' id="results">
                        <div className='uk-animation-slide-bottom'>
                            <h1>Hi! This is calculator</h1>
                            
                            <p className='uk-text'>Very handy and beautiful calculator, the most important thing is that it counts correctly!</p>
                        </div>
                </div> */}
        </div>
    </div>
  );
}

export default App;
