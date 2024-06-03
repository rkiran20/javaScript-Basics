Interacting With DOM
- One of the best think of using framework like react is that we don't have to fuss with DOM directly
- We tell react how DOM looks like and react takes care by modifying/moving/creating/deleting the DOM nodes for us
- we will see how these operations are done

1)  Selecting Nodes
    -   if we want to grab reference to an element that already exists on the page we do this with querySelector method
        - const body = document.querySelector("body") // this is for grabbing the <body> tag
        - const header = document.querySelector("#header") //this is for grabbing the header
        - const firstLink = header.querySelector("a") // this is for grabbing the first a tag in the header
        - if we want to grab all the links then wwe can use header.querySelectorAll().

Now once we capture the reference to a DOM node, we can do bunch of stuff with it.

2)  Editing nodes
    - let's imagine that we have a list of users in our html, if the user is online we get a greeen dot in the front
    the html looks like this
    <ul>
    <li id="user-andrew" class="offline">
    Andrew
    <li>
    <li id="user-beatrice" class="offline">
    Beatrice
    <li>
    <li id="user-chen" class="online">
    Chen
    <li>
    </ul>

    now if we want to change Andrew to online then we will do like this
    const node = document.querySelector('#user-andrew');
    node.setAttribute('class','online');
    // if we want to change the inner html to andrew(onlne) 
    node.innerText= 'Andrew(online)';

3) Creating and Appending nodes
    - Let's finally talk about creating Brand New nodes from scratch
      we do this by using document.createElement
       const child = document.createElement("div") // a div is creted
       child.createAttribute("style","color:red") // this creates style with color:red
       child.innerHtml("this is the new child) // this is the inner HTML
    - Now this is created in the air but we didn't attach this to any thing
        const body = document.querySelector("body")
        body.appendChild(child);
        // this creates the <div> in the body