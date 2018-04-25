Container contains Grid component

The responsive layout also provides fixed-width containers. Calls props API from Container wrapper component

xlarge(1280), large(960), medium(840), small(600), xsmall(480)

e.g: `fixSize = "xlarge";`

```js
<Container style={{ background: "#f3f3f3"}}>
  <div style={{padding: "1em"}}>Full width </div>
</Container>

<br/>

<Container fixSize="xlarge" style={{ background: "#f3f3f3"}}>
  <div style={{padding: "1em"}}>xlarge </div>
</Container>

<br/>

<Container fixSize="large" style={{ background: "#f3f3f3"}}>
  <div style={{padding: "1em"}}>large </div>
</Container>

<br/>

<Container fixSize="medium" style={{ background: "#f3f3f3"}}>
  <div style={{padding: "1em"}}>medium </div>
</Container>

<br/>

<Container fixSize="small" style={{ background: "#f3f3f3"}}>
  <div style={{padding: "1em"}}>small </div>
</Container>

<br/>

<Container fixSize="xsmall" style={{ background: "#f3f3f3"}}>
  <div style={{padding: "1em"}}>xsmall </div>
</Container>
```
