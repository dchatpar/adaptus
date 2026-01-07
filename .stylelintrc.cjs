/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
    rules: {
        // Allow Tailwind's @apply directive
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'variants', 'responsive', 'screen', 'theme'],
            },
        ],
        // Allow CSS custom properties
        'custom-property-empty-line-before': null,
        'declaration-empty-line-before': null,
        // Tailwind uses a lot of custom properties
        'selector-class-pattern': null,
        // Allow nested selectors (common in CSS modules)
        'selector-nested-pattern': null,
    },
    ignoreFiles: [
        'node_modules/**/*',
        '.next/**/*',
        'out/**/*',
        'public/**/*',
    ],
};
