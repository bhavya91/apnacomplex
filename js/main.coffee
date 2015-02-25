---
---
@scrollToFeatures = (e) ->
  e.preventDefault()
  $("html, body").animate
    scrollTop: $('#features').offset().top,
    500

$ ->
  $('a#explore').on "click", (e) ->
    scrollToFeatures(e)

  $('#features-nav-link').on "click", (e) ->
    scrollToFeatures(e)

  $('#features .feature a.read_more').on "click", (e) ->
    e.preventDefault()
    $('#sub-feature-modal').modal('show')