define(function () {
	'use strict';

	/**
	 * Shorthand proxy for document.querySelector.
	 *
	 * @param {String} selector CSS selector to search for.
	 * @return {Element} Matched element or null.
	 */
	function query(selector) {
		return document.querySelector(selector);
	}

	/**
	 * Shorthand proxy for document.querySelectorAll.
	 *
	 * @param {String} selector CSS selector to search for.
	 * @return {NodeList} All matched elements.
	 */
	query.all = function (selector) {
		return document.querySelectorAll(selector);
	};

	/**
	 * Shorthand proxy for document.getElementById.
	 *
	 * @param {String} id Element ID to search for.
	 * @return {Element} Matched element or null.
	 */
	query.id = function (id) {
		return document.getElementById(id);
	};

	return query;
});