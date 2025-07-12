# Directory Tree Generator

A simple and lightweight command-line utility built with Node.js to visualize and display the structure of a directory in a tree-like format.

## Description

When working on projects, it's often helpful to get a quick overview of the file and folder structure. This script recursively scans a specified directory and prints its contents, using characters to represent the tree structure, making it easy to understand the hierarchy at a glance.

## Prerequisites

Before you can run this script, you must have [Node.js](https://nodejs.org/) installed on your system. You can download it from the official website.

## Installation

1.  Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  Navigate into the cloned directory:
    ```bash
    cd your-repository-name
    ```

There are no external packages to install, as the script only uses the built-in `fs` (File System) and `path` modules.

## How to Run

You can run the script from your terminal using Node.js.

**To display the tree for the current directory:**

```bash
node tree-gen.js
