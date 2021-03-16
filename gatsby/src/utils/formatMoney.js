const formatter = Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 15);
}
