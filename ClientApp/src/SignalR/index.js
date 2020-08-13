import { HubConnectionBuilder } from '@microsoft/signalr';

let connection;

export const create = () => {
    connection = new HubConnectionBuilder()
        .withUrl('/testHub', {
            transport: 1
        })
        .build();
    return connection;
}

export const connect = async () => {
    if (connection) {
        connection.start()
    }

    return connection;
}