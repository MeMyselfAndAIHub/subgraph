import { BigInt } from "@graphprotocol/graph-ts"
import {
  MeMyselfAndAi,
  Medication_Created,
  Daily_Routine_Created,
  Appointment_Created,
  Tag_Created,
  Medication_Deleted,
  Daily_Routine_Deleted,
  Appointment_Deleted,
  Daily_Reminder_Pushed
} from "../generated/MeMyselfAndAi/MeMyselfAndAi"
import { ExampleEntity } from "../generated/schema"

export function handleMedication_Created(event: Medication_Created): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.med_total_tabs_amount = event.params.med.total_tabs_amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.can_decrypt(...)
  // - contract.get_account_details(...)
  // - contract.get_next_iris_id(...)
  // - contract.get_user_w3memoryname_and_signing_key(...)
  // - contract.deployer(...)
  // - contract.iris_identifier_count(...)
  // - contract.accounts(...)
  // - contract.has_account(...)
  // - contract.taken_username(...)
  // - contract.reminder_id(...)
  // - contract.users_meds(...)
  // - contract.users_daily_routine(...)
  // - contract.users_appointments(...)
  // - contract.tags(...)
  // - contract.tag_id(...)
  // - contract.iris_id_to_memory(...)
  // - contract.all_users(...)
  // - contract.validity(...)
}

export function handleDaily_Routine_Created(
  event: Daily_Routine_Created
): void {}

export function handleAppointment_Created(event: Appointment_Created): void {}

export function handleTag_Created(event: Tag_Created): void {}

export function handleMedication_Deleted(event: Medication_Deleted): void {}

export function handleDaily_Routine_Deleted(
  event: Daily_Routine_Deleted
): void {}

export function handleAppointment_Deleted(event: Appointment_Deleted): void {}

export function handleDaily_Reminder_Pushed(
  event: Daily_Reminder_Pushed
): void {}
