# Color Box Maker React App

## Overview

This React application allows users to create and manage colored boxes with custom dimensions. Users can add new boxes with specified width, height, and background color, and remove them individually.

## Components

### App Component

- **Description**: Renders the main container for the application.
- **Usage**: Renders the `BoxList` component.

### BoxList Component

- **Description**: Manages state for all boxes and renders individual `Box` components along with the `NewBoxForm`.
- **State**: Contains an array of objects representing each box's properties (color, width, height).
- **Props Passed**: None.

### Box Component

- **Description**: Displays a colored box with specified dimensions.
- **Props**:
  - `color`: Background color of the box.
  - `width`: Width of the box.
  - `height`: Height of the box.
- **Additional Feature**: Includes a remove button ("X") to delete the box.

### NewBoxForm Component

- **Description**: Renders a form to create a new box.
- **Inputs**: 
  - `Color`: Background color input.
  - `Width`: Width of the box input.
  - `Height`: Height of the box input.
- **Submit Behavior**: Clears input fields after adding a new box.

## Usage

1. **Clone the repository**: 
   ```bash
    git clone https://github.com/yourusername/color-box-maker.git
    cd color-box-maker
    npm install
    npm start
```

