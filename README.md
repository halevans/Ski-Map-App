# Ski App

## Description

The Ski Map App was originally intended to be a resource to search for ski maps, new and old, for ski resorts around the world. Additionally, a user can enter a ski resort in a 'to-do list' form, to remind them to look up the map at a later date.

The data used for the app was sourced from [Skimap.org](https://skimap.org/).

The app is currently limited to Matterhorn (Zermatt/​Breuil-Cervinia/​Valtournenche) region only (#id 987 in the API) for build and testing purposes.

## Deployment link

https://ski-map-app.netlify.app/

## Technologies Used

This project was built using [React.js](https://reactjs.org/). It additionally utilised:

- [React Bootstrap](https://react-bootstrap.github.io/) - for styling
- [npm](https://www.npmjs.com/) - package manager
- [netlify](https://www.netlify.com/) - to host the single page app

## Planning

### Technical Requirements

- [x] Add a new item to a list
- [x] Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
- [x] Edit an item from a list
- [x] Remove an item from a list
- [x] Clear/delete all items
- [x] Clear/delete only marked items
- [x] Fetch data from at least one 3rd party API using Axios or fetch.
- [x] Make frequent Git commits with descriptive messages, explaining your commit.

### User Stories for minimum viable product (MVP)

- [x] As a user, I want to add a new location to a list so that I can look it up at a later date
- [x] As a user, I want to flag the location as complete so that I know I have looked it up
- [x] As a user, I want to be able to edit an item on the list so that I can amend spelling mistakes
- [x] As a user, I want to be able to remove an item from a list so that I don't have to see it any more
- [x] As a user, I want to be able to clear/delete all items from the list so that I have a quick way of removing all items
- [x] As a user, I want to be able to clear/delete only items that I have marked, so that I can delete some but not all items
- [x] As a user, I want to be able to view the map of a ski resort

### Wireframes

#### Home

![Wireframe for Home](/images/Home.png)

#### Favourites

![Wireframe for Favourites](/images/Favourites.png)

## Build/Code Process

### Component Structure and Hierarchy

Pages are denoted in __bold__.

- __App__: top-level component
- __NavBar__: provides a consistent component using React Bootstrap to navigate between pages
- __Home__: this is the Home route, the homepage of the app
    - ListContainer: this is a container that renders the individual list items
        - ListInput: this component contains the form that the user needs to fill in order to add items to the list. It includes an edit box for the input and a submit button
        - ItemsList: this component contains the list of the individual ListItems
            - ListItem: displays a single item that the user has entered. It contains the item text, and and buttons to select item, edit item (which calls the EditModal component), flag item, and delete the individual item
                - EditModal: brings up the option to edit the items in the list
    - MapCardGrid: a container for a grip of MapCards
        - MapCard: this renders one card per SkiArea Map, and displays a thumbnail of the ski area map
            - MapModal: when a card is clicked on, it opens a near full-screen resolution image of the thumbnail map rendered in MapCard
- __Favourites__: this is the favourites route
- __About__: this route displays static text about the idea and the inspiration behind the app

![React Components hierarchy](/images/React-components.png)

### API

### Challenges

### Wins

### Noteworthy Functions

### Key Learnings/Takeaways

### Bugs

## Final Product

## Future Improvements

- Deploying to GitHib Pages instead of Netlify. Following these instructions almost got it working. Just needed to amend navigation errors (i.e. it would chop off `/Ski-Map-App`
    - https://stackoverflow.com/questions/72251483/home-component-is-not-rendering-when-the-app-loads-on-github-pages-but-loading-o
    - https://github.com/rafgraph/spa-github-pages#usage-instructions
- Amending the Search component to include autocomplete based off the SkiArea names
    - https://blog.logrocket.com/create-customizable-react-search-component-autocomplete/
- Favourites icon on cards, and update Favourites page with favourited items

## Outstanding Queries
