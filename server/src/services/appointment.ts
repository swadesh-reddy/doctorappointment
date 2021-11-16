import AppointmentModel from "../models/appointment";

export default class AppointmentService {
    public appointment = AppointmentModel;

    async addAppointment(appointment: any) {
        var result = await this.appointment.findOne(appointment);
        console.log(result)
        if (result) {
            return { message: 'Appointment already exists' }
        }
        else {
            return await this.appointment.create({ ...appointment })
        }
    }
}