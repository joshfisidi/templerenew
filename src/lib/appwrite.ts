// lib/appwrite.ts
import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('67b0f309000127c1b95c'); // Your project ID

export const account = new Account(client);

export { client };