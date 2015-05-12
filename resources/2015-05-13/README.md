# <!-- .element class="presentationHeading" --> How We <span class="react">React</span>
#### May 13 2015
![Tower](./resources/2015-05-13/images/TowerWhite.png)<!-- .element style="text-align: center; width: 350px;" -->



# React In Practice

![Tower](./resources/2015-05-13/images/TowerWhite.png)<!-- .element style="width: 350px;" -->

* Tower is a DIY Website-Building Tool
* Started heavy development six months ago
* Users have recently started to de-activate their traditional VP sites in favor of Tower sites
* [Demo](http://localhost:1337)



# React in Theory

* Why did we choose React to build products?


## The 'Virtual DOM' is fast.

* The Virtual DOM is a JS representation of the DOM.
  * Tree of React element "nodes"
  * Each node has a unique key
* <!-- .element class="fragment" --> Facebook made VDOM-diffing fast. Thanks Facebook!
  * Roughly `O(n)` &mdash; compare to <code>O(n<sup>3</sup>)</code>
* <!-- .element class="fragment" --> Components are free to re-`render` as often as they like.
* <!-- .element class="fragment" --> Re-rendering is cheap because of fast DOM swaps (often net-null).
* <!-- .element class="fragment" --> Components do not manipulate their DOM manually.

Note:
* A JS representation of the DOM and nothing fancier than that.
* Virtual Diff is fast because of tricks that FB has done - compare to current state-of-the-art diffing methods with `O(n^3)` performance.


## We like the notion of 'Components'

* <!-- .element class="fragment" --> 'Components' describe what a piece of the UI looks like, given some input.
* <!-- .element class="fragment" --> 'Components' are composable.
* <!-- .element class="fragment" --> HTML elements are UI 'primitives'
* <!-- .element class="fragment" --> Componentization allows for higher-level UI elements.
* <!-- .element class="fragment" --> Helps to clearly separate business logic from UI logic.
  * _Relevant_ business logic is passed into high-level components;
  * Smaller pieces are more primitive
  * Small-and-focused set of responsibilities

Note:
* Components aren't free to send and receive messages to other components in many different directions. Instead, they describe what they would look like given {some-input}.
* "Components are composable" - like HTML elements, but better


### How [React] Componentization Works

* Create [React] Components
* Pass props into components (much like HTML)
* <!-- .element class="fragment" data-fragment-index="0" --> DOM: "Given some attributes, as a DOM element, I know what to present to the user"
```html
    <form target="/arbitraryUrl">
            <input {someAttributes} />
            <input {someAttributes} />
    </form>
```
* <!-- .element class="fragment" data-fragment-index="0" --> Component: "Given some props, as a React Component, I know what to present to the user"
```html
<MyForm postUrl={url} fields={fields} />
```


### Reduce Complexity in the View Layer.

* Just say what _you_ (as the React Component) should look like given relevant application state.
  1. Application state given to top-level React node
  2. Passed down through the nodes of the tree
* <!-- .element class="fragment" --> No need to worry about other components on the page and their interaction(s) with you.
  * Components should not affect other components directly.
  * Define child components ("What am I composed of?") and pass props to child components.


![](resources/2015-05-13/images/ReRender.jpg)


## How does this differ from Traditional View Layers (e.g. Backbone)?
* Imagine a 'Form' View
* We've submitted the form and received a response from the server.
* One of the fields is invalid.
* a Backbone's `View` might:
  1. listen to changes in the `Model`,
  2. find the corresponding `<input>` in the DOM,
  3. update that `<input>` to reflect the invalid state.


* React will:
  1. call `render` on the entire 'Form' View given the new form data
  2. diff the view against its last state to figure out where to update the DOM

* **This is fast**.
* Give relevant data to components and they will re-render.


<pre style="font-size: 0.45em">
  <code>    var FormView = Backbone.View.extend({
      handleErrors: function(errors) {
        if (errors.length) {
          this.$el.addClass('error')
        }
      }
    })
  </code>
  <code>    var Form = React.createClass({
      propTypes: {
        errors: React.PropTypes.array
      },

      render: function() {
        var formClasses = '';

        if (this.props.errors.length) {
          formClasses += ' error';
        }

        return (
          React.createElement("div", {
            className: 'form' + formClasses
          })
        );
      }
    });
  </code>
</pre>

Note:
* Imagine traditional view-layer thing where we look at list-of-returned-errors and if it's empty list,
  addClass to an element on the page/in the view.
  in React's `render` method, we tell the UI to present itself differently given that condition.
  We no longer have to do the manual DOM manipulation



## Social Component: Composed of 'Social Icons'
[Demo](http://localhost:1337)


### Social Icons
* props: `className`, `location`, `iconType`, `service`
* render:
  * "put a `<div>` on the page with this `classList`."
  * "include the `<SVGInclude>` component."
  * if parent passes iconType, iconType changes.
<!-- show link to socialIcons.js, then reveal socialIcons.jsx -->


* when _anything_ changes, we re-render.
  some changes will result in a net-zero diff, so there's no work to be done.
* Compare to Backbone, where if you re-render, the whole subtree is injected back into the page,
  which requires DOM manipulation (which can be _slow_).


### Social Component
* Composed of Social Icons
  * these are built-up in `render` (assigned to `linkContent`)
  * `linkContent` is generated in a loop that iterates through
    `links` (e.g. facebook, instagram). `links`is passed as a prop (of type `array`)
* [social.jsx](link-to-social.jsx)


### Modifying Icon Type
[Demo](http://localhost:1337)
<!-- go back to demo, open settings dialog, change iconType, re-order, demo 'reset' -->


## What's happening here?
![React-Tower-Flow](./resources/2015-05-13/images/React-Tower-Flow.png)<!-- .element class="fragment" data-fragment-index="2" -->



## (Re)Flux: Uni-directional Dataflow

* Don't bubble events up: just send them to your application-level state storage
* Your top-level react component listens to your app-level state storage and re-renders everything when the store changes.
![Flux](./resources/2015-05-13/images/Flux.png)



## What has been awesome?

#### Unit Testing
* <!-- .element class="fragment" --> Easy to instantiate components in isolation
* <!-- .element class="fragment" --> Works with many test frameworks
* <!-- .element class="fragment" --> Great Testing Utils, Easy Event Simulation


#### Undo/Redo support was really easy
* <!-- .element class="fragment" --> Store the previous 'states' of the document
* <!-- .element class="fragment" --> Each undo/redo is just a re-render of previous document
* <!-- .element class="fragment" --> It's all just JSON, so storing just diffs is easy


#### Complete re-use of rendering components
* <!-- .element class="fragment" --> Editing -> Renders document with edit features
* <!-- .element class="fragment" --> Preview -> Renders document inside an iframe
* <!-- .element class="fragment" --> Publish -> Renders document as entire page



## What has been challenging?


#### Steep learning curve

![PropsState](./resources/2015-05-13/images/PropsState.jpg)<!-- .element style="text-align: center; width: 300px;" -->

* <!-- .element class="fragment" --> It took us a while to really feel like we were doing it right
* <!-- .element class="fragment" --> We're probably still not doing it right


#### It's brand new technology

![NewJS](./resources/2015-05-13/images/NewJS.png)<!-- .element style="text-align: center; width: 300px;" -->

* <!-- .element class="fragment" --> There are bugs, we've found some
* <!-- .element class="fragment" --> Documentation is evolving


#### Relinquishing control of the DOM - not always practical

* <!-- .element class="fragment" --> contenteditable + React = not buddies



# Questions?

<p class="fragment" data-fragment-index="1">
    <span style="height: 75px; display: inline-block;">Nate Mielnik</span>
    <img src="./resources/2015-05-13/images/Watchmen.png" style="height: 75px; vertical-align: middle;" />
</p>
<p class="fragment" data-fragment-index="1">
    <img src="./resources/2015-05-13/images/github.png" style="width: 75px; vertical-align: middle;" />
    <span style="height: 75px; display: inline-block;">nmielnik (nate@webs.com)</span>
</p>

<p class="fragment" data-fragment-index="2">
    <span style="height: 75px; display: inline-block;">Noah Chase</span>
    <img src="./resources/2015-05-13/images/Architects.png" style="width: 400px; vertical-align: middle;" />
</p>
<p class="fragment" data-fragment-index="2">
    <img src="./resources/2015-05-13/images/github.png" style="width: 75px; vertical-align: middle;" />
    <span style="height: 75px; display: inline-block;">nchase (nchase@webs.com)</span>
</p>

![Webs](./resources/2015-05-13/images/Webs.svg)
