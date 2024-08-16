const $gifArea = $("#gif-area");
const $searchInput = $("#search");

// to show gif image
function addGif(result) {
  // count number of gifs with api response and store it
  let numRes = result.data.length;
  if (numRes) {
    // if any gifs in response
    let idx = Math.floor(Math.random() * numRes); // select a random index
    let $newColumn = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: result.data[idx].images.original.url,
      class: "w-100",
    });
    $newColumn.append($newGif); //append newly created image to div element
    $gifArea.append($newColumn); // append the div to gifArea element adding to the page
  }
}

/*
When the user submits the form, use axios to make a request to GIPHY for information based on that term. After receiving the response, console.log the response data to make sure you’re getting back what you expect.
*/
$("form").on("submit", async function (event) {
  event.preventDefault();
  // retrieve input value and store it in searchTerm
  let searchTerm = $searchInput.val();
  // then clear input field by setting it empty string
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);

  //addGif(response.data);
});

$("#remove").on("click", function () {
  $gifArea.empty();
});
