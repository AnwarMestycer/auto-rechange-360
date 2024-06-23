import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GarageService } from '../../services/garage.service';
import { Appointment } from '../../model/appointment.model';

@Component({
  selector: 'app-garage-details',
  templateUrl: './garage-details.component.html',
  styleUrl: './garage-details.component.css'
})
export class GarageDetailsComponent {
failed:boolean = false;
  stars: number[] = [1, 2, 3, 4, 5];
  id: any = '';
  garage: any
 
  appointment:Appointment=
  {
    firstname : "",
    lastname : "",
    number: "",
    serviceDesired: "",
    timeSlot: ""
  }
  timeSlots: string[] = [];
constructor(private activatedRoute : ActivatedRoute, private garageService : GarageService){}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    this.id = params.get('id');
  });
  this.garage = this.garageService.getGarageByIdService(this.id);
  this.timeSlots = this.garageService.getAvailableTimeSlots();
}
onSubmit() {
  console.log(this.appointment);
  this.garageService.bookAppointmentService(this.appointment).subscribe(
    response => {
      console.log('Appointment posted successfully', response);
    },
    error => {
      console.error('There was an error!', error);
      this.failed = true;
      
    }
  )
}
}
