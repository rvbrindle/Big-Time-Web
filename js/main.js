$(document).ready(function(){
    $('nav li').click(function() {
        $('form').toggle('slow');
    })

    let testimonialObject = {
        0: {
            testimonial: '“We couldn’t have asked for more, thank you so much for making our big day so perfect!”',
            person: 'Mr & Mrs Blake - Stafford'
        },
        1: {
            testimonial: '“So glad we used Big Time for our event, the guys made everything super easy and delivered fantastic entertainment filling the floor all night, thanks again!”',
            person: 'Mr Grant - Manchester'
        },
        2: {
            testimonial: '“You guys absolutely made my 21st!! Thanks so much!”',
            person: 'Liv - York'
        },
        3: {
            testimonial: '“It was a fabulous night and I have had nothing but positive feedback from our guests.  You certainly filled the dance floor, it was a great vibe.”',
            person: 'Justine Pocklington'
        }
        
    }
    let testimonialCounter = 2;
    populateTestimonies();

    function populateTestimonies () {
        if(testimonialObject[testimonialCounter] == undefined){
            testimonialCounter = 0;
        }

        $('.testimonial').html(testimonialObject[testimonialCounter].testimonial);
        $('.testimonial-from').html(testimonialObject[testimonialCounter].person);

        console.log(testimonialCounter);
    }

    window.setInterval(() => {
        populateTestimonies();
        testimonialCounter++;
    }, 7000);

});