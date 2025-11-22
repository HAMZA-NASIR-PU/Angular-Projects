import { Component, Output, EventEmitter } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-widget-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './widget-form.component.html',
    styleUrl: './widget-form.component.css'
})
export class WidgetFormComponent {
    @Output() widgetAdded = new EventEmitter<{ title: string; color: string }>();

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            title: ['New Widget'],
            color: ['#2196f3']
        });
    }

    addWidget() {
        this.widgetAdded.emit(this.form.value);
        this.form.reset({ title: 'New Widget', color: '#2196f3' });
    }
}

