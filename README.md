># `React`
React is a library of JS that used to create website . It allows us to easily create single page Apps- SPA's for short

>### `Features of React`
* Quick, responsive apps
* Uses virtual dom
* Does server side rendering
* One way data binding / Single-Way data 􀁼ow
* Open source

>### `SPA (Single page Application)`
* You load the app code JUST once
* The JavaScript framework (like React, AngularJS) intercepts the    browser events
   * Instead of making a new request to the server that then returns a new document
   * Behaves more like a desktop application
* You don't need to refresh the page for updates
    * Your framework handles reload internally

>### `Difference Between Library & Framework`
* A Tool that provides specific functionality

* A set of tools and guidelines for building apps
---
---
>## `Installation`

>### `Node.js`
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

* Node.js and NPM or Yarn
* NPM amd Yarn are package manager for Javascript.
   * Allows us to easily install Javascript libraries

* Download Node here - https://nodejs.org/en/



>### `Check node version`
```
node -v
```

>### `React Intallation`

```
npm create vite@latest
```
or
```
  npx create-react-app  project name
```  

---
---

>## `React JSX`
JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessor (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

#### JSX-RULES

* Always return single element
* div / section / artical or Fragment
* Use camel case for html attributes
  * class -> className
* close every element
   * </>
* use parenthesis at return so that formatting is not an issue.

#### Using JSX
```jsx
var nav = (
  <ul id="nav">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Clients</a>
    </li>
    <li>
      <a href="#">Contact Us</a>
    </li>
  </ul>
);
```
#### Without JSX
```jsx
var nav = React.createElement(
  "ul",
  { id: "nav" },
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "#" }, "Home")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "#" }, "About")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "#" }, "Clients")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "#" }, "Contact Us")
  )
);
```

>### `Babel`
Babel is javascript compiler.it converts ES6 into old java script code.
In ES6 we may not use semicolon ;

>### `Folder Structure`
![logo](https://github.com/A-jha/React-Complete/raw/master/tutorial/Images/React-complete.png)

---
---
>## `Components`
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components

```jsx
//Create a Class component called Car
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```


```jsx
// Create a function component named App
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}
```
* **we can assign numbers, strings, etc to variables and output them within curly braces in template, it is called dynamic value.**

```jsx
function App() {
    const greetings = 'hello world';
    const num = 20;
    const link = 'https://.google.com.tw';
  return (
    <div className="App">
      <div className="content">
            <h1>App Component</h1>
            <p>{greeting}</p>
            <div>{num}</div>
            <a href={ link }>about</a>

            //we can also output data directly inside curly braces
            <p>{'This is Sam'}</p>
            <p>{ [1, 2, 3, 4, 5] }</p>
      </div>
    </div>
  );
}
```














