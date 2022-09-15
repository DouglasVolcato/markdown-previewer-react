const { useState, useEffect } = React;

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3

  > blockquote

  [title](https://www.example.com)

  \`code\`

  \`\`\`
  code bock
  \`\`\`

  1. First item
  2. Second item
  3. Third item

  - First item
  - Second item
  - Third item

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(text);
  }, [text]);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        className="textarea"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <h3 className="mt-3">Output:</h3>
      <br />
      <div className="Preview" id="preview"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
