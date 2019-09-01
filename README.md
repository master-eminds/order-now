# order-now
Cross platform app for accelerating the interaction with the waiter in your favorite restaurant.

# Start application
Run npm i for installing dependencies & ionic serve to start the web server

# Build application
This application is integrated with Capacitor tool from Ionic,
and all you need to do to create an ios/android build is to run the following commands:

> ionic build //creates bundles 

> npx cap add ios/android //to add desired platform

> npx cap copy // copy web assets only, which is faster if you know you don't need to update native dependencies.

or > npx cap sync // syncronize your bundles with platform build

and the last one to start the app on emulator preconfigured:

> npx cap open ios/android
