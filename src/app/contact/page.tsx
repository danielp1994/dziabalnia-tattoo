'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleDayClick = (date: Date) => {
    const alreadySelected = selectedDates.find((d) => d.toDateString() === date.toDateString());
    if (alreadySelected) {
      setSelectedDates(selectedDates.filter((d) => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const tileClassName = ({ date }: { date: Date }) => {
    return selectedDates.find((d) => d.toDateString() === date.toDateString())
      ? 'bg-gray-600 text-white rounded-full'
      : '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wiadomość:', message);
    console.log('Wybrane daty:', selectedDates);
    console.log('Pliki:', files);
    // Tu możesz dodać wysyłkę danych na backend
  };

  return (
    <section className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Wiadomość / opis */}
        <div>
          <label className="block mb-1 text-gray-200">Wiadomość (opcjonalnie)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            rows={4}
          />
        </div>

        {/* Kalendarz - wielokrotny wybór dni */}
        <div>
          <label className="block mb-1 text-gray-200">Wybierz terminy</label>
          <Calendar
            onClickDay={handleDayClick}
            tileClassName={tileClassName}
          />
        </div>

        {/* Upload zdjęć */}
        <div>
          <label className="block mb-1 text-gray-200">Zdjęcia (opcjonalnie)</label>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            className="block w-full text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-600 file:text-gray-100 hover:file:bg-gray-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white"
        >
          Wyślij zgłoszenie
        </button>
      </form>
    </section>
  );
}
