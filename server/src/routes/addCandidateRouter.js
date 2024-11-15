const { Router } = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const { Candidate } = require('../../db/models');

const upload = multer({ storage: multer.memoryStorage() });
const candidateRouter = Router();

async function parsePDF(buffer) {
  try {
    const pdfData = await pdfParse(buffer);
    console.log('Извлеченный текст из PDF:', pdfData.text);
    return pdfData.text;
  } catch (error) {
    console.error('Ошибка при обработке PDF:', error);
    throw new Error('Не удалось обработать PDF');
  }
}

candidateRouter.post(
  '/',
  verifyAccessToken,
  upload.single('pdf'),
  async (req, res) => {
    try {
      if (!req.file || !req.file.buffer) {
        console.log('PDF файл не загружен.');
        return res.status(400).json({ message: 'PDF файл не загружен' });
      }

      console.log('Начало обработки PDF...');
      const pdfBuffer = req.file.buffer;

      const pdfText = await parsePDF(pdfBuffer);

      if (!pdfText || pdfText.trim().length === 0) {
        console.log('PDF содержит пустой текст или текст не был распознан.');
        return res.status(400).json({ message: 'PDF не содержит текстовых данных.' });
      }

      const extractedData = extractDataFromPdf(pdfText);

      if (!extractedData) {
        console.log('Не удалось извлечь обязательные данные из текста PDF.');
        return res.status(400).json({ message: 'Не удалось извлечь все обязательные данные из PDF' });
      }

      const newCandidate = await Candidate.create({
        ...extractedData,
        userId: res.locals.user.id,
      });

      console.log('Кандидат успешно создан:', newCandidate);
      res.status(200).json(newCandidate);
    } catch (error) {
      console.error('Ошибка при обработке PDF:', error.message);
      res.status(500).json({ message: 'Ошибка при обработке PDF' });
    }
  },
);

function extractDataFromPdf(text) {
  const data = {};

  const fullNameMatch = text.match(/([А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+)/);
  const phoneMatch = text.match(/(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/);
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  const ageMatch = text.match(/(\d{1,2})\s*(года|лет)/);
  const cityMatch = text.match(/(?:Место проживания|Проживает):\s*г\.\s*([^\n]+)/);

  console.log('Совпадения:', {
    fullNameMatch,
    phoneMatch,
    emailMatch,
    ageMatch,
    cityMatch,
  });

  if (fullNameMatch) data.fullName = fullNameMatch[1].trim();
  if (phoneMatch) data.phone = phoneMatch[0].trim();
  if (emailMatch) data.email = emailMatch[0].trim();
  if (ageMatch) data.age = parseInt(ageMatch[1], 10);
  if (cityMatch) data.city = cityMatch[1].trim();

  if (!data.fullName || !data.phone || !data.email) {
    return null;
  }

  return data;
}

module.exports = candidateRouter;
