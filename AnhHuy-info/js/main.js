const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navList = $$('.nav-list_item')
const contents = $$('.content')
console.log(contents)

// Change active nav 
navList.forEach((item, index) => {
    item.onclick = function() {
        const content = contents[index]
        $('.nav-list_item.nav-active').classList.remove('nav-active')
        $('.content.active').classList.remove('active')

        this.classList.add('nav-active')
        content.classList.add('active')

        // Khi click vào content mới sẽ tự động scroll lên đầu của content
        content.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
})

const loading = $('.slide-show_loading')
var loadingTime = 0;

var x = setInterval(function() {
    let time = 10 - loadingTime
    loadingTime += 1

    loading.innerHTML = "Loading... " + time
    if (time < 1) {
        clearInterval(x)
    }
}, 1000)
setTimeout(function() {
    loading.classList.add('none')
}, 12000) 

// Xử ký slide tuần tự thay đổi theo thời gian
const autoSlide = () => {
    let slides = $$(".slide-item");
        let time = 0;


        for (var i = 0; i < slides.length; i++) {
            setInterval(function() {
                setTimeout(function() {
                    slides[0].classList.remove("none")
                }, 0)

                setTimeout(function() {
                    slides[0].classList.add("none")
                }, 3000)

                setTimeout(function() {
                    slides[1].classList.remove("none")
                }, 3000)

                setTimeout(function() {
                    slides[1].classList.add("none")
                }, 6000)

                setTimeout(function() {
                    slides[2].classList.remove("none")
                }, 6000)

                setTimeout(function() {
                    slides[2].classList.add("none")
                }, 9000)

                setTimeout(function() {
                    slides[3].classList.remove("none")
                }, 9000)

                setTimeout(function() {
                    slides[3].classList.add("none")
                }, 12000)
            }, 12000)
        }
}

autoSlide();

// 
const getNav = $('.navbar')
const getBody = $('.body')
const getCt1 = $('.ct1')
const getCt2 = $('.ct2')
const getCt3 = $('.ct3')
const getCt4 = $('.ct4')
const handleScroll = () => {
    window.onscroll = () => {
        let bodyTop = getBody.offsetTop;
        let windowTop = window.scrollY;


        if (windowTop >= bodyTop) {
            getNav.classList.add('nav-fixed')
            getCt1.classList.add('ml')
            getCt2.classList.add('ml')
            getCt3.classList.add('ml')
            getCt4.classList.add('ml')
        } else if (windowTop < bodyTop) {
            getNav.classList.remove('nav-fixed')
            getCt1.classList.remove('ml')
            getCt2.classList.remove('ml')
            getCt3.classList.remove('ml')
            getCt4.classList.remove('ml')
        }
    }
}

handleScroll()

// Animation thay đổi màu cho tiêu đề
const subTitles = $$(".sub-title")
subTitles.forEach((subTitle) => {
    subTitle.style.color = "blue"
    setInterval(function() {
        subTitle.style.color = "orange"
        setTimeout(function() {
            subTitle.style.color = "blue"
        }, 2000)
    }, 4000)
})