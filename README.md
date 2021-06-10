# Fibonacci Calculator

## Requirements:

[X] The app will have a main component centred on the page both horizontal and vertical
- For this purpose a have created a div with these css styles

``` css
.App-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
}
```

[X] The component will display an input field, a button and an empty div where we will display some information

- For this I have created different React components:
  - `NaturalNumberInput`
  - `CalculationResults`


[X] The input field should allow only numeric values
- For this I have added some validation in the `NaturalNumberInput` component

[X] When you click the button, the app should get the value from the input, send it to a function that will run some calculations and then display the result inside the empty div
- For this I had to create React state variables using `useState` hook in the `App`component
``` javascript
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(undefined);
```


[X] The function will receive just one numeric parameter and will return the value of the Fibonacci sequence for that position. We will assume the Fibonacci sequence starts with 1. Example:

  - Fibonacci(0) = 0
  - Fibonacci(1) = 1
  - Fibonacci(5) = 5
  - Fibonacci(6) = 8
  - Fibonacci(10) = 55

 For this purpose I have created a module `fibonacci.js` that handles all the calculations.

[X] Unit test are optional
- I have made unit test for all components/utils and also two integration tests.

[X] CSS, design and any other addition to the app are optional as well but feel free to add whatever you want here if you feel the need
- For this purpose I have modified CSS to make the app look good.

## Folder structure:
```
react-fibonacci-calculator
├── LICENSE
├── README.md
├── coverage.png
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── components
    │   ├── App
    │   │   ├── App.css
    │   │   ├── App.js
    │   │   └── App.test.js
    │   ├── CalculationResult
    │   │   ├── CalculationResult.css
    │   │   ├── CalculationResult.js
    │   │   └── CalculationResult.test.js
    │   └── NaturalNumberInput
    │       ├── NaturalNumberInput.css
    │       ├── NaturalNumberInput.js
    │       └── NaturalNumberInput.test.js
    ├── index.css
    ├── index.js
    ├── index.test.js
    ├── setupTests.js
    └── utils
        ├── fibonacci.js
        ├── fibonacci.test.js
        ├── string-utils.js
        └── string-utils.test.js
```

&nbsp;

&nbsp;
## App screenshots:

![](/screenshots/app1.png)
![](/screenshots/app2.png)
![](/screenshots/app3.png)


&nbsp;

&nbsp;
## Tests coverage:
![Test coverage](/screenshots/coverage.png)
