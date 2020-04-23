var listName = 'list.json';
var tempA = 0;
var tempF = 0;
var tempS = 0;
var quot = '';

function search_now() {
      window.scrollTo(0, 0);
}

// function searchf() {
//       document.querySelector('#search-jump').style.top = '0';
//       document.querySelector('#prompt').style.display = 'none';
// }

// function searchr() {
//       document.querySelector('#search-jump').style.top = 'auto';
//       document.querySelector('#prompt').style.display = 'block';
// }

var sug_hd =
      '<a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EXkJfQunJxNIqJpbmJvIyCUBePmQOs7ZwKZ0vRQcdpZ2DQ?e=JlOv0u&download=1"> <img class="img" src="/img/moimg/90c.jpg" alt="Poster"> <p class="name">Trolls World Tour</p> </a> <a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EZ6gLyvNILZNrRRUSSd6gl4BY1xJpqpbmhJItHtwnbeKXg?e=YjP6aF&download=1"> <img class="img" src="/img/moimg/25c.jpg" alt="Poster"> <p class="name">Onward</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EbK7lZL69C1IknEnvL58NtABhS380FTr6WLAO-a74sj4tA?e=OdTIVP&download=1" class="mov" mov-lang="ENG" mov-year="2020"> <img class="img" src="/img/moimg/24c.jpg" alt="Poster"> <p class="name">Sonic the Hedgehog</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EVBeMMi4KsJGqGPFqLDlY1wBVOhmh96_JRjYhjKbq3_Ubg?e=lcKRav&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/23c.jpg" alt="Poster"> <p class="name">Spies in Disguise</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ee2PTYjNY5VIrFr_6KS38WIBw6vFwyb7GCvhxLCuCaG4vg?e=W5SNmG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/22c.jpg" alt="Poster"> <p class="name">Frozen 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETJoqNgbLjFCmTYYWf5NuhcByWFnMvsSCF_08nTvkOp_xA?e=EJyvQG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/1c.jpg" alt="Poster"> <p class="name">How to train your dragon: The Hidden World</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EcaKfVG49FZGgPR32yp-QFsBChs3ZApyJ4hbCDbZiS9rGA?e=DAAmky&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/16c.jpg" alt="Poster"> <p class="name">Abominable</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EWJLv4zt6J5MlE9ZLXXDBCQBrbweTba0_SB5CZwhZdI_Dw?e=gpI9m5&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/13c.jpg" alt="Poster"> <p class="name">The Angry Birds Movie 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETz-GF7aibRPqa0ygCGcQncBKauI5IyXymvBW3UFjthRgQ?e=rRbD48&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/11c.jpg" alt="Poster"> <p class="name">The Lion King</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ea1Cmy1DouJGjAHhxfTu3k0B5RMhTD7EOaq4SaX2-l_tdg?e=o34ego&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/10c.jpg" alt="Poster"> <p class="name">Toy Story 4</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Eemx_8Xfs_hGqNZbEyDGzEYBCX1tC8Zq5c0tTl_C--GJjA?e=Gyl18L&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/9c.jpg" alt="Poster"> <p class="name">The Secret Life of Pets 2</p> </a';

var sug_fhd;

