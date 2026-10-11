// Super Sys-Tech Computers Centre Umerkot - HTML & CSS Test
// 100 MCQs generated from the provided syllabus (Topics 1-29)
const QUESTIONS = [
 {
  "id": 1,
  "topic": "HTML Structure",
  "q": "HTML stands for?",
  "options": [
   "Hyper Text Markup Language",
   "High Tech Modern Language",
   "Hyper Transfer Markup Language",
   "Home Tool Markup Language"
  ],
  "answer": 0
 },
 {
  "id": 2,
  "topic": "HTML Structure",
  "q": "The <!DOCTYPE html> declaration in an HTML page indicates?",
  "options": [
   "An HTML comment",
   "The document type - HTML5 document",
   "A JavaScript file",
   "The end of the page"
  ],
  "answer": 1
 },
 {
  "id": 3,
  "topic": "HTML Structure",
  "q": "Which is the correct structure order of an HTML document?",
  "options": [
   "body, head, html",
   "html, head, body",
   "head, body, title only",
   "title, html, body"
  ],
  "answer": 1
 },
 {
  "id": 4,
  "topic": "HTML Structure",
  "q": "The <title> tag is written inside which element?",
  "options": [
   "<body>",
   "<head>",
   "<div>",
   "<footer>"
  ],
  "answer": 1
 },
 {
  "id": 5,
  "topic": "Content Tags",
  "q": "Which tag is used for the largest heading?",
  "options": [
   "<h6>",
   "<head>",
   "<h1>",
   "<heading>"
  ],
  "answer": 2
 },
 {
  "id": 6,
  "topic": "Content Tags",
  "q": "Which tag creates a paragraph?",
  "options": [
   "<para>",
   "<p>",
   "<pg>",
   "<text>"
  ],
  "answer": 1
 },
 {
  "id": 7,
  "topic": "Content Tags",
  "q": "Which tag inserts a line break without starting a new paragraph?",
  "options": [
   "<lb>",
   "<break>",
   "<br>",
   "<hr>"
  ],
  "answer": 2
 },
 {
  "id": 8,
  "topic": "Content Tags",
  "q": "Which tag draws a horizontal line on the page?",
  "options": [
   "<line>",
   "<hr>",
   "<hl>",
   "<row>"
  ],
  "answer": 1
 },
 {
  "id": 9,
  "topic": "Text Formatting",
  "q": "Which tag makes text bold?",
  "options": [
   "<bold>",
   "<stronger>",
   "<b>",
   "<bb>"
  ],
  "answer": 2
 },
 {
  "id": 10,
  "topic": "Text Formatting",
  "q": "Which tag makes text italic?",
  "options": [
   "<it>",
   "<i>",
   "<italic>",
   "<em> only"
  ],
  "answer": 1
 },
 {
  "id": 11,
  "topic": "Text Formatting",
  "q": "Which tag underlines text?",
  "options": [
   "<u>",
   "<un>",
   "<line>",
   "<under>"
  ],
  "answer": 0
 },
 {
  "id": 12,
  "topic": "Text Formatting",
  "q": "Which tag highlights text with a background color (like a marker)?",
  "options": [
   "<hl>",
   "<mark>",
   "<highlight>",
   "<color>"
  ],
  "answer": 1
 },
 {
  "id": 13,
  "topic": "Text Formatting",
  "q": "Which tag shows deleted text with a strikethrough?",
  "options": [
   "<remove>",
   "<cut>",
   "<del>",
   "<strikeout>"
  ],
  "answer": 2
 },
 {
  "id": 14,
  "topic": "Text Formatting",
  "q": "H<sub>2</sub>O - to write '2' below the line, which tag is used?",
  "options": [
   "<sup>",
   "<sub>",
   "<down>",
   "<low>"
  ],
  "answer": 1
 },
 {
  "id": 15,
  "topic": "Text Formatting",
  "q": "x<sup>2</sup> - to write '2' above the line, which tag is used?",
  "options": [
   "<sub>",
   "<top>",
   "<sup>",
   "<up>"
  ],
  "answer": 2
 },
 {
  "id": 16,
  "topic": "Links & Media",
  "q": "Which tag creates a hyperlink?",
  "options": [
   "<link>",
   "<a>",
   "<href>",
   "<url>"
  ],
  "answer": 1
 },
 {
  "id": 17,
  "topic": "Links & Media",
  "q": "Which attribute of <a> specifies the link destination (URL)?",
  "options": [
   "src",
   "alt",
   "href",
   "target-url"
  ],
  "answer": 2
 },
 {
  "id": 18,
  "topic": "Links & Media",
  "q": "Which attribute of <img> specifies the image path?",
  "options": [
   "href",
   "src",
   "link",
   "path"
  ],
  "answer": 1
 },
 {
  "id": 19,
  "topic": "Links & Media",
  "q": "What is the use of the 'alt' attribute in an <img> tag?",
  "options": [
   "To style the image",
   "Alternative text shown if image cannot load",
   "To enlarge the image",
   "To link the image"
  ],
  "answer": 1
 },
 {
  "id": 20,
  "topic": "Links & Media",
  "q": "A favicon (small icon in browser tab) is added using which tag?",
  "options": [
   "<icon>",
   "<img>",
   "<link> in the head section",
   "<favicon>"
  ],
  "answer": 2
 },
 {
  "id": 21,
  "topic": "Links & Media",
  "q": "An <iframe> is used to?",
  "options": [
   "Play audio only",
   "Embed another webpage inside the page",
   "Create a table",
   "Format text"
  ],
  "answer": 1
 },
 {
  "id": 22,
  "topic": "Lists",
  "q": "Which tag creates an unordered (bulleted) list?",
  "options": [
   "<ol>",
   "<ul>",
   "<list>",
   "<li>"
  ],
  "answer": 1
 },
 {
  "id": 23,
  "topic": "Lists",
  "q": "Which tag creates an ordered (numbered) list?",
  "options": [
   "<ul>",
   "<ol>",
   "<nl>",
   "<ord>"
  ],
  "answer": 1
 },
 {
  "id": 24,
  "topic": "Lists",
  "q": "Each item inside a list is written with which tag?",
  "options": [
   "<item>",
   "<li>",
   "<it>",
   "<point>"
  ],
  "answer": 1
 },
 {
  "id": 25,
  "topic": "Tables",
  "q": "Which tag starts a table?",
  "options": [
   "<tab>",
   "<table>",
   "<tbl>",
   "<data>"
  ],
  "answer": 1
 },
 {
  "id": 26,
  "topic": "Tables",
  "q": "<tr> in a table defines a?",
  "options": [
   "Table column",
   "Table row",
   "Table heading",
   "Table border"
  ],
  "answer": 1
 },
 {
  "id": 27,
  "topic": "Tables",
  "q": "<th> in a table defines a?",
  "options": [
   "Table data cell",
   "Table heading cell",
   "Table footer",
   "Table caption only"
  ],
  "answer": 1
 },
 {
  "id": 28,
  "topic": "Tables",
  "q": "<td> in a table defines a?",
  "options": [
   "Table heading",
   "Table data (normal) cell",
   "Table title",
   "Table link"
  ],
  "answer": 1
 },
 {
  "id": 29,
  "topic": "Tables",
  "q": "The 'colspan' attribute merges a cell across?",
  "options": [
   "Rows",
   "Columns",
   "Pages",
   "Tables"
  ],
  "answer": 1
 },
 {
  "id": 30,
  "topic": "Tables",
  "q": "The 'rowspan' attribute merges a cell across?",
  "options": [
   "Columns",
   "Rows",
   "Sections",
   "Lists"
  ],
  "answer": 1
 },
 {
  "id": 31,
  "topic": "Layout",
  "q": "<div> is mainly used as a?",
  "options": [
   "Inline text highlighter",
   "Block-level container for layout",
   "Image tag",
   "Link tag"
  ],
  "answer": 1
 },
 {
  "id": 32,
  "topic": "Layout",
  "q": "<span> is mainly used as a?",
  "options": [
   "Block container",
   "Table cell",
   "Inline container for a part of text",
   "Heading"
  ],
  "answer": 2
 },
 {
  "id": 33,
  "topic": "Layout",
  "q": "Which of the following is a BLOCK element?",
  "options": [
   "<span>",
   "<a>",
   "<div>",
   "<b>"
  ],
  "answer": 2
 },
 {
  "id": 34,
  "topic": "Layout",
  "q": "Which of the following is an INLINE element?",
  "options": [
   "<div>",
   "<p>",
   "<h1>",
   "<span>"
  ],
  "answer": 3
 },
 {
  "id": 35,
  "topic": "Layout",
  "q": "The 'class' attribute is used to?",
  "options": [
   "Identify a group of elements for styling",
   "Give a password",
   "Link a page",
   "Name the file"
  ],
  "answer": 0
 },
 {
  "id": 36,
  "topic": "Layout",
  "q": "The 'id' attribute must be?",
  "options": [
   "Same for all elements",
   "Unique for each element in the page",
   "Only numbers",
   "Only used in tables"
  ],
  "answer": 1
 },
 {
  "id": 37,
  "topic": "Forms",
  "q": "The <form> element is used to?",
  "options": [
   "Style text",
   "Collect and submit user input",
   "Create tables",
   "Play videos"
  ],
  "answer": 1
 },
 {
  "id": 38,
  "topic": "Forms",
  "q": "A <label> is connected to its input through which attribute?",
  "options": [
   "name only",
   "for (matching the input's id)",
   "href",
   "link"
  ],
  "answer": 1
 },
 {
  "id": 39,
  "topic": "Forms",
  "q": "<textarea> is used for?",
  "options": [
   "Single-line input",
   "Multi-line text input",
   "Password input",
   "File upload"
  ],
  "answer": 1
 },
 {
  "id": 40,
  "topic": "Forms",
  "q": "A drop-down list is created with which tag?",
  "options": [
   "<dropdown>",
   "<list>",
   "<select>",
   "<option>"
  ],
  "answer": 2
 },
 {
  "id": 41,
  "topic": "Forms",
  "q": "Each item inside a <select> drop-down is written with?",
  "options": [
   "<li>",
   "<item>",
   "<option>",
   "<choice>"
  ],
  "answer": 2
 },
 {
  "id": 42,
  "topic": "Forms",
  "q": "Clicking a <button type=\"submit\"> does what?",
  "options": [
   "Clears the form",
   "Submits the form data",
   "Closes the page",
   "Prints the page"
  ],
  "answer": 1
 },
 {
  "id": 43,
  "topic": "Input Types",
  "q": "Which input type hides the typed characters (for passwords)?",
  "options": [
   "text",
   "password",
   "hidden-text",
   "secure"
  ],
  "answer": 1
 },
 {
  "id": 44,
  "topic": "Input Types",
  "q": "Which input type is best for an email address (with basic validation)?",
  "options": [
   "text",
   "url",
   "email",
   "mail"
  ],
  "answer": 2
 },
 {
  "id": 45,
  "topic": "Input Types",
  "q": "Radio buttons in a group allow the user to select?",
  "options": [
   "Many options at once",
   "Only one option",
   "No option",
   "All options by default"
  ],
  "answer": 1
 },
 {
  "id": 46,
  "topic": "Input Types",
  "q": "Checkboxes allow the user to select?",
  "options": [
   "Only one option",
   "Multiple options",
   "No option",
   "Only numbers"
  ],
  "answer": 1
 },
 {
  "id": 47,
  "topic": "Input Types",
  "q": "Which input type lets the user upload a file?",
  "options": [
   "upload",
   "file",
   "attach",
   "document"
  ],
  "answer": 1
 },
 {
  "id": 48,
  "topic": "Input Types",
  "q": "Which input type shows a date picker?",
  "options": [
   "calendar",
   "datetime only",
   "date",
   "day"
  ],
  "answer": 2
 },
 {
  "id": 49,
  "topic": "CSS Introduction",
  "q": "CSS stands for?",
  "options": [
   "Computer Styled Sections",
   "Cascading Style Sheets",
   "Creative Style System",
   "Colorful Style Sheets"
  ],
  "answer": 1
 },
 {
  "id": 50,
  "topic": "CSS Introduction",
  "q": "Inline CSS is written using which attribute?",
  "options": [
   "class",
   "id",
   "style",
   "css"
  ],
  "answer": 2
 },
 {
  "id": 51,
  "topic": "CSS Introduction",
  "q": "Internal CSS is written inside which tag in the head?",
  "options": [
   "<css>",
   "<style>",
   "<script>",
   "<design>"
  ],
  "answer": 1
 },
 {
  "id": 52,
  "topic": "CSS Introduction",
  "q": "An external CSS file is linked to HTML using?",
  "options": [
   "<link> tag",
   "<a> tag",
   "<style src> tag",
   "<import> tag"
  ],
  "answer": 0
 },
 {
  "id": 53,
  "topic": "CSS Introduction",
  "q": "To select all <p> elements, the selector is written as?",
  "options": [
   ".p",
   "#p",
   "p",
   "*p only"
  ],
  "answer": 2
 },
 {
  "id": 54,
  "topic": "CSS Introduction",
  "q": "A class selector in CSS starts with?",
  "options": [
   "# (hash)",
   ". (dot)",
   "$ (dollar)",
   "@ (at)"
  ],
  "answer": 1
 },
 {
  "id": 55,
  "topic": "CSS Introduction",
  "q": "An id selector in CSS starts with?",
  "options": [
   ". (dot)",
   "# (hash)",
   "% (percent)",
   "& (and)"
  ],
  "answer": 1
 },
 {
  "id": 56,
  "topic": "Colors & Backgrounds",
  "q": "The 'color' property sets the color of?",
  "options": [
   "Background",
   "Border only",
   "Text",
   "Page title"
  ],
  "answer": 2
 },
 {
  "id": 57,
  "topic": "Colors & Backgrounds",
  "q": "The 'background-image' property is used to?",
  "options": [
   "Set a background picture",
   "Insert an <img>",
   "Color the text",
   "Add a video"
  ],
  "answer": 0
 },
 {
  "id": 58,
  "topic": "Colors & Backgrounds",
  "q": "The 'opacity' property value ranges from?",
  "options": [
   "0 to 100 only",
   "0.0 (transparent) to 1.0 (fully opaque)",
   "-1 to 1",
   "1 to 10"
  ],
  "answer": 1
 },
 {
  "id": 59,
  "topic": "Borders",
  "q": "Which property sets the style of a border (solid, dotted, dashed)?",
  "options": [
   "border-color",
   "border-width",
   "border-style",
   "border-line"
  ],
  "answer": 2
 },
 {
  "id": 60,
  "topic": "Borders",
  "q": "Which property makes the corners of an element rounded?",
  "options": [
   "border-circle",
   "corner-radius",
   "border-radius",
   "round-border"
  ],
  "answer": 2
 },
 {
  "id": 61,
  "topic": "Spacing",
  "q": "'margin' is the space?",
  "options": [
   "Inside the border, around content",
   "Outside the border, around the element",
   "Between letters",
   "Between lines only"
  ],
  "answer": 1
 },
 {
  "id": 62,
  "topic": "Spacing",
  "q": "'padding' is the space?",
  "options": [
   "Outside the element",
   "Between two elements",
   "Inside the border, around the content",
   "In the page title"
  ],
  "answer": 2
 },
 {
  "id": 63,
  "topic": "Dimensions",
  "q": "The 'max-width' property means an element?",
  "options": [
   "Must always be exactly that wide",
   "Cannot grow wider than that value",
   "Cannot be smaller than that value",
   "Has no width"
  ],
  "answer": 1
 },
 {
  "id": 64,
  "topic": "Box Model",
  "q": "What is the correct order of the CSS Box Model (inside to outside)?",
  "options": [
   "Margin, Border, Padding, Content",
   "Content, Padding, Border, Margin",
   "Border, Content, Margin, Padding",
   "Content, Margin, Border, Padding"
  ],
  "answer": 1
 },
 {
  "id": 65,
  "topic": "Box Model",
  "q": "With 'box-sizing: border-box', the width of an element includes?",
  "options": [
   "Content only",
   "Content + Padding + Border",
   "Content + Margin",
   "Margin + Border only"
  ],
  "answer": 1
 },
 {
  "id": 66,
  "topic": "Outline",
  "q": "An outline is drawn?",
  "options": [
   "Inside the content",
   "Outside the border edge",
   "Only on tables",
   "Behind the background only"
  ],
  "answer": 1
 },
 {
  "id": 67,
  "topic": "Text Styling",
  "q": "'text-align: center' does what?",
  "options": [
   "Centers the element itself",
   "Centers the text inside the element",
   "Centers the page",
   "Makes text bold and centered"
  ],
  "answer": 1
 },
 {
  "id": 68,
  "topic": "Text Styling",
  "q": "To REMOVE the underline from links, we use?",
  "options": [
   "text-decoration: none",
   "underline: no",
   "text-style: plain",
   "link-decoration: off"
  ],
  "answer": 0
 },
 {
  "id": 69,
  "topic": "Text Styling",
  "q": "'text-transform: uppercase' makes the text?",
  "options": [
   "Lowercase",
   "Capitalized first letters only",
   "ALL LETTERS CAPITAL",
   "Italic"
  ],
  "answer": 2
 },
 {
  "id": 70,
  "topic": "Text Styling",
  "q": "'line-height' controls?",
  "options": [
   "Width of a line",
   "Space (height) between lines of text",
   "Number of lines",
   "Line color"
  ],
  "answer": 1
 },
 {
  "id": 71,
  "topic": "Fonts",
  "q": "'font-family' property sets?",
  "options": [
   "Size of font",
   "Name/typeface of the font",
   "Weight of font",
   "Color of font"
  ],
  "answer": 1
 },
 {
  "id": 72,
  "topic": "Fonts",
  "q": "'font-weight: bold' makes the text?",
  "options": [
   "Italic",
   "Thicker / bold",
   "Underlined",
   "Smaller"
  ],
  "answer": 1
 },
 {
  "id": 73,
  "topic": "Fonts",
  "q": "'font-style: italic' makes the text?",
  "options": [
   "Bold",
   "Slanted / italic",
   "Underlined",
   "Capital"
  ],
  "answer": 1
 },
 {
  "id": 74,
  "topic": "Icons",
  "q": "Font Awesome and Bootstrap Icons are used to add?",
  "options": [
   "Tables",
   "Icons in a webpage",
   "Videos",
   "Forms"
  ],
  "answer": 1
 },
 {
  "id": 75,
  "topic": "Links Styling",
  "q": "The 'a:hover' selector applies style when?",
  "options": [
   "Link is clicked and held",
   "Mouse pointer is over the link",
   "Link was already visited",
   "Page loads"
  ],
  "answer": 1
 },
 {
  "id": 76,
  "topic": "Links Styling",
  "q": "The 'a:link' selector styles?",
  "options": [
   "Visited links only",
   "Unvisited (normal) links",
   "Hovered links",
   "Active links only"
  ],
  "answer": 1
 },
 {
  "id": 77,
  "topic": "Lists Styling",
  "q": "To remove bullets from a list, we use?",
  "options": [
   "list-style-type: none",
   "bullets: none",
   "list-remove: all",
   "style: no-bullet"
  ],
  "answer": 0
 },
 {
  "id": 78,
  "topic": "Table Styling",
  "q": "'border-collapse: collapse' in a table makes?",
  "options": [
   "Table disappear",
   "Adjacent cell borders merge into a single border",
   "Rows collapse on click",
   "Text collapse"
  ],
  "answer": 1
 },
 {
  "id": 79,
  "topic": "Display",
  "q": "'display: block' elements?",
  "options": [
   "Stay in same line",
   "Start on a new line and take full available width",
   "Are hidden",
   "Cannot have width"
  ],
  "answer": 1
 },
 {
  "id": 80,
  "topic": "Display",
  "q": "'display: inline' elements?",
  "options": [
   "Take full width",
   "Do not start a new line; width fits content",
   "Are hidden",
   "Always stack vertically"
  ],
  "answer": 1
 },
 {
  "id": 81,
  "topic": "Display",
  "q": "'display: none' means the element?",
  "options": [
   "Is visible but transparent",
   "Is hidden and takes no space on the page",
   "Is shown as a block",
   "Only hides its text"
  ],
  "answer": 1
 },
 {
  "id": 82,
  "topic": "Display",
  "q": "'display: inline-block' is useful because the element?",
  "options": [
   "Flows inline but width/height can be set",
   "Is always hidden",
   "Becomes a table",
   "Loses its styling"
  ],
  "answer": 0
 },
 {
  "id": 83,
  "topic": "Flexbox",
  "q": "A flex container is created by setting?",
  "options": [
   "display: flexbox",
   "display: flex",
   "position: flex",
   "flex: on"
  ],
  "answer": 1
 },
 {
  "id": 84,
  "topic": "Flexbox",
  "q": "In Flexbox, 'justify-content' aligns items?",
  "options": [
   "Along the cross axis",
   "Along the main axis (e.g. horizontally in a row)",
   "Only vertically always",
   "Outside the container"
  ],
  "answer": 1
 },
 {
  "id": 85,
  "topic": "Flexbox",
  "q": "In Flexbox, 'align-items' aligns items?",
  "options": [
   "Along the main axis",
   "Along the cross axis",
   "In the next container",
   "By font size"
  ],
  "answer": 1
 },
 {
  "id": 86,
  "topic": "Flexbox",
  "q": "'flex-direction: column' arranges flex items?",
  "options": [
   "In a row",
   "Vertically, top to bottom",
   "In a circle",
   "Overlapping"
  ],
  "answer": 1
 },
 {
  "id": 87,
  "topic": "Flexbox",
  "q": "The 'gap' property in Flexbox sets?",
  "options": [
   "Margin of the page",
   "Space between flex items",
   "Padding of items",
   "Border gap of table"
  ],
  "answer": 1
 },
 {
  "id": 88,
  "topic": "Flexbox",
  "q": "'flex-wrap: wrap' allows flex items to?",
  "options": [
   "Disappear when small",
   "Move/wrap to the next line if they don't fit",
   "Overlap each other",
   "Grow infinitely"
  ],
  "answer": 1
 },
 {
  "id": 89,
  "topic": "Positioning",
  "q": "'position: fixed' element stays?",
  "options": [
   "At document top only",
   "Fixed relative to the viewport, even when scrolling",
   "Relative to its parent only",
   "Hidden on scroll"
  ],
  "answer": 1
 },
 {
  "id": 90,
  "topic": "Positioning",
  "q": "'position: absolute' element is positioned relative to?",
  "options": [
   "The browser window always",
   "Its nearest positioned ancestor",
   "The body only",
   "The next element"
  ],
  "answer": 1
 },
 {
  "id": 91,
  "topic": "Positioning",
  "q": "What is the DEFAULT value of the 'position' property?",
  "options": [
   "relative",
   "absolute",
   "static",
   "fixed"
  ],
  "answer": 2
 },
 {
  "id": 92,
  "topic": "Positioning",
  "q": "'position: sticky' element behaves like?",
  "options": [
   "Always fixed",
   "Relative until scroll point, then sticks like fixed",
   "Always absolute",
   "Hidden until hover"
  ],
  "answer": 1
 },
 {
  "id": 93,
  "topic": "z-index",
  "q": "The 'z-index' property controls?",
  "options": [
   "Zoom level",
   "Stacking order (which element appears on top)",
   "Width of layers",
   "Opacity only"
  ],
  "answer": 1
 },
 {
  "id": 94,
  "topic": "Overflow",
  "q": "'overflow: hidden' means content that exceeds the box is?",
  "options": [
   "Shown with scrollbar always",
   "Clipped and hidden",
   "Moved to next page",
   "Enlarged box automatically"
  ],
  "answer": 1
 },
 {
  "id": 95,
  "topic": "Overflow / Float",
  "q": "'float: left' makes an element?",
  "options": [
   "Float to the left, with following content flowing around it",
   "Move to page bottom",
   "Stay fixed on scroll",
   "Center itself"
  ],
  "answer": 0
 },
 {
  "id": 96,
  "topic": "Overflow / Float",
  "q": "'clear: both' is used to?",
  "options": [
   "Clear text formatting",
   "Stop an element from floating next to floated elements on both sides",
   "Delete borders",
   "Clear form fields"
  ],
  "answer": 1
 },
 {
  "id": 97,
  "topic": "Transform",
  "q": "The 'transform: translate()' function is used to?",
  "options": [
   "Rotate an element",
   "Move (shift) an element along X / Y axis",
   "Change its color",
   "Delete an element"
  ],
  "answer": 1
 },
 {
  "id": 98,
  "topic": "Transform",
  "q": "The 'transform: rotate()' function is used to?",
  "options": [
   "Resize an element",
   "Rotate an element by an angle (deg)",
   "Skew an element",
   "Move an element"
  ],
  "answer": 1
 },
 {
  "id": 99,
  "topic": "Transform",
  "q": "The 'transform: scale()' function is used to?",
  "options": [
   "Increase or decrease the size of an element",
   "Rotate an element",
   "Change font weight",
   "Add shadow"
  ],
  "answer": 0
 },
 {
  "id": 100,
  "topic": "Transform",
  "q": "The 'transform: skew()' function is used to?",
  "options": [
   "Move an element",
   "Tilt/skew an element along X or Y axis",
   "Resize proportionally only",
   "Round the corners"
  ],
  "answer": 1
 }
];
