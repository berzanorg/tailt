# tailt
⚡ ⚛️ Create blazingly fast custom React components

<br>

 Let's create a customized `button` component.
```jsx
const MyButton = tailt.button`
  bg-blue-500
`
```
 Voila! Now, use it like a component.
```jsx
<MyButton>Hello</MyButton>
```
Let's add an onClick attribute.
```jsx
<MyButton onClick={func}>Hello</MyButton>
```
- Tailt supports all HTML element attributes. 
- So, you can add them as like as props.

<br>

> The library requires TailwindCSS to be installed.

<br>

## Installation
#### NPM
```
npm i tailt
```
#### Yarn
```
yarn add tailt
```

## Docs

#### Supported HTML elements
- `a`
- `article`
- `button`
- `div`
- `form`
- `footer`
- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`
- `header`
- `input`
- `label`
- `li`
- `main`
- `nav`
- `p`
- `section`
- `span`
- `text-area`
- `ul`

## Building
#### Installing all dependencies
```
yarn
```
#### Compiling TypeScript
```
yarn tsc
```

## Notes
If you find a bug or want an improvement, please create a pull request.

Made with ❤️ by `@BerzanXYZ`
