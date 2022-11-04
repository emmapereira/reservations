# About the app

This app represents a simple reservation system. User's can see a list of the rooms in the hotel and choose to reserve one of them in their desired dates for a specific number of people. The system checks that all input is filled and that the room is actually available on those dates, before submitting their reservation. 

The system assumes the number of people inserted by the user as input can be smaller than the capacity of the room. 

Since this app was implemented without a data base, data is handled via JSON files, which means that some of the functionalities are mocked only (such as writing a new reservation).

![alt text](/public/app1.png)


Initial information displayed on the screen

![alt text](/public/app2.png)


Reservation box when the user clicks on "Reserve" of one of the rooms

![alt text](/public/app3.png)


Calendar input example

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
