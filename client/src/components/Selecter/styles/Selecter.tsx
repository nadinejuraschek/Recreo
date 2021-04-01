// DEPENDENCIES
import styled from 'styled-components';

export const StyledSelectSearch = styled.div.attrs(() => ({
  className: 'selecter',
}))`
  /**
 * Main wrapper
 */
  .select-search {
    box-sizing: border-box;
    position: relative;

    width: 50%;
  }

  .select-search *,
  .select-search *::after,
  .select-search *::before {
    box-sizing: inherit;
  }

  /**
 * Value wrapper
 */
  .select-search__value {
    position: relative;
    z-index: 1;
  }

  .select-search__value::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(50% - 9px);
    right: 19px;
    width: 11px;
    height: 11px;
  }

  /**
 * Input
 */
  .select-search__input {
    display: block;
    height: 36px;
    width: 100%;
    padding: 0 16px;
    background: #f8f8f8;
    border: 1px solid transparent;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    outline: none;
    font-size: 14px;
    text-align: left;
    text-overflow: ellipsis;
    line-height: 36px;
    -webkit-appearance: none;
  }

  .select-search__input::-webkit-search-decoration,
  .select-search__input::-webkit-search-cancel-button,
  .select-search__input::-webkit-search-results-button,
  .select-search__input::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .select-search__input:not([readonly]):focus {
    cursor: initial;
  }

  /**
 * Options wrapper
 */
  .select-search__select {
    background: #fff;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
  }

  /**
 * Options
 */
  .select-search__options {
    list-style: none;
  }

  /**
 * Option row
 */
  .select-search__row:not(:first-child) {
    border-top: 1px solid #f8f8f8;
  }

  /**
 * Option
 */
  .select-search__option,
  .select-search__not-found {
    display: block;
    height: 36px;
    width: 100%;
    padding: 0 16px;
    background: #f8f8f8;
    border: none;
    outline: none;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  }

  .select-search--multiple .select-search__option {
    height: 48px;
  }

  .select-search__option.is-selected {
    background: var(--yellow);
    color: var(--blue__dark);
  }

  .select-search__option.is-highlighted,
  .select-search__option:not(.is-selected):hover {
    background: var(--yellow__light);
  }

  .select-search__option.is-highlighted.is-selected,
  .select-search__option.is-selected:hover {
    background: var(--yellow);
    color: var(--blue__dark);
  }

  /**
 * Group
 */
  .select-search__group-header {
    font-size: 10px;
    text-transform: uppercase;
    background: #f8f8f8;
    padding: 8px 16px;
  }

  /**
 * States
 */
  .select-search.is-disabled {
    opacity: 0.5;
  }

  .select-search.is-loading .select-search__value::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cpath fill='%232F2D37' d='M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E");
    background-size: 11px;
  }

  .select-search:not(.is-disabled) .select-search__input {
    cursor: pointer;
  }

  /**
 * Modifiers
 */
  .select-search--multiple {
    border-radius: 3px;
    overflow: hidden;
  }

  .select-search:not(.is-loading):not(.select-search--multiple) .select-search__value::after {
    transform: rotate(45deg);
    border-right: 1px solid var(--blue__dark);
    border-bottom: 1px solid var(--blue__dark);
    pointer-events: none;
  }

  .select-search--multiple .select-search__input {
    cursor: initial;
  }

  .select-search--multiple .select-search__input {
    border-radius: 3px 3px 0 0;
  }

  .select-search--multiple:not(.select-search--search) .select-search__input {
    cursor: default;
  }

  .select-search:not(.select-search--multiple) .select-search__input:hover {
    border-color: var(--yellow);
  }

  .select-search:not(.select-search--multiple) .select-search__select {
    position: absolute;
    z-index: 2;
    top: 44px;
    right: 0;
    left: 0;
    border-radius: 3px;
    overflow: auto;
    height: 16rem;
  }

  .select-search--multiple .select-search__select {
    position: relative;
    overflow: auto;
    max-height: 260px;
    border-top: 1px solid #eee;
    border-radius: 0 0 3px 3px;
  }

  .select-search__not-found {
    height: auto;
    padding: 16px;
    text-align: center;
    color: var(--blue__dark);
  }
`;
