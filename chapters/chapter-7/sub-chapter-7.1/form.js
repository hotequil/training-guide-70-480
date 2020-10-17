const form = document.querySelector('#form');

form.onsubmit = function(event){
    const currentTarget = event.target || this || form;


    const formSerialized = $(currentTarget).serialize();
    const dataDecoded = decodeURIComponent(formSerialized);

    console.log(formSerialized);
    console.log(dataDecoded);
};
