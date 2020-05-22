import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from './jquery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;

    constructor(@Inject(JQUERY_TOKEN) private $: any, elFRef: ElementRef) {
        this.el = elFRef.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', () => this.$('#simple-modal').modal({}));
    }
}