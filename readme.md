#Flux vs Redux


##Flux
  Uses four concepts
  1. Actions
  2. Dispatcher
  3. Store
  4. React

  When actions are triggered, stores are notified via dispatcher. Flux uses singleton dispatcher to connect actions to stores. stores uses event emitter to connect with dispatcher. so in flux each store that wants to know actions needs to explicitly connect itself to the dispatcher

* Stores contain state and change logic
* Multiple stores
* Flat and disconnected stores
* Singleton dispatcher
* React components subscribe to stores
* State is mutable

##Redux

  **Doesn't have a dispatcher**.

  1. actions
  2. store
  3. Reducers
  4. React

  Redux depends upon pure function calls. Each action is ultimately handled by one or more reducers which updates single store. Since data is immutable in redux the reducer returns a new updated copy of state which updates the store.

  * Store and change logic are separate
  * one store
  * Single store with hierarchical reducers
  * No dispatcher
  * Container components utilize connect
  * State is immutable
