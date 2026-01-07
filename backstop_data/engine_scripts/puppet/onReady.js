module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');

  // Wait for images to load
  await page.evaluate(() => {
    return Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
          img.onload = img.onerror = resolve;
        }))
    );
  });

  // Additional delay for animations
  await page.waitForTimeout(scenario.delay || 1000);
};
