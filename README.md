# Ball-Bounce-Game

## Introduction: 
The Ball Bouncing Game project is an interactive and entertaining web-based game developed using HTML, CSS, and JavaScript. The objective of the game is to provide users with an engaging experience by allowing them to interact with bouncing balls on a grass green background. When a ball is clicked, it bounces up to a maximum height of 350 pixels and changes its color midway through the animation.

The project aims to showcase the capabilities of web technologies in creating simple yet enjoyable games. By combining HTML for structure, CSS for visual styling, and JavaScript for interactivity, the game offers a seamless user experience. The intuitive gameplay mechanics of clicking on the balls to make them bounce and the added visual element of color change make the game both easy to understand and visually appealing.

This project can serve as a source of entertainment, a stress-relieving tool, or a way to pass the time. It demonstrates the potential of web technologies in creating interactive experiences and highlights the importance of creativity and user engagement in game development. Whether played on a desktop computer, laptop, or mobile device, the Ball Bouncing Game promises a delightful and immersive experience for users of all ages.

Technologies Used: 
The project utilizes the following technologies:

HTMl: HTML, which stands for HyperText Markup Language, is a fundamental technology used for structuring web page elements and providing content. In the context of the ball bouncing game, HTML is responsible for creating the layout and structure of the game components. It defines the different sections, such as the game container, instruction panel, balls, and game description. HTML tags and attributes are used to define the structure and hierarchy of the elements on the web page.

CSS: CSS, short for Cascading Style Sheets, is used to style the web page elements in terms of appearance, layout, and presentation. In the ball bouncing game project, CSS is utilized to define the visual aspects of the game, including colors, sizes, positions, and animations. CSS rules and selectors are employed to target specific elements and apply styling properties to achieve the desired visual design. For example, CSS is used to set the background color, dimensions, positions, and outline of the game container, balls, and other components. It also defines the animation properties for the bounce effect.

JavaScript: JavaScript is a programming language used to add interactivity and implement the game logic of the ball bouncing game. In this project, JavaScript is responsible for handling user interactions and controlling the behavior of the balls. Event listeners are used to detect when a ball is clicked, triggering the bounce animation and color change. JavaScript functions are implemented to calculate the ball's position, initiate the animation, and modify the ball's style properties. Additionally, JavaScript is utilized to generate random colors for the balls during the animation, adding an element of unpredictability and visual interest to the game.

## Features: 
The ball bouncing game offers the following features:

Interactive Gameplay: Users can click on any of the three balls to make them bounce.


Bounce Animation: The balls animate in a linear manner, bouncing up to a maximum height of 350 pixels.

Color Change: During the animation, the color of the ball changes to a random color, adding visual appeal to the game.

Responsive Design: The game layout adapts to different screen sizes, making it accessible on various devices.

## Implementation Details: 
The game is implemented using HTML, CSS, and JavaScript. Here is an overview of the code structure and functionality:

HTML: The HTML code in the ball bouncing game project defines the structure of the web page. It consists of various div elements that represent different sections and components of the game. These div elements include:
Game container: The div with the id "game-container" represents the area where the game is displayed. It has a fixed width and height and is positioned relative to the page.
Instruction panel: The div with the id "instruction-panel" contains the game instructions. It is positioned absolute and appears at the top left corner of the game container.
Balls: The divs with the ids "ball1", "ball2", and "ball3" represent the three bouncing balls in the game. They are positioned absolutely at the bottom of the game container.

CSS: The CSS code in the ball bouncing game project defines the styling rules for different elements. It specifies the visual appearance, dimensions, positions, colors, and animations of various components. Some of the CSS rules used in the project include:
Background color: The background color of the game container and other sections is defined using the "background-color" property.

Dimensions: The width and height of the game container, balls, and other elements are specified using the "width" and "height" properties.
Positions: The positioning of the instruction panel, balls, and other elements is controlled using properties like "position", "top", "left", and "bottom".
Colors: The background color and text color of different elements are set using the "color" and "background-color" properties.
Animations: The bounce animation of the balls is defined using the "@keyframes" rule, specifying the intermediate positions at different animation keyframes.

JavaScript: The JavaScript code in the ball bouncing game project handles the game logic and user interactions. It uses event listeners to detect clicks on the balls and triggers the bounce animation. The key functionalities implemented in JavaScript include:
Event listeners: The "click" event listeners are attached to each ball, enabling the detection of user clicks on the balls.
Bounce animation: When a ball is clicked, the JavaScript code updates the position of the ball using the "style" property, making it bounce up to a maximum height.
Color change: The JavaScript code generates a random color using the "generateRandomColor()" function and changes the background color of the ball midway through the animation.
Timing: The "setTimeout()" function is used to control the timing of the animation and color change, ensuring smooth transitions and synchronized effects.



