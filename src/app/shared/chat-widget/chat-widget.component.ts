import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../core/chat.service';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

const HINT_DELAY_MS = 2000;

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWidgetComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollAnchor') private scrollAnchor?: ElementRef<HTMLDivElement>;

  constructor(private chatService: ChatService, private elementRef: ElementRef<HTMLElement>) {}

  isOpen = signal(false);
  isLoading = signal(false);
  showHint = signal(false);
  draft = signal('');
  messages = signal<ChatMessage[]>([
    {
      role: 'assistant',
      text: "Hi! I'm Shrehari's portfolio assistant. Ask me about his skills, experience, or any of his projects.",
    },
  ]);

  private shouldScroll = false;
  private hintShowTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.hintShowTimer = setTimeout(() => {
      if (!this.isOpen()) {
        this.showHint.set(true);
      }
    }, HINT_DELAY_MS);
  }

  ngOnDestroy(): void {
    clearTimeout(this.hintShowTimer);
  }

  dismissHint(): void {
    this.showHint.set(false);
  }

  toggleOpen(): void {
    this.isOpen.update((open) => !open);
    if (this.isOpen()) {
      this.dismissHint();
    }
  }

  close(): void {
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }

  async send(): Promise<void> {
    const question = this.draft().trim();
    if (!question || this.isLoading()) {
      return;
    }

    this.messages.update((msgs) => [...msgs, { role: 'user', text: question }]);
    this.draft.set('');
    this.isLoading.set(true);
    this.shouldScroll = true;

    const answer = await this.chatService.ask(question);

    this.messages.update((msgs) => [...msgs, { role: 'assistant', text: answer }]);
    this.isLoading.set(false);
    this.shouldScroll = true;
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll && this.scrollAnchor) {
      this.scrollAnchor.nativeElement.scrollIntoView({ behavior: 'smooth' });
      this.shouldScroll = false;
    }
  }
}
