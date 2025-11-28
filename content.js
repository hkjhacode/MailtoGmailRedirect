// content.js
// Intercept mailto links and redirect to Gmail compose
function redirectMailto(event) {
  const anchor = event.target.closest('a[href^="mailto:"]');
  if (!anchor) return;
  event.preventDefault();
  const href = anchor.getAttribute('href');
  // Extract email address before any query parameters
  const emailPart = href.split('?')[0].replace(/^mailto:/i, '');
  const email = encodeURIComponent(emailPart);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.location.href = gmailUrl;
}

document.addEventListener('click', redirectMailto, true);
