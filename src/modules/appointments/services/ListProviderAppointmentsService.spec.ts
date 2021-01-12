import 'reflect-metadata';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let ListProviderAppointments: ListProviderAppointmentsService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderAppoitments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    ListProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the appoitments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123456',
      date: new Date(2021, 1, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      user_id: '123456',
      date: new Date(2021, 1, 20, 15, 0, 0),
    });

    const appointments = await ListProviderAppointments.execute({
      provider_id: 'provider',
      year: 2021,
      month: 2,
      day: 20,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
