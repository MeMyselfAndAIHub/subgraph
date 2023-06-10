import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Medication_Created,
  Daily_Routine_Created,
  Appointment_Created,
  Tag_Created,
  Medication_Deleted,
  Daily_Routine_Deleted,
  Appointment_Deleted,
  Daily_Reminder_Pushed
} from "../generated/MeMyselfAndAi/MeMyselfAndAi"

export function createMedication_CreatedEvent(
  user: Address,
  med: ethereum.Tuple,
  reminder_id: BigInt
): Medication_Created {
  let medicationCreatedEvent = changetype<Medication_Created>(newMockEvent())

  medicationCreatedEvent.parameters = new Array()

  medicationCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  medicationCreatedEvent.parameters.push(
    new ethereum.EventParam("med", ethereum.Value.fromTuple(med))
  )
  medicationCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reminder_id",
      ethereum.Value.fromUnsignedBigInt(reminder_id)
    )
  )

  return medicationCreatedEvent
}

export function createDaily_Routine_CreatedEvent(
  user: Address,
  daily_routine: ethereum.Tuple,
  reminder_id: BigInt
): Daily_Routine_Created {
  let dailyRoutineCreatedEvent = changetype<Daily_Routine_Created>(
    newMockEvent()
  )

  dailyRoutineCreatedEvent.parameters = new Array()

  dailyRoutineCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  dailyRoutineCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "daily_routine",
      ethereum.Value.fromTuple(daily_routine)
    )
  )
  dailyRoutineCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reminder_id",
      ethereum.Value.fromUnsignedBigInt(reminder_id)
    )
  )

  return dailyRoutineCreatedEvent
}

export function createAppointment_CreatedEvent(
  user: Address,
  appoitment: ethereum.Tuple,
  reminder_id: BigInt
): Appointment_Created {
  let appointmentCreatedEvent = changetype<Appointment_Created>(newMockEvent())

  appointmentCreatedEvent.parameters = new Array()

  appointmentCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  appointmentCreatedEvent.parameters.push(
    new ethereum.EventParam("appoitment", ethereum.Value.fromTuple(appoitment))
  )
  appointmentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reminder_id",
      ethereum.Value.fromUnsignedBigInt(reminder_id)
    )
  )

  return appointmentCreatedEvent
}

export function createTag_CreatedEvent(
  user: Address,
  user_tag_id: BigInt,
  tag: ethereum.Tuple
): Tag_Created {
  let tagCreatedEvent = changetype<Tag_Created>(newMockEvent())

  tagCreatedEvent.parameters = new Array()

  tagCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tagCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "user_tag_id",
      ethereum.Value.fromUnsignedBigInt(user_tag_id)
    )
  )
  tagCreatedEvent.parameters.push(
    new ethereum.EventParam("tag", ethereum.Value.fromTuple(tag))
  )

  return tagCreatedEvent
}

export function createMedication_DeletedEvent(
  user: Address,
  reminder_id: BigInt
): Medication_Deleted {
  let medicationDeletedEvent = changetype<Medication_Deleted>(newMockEvent())

  medicationDeletedEvent.parameters = new Array()

  medicationDeletedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  medicationDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "reminder_id",
      ethereum.Value.fromUnsignedBigInt(reminder_id)
    )
  )

  return medicationDeletedEvent
}

export function createDaily_Routine_DeletedEvent(
  user: Address,
  reminder_id: BigInt
): Daily_Routine_Deleted {
  let dailyRoutineDeletedEvent = changetype<Daily_Routine_Deleted>(
    newMockEvent()
  )

  dailyRoutineDeletedEvent.parameters = new Array()

  dailyRoutineDeletedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  dailyRoutineDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "reminder_id",
      ethereum.Value.fromUnsignedBigInt(reminder_id)
    )
  )

  return dailyRoutineDeletedEvent
}

export function createAppointment_DeletedEvent(
  user: Address,
  reminder_id: BigInt
): Appointment_Deleted {
  let appointmentDeletedEvent = changetype<Appointment_Deleted>(newMockEvent())

  appointmentDeletedEvent.parameters = new Array()

  appointmentDeletedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  appointmentDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "reminder_id",
      ethereum.Value.fromUnsignedBigInt(reminder_id)
    )
  )

  return appointmentDeletedEvent
}

export function createDaily_Reminder_PushedEvent(
  user: Address,
  time: BigInt,
  username: string
): Daily_Reminder_Pushed {
  let dailyReminderPushedEvent = changetype<Daily_Reminder_Pushed>(
    newMockEvent()
  )

  dailyReminderPushedEvent.parameters = new Array()

  dailyReminderPushedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  dailyReminderPushedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  dailyReminderPushedEvent.parameters.push(
    new ethereum.EventParam("username", ethereum.Value.fromString(username))
  )

  return dailyReminderPushedEvent
}
