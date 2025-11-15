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

// section Contact Us animate border
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".icon-wrapper");
  if (wrappers.length === 0) return;

  let currentIndex = 0;
  const interval = 3000;

  function startRotation() {
    wrappers.forEach((w) => w.classList.remove("active"));

    wrappers[currentIndex].classList.add("active");

    currentIndex = (currentIndex + 1) % wrappers.length;
  }

  startRotation();
  setInterval(startRotation, interval);
});
//section question--section

const tabData = [
  {
    text: "عمومی",
    dataTab: "general",
    maxWidthClass: "max-w-[130px]",
  },
  {
    text: "بازکردن حساب",
    dataTab: "open-account",
    maxWidthClass: "max-w-[165px]",
  },
  {
    text: "کارت بانکی",
    dataTab: "card",
    maxWidthClass: "max-w-[140px]",
  },
  {
    text: "وام",
    dataTab: "loan",
    maxWidthClass: "max-w-[130px]",
  },
  {
    text: "حساب کاربری",
    dataTab: "profile",
    maxWidthClass: "max-w-[160px]",
  },
  {
    text: "تراکنش‌ها",
    dataTab: "transactions",
    maxWidthClass: "max-w-[130px]",
  },
  {
    text: "انتقال وجه",
    dataTab: "transfer",
    maxWidthClass: "max-w-[145px]",
  },
  {
    text: "بلوجونیور",
    dataTab: "junior",
    maxWidthClass: "max-w-[130px]",
  },
  {
    text: "خدمات خودرو",
    dataTab: "car-services",
    maxWidthClass: "max-w-[160px]",
  },
];

const container = document.getElementById("tab-buttons-container");

if (container) {
  tabData.forEach((item) => {
    const tabDiv = document.createElement("div");

    tabDiv.classList.add(
      "tab-button",
      item.maxWidthClass,
      "p-4",
      "border-[2px]",
      "border-b-gray-150",
      "rounded-xl",
      "cursor-pointer",
      "transition-all",
      "duration-300"
    );
    tabDiv.setAttribute("data-tab", item.dataTab);

    const span = document.createElement("span");
    span.textContent = item.text;
    span.classList.add("w-[130px]", "block", "text-center", "md:w-full");

    tabDiv.appendChild(span);

    container.appendChild(tabDiv);
  });
}

