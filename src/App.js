import './App.css';
import React from 'react';
import Calc from './Calculator';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

function App() {
    let result = "";

    function checkErr() {
        if (document.getElementById("calcDisplay").textContent === "Too much!") {
            document.getElementById("calcDisplay").textContent = "";
            result = ""
        }
    }

    const calcValue = (e) => {
        switch (e.target.textContent) {
            case "1":
                checkErr();
                result += "1";
                break;
            case "2":
                checkErr();
                result += "2";
                break;
            case "3":
                checkErr();
                result += "3";
                break;
            case "4":
                checkErr();
                result += "4";
                break;
            case "5":
                checkErr();
                result += "5";
                break;
            case "6":
                checkErr();
                result += "6";
                break;
            case "7":
                checkErr();
                result += "7";
                break;
            case "8":
                checkErr();
                result += "8";
                break;
            case "9":
                checkErr();
                result += "9";
                break;
            case "0":
                checkErr();
                result += "0";
                break;
            case "AC":
                checkErr();
                result = ""
                break;
            case "C":
                checkErr();
                result = result.slice(0, -1);
                break;
            case "+\\-":
                checkErr();
                result = +result
                result = result > 0 ? -result : result - result * 2;
                break;
            case "/":
                checkErr();
                if (result.length !== 0) {
                    result[result.length - 1] === "/" ? result = result : result += "/";
                }
                break;
            case "*":
                checkErr();
                if (result.length !== 0) {
                    result[result.length - 1] === "*" ? result = result : result += "*";
                }
                break;
            case "-":
                checkErr();
                if (result.length !== 0) {
                    result[result.length - 1] === "-" ? result = result : result += "-";
                }
                break;
            case "+":
                checkErr();
                if (result.length !== 0) {
                    result[result.length - 1] === "+" ? result = result : result += "+";
                }
                break;
            case ",":
                checkErr();
                if (result.length !== 0) {
                    result[result.length - 1] === "," ? result = result : result += ",";
                }
                break;
            case "=":
                checkErr();
                if (result.length !== 0) {
                    result = eval(result).toFixed(2);
                }
                break;
            default:
                checkErr();
                console.log("i don't know")
                break;
        }

        if (document.getElementById("calcDisplay").textContent.length >= 9) {
            document.getElementById("calcDisplay").textContent = "Too much!"
        } else {
            document.getElementById("calcDisplay").textContent = result
        }
    }

    return (
        <div className='uk-container uk-section'>
            <div className="uk-width-expand@s uk-text-center uk-flex uk-flex-center uk-flex-column">
                <h1 className='uk-margin-remove uk-padding-remove' data-uk-scrollspy="cls:uk-animation-slide-top">Calculator</h1>
                <div className='calc-container uk-padding-small uk-width-1-3@l uk-align-center' data-uk-scrollspy="cls:uk-animation-fade">
                    <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                        <div className='calc-display'>
                            <div className="uk-text-right">
                                <h1 id="calcDisplay" className='color-white uk-padding-small'></h1>
                            </div>
                        </div>
                    </div>

                    <div className="uk-grid-collapse uk-child-width-1-4 uk-text-center" data-uk-grid>
                        <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">AC</div>
                        </div>
                        <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">+\-</div>
                        </div>
                        <div className='calc-button calc-button-modification' onClick={calcValue}>
                            <div className="uk-padding-small">C</div>
                        </div>
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
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">5</div>
                        </div>
                        <div className='calc-button' onClick={calcValue}>
                            <div className="uk-padding-small">6</div>
                        </div>
                        <div className='calc-button calc-button-operation' onClick={calcValue}>
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
                        <div className='calc-button uk-width-expand' onClick={calcValue}>
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
            </div>
        </div>
    );
}

export default App;
