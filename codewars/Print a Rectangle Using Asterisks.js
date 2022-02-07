function getRectangleString(width, height) {
  let rn = '\r\n';
  let b = '*'.repeat(width) + rn;
  let center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn).repeat(height - 2) : '';
  return height > 1 ? (b + center + b) : b.repeat(height);
}