var sug_stream =
      '<a class="mov" mov-lang="ENG" mov-year="2020" href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EXkJfQunJxNIqJpbmJvIyCUBePmQOs7ZwKZ0vRQcdpZ2DQ?e=JlOv0u&download=1"> <img class="img" src="/img/moimg/90c.jpg" alt="Poster"> <p class="name">Trolls World Tour</p> </a> <a class="mov" mov-lang="ENG" mov-year="2020" href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EZ6gLyvNILZNrRRUSSd6gl4BY1xJpqpbmhJItHtwnbeKXg?e=YjP6aF&download=1"> <img class="img" src="/img/moimg/25c.jpg" alt="Poster"> <p class="name">Onward</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EbK7lZL69C1IknEnvL58NtABhS380FTr6WLAO-a74sj4tA?e=OdTIVP&download=1" class="mov" mov-lang="ENG" mov-year="2020"> <img class="img" src="/img/moimg/24c.jpg" alt="Poster"> <p class="name">Sonic the Hedgehog</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EVBeMMi4KsJGqGPFqLDlY1wBVOhmh96_JRjYhjKbq3_Ubg?e=lcKRav&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/23c.jpg" alt="Poster"> <p class="name">Spies in Disguise</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ee2PTYjNY5VIrFr_6KS38WIBw6vFwyb7GCvhxLCuCaG4vg?e=W5SNmG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/22c.jpg" alt="Poster"> <p class="name">Frozen 2</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETJoqNgbLjFCmTYYWf5NuhcByWFnMvsSCF_08nTvkOp_xA?e=EJyvQG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/1c.jpg" alt="Poster"> <p class="name">How to train your dragon: The Hidden World</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EcaKfVG49FZGgPR32yp-QFsBChs3ZApyJ4hbCDbZiS9rGA?e=DAAmky&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/16c.jpg" alt="Poster"> <p class="name">Abominable</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EWJLv4zt6J5MlE9ZLXXDBCQBrbweTba0_SB5CZwhZdI_Dw?e=gpI9m5&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/13c.jpg" alt="Poster"> <p class="name">The Angry Birds Movie 2</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETz-GF7aibRPqa0ygCGcQncBKauI5IyXymvBW3UFjthRgQ?e=rRbD48&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/11c.jpg" alt="Poster"> <p class="name">The Lion King</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ea1Cmy1DouJGjAHhxfTu3k0B5RMhTD7EOaq4SaX2-l_tdg?e=o34ego&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/10c.jpg" alt="Poster"> <p class="name">Toy Story 4</p> </a> <a href="https://mostream.github.io/?s=~https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Eemx_8Xfs_hGqNZbEyDGzEYBCX1tC8Zq5c0tTl_C--GJjA?e=Gyl18L&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/9c.jpg" alt="Poster"> <p class="name">The Secret Life of Pets 2</p> </a>';

var sug_streamfhd;

var brac = '';
var sug_var =
      '<a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EXkJfQunJxNIqJpbmJvIyCUBePmQOs7ZwKZ0vRQcdpZ2DQ?e=JlOv0u&download=1"> <img class="img" src="/img/moimg/90c.jpg" alt="Poster"> <p class="name">Trolls World Tour</p> </a> <a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EZ6gLyvNILZNrRRUSSd6gl4BY1xJpqpbmhJItHtwnbeKXg?e=YjP6aF&download=1"> <img class="img" src="/img/moimg/25c.jpg" alt="Poster"> <p class="name">Onward</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EbK7lZL69C1IknEnvL58NtABhS380FTr6WLAO-a74sj4tA?e=OdTIVP&download=1" class="mov" mov-lang="ENG" mov-year="2020"> <img class="img" src="/img/moimg/24c.jpg" alt="Poster"> <p class="name">Sonic the Hedgehog</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EVBeMMi4KsJGqGPFqLDlY1wBVOhmh96_JRjYhjKbq3_Ubg?e=lcKRav&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/23c.jpg" alt="Poster"> <p class="name">Spies in Disguise</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ee2PTYjNY5VIrFr_6KS38WIBw6vFwyb7GCvhxLCuCaG4vg?e=W5SNmG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/22c.jpg" alt="Poster"> <p class="name">Frozen 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETJoqNgbLjFCmTYYWf5NuhcByWFnMvsSCF_08nTvkOp_xA?e=EJyvQG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/1c.jpg" alt="Poster"> <p class="name">How to train your dragon: The Hidden World</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EcaKfVG49FZGgPR32yp-QFsBChs3ZApyJ4hbCDbZiS9rGA?e=DAAmky&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/16c.jpg" alt="Poster"> <p class="name">Abominable</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EWJLv4zt6J5MlE9ZLXXDBCQBrbweTba0_SB5CZwhZdI_Dw?e=gpI9m5&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/13c.jpg" alt="Poster"> <p class="name">The Angry Birds Movie 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETz-GF7aibRPqa0ygCGcQncBKauI5IyXymvBW3UFjthRgQ?e=rRbD48&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/11c.jpg" alt="Poster"> <p class="name">The Lion King</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ea1Cmy1DouJGjAHhxfTu3k0B5RMhTD7EOaq4SaX2-l_tdg?e=o34ego&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/10c.jpg" alt="Poster"> <p class="name">Toy Story 4</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Eemx_8Xfs_hGqNZbEyDGzEYBCX1tC8Zq5c0tTl_C--GJjA?e=Gyl18L&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/9c.jpg" alt="Poster"> <p class="name">The Secret Life of Pets 2</p> </a';

//
//
//
//
//
//
//
//
//
//

