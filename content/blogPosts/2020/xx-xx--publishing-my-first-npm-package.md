---
slug: "window-dimensions-hooks-my-first-published-npm-package"
title: "window-dimensions-hooks: My First Published NPM Package"
subtitle: "I always wanted to publish my very own NPM module, but never had any ideas until I built a hook for an actual use-case."
# image: "gamenightscore-screenshot.png"
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

I soon added local state via `useState` in the component that held the window's current width, as I planned on sending the width to more components as props. It's good to ensure a single source of truth.

So how do I get the state to update when the window is resized?

Event listeners! Which I placed in the `useEffect` hook. My component now looked something like this:

```javascript
const MyComponent = () => {
	const [width, setWidth] = useState(null);
	const handleResize = () => setWidth(window.innerWidth);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWidth(window.innerWidth);
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, []);

	return <StyledComponent width={width} />
}
```

I came to this after a bunch of tinkering. But finally, things were beginning to work as planned, the logic was clean, and the integer was being sent to the styled component as planned.

But then I realized I had a sibling AND parent component that needed the same logic. Three separate components needed access to a live-updating window width value. So I was faced with a couple of options.

#### Idea #1

My first thought was to use the Context API. I've used it before and it made sense. Wrap the entire app in a component that handles the logic I just wrote, then passes the value to a context provider where I can then access the window width value from any component.

_this just seems so 2018... there has to be a better way_

#### Idea #2

_OH WAIT, can't you write custom hooks? Let's read the docs._

I'd never written my own hook but I know that it's been done before. So I read all about how to write custom hooks on the React documentation. And the more I read about the 'how', the more I was convinced that hooks were the way to go.
