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

### JSX-RULES

* Always return single element
* div / section / artical or Fragment
* Use camel case for html attributes
  * class -> className
* close every element
   * </>
* use parenthesis at return so that formatting is not an issue.

### Using JSX
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
### Without JSX
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

>## `Babel`
Babel is javascript compiler.it converts ES6 into old java script code.
In ES6 we may not use semicolon ;

>## `Folder Structure`
![logo](https://github.com/A-jha/React-Complete/raw/master/tutorial/Images/React-complete.png)

---
---
>## `Components`
A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI

Components come in two types, Class components and Function components

* The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. 

```jsx
//Create a Class component called Car
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
* Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters,

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

>### `Nested components`
Nested components in React.js help you create more complex view element structures.

* A react fuctional component returns a paragraph.
```jsx
//explicit return
const About = () => {
  return <p>Welcome to react tutorail</p>;
};
```
* A react component using above component inside it.
  
```jsx
// implicit return
const Person = () => (
  <h2>
    Hello
    <About />
  </h2>
);
```
* This is the main component which is going to render.

```jsx
function Greeting() {
  return (
    <div>
      <Person />
      <About />
    </div>
  );
}
```

>### `Reusable component`
A Reusable component is a piece of User Interface that can be used in many parts of an application to build and render different User Interface instances.
```jsx
 <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Sam')} title="Sam Blogs!" />
  </div>
```

---
---

>## `Adding Styles`
There are many ways to style React with CSS
* Inline styling
* CSS stylesheets
* CSS Modules

```jsx
const Header = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```
>## `Clicking Events`
* React events are written in camelCase syntax
* React event handlers are written inside curly braces
  
```jsx
<button onClick={shoot}>Take the Shot!</button>
```
```jsx
const Home = () => {

  const handleClick = (e) => {
    console.log('hello ninjas', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
    </div>
  );
}
```
---
---

>## `useState Hook`
useState() hook allows one to declare a state variable inside a function. It should be noted that one use of useState() can only be used to declare one state variable. 

State generally refers to data or properties that need to be tracking in an application.

* ### Import useState
To use the useState Hook, we first need to import it into our component.
```jsx
import { useState } from "react";
```

* ### Initialize useState
**useState** accepts an initial state and returns two values:
 * The current state.
 * A function that updates the state.
```jsx
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

```jsx
import { useState } from "react";

const Home = () => {
  // let name = 'Hritik';
  const [name, setName] = useState('Hritik');
  const [age, setAge] = useState(24);

  const handleClick = () => {
    // name = 'Sam';
    setName('Sam');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
} 

export default Home;
```
>## `useEffect Hooks`
The useEffect Hook allows you to perform side effects in your components.
* useEffect run after every render.
* useEffect accepts two arguments, The second argument is optional.

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
```
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

* ### useEffect dependencies
The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.
```jsx
const [name, setName] = useState('Sam')

useEffect(() => {
    console.log('use effect ran');
    console.log(name);
},[name]);

 <button onClick={() => setName('Hritik')}>Change Name</button>
 <p>{name}</p>
```

---
---

>## ` Outputting Lists`
In React, you will render lists with some type of loop.
The JavaScript map() array method is generally the preferred method.

* ### keys
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
```jsx
import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Sam', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Sharma', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Jha', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
```

>## `Props`
React allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component

* Props are arguments passed into React components.
* Props are passed to components via HTML attributes.

```jsx
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Sam', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Sharma', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Jha', id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
}
```
* one way using probs
```jsx
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
```
* Another & popular way of using props
```jsx
const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
```
>### ` Functions as Props`
* Define the function in the parent component.
* Pass it as a prop to the child component.
* Use the function in the child component.
```jsx
import {useState} from 'react';

function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('Function ran in Child component');
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count is: {count}</h2>
      <Child handleClick={handleClick} />
    </div>
  );
}
```
>## `JSON`
Install JSON Server
```jsx
npm install -g json-server
```
Start JSON Server
```jsx
json-server --watch to-do\data\db.json --port 8000
```

```json
/blogs          GET       Fetch all blogs
/blogs/{id}     GET       Fetch a single blog
/blogs          POST      Add a new blog
/blogs/{id}     DELETE    Delete a blog

```
* ### Fetch Data from API with useEffect
  * Import useState and useEffect
  * Create our dogImage variable as well as the setDogImage function via useState
  * Create out useEffect function — this is where we'll perform our fetch
  * Within our useEffect function we'll use setDogImage to.. well... set dogImage to the image url that we received
  * Use dogImage as the src for our image so that we can display the random dog

```jsx
// 1. Import *useState* and *useEffect*
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
    // We're setting the default value of dogImage to null, so that while we wait for the
    // fetch to complete, we dont attempt to render the image
  let [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message))
  },[])

  return (
    <div className="App">
        {/* 5. Using *dogImage as* the *src* for our image*/}
    {dogImage && <img src={dogImage}></img>}
    </div>
  );
}

export default App;
```
>## `Conditional Rendering`
There are several ways to do conditionally rendering components.
* **if** Statement 
```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
```
* Logical **&&** operator
```jsx
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}
```
* Ternary Operator
```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}
```
>## `Custom Hooks`
Hooks are reusable functions.

When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
Custom Hooks start with "use". Example: **useFetch**.

* **useFetch.js**
```jsx
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
```
* **index.js**
```jsx
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
```
>## `React Routers`
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.







