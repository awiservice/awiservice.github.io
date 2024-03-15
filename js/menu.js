/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId, containerId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          container = document.getElementById(containerId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')

        // Add active to show and hide the menu icon
        container.classList.toggle('active')
    })
 }
 
 showMenu('nav-toggle','nav-menu','container')
