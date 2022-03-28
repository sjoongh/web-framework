// main.js
import bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import { Alert, Collapse } from "bootstrap";
// import * as bootstrap from "./bootstrap";

const emailInputEl = document.querySelector('#exampleInputEmail1');
const modalEl = document.querySelector('#exampleModal');

// modalEl.addEventListener('shown.bs.modal', function() {
//     emailInputEl.foucs();
// }) 

modalEl.addEventListener('shown.bs.modal', function() {
    emailInputEl.foucs();
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})