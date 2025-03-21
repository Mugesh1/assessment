# Angular Authentication App with Loader and Interceptor

This project is a basic Angular-based authentication app that demonstrates login functionality, token-based session persistence, global loader implementation, and HTTP interceptor usage, with JSON Server as the backend.

---

## Table of Contents
1. [Setup Instructions](#setup-instructions)  
2. [Features](#features)  
3. [Architecture and Approach](#architecture-and-approach)  
4. [Technologies Used](#technologies-used)  
5. [Folder Structure](#folder-structure)  
6. [JSON Server Setup](#json-server-setup)  

# Setup Instructions
Follow these steps to set up the project on your local machine:

- **Node.js** (v20.16.0 or higher)
- **Angular CLI installed globally**  
  `npm install -g @angular/cli@19`
- **JSON Server**  
  `npm install -g json-server`

# Features
- **User Authentication:** Login system with token-based authentication.
- **Token Interceptor:** Auth token automatically added to HTTP requests via an Angular HTTP interceptor.
- **Global Loader:** Displays a loader/spinner during all API calls to improve user experience.
- **JSON Server Integration:** Backend API functionality using a mock `db.json` file.


# Architecture and Approach
This app follows a component-based architecture with Angular services, state management using `@ngrx/component-store`, and HTTP interceptors for handling token-based authentication and API calls. Below is a brief explanation of the key elements:

## Component Store (`auth.store.ts`)
- Manages authentication state (user data, token, isAuthenticated flag).
- Initializes state on app startup by reading token from cookies.
- Provides login and logout effects to manage login/logout workflows.

## Token-Based Authentication
- On successful login, the token is saved in cookies.
- `authInterceptor` attaches the token as an Authorization header to all outgoing API requests.

## Loader Implementation
- A `LoaderService` handles showing and hiding the global loader.
- The loader is triggered in the HTTP interceptor and displayed during API calls.

## Mock Backend (JSON Server)
- The app uses `db.json` as a mock backend.
- It serves REST endpoints such as:
  - `http://localhost:3000/api/login`
  - `http://localhost:3000/api/users`
  - `http://localhost:3000/api/items`

# Technologies Used
- **Angular:** Frontend framework for building the user interface.
- **Angular Material:** UI component library.
- **NGRX Component Store:** Lightweight state management.
- **JSON Server:** Mock REST API backend.
- **RxJS:** Reactive programming to handle streams and asynchronous events.
- **TypeScript:** For type safety and modern JavaScript features.

# Folder Structure

│   app.component.html
│   app.component.scss
│   app.component.spec.ts
│   app.component.ts
│   app.config.ts
│   app.routes.ts
│
├───auth
│   └───login
│           login.component.html
│           login.component.scss
│           login.component.spec.ts
│           login.component.ts
│
├───core
│   ├───guards
│   │       auth.guard.ts
│   │       
│   ├───interceptor
│   │       auth.interceptor.ts
│   │
│   ├───services
│   │       auth.service.spec.ts
│   │       auth.service.ts
│   │       configService.ts
│   │       loader.service.ts
│   │
│   └───store
│           auth.store.ts
│           items.store.ts
│           user.store.ts
│
├───dashboard
│       dashboard.component.html
│       dashboard.component.scss
│       dashboard.component.spec.ts
│       dashboard.component.ts
│
├───items
│       items.component.html
│       items.component.scss
│       items.component.spec.ts
│       items.component.ts
│
├───layout
│   │   layout.component.html
│   │   layout.component.scss
│   │   layout.component.spec.ts
│   │   layout.component.ts
│   │
│   ├───header
│   │       header.component.html
│   │       header.component.scss
│   │       header.component.spec.ts
│   │       header.component.ts
│   │
│   └───sidebar
│           sidebar.component.html
│           sidebar.component.scss
│           sidebar.component.spec.ts
│           sidebar.component.ts
│
├───loader
│       loader.component.html
│       loader.component.scss
│       loader.component.spec.ts
│       loader.component.ts
│
├───shared
│   │   material.module.ts
│   │   shared.module.ts
│   │
│   └───components
│       ├───confirm-dialog
│       │       confirm-dialog-config.ts
│       │       confirm-dialog.component.html
│       │       confirm-dialog.component.scss
│       │       confirm-dialog.component.spec.ts
│       │       confirm-dialog.component.ts
│       │
│       └───snackbar
│               snackbar.component.html
│               snackbar.component.scss
│               snackbar.component.spec.ts
│               snackbar.component.ts
│
└───user
        user.component.html
        user.component.scss
        user.component.spec.ts
        user.component.ts
# JSON Server Setup

**JSON Server** is a simple and fast way to set up a full REST API using a static JSON file as a database. Below are the steps to set it up for your project.
## 1. Install JSON Server
## 2. Create a db.json and create a collections
## 3. Configure url by creating routes.json

# Run the Angular App
Install npm with `npm install --force` or `npm install`
Start the Angular frontend app and JSON server with `npm run start-dev`

# Usage
## Login:
- Enter valid credentials from the `db.json` file to log in.

Example:
- **Email:** test123@gmail.com
- **Password:** password123

## Logout:
- Click the "Logout" button to log out, which will also clear the auth token.

 





