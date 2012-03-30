/**
 * A simple Safari Extension which enables `autocomplete` on all form elements.
 * This is especially useful for banking websites.
 *
 * Obviously only use this extension if you know your computer is otherwise secure.
 *
 * I'm not responsible for any harm this code/extension may cause.
 *
 * @author  Robert Dougan <rdougan@me.com> (http://robertdougan.com/)
 */

var oldLoad = window.onload;
window.onload = function() {
    var forms = document.querySelectorAll('form'),
        ln = forms.length,
        i, form;

    for (i = 0; i < ln; i++) {
        form = forms[i];
        form.setAttribute('autocomplete', 'on');
    }

    if (oldLoad) {
        oldLoad();
    }
};
