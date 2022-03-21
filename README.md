## Keystone `document()` field renderer in React Native
This project demonstrates how to render output of `document` field in React Native application.
The [`document`](https://keystonejs.com/docs/apis/fields#document) field represents the rich text editor on the CMS interface

This repo leverages overriding of `inline` and `block` elements as 
defined in [Overriding the default renderers](https://keystonejs.com/docs/guides/document-fields#overriding-the-default-renderers)

## Pre-requisites
- This project leverages `expo-cli`, so please refer to the [setup instructions](https://reactnative.dev/docs/environment-setup)
in order to make sure your project runs with no issues.
- Make sure xcode is installed and you have agreed to license agreement, if not already.

## How to start
- Clone the repo, cd into the repo and run `yarn install`.
- To start the app, run `yarn start`
You will see output similar to the following
```shell
› Webpack waiting on http://192.168.1.73:19006
› Expo Webpack (web) is in beta, and subject to breaking changes!

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)

› Press ? │ show all commands

› Open in the web browser...
› Press ? │ show all commands
```

I have tested in this on OSX 12.3 (Mac Monterey), running it on `iOS Simulator`, by
pressing `i` on the terminal.

The demo is available on [YouTube](https://youtu.be/vB9HHgOyoIo)

