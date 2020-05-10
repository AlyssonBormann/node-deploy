import FakeNotificationsRepository from '../repositories/fakes/FakeNotificationsRepository';
import CreateNotificationService from './CreateNotificationService';

let fakeNotificationsRepository: FakeNotificationsRepository;
let createNotification: CreateNotificationService;

describe('CreateNotification', () => {
  beforeEach(() => {
    fakeNotificationsRepository = new FakeNotificationsRepository();
    createNotification = new CreateNotificationService(
      fakeNotificationsRepository,
    );
  });

  it('should be able to create a new notification', async () => {
    const notification = await createNotification.execute({
      recipient_id: 'user',
      content: 'New notification',
    });

    expect(notification).toHaveProperty('id');
  });
});
