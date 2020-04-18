var listName = 'list.json';
var audio = new Audio('music/1.mp3');
var tempA = 0;
var tempF = 0;
var tempS = 0;
var sug_hd =
	'<div class="mov-head" id="movt">Suggestions</div> <div class="mov-con" id="movc"> <a class="mov" mov-lang="ENG" mov-year="2020" onclick="redir()" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EZ6gLyvNILZNrRRUSSd6gl4BY1xJpqpbmhJItHtwnbeKXg?e=YjP6aF&download=1"> <img class="img" src="/img/moimg/25c.jpg" alt="Poster"> <p class="name">Onward</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EbK7lZL69C1IknEnvL58NtABhS380FTr6WLAO-a74sj4tA?e=OdTIVP&download=1" class="mov" mov-lang="ENG" mov-year="2020"> <img class="img" src="/img/moimg/24c.jpg" alt="Poster"> <p class="name">Sonic the Hedgehog</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EVBeMMi4KsJGqGPFqLDlY1wBVOhmh96_JRjYhjKbq3_Ubg?e=lcKRav&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/23c.jpg" alt="Poster"> <p class="name">Spies in Disguise</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ee2PTYjNY5VIrFr_6KS38WIBw6vFwyb7GCvhxLCuCaG4vg?e=W5SNmG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/22c.jpg" alt="Poster"> <p class="name">Frozen 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETJoqNgbLjFCmTYYWf5NuhcByWFnMvsSCF_08nTvkOp_xA?e=EJyvQG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/1c.jpg" alt="Poster"> <p class="name">How to train your dragon: The Hidden World</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EcaKfVG49FZGgPR32yp-QFsBChs3ZApyJ4hbCDbZiS9rGA?e=DAAmky&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/16c.jpg" alt="Poster"> <p class="name">Abominable</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EWJLv4zt6J5MlE9ZLXXDBCQBrbweTba0_SB5CZwhZdI_Dw?e=gpI9m5&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/13c.jpg" alt="Poster"> <p class="name">The Angry Birds Movie 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETz-GF7aibRPqa0ygCGcQncBKauI5IyXymvBW3UFjthRgQ?e=rRbD48&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/11c.jpg" alt="Poster"> <p class="name">The Lion King</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ea1Cmy1DouJGjAHhxfTu3k0B5RMhTD7EOaq4SaX2-l_tdg?e=o34ego&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/10c.jpg" alt="Poster"> <p class="name">Toy Story 4</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Eemx_8Xfs_hGqNZbEyDGzEYBCX1tC8Zq5c0tTl_C--GJjA?e=Gyl18L&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/9c.jpg" alt="Poster"> <p class="name">The Secret Life of Pets 2</p> </a></div>';

var player = videojs('videoPlayer', {
	fluid: true
});

function music() {
	if (tempA === 0) {
		audio.play();
		tempA = 1;
		document.getElementById('audio').style.backgroundColor = '#E53935';
		document.getElementById('audioi').setAttribute('src', 'img/audiow.png');
	} else {
		audio.pause();
		tempA = 0;
		document.getElementById('audio').style.backgroundColor = 'rgb(19, 19, 19)';
		document.getElementById('audioi').setAttribute('src', 'img/audio.png');
	}
}
function fhd() {
	if (tempF === 0) {
		tempF = 1;
		document.getElementById('fhd').style.backgroundColor = '#7CB342';
		document.getElementById('fhdi').setAttribute('src', 'img/fhdw.png');
		document.getElementById('sec3').innerHTML = '';
		listName = 'fhd.json';
	} else {
		tempF = 0;
		document.getElementById('fhd').style.backgroundColor = 'rgb(19, 19, 19)';
		document.getElementById('fhdi').setAttribute('src', 'img/fhd.png');
		document.getElementById('sec3').innerHTML = sug_hd;
		listName = 'list.json';
	}
}
function stream() {
	if (tempS === 0) {
		tempS = 1;
		document.getElementById('stream').style.backgroundColor = '#1E88E5';
		document.getElementById('streami').setAttribute('src', 'img/streamw.png');
		document.getElementById('sec3').innerHTML = '';
		listName = 'stream.json';
		document.getElementById('fhd').setAttribute('onclick', 'bla()');
		document.getElementById('fhd').style.backgroundColor = 'rgb(19, 19, 19)';
		document.getElementById('fhdi').setAttribute('src', 'img/fhd.png');
		tempF = 0;
	} else {
		tempS = 0;
		document.getElementById('stream').style.backgroundColor = 'rgb(19, 19, 19)';
		document.getElementById('streami').setAttribute('src', 'img/stream.png');
		document.getElementById('sec3').innerHTML = sug_hd;
		listName = 'list.json';
		document.getElementById('fhd').setAttribute('onclick', 'fhd()');
	}
}

