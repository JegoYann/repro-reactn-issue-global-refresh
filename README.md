```
$ npm install
$ expo start
```

This repo is a small React Native / Expo app to reproduce an issue with the ReactN library.

In `screens/TabOneScreen.tsx`, there is a display of `this.global.myGlobalText`.
In `components/EditScreenInfo.tsx`,
 - there is a `this.setGlobal()` on click
 - there is a commented `this.setState()` on click
 - there is a `this.state.myLocalText` display
 - there is a `this.global.myGlobalText` display

 When I click on the `Click me` button, the `setGlobal()` is execute but nothing is display in the current component and the parent component.

 When I uncomment the `this.setState()` and click on the `Click me` button, then the display is done in the current component but not on the parent component.