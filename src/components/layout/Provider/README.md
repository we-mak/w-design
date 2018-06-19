Theme provider is based on [styled-components](https://www.styled-components.com/) and making theme with [styled-system](http://jxnblk.com/styled-system/)

[Normalize css is added](https://necolas.github.io/normalize.css/), `Provider` reset styles is used normalize.css at v8.0.0.

```js
<Provider>
  <h1>Default </h1>
  <p>
    Lorem ipsum
    <span>
      <a href="#">dolor </a>
    </span>
    sip amet
  </p>
</Provider>
```

```js
<Provider
  theme={{
    fonts: "Roboto, Helvetica, sans-serif"
  }}
>
  <h1>Roboto</h1>
  <p>
    Lorem ipsum
    <span>
      <a href="#">dolor </a>
    </span>
    sip amet
  </p>
</Provider>
```
