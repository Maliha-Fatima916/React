# React Notes

## 1. What is JSX?
**JSX** stands for **JavaScript XML**.  
It’s a syntax extension for JavaScript that lets you write **HTML-like code inside JavaScript**.

Example:
```jsx
const element = <h1>Hello World!</h1>; // JSX
````

👉 In simple words: JSX is **90% HTML** (with a few rules).
To inject **JavaScript variables / expressions**, use `{}`.

---

### Rules of JSX

1. Names of React function components must **start with a capital letter**.
   Example: `App()`
2. JSX elements must be wrapped inside a **single parent element**.
   Example: `<div>` or **React Fragment** (`<> </>`).
3. Use `{}` to insert **JavaScript variables / expressions**.
4. Attributes of JSX tags are written in **camelCase**.
   Example: `newVariable`
5. In JSX:

   * `class` ➝ `className`
   * `for` ➝ `htmlFor`
6. Self-closing tags like `<img>` or `<br>` must be written as:

   ```jsx
   <img />
   <br />
   ```
7. To use a React component inside another component, write it like:

   ```jsx
   function App() {
     return <Method2 />;
   }
   ```

---

## 2. Do Browsers Understand JSX?

❌ **No.** Browsers cannot understand JSX directly.
✅ React uses a **compiler (Babel)** to convert JSX into normal JavaScript.

Example:

```jsx
const element = <h1>Hello</h1>;
```

After Babel conversion:

```js
const element = React.createElement('h1', null, 'Hello');
```

---

## 3. Do We Need JSX to Use React?

Not necessarily. JSX just makes React development **easier and more readable**.

Without JSX, React UI looks like this:

```js
const element = React.createElement('h1', null, 'Hello React');
```

Flow:

```
JSX → React.createElement() → JavaScript objects (Virtual DOM)
```

👉 This transformation is what Babel does for us.

---

## 4. What is Virtual DOM?

* DOM = Tree of objects in memory (representation of UI).
* **Virtual DOM** = A lightweight, in-memory version of the DOM created by React.

In short:

> React builds a tree in memory describing the UI.

### ✅ How Does It Fit in the Flow?

1. **App.js (JSX)** → You write UI with JSX.
2. **Babel** → Converts JSX → `React.createElement()`.
3. **React.createElement()** → Creates Virtual DOM nodes (JavaScript objects).
4. React compares Virtual DOM with the real DOM and updates **only what’s changed**.

---

## 5. What is `createRoot()` in `index.js`?

`createRoot()` does the following:

* **Links React to a real DOM element** (usually `<div id="root">` in `index.html`).
* Prepares React to deliver components/UI into that real DOM container.
* Disposes (renders) the Virtual DOM into the real DOM.

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### Process:

1. `createRoot()` connects React to the **real DOM**.
2. `root.render(<App />)`:

   * React builds a Virtual DOM tree for `<App />`.
   * Compares it with the previous tree (if any).
   * Updates the **Real DOM efficiently** (instead of reloading everything).




