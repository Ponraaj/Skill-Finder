# Educational App


## Overview

This educational app which is ** Skill-Finder** provides a seamless learning experience with features including user authentication via Supabase, containerization with Docker, and AI-powered functionalities through the Gemini API. Built using the MERN stack (Supabase, Express, React, Node.js), the app features a responsive UI with Tailwind CSS, and robust educational content management.

## Features

 User authentication with Supabase
 
 Containerization with Docker
 
 AI-powered functionalities with Gemini API
 
 Responsive UI using Material UI and Tailwind CSS
 
 Educational content management


## Table of Contents
Installation

Usage

API Integration

Contributing


## Installation

To get started, first clone the repository from GitHub using **git clone https://github.com/Ponraaj/Skill-Finder.git**. Navigate into the project directory with cd your-repo. Ensure you have pnpm installed globally; if not, you can install it using **npm install -g pnpm**. After that, install the project's dependencies by running **pnpm install**. Make sure to configure your environment variables by editing the .env and .env.local files to include your environment-specific variables.

#### git clone https://github.com/Ponraaj/Skill-Finder.git
#### cd your-repo
#### npm install -g pnpm
#### pnpm install

## Usage

To run the application, start the development server with the command pnpm run dev. Open your browser and visit http://localhost:3000 to interact with the application. For testing model integration, enter input data into the provided form to receive predictions from the trained model.

#### pnpm run dev

## API Integration

For integrating with the Gemini API, ensure that your .env file contains your Gemini API key and model endpoint, formatted as GEMINI_API_KEY=your-gemini-api-key and GEMINI_MODEL_ENDPOINT=your-model-endpoint. Similarly, for Supabase integration, your .env.local file should include SUPABASE_URL=your-supabase-url and SUPABASE_ANON_KEY=your-supabase-anon-key.

#### .env.local
#### VITE_SUPABASE_PROJECT_ID=your-supabase-ID
#### VITE_SUPABASE_ANON_KEY=your-supabase-anon-key


## Contributing

Contributions are welcome! To contribute, fork the repository, create a new branch using git checkout -b feature-branch, and commit your changes with git commit -am 'Add new feature'. Push your changes to the branch with git push origin feature-branch and create a new Pull Request on GitHub.


