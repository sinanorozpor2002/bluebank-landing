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
