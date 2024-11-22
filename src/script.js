class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `# A First Level Header

## A Second Level Header

The quick brown fox jumped over the lazy dog's back.

### Header 3

> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

- This is a list item

\`This is inline code\`

\`\`\`
This is a code block
\`\`\`

[This is a link](https://www.example.com)

![This is an image](https://www.example.com/image.jpg)

**This is bolded text**
`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  rawMarkup() {
    return { __html: marked(this.state.value, { sanitize: true }) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <div className="box demo-card-square mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Input</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <textarea
              id="editor"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
        </div>

        <div className="box demo-card-square mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Output</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <div
              id="preview"
              className="content"
              dangerouslySetInnerHTML={this.rawMarkup()}
            />
          </div>
        </div>
      </div>
    );
  }
}

React.render(<MarkdownEditor />, document.getElementById('app'));