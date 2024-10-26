# ICS-in-CSS

### React Component for the International Code of Signals Flags

> The International Code of Signals is an international system of signals and codes for use by vessels to communicate important messages regarding safety of navigation and related matters.

– [Wikipedia](https://en.wikipedia.org/wiki/International_Code_of_Signals)

## About

ICS-in-CSS is an CSS implementation of the ICS flags, packaged in a React component.

- [NPM](https://www.npmjs.com/package/@tomerlichtash/ics-css-react)
- [Storybook](https://tomerlichtash.github.io/ics-css-react/)

## Getting started

Install ICS-in-CSS:

```
npm i @tomerlichtash/ics-css-react
```

## Components

### `Flag`

#### Alphabet

```
<Flag
  value="alfa" /* Use letter code name, e.g. "charlie" */
  type="normal" (optional; supported types: `number` | `substitute`)
  size="md"
/>
```

### `Text`

Text component to render flags in running text.

Usage:

```
<Text>
  Hello [[charlie]] world
</Text>
```

### `Spell`

Spell component transforms a string to flags.

```
<Spell>
  Hello [[charlie]] world
</Spell>
```
