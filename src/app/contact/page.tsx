// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // styl kalendarza

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Tablica wielu terminów
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formatowanie wybranych terminów do stringa
    const dateStr = selectedDates.map((d) => d.toDateString()).join(", ");

    alert(
      `Imię: ${name}\nTelefon: ${phone}\nWiadomość: ${message}\nTerminy: ${dateStr}`
    );
  };

  // Kliknięcie w dany dzień:
  // Jeśli już jest w tablicy, usuwamy. Jeśli go nie ma, dodajemy.
  const handleDayClick = (value: Date) => {
    setSelectedDates((prev) => {
      const exists = prev.some(
        (date) =>
          date.getFullYear() === value.getFullYear() &&
          date.getMonth() === value.getMonth() &&
          date.getDate() === value.getDate()
      );
      if (exists) {
        // Usuń tę datę
        return prev.filter(
          (date) =>
            !(
              date.getFullYear() === value.getFullYear() &&
              date.getMonth() === value.getMonth() &&
              date.getDate() === value.getDate()
            )
        );
      } else {
        // Dodaj nową datę
        return [...prev, value];
      }
    });
  };

  // Podświetlanie kafelków
  // Jeśli bieżący kafelek jest w selectedDates => dodaj klasę
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      // Sprawdzamy, czy date jest w selectedDates
      const isSelected = selectedDates.some(
        (selected) =>
          selected.getFullYear() === date.getFullYear() &&
          selected.getMonth() === date.getMonth() &&
          selected.getDate() === date.getDate()
      );
      if (isSelected) {
        return "bg-gray-700 text-white rounded-full";
      }
    }
    return null;
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Formularz zgłoszeniowy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Imię i nazwisko */}
        <div>
          <label className="block mb-1 text-gray-200">Imię</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>

        {/* Numer telefonu */}
        <div>
          <label className="block mb-1 text-gray-200">Telefon</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>

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
            // Nie używamy "value" i "onChange"
            // bo standardowo react-calendar nie wspiera multi-date z onChange.
            onClickDay={handleDayClick}
            tileClassName={tileClassName}
          />
        </div>

        {/* Upload zdjęć (opcjonalny) */}
        <div>
          <label className="block mb-1 text-gray-200">Zdjęcia (opcjonalnie)</label>
          <input
            type="file"
            multiple
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
