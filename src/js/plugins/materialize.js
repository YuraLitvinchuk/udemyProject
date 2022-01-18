import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//init Select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem);
}

//init Autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
    data: {
        Apple: null,
        Microsoft: null,
        Google: 'https://placehold.it/250x250'
      },
});

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem);
}

//init Datepicker
const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
    showClearBtn: true,
    format: 'yyyy-mm'
});

export function getDatepickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}

//init Dropdown
const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown);

export function getFavouriteTicket(elem){
    return M.Dropdown.init(elem);
}