$(document).ready(function() {
	$('#search').keyup(function() {
		var searchValue = $('#search').val().trim();
		if (searchValue != '') {
			$.getJSON(listName, function(result) {
				var list = result.list;
				var options = {
					shouldSort: !0,
					threshold: 0.6,
					location: 0,
					distance: 100,
					minMatchCharLength: 1,
					isCaseSensitive: !1,
					keys: [
						{
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
								' href=' +
								searchResult[i].play +
								"><img class='img' src=" +
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
			$('#movc').append(
				'<a class="mov" mov-lang="ENG" mov-year="2020" href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EZ6gLyvNILZNrRRUSSd6gl4BY1xJpqpbmhJItHtwnbeKXg?e=YjP6aF&download=1"> <img class="img" src="/img/moimg/25c.jpg" alt="Poster"> <p class="name">Onward</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EbK7lZL69C1IknEnvL58NtABhS380FTr6WLAO-a74sj4tA?e=OdTIVP&download=1" class="mov" mov-lang="ENG" mov-year="2020"> <img class="img" src="/img/moimg/24c.jpg" alt="Poster"> <p class="name">Sonic the Hedgehog</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EVBeMMi4KsJGqGPFqLDlY1wBVOhmh96_JRjYhjKbq3_Ubg?e=lcKRav&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/23c.jpg" alt="Poster"> <p class="name">Spies in Disguise</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ee2PTYjNY5VIrFr_6KS38WIBw6vFwyb7GCvhxLCuCaG4vg?e=W5SNmG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/22c.jpg" alt="Poster"> <p class="name">Frozen 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETJoqNgbLjFCmTYYWf5NuhcByWFnMvsSCF_08nTvkOp_xA?e=EJyvQG&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/1c.jpg" alt="Poster"> <p class="name">How to train your dragon: The Hidden World</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EcaKfVG49FZGgPR32yp-QFsBChs3ZApyJ4hbCDbZiS9rGA?e=DAAmky&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/16c.jpg" alt="Poster"> <p class="name">Abominable</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/EWJLv4zt6J5MlE9ZLXXDBCQBrbweTba0_SB5CZwhZdI_Dw?e=gpI9m5&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/13c.jpg" alt="Poster"> <p class="name">The Angry Birds Movie 2</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/ETz-GF7aibRPqa0ygCGcQncBKauI5IyXymvBW3UFjthRgQ?e=rRbD48&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/11c.jpg" alt="Poster"> <p class="name">The Lion King</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Ea1Cmy1DouJGjAHhxfTu3k0B5RMhTD7EOaq4SaX2-l_tdg?e=o34ego&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/10c.jpg" alt="Poster"> <p class="name">Toy Story 4</p> </a> <a href="https://jxjjxy-my.sharepoint.com/:u:/g/personal/dsznwgkc_m_mzr_me/Eemx_8Xfs_hGqNZbEyDGzEYBCX1tC8Zq5c0tTl_C--GJjA?e=Gyl18L&download=1" class="mov" mov-lang="ENG" mov-year="2019"> <img class="img" src="/img/moimg/9c.jpg" alt="Poster"> <p class="name">The Secret Life of Pets 2</p> </a>'
			);
		}
	});
});
