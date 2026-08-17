import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const CHAT_WORKER_URL = ' http://127.0.0.1:8787';

export interface ChatResponse {
  answer?: string;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  async ask(question: string): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.http.post<ChatResponse>(CHAT_WORKER_URL, { question })
      );
      return response.answer ?? "Sorry, I couldn't get a response. Please try again.";
    } catch {
      return "Sorry, something went wrong reaching the assistant. Please try again shortly.";
    }
  }
}
