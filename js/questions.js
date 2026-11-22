// Super Sys-Tech Computers Centre Umerkot - Full Stack Web Development Test
// 3 Sections x 50 MCQs: basic (HTML), htmlcss (HTML+CSS), advanced (HTML+CSS+JS)
const QUESTION_BANK = {
 "basic": [
  {
   "id": 1,
   "topic": "HTML Structure",
   "q": "What does HTML stand for?",
   "options": [
    "Hyper Text Markup Language",
    "High Text Machine Language",
    "Hyperlink Text Making Language",
    "Home Tool Markup Language"
   ],
   "answer": 0
  },
  {
   "id": 2,
   "topic": "HTML Structure",
   "q": "Which declaration tells the browser that the document is an HTML5 page?",
   "options": [
    "<html5>",
    "<!DOCTYPE html>",
    "<doctype html5>",
    "<!HTML>"
   ],
   "answer": 1
  },
  {
   "id": 3,
   "topic": "HTML Structure",
   "q": "Which tag is the root element of every HTML page?",
   "options": [
    "<body>",
    "<head>",
    "<html>",
    "<root>"
   ],
   "answer": 2
  },
  {
   "id": 4,
   "topic": "HTML Structure",
   "q": "The visible content of a web page is written inside which element?",
   "options": [
    "<head>",
    "<title>",
    "<meta>",
    "<body>"
   ],
   "answer": 3
  },
  {
   "id": 5,
   "topic": "HTML Structure",
   "q": "The <title> tag is placed inside which element?",
   "options": [
    "<head>",
    "<body>",
    "<p>",
    "<div>"
   ],
   "answer": 0
  },
  {
   "id": 6,
   "topic": "HTML Structure",
   "q": "Information about the page, such as its character set and links to CSS files, is written inside which element?",
   "options": [
    "<body>",
    "<head>",
    "<footer>",
    "<html>"
   ],
   "answer": 1
  },
  {
   "id": 7,
   "topic": "Content Tags",
   "q": "Which tag creates the largest heading?",
   "options": [
    "<h6>",
    "<head>",
    "<h1>",
    "<heading>"
   ],
   "answer": 2
  },
  {
   "id": 8,
   "topic": "Content Tags",
   "q": "How many heading tags are available in HTML?",
   "options": [
    "3",
    "4",
    "5",
    "6"
   ],
   "answer": 3
  },
  {
   "id": 9,
   "topic": "Content Tags",
   "q": "Which tag is used to create a paragraph?",
   "options": [
    "<p>",
    "<para>",
    "<pg>",
    "<text>"
   ],
   "answer": 0
  },
  {
   "id": 10,
   "topic": "Content Tags",
   "q": "Which tag inserts a line break without starting a new paragraph?",
   "options": [
    "<lb>",
    "<br>",
    "<break>",
    "<hr>"
   ],
   "answer": 1
  },
  {
   "id": 11,
   "topic": "Content Tags",
   "q": "Which tag draws a horizontal line across the page?",
   "options": [
    "<line>",
    "<hl>",
    "<hr>",
    "<br>"
   ],
   "answer": 2
  },
  {
   "id": 12,
   "topic": "Content Tags",
   "q": "Which of the following is a correct closing tag for a paragraph?",
   "options": [
    "<p/>",
    "<end p>",
    "<\\p>",
    "</p>"
   ],
   "answer": 3
  },
  {
   "id": 13,
   "topic": "Text Formatting",
   "q": "Which tag makes text bold?",
   "options": [
    "<b>",
    "<bold>",
    "<bb>",
    "<stronger>"
   ],
   "answer": 0
  },
  {
   "id": 14,
   "topic": "Text Formatting",
   "q": "Which tag makes text italic?",
   "options": [
    "<it>",
    "<i>",
    "<italic>",
    "<em2>"
   ],
   "answer": 1
  },
  {
   "id": 15,
   "topic": "Text Formatting",
   "q": "Which tag underlines text?",
   "options": [
    "<ul>",
    "<line>",
    "<u>",
    "<under>"
   ],
   "answer": 2
  },
  {
   "id": 16,
   "topic": "Text Formatting",
   "q": "Which tag highlights text with a yellow background by default?",
   "options": [
    "<highlight>",
    "<hl>",
    "<yellow>",
    "<mark>"
   ],
   "answer": 3
  },
  {
   "id": 17,
   "topic": "Text Formatting",
   "q": "Which tag shows deleted text with a line through it?",
   "options": [
    "<del>",
    "<cut>",
    "<remove>",
    "<strike2>"
   ],
   "answer": 0
  },
  {
   "id": 18,
   "topic": "Text Formatting",
   "q": "In the formula H2O, which tag is used to write the '2' below the normal line?",
   "options": [
    "<sup>",
    "<sub>",
    "<small>",
    "<low>"
   ],
   "answer": 1
  },
  {
   "id": 19,
   "topic": "Links & Media",
   "q": "Which tag is used to create a hyperlink?",
   "options": [
    "<link>",
    "<href>",
    "<a>",
    "<url>"
   ],
   "answer": 2
  },
  {
   "id": 20,
   "topic": "Links & Media",
   "q": "Which attribute of the <a> tag specifies the address of the page to open?",
   "options": [
    "src",
    "link",
    "url",
    "href"
   ],
   "answer": 3
  },
  {
   "id": 21,
   "topic": "Links & Media",
   "q": "Which tag is used to display an image on a web page?",
   "options": [
    "<img>",
    "<image>",
    "<pic>",
    "<photo>"
   ],
   "answer": 0
  },
  {
   "id": 22,
   "topic": "Links & Media",
   "q": "Which attribute of the <img> tag gives the location of the image file?",
   "options": [
    "href",
    "src",
    "alt",
    "link"
   ],
   "answer": 1
  },
  {
   "id": 23,
   "topic": "Links & Media",
   "q": "What is the purpose of the alt attribute in the <img> tag?",
   "options": [
    "To change the image size",
    "To link the image to another page",
    "To show alternative text if the image cannot load",
    "To add a border to the image"
   ],
   "answer": 2
  },
  {
   "id": 24,
   "topic": "Links & Media",
   "q": "Which tag is used to display another web page inside the current page, and which tag adds a favicon?",
   "options": [
    "<frame> and <icon>",
    "<embed> and <img>",
    "<window> and <link>",
    "<iframe> and <link>"
   ],
   "answer": 3
  },
  {
   "id": 25,
   "topic": "Lists",
   "q": "Which tag creates an unordered (bulleted) list?",
   "options": [
    "<ul>",
    "<ol>",
    "<list>",
    "<li>"
   ],
   "answer": 0
  },
  {
   "id": 26,
   "topic": "Lists",
   "q": "Which tag creates an ordered (numbered) list?",
   "options": [
    "<ul>",
    "<ol>",
    "<nl>",
    "<li>"
   ],
   "answer": 1
  },
  {
   "id": 27,
   "topic": "Lists",
   "q": "Which tag is used for each item inside a list?",
   "options": [
    "<item>",
    "<list>",
    "<li>",
    "<it>"
   ],
   "answer": 2
  },
  {
   "id": 28,
   "topic": "Lists",
   "q": "Which attribute of <ol> changes the numbering style, for example to letters or Roman numerals?",
   "options": [
    "style",
    "number",
    "format",
    "type"
   ],
   "answer": 3
  },
  {
   "id": 29,
   "topic": "Lists",
   "q": "An ordered list should start from number 5. Which attribute is used for this?",
   "options": [
    "start",
    "begin",
    "from",
    "first"
   ],
   "answer": 0
  },
  {
   "id": 30,
   "topic": "Tables",
   "q": "Which tag creates a table in HTML?",
   "options": [
    "<tab>",
    "<table>",
    "<tbl>",
    "<grid>"
   ],
   "answer": 1
  },
  {
   "id": 31,
   "topic": "Tables",
   "q": "Which tag defines a row in a table?",
   "options": [
    "<td>",
    "<th>",
    "<tr>",
    "<row>"
   ],
   "answer": 2
  },
  {
   "id": 32,
   "topic": "Tables",
   "q": "Which tag defines a normal data cell in a table?",
   "options": [
    "<tr>",
    "<cell>",
    "<dt>",
    "<td>"
   ],
   "answer": 3
  },
  {
   "id": 33,
   "topic": "Tables",
   "q": "Which tag defines a header cell, shown bold and centered by default?",
   "options": [
    "<th>",
    "<head>",
    "<td>",
    "<header>"
   ],
   "answer": 0
  },
  {
   "id": 34,
   "topic": "Tables",
   "q": "Which attribute makes a cell span across two or more columns?",
   "options": [
    "rowspan",
    "colspan",
    "span-col",
    "merge"
   ],
   "answer": 1
  },
  {
   "id": 35,
   "topic": "Tables",
   "q": "Which attribute makes a cell span across two or more rows?",
   "options": [
    "colspan",
    "span-row",
    "rowspan",
    "tall"
   ],
   "answer": 2
  },
  {
   "id": 36,
   "topic": "Layout Elements",
   "q": "Which tag is a block-level container used to group and arrange large sections of a page?",
   "options": [
    "<span>",
    "<div>",
    "<group>",
    "<box>"
   ],
   "answer": 1
  },
  {
   "id": 37,
   "topic": "Layout Elements",
   "q": "Which tag is an inline container used to style a small part of text?",
   "options": [
    "<div>",
    "<section>",
    "<span>",
    "<p>"
   ],
   "answer": 2
  },
  {
   "id": 38,
   "topic": "Layout Elements",
   "q": "Which of the following is a block-level element?",
   "options": [
    "<span>",
    "<a>",
    "<img>",
    "<div>"
   ],
   "answer": 3
  },
  {
   "id": 39,
   "topic": "Layout Elements",
   "q": "What is the main difference between the class and id attributes?",
   "options": [
    "class can be used on many elements, id must be unique on the page",
    "id can be used on many elements, class must be unique",
    "class is only for text, id is only for images",
    "There is no difference"
   ],
   "answer": 0
  },
  {
   "id": 40,
   "topic": "Layout Elements",
   "q": "In CSS, how do you select an element with class=\"menu\" and an element with id=\"header\"?",
   "options": [
    "menu and header",
    ".menu and #header",
    "#menu and .header",
    "*menu and *header"
   ],
   "answer": 1
  },
  {
   "id": 41,
   "topic": "Forms",
   "q": "Which tag creates a form in HTML?",
   "options": [
    "<input>",
    "<form>",
    "<forma>",
    "<field>"
   ],
   "answer": 1
  },
  {
   "id": 42,
   "topic": "Forms",
   "q": "Which tag gives a caption or name to a form field, and clicking it focuses the field?",
   "options": [
    "<caption>",
    "<name>",
    "<label>",
    "<text>"
   ],
   "answer": 2
  },
  {
   "id": 43,
   "topic": "Forms",
   "q": "Which tag creates a multi-line text input area?",
   "options": [
    "<input type=\"bigtext\">",
    "<multiline>",
    "<text rows>",
    "<textarea>"
   ],
   "answer": 3
  },
  {
   "id": 44,
   "topic": "Forms",
   "q": "Which pair of tags creates a drop-down list in a form?",
   "options": [
    "<select> and <option>",
    "<list> and <item>",
    "<dropdown> and <choice>",
    "<input> and <option>"
   ],
   "answer": 0
  },
  {
   "id": 45,
   "topic": "Forms",
   "q": "Which tag creates a clickable button in HTML?",
   "options": [
    "<btn>",
    "<button>",
    "<click>",
    "<press>"
   ],
   "answer": 1
  },
  {
   "id": 46,
   "topic": "Input Types",
   "q": "What does <input type=\"password\"> do differently from a normal text field?",
   "options": [
    "It allows only numbers",
    "It makes the field longer",
    "It hides the typed characters",
    "It checks the spelling"
   ],
   "answer": 2
  },
  {
   "id": 47,
   "topic": "Input Types",
   "q": "Which input type shows a calendar date picker in modern browsers?",
   "options": [
    "type=\"text\"",
    "type=\"time\"",
    "type=\"day\"",
    "type=\"date\""
   ],
   "answer": 3
  },
  {
   "id": 48,
   "topic": "Input Types",
   "q": "Which input type lets the user choose only ONE option from a group?",
   "options": [
    "type=\"radio\"",
    "type=\"checkbox\"",
    "type=\"select\"",
    "type=\"button\""
   ],
   "answer": 0
  },
  {
   "id": 49,
   "topic": "Input Types",
   "q": "Which input type lets the user select a file from their computer to upload?",
   "options": [
    "type=\"upload\"",
    "type=\"file\"",
    "type=\"attach\"",
    "type=\"browse\""
   ],
   "answer": 1
  },
  {
   "id": 50,
   "topic": "Input Types",
   "q": "What is the job of <input type=\"submit\"> and <input type=\"reset\"> in a form?",
   "options": [
    "submit saves the page, reset closes it",
    "submit prints the form, reset deletes it",
    "submit sends the form data, reset clears the form fields",
    "submit hides the form, reset shows it again"
   ],
   "answer": 2
  }
 ],
 "htmlcss": [
  {
   "id": 1,
   "topic": "HTML Structure",
   "q": "Which is the correct basic structure of an HTML5 document?",
   "options": [
    "<!DOCTYPE html><html><head><title>Page</title></head><body>Content</body></html>",
    "<html><body><head><title>Page</title></head></body></html>",
    "<!DOCTYPE html><body><head><title>Page</title></head></body>",
    "<html><head><body><title>Page</title></body></head></html>"
   ],
   "answer": 0
  },
  {
   "id": 2,
   "topic": "Content Tags",
   "q": "Which tag pair creates the largest heading and a paragraph in HTML?",
   "options": [
    "<h6> and <para>",
    "<head> and <p>",
    "<h1> and <p>",
    "<heading> and <text>"
   ],
   "answer": 2
  },
  {
   "id": 3,
   "topic": "Text Formatting",
   "q": "In the code H<sub>2</sub>O, what does the <sub> tag do?",
   "options": [
    "Writes the text below the normal line as subscript",
    "Makes the text smaller and raised above the line",
    "Underlines the text",
    "Strikes through the text"
   ],
   "answer": 0
  },
  {
   "id": 4,
   "topic": "Links & Media",
   "q": "What is the purpose of the target=\"_blank\" attribute in the code <a href=\"page.html\" target=\"_blank\">Open</a>?",
   "options": [
    "It opens the link in a new tab or window",
    "It makes the link text bold",
    "It downloads the linked file",
    "It opens the link in the same frame only"
   ],
   "answer": 0
  },
  {
   "id": 5,
   "topic": "Links & Media",
   "q": "Which attribute of the <img> tag shows alternative text when the image cannot be loaded?",
   "options": [
    "title",
    "src",
    "href",
    "alt"
   ],
   "answer": 3
  },
  {
   "id": 6,
   "topic": "Lists",
   "q": "Which HTML code creates a numbered (ordered) list?",
   "options": [
    "<ol><li>One</li><li>Two</li></ol>",
    "<ul><li>One</li><li>Two</li></ul>",
    "<list><li>One</li><li>Two</li></list>",
    "<dl><li>One</li><li>Two</li></dl>"
   ],
   "answer": 0
  },
  {
   "id": 7,
   "topic": "Tables",
   "q": "In an HTML table, which tags define a header cell and a data cell respectively?",
   "options": [
    "<td> and <th>",
    "<tr> and <td>",
    "<th> and <td>",
    "<thead> and <tr>"
   ],
   "answer": 2
  },
  {
   "id": 8,
   "topic": "Tables",
   "q": "What does the colspan=\"2\" attribute do in the code <td colspan=\"2\">Total</td>?",
   "options": [
    "Merges the cell across two columns",
    "Merges the cell across two rows",
    "Adds two empty cells after it",
    "Makes the cell text bold in two lines"
   ],
   "answer": 0
  },
  {
   "id": 9,
   "topic": "Layout Elements",
   "q": "Which statement about <div> and <span> is correct?",
   "options": [
    "<div> is inline and <span> is block-level",
    "Both are inline elements",
    "<div> is block-level and <span> is inline",
    "Both are used only inside tables"
   ],
   "answer": 2
  },
  {
   "id": 10,
   "topic": "Forms",
   "q": "In the code <form action=\"save.php\" method=\"post\">, what does the method=\"post\" part mean?",
   "options": [
    "Form data is sent securely in the request body",
    "Form data is sent in the URL",
    "The form cannot be submitted",
    "The form opens a new page"
   ],
   "answer": 0
  },
  {
   "id": 11,
   "topic": "Input Types",
   "q": "Which input type should be used so that the browser automatically validates an email address format?",
   "options": [
    "<input type=\"text\">",
    "<input type=\"mail\">",
    "<input type=\"email\">",
    "<input type=\"url\">"
   ],
   "answer": 2
  },
  {
   "id": 12,
   "topic": "CSS Introduction",
   "q": "Which method of adding CSS uses the style attribute directly inside an HTML tag?",
   "options": [
    "External CSS",
    "Internal CSS",
    "Inline CSS",
    "Imported CSS"
   ],
   "answer": 2
  },
  {
   "id": 13,
   "topic": "CSS Introduction",
   "q": "In the CSS rule .menu { color: red; }, what type of selector is .menu?",
   "options": [
    "Class selector",
    "ID selector",
    "Element selector",
    "Universal selector"
   ],
   "answer": 0
  },
  {
   "id": 14,
   "topic": "CSS Introduction",
   "q": "How do you select the element with id=\"header\" and ALL elements on the page in CSS?",
   "options": [
    "#header and *",
    ".header and all",
    "header and #all",
    "#header and body"
   ],
   "answer": 0
  },
  {
   "id": 15,
   "topic": "Colors & Backgrounds",
   "q": "In the code div { background-image: url('bg.jpg'); opacity: 0.5; }, what does opacity: 0.5 do?",
   "options": [
    "Makes the element 50% transparent",
    "Makes the background image 50% smaller",
    "Sets the text to 50% size",
    "Repeats the image 5 times"
   ],
   "answer": 0
  },
  {
   "id": 16,
   "topic": "Colors & Backgrounds",
   "q": "Which CSS declaration sets the background color of a paragraph to light blue?",
   "options": [
    "p { background-color: lightblue; }",
    "p { color: lightblue; }",
    "p { bgcolor: lightblue; }",
    "p { background-text: lightblue; }"
   ],
   "answer": 0
  },
  {
   "id": 17,
   "topic": "Borders",
   "q": "In the shorthand declaration border: 2px solid red;, what does each part represent?",
   "options": [
    "border-color, border-style, border-width",
    "border-style, border-width, border-color",
    "border-width, border-style, border-color",
    "border-radius, border-style, border-color"
   ],
   "answer": 2
  },
  {
   "id": 18,
   "topic": "Borders",
   "q": "Which property creates rounded corners on a box, as in .card { border-radius: 10px; }?",
   "options": [
    "border-corner",
    "corner-radius",
    "border-radius",
    "box-radius"
   ],
   "answer": 2
  },
  {
   "id": 19,
   "topic": "Spacing",
   "q": "In the code p { margin: 10px 20px 30px 40px; }, what is the LEFT margin of the paragraph?",
   "options": [
    "10px",
    "20px",
    "30px",
    "40px"
   ],
   "answer": 3
  },
  {
   "id": 20,
   "topic": "Spacing",
   "q": "What is the difference between margin and padding?",
   "options": [
    "Margin is space inside the border; padding is space outside the border",
    "They are exactly the same",
    "Margin is space outside the border; padding is space inside the border, around the content",
    "Padding changes the border color; margin changes the background"
   ],
   "answer": 2
  },
  {
   "id": 21,
   "topic": "Dimensions",
   "q": "A box has width: 300px; min-width: 200px; max-width: 250px;. What will its final width be?",
   "options": [
    "300px",
    "200px",
    "250px",
    "150px"
   ],
   "answer": 2
  },
  {
   "id": 22,
   "topic": "Dimensions",
   "q": "Which pair of properties controls the size of an element in CSS?",
   "options": [
    "margin and padding",
    "top and left",
    "width and height",
    "font-size and line-height"
   ],
   "answer": 2
  },
  {
   "id": 23,
   "topic": "Box Model",
   "q": "What is the correct order of the CSS box model from inside to outside?",
   "options": [
    "Margin → Border → Padding → Content",
    "Content → Border → Padding → Margin",
    "Content → Padding → Border → Margin",
    "Padding → Content → Margin → Border"
   ],
   "answer": 2
  },
  {
   "id": 24,
   "topic": "Box Model",
   "q": "A div has width: 200px; padding: 20px; border: 5px solid black; and box-sizing: border-box;. What is the total width of the div on the page?",
   "options": [
    "250px",
    "240px",
    "200px",
    "230px"
   ],
   "answer": 2
  },
  {
   "id": 25,
   "topic": "Box Model",
   "q": "With the default box-sizing: content-box, a div has width: 100px; padding: 10px; border: 5px solid;. What is its total rendered width?",
   "options": [
    "100px",
    "120px",
    "115px",
    "130px"
   ],
   "answer": 3
  },
  {
   "id": 26,
   "topic": "Outline",
   "q": "Which statement about the CSS outline property is TRUE?",
   "options": [
    "Outline takes up space and changes the element's size",
    "Outline can only be a solid line",
    "Outline is drawn outside the border and does not take up space in the layout",
    "Outline replaces the border completely"
   ],
   "answer": 2
  },
  {
   "id": 27,
   "topic": "Text Styling",
   "q": "In the code h1 { text-transform: uppercase; letter-spacing: 3px; }, what happens to the heading text?",
   "options": [
    "It becomes lowercase with tight spacing",
    "It is underlined with 3px thickness",
    "It is shown in ALL CAPITAL letters with 3px space between characters",
    "It is aligned to the right with 3px line height"
   ],
   "answer": 2
  },
  {
   "id": 28,
   "topic": "Text Styling",
   "q": "Which property sets the vertical space between lines of text, e.g. p { line-height: 1.8; }?",
   "options": [
    "letter-spacing",
    "text-indent",
    "word-spacing",
    "line-height"
   ],
   "answer": 3
  },
  {
   "id": 29,
   "topic": "Fonts",
   "q": "In the declaration font: italic bold 16px Arial;, what do italic and bold set?",
   "options": [
    "font-family and font-size",
    "font-weight and font-style",
    "font-size and font-family",
    "font-style and font-weight"
   ],
   "answer": 3
  },
  {
   "id": 30,
   "topic": "Fonts",
   "q": "Why is a font stack like font-family: Arial, Helvetica, sans-serif; recommended?",
   "options": [
    "It makes the text load faster",
    "It applies all fonts at the same time",
    "It increases the font size automatically",
    "If the first font is not available, the browser tries the next one"
   ],
   "answer": 3
  },
  {
   "id": 31,
   "topic": "Icons",
   "q": "After including the Font Awesome library, which code correctly displays a home icon?",
   "options": [
    "<icon class=\"fa-home\"></icon>",
    "<img src=\"fa-house\">",
    "<span icon=\"house\"></span>",
    "<i class=\"fa-solid fa-house\"></i>"
   ],
   "answer": 3
  },
  {
   "id": 32,
   "topic": "Links Styling",
   "q": "What is the recommended order of link pseudo-classes in CSS for them to work correctly?",
   "options": [
    ":hover, :active, :visited, :link",
    ":link, :hover, :visited, :active",
    ":link, :visited, :hover, :active",
    ":visited, :link, :active, :hover"
   ],
   "answer": 2
  },
  {
   "id": 33,
   "topic": "Links Styling",
   "q": "What does the selector a:hover style?",
   "options": [
    "A link that has already been visited",
    "A link while the mouse pointer is over it",
    "A link while it is being downloaded",
    "All links permanently after one click"
   ],
   "answer": 1
  },
  {
   "id": 34,
   "topic": "Lists Styling",
   "q": "In the code ul { list-style-type: none; list-style-position: inside; }, what is the effect?",
   "options": [
    "The list becomes numbered and bullets move outside",
    "The bullets are removed and the marker position is set inside the content area",
    "The list is hidden from the page",
    "The list items become links"
   ],
   "answer": 1
  },
  {
   "id": 35,
   "topic": "Table Styling",
   "q": "What does border-collapse: collapse; do to a table?",
   "options": [
    "Hides the table borders",
    "Merges adjacent cell borders into a single border",
    "Collapses (folds) the table rows",
    "Removes the space between the table and the page"
   ],
   "answer": 1
  },
  {
   "id": 36,
   "topic": "Table Styling",
   "q": "Which CSS rule creates a striped table by coloring every even row?",
   "options": [
    "tr:even { background-color: #eee; }",
    "tr:nth-child(even) { background-color: #eee; }",
    "table:stripe { background-color: #eee; }",
    "tr.row-even { background-color: #eee; }"
   ],
   "answer": 1
  },
  {
   "id": 37,
   "topic": "Display Property",
   "q": "What is the main difference between display: inline and display: inline-block?",
   "options": [
    "inline-block elements can have width and height set; plain inline elements cannot",
    "inline elements start on a new line; inline-block elements do not",
    "There is no difference",
    "inline-block hides the element"
   ],
   "answer": 0
  },
  {
   "id": 38,
   "topic": "Display Property",
   "q": "What happens to an element with display: none;?",
   "options": [
    "It becomes transparent but still takes space",
    "It is completely removed from display and takes no space on the page",
    "It is shown as a block element",
    "Only its text is hidden, the box remains"
   ],
   "answer": 1
  },
  {
   "id": 39,
   "topic": "Flexbox",
   "q": "Which declaration turns an element into a flex container?",
   "options": [
    "display: flexbox;",
    "display: flex;",
    "position: flex;",
    "flex: container;"
   ],
   "answer": 1
  },
  {
   "id": 40,
   "topic": "Flexbox",
   "q": "In a flex container with flex-direction: row, what does justify-content: space-between; do?",
   "options": [
    "Aligns items vertically in the center",
    "Distributes items along the main axis with equal space between them and no space at the ends",
    "Wraps items onto multiple lines",
    "Reverses the order of the items"
   ],
   "answer": 1
  },
  {
   "id": 41,
   "topic": "Flexbox",
   "q": "In the code .box { display: flex; flex-wrap: wrap; gap: 10px; }, what does flex-wrap: wrap allow?",
   "options": [
    "Items shrink to always fit in one row",
    "Items move to the next line when they do not fit in the container",
    "Items are displayed in reverse order",
    "Items stretch to fill the container height"
   ],
   "answer": 1
  },
  {
   "id": 42,
   "topic": "Flexbox",
   "q": "A flex item has flex-grow: 1; while its siblings have flex-grow: 0;. What does this mean?",
   "options": [
    "The item is hidden",
    "The item stays first in order",
    "The item grows to take up the available extra space in the container",
    "The item becomes the flex container"
   ],
   "answer": 2
  },
  {
   "id": 43,
   "topic": "Positioning",
   "q": "An element with position: absolute is positioned relative to what?",
   "options": [
    "The browser window always",
    "Its nearest positioned (non-static) ancestor",
    "The <body> element only",
    "The element before it in the HTML"
   ],
   "answer": 1
  },
  {
   "id": 44,
   "topic": "Positioning",
   "q": "What is the difference between position: fixed and position: sticky?",
   "options": [
    "fixed sticks relative to the viewport and stays while scrolling; sticky sticks only within its parent after scrolling to it",
    "sticky is always fixed to the viewport; fixed scrolls with the page",
    "Both behave exactly the same",
    "fixed works only on mobile screens"
   ],
   "answer": 0
  },
  {
   "id": 45,
   "topic": "z-index",
   "q": "Two overlapping elements have z-index: 5 and z-index: 10. Which one appears on top (both are positioned)?",
   "options": [
    "The one with z-index: 5",
    "The one with z-index: 10",
    "The one written first in HTML",
    "z-index does not affect overlapping"
   ],
   "answer": 1
  },
  {
   "id": 46,
   "topic": "Overflow",
   "q": "A div has a fixed height and its content is larger than the box. Which overflow value adds scrollbars ONLY when they are needed?",
   "options": [
    "overflow: visible;",
    "overflow: hidden;",
    "overflow: auto;",
    "overflow: scroll;"
   ],
   "answer": 2
  },
  {
   "id": 47,
   "topic": "Float",
   "q": "In the code img { float: right; } p.clear { clear: both; }, what does clear: both do for the paragraph?",
   "options": [
    "Removes the float from the image",
    "Makes the paragraph move below any floated elements on both sides",
    "Centers the paragraph text",
    "Hides the floated image"
   ],
   "answer": 1
  },
  {
   "id": 48,
   "topic": "CSS Transform 2D",
   "q": "What does the declaration transform: rotate(45deg) scale(1.5); do to an element?",
   "options": [
    "Moves it 45px and rotates it 1.5 times",
    "Rotates it 45 degrees and makes it 1.5 times bigger",
    "Skews it 45 degrees and moves it 1.5px",
    "Rotates it 1.5 degrees and scales it 45 times"
   ],
   "answer": 1
  },
  {
   "id": 49,
   "topic": "Transition",
   "q": "In the code button { transition: background-color 0.5s ease 0.2s; }, what do 0.5s and 0.2s represent?",
   "options": [
    "Duration of the transition and the delay before it starts",
    "Delay and duration respectively",
    "Width and height of the button",
    "Number of repeats and speed"
   ],
   "answer": 0
  },
  {
   "id": 50,
   "topic": "Animation",
   "q": "In CSS animation, what is the purpose of @keyframes?",
   "options": [
    "It links the animation to a JavaScript function",
    "It defines the stages/steps of the animation (from/to or percentage states)",
    "It sets how many times the animation repeats",
    "It pauses the animation on hover"
   ],
   "answer": 1
  }
 ],
 "advanced": [
  {
   "id": 1,
   "topic": "Links & Media",
   "q": "Which attribute of the <img> tag provides alternate text that is shown if the image fails to load?",
   "options": [
    "alt",
    "src",
    "title",
    "href"
   ],
   "answer": 0
  },
  {
   "id": 2,
   "topic": "Tables",
   "q": "Which tag is used to define a header cell in an HTML table?",
   "options": [
    "<th>",
    "<td>",
    "<tr>",
    "<caption>"
   ],
   "answer": 0
  },
  {
   "id": 3,
   "topic": "Layout Elements",
   "q": "Which of the following is a block-level element in HTML?",
   "options": [
    "<div>",
    "<span>",
    "<a>",
    "<b>"
   ],
   "answer": 0
  },
  {
   "id": 4,
   "topic": "Forms",
   "q": "Which attribute of the <form> tag specifies the URL where the form data will be sent?",
   "options": [
    "action",
    "method",
    "target",
    "name"
   ],
   "answer": 0
  },
  {
   "id": 5,
   "topic": "Input Types",
   "q": "Which input type displays a slider control for selecting a value?",
   "options": [
    "range",
    "number",
    "slider",
    "scroll"
   ],
   "answer": 0
  },
  {
   "id": 6,
   "topic": "Box Model",
   "q": "In the CSS box model, what is the correct order of layers from the inside to the outside?",
   "options": [
    "Content, Padding, Border, Margin",
    "Content, Border, Padding, Margin",
    "Margin, Border, Padding, Content",
    "Padding, Content, Margin, Border"
   ],
   "answer": 0
  },
  {
   "id": 7,
   "topic": "Flexbox",
   "q": "Which flexbox property aligns flex items along the main axis?",
   "options": [
    "justify-content",
    "align-items",
    "align-content",
    "flex-wrap"
   ],
   "answer": 0
  },
  {
   "id": 8,
   "topic": "Flexbox",
   "q": "What happens when you set flex-direction: column on a flex container?",
   "options": [
    "Items are arranged vertically, from top to bottom",
    "Items are arranged in a row from right to left",
    "Items are hidden",
    "Items wrap onto multiple lines automatically"
   ],
   "answer": 0
  },
  {
   "id": 9,
   "topic": "Positioning",
   "q": "An element with position: fixed is positioned relative to which of the following?",
   "options": [
    "The browser viewport",
    "Its nearest positioned ancestor",
    "Its parent element",
    "The document body only"
   ],
   "answer": 0
  },
  {
   "id": 10,
   "topic": "Display Property",
   "q": "What does the CSS declaration display: none do to an element?",
   "options": [
    "It hides the element and removes it from the page layout",
    "It makes the element transparent but keeps its space",
    "It displays the element as a block",
    "It moves the element behind other elements"
   ],
   "answer": 0
  },
  {
   "id": 11,
   "topic": "CSS Transform 2D",
   "q": "What does the CSS declaration transform: rotate(45deg) do?",
   "options": [
    "It rotates the element 45 degrees clockwise",
    "It moves the element 45 pixels to the right",
    "It increases the element's size by 45%",
    "It skews the element by 45 degrees"
   ],
   "answer": 0
  },
  {
   "id": 12,
   "topic": "Transition",
   "q": "In CSS transitions, what does the transition-duration property specify?",
   "options": [
    "How long the transition effect takes to complete",
    "How long to wait before the transition starts",
    "Which property the transition applies to",
    "The speed curve of the transition"
   ],
   "answer": 0
  },
  {
   "id": 13,
   "topic": "Animation",
   "q": "What is the purpose of the @keyframes rule in CSS?",
   "options": [
    "To define the steps/stages of an animation",
    "To import an external stylesheet",
    "To select elements inside a frame",
    "To apply a media query"
   ],
   "answer": 0
  },
  {
   "id": 14,
   "topic": "z-index",
   "q": "The z-index property works only on elements that have which of the following?",
   "options": [
    "A float value",
    "A position value other than static (e.g. relative, absolute, fixed)",
    "A display value of block",
    "A background color"
   ],
   "answer": 1
  },
  {
   "id": 15,
   "topic": "Text Styling",
   "q": "What does the CSS letter-spacing property control?",
   "options": [
    "The space between lines of text",
    "The space between characters in text",
    "The space between words",
    "The indentation of the first line"
   ],
   "answer": 1
  },
  {
   "id": 16,
   "topic": "JavaScript Introduction",
   "q": "What is JavaScript mainly used for in web development?",
   "options": [
    "To style the layout of web pages",
    "To make web pages interactive and dynamic",
    "To structure the content of web pages",
    "To store data on a database server"
   ],
   "answer": 1
  },
  {
   "id": 17,
   "topic": "JavaScript Introduction",
   "q": "Internal JavaScript code is written inside which HTML tag?",
   "options": [
    "<js>",
    "<script>",
    "<javascript>",
    "<code>"
   ],
   "answer": 1
  },
  {
   "id": 18,
   "topic": "JavaScript Introduction",
   "q": "Which attribute of the <script> tag is used to link an external JavaScript file?",
   "options": [
    "href",
    "src",
    "link",
    "file"
   ],
   "answer": 1
  },
  {
   "id": 19,
   "topic": "Output Methods",
   "q": "What is the output of this code?\nconsole.log(\"Hello\" + \" World\");",
   "options": [
    "HelloWorld",
    "Hello World",
    "Hello + World",
    "Error"
   ],
   "answer": 1
  },
  {
   "id": 20,
   "topic": "Output Methods",
   "q": "What does the prompt() method do in JavaScript?",
   "options": [
    "It only displays a message with an OK button",
    "It shows a dialog box that asks the user for input and returns the entered value",
    "It writes text directly into the web page",
    "It prints a message in the browser console"
   ],
   "answer": 1
  },
  {
   "id": 21,
   "topic": "Output Methods",
   "q": "What will be written on the web page by this code?\ndocument.write(5 + 3);",
   "options": [
    "5 + 3",
    "8",
    "53",
    "Nothing"
   ],
   "answer": 1
  },
  {
   "id": 22,
   "topic": "Variables",
   "q": "What happens when this code runs?\nlet x = 5;\nlet x = 10;\nconsole.log(x);",
   "options": [
    "It prints 10",
    "It gives a SyntaxError because let variables cannot be redeclared",
    "It prints 5",
    "It prints undefined"
   ],
   "answer": 1
  },
  {
   "id": 23,
   "topic": "Variables",
   "q": "Which statement about a variable declared with const is correct?",
   "options": [
    "Its value can be reassigned at any time",
    "It must be assigned a value at declaration and cannot be reassigned",
    "It is always global in scope",
    "It does not need a value at declaration"
   ],
   "answer": 1
  },
  {
   "id": 24,
   "topic": "Variables",
   "q": "What is the output of this code?\nvar a = 1;\nvar a = 2;\nconsole.log(a);",
   "options": [
    "1",
    "2",
    "SyntaxError",
    "undefined"
   ],
   "answer": 1
  },
  {
   "id": 25,
   "topic": "Data Types",
   "q": "What is the output of this code?\nconsole.log(typeof null);",
   "options": [
    "\"null\"",
    "\"object\"",
    "\"undefined\"",
    "\"number\""
   ],
   "answer": 1
  },
  {
   "id": 26,
   "topic": "Data Types",
   "q": "What is the output of this code?\nconsole.log(typeof [1, 2, 3]);",
   "options": [
    "\"array\"",
    "\"object\"",
    "\"number\"",
    "\"list\""
   ],
   "answer": 1
  },
  {
   "id": 27,
   "topic": "Data Types",
   "q": "What is the output of this code?\nlet x = \"123\";\nconsole.log(typeof x);",
   "options": [
    "\"number\"",
    "\"boolean\"",
    "\"string\"",
    "\"undefined\""
   ],
   "answer": 2
  },
  {
   "id": 28,
   "topic": "Data Types",
   "q": "Which of the following is NOT a primitive data type in JavaScript?",
   "options": [
    "String",
    "Number",
    "Object",
    "Boolean"
   ],
   "answer": 2
  },
  {
   "id": 29,
   "topic": "Operators",
   "q": "What is the output of this code?\nconsole.log(10 % 3);",
   "options": [
    "3",
    "0",
    "1",
    "3.33"
   ],
   "answer": 2
  },
  {
   "id": 30,
   "topic": "Operators",
   "q": "What is the output of this code?\nconsole.log(2 ** 3);",
   "options": [
    "6",
    "5",
    "8",
    "9"
   ],
   "answer": 2
  },
  {
   "id": 31,
   "topic": "Operators",
   "q": "What is the output of this code?\nconsole.log(5 == \"5\");\nconsole.log(5 === \"5\");",
   "options": [
    "true and true",
    "false and true",
    "true and false",
    "false and false"
   ],
   "answer": 2
  },
  {
   "id": 32,
   "topic": "Operators",
   "q": "What is the output of this code?\nlet age = 18;\nconsole.log(age >= 18 ? \"Adult\" : \"Minor\");",
   "options": [
    "Minor",
    "true",
    "Adult",
    "Error"
   ],
   "answer": 2
  },
  {
   "id": 33,
   "topic": "Conditions",
   "q": "What is the output of this code?\nlet n = 7;\nif (n % 2 === 0) {\n  console.log(\"Even\");\n} else {\n  console.log(\"Odd\");\n}",
   "options": [
    "Even",
    "7",
    "Odd",
    "Nothing"
   ],
   "answer": 2
  },
  {
   "id": 34,
   "topic": "Conditions",
   "q": "What is the output of this code?\nlet marks = 85;\nif (marks >= 90) {\n  console.log(\"A\");\n} else if (marks >= 80) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}",
   "options": [
    "A",
    "C",
    "B",
    "Nothing"
   ],
   "answer": 2
  },
  {
   "id": 35,
   "topic": "Conditions",
   "q": "The block of code inside an if statement is executed when the condition is:",
   "options": [
    "false",
    "undefined",
    "true",
    "null"
   ],
   "answer": 2
  },
  {
   "id": 36,
   "topic": "Logical Conditions",
   "q": "What is the output of this code?\nconsole.log(true && false || true);",
   "options": [
    "false",
    "undefined",
    "true",
    "Error"
   ],
   "answer": 2
  },
  {
   "id": 37,
   "topic": "Logical Conditions",
   "q": "What is the output of this code?\nconsole.log(!(10 > 5));",
   "options": [
    "true",
    "10",
    "false",
    "5"
   ],
   "answer": 2
  },
  {
   "id": 38,
   "topic": "Switch Statement",
   "q": "What is the output of this code?\nlet day = 2;\nswitch (day) {\n  case 1: console.log(\"Mon\"); break;\n  case 2: console.log(\"Tue\"); break;\n  default: console.log(\"Other\");\n}",
   "options": [
    "Mon",
    "Other",
    "Tue",
    "Mon and Tue"
   ],
   "answer": 2
  },
  {
   "id": 39,
   "topic": "Switch Statement",
   "q": "What is the output of this code?\nlet x = 1;\nswitch (x) {\n  case 1: console.log(\"One\");\n  case 2: console.log(\"Two\"); break;\n  case 3: console.log(\"Three\");\n}",
   "options": [
    "One only",
    "Two only",
    "One, Two and Three",
    "One and Two"
   ],
   "answer": 3
  },
  {
   "id": 40,
   "topic": "Loops",
   "q": "What is the output of this code?\nlet s = 0;\nfor (let i = 1; i <= 3; i++) {\n  s += i;\n}\nconsole.log(s);",
   "options": [
    "3",
    "5",
    "4",
    "6"
   ],
   "answer": 3
  },
  {
   "id": 41,
   "topic": "Loops",
   "q": "What is the output of this code?\nlet i = 0;\nwhile (i < 3) {\n  i++;\n}\nconsole.log(i);",
   "options": [
    "0",
    "2",
    "Infinite loop",
    "3"
   ],
   "answer": 3
  },
  {
   "id": 42,
   "topic": "Loops",
   "q": "What is the output of this code?\nlet i = 10;\ndo {\n  console.log(i);\n  i++;\n} while (i < 5);",
   "options": [
    "Nothing is printed",
    "10, 11, 12, 13, 14",
    "Infinite loop",
    "10"
   ],
   "answer": 3
  },
  {
   "id": 43,
   "topic": "Loops",
   "q": "What is the output of this code?\nlet arr = [10, 20, 30];\nlet total = 0;\nfor (let v of arr) {\n  total += v;\n}\nconsole.log(total);",
   "options": [
    "30",
    "50",
    "3",
    "60"
   ],
   "answer": 3
  },
  {
   "id": 44,
   "topic": "Functions",
   "q": "What is the output of this code?\nfunction add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));",
   "options": [
    "34",
    "undefined",
    "Error",
    "7"
   ],
   "answer": 3
  },
  {
   "id": 45,
   "topic": "Functions",
   "q": "What is the output of this code?\nconst sq = n => n * n;\nconsole.log(sq(5));",
   "options": [
    "10",
    "20",
    "undefined",
    "25"
   ],
   "answer": 3
  },
  {
   "id": 46,
   "topic": "Functions",
   "q": "What is the output of this code?\nfunction greet() {\n  console.log(\"Hi\");\n}\nlet r = greet();\nconsole.log(r);",
   "options": [
    "Hi only",
    "undefined only",
    "Error",
    "Hi, then undefined"
   ],
   "answer": 3
  },
  {
   "id": 47,
   "topic": "Functions",
   "q": "In JavaScript, the values passed to a function when it is called are known as:",
   "options": [
    "Parameters",
    "Variables",
    "Returns",
    "Arguments"
   ],
   "answer": 3
  },
  {
   "id": 48,
   "topic": "Scope",
   "q": "What is the output of this code?\nlet x = 10;\nfunction test() {\n  let x = 20;\n  console.log(x);\n}\ntest();\nconsole.log(x);",
   "options": [
    "10, then 10",
    "20, then 20",
    "Error",
    "20, then 10"
   ],
   "answer": 3
  },
  {
   "id": 49,
   "topic": "Objects",
   "q": "What is the output of this code?\nconst person = {\n  name: \"Ali\",\n  age: 25,\n  greet: function() { return \"Hi \" + this.name; }\n};\nconsole.log(person.greet());",
   "options": [
    "Hi undefined",
    "Hi person",
    "Error",
    "Hi Ali"
   ],
   "answer": 3
  },
  {
   "id": 50,
   "topic": "Arrays",
   "q": "What is the output of this code?\nlet fruits = [\"Apple\", \"Banana\"];\nfruits.push(\"Mango\");\nconsole.log(fruits.length);",
   "options": [
    "2",
    "Mango",
    "undefined",
    "3"
   ],
   "answer": 3
  }
 ]
};
