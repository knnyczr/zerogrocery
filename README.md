# Zero Grocery coding challenge

### How to run this app

1. Clone this repository
2. `cd kennycruz-zerogrocery`
3. Run `npm i` to install dependancies
4. Run `npm start` to run the app

### ISSUES & RESOLUTIONS

- node versions w/redux and redux toolkit do not run with node 15.
- node-sass is not yet supported with node@15.

> solution: `brew unlink node` && `brew install node@14` && `brew link node@14 --force`