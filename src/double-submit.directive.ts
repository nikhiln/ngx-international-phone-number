import { Input, Directive, Host, HostBinding, HostListener, ElementRef } from '@angular/core';


@Directive({
    selector: '[prevent-double-submit]',
    exportAs: 'preventDoubleSubmit'
})
export class PreventDoubleSubmitDirective {
	constructor(private el: ElementRef) {}

    @HostListener('click', ['$event'])
    onClick($event) {
        if (!$event['detail'] || $event['detail'] == 1)
            return true;
        else {
            $event.stopPropagation();
            return false;
        }
    }
}