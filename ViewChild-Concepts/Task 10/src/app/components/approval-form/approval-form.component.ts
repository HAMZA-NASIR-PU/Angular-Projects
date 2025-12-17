import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ApprovalStatus } from '../../enums/approval-status.enum';
import { ApprovalStatusLabels } from '../../constants/approval-status.labels';
import { HttpClient } from '@angular/common/http';
import { ApprovalFormInterface } from '../../interfaces/approval-form.interface';

@Component({
  selector: 'app-approval-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './approval-form.component.html',
})
export class ApprovalFormComponent implements AfterViewInit {
  @ViewChild('formRef') form!: NgForm;

  @ViewChildren('statusCtrl') statusCtrlref!: QueryList<NgModel>;

  statuses = Object.values(ApprovalStatus);
  approvalStatusLabels = ApprovalStatusLabels;

  constructor(private http: HttpClient) {}

  model: ApprovalFormInterface = {
    status: null as ApprovalStatus | null,
    comments: '',
    selectedDate: '',
  };

  ngAfterViewInit() {
    console.log(this.form);
    // this.form.ngSubmit.subscribe(()=>{
    // });
    console.log(this.statusCtrlref.toArray());
    // For checking which index of statusCtrlref is referencing to which radio
    // button in chrome dev tools
    // this.statusCtrlref.toArray()[0].valueAccessor._elementRef.nativeElement
    // _elementRef is private but still accessible in chrome dev tools
  }

  submit() {
    if (this.form.invalid) {
      this.markAllAsTouched();
      return;
    }

    console.log('Payload:', this.model);
  }

  /**
   * Template-driven equivalent of markAllAsTouched()
   */
  private markAllAsTouched() {
    Object.values(this.form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
