new autoComplete({
    data: {                              // Data src [Array, Function, Async] 
      src: films,
    },
    selector: "#autoComplete",           // Input field selector              
    threshold: 0,                        // Min. Chars length-->start engine as soon as the user types 
    searchEngine: "strict",              // Search Engine mode         
    resultsList: {                       // Rendered results list object      
        render: true,
        container: source => {
            source.setAttribute("id", "food_list");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 5,                         // Max. number of rendered results to show up while searching
    highlight: true,                       // Highlight matching results in search    
    resultItem: {                          // Rendered result item           
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {                     // Script for noResults     
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: feedback => {             // Script for Selection event
        document.getElementById('autoComplete').value = feedback.selection.value;
    }
});
