if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function sayHello() {
    const Button = document.createElement("button")

    Button.innerText = 'Can you click me'

    Button.addEventListener('click', () => {alert ('hell yeah')})
}