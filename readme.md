# Hack A Mole
a whack a mole game example 🦔

[Play Now](https://moles.ere.io)


## Convertion Effort
- Modernize react w/ hooks
- Convert all components to Typescript
    - create typed objects for models
- Remove moment - use native Date libs
- ~~Replace Firebase Auth~~
    - ~~JWT~~
    - ~~bcrypt~~
    - ~~refresh token~~
    - ~~revoke list for jwts~~
- Sanitize GraphQL Variables
- Rate limit GraphQL

## Original Spec
### Notes:
    * uses package by feature and duck typing project organization
    * uses .env file with NODE_PATH set so the node development server allows absolute pathing

**Create a simple Whack-a-mole game:**
1. The game should be hosted behind a login screen. 
2. The game should keep track of current user’s high score and the top 5 scores of all users. A score is one point for each “mole” whacked during a game (registered as a mouse click).  
3. A simple timer mechanism begins and ends each game. 
4. The user can adjust the rate at which “moles” appear. 

Write your frontend in JS (or typescript) using either React or Vue as your framework. The backend can be done in Node or Cloud Functions.  
We are not looking for or expecting a professionally polished game; rather we would like to see a demonstrated understanding of the technologies used and for you to be able to discuss the development decisions that were made along the way to creating the game. Please commit often and provide tests where you feel appropriate.