const faqData = {
  general: {
    questions: [
      {
        question: "چطور می‌توانم در بلو حساب باز کنم؟",
        answer: [
          "1- اپلیکیشن بلو را دانلود و نصب کنید",
          "2- با خط تلفنی که به‌نام خودتان و فعال است، ثبت‌نام را شروع کنید",
          "3- همراه داشتن اصل کارت ملی هوشمند یا همراه داشتن اصل شناسنامه و ((کد رهگیری درخواست صدور کارت ملی هوشمند)) برای ثبت تصاویر آن‌ها",
          "4- ضبط و ارسال یک ویدئوی سلفی به‌صورت زنده",
        ],
        link: true,
      },
      {
        question: "هزینه باز کردن حساب و دریافت بلوکارت چقدر است؟",
        answer: "باز کردن حساب، صدور و ارسال بلوکارت کاملاً رایگان است.",
      },
      {
        question: "شرایط دریافت وام بلو، به چه صورت است؟",
        answer:
          "اگر میانگین موجودی حساب شما در سه ماه متوالی ۱۰ میلیون تومان یا بیشتر باشد، سقف وام (یعنی ۱۰ میلیون تومان) برای شما فعال می‌شود.",
      },
      {
        question: "وام‌های بلو چند نوع است؟",
        answer: [
          "۱- وام نقدی: این وام به‌صورت فوری به حسابتان واریز می‌شود. در مرحله اول، با توجه به میانگین موجودی سه ماه متوالی شما، وامی با مبلغ ۳ تا ۱۰ میلیون تومان برایتان فعال می‌شود. بعد از تسویه این وام و با توجه به رفتار مالی شما، وام‌های بعدی تا سقف ۴۰ میلیون تومان فعال خواهند شد.",
          "۲- وام سازمانی: این وام با همکاری شرکت‌ها و به کارمندان همان شرکت پرداخت می‌شود. شرایط دریافت این وام برای هر شرکت متفاوت از دیگری است.",
          "۳- وام مشارکتی با پلتفرم‌ها و وب‌سایت‌ها: این وام با همکاری پلتفرم‌ها و وب‌سایت‌هایی مثل ازکی‌وام، به مشتریان آن‌ها تعلق می‌گیرد.",
        ],
      },
    ],
  },
  "open-account": {
    questions: [
      {
        question: "چگونه می‌توانم در بلو حساب باز کنم؟",
        answer: [
          "۱- اپلیکیشن بلو را دانلود و نصب کنید",
          "۲- با خط تلفنی که به‌نام خودتان و فعال است، ثبت‌نام را شروع کنید",
          "۳- با کد ملی خود ثبت نام کنید",
          "۴- ضبط و ارسال یک ویدئو‌ی سلفی به‌صورت زنده",
        ],
        link: true,
      },
      {
        question: "برای باز کردن حساب، چه مدارکی مورد نیاز است؟",
        answer:
          "نیازی به مدرک نیست. کد ملی و شماره یک خط تلفن همراه که به نام خودتان باشد، کافیست.",
      },
      {
        question: "مراحل باز کردن حساب چقدر زمان می‌برد؟",
        answer:
          "باز کردن حساب در کمتر از ۷ دقیقه و بررسی مدارک، شناسایی هویت و فعال شدن حساب (در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳ روز انجام می‌شود.",
      },
      {
        question:
          "کارت ملی هوشمند خود را هنوز دریافت نکرده‌ام، چگونه می‌توانم در بلو حساب باز کنم؟",
        answer:
          "نیازی به تصویر کارت ملی نیست و فقط با داشتن کد ملی خود می‌توانید در بلو حساب باز کنید.",
      },
    ],
  },
  card: {
    questions: [
      {
        question: "کارت‌های بلو عضو شبکه شتاب است؟",
        answer:
          "بله، اتصال کارت‌های بلو به شبکه‌های سراسری بانکی و پرداختی (شتاب و شاپرک) از مسیر سوئیچ‌های بانک سامان و با نظارت این بانک انجام می‌شود.",
      },
      {
        question:
          "من کارت خود را سفارش داده‌ام. ولی هنوز به دست من نرسیده است. چگونه می‌توانم از وضعیت کارت خود مطلع شوم؟",
        answer:
          "با ورود به اپلیکیشن بلو و مراجعه به صفحه کارت، کادر «پیگیری تحویل» به شما نشان داده شده و وضعیت ارسال کارت خود را می‌توانید از آنجا مشاهده کنید. اگر کارت به شما تحویل داده نشده است، می‌توانید با انتخاب گزینه‌ی «پیگیری تحویل»، جزئیات ارسال را مشاهده کنید.",
      },
      {
        question: "کارت مشکی را چگونه می‌توانم دریافت کنم؟",
        answer: [
          "برای دریافت بلوکارت مشکی باید ۱۰ دعوت موفق با کد دعوت شما انجام شده باشد.",
          "پس از انجام ده دعوت موفق، امکان سفارش بلوکارت مشکی به‌صورت خودکار برای شما باز خواهد شد.",
          "توجه داشته‌باشید که بلوکارت مشکی از لحاظ عملکردی تفاوتی با سایر رنگ‌ها ندارد.",
        ],
      },
      {
        question: "کد معرف چیست و چگونه استفاده کنم؟",
        answer: [
          "هر شخص دارای حساب در بلو، یک کد دعوت مخصوص دارد که می‌تواند با آن دوستانش را به بلو یا بلوجونیور دعوت کند و از مزایای دعوت دوستان بهره‌مند شود.",
          "برای مشاهده‌ی کد دعوت خود، وارد اپلیکیشن شوید، از نوار پایین صفحه، وارد «پروفایل» شده و در قسمت «دعوت از دوستان» کد مخصوص خود را ببینید و برای دیگران ارسال کنید.",
          "کد دعوت در زمان ثبت‌نام از دوستان شما دریافت می‌شود؛ اما وارد کردن آن اجباری نیست و با وارد کردن کد دعوت در زمان باز کردن حساب، مبلغ ۵۰ هزار تومان به حساب معرف واریز می‌شود.",
          "توجه داشته باشید که ظرفیت کد دعوت‌ها نامحدود است و در ازای هر دعوت موفق، ۵۰ هزار تومان هدیه نقدی دریافت می‌کنید.",
        ],
      },
    ],
  },
  loan: {
    questions: [
      {
        question: "مبلغ و شرایط دریافت وام نقدی بلو چیست؟",
        answer: [
          "برای دریافت وام نقدی از بلو، باید میانگین موجودی حساب شما در سه ماه متوالی ۳ میلیون تومان و بیشتر باشد. با توجه به این میانگین، وامی بین ۳ تا ۱۰ میلیون تومان برای‌تان فعال می‌شود.",
          "توجه کنید که بعد از فعال کردن وام توسط بلو، سابقه بانکی شما شامل چک برگشتی، قسط‌های پرداخت‌نشده و امتیاز اعتباری به دستور بانک مرکزی برای اعطا وام بررسی می‌شود. در صورتی که سابقه بانکی شما مورد تایید نباشد، وام به شما تعلق نمی‌گیرد.",
        ],
      },
      {
        question: "چطور می‌توانم وام ۱۰ میلیونی بگیرم؟",
        answer: [
          "اگر میانگین موجودی حساب شما در سه ماه متوالی ۱۰ میلیون تومان یا بیشتر باشد، سقف وام نقدی بلو، یعنی ۱۰ میلیون تومان، برای شما فعال می‌شود.",
          "توجه کنید که بعد از فعال کردن وام توسط بلو، سابقه بانکی شما شامل چک برگشتی، قسط‌های پرداخت‌نشده و امتیاز اعتباری به دستور بانک مرکزی برای اعطا وام بررسی می‌شود. در صورتی که سابقه بانکی شما مورد تایید نباشد، وام به شما تعلق نمی‌گیرد.",
        ],
      },
      {
        question: "میانگین مانده موجودی حساب به چه صورت محاسبه می‌شود؟",
        answer: [
          "پایان هر شب، موجودی حساب شما ثبت می‌شود و مجموع این موجودی‌ها بر تعداد روزهای ماه تقسیم می‌شود.",
          "برای مثال، اگر هر شب موجودی حساب شما ۳ میلیون تومان باشد، میانگین مانده موجودی حساب هم ۳ میلیون تومان خواهد بود.",
          "اما اگر در یک ماه ۳۰ روزه، فقط یک روز کامل (۲۴ ساعت) موجودی حساب ۹۰ میلیون تومان و در سایر شب‌ها صفر باشد، میانگین مانده موجودی حساب همچنان ۳ میلیون تومان محاسبه می‌شود.",
        ],
      },
      {
        question:
          "اگر یک ماه میانگین موجودی حساب من کمتر از ۳ میلیون تومان باشد چه اتفاقی می‌افتد؟",
        answer:
          "اگر میانگین موجودی حساب شما در هر ماه از ۳ میلیون تومان کمتر شود، آن ماه (و ماه‌های قبل) از محاسبه میانگین سه‌ماهه حذف می‌شود و فرایند ارزیابی از ماه بعد دوباره شروع می‌شود.",
      },
    ],
  },
  profile: {
    questions: [
      {
        question:
          "رمز عبور حساب کاربری‌ام را فراموش کرده‌ام، چگونه می‌توانم رمز جدید تعریف کنم؟",
        answer: [
          "برای بازیابی رمز عبور، در صفحه‌ی ورود به برنامه، گزینه‌ی «نیاز به کمک دارم» را انتخاب کنید.",
          "سپس گزینه‌ی «فراموشی رمز عبور» را انتخاب کنید.",
          "۱- شماره موبایلی که با آن حساب باز کرده‌اید (یا در بلو ثبت کرده‌اید و به نام شماست) را وارد کنید.",
          "۲- کد تایید پیامک شده را وارد کنید.",
          "۳- کد ملی خود را ثبت کنید.",
          "۴- یک ویدیو در قالب درخواست خود برای ما ارسال کنید.",
          "ویدیوی شما بررسی می‌شود و رمز جدید حداکثر تا ۲ ساعت بعد برای شما ارسال می‌شود.",
          "لطفاً این رمز را بدون فاصله و با توجه به کوچک و بزرگ بودن حروف، وارد کنید.",
          "و حتماً خودتان به‌صورت دستی وارد کنید. (کپی نکنید)",
          "سپس در اپلیکیشن، رمز را به رمز دلخواه خود تغییر دهید و وارد شوید.",
        ],
      },
      {
        question:
          "نام کاربری‌ام را فراموش کرده‌ام، چگونه می‌توانم نام کاربری جدید تعریف کنم؟",
        answer: [
          "برای بازیابی نام کاربری خود در بلو، در صفحه‌ی ورود به اپلیکیشن، گزینه‌ی «نیاز به کمک دارم» را انتخاب کنید.",
          "سپس گزینه‌ی «فراموشی نام کاربری» را انتخاب کنید.",
          "۱- شماره موبایلی که با آن حساب باز کرده‌اید (یا در بلو ثبت کرده‌اید و به نام شماست) را وارد کنید.",
          "۲- کد تایید پیامک شده از بلو را وارد کنید.",
          "۳- کد ملی خود را ثبت کنید.",
          "سپس نام کاربری شما، هم پیامک می‌شود؛ هم در صفحه‌ی برنامه، نمایش داده می‌شود.",
          "بهتر است بدانیم که نام کاربری همیشه ثابت است.",
        ],
      },
      {
        question: "چگونه می‌توانم شماره تماس حساب خود را تغییر دهم؟",
        answer: [
          "برای تغییر شماره‌ی تماس، به دو روش می‌توانید اقدام کنید:",
          "۱- در صفحه‌ی ورود به برنامه، گزینه‌ی «نیاز به کمک دارم» را انتخاب کنید و سپس گزینه‌ی «تغییر شماره تلفن همراه» را بزنید. سپس شماره تلفن همراه جدید خود را وارد کرده و ادامه‌ی فرایند را پیش بروید.",
          "۲- بعد از ورود به برنامه، از منوی پایین وارد بخش «پروفایل» (آیکون [شخص]) شوید. گزینه‌ی «حساب کاربری» را انتخاب کنید و سپس گزینه‌ی «تغییر شماره تلفن همراه» را بزنید. شماره تلفن همراه جدید خود را وارد کنید و ادامه‌ی فرایند را پیش بروید.",
        ],
      },
    ],
  },
  transactions: {
    questions: [
      {
        question:
          "تراکنش من ناموفق بود و مبلغ به حسابم بازنگشته است، چگونه می‌توانم پیگیری کنم؟",
        answer: [
          "همه‌ی تراکنش‌های کارتی (خرید اینترنتی، خرید از دستگاه کارت‌خوان، خرید شارژ و بسته‌ی اینترنتی) نهایتا تا «۷۲ ساعت کاری» مغایرت‌گیری شده و اگر تراکنشی ناموفق باشد، به مبدا عودت داده می‌شود.",
          "اگر در نهایت تا «۷۲ ساعت کاری» مبلغ به حساب شما برنگشت، لطفاً با بلولاین تماس بگیرید تا پیگیری‌های لازم را برای شما انجام دهند.",
        ],
      },
    ],
  },
  transfer: {
    questions: [
      {
        question: "روزانه چقدر می‌توانم به دیگران انتقال دهم؟",
        answer: [
          "سقف انتقال عادی (بدون ویدیو):",
          "• کارت به کارت: ۱۰ میلیون تومان",
          "• پل: ۵۰ میلیون تومان",
          "• پایا: ۲۰۰ میلیون تومان",
          "• ساتنا: ۲۰۰ میلیون تومان",
          "• بلو به بلو: ۲۰۰ میلیون تومان",
          "• بلو به سامان: ۲۰۰ میلیون تومان",
          "",
          "سقف بالای ۲۰۰ میلیون تومان (با ویدیو):",
          "• ساتنا: ۴۰۰ میلیون تومان",
          "• بلو به بلو: ۴۰۰ میلیون تومان",
          "• بلو به سامان: ۴۰۰ میلیون تومان",
          "",
          "جمع مبلغ قابل انتقال روزانه با هر روش:",
          "• کارت به کارت: ۱۰ میلیون تومان",
          "• پل: ۵۰ میلیون تومان",
          "• پایا: ۲۰۰ میلیون تومان",
          "• ساتنا: ۶۰۰ میلیون تومان",
          "• بلو به بلو: ۶۰۰ میلیون تومان",
          "• بلو به سامان: ۶۰۰ میلیون تومان",
          "",
          "نکته: ویدیو شما توسط هوش مصنوعی و کارشناسان بلو بررسی شده و بعد از تایید آن، انتقال انجام می‌شود.",
          "نکته: درصورتی‌که سقف انتقال کارت‌به‌کارت یا پل را برای انتقال به دیگران پر کرده باشید، در آن روز نمی‌توانید با این دو روش به حساب‌های خود در بانک‌های دیگر انتقال دهید.",
        ],
      },
      {
        question: "برای انتقال بالای ۲۰۰ میلیون تومان باید چه کار کنم؟",
        answer: [
          "برای انتقال بالای ۲۰۰ میلیون تومان کافیست اپلیکیشن بلو را باز کنید و مثل همیشه در منو پایین صفحه به بخش انتقال بروید.",
          "مبلغ مورد نظر را وارد کنید و ادامه دهید.",
          "در ادامه از شما خواسته می‌شود که متن روی صفحه را بخوانید و از خودتان ویدیو بگیرید.",
          "این ویدیو توسط هوش مصنوعی و کارشناسان بلو بررسی شده و بعد از تایید آن، انتقال انجام می‌شود.",
          "برای انتقال به حساب‌های خودتان نیازی به گرفتن ویدیو نیست.",
        ],
      },
      {
        question:
          "در انتقال بالای ۲۰۰ میلیون تومان چ یا طول می‌کشد تا پول به حساب مقصد بنشیند؟",
        answer: [
          "اگر حساب مقصد بلو یا سامان باشد، پول در لحظه به حساب می‌نشیند.",
          "برای سایر بانک‌ها، انتقال براساس جدول زمان‌بندی ساتنا انجام می‌شود.",
          "شما می‌توانید زمان دقیق واریز را هنگام انتقال پول در صفحه «انتخاب روش انتقال» ببینید.",
        ],
      },
    ],
  },
  junior: {
    questions: [
      {
        question: "بلوجونیور چیست؟",
        answer: [
          "بلوجونیور فضایی برای آموزش مسائل ساده‌ی مالی به فرزندان است تا بتوانند به مرور با پیچیدگی‌های مسائل مالی روبه‌رو شوند. باز کردن حساب و صدور کارت شخصی برای فرزندان قدم مهمی در آشنایی آن‌ها با مفهوم پول و بانک است که همراه با نظارت والدین در بلوجونیور به‌صورت رایگان امکان‌پذیر شده است. بلوجونیور محصولی از بلو برای فرزندان ۷ تا ۱۸ ساله است که از طریق وب‌سایت بلوجونیور می‌توانید اطلاعات بیشتری کسب کنید.",
        ],
        link: true,
      },
      {
        question: "چگونه می‌توانم حساب بلوجونیور برای فرزندم باز کنم؟",
        answer: [
          "مراحل بازکردن حساب در بلوجونیور:",
          "۱. داشتن حساب بلوبانک سامان توسط پدر یا مادر",
          "۲. دانلود و نصب اپلیکیشن بلوجونیور",
          "از وب‌سایت بلوجونیور می‌توانید درباره‌ی آن اطلاعات بیشتری کسب کنید.",
        ],
        link: true,
      },
    ],
  },
  "car-services": {
    questions: [
      {
        question: "«خدمات خودرو» در اپلیکیشن بلو، شامل چه مواردی است؟",
        answer: [
          "در حال حاضر فقط امکان استعلام و پرداخت خلافی خودرو و موتور به‌صورت تجمیعی و تکی فعال است. سایر خدمات مانند عوارض و طرح ترافیک در آینده به این سرویس اضافه خواهند شد.",
        ],
        link: true,
      },
      {
        question:
          "چطور می‌توانم خلافی خودرو خود را در اپلیکیشن بلو پرداخت کنم؟",
        answer: [
          "پس از ورود به خدمات خودرو در اپلیکیشن بلو، پلاک را وارد کرده و با یک کلیک استعلام خلافی خود را گرفته و آن را پرداخت کنید.",
        ],
      },
      {
        question: "آیا خلافی به‌صورت غیرتجمیعی هم قابل مشاهده است؟",
        answer:
          "بله، شما می‌توانید به صورت تجمیعی یا تکی خلافی خودرو خود را مشاهده و پرداخت کنید.",
      },
      {
        question:
          "آیا برای استفاده از خدمات خودرو باید حساب بانکی خاصی داشته باشم؟",
        answer:
          "بله، شما برای پرداخت خلافی از طریق اپلیکیشن بلو، باید حساب فعال در بلوبانک داشته باشید.",
      },
    ],
  },
};

