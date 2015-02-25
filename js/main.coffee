---
---
$ ->
  $('a#explore').on "click", (e) ->
    e.preventDefault()
    $("html, body").animate
      scrollTop: $('#features').offset().top,
      500

  $('#features .feature a.read_more').on "click", (e) ->
    e.preventDefault()
    $('#sub-feature-modal').modal('show')