# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org).

## 16.0.0 - 2021-05-27

- Changed: minimum required Node.js version is `12.13.0`.

## 15.0.0 - 2019-07-22

- Added: `remark-lint-no-auto-link-without-protocol` rule.
- Changed: allow to use `!` and `?` in heading (only warn when a heading ends with `.,;:` characters).
- Changed: remove `settings` from linting preset, no need this here.
- Changed: remove `remark-lint-ordered-list-marker-style` in favor `prettier`.
- Changed: remove `remark-lint-no-blockquote-without-marker` in favor `prettier`.
- Changed: remove `remark-lint-maximum-heading-length` rule.
- Changed: update `remark-validate-links`, some options was changed, please look [documentation](https://github.com/remarkjs/remark-validate-links).
- Changed: minimum required Node.js version is `8.9.0`.

## 14.0.0 - 2019-01-28

- Changed: allow using `_` in file names (`remark-lint-no-file-name-irregular-characters` rule).
- Chore: update `remark-validate-links` package.

## 13.0.0 - 2018-06-16

- Changed: drop `nodejs@4` support.
- Removed: `remark-message-control` because `remark-lint` already have this plugin.

## 12.0.0 - 2017-11-09

- Changed: remove all stylistics rules in favor `prettier`.

## 11.0.0 - 2017-10-08

- Added **(Major update)**: `remark-lint-no-trailing-spaces` rule.

## 10.0.0 - 2017-08-23

- Chore **(Major update)**: minimum required `remark-validate-links` version is
  now `^7.0.0`.

## 9.0.0 - 2017-08-14

- Changed: use `exceptTightLists: true` for `remark-lint-no-missing-blank-lines`
  rule.
- Removed: `remark-lint-maximum-line-length` rule.

## 8.0.0 - 2017-08-10

- Added: `remark-comment-config` plugin.
- Added: `remark-message-control` plugin.
- Added **(Major update)**: `remark-lint-no-url-trailing-slash` rule.
- Added **(Major update)**: `remark-validate-links` rule.
- Added **(Major update)**: `remark-lint-no-multiple-toplevel-headings` rule.
- Added **(Major update)**: `remark-lint-no-heading-like-paragraph` rule.
- Changed: value for `remark-lint-maximum-line-length` rule is now `80`.
- Changed: value for `remark-lint-list-item-indent` rule is now `space`.

## 7.0.2 - 2017-07-31

- Chore: minimum required `remark-lint-no-paragraph-content-indent` version is
  now `^1.0.2`.

## 7.0.1 - 2017-07-27

- Chore: minimum required `remark-lint-no-paragraph-content-indent` version is
  now `^1.0.1`.

## 7.0.0 - 2017-07-26

- Added **(Major update)**: `remark-lint-no-paragraph-content-indent` rule.
- Added **(Major update)**: `remark-lint-linebreak-style` rule.
- Added **(Major update)**: `remark-lint-code-block-style` rule.
- Changed: use `allowEmpty: false` for `remark-lint-fenced-code-flag` rule.
- Changed: use `---` horizontal rule for `remark-lint-rule-style` rule.
- Changed: use `"` quotes for `remark-lint-link-title-style` rule.
- Fixed: rename `remark-lint-no-blockquote-without-caret` rule to
  `remark-lint-no-blockquote-without-marker` rule.

## 6.0.0 - 2017-03-11

- Changed: set option to `tab-size` for `list-item-indent` rule.

## 5.0.2 - 2017-02-27

- Fixed: removed `remark-comment-config` from `dependencies`.

## 5.0.1 - 2017-02-24

- Fixed: removed `remark-lint` from `peerDependencies`.

## 5.0.0 - 2017-02-24

- Chore **(Major update)**: minimum required `remark-lint` version is now
  `^6.0.0`.

## 4.0.0 - 2016-12-20

- Added **(Major update)**: `no-empty-url` rule.
- Chore: added `no-heading-like-paragraph` rule for tracking.

## 3.0.0 - 2016-11-02

- Added **(Major update)**: `no-duplicate-headings-in-section` rule.
- Added **(Major update)**: `no-reference-like-url` rule.
- Changed: disable `no-duplicate-headings` rule.
- Changed: `first-heading-level` option to `1`.
- Chore **(Major update)**: minimum required `remark-lint` version is now
  `^5.2.0`.

## 2.0.0 - 2016-10-03

- Changed: set option to `true` for `list-item-spacing` rule.
- Changed: set options to `120` for `maximum-line-length` rule.
- Changed: set option to `_______` for `rule-style` rule.
- Chore **(Major update)**: minimum required `remark-lint` version is now
  `^5.1.0`.

## 1.0.0 - 2016-08-22

- Initial release.
