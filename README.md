# Ski Map App

## Description

The Ski Map App is a resource to find ski maps of a particular resort over different publishing years. It was originally intended to be a resource to search for ski maps, new and old, for ski resorts around the world. Additionally, a user can enter a ski resort in a 'to-do list' form, to remind them to look up the map at a later date.

The data used for the app was sourced from [Skimap.org](https://skimap.org/).

The app is currently limited to Matterhorn (Zermatt/​Breuil-Cervinia/​Valtournenche) region only (#id 987 in the API) for build and testing purposes.

## Deployment Link

https://ski-map-app.netlify.app/

## Technologies Used

This project was built using [`React.js`](https://reactjs.org/). It additionally utilised:

- [`React Bootstrap`](https://react-bootstrap.github.io/) - for styling
- [`npm`](https://www.npmjs.com/) - package manager
- [`netlify`](https://www.netlify.com/) - to host the single page app

## Planning

### Technical Requirements

- [x] Add a new item to a list
- [x] Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
- [x] Edit an item from a list
- [x] Remove an item from a list
- [x] Clear/delete all items
- [x] Clear/delete only marked items
- [x] Fetch data from at least one 3rd party API using Axios or fetch
- [x] Make frequent Git commits with descriptive messages, explaining your commit

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

![Wireframe for Home](/src/images/Home.png)

#### Favourites

![Wireframe for Favourites](/src/images/Favourites.png)

## Build/Code Process

### Component Structure and Hierarchy

First off, the UI was broken into a component hierarchy. This was done using both text for the components as below, and also images with boxes drawn around each component as at the end of this section. Pages are denoted in __bold__.

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
                - ListContainer as above is then repeated as a child of MapModal for users to leave comments on particular maps
- __Favourites__: this is the favourites route
- __About__: this route displays static text about the idea and the inspiration behind the app

![React Components hierarchy](/src/images/React-components.png)

### API

The data used for the app was sourced from [Skimap.org](https://skimap.org/).

``` json
{
    "id": "987",
    "name": "Matterhorn (Zermatt/​Breuil-Cervinia/​Valtournenche)",
    "opening_year": 1936,
    "official_website": "http://bergbahnen.zermatt.ch/",
    "owner": "",
    "terrain_park": "Yes",
    "night_skiing": "Unknown",
    "operating_status": "Operating",
    "latitude": 45.942496045578,
    "longitude": 7.7092856168747,
    "user": { ... },
    "tags": [ ... ],
    "ski_maps": [ ... ],
    "created": "2018-05-12T07:31:22+00:00",
    "regions": [ ... ]
}
```

### Bugs

- The "X" close button symbol in the top right of the MapModal (i.e. the pop-up when you click on a resort card) does not work -- closing must be done using the "Close" button in the bottom right of the pop-up
    - It appears to be due to conflict between the `e.stopPropagation()` and the fact that no event is passed to the method
    - The `closeButton` property could be removed from MapModal to rectify this from a UI perspective while a solution is found
- On clicking on a Map (i.e. opening MapModal component) the console provides a warning of `React does not recognize the 'skiMap' prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase 'skimap' instead. If you accidentally passed it from a parent component, remove it from the DOM element.`
- The prop for the high-resolution `img` for the MapModal should be `{this.props.skiMap.media.original.url}`, rather than `{this.props.skiMap.media.image.url}.`
    - The images do not load due to a CORBs issue: `Cross-Origin Read Blocking (CORB) blocked cross-origin response https://skimap.org/data/987/3535/1669939931.pdf with MIME type application/pdf.`
    - Using `media.image.url` instead renders an image, however not all elements in the skiMap array have entries for `media.image.url` (i.e. some are null), whereas for `media.original.url` do -- the CORBs issue should therefore be investigated

## Final Product

### Home Page

![Home Page](/src/images/final-Home-page.png)

### Modal Page

![Modal Page](/src/images/final-Modal-page.png)

### Comments Section

![Modal Comments Section](/src/images/final-Comments-section.png)

### Mobile View

![Mobile view](/src/images/final-mobile.png)

## Future Improvements

- Incorporating a larger API database. Currently, the data is limited to Zermatt only for building, testing and for loading speed purposes (the [full list of every ski area on the site](https://skimap.org/SkiAreas/index.json) > 5 seconds to load each time)
- Adding a Search component to filter through the cards for the different area and/or years
- Adding a Favourite button to the MapCards, and showing these on the Favourites page
- Deploying to GitHib Pages instead of Netlify. Following these instructions almost got it working. Just needed to amend navigation errors (i.e. it would chop off `/Ski-Map-App`
    - https://stackoverflow.com/questions/72251483/home-component-is-not-rendering-when-the-app-loads-on-github-pages-but-loading-o
    - https://github.com/rafgraph/spa-github-pages#usage-instructions
- Amending the Search component to include autocomplete based off the SkiArea names
    - https://blog.logrocket.com/create-customizable-react-search-component-autocomplete/
- Favourites icon on cards, and update Favourites page with favourited items
- Change the comment section underneath the ModalMap to be a review section. This could be linked with a database to store the information
