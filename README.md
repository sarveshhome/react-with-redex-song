# react-with-Redux

- ✨ Redux ✨

## mapStateToProps

> mapStateToProps is used for selecting the part of the data from the store that the connected component needs

- It is called every time the store state changes.

- It receives the entire store state, and should return an object of data this component needs.

> mapStateToProps function will be invoked each time the store updates. If you are not interested in store updates, leave it as undefined or null.

> mapStateToProps is declared with two parameters, the second one being optional. The first parameter is the current state of the Redux store. The second parameter, if passed, is an object of the props passed to the component



[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-8q76ca)
