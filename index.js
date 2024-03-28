
const appDomElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement('button', null, 'Me gusta')

root.render(button)

const appDomELement2 = document.getElementById('app2')
const root2 = ReactDOM.createRoot(appDomELement2)

root2.render("hola")