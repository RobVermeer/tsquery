const tsQuery = null

tsQuery('.header h1')
  .text('TicketSwap')
  .parent()
  .find('p')
  .text('Best way to buy and sell tickets')
  .parent()
  .css('background-color', '#00b6f0')

tsQuery('.navbar')
  .find('a')
  .removeClass('right')
  .first()
  .addClass('active')
  .parent()
  .find('a')
  .last()
  .addClass('right')

tsQuery('.navbar a').on('click', event => {
  event.preventDefault()

  if (tsQuery(event.target).hasClass('right')) {
    alert('You are awesome')
  } else {
    alert('You are awesome!')
  }
})

tsQuery(window).scroll(event => {
  tsQuery('.navbar a')
    .eq(1)
    .toggleClass('active', window.pageYOffset > 400)
})
