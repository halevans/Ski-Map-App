# Ski App

## Description

## Deployment link

## Technologies Used

## Planning

### Technical Requirements

- [x] Add a new item to a list
- [ ] Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
- [ ] Edit an item from a list
- [x] Remove an item from a list
- [x] Clear/delete all items
- [ ] Clear/delete only marked items
- [ ] Fetch data from at least one 3rd party API using Axios or fetch.
- [x] Make frequent Git commits with descriptive messages, explaining your commit.

### User Stories for minimum viable product (MVP)

- [ ] As a user, I want to add a new location to a list so that I can look it up at a later date
- [ ] As a user, I want to flag the location as complete so that I know I have looked it up
- [ ] As a user, I want to be able to edit an item on the list so that I can amend spelling mistakes
- [ ] As a user, I want to be able to remove an item from a list so that I don't have to see it any more
- [ ] As a user, I want to be able to clear/delete all items from the list so that I have a quick way of removing all items
- [ ] As a user, I want to be able to clear/delete only items that I have marked, so that I can delete some but not all items
- [ ] As a user, I want to be able to view the map of a ski resort

### Wireframes

#### Home

![Wireframe for Home](/images/Home.png)

#### Favourites

![Wireframe for Favourites](/images/Favourites.png)

## Build/Code Process

### Component Structure

> __App__: top-level component; where data is fetched from the API
>
> __--Favourites__: this is the favourites route -- the build of the app will start here to complete the MVP for the list items under "Quick Add"
>
> __---ListContainer__: this is a container that renders the individual list items
>
> __----SubmitForm__: this component contains the form that the user needs to fill in order to add one task to the list. It includes an edit box for the input and a submit button
>
> __----ListItem__: displays a single item that the user has entered. It contains the item text, and BUTTONS...


### Challenges

### Wins

### Noteworthy Functions

### Key Learnings/Takeaways

### Bugs

## Final Product

## Future Improvements

## Outstanding Queries





# *** REACT INFO ***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
