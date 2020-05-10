import { injectable, inject } from 'tsyringe';

import Notification from '../infra/typeorm/schemas/Notification';
import INotificationsRepository from '../repositories/INotificationsRepository';

interface IRequest {
  recipient_id: string;
  content: string;
}

@injectable()
class CreateNotificationService {
  constructor(
    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({
    recipient_id,
    content,
  }: IRequest): Promise<Notification> {
    const notification = await this.notificationsRepository.create({
      recipient_id,
      content,
    });

    return notification;
  }
}

export default CreateNotificationService;
