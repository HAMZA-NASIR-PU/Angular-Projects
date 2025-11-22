import { Component, AfterViewInit, ViewChild, ViewContainerRef, ViewChildren, QueryList, ComponentRef } from '@angular/core';

import { HighlightDirective } from '../highlight/highlight.directive';

import { DashboardWidgetComponent } from '../dashboard-widget/dashboard-widget.component';
import { WidgetFormComponent } from '../widget-form/widget-form.component';

@Component({
    selector: 'app-dashboard-manager',
    standalone: true,
    imports: [WidgetFormComponent, HighlightDirective],
    templateUrl: './dashboard-manager.component.html',
    styleUrl: './dashboard-manager.component.css'
})
export class DashboardManagerComponent implements AfterViewInit {
    @ViewChild('widgetContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    @ViewChildren(DashboardWidgetComponent) widgets!: QueryList<DashboardWidgetComponent>;
    @ViewChild(HighlightDirective) highlighter!: HighlightDirective;

    private widgetRefs: ComponentRef<DashboardWidgetComponent>[] = [];

    ngAfterViewInit() {
        console.log('widgets: ', this.widgets);
    }

    addWidget(widgetData: { title: string; color: string }) {
        const componentRef: ComponentRef<DashboardWidgetComponent> = this.container.createComponent(DashboardWidgetComponent);

        componentRef.instance.title = widgetData.title;
        componentRef.instance.color = widgetData.color;

        this.widgetRefs.push(componentRef);
    }

    highlightFirst() {
        const first = this.widgetRefs[0];
        if (first) {
            first.instance.highlight();
            this.highlighter.setHighlight(true);
        }
    }

    clearAll() {
        this.container.clear();
        this.widgetRefs = [];
        this.highlighter.setHighlight(false);
    }

}
