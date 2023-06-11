import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  MeMyselfAndAi,
  Medication_Created,
  Daily_Routine_Created,
  Appointment_Created,
  Tag_Created,
  Medication_Deleted,
  Daily_Routine_Deleted,
  Appointment_Deleted,
  Daily_Reminder_Pushed,
} from "../generated/MeMyselfAndAi/MeMyselfAndAi";
import {
  Medication,
  DailyReminder,
  DailyRoutine,
  Appointment,
  Tag,
} from "../generated/schema";

export function handleMedication_Created(event: Medication_Created): void {
  let medication = Medication.load(
    generateReminderId(
      event.params.user,
      event.params.reminder_id,
      "Medication"
    )
  );

  if (!medication)
    medication = new Medication(
      generateReminderId(
        event.params.user,
        event.params.reminder_id,
        "Medication"
      )
    );

  medication.reminderId = event.params.reminder_id;
  medication.userAddress = event.params.user;
  medication.totalTabsAmount = event.params.med.total_tabs_amount;
  medication.days = event.params.med.days;
  medication.name = event.params.med.name;
  medication.dosage = event.params.med.dosage;
  medication.desc = event.params.med.desc;
  medication.deleted = false;

  medication.save();
}

export function handleDaily_Routine_Created(
  event: Daily_Routine_Created
): void {
  let dailyRoutine = DailyRoutine.load(
    generateReminderId(
      event.params.user,
      event.params.reminder_id,
      "DailyRoutine"
    )
  );

  if (!dailyRoutine)
    dailyRoutine = new DailyRoutine(
      generateReminderId(
        event.params.user,
        event.params.reminder_id,
        "DailyRoutine"
      )
    );
  dailyRoutine.reminderId = event.params.reminder_id;
  dailyRoutine.userAddress = event.params.user;
  dailyRoutine.days = event.params.daily_routine.days;
  dailyRoutine.importance = event.params.daily_routine.importance;
  dailyRoutine.desc = event.params.daily_routine.routine_description;
  dailyRoutine.deleted = false;

  dailyRoutine.save();
}

export function handleAppointment_Created(event: Appointment_Created): void {
  let appointment = Appointment.load(
    generateReminderId(
      event.params.user,
      event.params.reminder_id,
      "Appointment"
    )
  );

  if (!appointment)
    appointment = new Appointment(
      generateReminderId(
        event.params.user,
        event.params.reminder_id,
        "Appointment"
      )
    );

  appointment.reminderId = event.params.reminder_id;
  appointment.userAddress = event.params.user;
  appointment.days = event.params.appoitment.days;
  appointment.importance = event.params.appoitment.importance;
  appointment.desc = event.params.appoitment.appointment_desc;
  appointment.locationDescription = event.params.appoitment.location;
  appointment.deleted = false;

  appointment.save();
}

export function handleTag_Created(event: Tag_Created): void {
  let tag = Tag.load(
    generateTagId(
      event.params.user,
      event.params.tag.name,
      event.params.tag.summary,
      event.params.tag.importance.toString()
    )
  );

  if (!tag)
    tag = new Tag(
      generateTagId(
        event.params.user,
        event.params.tag.name,
        event.params.tag.summary,
        event.params.tag.importance.toString()
      )
    );

  tag.userAddress = event.params.user;
  tag.name = event.params.tag.name;
  tag.importance = event.params.tag.importance;
  tag.summary = event.params.tag.summary;
  tag.importance = event.params.tag.importance;

  tag.save();
}

export function handleMedication_Deleted(event: Medication_Deleted): void {
  let medication = Medication.load(
    generateReminderId(
      event.params.user,
      event.params.reminder_id,
      "Medication"
    )
  );

  if (medication) {
    medication.deleted = true;
    medication.save();
  }
}

export function handleDaily_Routine_Deleted(
  event: Daily_Routine_Deleted
): void {
  let dailyRoutine = DailyRoutine.load(
    generateReminderId(
      event.params.user,
      event.params.reminder_id,
      "DailyRoutine"
    )
  );

  if (dailyRoutine) {
    dailyRoutine.deleted = true;

    dailyRoutine.save();
  }
}

export function handleAppointment_Deleted(event: Appointment_Deleted): void {
  let appointment = Appointment.load(
    generateReminderId(
      event.params.user,
      event.params.reminder_id,
      "Appointment"
    )
  );

  if (appointment) {
    appointment.deleted = true;

    appointment.save();
  }
}

export function handleDaily_Reminder_Pushed(
  event: Daily_Reminder_Pushed
): void {
  let dailyReminder = DailyReminder.load(
    generateReminderPushedId(
      event.params.user,
      event.params.username,
      event.params.time
    )
  );

  if (!dailyReminder)
    dailyReminder = new DailyReminder(
      generateReminderPushedId(
        event.params.user,
        event.params.username,
        event.params.time
      )
    );

  dailyReminder.userAddress = event.params.user;
  dailyReminder.userName = event.params.username;
  dailyReminder.time = event.params.time;

  dailyReminder.save();
}

function generateReminderId(
  user: Bytes,
  reminderId: BigInt,
  reminderType: String
): string {
  return reminderId.toHexString() + user.toHexString() + reminderType;
}

function generateTagId(
  user: Bytes,
  name: String,
  summary: String,
  importance: String
): string {
  return user.toHexString() + name + summary + importance;
}

function generateReminderPushedId(
  user: Bytes,
  username: String,
  time: BigInt
): string {
  return user.toHexString() + username + time.toString();
}
