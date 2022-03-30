import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs-extra";

@Injectable()
export class MessageRepository {
    async findOne(id: string) {
        try {
            const contents = await readFile(`messages.json`);
            const messages = JSON.parse(contents);

            return messages[id];
        } catch (e) {
            console.log(e);
        }
    }

    async findAll() {
        try {
            const contents = await readFile(`messages.json`);
            const messages = JSON.parse(contents);

            return messages;
        } catch (e) {
            console.log(e);
        }
    }

    async create(content: string) {
        const contents = await readFile(`messages.json`);
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999999);

        messages[id] = {
            id,
            content
        };

        await writeFile(`messages.json`, JSON.stringify(messages));
    }
}
