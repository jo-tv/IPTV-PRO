tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#FFD700',
        dark: '#0F172A',
        darker: '#020617',
      },
    },
  },
};

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('i');

    answer.classList.toggle('hidden');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.remove('hidden');
    backToTop.classList.add('flex');
  } else {
    backToTop.classList.add('hidden');
    backToTop.classList.remove('flex');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// كود ارسال طلب الاشتراك عبر واتساب

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // منع الإرسال الافتراضي للنموذج

  // الحصول على قيم الحقول
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subjectSelect = document.getElementById('subject');
  const subject = subjectSelect.options[subjectSelect.selectedIndex].text;
  const message = document.getElementById('message').value.trim();

  // تشكيل نص الرسالة
  const whatsappMessage = `Nom: ${name}\nN°Telephone: ${email}\nAbonnement: ${subject}\nMessage: ${message}`;

  // رقم واتساب بدون +
  const whatsappNumber = '212601862102';

  // إنشاء رابط واتساب مع ترميز صحيح
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // فتح الرابط في نافذة جديدة
  window.open(whatsappUrl, '_blank');
});


function contact(){
  window.location.href = "#contact2"
}