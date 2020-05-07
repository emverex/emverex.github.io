// Variables

var listName = 'list.json';
var seqNo = 14;
var m = 0;
var listLen = (Object.keys(movie).length - 1);



// Initial Calls

movlist();

// Security

document.addEventListener('contextmenu', event => event.preventDefault());


// Main Border Radius Change on Scroll

// function changemain() {
//       var navElement = document.querySelector(".main");
//       var navmElement = document.querySelector(".control");
//       this.scrollY > 70 ? navElement.style.borderTopLeftRadius = '0px' : navElement.style.borderTopLeftRadius = '30px';
//       this.scrollY > 70 ? navElement.style.borderTopRightRadius = '0px' : navElement.style.borderTopRightRadius = '30px';
//       this.scrollY > 70 ? navmElement.style.borderTopLeftRadius = '0px' : navmElement.style.borderTopLeftRadius = '30px';
//       this.scrollY > 70 ? navmElement.style.borderTopRightRadius = '0px' : navmElement.style.borderTopRightRadius = '30px';
//       this.scrollY > 70 ? navmElement.style.boxShadow = '0px 5px 50px grey' : navmElement.style.boxShadow = 'none';
// }
// window.addEventListener("scroll", changemain, false);


// Movie Listing Functionality

function movlist() {

      for (var x in movie) {
            if (m < seqNo) {
                  document.querySelector('#movie-list').innerHTML += '<div class="mov-item"> <div class="flip-front"> <img class="item-img" src=' + movie[m].img + ' alt=""> </div> <div class="flip-back"> <a class="download" onclick="ddown(&#39;' + movie[m].play + '&#39;)">download</a> <div class="play" onclick="play(&#39;' + movie[m].play + '&#39;)">watch online</div> <a class="trailer" href="' + movie[m].trailer + '">watch trailer</a> </div> </div>';
                  m = m + 1;
            }
            if (m == (seqNo - 1)) {
                  seqNo = seqNo + 14;
                  break;
            }
            if (m == listLen) {
                  break;
            }
      }
}


// Streaming and Downloading

function play(plink) {
      document.querySelector('#pstream').style.display = 'flex';
      console.log(plink + '&m=streamnow');
}

function ddown(dlink) {
      console.log(dlink + '&f=directdown');
}



// Checks if scrolled near to bottom

$(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 900) {
            movlist();
      }
});





// Movie and Search List Automatic Switching

function searchnow() {
      window.scrollTo(0, 200);
      if (document.querySelector('#search').value == '') {
            document.querySelector('#mov-container').style.display = 'none';
            document.querySelector('#movie-list').style.display = 'grid';
      } else {
            document.querySelector('#mov-container').style.display = 'grid';
            document.querySelector('#movie-list').style.display = 'none';
      }
      if (document.querySelector('#search').value.includes('   ') == true) {
            document.querySelector('#search').value = '';
            document.querySelector('#movie-list').style.display = 'grid';
            document.querySelector('#mov-container').style.display = 'none';
      }
}



// Search Functionality

$(document).ready(function () {
      $('#search').keyup(function () {
            var searchValue = $('#search').val().trim();
            if (searchValue != '') {
                  $.getJSON(listName, function (result) {
                        var list = result.list;
                        var options = {
                              shouldSort: !0,
                              threshold: 0.6,
                              location: 0,
                              distance: 100,
                              minMatchCharLength: 1,
                              isCaseSensitive: !1,
                              keys: [{
                                          name: 'name',
                                          weight: 0.7
                                    },
                                    {
                                          name: 'year',
                                          weight: 0.3
                                    }
                              ]
                        };
                        var fuse = new Fuse(list, options);
                        var searchResult = fuse.search(searchValue);
                        if (searchResult.length > 0) {
                              $('#mov-container').empty();
                              for (i = 0; i < searchResult.length; i++) {
                                    $('#mov-container').append('<div class="mov-item"> <div class="flip-front"> <img class="item-img" src=' + searchResult[i].img + ' alt=""> </div> <div class="flip-back"> <a class="download" href="' + searchResult[i].play + '">download</a> <div class="play" onclick="play(' + searchResult[i].play + ')">watch online</div> <a class="trailer" href="' + searchResult[i].trailer + '">watch trailer</a> </div> </div>');
                              }
                        } else {
                              $('#mov-container').empty();
                              $('#movt').append('No Results Found');
                        }
                  });
            }
      });
});