import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Koliko vremena treba za izradu portreta?",
      answer: "Vrijeme izrade portreta ovisi o složenosti i tehnici. Realistični portret grafitnom olovkom obično traje 1-2 tjedna, dok slike različitim tehnikama mogu trajati 2-4 tjedna. Za precizniju procjenu, molimo kontaktirajte nas s detaljima vašeg projekta."
    },
    {
      question: "Koje su cijene za umjetnička djela?",
      answer: "Cijene variraju ovisno o veličini, tehnici i složenosti djela. Osnovni portret grafitnom olovkom kreće se od određene cijene, dok slike različitim tehnikama imaju drugačije cjenovnike. Za detaljnu ponudu, molimo kontaktirajte nas s vašim zahtjevima."
    },
    {
      question: "Mogu li poslati referentne fotografije?",
      answer: "Da, preporučujemo slanje referentnih fotografija kako bismo mogli najbolje razumjeti vašu viziju. Možete ih poslati putem kontakt forme ili direktno na email. Što više detalja pružite, to će konačno djelo biti bliže vašim očekivanjima."
    },
    {
      question: "Radite li i na narudžbi?",
      answer: "Da, radimo na narudžbi i prilagođavamo se vašim potrebama. Možete naručiti portrete, karikature, slike različitim tehnikama ili kombinacije više slika. Kontaktirajte nas da razgovorimo o vašoj ideji i kako je možemo realizirati."
    },
    {
      question: "Kako funkcionira proces narudžbe?",
      answer: "Proces započinje kontaktom putem emaila, WhatsAppa ili kontakt forme. Razgovaramo o vašim željama, veličini, tehnici i rokovima. Nakon dogovora, možemo započeti s radom. Tijekom procesa možete pratiti napredak i dati povratne informacije."
    },
    {
      question: "Što ako nisam zadovoljan/na rezultatom?",
      answer: "Naš cilj je da budete potpuno zadovoljni s konačnim rezultatom. Tijekom procesa rada možete dati povratne informacije i zahtijevati izmjene. Radimo sve dok ne postignemo rezultat koji odgovara vašim očekivanjima."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-dark dark:text-pink-medium mb-4">
            Kontakt
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Javite nam se putem društvenih mreža ili emaila
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-pink-light dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-pink-dark dark:text-pink-medium mr-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-dark dark:text-pink-medium">
                Instagram
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
              Pratite nas na Instagramu za najnovije umjetničke radove i ažuriranja.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-dark dark:text-pink-medium hover:text-pink-medium dark:hover:text-pink-light transition-colors font-medium"
            >
              @arkista
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-pink-light dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-pink-dark dark:text-pink-medium mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-dark dark:text-pink-medium">
                Email
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
              Pošaljite nam poruku za upite o umjetničkim djelima ili suradnji.
            </p>
            <a
              href="mailto:contact@arkista.com"
              className="inline-flex items-center text-pink-dark dark:text-pink-medium hover:text-pink-medium dark:hover:text-pink-light transition-colors font-medium"
            >
              contact@arkista.com
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-pink-light dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-pink-dark dark:text-pink-medium mr-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-pink-dark dark:text-pink-medium">
                WhatsApp
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
              Kontaktirajte nas direktno putem WhatsAppa za brze odgovore.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-dark dark:text-pink-medium hover:text-pink-medium dark:hover:text-pink-light transition-colors font-medium"
            >
              +385 XX XXX XXXX
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-24"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-dark dark:text-pink-medium mb-4">
              Često postavljana pitanja
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Pronađite odgovore na najčešća pitanja o našim uslugama
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-pink-light dark:border-gray-700 overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <button
                  onClick={(e) => {
                    toggleFAQ(index);
                    e.currentTarget.blur();
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none transition-colors border-0"
                  style={{ borderColor: 'transparent' }}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-pink-dark dark:text-pink-medium pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-pink-dark dark:text-pink-medium"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                      style={{ border: 'none', borderColor: 'transparent' }}
                    >
                      <div className="px-6 sm:px-8 pb-4 sm:pb-5 pt-0 sm:pt-0">
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
