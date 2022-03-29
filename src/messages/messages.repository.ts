import { readFile, writeFile } from "fs/promises";

export class MessageRepository {
    async findOne(id: string) {
        try {
            const contents = await readFile(`messages.json`, "utf8");
            const messages = JSON.parse(contents);

            return messages[id];
        } catch (e) {
            console.log(e);
        }
    }

    async findAll() {
        try {
            const contents = await readFile(`messages.json`, "utf8");
            const messages = JSON.parse(contents);

            return messages;
        } catch (e) {
            console.log(e);
        }
    }

    async create(content: string) {
        const contents = await readFile(`messages.json`, "utf8");
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999999);

        messages[id] = {
            id,
            content
        };

        await writeFile(`messages.json`, JSON.stringify(messages));
    }
}
