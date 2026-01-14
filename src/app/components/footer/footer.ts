import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonApiService } from '../../api/services/person-api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './footer.html',
    styleUrl: './footer.css'
})
export class Footer {

    public subscribeForm: FormGroup;
    public isSubscribed: boolean = false;
    public isLoading: boolean = false;
    constructor(private personApiService: PersonApiService, private formBuilder: FormBuilder) {
        this.subscribeForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    public subscribe() {
        if (this.subscribeForm?.valid) {
            this.isLoading = true;
            this.personApiService.subscribe(this.subscribeForm.value.email).subscribe(() => {
                this.subscribeForm.reset();
                this.isSubscribed = true;
                this.isLoading = false;
            });
        }
    }
}