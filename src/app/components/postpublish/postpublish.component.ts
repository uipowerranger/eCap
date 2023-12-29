import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-postpublish',
  templateUrl: './postpublish.component.html',
  styleUrls: ['./postpublish.component.scss'],
})
export class PostpublishComponent {
  postForm: FormGroup;
  @Output() childEvent = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      comment: [''],
    });
  }
  resetForm() {
    this.postForm.reset();
  }
  onSubmit() {
    this.alertService.success('Success ', undefined, false);
    this.childEvent.emit(this.postForm.value.comment);

    this.resetForm();
  }
}
