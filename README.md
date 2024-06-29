# Signl

This project is a basic implementation of [TC39 signals proposal](https://github.com/tc39/proposal-signals), using the `@vue/reactivity` package.

## Installation

```bash
npm install signl
```

## Usage

A counter app

```ts
import { Signal, effect } from 'signl';

const counter = new Signal.State(0);
const isEven = new Signal.Computed(() => (counter.get() & 1) == 0);
const parity = new Signal.Computed(() => isEven.get() ? 'even' : 'odd');

effect(() => element.innerText = parity.get())

// Simulate external updates to counter...
setInterval(() => counter.set(counter.get() + 1), 1000);
```

## License

MIT
