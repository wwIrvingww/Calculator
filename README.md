# Calculator Component

The Calculator component is a fully functional calculator built with React. It features a display and buttons for digits, operations, and controls, allowing users to perform basic arithmetic operations. The component handles keyboard input, limiting the display to a maximum of 9 digits to ensure usability. The Calculator is designed to handle various states, including error handling and toggling the sign of the current input.

## Testing

The Calculator component is thoroughly tested using Vitest and React Testing Library. Tests cover essential functionalities such as rendering the component, displaying numbers upon button clicks, performing arithmetic operations, and handling keyboard inputs. Specific tests ensure that only a maximum of 9 digits can be entered and that error states are managed gracefully. Additionally, the component's integration with Storybook demonstrates its behavior in different scenarios, enhancing the development and debugging process.

## Stories in Storybook

Storybook is utilized to create interactive stories for the Calculator component, showcasing its various states and functionalities. The stories include the default state, initial values, maximum digit limit, error state, and completed calculations. These stories provide a comprehensive view of the component's behavior, facilitating easier collaboration and testing during development.
