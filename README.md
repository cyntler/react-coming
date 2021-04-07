[![npm-version](https://img.shields.io/npm/v/react-coming.svg)](https://www.npmjs.com/package/react-coming)
[![npm-download](https://img.shields.io/npm/dt/react-coming.svg)](https://www.npmjs.com/package/react-coming)

# react-coming

React component rendering a simple page with a countdown timer.

## Preview

![preview.png](https://raw.githubusercontent.com/cyntler/react-coming/main/preview.png)

## Motivation

Sometimes, when we are working on a website or web application, we want to do deploy and show something to our users as quickly as possible. The `react-coming` library allows you to quickly render a view with a future date countdown. You can set this component to be enabled and rendered only for the production build, for example.

## Installation

To install the hook you can use npm:

```shell
npm i react-coming
```

or Yarn if you prefer:

```shell
yarn add react-coming
```

## Usage

All you need is simple import the component:

```tsx
import { Coming } from 'react-coming';
```

And render the component:

```tsx
import { render } from 'react-dom';
import { Coming } from 'react-coming';

render(
  <Coming enabled={process.env.NODE_ENV === 'production'} toDate="YYYY-MM-DD">
    <App />
  </Coming>,
  document.getElementById('app')
);
```

**When the countdown is over (0 seconds left) then the `children` prop will be rendered.**

Children will also be rendered if you give a wrong date format.

## Available Props

| Name         | Type    | Description                                                            | Default value           |
| ------------ | ------- | ---------------------------------------------------------------------- | ----------------------- |
| enabled      | boolean | Prop that indicates whether the Coming component should be rendered.   | true                    |
| toDate       | string  | Date in the format `YYYY-MM-DD` to which the component will countdown. | Current date + 3 Months |
| toTime       | string  | Time in `HH:MM` format to which the component will countdown.          | 00:00                   |
| daysLabel    | string  | Label text for days.                                                   | days                    |
| hoursLabel   | string  | Label text for hours.                                                  | hours                   |
| minutesLabel | string  | Label text for minutes.                                                | minutes                 |
| secondsLabel | string  | Label text for seconds.                                                | seconds                 |
