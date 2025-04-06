"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";

/* 1) Oryginalne style React Calendar */
import "react-calendar/dist/Calendar.css";
/* 2) Nasze modyfikacje w pliku z ciemnym motywem i klasą tile-selected */
import "./CalendarDark.css";

type UploadedImage = {
  file: File;
  previewUrl: string;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tattooDesc, setTattooDesc] = useState("");
  const [typedDate, setTypedDate] = useState("");

  // Tablica wybranych dat
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // Pliki (obrazy) wrzucane w formularzu
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  // Klikanie w kalendarzu
  const handleDayClick = (value: Date) => {
    setSelectedDates((prev) => {
      const exists = prev.some(
        (date) =>
          date.getFullYear() === value.getFullYear() &&
          date.getMonth() === value.getMonth() &&
          date.getDate() === value.getDate()
      );
      if (exists) {
        // Usuń z tablicy
        return prev.filter(
          (date) =>
            !(
              date.getFullYear() === value.getFullYear() &&
              date.getMonth() === value.getMonth() &&
              date.getDate() === value.getDate()
            )
        );
      } else {
        // Dodaj do tablicy
        return [...prev, value];
      }
    });
  };

  // Nadawanie klasy zaznaczonym dniom
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const isSelected = selectedDates.some(
        (selected) =>
          selected.getFullYear() === date.getFullYear() &&
          selected.getMonth() === date.getMonth() &&
          selected.getDate() === date.getDate()
      );
      if (isSelected) {
        return "tile-selected"; 
      }
    }
    return null;
  };

  // Upload plików
  const handleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    const validImages = filesArray.filter((file) =>
      file.type.startsWith("image/")
    );

    const newImages: UploadedImage[] = validImages.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  // Wysyłanie formularza
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sortujemy daty rosnąco
    const sortedDates = [...selectedDates].sort((a, b) => a.getTime() - b.getTime());

    // Tworzymy string z dat + dnia tygodnia (skrót)
    const dateStr = sortedDates
      .map((d) => {
        const day = d.toLocaleDateString("pl-PL", { weekday: "short" }); 
        const dateText = d.toLocaleDateString("pl-PL"); 
        return `${dateText} (${day})`;
      })
      .join(", ");

    const filesStr = uploadedImages.map((img) => img.file.name).join(", ");

    alert(
      `Imię: ${name}
Nazwisko: ${lastName}
Telefon: ${phone}
Email: ${email}
Wiadomość: ${message}
Opis tatuażu: ${tattooDesc}
Terminy z kalendarza: ${dateStr}
Termin wpisany: ${typedDate}
Pliki: ${filesStr}`
    );
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Formularz zgłoszeniowy</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Imię i Nazwisko */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-gray-200">Imię (wymagane)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-gray-200">Nazwisko (opcjonalne)</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Telefon i Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-gray-200">Numer telefonu (wymagane)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-gray-200">Email (opcjonalnie)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Wiadomość i Opis tatuażu */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-gray-200">Wiadomość (opcjonalnie)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
              rows={3}
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-gray-200">Opis tatuażu (opcjonalnie)</label>
            <textarea
              value={tattooDesc}
              onChange={(e) => setTattooDesc(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
              rows={3}
            />
          </div>
        </div>

        {/* Termin wpisany ręcznie */}
        <div>
          <label className="block mb-1 text-gray-200">Wpisz termin (opcjonalnie)</label>
          <input
            type="text"
            value={typedDate}
            onChange={(e) => setTypedDate(e.target.value)}
            placeholder="np. 12.12.2025 godz. 14:00"
            className="w-full p-2 rounded bg-gray-800 text-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <p className="text-sm text-gray-400 mt-1">
            Możesz wpisać datę i godzinę ręcznie, jeśli nie ma jej w kalendarzu.
          </p>
        </div>

        {/* Kalendarz + lista terminów */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Kalendarz */}
          <div>
            <label className="block mb-1 text-gray-200">Wybierz terminy z kalendarza</label>
            <Calendar
              value={null}
              selectRange={false}
              // WYKLUCZ daty wcześniejsze niż dziś
              minDate={new Date()}
              onClickDay={handleDayClick}
              tileClassName={tileClassName}
            />
          </div>

          {/* Lista wybranych dni - kolumny pionowe */}
          {selectedDates.length > 0 && (
            <div className="flex-1 border border-gray-700 rounded p-3 text-gray-300 
                            max-h-[310px] overflow-auto mt-7">
              <h3 className="font-semibold mb-2">Wybrane terminy:</h3>

              <ul className="columns-2 [column-gap:2rem]">
                {[...selectedDates]
                  .sort((a, b) => a.getTime() - b.getTime())
                  .map((d, i) => {
                    const day = d.toLocaleDateString("pl-PL", {
                      weekday: "short",
                    });
                    const dateText = d.toLocaleDateString("pl-PL");
                    return (
                      <li key={i} className="mb-2 break-inside-avoid">
                        {dateText}{" "}
                        <span className="text-sm text-gray-400">({day})</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>

        {/* Zdjęcia */}
        <div>
          <label className="block mb-1 text-gray-200">Zdjęcia (opcjonalnie)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFilesUpload}
            className="block w-full text-gray-200 file:mr-4 file:py-2 file:px-4 
                       file:rounded file:border-0 file:bg-gray-600 file:text-gray-100 
                       hover:file:bg-gray-500"
          />

          {uploadedImages.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {uploadedImages.map((img, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={img.previewUrl}
                    alt=""
                    className="object-cover w-full h-full rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white 
                               rounded-full w-6 h-6 flex items-center justify-center 
                               text-sm hover:bg-red-500"
                    title="Usuń obraz"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Przycisk */}
        <div>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white"
          >
            Wyślij zgłoszenie
          </button>
        </div>
      </form>
    </section>
  );
}