function music() {
      if (tempA === 0) {
            tempA = 1;
            document.getElementById('audio').style.backgroundColor = '#E53935';
            document.getElementById('audioi').setAttribute('src', 'img/audiow.png');
            document.querySelector('#prompt').style.display = 'none';
            document.querySelector('.prem').style.display = 'grid';
      } else {
            tempA = 0;
            document.getElementById('audio').style.backgroundColor = 'rgb(19, 19, 19)';
            document.getElementById('audioi').setAttribute('src', 'img/audio.png');
            document.querySelector('#prompt').style.display = 'block';
            document.querySelector('.prem').style.display = 'none';
      }
}

function fhd() {
      if (tempF === 0) {
            tempF = 1;
            document.getElementById('fhd').style.backgroundColor = '#7CB342';
            document.getElementById('fhdi').setAttribute('src', 'img/fhdw.png');

            if (tempS === 1) {
                  document.getElementById('prompt').innerHTML = 'FHD | Stream';
                  document.getElementById('movc').innerHTML = sug_streamfhd;
                  sug_var = sug_streamfhd;
                  brac = '';
                  listName = 'fhd.json';
            } else {
                  document.getElementById('prompt').innerHTML = 'FHD | Download';
                  document.getElementById('movc').innerHTML = sug_fhd;
                  sug_var = sug_fhd;
                  listName = 'fhd.json';
            }
      } else {
            tempF = 0;
            document.getElementById('fhd').style.backgroundColor = 'rgb(19, 19, 19)';
            document.getElementById('fhdi').setAttribute('src', 'img/fhd.png');

            if (tempS === 1) {
                  document.getElementById('prompt').innerHTML = 'HD | Stream';
                  document.getElementById('movc').innerHTML = sug_stream;
                  sug_var = sug_stream;
                  brac = 'https://mostream.github.io/?s=~';
                  listName = 'list.json';
            } else {
                  document.getElementById('prompt').innerHTML = 'HD | Download';
                  document.getElementById('movc').innerHTML = sug_hd;
                  sug_var = sug_hd;
                  listName = 'list.json';
            }
      }
}

function stream() {
      if (tempS === 0) {
            tempS = 1;
            document.getElementById('stream').style.backgroundColor = '#1E88E5';
            document.getElementById('streami').setAttribute('src', 'img/streamw.png');

            if (tempF === 1) {
                  document.getElementById('prompt').innerHTML = 'FHD | Stream';
                  document.getElementById('movc').innerHTML = sug_streamfhd;
                  sug_var = sug_streamfhd;
                  brac = 'https://mostream.github.io/?s=~';
                  listName = 'fhd.json';
            } else {
                  document.getElementById('prompt').innerHTML = 'HD | Stream';
                  document.getElementById('movc').innerHTML = sug_stream;
                  sug_var = sug_stream;
                  brac = 'https://mostream.github.io/?s=~';
                  listName = 'list.json';
            }
      } else {
            tempS = 0;
            document.getElementById('stream').style.backgroundColor = 'rgb(19, 19, 19)';
            document.getElementById('streami').setAttribute('src', 'img/stream.png');

            if (tempF === 1) {
                  document.getElementById('prompt').innerHTML = 'FHD | Download';
                  document.getElementById('movc').innerHTML = sug_fhd;
                  sug_var = sug_fhd;
                  listName = 'fhd.json';
            } else {
                  document.getElementById('prompt').innerHTML = 'HD | Download';
                  document.getElementById('movc').innerHTML = sug_hd;
                  sug_var = sug_hd;
                  listName = 'list.json';
            }
      }
}


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
                              $('#movc').empty();
                              $('#movt').empty();
                              $('#movt').append('Search Results');
                              for (i = 0; i < searchResult.length; i++) {
                                    $('#movc').append(
                                          "<a class='mov' mov-lang=" +
                                          searchResult[i].lang +
                                          ' mov-year=' +
                                          searchResult[i].year +
                                          ' href=' + quot +
                                          brac +
                                          searchResult[i].play +
                                          quot + " ><img class='img' src=" +
                                          searchResult[i].img +
                                          "alt='Movie Poster'><p class='name'>" +
                                          searchResult[i].name +
                                          '</p></a>'
                                    );
                              }
                        } else {
                              $('#movc').empty();
                              $('#movt').empty();
                              $('#movt').append('No Results Found');
                        }
                  });
            } else {
                  $('#movc').empty();
                  $('#movt').empty();
                  $('#movt').append('Suggestions');
                  $('#movc').append(sug_var);
            }
      });
});