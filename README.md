1. Each MF can be run separately unless it uses API exposed by shell. (Error Boundaries for libs need to be added). 
2. To see the full picture you need run every MF. `cd MF && yarn && yarn start` .
3. In this demo communication goes through the Observer pattern. RxJs BehaviourSubject was used. In real app   event-based communication can be used https://www.npmjs.com/package/eventemitter3 or investigate this lib 
https://github.com/microsoft/redux-micro-frontend#:~:text=This%20library%20can%20be%20used,self%2Dcontained%20and%20isolated%20unit.
4. As MFs communication shown on the example of authorization we need back end to do that. You can pull it there https://github.com/Lozovoi-Rodion/nestJs-api . Run `cd nestJs-api && yarn && yarn db:dev:restart && yarn start`
5. According to Luca Mezzalira, micro-frontends advocate, there are 4 key architectural decisions: defining, composing, routing, communicating. This app is horizontally defined, composed on the cliend side, routed on the client side and communication goes through Observer pattern. 
6. Check `Architecture.png` 