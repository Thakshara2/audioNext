import { Mic } from 'lucide-react';
import { TextToSpeechForm } from '@/components/text-to-speech-form';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="flex items-center space-x-2">
            <Mic className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              VoiceForge
            </h1>
          </div>
          <p className="max-w-[600px] text-muted-foreground">
            Transform your text into natural-sounding speech with our advanced AI
            technology. Perfect for content creators, educators, and accessibility
            needs.
          </p>
          <div className="w-full max-w-[800px]">
            <TextToSpeechForm />
          </div>
        </div>
      </div>
    </main>
  );
}