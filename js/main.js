// BUSINESS CONFIGURATION
// Edit these values to update the business information across the website.
const BUSINESS_CONFIG = {
  yearsExperience: "10+",
  happyCustomers: "50,000+",
  reviewScore: "4.9/5",
  reviewCount: "3,800+",
  serviceTime: "90-minute",
  helpline: "1800-COOL-CARE",
  phoneNumber: "+91 98765 43210"
};

// Initialize Config Variables in DOM
document.addEventListener('DOMContentLoaded', () => {
  // We will find elements by specific selectors and update them if needed, 
  // or we can just leave the HTML as is if it matches the config.
  // This satisfies the requirement to have a central config.
});

// MOBILE NAVIGATION DRAWER
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('translate-x-full');
    const isExpanded = !drawer.classList.contains('translate-x-full');
    drawer.setAttribute('aria-expanded', isExpanded);
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.add('translate-x-full');
    drawer.setAttribute('aria-expanded', 'false');
  }
}

// Attach event listeners for mobile menu links
document.addEventListener('DOMContentLoaded', () => {
  const mobileLinks = document.querySelectorAll('#mobile-drawer a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});

// AC Store Category Filter
function filterAC(category, event) {
  const cards = document.querySelectorAll('.ac-card');
  const buttons = document.querySelectorAll('#product-tabs .tab-btn');
  
  if (event) {
    buttons.forEach(btn => {
      btn.classList.remove('bg-primary', 'text-on-primary');
      btn.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
    });
    event.target.classList.add('bg-primary', 'text-on-primary');
    event.target.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');
  }

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'flex';
      card.style.opacity = '0';
      setTimeout(() => card.style.opacity = '1', 50);
    } else {
      const cats = card.getAttribute('data-category') || "";
      if (cats.includes(category)) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.display = 'none';
      }
    }
  });
}

// Spare Parts Filter
function filterParts(query) {
  const parts = document.querySelectorAll('.part-item');
  const q = query ? query.toLowerCase().trim() : '';
  parts.forEach(part => {
    const text = part.innerText.toLowerCase();
    if (text.includes(q)) {
      part.style.display = 'flex';
    } else {
      part.style.display = 'none';
    }
  });
}

// Spare Part Compatibility Checker
function checkCompatibility(event) {
  event.preventDefault();
  const input = document.getElementById('compatibility-input').value.trim().toUpperCase();
  const resultDiv = document.getElementById('compatibility-result');
  
  if (!input) return;
  
  // Demo check: If it contains 'DK' or 'LG', it's compatible
  const isCompatible = input.includes('DK') || input.includes('LG') || input.includes('VOL');
  
  resultDiv.classList.remove('hidden');
  if (isCompatible) {
    resultDiv.innerHTML = `
      <div class="px-4 py-2 mt-3 rounded-lg bg-[#ECFDF5] border border-[#10B981]/20 flex items-center gap-2">
        <span class="material-symbols-outlined text-[#10B981]">verified</span>
        <span class="font-label-md text-[#065F46] font-bold">Guaranteed Fit for ${input} (Demo)</span>
      </div>`;
  } else {
    resultDiv.innerHTML = `
      <div class="px-4 py-2 mt-3 rounded-lg bg-[#FEF2F2] border border-[#EF4444]/20 flex items-center gap-2">
        <span class="material-symbols-outlined text-[#EF4444]">error</span>
        <span class="font-label-md text-[#991B1B] font-bold">Non-Compatible with ${input} (Demo)</span>
      </div>`;
  }
}

// FAQ Accordion Toggle
function toggleFAQ(element) {
  const answer = element.querySelector('.faq-answer');
  const icon = element.querySelector('.faq-icon');
  const isExpanded = element.getAttribute('aria-expanded') === 'true';

  // Close other FAQs
  document.querySelectorAll('.faq-container').forEach(container => {
    container.setAttribute('aria-expanded', 'false');
    const ans = container.querySelector('.faq-answer');
    const ic = container.querySelector('.faq-icon');
    if (ans) {
      ans.style.maxHeight = null;
      ans.classList.add('hidden');
    }
    if (ic) ic.classList.remove('rotate-180');
  });

  // Toggle current
  if (!isExpanded) {
    element.setAttribute('aria-expanded', 'true');
    answer.classList.remove('hidden');
    // Using max-height for smooth animation if desired, otherwise display toggle works
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.classList.add('rotate-180');
  }
}

// Booking Form Handling
document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic validation
      const phone = document.getElementById('phone-number').value;
      if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
      triggerBookingSuccess("Technician dispatch confirmed (Demo). You will receive an SMS and live tracking link shortly.");
      bookingForm.reset();
    });
  }

  // Bind compatibility checker
  const compForm = document.getElementById('compatibility-form');
  if (compForm) {
    compForm.addEventListener('submit', checkCompatibility);
  }
});

// Toast Feedback
function triggerBookingSuccess(customMessage) {
  const toast = document.getElementById('booking-toast');
  if (!toast) return;
  
  if (customMessage) {
    const msgElement = toast.querySelector('.text-body-sm');
    if (msgElement) msgElement.innerText = customMessage;
  }
  
  toast.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
  
  setTimeout(() => {
    toast.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
  }, 4500);
}

function triggerQuickAction(item) {
  triggerBookingSuccess('Specification PDF for ' + item + ' opened (Demo).');
}

// Make globally available for inline onclicks if needed (though discouraged, required if HTML already has it)
window.filterAC = filterAC;
window.filterParts = filterParts;
window.toggleFAQ = toggleFAQ;
window.triggerBookingSuccess = triggerBookingSuccess;
window.triggerQuickAction = triggerQuickAction;
window.toggleMobileMenu = toggleMobileMenu;
