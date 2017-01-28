$(document).ready(function() {

  $(window).scroll(function() {
    var
      wScroll = $(window).scrollTop(),
      menu = $('.static .menu'),
      sidebar = $('.static .menu__wrapper '),
      stickyStart = sidebar.offset().top,
      menuClone = sidebar.clone(),
      fixedSidebar = $('.fixed .left__col');
      console.log(stickyStart)
    if (wScroll >= stickyStart) {

      if (!fixedSidebar.find('.menu__wrapper').length) {
        fixedSidebar.append(menuClone);
        menu.hide();
      }

    } else {
      fixedSidebar.find('.menu__wrapper').remove();
      menu.show();
    }

  });
});
