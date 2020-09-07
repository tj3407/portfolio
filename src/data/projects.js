import project1 from "../img/project1.jpg"
import project2 from "../img/project2.jpg"
import project3 from "../img/project3.jpg"
import project4 from "../img/project4.jpg"
import project5 from "../img/project5.png"
import project6 from "../img/project6.gif"
import project7 from "../img/project7.gif"
import project8 from "../img/project8.gif"

export const mainProject = {
    title: "PPEGiveBack.org",
    subheading: "React, Firebase, Material UI",
    description: "Devpost COVID19 Global Hackathon submission - sole developer. A platform for people and organization to donate personal protective equipment to essential workers. Serverless application using Firebase.",
    img: project5,
    href: "http://ppegiveback.org",
    button: "Demo"
}

export const projects = [
    {
        title: "Okta Integration with Create-React-App",
        description: "Integrating Okta library for login and registration in a create-react-app project and using Okta's SecuredRoute component to manage visibility of pages based on authentication status.",
        img: project6,
        href: "http://whosnapit.netlify.app/",
        button: "Try It",
    },
    {
        title: "Registration Form",
        description: "Responsive registration form with validation on submission. Designed to be scalable using reusable components.",
        img: project7,
        href: "http://whosnapit.com/registration-page-react/",
        button: "Try It",
    },
    {
        title: "Category Pages",
        description: "Simple react app with redux. Changes contents based on authentication state on redux store.",
        img: project8,
        href: "http://whosnapit.com/category-page-react/",
        button: "Try It",
    },
    {
        title: "Chat Room App",
        description: "Pure front-end chat/messaging app created using React and Material UI for styling. Data retrieved from local file and implemented simple auto reply with every new message submission.",
        img: project4,
        href: "http://whosnapit.com/chat-room-app",
        button: "Try It",
    },
    {
        title: "NFL App - React, Gatsby, Material-UI, My Sports Feed API",
        description: "React application created using Gatsby and utilizing My Sports Feed api and Material-UI for styling.",
        img: project1,
        href: "http://whosnapit.com/NFL-Fantasy-Football/",
        button: "Try It",
    },
    {
        title: "Simple eCommerce Page with Shopping Cart - vanilla JavaScript, jQuery, Bootstrap",
        description: "Simple eCommerce page with shopping cart where product information is loaded from a local json file. An option to choose between localStorage or sessionStorage to store products that have been added to cart to test persistency between browser tabs.",
        img: project3,
        href: "http://whosnapit.com/ws-product-cards/",
        button: "Try It",
    },
    {
        title: "MLB Stats App - Angular 5, Bootstrap, My Sports Feed API",
        description: "MLB stats application created using Angular 5, My Sports Feed api for data and Bootstrap for styling.",
        img: project2,
        href: "http://tj-mlb-demo.herokuapp.com/",
        button: "Try It",
    }
]