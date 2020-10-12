$(function(){ //equal window.onload = function(){} or document.onload = function(){}, and it can be to write also like $(document).ready(function(){});
    const elementHtml = $("html");
    const elementsRadioBackground = $(`input[type="radio"][name="background-color"]`);
    const elementInputWriteSomething = $(`input#write`);
    const elementPrincipalTitle = $(`<h1>`);
    const elementContainerPrincipalTitle = $(`[data-container-principal-title]`);

    elementsRadioBackground.change(function(){
        elementHtml.css("background-color", this.value);
    });

    elementInputWriteSomething.on("input", function(){
        elementPrincipalTitle.text(this.value);
        !elementContainerPrincipalTitle.find("h1").length ? elementContainerPrincipalTitle.append(elementPrincipalTitle) : null;
    });

    console.log("------------------------------------------------------------------------------------------------------");

    const elementButtonThreeAlerts = $(`[data-button-three-alerts]`);
    const elementButtonCancelHelloAlert = $(`[data-button-cancel-hello-alert]`);
    const elementButtonCancelAllAlerts = $(`[data-button-cancel-all-alerts]`);
    const sayHello = () => alert("hello");

    elementButtonThreeAlerts.click(() => alert("hi"));
    elementButtonThreeAlerts.on("click", () => alert("hey"));
    elementButtonThreeAlerts.click(sayHello);

    elementButtonCancelHelloAlert.click(() => elementButtonThreeAlerts.off("click", sayHello));
    elementButtonCancelAllAlerts.click(() => elementButtonThreeAlerts.off("click"));

    elementButtonThreeAlerts.triggerHandler("click"); //simulate click event
});