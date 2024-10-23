// <!-- JavaScript for Menu Toggle -->

        // const navmenu = document.getElementById('nav-menu'); // The mobile menu container
        // const navlinks = document.querySelectorAll('.nav-link'); // All navigation links
        // const menu = document.getElementById("hamburger"); // The menu button (hamburger)
        // const closeIcon = document.getElementById("close"); // The close icon

        // // Toggle the menu when the hamburger icon is clicked
        // menu.addEventListener("click", () => {
        //     navmenu.classList.toggle("left-0"); // Show/hide menu
        //     navmenu.classList.toggle("left-[-100%]"); // Move out menu when clicked again
        //     menu.classList.toggle("hidden"); // Hide hamburger when clicked
        //     closeIcon.classList.toggle("hidden"); // Show close icon
        // });

        // // Toggle the close icon when clicked
        // closeIcon.addEventListener("click", () => {
        //     navmenu.classList.toggle("left-0"); // Hide menu
        //     navmenu.classList.toggle("left-[-100%]"); // Move out menu
        //     menu.classList.toggle("hidden"); // Show hamburger
        //     closeIcon.classList.toggle("hidden"); // Hide close icon
        // });

        // // Close the menu when any nav-link is clicked
        // navlinks.forEach(link => {
        //     link.addEventListener("click", () => {
        //         navmenu.classList.add("left-[-100%]");
        //         navmenu.classList.remove("left-0");

        //         menu.classList.remove("hidden");
        //         closeIcon.classList.add("hidden");
        //     });
        // });


    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close');
    const navMenu = document.getElementById('nav-menu');
    const heroSection = document.querySelector('.hero-section'); // Replace with your actual hero section class or ID

    // Toggle mobile menu and blur the hero section
    hamburger.addEventListener('click', () => {
        navMenu.style.left = '0'; // Show the navigation
        hamburger.classList.add('hidden'); // Hide the hamburger icon
        closeIcon.classList.remove('hidden'); // Show the close icon
        heroSection.classList.add('blur'); // Add blur effect to the hero section
    });

    closeIcon.addEventListener('click', () => {
        navMenu.style.left = '-100%'; // Hide the navigation
        hamburger.classList.remove('hidden'); // Show the hamburger icon
        closeIcon.classList.add('hidden'); // Hide the close icon
        heroSection.classList.remove('blur'); // Remove blur effect from the hero section
    });


        // SWIPPER jS
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            speed: 400,
            spacebetween:30,
            // autoplay:{
            //     delay:3000,
            //     disableOnInteraction: false,
            // },

            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            grabCursor: true,
            breakpoints:{
              320:{
                slidesPerView: 1.3
              },
              576 :{
                slidesPerView:1.2
              },
            640 :{
                slidesPerView:1.3
              },
            768 :{
                slidesPerView:2.3
              },
            1024 :{
                slidesPerView:3.3
              },
            }
          });

          // // change background header
          // const scrollheader = () => {
          // const scrollheader = document.getElementById("navbar")

          // if(this.scrollY >= 50){
          //   header.classList.add("border-bottom", "border-yellow-500" )
          // }else{
          //   scrollheader.classList.remove("sticky")
          // }
          // }