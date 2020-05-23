---
slug: "window-dimensions-hooks-my-first-published-npm-package"
title: "window-dimensions-hooks: My First Published NPM Package"
subtitle: "I always wanted to publish my very own NPM module, but never had any ideas until I built a hook for an actual use-case."
# image: ./gamenightscore-screenshot.png
# imageTitle: "GamenightScore Lobby"
# imageAlt: "screenshot of gamenightscore app with player's scores"
# date: "2019-11-09T00:00:00-07:00"
tags:
  - "react"
  - "hooks"
  - "npm"
  - "package"
  - "install"
# type: "blogPost"
---

I am so excited to announce that I've finally written and published my very own NPM package! It's called window-dimensions-hooks. You can check it out [on NPM](https://www.npmjs.com/package/window-dimensions-hooks) or see the [source code on github](https://github.com/jacobdcastro/window-dimensions-hooks).

## The Idea

Before I even knew I was going to turn this into a custom React hook, I started developing this feature by adding simple logic in a React component. The project I was working on was using some more-complex-than-I'm-used-to CSS. Plus, it was using my favorite CSS-in-JS library: [styled-components](https://styled-components.com).

The component needed to somehow get the width of the window so that some CSS properties could scale properly. But this was beyond media queries, flex box, or margin:auto. It needed the actual integer value of `window.innerWidth`.

Loving styled-components the way that I do, I installed it knowing I could simply get the `window.innerWidth`, pass it to the styled component as a prop, and use the window width integer in the CSS. But that was quickly debunked after resizing the window; the value sent to the CSS wasn't changing.

I soon added local state via `useState` in the component that held the window's current width, as I planned on sending the width to more than one component as a prop. It's good to ensure a single source of truth.

So how do I get the state to update when the window is resized?

Event listeners! Which I placed in the `useEffect` hook. My component now looked something like this:

```javascript
// MyComponent.js

const MyComponent = () => {
  const [width, setWidth] = useState(null);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <StyledComponent width={width} />;
};
```

I came to this after a bunch of tinkering. But finally, things were beginning to work as planned, the logic was clean, and the integer was being sent to the styled component as planned.

But then I realized I had a few other completely separate components that needed the same logic. Three components needed access to a live-updating window width value. So I was faced with a couple of options.

### Idea #1

My first thought was to use the Context API. I've used it before and it made sense. Wrap the entire app in a component that handles the logic I just wrote, then passes the value to a context provider where I can then access the window width value from any component.

_this just seems so 2018... there has to be a better way_

### Idea #2

_OH WAIT, can't you write custom hooks? Let's read the docs._

I'd never written my own hook but I know that it can be done. So I read the [React documentation that covers how to do it](https://reactjs.org/docs/hooks-custom.html). And the more I understood the 'how', the more I was convinced that custom hooks were the way to go.

Idea #2 it is!

## Moving the Logic to a Hook

I first created a new file called `useWindowWidth.js` and threw an arrow function in there called... You guessed it: `useWindowWidth()`.

Mirroring the original component, in the new function, I placed a `useState()` to store the current value of `window.innerWidth` and `useEffect()` to store the initial width, then add the event listener upon mounting the component.

Additionally, I added a `removeEventListener` method when the component dismounts via the return statement in `useEffect()`. There's no need to keep listening for the window width when you don't need it!

Since this module is specific to browser windows, there's no need to add `window.addEventListener` when the `window` object doesn't even exist (in the case of server-side rendering, etc.). So I added an `if` statement to check if the window exists before adding the listeners.

The final `useWindowWidth()` custom hook ended up looking like this:

```javascript
import * as React from "react";

// custom hook
const useWindowWidth = () => {
  const [width, setWidth] = React.useState(null);

  // sets width when window is resized (from event listener)
  const handleWindowResize = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    // only runs if in browser
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth); // sets initial width
      window.addEventListener("resize", handleWindowResize, true);

      return () => {
        window.removeEventListener("resize", handleWindowResize, true);
      };
    }
  }, []);

  // if width is null, return 0 to prevent type errors
  return width ? width : 0;
};

export default useWindowWidth;
```

I also wanted to add a hook to calculate the `window.innerHeight` in case it was ever needed. It was as easy as making a new file, and adding all of the previous code and changing every word "width" to "height". Boom, `useHeight()` was created.

## Implementation

It was officially time to use the hook in my component! Remember the original component I created? After importing `useWindowWidth`, it went from this...

```javascript
const MyComponent = () => {
  const [width, setWidth] = useState(null);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <StyledComponent width={width} />;
};
```

...to this!

```javascript
const MyComponent = () => {
  const width = useWindowWidth();
  return <StyledComponent width={width} />;
};
```

Now I can slap that **one** line of code into any component and it can access the ever-updating value of a window's dimensions!

## Idea #3

I was so excited by this point. I just wrote two working custom hooks and I was really feeling myself. But I had another thought...

_what if I ever needed access to **both** the height and width?_

I really didn't want to import two hooks and then use them both on separate lines to be able to use the height and width. So I opted to create a third hook that returned an object with height and width key-value pairs.

This... is where things take a bit of a turn. This task wasn't as simple as the previous two custom hooks.

In order to provide two values instead of one, it made sense that this hook returned an object with two key-value pairs: height and width. But in order to return an object, I first must create it. Time to develop this. Easy, right?

## Engineering `useWindowDimensions()`

First, a bit of backstory... I recently I had a deep dive into Redux while creating my full stack web application (I wrote a [blog post](https://jacobdcastro.com/blog/creating-my-first-full-stack-app-from-scratch-part-1) on this). So when it comes to state management, my mental model naturally goes right to a Redux-like architecture with action types, reducers, and the like.

With that in mind, I originally developed this third custom hook to replace the **entire object** in state every time the window was resized. This seemed inefficient, especially if the width changed but the height didn't. Why update the height with the literal same value when it didn't change?

\*Redux mental model calls in the distance\*

_Time to reframe this... What if I added a `switch` statement like I've used in Redux? I can define an "action type" and then update *only* the value that changed depending on the action, or, window resize type._

It was time to just start hacking away.

I figured there would need to be two switch statements: one to figure out what "type" of change happened (action type), and one to initialize the newly changed value (reducer).

Thankfully, there's a built-in feature in React for this to work well, the `useReducer` hook!

### How It Works

1. Upon resizing the window, the first switch function (`checkResizeType()`) would be called to identify on which axis the window was resized, then return one of four different action types.

   - xChange
   - yChange
   - xyChange
   - noChange

2. Once the "action type" is returned, the second switch function (`getNewState()`) is called to update what value...........
