"use strict";

/* eslint-disable global-require */
module.exports = {
  plugins: [
    require("remark-lint"),
    require("remark-comment-config"),
    [
      require("remark-message-control"),
      {
        name: "lint"
      }
    ],
    require("remark-validate-links"),
    [require("remark-lint-blockquote-indentation"), 2],
    [
      require("remark-lint-checkbox-character-style"),
      {
        checked: "x",
        unchecked: " "
      }
    ],
    require("remark-lint-checkbox-content-indent"),
    [require("remark-lint-code-block-style"), "fenced"],
    require("remark-lint-definition-case"),
    require("remark-lint-definition-spacing"),
    [require("remark-lint-emphasis-marker"), "*"],
    require("remark-lint-fenced-code-flag"),
    [require("remark-lint-fenced-code-marker"), "`"],
    [require("remark-lint-file-extension"), "md"],
    require("remark-lint-final-definition"),
    require("remark-lint-final-newline"),
    require("remark-lint-first-heading-level"),
    require("remark-lint-hard-break-spaces"),
    require("remark-lint-heading-increment"),
    [require("remark-lint-heading-style"), "atx"],
    [require("remark-lint-linebreak-style"), "unix"],
    [require("remark-lint-link-title-style"), '"'],
    require("remark-lint-list-item-bullet-indent"),
    require("remark-lint-list-item-content-indent"),
    [require("remark-lint-list-item-indent"), "space"],
    require("remark-lint-list-item-spacing"),
    require("remark-lint-maximum-heading-length"),
    require("remark-lint-no-auto-link-without-protocol"),
    require("remark-lint-no-blockquote-without-marker"),
    require("remark-lint-no-consecutive-blank-lines"),
    require("remark-lint-no-duplicate-definitions"),
    require("remark-lint-no-duplicate-headings-in-section"),
    require("remark-lint-no-emphasis-as-heading"),
    require("remark-lint-no-empty-url"),
    require("remark-lint-no-file-name-articles"),
    require("remark-lint-no-file-name-consecutive-dashes"),
    require("remark-lint-no-file-name-irregular-characters"),
    require("remark-lint-no-file-name-mixed-case"),
    require("remark-lint-no-file-name-outer-dashes"),
    require("remark-lint-no-heading-content-indent"),
    require("remark-lint-no-heading-indent"),
    require("remark-lint-no-heading-like-paragraph"),
    require("remark-lint-no-heading-punctuation"),
    require("remark-lint-no-html"),
    require("remark-lint-no-inline-padding"),
    require("remark-lint-no-literal-urls"),
    [require("remark-lint-no-missing-blank-lines"), { exceptTightLists: true }],
    require("remark-lint-no-multiple-toplevel-headings"),
    require("remark-lint-no-paragraph-content-indent"),
    require("remark-lint-no-reference-like-url"),
    require("remark-lint-no-shell-dollars"),
    require("remark-lint-no-shortcut-reference-image"),
    require("remark-lint-no-shortcut-reference-link"),
    require("remark-lint-no-table-indentation"),
    require("remark-lint-no-tabs"),
    require("remark-lint-no-undefined-references"),
    require("remark-lint-no-unused-definitions"),
    [require("remark-lint-ordered-list-marker-style"), "."],
    [require("remark-lint-ordered-list-marker-value"), "ordered"],
    [require("remark-lint-rule-style"), "---"],
    [require("remark-lint-strong-marker"), "*"],
    [require("remark-lint-table-cell-padding"), "padded"],
    require("remark-lint-table-pipe-alignment"),
    require("remark-lint-table-pipes"),
    [require("remark-lint-unordered-list-marker-style"), "-"],
    require("remark-lint-no-url-trailing-slash")
  ],
  settings: {
    breaks: false,
    bullet: "-",
    closeAtx: false,
    commonmark: false,
    emphasis: "_",
    entities: false,
    fence: "`",
    fences: false,
    footnotes: false,
    gfm: true,
    incrementListMarker: true,
    listItemIndent: "tab",
    looseTable: false,
    paddedTable: true,
    pedantic: false,
    rule: "-",
    ruleRepetition: 3,
    ruleSpaces: true,
    setext: false,
    spacedTable: true,
    strong: "*"
  }
};
/* eslint-enable global-require */
