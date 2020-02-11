#### Important Links

- [Deployed API](https://obscure-peak-32326.herokuapp.com/)
- [Client Repository](https://github.com/sr-hub/JokR-front-end/)
- [Deployed Client](https://sr-hub.github.io/JokR-front-end/#/)

### JokR README:

This application allows users to sign in to create, edit, and delete jokes connected to their accounts, and view jokes without being registered. Any registered user can create jokes and save user-made jokes.

#### Technologies Used:

MongoDB
Mongoose
Express
JS, Node.js
Heroku

#### ERD and Planning Process Used:
The user resource represents the user of the app. From there, a user has many jokes - both those they can create and those they can acquire from public api's (this is still a work in progress). These jokes populate the ID of user, calling that user the owner of the joke. Users can save jokes as favorite jokes to access at a later time. In future versions, users will be able to save third-party jokes, which will constitute their own resource in the back-end. Eventually, these saved jokes will enable users to share jokes with friends.

For further informatio non the planning process, please see the client repository linked above.

#### ERD for resources is at this link: https://imgur.com/a/0QtmppG

#### Routes Catalog
The API for this blog accepts requests for user, jokes, and favorites. For users, it contains SIGN UP (POST), SIGN IN (POST), CHANGE PASSWORD (PATCH), and SIGN OUT (DELETE).

| request |      url     | action | response |
|:-------:|:------------:|:------:|:--------:|
| POST    | '/users'     | create |    201   |
| PATCH   | '/users/:id' | update |    204   |
| DELETE  | '/users/:id' | delete |    204   |

For jokes, it contains INDEX for GETing all of the post, SHOW for GETing one, CREATE, UPDATE, and DESTROY.

| request |      url     | action | response |
|:-------:|:------------:|:------:|:--------:|
| GET     | '/jokes'     | index  |    200   |
| GET     | '/jokes/:id' | show   |    200   |
| POST    | '/jokes'     | create |    201   |
| PATCH   | '/jokes/:id' | update |    204   |
| DELETE  | '/jokes/:id' | delete |    204   |


For favorites, it contains CREATE, UPDATE, and DESTROY.


| request |      url                       | action | response |
|:-------:|:------------------------------:|:------:|:--------:|
| POST    | '/favorites'                   | create |    201   |
| DELETE  | '/favorites/:favoriteId'       | delete |    204   |


#### Current Issues
Delete function on favorited jokes
Button change on favorite'ing and unfavorite'ing jokes

#### Future plans
Send jokes to other users, e-mails, or by SMS
