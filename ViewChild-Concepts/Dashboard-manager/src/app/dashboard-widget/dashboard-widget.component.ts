import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-dashboard-widget',
    standalone: true,
    imports: [],
    templateUrl: './dashboard-widget.component.html',
    styleUrl: './dashboard-widget.component.css'
})
export class DashboardWidgetComponent {
    @Input() title!: string;
    @Input() color: string = '#2196f3';

    highlight() {
        this.color = '#f44336';
    }
}