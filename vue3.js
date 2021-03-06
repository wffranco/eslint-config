const { INLINE_ELEMENTS } = require('./utils');

module.exports = {
  rules: {
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      'alphabetical': false,
    }],
    'vue/comment-directive': ['error', {reportUnusedDisableDirectives: false}],
    'vue/component-tags-order': ['error', {
      // order: [['script', 'template'], 'style'],
      order: ['template', 'script', 'style'],
    }],
    'vue/experimental-script-setup-vars': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    }],
    'vue/html-end-tags': 'error',
    'vue/html-self-closing': ['error', {
      html: {
        component: 'always',
        normal: 'any',
        void: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/html-quotes': ['error', 'double', {avoidEscape: false}],
    'vue/jsx-uses-vars': 'error',
    'vue/max-attributes-per-line': ['error', {
      singleline: 6,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
      allowEmptyLines: false,
    }],
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-multi-spaces': ['error', {ignoreProperties: false}],
    'vue/no-multiple-slot-args': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-setup-props-destructure': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-html': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    }],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': ['error', {allowProps: false}],
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error', {
      atComponent: 'v-slot',
      default: 'shorthand',
      named: 'shorthand',
    }],
    'vue/valid-v-is': 'error',
    'vue/this-in-template': ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.vue',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};
