# Web Components

Using Polymer to create reusable web modules.

## Running the project locally

* Install Bower and then install the project dependancies

        npm install -g bower
        bower install
        
* Compile an element together

        npm install -g vulcanize
        vulcanize elements/my-element.html -o elements-compiled/my-element.html --inline --strip