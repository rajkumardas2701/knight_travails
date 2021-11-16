import calculateSteps from './calculateSteps';

const displayController = () => {
  // console.log(content);
  const displayForm = (mainFrame) => {
    // console.log("Inside display form", mainFrame);
    const positionForm = document.createElement('div');
    positionForm.setAttribute('class', 'position-form');
    mainFrame.appendChild(positionForm);

    const form = document.createElement('form');
    form.setAttribute('class', 'main-form');
    positionForm.appendChild(form);

    const firstInput = document.createElement('div');
    firstInput.setAttribute('class', 'input-section');
    firstInput.innerText = 'Enter start point';
    form.appendChild(firstInput);

    const input1x = document.createElement('input');
    input1x.setAttribute('class', 'input-text');
    firstInput.appendChild(input1x);

    const input1y = document.createElement('input');
    input1y.setAttribute('class', 'input-text');
    firstInput.appendChild(input1y);

    const secondInput = document.createElement('div');
    secondInput.setAttribute('class', 'input-section');
    secondInput.innerText = 'Enter end point';
    form.appendChild(secondInput);

    const input2x = document.createElement('input');
    input2x.setAttribute('class', 'input-text');
    secondInput.appendChild(input2x);

    const input2y = document.createElement('input');
    input2y.setAttribute('class', 'input-text');
    secondInput.appendChild(input2y);

    const calculate = document.createElement('button');
    calculate.setAttribute('class', 'calculate-btn');
    calculate.innerText = 'Calculate Path';
    form.appendChild(calculate);

    const displayVal = document.createElement('p');
    displayVal.setAttribute('class', 'display-value');
    positionForm.appendChild(displayVal);

    form.onsubmit = (event) => {
      event.preventDefault();
      // console.log(input1x.value);
      displayVal.innerText = calculateSteps(input1x.value,
        input1y.value, input2x.value, input2y.value);
      input1x.value = '';
      input1y.value = '';
      input2x.value = '';
      input2y.value = '';
    };
  };

  // const displayChessBoard = (mainFrame) => {
  //   const chessBoard = document.createElement('div');
  //   chessBoard.setAttribute('class', 'chessboard');
  //   mainFrame.appendChild(chessBoard);
  // };

  const displayFrame = () => {
    const content = document.getElementById('content');

    const mainFrame = document.createElement('div');
    mainFrame.setAttribute('class', 'main-frame');
    content.appendChild(mainFrame);

    displayForm(mainFrame);
    // displayChessBoard(mainFrame);
  };

  return {
    displayFrame,
  };
};

export default displayController;