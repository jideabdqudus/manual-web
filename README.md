# Manual Case Study

## Links

- [Vercel](https://manual-web.vercel.app/)

## Tech Stack

- Framework: NextJS
- Styling: Tailwind
- State: Context
- Test: Playwright + Jest

## Installation

1. Clone the repository

2. Ensure the project runs within the desired node engine:
   `nvm use`

3. Install dependencies
   `npm install`

4. Run development server
   `npm run dev`

5. For unit testing
   `npm run test`

6. For e2e testing
   `npm run test:e2e`

## App Overview

1. NextJS: NextJS is the modern react framework, and has a wide range of advantages, as per the project requirements - I've stuck to using NextJS for this application and tried to show some of its many usecases while building.

2. UI with Tailwind: I've gone with using Tailwind for styling this application, asides using it as my day-to-day UI kit, It allows for quick bootstrapping with a mobile first responsive approach with full extensibility.

3. UI Library: I've gone ahead to 'mimic' a UI library or Design System by creating a UI folder with these said components, such as Buttons, Headers, Typographies e.t.c - For a full fledged application, I would consider testing those components using Storybook as I'm aware Manual has an evolving Design system.

4. Context API: For this project I've handled all of the 'business' logic, quiz states and layers using React Context.

5. Fetching Data: Whilst the app is a basic application, I've created a dummy data directory that handles all of the dynamic data within the app with its on fetch call, this is to mimic what the outcome would be in a larger application where we would make API calls to get these data.

6. Data Storing: I've added functionality that allows users save answers in local storage as they proceed, they can also go back to change their answers if they wish and it gets saved.

7. Testing: I've written e2e tests for the Quiz Flow and unit tests for some components just to point out how I would approach a larger project.


## Potential Future Enhancements

If additional time were available, the following features would be implemented:

1. Storybook + Enhanced Testing – Improve test coverage for all components and interactions.

2. Keyboard Accessibilty - User can fill the quiz using their keyboards alone

## Summary

It was nice working on this app, I approached it how I would approach other projects and tried to hit most of my milestones. I'm looking forward to the review and discussing further with the team.