function show(fragment){
    // Show only one
    a_element = document.querySelector(`div.chapter a[id=${fragment}]`);
    console.log(a_element);
    parent_element = a_element.parentNode.parentNode;
    // console.log(parent_element);
    parent_element.style.display = "block";
    // console.log(parent_element);
    // console.log("FRAGMENTTTTTT"  + fragment);

    let sibling_element = false;
    console.log(fragment)
    if ((fragment.startsWith("book")) || (["link2H_4_0001", "link2H_4_0008", "link2H_4_0033"].includes(fragment))){
        // Get the first chapter of the book
        sibling_element = parent_element.nextSibling.nextSibling; 
        // console.log("*********", sibling_element);
        sibling_element.style.display = "block";
        console.log("YEPPP!!!!");
        // console.log("***********", sibling_element);

    }

    // Hide the rest
    other_elements = document.querySelectorAll(`div.chapter a`)
    console.log(other_elements);
    for (var i = 0; i < other_elements.length; i++){
        if ((a_element !== other_elements[i]) && (sibling_element !== other_elements[i].parentNode.parentNode) && (a_element.parentNode.parentNode !== other_elements[i].parentNode.parentNode)) {
            //  console.log(a_element, other_elements[i].parentNode.parentNode);
             other_parent_element = other_elements[i].parentNode.parentNode;
             other_parent_element.style.display = "none";
        } 
        // else {
        //     console.log(a_element, other_elements[i]);
        //     other_parent_element.style.display = "block";
        // }
       
    }

    // other_parent_elements = other_elements.parentNode.parentNode;
    // other_parent_elements.style.display = "none";


}

function getLink(event){
    element = event.target;
    
    // Traverse
    while (element.tagName !== 'A'){
        element = element.parentNode;
    }
    // console.log(element.href);

    // console.log(event.target.href);
    // console.log(event.srcElement.attributes.href);
    // link = event.srcElement.attributes.href.textContent;
    link = element.href;
    
    // console.log(link);
    const split_link = link.split("#");
    // console.log(split_link[1]);     
    show(split_link[1]);
}


function replaceLinks(){

var elems = document.querySelectorAll('td > a, p[class="toc"] > a');
// var elems = document.querySelectorAll('td > a, div[class="toc"] > ol > li > a');
// var elems = document.querySelectorAll('div[class="toc"] > ol > li > a')
console.log(elems);
// elems = elems.concat(other_elems);
// console.log(elems);

for (var i = 0; i < elems.length; i++) {
    // elems[i].href = "https://google.ca"
    link = elems[i].href;
    const split_link = link.split("#");
    elems[i].href = location.pathname + '#' + split_link[1];
    elems[i].setAttribute("onclick", "getLink(event)");
}

console.log(elems);
    
}

replaceLinks();