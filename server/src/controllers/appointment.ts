import AppointmentService from "../services/appointment";


const appointmentservice = new AppointmentService()

export default class AppointmentController {


    async addAppointment(req: any, res: any, next: any) {
        try {
            var appointment = req.body;
            var message = await appointmentservice.addAppointment(appointment);
            res.status(201).json({status:200, data: message,message:"Appointment Added" });
        }
        catch (error) {
            next(error);
        }
    }
}

