import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from './jquery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') private modalId: string;

    constructor(@Inject(JQUERY_TOKEN) private $: any, elFRef: ElementRef) {
        this.el = elFRef.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', () => this.$('#' + this.modalId).modal({}));
    }
}