const burger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLi = document.querySelector('.menu__list > li');

burger.addEventListener("click", function (event) {
    menuBody.classList.toggle('__invisible');
})

menuLi.addEventListener("click", function (e) {
    menuLi.classList.toggle('__active');
})
/*------------------------------------------------------*/
$(document).ready(function () {
    console.log("ready!");
    $(".reviewSlide").slick({
        nextArrow: '<button id="nextReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
        prevArrow: '<button id="prevReview" type="button" class="btn btn-juliet"><i class="fas fa-chevron-left" aria-hidden="true"></i> </button>',
        appendArrows: $(".arrows-block"),
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        mobileFirst: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        fade: true,
    });
    $(".reviewSlide").on("afterChange", function () {
        let dataId = parseInt($(".slick-current").attr("data-slick-index"));
        console.log(dataId);
        $(".current").html("0" + (dataId += 1))
    });
    $("#workingwithcarouselupper").slick({
        adaptiveHeight: false,
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "16%",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "10%",
                }
            },
        ]
    }
    );
    $("#workingwithcarousellower").slick({
        adaptiveHeight: false,
        mobileFirst: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "33%",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    centerPadding: "2%",
                }
            },
        ]
    });
});

$(document).ready(function () {

    $("#check").change(function () {
        if ($("#check").is(":checked")) {
            $("#submitButton").prop("disabled", false);
        } else {
            $("#submitButton").prop("disabled", true);
        }
    });

    let data = document.querySelectorAll(".info");
    const ajaxSend = (formData) => {
        fetch("https://formcarry.com/s/EzbPKuFdyzV", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                alert("Заявка отправлена");
                data.forEach((element) => { element.value = ""; });
                $("#check").prop("checked", false);
                $("#submitButton").prop("disabled", true);
                localStorage.clear();
            })
            .catch((error) => { alert(error); })
    };

    const forms = $("#thatForm");
    for (let i = 0; i < forms.length; i++) {
        $("#submitButton").click(function (e) {
            e.preventDefault();

            let formData = new FormData(forms[i]);
            formData = Object.fromEntries(formData);

            ajaxSend(formData);
        });
    }
});








