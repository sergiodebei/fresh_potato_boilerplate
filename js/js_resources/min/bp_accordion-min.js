$(document).ready(function(){function e(){$(".accordion-section-title").removeClass("active"),$(".accordion-section-content").slideUp(300).removeClass("open")}$(".accordion").length&&$(".accordion-section-title").click(function(t){var c=$(this).attr("href");$(t.target).is(".active")?e():(e(),$(this).addClass("active"),$(".accordion "+c).slideDown(300).addClass("open")),t.preventDefault()})});