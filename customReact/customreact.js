// This file is for creating link between our code for UI & display-site (index.html)
// Here , we will try to code our own render function (customrender) & will code UI using react element instead of JSX


// For creating link
// Step 1: get the div => root of display-site in which whole JSX code will be injected ( after its conversion in JS)

const main_container = document.querySelector('#root')

// Step2 (a) : make connection bw React & REAL DOM's element (root) using ReactDOM.createroot(accepts an element of REAL DOM)
// If we have written JSX code 
//const connection = ReactDOM.createroot(main_container)

// Step2 (b) : => If instead of JSX, we code UI as react elements (that is what we get when
//  Bable convert JSX into react element using React.createElement which looks like below one )

// React elements are simply JS objects with keys : type , props => itself obj
// type = what tag/component we want to display => h1 / div / p / a etc.
// props = all attributes/props of the element < p class =..., id = ... >
// children = what’s inside the element. <p> Written Here </p>

const reactEle = {
    type: 'h1',
    props: {
        className : 'Heading1',
        id : 'Main Heading on page',
        children : 'Creating First React Element'
    }
}

// Step3 (a): Render => upload the JSX code onto the display-site
// main_container.render(name of file in which we have written our JSX code )

// Step#3 (b): We will create our own render function that will take what_to_render (coded UI) 
// & where_to_render (REAL DOM's div => root) and boom ---> Our coded UI ( coded as React Element)
// will be injected on display-site and will be visible on browser

/*function customRender (what_to_render, where_to_render) {
    // Step1: Make available the whole code of UI
    const domEle = document.createElement(what_to_render.type) // we are telling our customRender fun what to insert in main_container as DOM element  
    domEle.innerHTML = what_to_render.props.children
    domEle.setAttribute('class',what_to_render.props.className)
    domEle.setAttribute('id',what_to_render.props.id)

    // Step2: Load this code into where_to_render (uisng .renderChild() func)
    where_to_render.appendChild(domEle)
}*/

// calling our customRender function , to render the code onto display-site
// customRender(reactEle, main_container)
// _______________________________________________________________________________________________

// modifying customRender func so that it can automatically take all props of react element using a loop
// so there would be no need to add each attribute mannualy 

function customRender (what_to_render, where_to_render) {
    // Step1: Make available the whole code of UI
    const domEle = document.createElement(what_to_render.type) // we are telling our customRender fun what to insert in main_container as DOM element  
    domEle.innerHTML = what_to_render.props.children

    for (const each in what_to_render.props){
        if (each === "children") continue; // as we have 
        domEle.setAttribute(each, what_to_render.props[each])
    }

    // Step2: Load this code into where_to_render (uisng .renderChild() func)
    where_to_render.appendChild(domEle)
}
customRender(reactEle, main_container)