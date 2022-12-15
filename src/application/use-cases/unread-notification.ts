import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface UnReadNotificationProps {
  notificationId: string;
}

type UnReadNotificationResponse = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    req: UnReadNotificationProps,
  ): Promise<UnReadNotificationResponse> {
    const { notificationId } = req;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unRead();

    await this.notificationsRepository.save(notification);
  }
}
