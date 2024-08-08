function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

const initialMarkdown = `
### Headers
  
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://www.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Enginee")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://i.pinimg.com/236x/72/bc/09/72bc091246361583fba7a93a31f898b9.jpg 'Cute Gold Retriever')

### Blockquote

> "Arise, Awake and Stop not until the goal is reached."
> -- Swami Vivekananda

> "A winner is a dreamer who never gives up."
> -- Nelson Mandela

### Code Block

\`npm install create-react-app -g\`

\`\`\`
function myFunction(p1, p2) {
    return p1 * p2; 
}

const name = 'Drake'
const age = 32
const number = Math.random() * 10
\`\`\`
`;
var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
};

// breaks stands for the new line between the elements. If it is false the elements will be in the same line
marked.setOptions({
  renderer,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => this.setState({ markdown: e.target.value }));this.state = { markdown: initialMarkdown };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("h3", { id: "edit-tab" }, /*#__PURE__*/React.createElement("i", { class: "fas fa-code" }), " Edit"), /*#__PURE__*/
      React.createElement("h3", { id: "preview-tab" }, /*#__PURE__*/React.createElement("i", { class: "far fa-eye" }), " Preview"), /*#__PURE__*/
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "left" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "right" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } }))), /*#__PURE__*/


      React.createElement("footer", { className: "text-center" }, "2019 Coded with", /*#__PURE__*/React.createElement("i", { class: "far fa-heart" }), " by Margaret Bog")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));