function sendMessageToTelegram(message) {

    const botToken = '6138369370:AAGDaOxOBAvTJKEOjbiEMADypjqeBL8Okv0';

    const chatId = '775290589';    

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    const data = {
      chat_id: chatId,
      text: message,
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Сообщение успешно отправлено в Telegram:', result);
      })
      .catch(error => {
        console.error('Ошибка при отправке сообщения в Telegram:', error);
      });
  }

export default async function handler(req, res) {

    const body = req.body;


    if (!body.message ) {
      return res.status(400).json({ data: 'Сначала введите текст' })
    }
   try{
    await sendMessageToTelegram(body.message)
    
   }
   catch(e){
    console.error(e)
   }

    res.status(200).json({ data: 'Сообщение доставлено' })
  }
