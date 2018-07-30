# Chirper App :bird:

This mock Twitter application allows users to view their chirper feed, add new 'tweets', and comment on and like other user's tweets. This project emphasizes the fundamentals of a Redux-React application. The application has been broken down into 6 distinct components:
* `App` - Holds the application's navigation and current view
* `Nav` - Allows a user to link to the `New Tweet` and `Dashboard` views
* `Tweet` - Displays a tweet's content and attribute summary
* `Dashboard` - Displays a user's feed
* `NewTweet` - Displays an empty tweet form for user to add new tweets to feed/comment
* `TweetPage` - Displays a particular tweet and its attributes (likes, replies, reply details)

![Home feed display in Chirper app](https://raw.githubusercontent.com/blitnee/chirper-app/master/src/utils/chirp-home.png)


## Instructions

1. Download a copy of the project locally or clone the repository:

    `git@github.com:blitnee/chirper-app.git`

2. Install dependencies and run:

    `npm install`

    `npm start`

    if you are using yarn

    `yarn install`

    `yarn start`

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks in the project [`README`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License
This project is licensed under the MIT [License](https://github.com/computationalcore/myreads/blob/master/LICENSE) - see the LICENSE file for details.