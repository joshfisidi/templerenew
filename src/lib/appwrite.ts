import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b0f309000127c1b95c'); // Replace with your Appwrite project ID

export const account = new Account(client); 