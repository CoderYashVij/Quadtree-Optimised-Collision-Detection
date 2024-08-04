# Quadtree-visualisation

This repository demonstrates the visualization of a Quadtree and how it efficiently segments a 2-D space when the number of points exceeds a specified limit. The Quadtree is a tree data structure commonly used to partition a two-dimensional space by recursively subdividing it into four quadrants or regions. This project aims to illustrate the dynamic construction of a Quadtree, perform query searches, and visualize real-time collision detection.

## Features

- **Construction**: Interactively build the quadtree by drawing points on the canvas. As more points are added, observe how the space is divided into smaller segments to manage the data efficiently.
- **Query Search**: Perform a search within a specified square region to find all the points contained within it. This feature demonstrates the quadtree's capability to quickly and accurately retrieve spatial information.
- **Collision Detection Visualization**: Visualize real-time collision detection using the quadtree structure. This feature highlights the quadtree's efficiency in handling dynamic environments where objects frequently move and interact.

## Tech Stack

- **HTML**: Provides the basic structure for the web page.
- **CSS**: Adds styling to make the visualization intuitive and visually appealing.
- **JavaScript**: Implements the core functionality of the quadtree, including point insertion, space segmentation, query searching, and collision detection.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CoderYashVij/Quadtree-visualisation.git
   cd Quadtree-visualisation
   ```

2. **Open `index.html` in your web browser** to start interacting with the quadtree visualization.

## Usage

- **Drawing Points**: Click on the canvas to add points. Watch as the quadtree dynamically adjusts to segment the space.
- **Query Search**: Use the query search tool to draw a rectangular region and retrieve all points within that area.
- **Collision Detection**: Observe the real-time collision detection feature, which uses the quadtree to efficiently detect and highlight collisions.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

Feel free to customize further as needed!
