/**
* Demandware Template Debugger
* https://github.com/sholsinger/demandware-template-debugger
*/

/*
    Usage: Place a script debugger breakpoint on the `return` line within the function below.
    You can pass any variable in parameter to introspect it.
    Then call it within a template wherever you need to inspect variables. eg:

	    <iscomment> DELETE AFTER USE !!! </iscomment>
	    <isscript>require('int_dev_suite/cartridge/scripts/util/TemplateDebugger').debug(pdict)</isscript>
	    <iscomment> DELETE AFTER USE !!! </iscomment>
*/

/**
 * A blank function that will give you a breakpoint (when called) within a template.
 **/
'use strict';
exports.debug = function (param) {
	return true;
}
