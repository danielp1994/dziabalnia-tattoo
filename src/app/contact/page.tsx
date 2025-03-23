// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // styl kalendarza

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tu wyślesz dane do API/CMS/Email
    alert(
      `Imię: ${name}\nTelefon: ${phone}\nWiadomość: ${message}\nData: ${selectedDate}`
    );
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

        {/* Kalendarz - wybór terminu */}
        <div>
          <label className="block mb-1 text-gray-200">Proponowana data (opcjonalne)</label>
          <Calendar
            onChange={(date: any) => setSelectedDate(date)}
            value={selectedDate}
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
