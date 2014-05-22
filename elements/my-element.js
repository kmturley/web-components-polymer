/**
 * My element
 * Example using Polymer components
 */

Polymer('my-element', {
    color: "red",
    owner: "Daniel",
    setFocus: function() {
        this.$.nameInput.focus();
    }
});