const tabButtons = document.querySelectorAll(".tab-button");
const questionBox = document.getElementById("question__box");

function renderQuestions(tabKey) {
  const data = faqData[tabKey];
  if (!data || !data.questions) return;

  questionBox.innerHTML = "";

  data.questions.forEach((q) => {
    const questionHTML = `
        <div class="flex flex-col gap-7 cursor-pointer hover:shadow-[inset_0_0_0_4px_rgba(78,145,230,0.2)] rounded-xl" id="open--question">
          <div class="flex items-center gap-5 px-[30px] py-[50px]">
            <i id="active__plus" class="ri-add-large-line text-2xl text-brand-dark"></i>
            <p class="md:text-2xl text-sm font-semibold">${q.question}</p>
          </div>
          <div id="question__answer" class="open-question--description border-r border-b-gray-400 p-4 text-lg font-medium leading-[32px]">
            ${
              Array.isArray(q.answer)
                ? "<ul>" +
                  q.answer
                    .map((item, i) => {
                      const text = item.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-brand-accent font-semibold">$1</strong>'
                      );
                      return q.link && i === 0
                        ? `<li>${text} <a href="https://bluebank.ir" target="_blank" class="text-slate-400 hover:text-brand-accent">(لینک)</a></li>`
                        : `<li>${text}</li>`;
                    })
                    .join("") +
                  "</ul>"
                : q.answer.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-brand-accent font-semibold">$1</strong>'
                  )
            }
          </div>
        </div>
      `;
    questionBox.innerHTML += questionHTML;
  });

  document.querySelectorAll("#open--question").forEach((question) => {
    question.addEventListener("click", () => {
      const isOpen = question.classList.contains("open--question");

      document
        .querySelectorAll("#open--question")
        .forEach((q) => q.classList.remove("open--question"));
      document.querySelectorAll("#active__plus").forEach((i) => {
        i.classList.remove("rotate--active");
        i.classList.add("text-brand-dark");
      });
      document
        .querySelectorAll("#question__answer")
        .forEach((a) => a.classList.add("open-question--description"));

      if (!isOpen) {
        question.classList.add("open--question");
        const icon = question.querySelector("#active__plus");
        icon.classList.remove("text-brand-dark");
        icon.classList.add("rotate--active");
        const answer = question.querySelector("#question__answer");
        answer.classList.remove("open-question--description");
      }
    });
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active-question"));
    button.classList.add("active-question");
    const tab = button.getAttribute("data-tab");
    renderQuestions(tab);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const generalBtn = document.querySelector('[data-tab="general"]');
  if (generalBtn) {
    generalBtn.classList.add("active-question");
    renderQuestions("general");
  }
});

//section footer  scroll-footer

const scrollTopBtn = document.getElementById("scroll__top");

scrollTopBtn.addEventListener("click", () => {
  const duration = 1200;
  const start = window.pageYOffset;
  const startTime = performance.now();

  function animateScroll(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start * (1 - easeOut));

    if (progress < 1) requestAnimationFrame(animateScroll);
  }
  requestAnimationFrame(animateScroll);
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.opacity = window.pageYOffset > 300 ? "1" : "0";
});
