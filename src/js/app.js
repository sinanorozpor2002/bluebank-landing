document.addEventListener("DOMContentLoaded", () => {
  // 1. انتخاب عناصر همبرگر
  const hamburgerParent = document.getElementById("hamburger-parent");
  const hamburgerDivider = document.getElementById("hamburger-divider");

  // 2. انتخاب عنصر منوی موبایل (menu__mobile)
  const mobileMenu = document.querySelector(".menu__mobile");

  if (hamburgerParent && hamburgerDivider && mobileMenu) {
    // 3. افزودن شنونده رویداد کلیک
    hamburgerParent.addEventListener("click", () => {
      // --- الف. مدیریت انیمیشن همبرگر ---
      hamburgerDivider.classList.toggle("custom-divider--toggle");

      // --- ب. مدیریت باز و بسته کردن منوی موبایل (فقط با scale-y) ---

      const isMenuClosed = mobileMenu.classList.contains("scale-y-0");

      if (isMenuClosed) {
        // اگر بسته است: آن را باز کن
        // تبدیل scale-y-0 به scale-y-100 (و نمایش به flex)
        mobileMenu.classList.remove("scale-y-0");
        mobileMenu.classList.add("scale-y-100", "flex");
      } else {
        // اگر باز است: آن را ببند
        // تبدیل scale-y-100 و flex به scale-y-0
        mobileMenu.classList.remove("scale-y-100", "flex");
        mobileMenu.classList.add("scale-y-0");
      }
    });
  } else {
    console.error(
      "عناصر منو یا همبرگر پیدا نشدند. مطمئن شوید ID ها و کلاس‌ها صحیح هستند."
    );
  }
});

const plusElement = document.querySelector(".pluse");
const itemsPlusElement = document.querySelector(".items__pluse");
const subMenus = document.querySelectorAll(".sub__menu");

document.addEventListener("DOMContentLoaded", () => {
  // انتخاب تمام لینک‌های والد در منو
  const allLinks = document.querySelectorAll("li > a.flex.justify-between");

  /**
   * بستن تمام زیرمنوهای باز و تنظیم آیکون آن‌ها به حالت پلاس (افزودن 'active')
   * @param {HTMLElement} currentTrigger - عنصری که کلیک شده است (لینک a)
   */
  const closeAllSubmenus = (currentTrigger) => {
    allLinks.forEach((link) => {
      const submenu = link.nextElementSibling;
      const pluseContainer = link.querySelector(".pluse");

      // بستن زیرمنوهای باز به جز منوی فعلی
      if (
        submenu &&
        submenu !== currentTrigger.nextElementSibling &&
        submenu.classList.contains("scale-y-100")
      ) {
        // 1. بستن زیرمنو
        submenu.classList.remove("scale-y-100", "flex");
        submenu.classList.add("scale-y-0", "hidden");

        // 2. تنظیم آیکون به حالت پلاس (+) با افزودن 'active'
        if (pluseContainer) {
          pluseContainer.classList.add("active"); // اضافه می‌شود
        }
      }
    });
  };

  // 2. اعمال Event Listener به تریگرها
  allLinks.forEach((triggerLink) => {
    const submenu = triggerLink.nextElementSibling;
    const pluseContainer = triggerLink.querySelector(".pluse");

    if (submenu && submenu.classList.contains("sub__menu")) {
      triggerLink.addEventListener("click", (e) => {
        e.preventDefault();

        const isCurrentlyClosed = submenu.classList.contains("scale-y-0");

        // الف. اگر قرار است باز شود، بقیه را ببند (و active آنها اضافه می‌شود)
        if (isCurrentlyClosed) {
          closeAllSubmenus(triggerLink);
        }

        // ب. Toggle وضعیت زیرمنوی فعلی
        if (isCurrentlyClosed) {
          // --- باز کردن: active حذف می‌شود (تبدیل به منها) ---
          submenu.classList.remove("scale-y-0", "hidden");
          submenu.classList.add("scale-y-100", "flex");

          if (pluseContainer) {
            pluseContainer.classList.remove("active"); // حذف می‌شود
          }
        } else {
          // --- بستن: active اضافه می‌شود (تبدیل به پلاس) ---
          submenu.classList.remove("scale-y-100", "flex");
          submenu.classList.add("scale-y-0", "hidden");

          if (pluseContainer) {
            pluseContainer.classList.add("active"); // اضافه می‌شود
          }
        }
      });
    }
  });
});
// اسلایدر

document.addEventListener("DOMContentLoaded", () => {
  // انتخابگرها ... (بدون تغییر)
  const swiperContainer = document.querySelector(".mySwiper");
  const prevButton = swiperContainer.querySelector(".swiper-button-prev");
  const nextButton = swiperContainer.querySelector(".swiper-button-next");
  const slides = swiperContainer.querySelectorAll(".swiper-slide");
  const paginationDots = swiperContainer.querySelectorAll(".pagination-dot");

  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoplayInterval;
  const AUTOPLAY_DELAY = 4000;

  // --- تابع اصلی: جابجایی اسلاید با لوپ ---
  function goToSlide(index) {
    let targetIndex;

    // منطق لوپ (گردش):
    if (index >= totalSlides) {
      targetIndex = 0; // از آخر به اول
    } else if (index < 0) {
      targetIndex = totalSlides - 1; // از اول به آخر
    } else {
      targetIndex = index; // اسلاید عادی
    }

    currentSlide = targetIndex;

    // جابجایی با Scroll
    slides[currentSlide].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    updatePagination();
    updateNavigation();
  }

  // --- Autoplay و تعامل ماوس ---
  function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, AUTOPLAY_DELAY);
  }

  function pauseAutoplay() {
    clearInterval(autoplayInterval);
  }

  // --- به‌روزرسانی Pagination (بدون تغییر) ---
  function updatePagination() {
    paginationDots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("w-6", "bg-brand");
        dot.classList.remove("w-2", "bg-brand-light");
      } else {
        dot.classList.add("w-2", "bg-brand-light");
        dot.classList.remove("w-6", "bg-brand");
      }
    });
  }

  // --- به‌روزرسانی Navigation (برای لوپ غیرفعال نمی‌شود) ---
  function updateNavigation() {
    prevButton.classList.remove("opacity-50", "pointer-events-none");
    nextButton.classList.remove("opacity-50", "pointer-events-none");
    // می‌توانید در اینجا کلاس‌هایی برای ظاهر بهتر دکمه‌ها اعمال کنید
  }

  // --- شنوندگان رویداد ---
  nextButton.addEventListener("click", () => {
    pauseAutoplay();
    goToSlide(currentSlide + 1);
    startAutoplay();
  });

  prevButton.addEventListener("click", () => {
    pauseAutoplay();
    goToSlide(currentSlide - 1);
    startAutoplay();
  });

  swiperContainer.addEventListener("mouseover", pauseAutoplay);
  swiperContainer.addEventListener("mouseleave", startAutoplay);

  // --- کلیک روی Pagination ---
  paginationDots.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      const index = parseInt(event.target.getAttribute("data-index"));
      pauseAutoplay();
      goToSlide(index);
      startAutoplay();
    });
  });

  // شروع
  goToSlide(0);
  startAutoplay();
});
