import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html'
})
export class CreateSessionComponent implements OnInit {
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    newSessionForm: FormGroup;

    @Output() saveNewSession = new EventEmitter<ISession>();
    @Output() cancelCreateSession = new EventEmitter();

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'jo', 'hiya'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    saveSession(formValue: any) {
        const session: ISession =  {
            id: undefined,
            name: formValue.name,
            presenter: formValue.presenter,
            duration: +formValue.duration,
            level: formValue.level,
            abstract: formValue.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }

    cancelSession() {
        this.cancelCreateSession.emit();
    }
}