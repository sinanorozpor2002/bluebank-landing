// --- انتخابگرهای اصلی هدر و منوی اصلی ---
const mobileHamburger = document.querySelector(".custom-divider");
const menuHamburger = document.getElementById("menu__hamburger");
const header = document.getElementById("header");
let isHeaderOpen = false;

// آرایه سراسری برای نگهداری تمام عناصر والد منوها (Parent LI)
const allDropdownParents = [];

// تمام کلاس‌های خاصی که ممکن است به زیرمنو داده شوند (برای پاکسازی ایمن)
// این لیست را مطابق با تعریف کلاس‌های انگلیسی که قبلاً توافق کردیم، تنظیم کنید
const allSpecificClasses = [
  "services-dropdown", // برای parent-li
  "loan-dropdown", // برای loan-parent
  "contact-dropdown", // برای contact-parent
];

// ----------------------------------------------------------------------
// 1. منطق بستن تمام زیرمنوهای باز (به جز منوی فعال)
// ----------------------------------------------------------------------

/**
 * تمام منوهای زیرین فعال به جز منویی که هم اکنون روی آن کلیک شده را می بندد.
 * وضعیت باز بودن با بررسی کلاس max-h-[1000px] روی فرزند (UL) مشخص می شود.
 * @param {HTMLElement | null} currentParent - عنصری که در حال حاضر روی آن کلیک شده است.
 */
function closeAllOtherDropdowns(currentParent = null) {
  allDropdownParents.forEach((parent) => {
    const child = parent.querySelector("ul");

    // ❌ حذف: if (parent !== currentParent && parent.classList.contains("is-active")) {

    // ✅ منطق جدید: اگر باز است و والد فعلی نیست، ببند
    if (
      child &&
      child.classList.contains("max-h-[1000px]") &&
      parent !== currentParent
    ) {
      // الف. بستن UL فرزند (حالت موبایل: max-height)
      child.classList.remove("max-h-[1000px]", "overflow-visible");
      child.classList.add("max-h-0", "overflow-hidden");

      // ب. 👈 بستن UL فرزند (حالت دسکتاپ: Position و Display)
      // حذف کلاس‌های باز شدن
      child.classList.remove(
        "desktop:absolute",
        "desktop:flex",
        "desktop:block",
        ...allSpecificClasses
      );
      // اعمال کلاس‌های بسته شدن دسکتاپ
      child.classList.add("desktop:static", "desktop:hidden");

      // ❌ حذف: parent.classList.remove("is-active");
    }
  });
}

// ----------------------------------------------------------------------
// 2. منطق باز و بسته شدن هدر در موبایل (بدون تغییر)
// ----------------------------------------------------------------------

mobileHamburger.addEventListener("click", function () {
  if (isHeaderOpen) {
    mobileHamburger.classList.remove("custom-divider--toggle");
    menuHamburger.classList.remove("hamburger");

    // --- مدیریت ارتفاع هدر (بستن) ---
    header.classList.remove("max-h-[100vh]", "overflow-visible");
    header.classList.add("h-16", "overflow-hidden");

    isHeaderOpen = false;

    // بستن تمام زیرمنوها هنگام بستن هدر اصلی
    closeAllOtherDropdowns(null);
  } else {
    mobileHamburger.classList.add("custom-divider--toggle");
    menuHamburger.classList.add("hamburger");

    // --- مدیریت ارتفاع هدر (باز کردن) ---
    header.classList.remove("h-16", "overflow-hidden");
    header.classList.add("max-h-[100vh]", "overflow-visible");

    isHeaderOpen = true;
  }
});

// ----------------------------------------------------------------------
// 3. تابع پیشرفته مدیریت زیرمنوها (موبایل و دسکتاپ)
// ----------------------------------------------------------------------

/**
 * منطق باز و بسته شدن یک زیرمنو را پیاده سازی می کند.
 * @param {string} parentSelectorId - ID عنصر LI والد (مثلاً "parent-li")
 * @param {string} childSelectorId - ID عنصر UL فرزند (مثلاً "child-ul")
 * @param {string} specificClass - کلاس Tailwind CSS خاص برای آن زیرمنو (مثلاً "services-dropdown")
 */
function toggleMenu(parentSelectorId, childSelectorId, specificClass) {
  const parent = document.getElementById(parentSelectorId);
  const child = document.getElementById(childSelectorId);
  // فرض می‌کنیم در دسکتاپ باید flex یا block باشد
  const desktopDisplayClass = "desktop:flex";

  if (!parent || !child) {
    console.warn(
      `المان با سلکتورهای ${parentSelectorId} یا ${childSelectorId} پیدا نشد.`
    );
    return;
  }

  // اگر والد قبلاً اضافه نشده، اضافه کن
  if (!allDropdownParents.includes(parent)) {
    allDropdownParents.push(parent);
  }

  parent.addEventListener("click", (e) => {
    e.stopPropagation();

    // ✅ منطق جدید: بررسی باز بودن با چک کردن کلاس‌های فرزند
    const isActive = child.classList.contains("max-h-[1000px]");

    if (!isActive) {
      // 👈 حالت باز کردن (Open)

      // بستن تمام منوهای دیگر
      closeAllOtherDropdowns(parent);

      // 1. استایل‌های باز کردن موبایل
      child.classList.remove("max-h-0", "overflow-hidden");
      child.classList.add("max-h-[1000px]", "overflow-visible");

      // 2. 👈 استایل‌های باز کردن دسکتاپ (absolute، نمایش و کلاس خاص)
      child.classList.remove("desktop:static", "desktop:hidden");
      child.classList.add(
        "desktop:absolute",
        desktopDisplayClass,
        specificClass
      );

      // ❌ حذف: parent.classList.add("is-active");
    } else {
      // 👈 حالت بسته شدن (Close)

      // 1. استایل‌های بستن موبایل
      child.classList.remove("max-h-[1000px]", "overflow-visible");
      child.classList.add("max-h-0", "overflow-hidden");

      // 2. 👈 استایل‌های بستن دسکتاپ (static، پنهان‌سازی و حذف کلاس خاص)
      child.classList.remove(
        "desktop:absolute",
        desktopDisplayClass,
        specificClass
      );
      child.classList.add("desktop:static", "desktop:hidden");

      // ❌ حذف: parent.classList.remove("is-active");
    }
  });
}

// ----------------------------------------------------------------------
// 4. بستن منو با کلیک خارجی (کلیک روی document)
// ----------------------------------------------------------------------

document.addEventListener("click", () => {
  // بستن تمام زیرمنوها با کلیک روی هر جای صفحه
  closeAllOtherDropdowns(null);
});

// ----------------------------------------------------------------------
// 🚀 فراخوانی توابع برای فعال سازی منوها (بدون تغییر)
// ----------------------------------------------------------------------

// فراخوانی توابع با IDها و کلاس‌های خاص مربوطه
toggleMenu("parent-li", "child-ul", "services-dropdown"); // اگر ID اصلی "parent-li" است
toggleMenu("loan-parent", "loan-child", "loan-dropdown");
toggleMenu("contact-parent", "contact-child", "contact-dropdown");
