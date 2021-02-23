# sfcc-template-debugger
This folder contains cartridges only for developping purpose.

### How to use it ?
* Clone this repository under your SFCC workspace on your computer.

## int_dev_suite
The cartridge `int_dev_suite` contains scripts for helping developers like an ISML template debugger script.

### Template Debugger
To debug your ISML template, just add inside of your template the following script :
```html
<iscomment> DELETE AFTER USE !!! </iscomment>
<isscript>require('int_dev_suite/cartridge/scripts/util/TemplateDebugger').debug(pdict)</isscript>
<iscomment> DELETE AFTER USE !!! </iscomment>
```

And add a breakpoint inside of `TemplateDebugger.js` script inside of `debug` function.
Attach your debugger to your sandbox, and the debugger will hit your breakpoint so you will have access to all variables you pass into the `debug` function from your template (default parameter is `pdict`, but you can pass whatever you want).
