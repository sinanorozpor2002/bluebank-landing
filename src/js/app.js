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

// =======================================================
// (Assets Data)
// =======================================================
const CARD_ASSETS = [
  {
    id: 1,
    color: "Black",
    video: "./src/Video/card-black-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Black/card-black-render-front.webp",
    imageBack: "./src/images/Blue Card/Black/card-black-render-back.webp",
  },
  {
    id: 2,
    color: "Blue",
    video: "./src/Video/card-blue-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Blue/card-blue-render-front.webp",
    imageBack: "./src/images/Blue Card/Blue/card-blue-render-back.webp",
  },
  {
    id: 3,
    color: "Green",
    video: "./src/Video/card-green-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Green/card-green-render-front.webp",
    imageBack: "./src/images/Blue Card/Green/card-green-render-back.webp",
  },
  {
    id: 4,
    color: "Pink",
    video: "./src/Video/card-rosegold-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Pink/card-rosegold-render-front.webp",
    imageBack: "./src/images/Blue Card/Pink/card-rosegold-render-back.webp",
  },
  {
    id: 5,
    color: "Yellow",
    video: "./src/Video/card-yellow-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Yellow/card-yellow-render-front.webp",
    imageBack: "./src/images/Blue Card/Yellow/card-yellow-render-back.webp",
  },
  {
    id: 6,
    color: "Red",
    video: "./src/Video/card-red-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Red/card-red-render-front.webp",
    imageBack: "./src/images/Blue Card/Red/card-red-render-back.webp",
  },
  {
    id: 7,
    color: "Purple",
    video: "./src/Video/card-purple-video-cbg.webm",
    imageFront: "./src/images/Blue Card/Purple/card-purple-render-front.webp",
    imageBack: "./src/images/Blue Card/Purple/card-purple-render-back.webp",
  },
];

const videoElement = document.getElementById("change--video");

const imageBack = document.getElementById("image__back");
const imageFront = document.getElementById("image__front");

const colorButtons = document.querySelectorAll(".color--button");

function updateCardAssets(card) {
  videoElement.src = card.video;
  videoElement.load();
  videoElement.play();

  imageBack.src = card.imageBack;
  imageFront.src = card.imageFront;
}

const handleColorClick = (event) => {
  const clickedButton = event.currentTarget;

  colorButtons.forEach((btn) => {
    btn.classList.remove("border--item");

    btn.classList.remove("relative");
  });

  clickedButton.classList.add("border--item");

  clickedButton.classList.add("relative");

  const selectedColor = clickedButton.dataset.color;
  const selectedCard = CARD_ASSETS.find(
    (card) => card.color.toLowerCase() === selectedColor.toLowerCase()
  );

  if (selectedCard) {
    updateCardAssets(selectedCard);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  colorButtons.forEach((button) => {
    button.addEventListener("click", handleColorClick);
  });
});

// بوردر ردیوس
document.addEventListener("DOMContentLoaded", () => {
  // انتخاب تمام دایوهایی که باید انیمیشن بگیرند
  const iconContainers = document.querySelectorAll(".icon-item");

  // اگر عنصری پیدا نشد، متوقف شو
  if (iconContainers.length === 0) return;

  const ANIMATION_CLASS = "rotating-border-external";
  const INTERVAL_SECONDS = 3000; // ۳ ثانیه = ۳۰۰۰ میلی ثانیه

  // index فعلی دایوی که انیمیشن روی آن است
  let currentIndex = 2; // شروع از دایو سوم (index 2)

  function rotateAnimation() {
    // ۱. حذف کلاس از عنصر فعلی
    const currentIcon = iconContainers[currentIndex];
    currentIcon.classList.remove(ANIMATION_CLASS);
    currentIcon.classList.remove("relative"); // کلاس relative هم برای موقعیت دهی ::after لازم است

    // ۲. محاسبه index بعدی (چرخشی)
    // اگر به آخر (index 2) رسیدیم، به 0 برگرد، در غیر این صورت یکی اضافه کن
    currentIndex = (currentIndex + 1) % iconContainers.length;

    // ۳. اضافه کردن کلاس به عنصر جدید
    const nextIcon = iconContainers[currentIndex];
    nextIcon.classList.add(ANIMATION_CLASS);
    nextIcon.classList.add("relative");
  }

  // اجرای تابع برای اولین بار (بعد از ۳ ثانیه) و سپس به صورت متناوب
  setInterval(rotateAnimation, INTERVAL_SECONDS);
});
