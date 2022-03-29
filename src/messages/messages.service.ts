import { MessageRepository } from "./messages.repository";

export class MessageService {
    constructor(public messageRepository: MessageRepository) {}

    async findOne(id: string) {
        this.messageRepository.findOne(id);
    }

    async findAll() {
        this.messageRepository.findAll();
    }

    async create(content: string) {
        this.messageRepository.create(content);
    }
}
